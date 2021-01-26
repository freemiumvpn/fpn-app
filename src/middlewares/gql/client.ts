import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  split,
  HttpLink,
} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { ConnectionParams } from 'subscriptions-transport-ws'

import { getEnvVars } from '../../env'
import {
  localStorageContext,
  LocalStorageKey,
} from '../localStorage/localStorage'

const createGqlClient = (): ApolloClient<NormalizedCacheObject> => {
  const {
    gql: { url, webSocketUrl },
  } = getEnvVars()

  const httpLink = new HttpLink({
    uri: url,
  })

  const wsLink = new WebSocketLink({
    uri: webSocketUrl,
    options: {
      reconnect: true,
      connectionParams: (): ConnectionParams => {
        const token = localStorageContext.get(LocalStorageKey.ACCESS_TOKEN)

        return {
          req: {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        }
      },
    },
  })

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink
  )
  return new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  })
}

/**
 * The GQL client is a singleton
 */
const gqlClient = createGqlClient()

export default gqlClient

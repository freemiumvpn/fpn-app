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
import { setContext } from '@apollo/client/link/context'

import { getEnvVars } from '../../env'
import {
  localStorageContext,
  LocalStorageKey,
} from '../localStorage/localStorage'

import { createRequestHeaders } from './utils/createRequestHeaders'

const createGqlClient = (): ApolloClient<NormalizedCacheObject> => {
  const {
    gql: { url, webSocketUrl },
  } = getEnvVars()

  const httpLink = new HttpLink({
    uri: url,
  })

  const authLink = setContext(() => {
    const token = localStorageContext.get(LocalStorageKey.ACCESS_TOKEN)

    return {
      headers: createRequestHeaders(token),
    }
  })

  const wsLink = new WebSocketLink({
    uri: webSocketUrl,
    options: {
      reconnect: true,
      connectionParams: (): ConnectionParams => {
        const token = localStorageContext.get(LocalStorageKey.ACCESS_TOKEN)

        return createRequestHeaders(token)
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
    authLink.concat(httpLink)
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

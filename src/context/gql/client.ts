import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

import { getEnvVars } from '../../env'

const createGqlClient = (): ApolloClient<NormalizedCacheObject> => {
  const {
    gql: { url },
  } = getEnvVars()

  return new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
  })
}

/**
 * The GQL client is a singleton
 */
const gqlClient = createGqlClient()

export default gqlClient

import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

import gqlClient from './client'

interface GqlContext {
  client: ApolloClient<NormalizedCacheObject>
}

const createGqlContext = (): GqlContext => {
  return {
    client: gqlClient,
  }
}

export default createGqlContext

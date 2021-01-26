import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

import gqlClient from '../../middlewares/gql/client'

interface GqlContext {
  client: ApolloClient<NormalizedCacheObject>
}

const createGqlContext = (): GqlContext => {
  return {
    client: gqlClient,
  }
}

export { GqlContext, createGqlContext as default }

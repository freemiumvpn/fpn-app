import { ApolloError } from '@apollo/client'

import { User, useUserQuery } from '../../../generated/graphql/schema.graphql'

interface UseUser {
  user: User | null
  error: ApolloError | undefined
  loading: boolean
}

const useUser = (userId: string, skip: boolean): UseUser => {
  const { data, loading, error } = useUserQuery({
    variables: {
      userId,
    },
    skip: skip || !userId,
  })

  return {
    user: data?.user || null,
    loading,
    error,
  }
}

export { useUser }

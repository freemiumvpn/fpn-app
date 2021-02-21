import { ApolloError } from '@apollo/client'

import { useVpnSignedUrlQuery } from '../../../generated/graphql/schema.graphql'

interface UseVpnSignedUrl {
  data: string
  error: ApolloError | undefined
  loading: boolean
}

const useVpnSignedUrl = (token: string): UseVpnSignedUrl => {
  const { data, error, loading } = useVpnSignedUrlQuery({ skip: !token })

  return {
    data: data?.vpnSignedUrl || '',
    error,
    loading,
  }
}

export { useVpnSignedUrl }

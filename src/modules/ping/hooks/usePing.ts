import { ApolloError, gql, useQuery } from '@apollo/client'
import { useContext } from 'react'

import Context from '../../../context/Context'
import { ErrorType } from '../../../context/error/createErrorContext'

const PING = gql`
  query test {
    ping
  }
`

interface UsePing {
  data: string
  error: ApolloError | undefined
  loading: boolean
  status: PingStatus
}

export enum PingStatus {
  NONE,
  ERROR,
  LOADING,
  SUCCESS,
}

const usePing = (): UsePing => {
  const {
    error: { error$ },
  } = useContext(Context)

  const { loading, data, error } = useQuery(PING)

  let status = PingStatus.NONE
  if (loading) {
    status = PingStatus.LOADING
  }

  if (error) {
    status = PingStatus.ERROR
    error$.next({
      type: ErrorType.GQL_QUERY_PING,
      data: error,
    })
  }

  let dataValue = ''
  if (data) {
    status = PingStatus.SUCCESS
    dataValue = data.ping || ''
  }

  return {
    data: dataValue,
    error,
    loading,
    status,
  }
}

export default usePing

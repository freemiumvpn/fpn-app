import { ApolloError } from '@apollo/client'
import { useContext } from 'react'

import { ErrorType } from '../../../middlewares/error/ErrorType'
import {
  Ping,
  usePingSubscription,
} from '../../../generated/graphql/schema.graphql'
import { AppContext } from '../../../context/Context'

export enum PingStatus {
  NONE,
  ERROR,
  LOADING,
  SUCCESS,
}

interface UsePing {
  data: Ping | null
  error: ApolloError | undefined
  loading: boolean
  status: PingStatus
}

const usePing = (): UsePing => {
  const {
    error: { error$ },
  } = useContext(AppContext)

  const { loading, data, error } = usePingSubscription({
    variables: {
      minutes: 1,
    },
  })

  let status = PingStatus.NONE
  if (loading) {
    status = PingStatus.LOADING
  }

  if (error) {
    status = PingStatus.ERROR
    error$.next({
      type: ErrorType.GQL_QUERY_PING,
      source: error,
    })
  }

  if (data) {
    status = PingStatus.SUCCESS
  }

  return {
    error,
    loading,
    status,
    data: data ? data.ping : null,
  }
}

export default usePing

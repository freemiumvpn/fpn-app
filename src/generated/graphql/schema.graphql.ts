import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Ping = {
  __typename?: 'Ping';
  date: Scalars['String'];
  message: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  ping: Ping;
  vpnSignedUrl: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  ping: Ping;
};


export type SubscriptionPingArgs = {
  minutes: Scalars['Int'];
};

export enum VpnSessionStatus {
  None = 'NONE',
  CreateRequestSent = 'CREATE_REQUEST_SENT',
  CreateRequestAcknowledged = 'CREATE_REQUEST_ACKNOWLEDGED',
  CreateRequestApproved = 'CREATE_REQUEST_APPROVED',
  CreateRequestDenied = 'CREATE_REQUEST_DENIED',
  CreateRequestError = 'CREATE_REQUEST_ERROR',
  ConnectRequestSent = 'CONNECT_REQUEST_SENT',
  ConnectRequestAcknowledged = 'CONNECT_REQUEST_ACKNOWLEDGED',
  ConnectRequestApproved = 'CONNECT_REQUEST_APPROVED',
  ConnectRequestDenied = 'CONNECT_REQUEST_DENIED',
  ConnectRequestError = 'CONNECT_REQUEST_ERROR',
  DisconnectRequestSent = 'DISCONNECT_REQUEST_SENT',
  DisconnectRequestAcknowledged = 'DISCONNECT_REQUEST_ACKNOWLEDGED',
  DisconnectRequestApproved = 'DISCONNECT_REQUEST_APPROVED',
  DisconnectRequestDenied = 'DISCONNECT_REQUEST_DENIED',
  DisconnectRequestError = 'DISCONNECT_REQUEST_ERROR',
  DeleteRequestSent = 'DELETE_REQUEST_SENT',
  DeleteRequestAcknowledged = 'DELETE_REQUEST_ACKNOWLEDGED',
  DeleteRequestApproved = 'DELETE_REQUEST_APPROVED',
  DeleteRequestDenied = 'DELETE_REQUEST_DENIED',
  DeleteRequestError = 'DELETE_REQUEST_ERROR',
  Idle = 'IDLE',
  Connected = 'CONNECTED',
  Disconnected = 'DISCONNECTED',
  Error = 'ERROR'
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type PingSubscriptionVariables = Exact<{
  minutes: Scalars['Int'];
}>;


export type PingSubscription = (
  { __typename?: 'Subscription' }
  & { ping: (
    { __typename?: 'Ping' }
    & Pick<Ping, 'date' | 'message'>
  ) }
);

export type VpnSignedUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type VpnSignedUrlQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'vpnSignedUrl'>
);


export const PingDocument = gql`
    subscription ping($minutes: Int!) {
  ping(minutes: $minutes) {
    date
    message
  }
}
    `;

/**
 * __usePingSubscription__
 *
 * To run a query within a React component, call `usePingSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePingSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePingSubscription({
 *   variables: {
 *      minutes: // value for 'minutes'
 *   },
 * });
 */
export function usePingSubscription(baseOptions: Apollo.SubscriptionHookOptions<PingSubscription, PingSubscriptionVariables>) {
        return Apollo.useSubscription<PingSubscription, PingSubscriptionVariables>(PingDocument, baseOptions);
      }
export type PingSubscriptionHookResult = ReturnType<typeof usePingSubscription>;
export type PingSubscriptionResult = Apollo.SubscriptionResult<PingSubscription>;
export const VpnSignedUrlDocument = gql`
    query vpnSignedUrl {
  vpnSignedUrl
}
    `;

/**
 * __useVpnSignedUrlQuery__
 *
 * To run a query within a React component, call `useVpnSignedUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useVpnSignedUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVpnSignedUrlQuery({
 *   variables: {
 *   },
 * });
 */
export function useVpnSignedUrlQuery(baseOptions?: Apollo.QueryHookOptions<VpnSignedUrlQuery, VpnSignedUrlQueryVariables>) {
        return Apollo.useQuery<VpnSignedUrlQuery, VpnSignedUrlQueryVariables>(VpnSignedUrlDocument, baseOptions);
      }
export function useVpnSignedUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VpnSignedUrlQuery, VpnSignedUrlQueryVariables>) {
          return Apollo.useLazyQuery<VpnSignedUrlQuery, VpnSignedUrlQueryVariables>(VpnSignedUrlDocument, baseOptions);
        }
export type VpnSignedUrlQueryHookResult = ReturnType<typeof useVpnSignedUrlQuery>;
export type VpnSignedUrlLazyQueryHookResult = ReturnType<typeof useVpnSignedUrlLazyQuery>;
export type VpnSignedUrlQueryResult = Apollo.QueryResult<VpnSignedUrlQuery, VpnSignedUrlQueryVariables>;
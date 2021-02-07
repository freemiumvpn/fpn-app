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
};

export type Subscription = {
  __typename?: 'Subscription';
  ping: Ping;
  vpn: VpnSession;
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

export type VpnSession = {
  __typename?: 'VpnSession';
  id: Scalars['String'];
  status: VpnSessionStatus;
};

export type Mutation = {
  __typename?: 'Mutation';
  vpnCreateSession: VpnCreateSessionResponse;
  vpnDeleteSession: VpnDeleteSessionResponse;
};


export type MutationVpnCreateSessionArgs = {
  request: VpnCreateSessionRequest;
};


export type MutationVpnDeleteSessionArgs = {
  request: VpnDeleteSessionRequest;
};

export type VpnCreateSessionRequest = {
  userId: Scalars['String'];
};

export type VpnCreateSessionResponse = {
  __typename?: 'VpnCreateSessionResponse';
  credentials: Scalars['String'];
  status: VpnSessionStatus;
};

export type VpnDeleteSessionRequest = {
  userId: Scalars['String'];
};

export type VpnDeleteSessionResponse = {
  __typename?: 'VpnDeleteSessionResponse';
  status: VpnSessionStatus;
};

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

export type VpnCreateSessionMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type VpnCreateSessionMutation = (
  { __typename?: 'Mutation' }
  & { vpnCreateSession: (
    { __typename?: 'VpnCreateSessionResponse' }
    & Pick<VpnCreateSessionResponse, 'credentials' | 'status'>
  ) }
);

export type VpnDeleteSessionMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type VpnDeleteSessionMutation = (
  { __typename?: 'Mutation' }
  & { vpnDeleteSession: (
    { __typename?: 'VpnDeleteSessionResponse' }
    & Pick<VpnDeleteSessionResponse, 'status'>
  ) }
);

export type VpnSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type VpnSubscription = (
  { __typename?: 'Subscription' }
  & { vpn: (
    { __typename?: 'VpnSession' }
    & Pick<VpnSession, 'id' | 'status'>
  ) }
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
export const VpnCreateSessionDocument = gql`
    mutation vpnCreateSession($userId: String!) {
  vpnCreateSession(request: {userId: $userId}) {
    credentials
    status
  }
}
    `;
export type VpnCreateSessionMutationFn = Apollo.MutationFunction<VpnCreateSessionMutation, VpnCreateSessionMutationVariables>;

/**
 * __useVpnCreateSessionMutation__
 *
 * To run a mutation, you first call `useVpnCreateSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVpnCreateSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vpnCreateSessionMutation, { data, loading, error }] = useVpnCreateSessionMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useVpnCreateSessionMutation(baseOptions?: Apollo.MutationHookOptions<VpnCreateSessionMutation, VpnCreateSessionMutationVariables>) {
        return Apollo.useMutation<VpnCreateSessionMutation, VpnCreateSessionMutationVariables>(VpnCreateSessionDocument, baseOptions);
      }
export type VpnCreateSessionMutationHookResult = ReturnType<typeof useVpnCreateSessionMutation>;
export type VpnCreateSessionMutationResult = Apollo.MutationResult<VpnCreateSessionMutation>;
export type VpnCreateSessionMutationOptions = Apollo.BaseMutationOptions<VpnCreateSessionMutation, VpnCreateSessionMutationVariables>;
export const VpnDeleteSessionDocument = gql`
    mutation vpnDeleteSession($userId: String!) {
  vpnDeleteSession(request: {userId: $userId}) {
    status
  }
}
    `;
export type VpnDeleteSessionMutationFn = Apollo.MutationFunction<VpnDeleteSessionMutation, VpnDeleteSessionMutationVariables>;

/**
 * __useVpnDeleteSessionMutation__
 *
 * To run a mutation, you first call `useVpnDeleteSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVpnDeleteSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vpnDeleteSessionMutation, { data, loading, error }] = useVpnDeleteSessionMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useVpnDeleteSessionMutation(baseOptions?: Apollo.MutationHookOptions<VpnDeleteSessionMutation, VpnDeleteSessionMutationVariables>) {
        return Apollo.useMutation<VpnDeleteSessionMutation, VpnDeleteSessionMutationVariables>(VpnDeleteSessionDocument, baseOptions);
      }
export type VpnDeleteSessionMutationHookResult = ReturnType<typeof useVpnDeleteSessionMutation>;
export type VpnDeleteSessionMutationResult = Apollo.MutationResult<VpnDeleteSessionMutation>;
export type VpnDeleteSessionMutationOptions = Apollo.BaseMutationOptions<VpnDeleteSessionMutation, VpnDeleteSessionMutationVariables>;
export const VpnDocument = gql`
    subscription vpn {
  vpn {
    id
    status
  }
}
    `;

/**
 * __useVpnSubscription__
 *
 * To run a query within a React component, call `useVpnSubscription` and pass it any options that fit your needs.
 * When your component renders, `useVpnSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVpnSubscription({
 *   variables: {
 *   },
 * });
 */
export function useVpnSubscription(baseOptions?: Apollo.SubscriptionHookOptions<VpnSubscription, VpnSubscriptionVariables>) {
        return Apollo.useSubscription<VpnSubscription, VpnSubscriptionVariables>(VpnDocument, baseOptions);
      }
export type VpnSubscriptionHookResult = ReturnType<typeof useVpnSubscription>;
export type VpnSubscriptionResult = Apollo.SubscriptionResult<VpnSubscription>;
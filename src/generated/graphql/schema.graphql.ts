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
};


export type SubscriptionPingArgs = {
  minutes: Scalars['Int'];
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
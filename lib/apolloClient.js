import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useUser } from '@clerk/clerk-react'

const hasuraGraphqlApi = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API;

export const ApolloProviderWrapper = ({ children }) => {
  const user = useUser();
  const authMiddleware = setContext(async (req, { headers }) => {
    const token = await user.getToken("hasura");
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });

  const httpLink = new HttpLink({
    uri: hasuraGraphqlApi,
  });

  const apolloClient = new ApolloClient({
    link: from([authMiddleware, httpLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            project: {
              merge: true,
            },
          },
        },
      },
    }),
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

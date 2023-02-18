import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const tokenDef =
  "e713a40e1f9148557dcc75cd691dc114ebfb7162e5d88a85d944fd0e25e81eb7fb0b20eecddb468767c8861ff8efbf1875b0763bb0622adbb1cbd21241dbb97a56db39c3bcb87cd23bdceaed7adcbf2cb87a5e6cf0b57c3b641bf44c96a1bb0c4051b78ae68e5684a7cda476e21c1012526331ff046b28c3780018a39a04f79d";

const httpLink = createHttpLink({
  uri: "http://127.0.0.1:6010/graphql",
  // credentials: "include",
  // credentials: "same-origin",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token") || tokenDef;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { ApolloProvider } from "@apollo/client";
import client from "@/hooks/apolloClient";

const App = dynamic(() => import("../admin/AppPg"), { ssr: false });

const Home: NextPage = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default Home;

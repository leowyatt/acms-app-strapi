import { Admin, Resource, fetchUtils } from "react-admin";
import strapiRestProvider from "../dataProvider/simpleRestProvider";

import { PostList, PostEdit, PostCreate } from "@/components/posts";

import { tokenDef } from "@/hooks/apolloClient";

localStorage.setItem("token", tokenDef);

const App = () => {
  const httpClient = (url: string, options: any = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: "application/json" });
    }
    const token = localStorage.getItem("token");

    options.headers.set("Authorization", `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
  };

  const dataProvider = strapiRestProvider("http://localhost:6010/api", httpClient);

  return (
    dataProvider && (
      <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
      </Admin>
    )
  );
};

export default App;

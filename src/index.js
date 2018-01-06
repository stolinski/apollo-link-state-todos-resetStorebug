import React from "react";
import { render } from "react-dom";
import { ApolloClient } from "apollo-client";
import { withClientState } from "apollo-link-state";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import merge from "lodash.merge";

import App from "./components/App";
import todos from "./resolvers/todos";
import visibilityFilter from "./resolvers/visibilityFilter";

const cache = new InMemoryCache();

const stateLink = withClientState({ ...merge(todos, visibilityFilter), cache });

const client = new ApolloClient({
  cache,
  link: stateLink
});

client.onResetStore(stateLink.writeDefaults);

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

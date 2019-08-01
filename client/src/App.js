import React from "react";
import "./App.css";

import { ApolloProvider, Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";
import PeopleList from "./PeopleList";
import NewPersonForm from "./NewPersonForm";

const client = new ApolloClient({
  uri: "http://localhost:3000/"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>My GraphQL App</h1>

        <PeopleList />
        <NewPersonForm />
      </div>
    </ApolloProvider>
  );
}

export default App;

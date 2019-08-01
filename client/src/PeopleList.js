import React from "react";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const ALL_PERSONS_QUERY = gql`
  query{
    allPersons {
      _id
      name
      age
    }
  }
`
export default function PeopleList() {
  return (
    <>
      <h3>Person List</h3>
      <ul>
        <Query query={ALL_PERSONS_QUERY}>
          {(info) => {
            if (info.loading)
              return <li>loading...</li>
            return info.data.allPersons.map(person => <li>person.name</li>)
          }}
        </Query>

        <li>Jordan | age=30</li>
      </ul>
    </>
  );
}

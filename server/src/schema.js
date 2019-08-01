const { gql } = require("apollo-server");

const typeDefs = gql`
  type Person {
    _id: ID!
    name: String!
    age: Int!
    posts: [Post!]!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: Person!
  }

  type Query {
    allPersons: [Person!]!

    Person(id: ID!): Person

    Post(id: ID!): Post
  }

  type Mutation {
    createPerson(name: String!, age: Int!): Person

    createPost(title: String!, content: String!, author: ID!): Post
  }
`;

module.exports = typeDefs;

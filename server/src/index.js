const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, function(err) {
  if (!err) {
    console.log("mongo connection successful");
  }
});

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  }
});

server
  .listen({ port: 4000 })
  .then(({ url }) => console.log(`🚀 app running at ${url}`));

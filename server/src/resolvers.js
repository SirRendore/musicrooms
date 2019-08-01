const Person = require("./models/person");
const Post = require("./models/post");

module.exports = {
  Query: {
    allPersons: async (parent, {}, { dataSources }) => {
      const people = await Person.find();

      const peoplePromises = people.map(async person => {
        return {
          ...person.toObject(),
          posts: await Post.find({ author: person._id })
        };
      });

      return Promise.all(peoplePromises);
    },
    Person: async (parent, { id }, { dataSources }) => {
      const person = await Person.findById(id);
      if (!person) {
        return null;
      }

      return {
        ...person.toObject(),
        posts: await Post.find({ author: person._id })
      };
    },
    Post: async (parent, { id }, { dataSources }) => {
      const post = await Post.findById(id);
      if (!post) {
        return null;
      }

      return post.toObject();
    }
  },
  Mutation: {
    createPerson: async (parent, { name, age }, { dataSources }) => {
      const person = new Person({ name, age });
      return await person.save();
    },

    createPost: async (parent, { title, content, author }, { dataSources }) => {
      const post = new Post({ title, content, author });
      const savedPost = await post.save();
      return {
        ...savedPost.toObject(),
        author: Person.findById(savedPost.author)
      }
    }
  }
};

"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a = require("apollo-server"), ApolloServer = _a.ApolloServer, gql = _a.gql;
var typeDefs = gql(__makeTemplateObject(["\n  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.\n\n  # This \"Book\" type defines the queryable fields for every book in our data source.\n  type Book {\n    title: String\n    author: String\n  }\n\n  # The \"Query\" type is special: it lists all of the available queries that\n  # clients can execute, along with the return type for each. In this\n  # case, the \"books\" query returns an array of zero or more Books (defined above).\n  type Query {\n    books: [Book]\n  }\n"], ["\n  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.\n\n  # This \"Book\" type defines the queryable fields for every book in our data source.\n  type Book {\n    title: String\n    author: String\n  }\n\n  # The \"Query\" type is special: it lists all of the available queries that\n  # clients can execute, along with the return type for each. In this\n  # case, the \"books\" query returns an array of zero or more Books (defined above).\n  type Query {\n    books: [Book]\n  }\n"]));
var books = [
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling"
    },
    {
        title: "Jurassic Park",
        author: "Michael Crichton"
    }
];
var resolvers = {
    Query: {
        books: function () { return books; }
    }
};
var server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});

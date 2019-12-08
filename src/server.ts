import { ApolloServer } from "apollo-server-express";
import express from "express";
import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";

import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import { config } from "./config";
import { parseToken, Auth0TokenInput } from "./models";

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: config.auth0.jwksUri,
  }),
  audience: config.auth0.audience,
  issuer: config.auth0.issuer,
  algorithms: ["RS256"],
  credentialsRequired: false,
});

type Context = (params: { req: { user?: Auth0TokenInput } }) => object;
const context: Context = ({ req: { user } }): object => ({ user: user && parseToken(user) });

const app = express();
app.use(checkJwt);

const server = new ApolloServer({ typeDefs, resolvers, context });
server.applyMiddleware({ app });

app.listen({ port: config.server.port }, () =>
  console.log(`🚀 Server ready at ${config.server.host}:${config.server.port}${server.graphqlPath}`),
);

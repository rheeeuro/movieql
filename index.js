import { GraphQlServer } from "graphql-yoga";

const server = new GraphQlServer({});

server.start(() => console.log("Grapgql Server Running"));

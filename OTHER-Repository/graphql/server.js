var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!server' };

var app = express();
// app.use('/graphql', (req,res)=> {
//     console.log(req)
// });
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
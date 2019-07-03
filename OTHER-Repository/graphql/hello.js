// var request = require("request-promise-native");

// var options = {
//     method: 'get',
//     uri: 'http://localhost:4000/graphql',
//     qs: {
//         hello: 'aaa'
//     },
//     json: true // Automatically stringifies the body to JSON
// };
// request(options)
//     .then(res => console.log("res", res))
//     .catch(err => console.log("err", err.response.body));
// import { request } from 'graphql-request'
const { request } = require("graphql-request");

const query = `{
  hell
}`;

request("http://localhost:4000/graphql", query)
    .then(data => console.log(data))
    .catch(res => console.log(res));

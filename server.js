const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const Const = require('./consts');

const app = express();

console.log('const here: ', Const.DEV);
// To production its a good idea set graphiql to false
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port  ${PORT}`));


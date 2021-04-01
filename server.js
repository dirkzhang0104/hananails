const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');
const PORT = 3000;
const server = express();

// apply middleware
server.use(morgan('dev'));
server.use(cors());
server.use(bodyparser.json());

server.use(express.static(path.join(__dirname, './client/dist')));

// start server, by running npm run build
server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
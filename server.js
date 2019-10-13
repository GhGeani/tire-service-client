const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const cors = require('cors');

app = express();
app.use(serveStatic(`${__dirname}/dist`));
app.use(cors());
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`server started ${port}`);

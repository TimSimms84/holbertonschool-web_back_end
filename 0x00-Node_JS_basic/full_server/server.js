// Create a small Express server:

// It should use the routes defined in full_server/routes/index.js
// It should use the port 1245

import express from 'express';

const routes = require('./routes/index');

const app = express();

app.use(routes);

app.listen(1245);

export default app;

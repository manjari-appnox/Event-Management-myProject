import http from 'http';
import expressServer from './server';
import express from "express"
import { returnError } from './utils/errorHandler';
import connectDB from './config/mongoDb';
import { logger } from './utils/logger';


const app =express();
connectDB();

// Normalize port number which will expose server
const port = normalizePort(8082);

// Instantiate the expressServer class
const expressInstance = new expressServer().expressInstance;

// Make port available within server
expressInstance.set('port', port);
expressInstance.get('/', (req:any, res:any) => {
  res.send('API Running');
});

// Create the HTTP Express Server
export const server = http.createServer(expressInstance);

app.use(returnError);

// Start listening on the specified Port (Default: 3000)
server.listen(port, () => {
    logger.info(`listening on port ${port}`);
});


// Port Normalization
function normalizePort(val: number | string): number | string | boolean {
  const port: number = typeof val === 'string' ? parseInt(val, 10) : val;
  if (isNaN(port)) {
      return val;
  } else if (port >= 0) {
      return port;
  } else {
      return false;
  }
}

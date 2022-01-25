import { createProxyMiddleware } from 'http-proxy-middleware';
import express from 'express';

var app = express();
const port = process.env.PORT || 3002;

var apiProxy = createProxyMiddleware('/api', { target: 'http://localhost:3000' });
var frontendProxy = createProxyMiddleware('/', { target: 'http://localhost:3001' });

app.use(apiProxy);
app.use(frontendProxy);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
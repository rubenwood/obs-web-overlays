import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { WebSocketServer } from 'ws';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.static(path.join(__dirname, '..', 'dist')));

const server = createServer(app);
const wss = new WebSocketServer({ server });

let state = { text: 'Count', value: 0 };

wss.on('connection', (ws) => {
    ws.send(JSON.stringify(state));

    ws.on('message', (data) => {
        state = { ...state, ...JSON.parse(data) };
        for(const client of wss.clients) {
            if (client.readyState === 1) {
                client.send(JSON.stringify(state));
            }
        }
    });
});

server.listen(process.env.PORT || 8080);
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
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


import {useEffect, useState, useRef } from 'react'

type SharedState = { text: string; value: number }

export function useSharedState() {
    const [state, setState] = useState<SharedState>({ text: '', value: 0 })
    const ws = useRef<WebSocket | null>(null)

    useEffect(() => {
        let mySocket: WebSocket;
        let timer: number;

        const connect = () => {
            const url = import.meta.env.VITE_WS_URL ?? `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}`;

            mySocket = new WebSocket(url);
            ws.current = mySocket;
            mySocket.onmessage = (event) => {
                setState(JSON.parse(event.data));
            }
            mySocket.onclose = () => {
                console.log('WebSocket closed. Reconnecting in 1 second...');
                timer = window.setTimeout(connect, 1000);
            }
        }

        connect();

        return () => {
            clearTimeout(timer);
            mySocket.onclose = null;
            mySocket.close();
        }
    }, []);

    const update = (patch: Partial<SharedState>) => {
        ws.current?.send(JSON.stringify(patch));
    };

    return [state, update] as const;

}
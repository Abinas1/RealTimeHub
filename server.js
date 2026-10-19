import http from 'node:http'
import {WebSocketServer} from 'ws';
import fs from 'node:fs/promises'
import path from 'path';
import {redisPublish, redisSubscribe} from './connection.js';


const REDIS_CHANNEL = "ws-messages";
const PORT = process.env.PORT ?? 9000;

const httpServer = http.createServer(async function (req,res){
    const indexFile = await fs.readFile(path.resolve('./index.html'), 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    return res.end(indexFile);
});

redisSubscribe.subscribe(REDIS_CHANNEL);
redisSubscribe.on('message', (channel,message) =>{
    if (channel === REDIS_CHANNEL) {
        wsServer.clients.forEach(client =>{
            client.send(message.toString());
        })
    }
})
const wsServer = new WebSocketServer({server : httpServer});

wsServer.on(`connection`, (websocket) => {
    console.log(`websocket Connection..`);
    websocket.on(`message`, async (data) => {
        //Relay the message to the broker
        console.log(`Relaying message on redis broker..`);
        await redisPublish.publish(REDIS_CHANNEL,data.toString());
    }) 
})

httpServer.listen(PORT, ()=> {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
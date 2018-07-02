const net = require('net')
const url = require('url')

for (let i = 0; i < 10000; i++) {
    makeSocket()
}

let tcpActive = 0
let tcpClosed = 0
let tcpError = 0

function printInfo() {
    console.log(`active: ${tcpActive}, closed: ${tcpClosed}, error: ${tcpError}`)
}

function makeSocket() {
    const socket = net.createConnection(80, 'baidu.com')

    socket.on('connect', () => {
        tcpActive += 1
        printInfo()
    })

    socket.on('data', (data) => {
        console.log(data.toString());
    })

    socket.on('close', (hadError) => {
        if (!hadError) {
            tcpActive -= 1
            tcpClosed += 1
        }
        // printInfo()
    })

    socket.on('error', (err) => {
        tcpError += 1
        printInfo()
    })
}
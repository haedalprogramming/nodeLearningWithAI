const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("안녕하세요, Node.js로 만든 웹 서버 입니다!");
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
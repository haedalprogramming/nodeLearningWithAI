const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// EJS를 뷰 엔진으로 설정
app.set('view engine', 'ejs');

// Body-parser 설정
app.use(bodyParser.urlencoded({ extended: true }));

// 게시글 데이터를 저장할 배열
let posts = [];

// 루트 경로에서 게시글 목록 표시
app.get('/', (req, res) => {
    res.render('index', { posts });
});

// 게시글 작성 폼 표시
app.get('/new', (req, res) => {
    res.render('new');
});

// 게시글 작성 처리
app.post('/create', (req, res) => {
    const { title, content } = req.body;
    const newPost = { title, content, date: new Date().toLocaleString() };
    posts.push(newPost);
    res.redirect('/');
});

// 서버 실행
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
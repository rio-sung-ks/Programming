const express = require('express');
const fetchData = require('./db-sync');  // Node.js에서 데이터를 가져오는 모듈

const app = express();
const port = 3000;

app.get('/api/data', async (req, res) => {
    try {
        const data = await fetchData();  // 데이터를 가져옴
        res.json(data);  // 데이터를 JSON 형식으로 클라이언트에 반환
        console.log(data)
    } catch (error) {
        res.status(500).json({ error: "Error fetching data" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


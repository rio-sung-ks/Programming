const express = require('express');
const fetchData = require('./db-sync');  // Node.js에서 데이터를 가져오는 모듈
const cors = require('cors');
// ## 서버 통신을 위해서 cors 미들웨어 설치필요

const app = express();
const port = 3000;
app.use(cors());

app.get('/api/data', async (req, res) => {
    try {
        var factory = req.param('Factory');
        // var value = req.param('Value');
        const data = await fetchData();  // 데이터를 가져옴
        let result = [];
        for (const item of data) {
            result.push({Name: item[0], Value: item[1]});
        }
        res.json(result);  // 데이터를 JSON 형식으로 클라이언트에 반환
        console.log(result)
    } catch (error) {
        res.status(500).json({ error: "Error fetching data" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


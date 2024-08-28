
// const dataSet = require('./db');  // fetchData
const fetchData = require('../../Programming/CutLayout/db-sync');  // fetchData
var consoleIcon = require('/Users/rio/Documents/GitHub/UBI/NodeTest/vicon.js')

// console.log(`${consoleIcon} data : ${data}`);
// console.log(`${consoleIcon} fetchData : ${fetchData}`);

// console.log(data + consoleIcon );
// data.filter((r)=> r[0]==="성경식");

async function displayData() {
    try {
        const data = await fetchData();  // 데이터를 비동기적으로 가져옴
        console.log(`${consoleIcon} data : ${JSON.stringify(data)}`);  // 데이터를 문자열로 출력
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

displayData();
const oracledb = require('oracledb');
oracledb.initOracleClient({ libDir: '/Users/rio/Desktop/instantclient' });
const dbConfig = require('../dbConfig.js');

async function fetchData() {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: dbConfig.user,
            password: dbConfig.password,
            connectString: dbConfig.connectString
        });
        const result = await connection.execute("select NAME_KOR, LEFT_QUANTITY from V_DAY6_LISTAGG");
        return result.rows;  // 이제 여기서 결과 집합을 반환
    } catch (err) {
        console.error(`${consoleIcon} err : ${err.message}`);
        throw err;  // 오류 발생시 외부로 전달
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(">>> release error", err);
            }
        }
    }
}

module.exports = fetchData;  // fetchData 함수를 내보냄

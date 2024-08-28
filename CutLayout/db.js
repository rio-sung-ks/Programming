
var oracledb = require('oracledb');
oracledb.initOracleClient({ libDir: '/Users/rio/Desktop/instantclient' });


var consoleIcon = require('/Users/rio/Documents/GitHub/UBI/NodeTest/vicon.js')
var dbConfig = require('./dbConfig.js');


console.log(">>> dbConfig : " + dbConfig.user);
console.log(">>> dbConfig : " + dbConfig.password);
console.log(">>> dbConfig : " + dbConfig.connectString);

oracledb.getConnection({
    user:dbConfig.user,
    password:dbConfig.password,
    connectString:dbConfig.connectString
    },
   
    function (err,connection){
        if(err){
            console.log(`${consoleIcon} err : ${err.message}`);
            return;
        }
        console.log(">>> 연결 성공")
       

        var sql = "select NAME_KOR || ' - ' || QUANTITY from V_DAY6_LISTAGG ORDER BY NAME_KOR DESC";

        connection.execute(sql,[],function(err,result){
            if (err) {
                console.log("error" + err.message)
            }
            else {
                // console.log(result)
                console.log(result.rows)
            }            
            doRelease(connection);
        })
    }
);


async function doRelease(connection){
    connection.release(function(err){
        if(err){
            console.log(">>> release error")
        }
    })
}





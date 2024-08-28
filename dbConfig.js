// module.exports = 
// {
//     user: "UBASE",	
//     password: "PASSWORD",	
//     connectString: "Connect String"
// }

module.exports = {
  user          : process.env.NODE_ORACLEDB_USER || "ubase",
  password      : process.env.NODE_ORACLEDB_PASSWORD || "ubase",
  connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "ubtest01.ubaseinternational.com:1521/UBTEST01",
  externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};

// driver=oracle.jdbc.OracleDriver
// url=jdbc:oracle:thin:@218.50.166.157:1521:ubtest01

// username=ubase

// password=ubase
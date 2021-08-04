let mysql = require('mysql');
module.exports = class Connect{
    constructor(){
        // HOST DOMAIN
        this.host = 'localhost';
        this.portSERVER = 3000;
        // MONGO DB
        this.hostsql = 'localhost';
        this.user = 'root';
        this.password = '';
        this.database = 'qldoanv3';
    }
    //MONGO CONNECT
    async connectMongoDB (callback){
        let con = mysql.createConnection({
            host: this.hostsql,
            user: this.user,
            password: this.password,
            database: this.database,
          });
        con.connect(function(err) {
            if (err) throw err;
            else callback(con);
        });
    }
}
var fs = require('fs');
var initSqlJs = require('sql.js');
// var initSqlJs = require('sql-wasm.js')

let sqlPath = `Assets/db/sql.db`;
// exports.loadDB = function () {
//     if (isInited) {
//         return;
//     }
//     isInited = true;
//     var filebuffer = fs.readFileSync(sqlPath);
//     initSqlJs().then(SQL => {
//         db = new SQL.Database(filebuffer);
//         // var result = db.exec('SELECT * FROM TAGS');
//         // alert(result);
//     });
// }

// exports.saveDB = function () {
//     var buffer = Buffer.from(db.export(), 'binary');
//     fs.writeFile(sqlPath, buffer);
// };

// exports.execCmd = function (sql) {
//     return db.exec(sql);
// }

// exports.execSqlByStmt = function(sqlTmp, params){
//     let db = loadDB();
//     let stmt = db.prepare(sqlTmp);
//     let result = stmt.getAsObject(params);
//     stmt.free();
//     return result;
// }

// exports.execSqlCmd = function(sql){
//     let db = loadDB();
//     return db.exec(sql);
// }


module.exports.DbContext = function(){
    let isInited = false;
    let db;
    this.loadDB = function() {
        if (isInited) {
            return;
        }
        isInited = true;
        let filebuffer = fs.readFileSync(sqlPath);
        initSqlJs().then(SQL => {
            db = new SQL.Database(filebuffer);
        });
    };
    this.execSqlCmd = function(sql){
        return db.exec(sql);
    };
    this.execSqlByStmt = function(sqlTmp, params){
        let db = loadDB();
        let stmt = db.prepare(sqlTmp);
        let result = stmt.getAsObject(params);
        stmt.free();
        return result;
    };
    this.saveDB = function () {
        var buffer = Buffer.from(db.export(), 'binary');
        fs.writeFile(sqlPath, buffer);
    };
}
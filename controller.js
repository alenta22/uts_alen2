'use strict'

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan",res);
};

//menampilkan data sparepart
exports.tampildatasparepart = function(req,res){
    connection.query('SELECT * FROM t_sparepart', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    })
};

//menampilkan data montir
exports.tampildatamontir = function(req,res){
    connection.query('SELECT * FROM t_montir', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    })
};

//menampilkan data berdasarkan id
exports.tampildataidmontir = function(req,res){
    let id_montir = req.params.id_montir;
    connection.query('SELECT * FROM t_montir WHERE id_montir = ?', [id_montir],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};

//menampilkan data berdasarkan id
exports.tampildataidsparepart = function(req,res){
    let id_sparepart = req.params.id_sparepart;
    connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', [id_sparepart],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};

//post data di tabel montir
exports.tambahmontir = function(req , res){
    var id_montir = req.body.id_montir;
    var Nama_montir = req.body.Nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('INSERT INTO t_montir (id_montir,Nama_montir,harga_perjam) VALUES(?,?,?)',
    [id_montir,Nama_montir,harga_perjam],
    function (error, rows, fields)
    {
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil menambah data montir",res)
        }
    });
};

//post data di tabel sparepart
exports.tambahsparepart = function(req , res){
    var id_sparepart = req.body.id_sparepart;
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;

    connection.query('INSERT INTO t_sparepart (id_sparepart,nama_sparepart,harga_sparepart,satuan) VALUES(?,?,?,?)',
    [id_sparepart,nama_sparepart,harga_sparepart,satuan],
    function (error, rows, fields)
    {
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil menambah data sparepart",res)
        }
    });
};

//menambahkan data User
exports.tambahuser = function (req, res) {
    var id_user;
    var nama_user = req.body.nama_user;
    var email = req.body.email;
    var password = req.body.password;
    var level = req.body.level;
    

    connection.query('INSERT INTO t_user (id_user, nama_user, email, password, level) VALUES(?,?,?,?,?)',
        [id_user, nama_user, email, password, level], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data  User", res)
            }
        });
};
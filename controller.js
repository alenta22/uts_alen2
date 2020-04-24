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
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
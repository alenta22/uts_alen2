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

//menambahkan data level
exports.tambahlevel = function (req, res) {
    var id_level = req.body.id_level;
    var nama_level = req.body.nama_level;
    
    

    connection.query('INSERT INTO t_level (id_level, nama_level) VALUES(?,?)',
        [id_level, nama_level], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data Level", res)
            }
        });
};

//menambahkan data servis
exports.tambahservis = function (req, res) {
    var id_servis = req.body.id_servis;
    var tgl_servis = req.body.tgl_servis;
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;
    
    connection.query('INSERT INTO t_servis (id_servis, tgl_servis, id_user, id_montir, jumlah_sparepart, id_sparepart) VALUES(?,?,?,?,?,?)',
    [id_servis, tgl_servis, id_user, id_montir, jumlah_sparepart, id_sparepart], 
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Menambahkan Data Servis", res)
        }
        });
};

//mengubah data di tabel montir
exports.editmontir = function (req, res) {
    var id_montir = req.body.id_montir;
    var Nama_montir = req.body.Nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('UPDATE t_montir SET nama_montir=?, harga_perjam=? WHERE id_montir=?', 
    [id_montir, Nama_montir, harga_perjam,],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Ubah Data Montir", res)
            }
        });
};

//mengubah data Sparepart
exports.editsparepart = function (req, res) {
    var id_sparepart = req.body.id_sparepart;
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;
    

    connection.query('UPDATE t_sparepart SET nama_sparepart=?, harga_sparepart=?, satuan=? WHERE id_sparepart=?',
     [nama_sparepart, harga_sparepart, satuan, id_sparepart],
    function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data", res)
            }
        });
};

//Mengubah data User
exports.edituser = function (req, res) {
    var id_user = req.body.id_user;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;
    var tanggal_daftar = new Date();
    

    connection.query('UPDATE t_user SET username=?, email=?, password=?, role=?, tanggal_daftar=? WHERE id_user=?',
        [id_user, username, email, password, role, tanggal_daftar], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data", res)
            }
        });
};

//mengedit data level
exports.editlevel = function (req, res) {
    var id_level = req.body.id_level;
    var id_user = req.body.nama_level;
    var access_token = req.body.role;
    var ip_address = req.body.access_token;
    
    

    connection.query('UPDATE t_level SET id_user=?, access_token=?, ip_address=? WHERE id_level=?',
        [id_level,id_user,access_token,ip_address], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data", res)
            }
        });
};

//mengedit data service
exports.editservis = function (req, res) {
    var id_servis = req.body.id_service;
    var tgl_servis = new Date();
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;
    

    connection.query('UPDATE t_servis SET tgl_servis=?, id_user=?, id_montir=?, jumlah_sparepart=?, id_sparepart=? WHERE id_servis=?',
        [id_servis, tgl_servis, id_user, id_montir, jumlah_sparepart, id_sparepart], 
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Mengubah Data", res)
            }
        });
};

//Menghapus data berdasarkan id
exports.hapusMontir = function(req, res){
    var id = req.body.id_montir;
    connection.query('DELETE FROM t_montir WHERE id_montir=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res)
        }
    });
};

exports.hapusSparepart = function(req, res){
    var id = req.body.id_sparepart;
    connection.query('DELETE FROM t_sparepart WHERE id_sparepart=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res)
        }
    });
};

exports.hapusUSer = function(req, res){
    var id = req.body.id_user;
    connection.query('DELETE FROM t_user WHERE id_user=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res)
        }
    });
};

exports.hapusLevel = function(req, res){
    var id = req.body.id_level;
    connection.query('DELETE FROM t_level WHERE id_level=?', [id],
    function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res)
        }
    });
};
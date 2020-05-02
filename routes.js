'use strict';


module.exports = function(app){
    var jsonku = require('./controller');


    app.route('/')
    .get(jsonku.index);

    app.route('/tampilsparepart')
    .get(jsonku.tampildatasparepart);

    app.route('/tampilmontir')
    .get(jsonku.tampildatamontir)

    app.route('/tampil/:id_montir')
    .get(jsonku.tampildataidmontir)

    app.route('/tampilsparepartid/:id_sparepart')
    .get(jsonku.tampildataidsparepart)

    app.route('/tambahdatamontir')
    .post(jsonku.tambahmontir)

    app.route('/tambahdatasparepart')
    .post(jsonku.tambahsparepart)

    app.route('/tambahdatauser')
    .post(jsonku.tambahuser)

    app.route('/tambahdatalevel')
    .post(jsonku.tambahlevel)

    app.route('/tambahdataservis')
    .post(jsonku.tambahservis)

    app.route('/editdatamontir')
    .put(jsonku.editmontir)

    app.route('/editdatasparepart')
    .put(jsonku.editsparepart);

    app.route('/editdatauser')
    .put(jsonku.edituser);

    app.route('/editdatalevel')
    .put(jsonku.editlevel);

    app.route('/editdataservis')
    .put(jsonku.editservis);

    app.route('/hapusmontir')
    .delete(jsonku.hapusMontir);

    app.route('/hapussparepart')
    .delete(jsonku.hapusSparepart);

    app.route('/hapususer')
    .delete(jsonku.hapusUSer);

    app.route('/hapuslevel')
    .delete(jsonku.hapusLevel);

}
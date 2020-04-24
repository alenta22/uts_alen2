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
}
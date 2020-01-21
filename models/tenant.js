var mongoose = require('mongoose');
var Schema = mongoose.Schema;

tenantSchema = new Schema( {
	email: String,
	username: String,
	password: String,
	passwordConf: String
}),
Tenant = mongoose.model('Tenant', tenantSchema);

module.exports =Tenant;
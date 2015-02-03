// Authentication, login, logout, etc...
exports.register = function(server, options, next){

    next();

}

exports.register.attributes = {
    name: 'auth'
};
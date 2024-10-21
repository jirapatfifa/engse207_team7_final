var dbconfig = {
    development: {
        server: 'host.docker.internal',
        database:'team7_web_labDB',
        user:'sa',
        password:'P@ssw0rd',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  'localhost'  // SQL Server instance name
        }
    },
    production: {
        server: 'host.docker.internal',
        database:'team7_web_labDB',
        user:'sa',
        password:'P@ssw0rd',
        port: 1433,
        options:{
            encript: true,
            setTimeout: 12000,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedconnection:  true,
            instancename:  'localhost'  // SQL Server instance name
        }
    },

};
module.exports = dbconfig;

var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
    name: 'Monitoreo SENEAM - Alarmas',
    description: 'Monitoreo de Alarma',
    script: 'C:\\xampp\\htdocs\\nodeService\\app.js'
    // nodeOptions: [
    //     '--harmony',
    //     '--max_old_space_size=4096'
    // ]
});

svc.on('install', function () {
    svc.start();
});
svc.uninstall();
var conn = require('./mysql-module');
let log = require('./log');
const notify = require('./notifications-module');
//Arreglo para simular lectura de arduino, en prod se llama losdatos[]
var query;
var cont = 1;

setInterval(() => {
    dateTime = new Date;
    conn.openMysqlConn();
    tmpquery = setValues();
    // console.log(tmpquery);
    var res = conn.MysqlSet(tmpquery).then((result) => {
        // console.log(result);
        setArray();
        let alerts = notify.validate(query);
        notify.generate(alerts).then(res => {
            if (res != null) {
                console.log(res)
            }
        });
        console.log(alerts);
        // validate();
        log.saveData(dateTime, regtime + " Registro almacenado con ID:" + result.insertId, "RegsLog");
        console.log("Registro almacenado con ID:" + result.insertId);
    });
}, 15000);

function setArray() {
    query = [regtime, 1, VoltL1, AmpL1, WattsL1, KwHL1, FpL1, HzL1, VoltL2, AmpL2, WattsL2, KwHL2, FpL2, HzL2, VoltL3, AmpL3, WattsL3, KwHL3, FpL3, HzL3, VoltL4, AmpL4, WattsL4, KwHL4, FpL4, HzL4,
        VoltL5, AmpL5, WattsL5, KwHL5, FpL5, HzL5, VoltL6, AmpL6, WattsL6, KwHL6, FpL6, HzL6, VoltL7, AmpL7, WattsL7, KwHL7, FpL7, HzL7, VoltL8, AmpL8, WattsL8, KwHL8, FpL8, HzL8,
        VoltL9, AmpL9, WattsL9, KwHL9, FpL9, HzL9,];
}



function setValues() {
    area_id = 28
    console.log(cont);
    if (cont >= 7 && cont <= 14) {
        VoltL1 = 0;
        VoltL2 = 0;
        VoltL3 = 0;
        VoltL4 = getRandomFloat(1190, 1210, 10);
        VoltL5 = getRandomFloat(1190, 1210, 10);
        VoltL6 = getRandomFloat(1190, 1210, 10);
    } else {
        VoltL1 = getRandomFloat(1190, 1210, 10);
        VoltL2 = getRandomFloat(1190, 1210, 10);
        VoltL3 = getRandomFloat(1190, 1210, 10);
        VoltL4 = 0;
        VoltL5 = 0;
        VoltL6 = 0;
    }
    cont = cont + 1;
    VoltL7 = getRandomFloat(1190, 1240, 10);
    VoltL8 = getRandomFloat(1190, 1240, 10);
    VoltL9 = getRandomFloat(1190, 1240, 10);
    AmpL1 = getRandomFloat(10, 20, 100);
    AmpL2 = getRandomFloat(10, 20, 100);
    AmpL3 = getRandomFloat(10, 20, 100);
    AmpL4 = 0;
    AmpL5 = 0;
    AmpL6 = 0;
    AmpL7 = getRandomFloat(10, 20, 100);
    AmpL8 = getRandomFloat(10, 20, 100);
    AmpL9 = getRandomFloat(10, 20, 100);
    WattsL1 = getRandomFloat(1110, 1220, 100000);
    WattsL2 = getRandomFloat(1110, 1220, 100000);
    WattsL3 = getRandomFloat(1110, 1220, 100000);
    WattsL4 = 0;
    WattsL5 = 0;
    WattsL6 = 0;
    WattsL7 = getRandomFloat(1110, 1220, 100000);
    WattsL8 = getRandomFloat(1110, 1220, 100000);
    WattsL9 = getRandomFloat(1110, 1220, 100000);
    KwHL1 = getRandomFloat(1110, 1220, 100000);
    KwHL2 = getRandomFloat(1110, 1220, 100000);
    KwHL3 = getRandomFloat(1110, 1220, 100000);
    KwHL4 = 0;
    KwHL5 = 0;
    KwHL6 = 0;
    KwHL7 = getRandomFloat(1110, 1220, 100000);
    KwHL8 = getRandomFloat(1110, 1220, 100000);
    KwHL9 = getRandomFloat(1110, 1220, 100000);
    FpL1 = getRandomFloat(50, 70, 10);
    FpL2 = getRandomFloat(50, 70, 10);
    FpL3 = getRandomFloat(50, 70, 10);
    FpL4 = 0;
    FpL5 = 0;
    FpL6 = 0;
    FpL7 = getRandomFloat(50, 70, 10);
    FpL8 = getRandomFloat(50, 70, 10);
    FpL9 = getRandomFloat(50, 70, 10);
    HzL1 = getRandomFloat(5900, 6100, 100);
    HzL2 = getRandomFloat(5900, 6100, 100);
    HzL3 = getRandomFloat(5900, 6100, 100);
    HzL4 = 0;
    HzL5 = 0;
    HzL6 = 0;
    HzL7 = getRandomFloat(5900, 6100, 100);
    HzL8 = getRandomFloat(5900, 6100, 100);
    HzL9 = getRandomFloat(5900, 6100, 100);
    regtime = getDatetime();

    if (cont == 21) {
        cont = 0;
    }

    return "INSERT INTO monitoreo.energy_records (area_id, VoltL1, VoltL2, VoltL3, VoltL4, VoltL5, VoltL6, VoltL7, VoltL8, VoltL9," +
        "AmpL1, AmpL2, AmpL3, AmpL4, AmpL5, AmpL6, AmpL7, AmpL8, AmpL9," +
        "WattsL1, WattsL2, WattsL3, WattsL4, WattsL5, WattsL6, WattsL7, WattsL8, WattsL9," +
        "KwHL1, KwHL2, KwHL3, KwHL4, KwHL5, KwHL6, KwHL7, KwHL8, KwHL9," +
        "FpL1, FpL2, FpL3, FpL4, FpL5, FpL6, FpL7, FpL8, FpL9," +
        "HzL1, HzL2, HzL3, HzL4, HzL5, HzL6, HzL7, HzL8, HzL9," +
        "regtime, created_at, updated_at) VALUES " +
        "(1," + VoltL1 + ", " + VoltL2 + ", " + VoltL3 + ", " + VoltL4 + ", " + VoltL5 + ", " + VoltL6 + ", " + VoltL7 + ", " + VoltL8 + ", " + VoltL9 + "," +
        AmpL1 + "," + AmpL2 + "," + AmpL3 + ", " + AmpL4 + "," + AmpL5 + ", " + AmpL6 + ", " + AmpL7 + ", " + AmpL8 + ", " + AmpL9 + ", " +
        WattsL1 + ", " + WattsL2 + ", " + WattsL3 + ", " + WattsL4 + ", " + WattsL5 + ", " + WattsL6 + ", " + WattsL7 + ", " + WattsL8 + ", " + WattsL9 + "," +
        KwHL1 + "," + KwHL2 + "," + KwHL3 + ", " + KwHL4 + "," + KwHL5 + "," + KwHL6 + ", " + KwHL7 + "," + KwHL8 + ", " + KwHL9 + "," +
        FpL1 + ", " + FpL2 + ", " + FpL3 + ", " + FpL4 + ", " + FpL5 + ", " + FpL6 + ", " + FpL7 + ", " + FpL8 + ", " + FpL9 + "," +
        HzL1 + "," + HzL2 + ", " + HzL3 + "," + HzL4 + "," + HzL5 + "," + HzL6 + "," + HzL7 + "," + HzL8 + "," + HzL9 + "," +
        "'" + regtime + "', '" + regtime + "', '" + regtime + "');";
}

function getRandomFloat(min, max, div) {
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num / div;
}
function getDatetime() {
    const date = new Date().toLocaleString('en-US', { timeZone: 'America/Hermosillo' });
    const dateToFormat = new Date(String(date));
    let dateNow = dateToFormat.getFullYear() + '-' + String(dateToFormat.getMonth() + 1).padStart(2, '0') + '-' +
        String(dateToFormat.getDate()).padStart(2, '0') + ' ' + String(dateToFormat.getHours()).padStart(2, '0') + ':' +
        String(dateToFormat.getMinutes()).padStart(2, '0') + ':' + String(dateToFormat.getSeconds()).padStart(2, '0');
    console.log(dateNow);
    return dateNow;
}
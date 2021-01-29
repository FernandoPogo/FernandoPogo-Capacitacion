
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: Transferir
task.initData.VC_TRANSFERII_670431 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
    
    // Deshabilitar los botonoes
    initDataEventArgs.commons.api.viewState.disable('VA_1MKODTGJUYEJMTF_553906');
    initDataEventArgs.commons.api.viewState.disable('VA_2AEBTQNNSBUPTMJ_618906');
    
    initDataEventArgs.commons.api.viewState.disable('VA_1CFQDAAXAQIPNKS_880906');
    initDataEventArgs.commons.api.viewState.disable('VA_2FMPEGSQPNFDVOW_776906');
    
    // Cuenta Origen
    entities.CuentaOrigen.numeroCuenta = "1234567890";
    entities.CuentaOrigen.saldo = 2000;
    
    // Cuenta Destino
    entities.CuentaDestino.numeroCuenta = "9876543210"
    entities.CuentaDestino.saldo = 1000;
};
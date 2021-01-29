
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: Calculadora
task.initData.VC_CALCULADRR_449940 = function (entities, initDataEventArgs) {

    initDataEventArgs.commons.execServer = false;
    
    initDataEventArgs.commons.api.viewState.disable("VA_VABUTTONCNKFXBH_988502");
    initDataEventArgs.commons.api.viewState.readOnly("VA_2UYMQHWGWBPCCXU_811502", true);

};
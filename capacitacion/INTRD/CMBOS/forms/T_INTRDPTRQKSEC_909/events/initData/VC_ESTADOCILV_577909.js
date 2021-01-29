
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: formEstadoCivil
task.initData.VC_ESTADOCILV_577909 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
    entities.Persona1.listaValores = 0;
    initDataEventArgs.commons.api.viewState.hide('G_ESTADOCIII_944423');
};
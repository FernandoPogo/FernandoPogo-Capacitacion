

//Entity: Datos
//Datos. (Button) View: Calculadora
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONCLLQPIE_583502 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    
    if(entities.Datos.numero1 != "" && entities.Datos.numero2 != "")
    {
    entities.Datos.respuesta = entities.Datos.numero1 + entities.Datos.numero2;
    executeCommandEventArgs.commons.api.viewState.enable('VA_VABUTTONCNKFXBH_988502');
    }        
};
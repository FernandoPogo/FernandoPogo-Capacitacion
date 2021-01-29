

//Entity: Persona1
//Persona1. (Button) View: formEstadoCivil
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONIXHODYN_982423 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    entities.Persona1.listaValores = 0;
    executeCommandEventArgs.commons.api.viewState.hide('G_ESTADOCIII_944423');
};
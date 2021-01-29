

//Entity: CuentaOrigen
//CuentaOrigen. (Button) View: Transferir
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONNAOLEJC_350906 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;

    // Transferir
    if(entities.CuentaOrigen.saldo >= entities.CuentaOrigen.valor)
    {       
        entities.CuentaOrigen.saldo = entities.CuentaOrigen.saldo - entities.CuentaOrigen.valor;
        entities.CuentaDestino.saldo = entities.CuentaDestino.saldo + entities.CuentaOrigen.valor;   
        entities.CuentaOrigen.valor = "";
        
        // Mensaje de exito en grupos
        executeCommandEventArgs.commons.messageHandler.showGroupMessagesSuccess("G_TRANSFEIRI_191906", 'Se ha realizado la transaccion con exito', null);
        
    }
    else     
    {
        // Consultar donde se ingresan los mensajes DSGNR.SYS_DSGNR_LBLERROR0_00021
        
        // Mensajes de error en grupos
        // ¿De donde se toman los mensajes para mostrar 'DSGNR.SYS_DSGNR_LBLERROR0_00021'?
        // executeCommandEventArgs.commons.messageHandler.showGroupMessagesError("G_TRANSFEIRI_191906", 'DSGNR.SYS_DSGNR_LBLERROR0_00021', null);
        
        // Mensajes de error 
        
        executeCommandEventArgs.commons.messageHandler.showMessagesError("Saldo insuficiente");
        
        executeCommandEventArgs.commons.messageHandler.showGroupMessagesError("G_TRANSFEIRI_191906", "Ocurrio un problema al realizar la transaccion", null);
    }
};
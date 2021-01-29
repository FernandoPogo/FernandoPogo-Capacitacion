

//Entity: Persona1
//Persona1.listaValores (ComboBox) View: formEstadoCivil
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_1VGMMDUDSRRDQPT_613423 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    // Verificar si al cambiar los Datos en el comboBox se modifica la entidad
    if(entities.Persona1.listaValores != 0)
    {
        changedEventArgs.commons.api.viewState.show('G_ESTADOCIII_944423');
        if(entities.Persona1.listaValores == 1)
        {       
            // ¿Se puede tomar el dato en el comboBox para agregarlo a alguna variable?
            // entities.Persona1.estadoCivil = changedEventArgs.commons.api.pc.model.executeparameters;
            entities.Persona1.estadoCivil = "Soltero";
            entities.Persona1.actividad = "Listo para la farra";
        }
        else
        {
            entities.Persona1.estadoCivil = "Casado";
            entities.Persona1.actividad = "Lavando platos";
        }
    }
    else
    {
        changedEventArgs.commons.api.viewState.hide('G_ESTADOCIII_944423');
    }
};
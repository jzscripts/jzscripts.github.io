document.addEventListener("DOMContentLoaded",function(){
    
    // Declaración de constantes
    const porcentEstudiante = 0.8;
    const porcentTrainee = 0.5;
    const porcentJunior = 0.15;
    const valorEntrada = 200;

    // Declaración de función principal
    const btnResumen = document.getElementById("btnResumen");

    // Definicion de función principal
    btnResumen.addEventListener('click', function(evento){
        evento.preventDefault();

        // Declaración de variables
        let nombre = document.getElementById("nombre");
        let apellido = document.getElementById("apellido");
        let email = document.getElementById("email");
        var categoria = document.getElementById("categoria"); //Si parseo no me tira nada
        var cantidad = parseInt((document.getElementById("cantidadx").value));
        var total = parseFloat(document.getElementById("totalPago"));

        // Validación de campos adicionales
        if(nombre.value === ""){
            alert("Error! Complete el campo nombre y vuelva a intentarlo.");}
        else{
            if(apellido.value === ""){
                alert("Error! Complete el campo apellido y vuelva a intentarlo.");}
            else{ 
                if(email.value === ""){
                    alert("Error! Complete el campo Email y vuelva a intentarlo.");}
                else{
                    if(categoria.value == 1){
                        totalPago.innerHTML = (cantidad*valorEntrada)*porcentEstudiante;
                    }else if(categoria.value == 2){
                        totalPago.innerHTML = (cantidad*valorEntrada)*porcentTrainee;
                    }else if(categoria.value == 3){
                        totalPago.innerHTML = (cantidad*valorEntrada)*porcentJunior;
                    }
                }
            }
        }

    btnBorrar.addEventListener('click', function(){
        totalPago.innerHTML = "";
    });


        // Logica de la función principal
        
        
    })
});
document.addEventListener("DOMContentLoaded",function(){
    
    // Declaración de constantes
    const porcentEstudiante = 0.8;
    const porcentTrainee = 0.5;
    const porcentJunior = 0.15;
    const valorEntrada = 200;

    // Declaración de función principal
    const btnResumen = document.getElementById("btnResumen");

    // Funcionalidad de click en tarjetas
    card1.addEventListener('click', function(){
        categoria.value = "1";
    });

    card2.addEventListener('click', function(){
        categoria.value = "2";
    });

    card3.addEventListener('click', function(){
        categoria.value = "3";
    });

    // Definicion de función principal
    btnResumen.addEventListener('click', function(evento){
        evento.preventDefault();

        // Declaración de variables
        let nombre = document.getElementById("nombre");
        let apellido = document.getElementById("apellido");
        let email = document.getElementById("email");
        var categoria = document.getElementById("categoria");
        var cantidad = parseInt((document.getElementById("cantidadx").value));

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
                    if(!cantidad){
                        alert("Error! Seleccione una cantidad y vuelva a intentarlo.");}
                    else{
                        if(categoria.value === ""){
                            alert("Error! Seleccione una categoria y vuelva a intentarlo.");}
                        else{
                            // Logica de la función principal
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
            }
        }

        btnBorrar.addEventListener('click', function(){
            totalPago.innerHTML = "";
        });    
    });
});
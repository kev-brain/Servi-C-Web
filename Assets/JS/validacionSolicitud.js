// validacioanes para el formulario de solicitud de servicio //
export async function validarSolicitud(event) {
    console.log("se esta ejecutando la validacion")
    event.preventDefault(); // Evita el envío del formulario hasta que se valide
    
    const inputNombre = document.querySelector("#nombre");
    const nombre = inputNombre.value.trim().toUpperCase();
    inputNombre.value = nombre

    const inputApellido = document.querySelector("#apellido");
    const apellido = inputApellido.value.trim().toUpperCase();
    inputApellido.value = apellido

    const inputDni = document.querySelector("#dni")
    const dni = inputDni.value.trim();
    inputDni.value = dni

    const inputDomicilio = document.querySelector("#domicilio")
    const domicilio = inputDomicilio.value.trim().toUpperCase();
    inputDomicilio.value = domicilio

    const inputEmail = document.querySelector("#email")
    const email = inputEmail.value.trim().toUpperCase();
    inputEmail.value = email

    const inputTelefono = document.querySelector("#telefono")
    const telefono = inputTelefono.value.trim();
    inputTelefono.value = telefono

    const inputModelo = document.querySelector("#modelo")
    const modelo = inputModelo.value.trim().toUpperCase();
    inputModelo.value = modelo

    const inputFalla = document.querySelector("#Falla")
    const falla = inputFalla.value.trim().toUpperCase();
    inputFalla.value = falla

    const errores = [];
    
    if (nombre === "") {
        errores.push("Nombre");
    }
    
    if (apellido === "") {
        errores.push("Apellido");
    }
    
    if (dni === ""|| isNaN(dni) || (dni.length < 8 || dni.length > 9)) {
        errores.push("DNI: con un número de 8 0 9 digitos");
    }
    
    if (domicilio === "") {
        errores.push("Domicilio");
    }
    
    if (telefono === ""|| isNaN(telefono) || telefono.length != 10) {
        errores.push("Teléfono: con un número valido de 10 digitos (codigo de area + número)");
    }
    
    if (electrodomestico === "") {
        errores.push("Electrodoméstico");
    }
    
    if (marca === "") {
        errores.push("Marca");
    }
    
    if (falla === "") {
        errores.push("Falla");
    }
    
    if (errores.length > 0) {
        errores.push("Atentamente Servi-C");
        Swal.fire({
            title: 'Debe completar',
            html: errores.join("<br>"),
            icon: 'error',
            confirmButtonText: 'Ok',
            showConfirmButton: true,
        })
        return false;
    } else {
        const confirm = await Swal.fire({
            title: `Hola ${nombre}`,
            text: `Tu teléfono es: ${telefono}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, enviar',
            cancelButtonText: 'No, cancelar'});
            
        if (confirm.isConfirmed) {
            Swal.fire({
                    title: 'Felicitaciones',
                    text:`Tu solicitud fue enviada correctamente. Dentro de los días hábiles, nuestro equipo se contactará con vos para organizar la visita sin cargo`,
                    icon:"success",
                    showConfirmButton: false,
                    timer: 12000
                })
            .then(() => {
                event.target.submit();
            });
        }
        
    }
}
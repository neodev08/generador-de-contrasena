let cantidad = document.getElementById('cantidad');
let btn = document.getElementById('generar');
let contrasenaGenereda = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' 
let contrasena = '';

function generar(){
    let numeroDigitado = parseInt(cantidad.value);

    if(numeroDigitado < 8){
        alert('La cantidad de caracteres debe ser mayor a 8');
    }
    for(let i = 0; i < numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random()* cadenaCaracteres.length)];
        console.log(caracterAleatorio)

        contrasena += caracterAleatorio;
        
    }
    contrasenaGenereda.value = contrasena;
}



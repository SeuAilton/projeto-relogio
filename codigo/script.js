function carregar() {

    let agora = new Date()
    let hora = agora.getHours().toString().padStart(2,'0')
    let minutos = agora.getMinutes().toString().padStart(2,'0')
    let horaCompleta = `${hora}:${minutos}`
    let corpo = document.body
    if (hora < 6) {
        document.getElementById('texto').innerText = 'Boa Madrugada!'
        document.getElementById('hora').innerHTML = horaCompleta
            if (window.innerWidth < 480) {
                corpo.style.background = "url('imagens/fasesDoDia/madrugadaPequeno.jpg') no-repeat"
            }else {
                corpo.style.background = "url('imagens/fasesDoDia/madrugadaMedio.jpg') no-repeat"
            }
            corpo.style.backgroundSize = "cover";
            corpo.style.backgroundPosition = "center center";
    }
    else if (hora < 12) {
        document.getElementById('texto').innerText = 'Bom Dia!'
        document.getElementById('hora').innerHTML = horaCompleta
            if (window.innerWidth < 480) {
                corpo.style.background = "url('imagens/fasesDoDia/diaPequeno.jpg') no-repeat"
            }else {
                corpo.style.background = "url('imagens/fasesDoDia/diaMedio.jpg') no-repeat"
            }
            corpo.style.backgroundSize = "cover";
            corpo.style.backgroundPosition = "center center";
    }
    else if (hora < 19) {
        document.getElementById('texto').innerText = 'Boa Tarde!'
        document.getElementById('hora').innerHTML = horaCompleta
            if (window.innerWidth < 480) {
                corpo.style.background = "url('imagens/fasesDoDia/tardePequeno.jpg') no-repeat"
            }else {
                corpo.style.background = "url('imagens/fasesDoDia/tardeMedio.jpg') no-repeat"
            }
            corpo.style.backgroundSize = "cover";
            corpo.style.backgroundPosition = "center center";
    }
    else {
        document.getElementById('texto').innerText= 'Boa Noite!'
        document.getElementById('hora').innerHTML = horaCompleta
            if (window.innerWidth < 480) {
                corpo.style.background = "url('imagens/fasesDoDia/noitePequeno.jpg') no-repeat"
            }else {
                corpo.style.background = "url('imagens/fasesDoDia/noiteMedio.jpg') no-repeat"
            }
            corpo.style.backgroundSize = "cover";
            corpo.style.backgroundPosition = "center center";
    }
    
    setInterval(function () {
        carregar();
    }, 1000);
}
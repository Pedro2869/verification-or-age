function toCheck() {
    let date = new Date()
    let year = date.getFullYear()
    let fYear = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if(fYear.value.length == 0 || Number(fYear.value) > year) {
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        let fsex = document.getElementsByName('radsex')
        let age = year - Number(fYear.value)
        let gender = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gender = "Homem"
            if (age >= 0 && age < 10) {
                // Criança
                img.setAttribute('src', 'criança-menino.png')
            } else if (age < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (age < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gender = "Mulher"
            if (age >= 0 && age < 10) {
                // Criança
                img.setAttribute('src', 'criança-menina.png')
            } else if (age < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (age < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${gender} com ${age} anos.`
        res.appendChild(img)
    }
}


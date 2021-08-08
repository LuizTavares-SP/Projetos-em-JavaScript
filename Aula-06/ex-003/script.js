function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO -> Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                window.alert('Criança')
            } else if (idade < 21) {
                window.alert('Jovem')
            } else if (idade < 50) {
                window.alert('Família que Jesus Cuida')
                img.setAttribute('src', 'familia.png')
            } else {
                window.alert('Idoso')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade < 10) {
                img.setAttribute('src', 'emanuela.png')
                window.alert('Criança')
            } else if (idade < 21) {
                window.alert('Jovem')
            } else if (idade < 50) {
                img.setAttribute('src', 'eliana.png')
                window.alert('Jovem Linda')
            } else {
                window.alert('Idoso')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }  
}
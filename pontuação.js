var n1 = document.getElementById('nota1')
var n2 = document.getElementById('nota2')
var n3 = document.getElementById('nota3')

function verificar() {
    var num1 = Number(n1.value)
    var num2 = Number(n1.value)
    var num3 = Number(n3.value)

    var m1 = num1 + num2 + num3
    var m2 = m1 / 3
    res.innerHTML = `Sua média foi ${m2}`

    if (m2 >= 6) {
        ra.innerHTML = 'Você foi aprovado!'

    }else{
        ra.innerHTML = 'REPROVADO!'
    }
}



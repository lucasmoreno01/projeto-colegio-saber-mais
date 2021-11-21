function concluido() {
    var nome = document.getElementById("nome")
    var responsavel = document.getElementById("responsavel")
    var numero = document.getElementById("numero")
    var data = document.getElementById("data")
    var generom = document.getElementById("generom")
    var generof = document.getElementById("generof")
    var serie = document.getElementById("serie")
    var termos = document.getElementById("termos")



    // Verificar se o input está vazio
    if (nome.value.length == 0) {
        alert("nome não informado")
        //Muda a cor da borda
        nome.style.borderColor='#e52213';
        //"cursor de texto" fica ativo no local indicado
        nome.focus()
        return ;
    }
    if (responsavel.value.length == 0) {
        alert('Nome do resonsável não informado')
        responsavel.style.borderColor='#e52213';
        responsavel.focus()
        return ;
    }
    if (numero.value.length == 0) {
        alert('Número do resonsável não informado')
        numero.style.borderColor='#e52213';
        numero.focus()
        return ;
    }
    if (data.value.length == 0) {
        alert('Data não informada')
        data.style.borderColor='#e52213';
        data.focus()
        return ;
    }
    if (generom.checked == false && generof.checked == false) {
        alert('Selecione o gênero')
        return ;
    }
    if (serie.value == "") {
        alert('Infome a série em que o aluno estudará')
        serie.focus()
        return ;
    }
     if (termos.checked == false) {
        alert('Você precisa aceitar os termos para concluir a matrícula')
        return false;
    }
    else {
        alert('Matricula concluida!')
    }
}

var btnInicio = document.querySelector("#btn-inicio");

btnInicio.addEventListener("click", function (evento){
    evento.preventDefault();
    var tr = document.createElement("tr");
    tr.classList.add("estudo");
    var tdVazio = document.createElement("td");
    tdVazio.classList.add("vazio");
    tr.appendChild(tdVazio);
    var tdMaterias = document.createElement("td");
    tdMaterias.classList.add("materia");
    tr.appendChild(tdMaterias);
    var tdTarefas = document.createElement("td");
    tdTarefas.classList.add("tarefas");
    tr.appendChild(tdTarefas);
    var tdRemarks = document.createElement("td");
    tdRemarks.classList.add("remarks");
    tr.appendChild(tdRemarks);
    tdBotoes = document.createElement("td");
    
    btnApagar = document.createElement("button");
    btnApagar.classList.add("btn");
    btnApagar.classList.add("btn-danger");
    iconApagar = document.createElement("i");
    iconApagar.classList.add("fas");
    iconApagar.classList.add("fa-trash-alt");
    btnApagar.appendChild(iconApagar);
    tdBotoes.appendChild(btnApagar);
    tr.appendChild(tdBotoes);

    var tabela = document.querySelector('.table');
    tabela.appendChild(tr);
    console.log(tr);

});
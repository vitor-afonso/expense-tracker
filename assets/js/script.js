var r = 1;
var c = 0;

function add() {

    let name = document.querySelector("#name");    
    let date = document.querySelector("#date");
    let amount = document.querySelector("#amount");

    let tabela = document.querySelector("#tabela");
    let row = tabela.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);


    cell1.innerHTML = "<td>" + name.value + "</td>";   
    cell2.innerHTML = "<td>" + date.value + "</td>";
    cell3.innerHTML = "<td>" + amount.value + "</td>";
    cell4.innerHTML = "<td><button onclick='del(this)'> X </button></td>";
    
}

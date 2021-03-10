var num = 1;
function add() {
    
    let name = document.querySelector("#name");    
    let date = document.querySelector("#date");
    let amount = document.querySelector("#amount");

    let tbl = document.querySelector("#tbl");

    tbl.style.display = "flex";

    let row = tbl.insertRow(num);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = name.value;   
    cell2.innerHTML = date.value;
    cell3.innerHTML = amount.value;
    cell4.innerHTML = "<button onclick='del(this)'> X </button>";
    
    name.value = "";
    date.value = "";
    amount.value = "";

    num++;
}

function del() {
    
    let del = document.querySelector("#tbl");
    num--;

    if (num <= 1) {
        del.querySelector("td").parentElement.remove();
        del.style.display = "none";
    } else {
        del.querySelector("td").parentElement.remove();
    }
}

var list = [
    { "desc": "Rice", "amount": "1", "value": "5.40" },
    { "desc": "Beer", "amount": "12", "value": "1.99" },
    { "desc": "Meat", "amount": "1", "value": "15.00" }

];
function getTotal(list) {
    var total = 0;
    for (var key in list) {
        // console.log(key)
        total += list[key].value * list[key].amount;
        // console.log(total)
        // console.log(list[key])
    }
    return total;
}
// const getTotalFP = list.reduce((acc, item) => acc + (item.value * item.amount), 0);

function setList(list) {
    var table = "<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>";
    for (var key in list) {
        table += "<tr><td>" + list[key].desc + "</td><td>" + list[key].amount + "</td><td>" + list[key].value + "</td><td>Edit | Delete</td></tr>"
    }
    table += '</tbody>';
    document.getElementById("listTable").innerHTML = table;
}
setList(list);

// const setListFP = (list) => {
//     let table = `<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>`;
//     list.map((item) => {
//         table += `<tr><td>${item.desc}</td><td>${item.amount}</td><td>${item.value}</td><td>Edit | Delete</td></tr>`;
//     })
//     table += `</tbody>`;
//     document.getElementById("listTable").innerHTML = table;
// }
// setListFP(list)
console.log(getTotal(list))
// console.log(getTotalFP);


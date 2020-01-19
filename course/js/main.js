var list = [
    { "desc": "riCe", "amount": "1", "value": "5.40" },
    { "desc": "beer", "amount": "12", "value": "1.99" },
    { "desc": "meat", "amount": "1", "value": "15.00" }

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

// function setList(list) {
//     var table = "<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>";
//     for (var key in list) {
//         table += "<tr><td>" + formatDesc(list[key].desc) + "</td><td>" + list[key].amount + "</td><td>" + list[key].value + "</td><td>Edit | Delete</td></tr>"
//     }
//     table += '</tbody>';
//     document.getElementById("listTable").innerHTML = table;
// }
// setList(list);
const formatDescFP = desc => str = desc.toUpperCase().charAt(0) + desc.toLowerCase().slice(1);
const formatDescFP2 = ([head, ...tail] = desc) => (head.toUpperCase() + tail.join("").toLowerCase());
const formatValueFP = value => "$"+(str = (parseFloat(value).toFixed(2))+"").replace(".",",")


const setListFP = (list) => {
    let table = `<thead><tr><td>Description</td><td>Amount</td><td>Value</td><td>Action</td></tr></thead><tbody>`;
    list.map((item) => {
        table += `<tr><td>${formatDescFP(item.desc)}</td><td>${item.amount}</td><td>${formatValueFP(item.value)}</td><td>Edit | Delete</td></tr>`;
    })
    table += `</tbody>`;
    document.getElementById("listTable").innerHTML = table;
}
setListFP(list)
console.log(getTotal(list))
// console.log(getTotalFP);

function formatDesc(desc) {
    var str = desc.toLowerCase();
    return str = str.charAt(0).toUpperCase() + str.slice(1)

}
function formatValue(value){
    var str = parseFloat(value).toFixed(2)+"";
        str.replace(".",",");
        str = "$"+str;
    return str;
}

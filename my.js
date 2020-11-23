
let array =[["SamSung",100,'8.0000.00VND'],["Iphone",200,'15.000.000VND']
    ,["Oppo",150,'4.000.000VND'],["Vivo",300,'4.500.000VND'],
    ["Sony",400,'6.0000.00VND'],["Vsmart",500,'3.500.000VND']
    ,["Lenovo",700,'3.000.000VND'],["Nokia",300,'2.000.000VND']
    ,["Huawei",200,'3.000.000VND'],["BrackBerry",100,'5.000.000VND']];
// function init(){
//     let str = "<tr>"
//     str +="<td>"+"Number"+"</td>";
//     str +="<td>"+"Product Name"+"</td>";
//     str +="<td colspan='2' style='text-align: right'>"+array.length+"Products"+"</td>";
//     str +="</tr>"
// for (let i=1;i<array.length+1;i++){
//     str+="<tr>";
//     str+="<td>"+i+"</td>";
//     str+="<td id='"+(i-1)+"'>"+array[i-1]+"</td>";
//     str+="<td>"+"<button type='button' id='"+(i-1)+"' onclick='editPro(this)'>Edit</button>"+"</td>";
//     str+="<td>"+"<button type='button' id='"+(i-1)+"' onclick='removePro(this)' >Delete</button>"+"</td>";
//     str+="</tr>";
// }
//
// document.getElementById("replaceTb").innerHTML=str;
// }
function display(){
    let str='';
    str += `<tr>
            <th>Number</th>
            <th>Product Name</th>
            <th>Quanlity</th>
            <th>Price</th>
            <th colspan="2">${array.length} Products</th>
            </tr>`
    for (let i = 0; i < array.length; i++) {
        str+=`<tr>
              <td>${i+1}</td>`
        for(let j=0;j<3;j++){
            str+=`<td>${array[i][j]}</td>`
        }
        str+= `<td><button onclick="editPro(${i})">Edit</button></td>
              <td><button onclick="removePro(${i})">Delete</button></td>
              </tr>`
    }
    document.getElementById("replaceTb").innerHTML=str;
}
function addProduct(){
    let newProduct = document.getElementById("addPro").value;
    let newQuanlity = document.getElementById("addQuanlity").value;
    let newPrice = document.getElementById("addPrice").value;
    if (newProduct==""||newQuanlity==""||newPrice==""){
        alert("Please input valid value")
    }else {
     let tempt=[newProduct,newQuanlity,newPrice]
     array.push(tempt);
     clearInput()
     display()}
}
function editPro(index){
    let x = +prompt("nhập vị trí bạn muốn sửa: Product:nhập 0,Quanlity:nhập 1,Price: nhập 2")
    if (x==0||x==1||x==2){
    let str = prompt("nhập giá trị cần sửa")
    array[index][x]=str;
    display()}else {alert("Mời nhập lại")}
}
function removePro(index){
    array.splice(index,1);
    display()
}
function clearInput(){
    document.getElementById("addPro").value="";
    document.getElementById("addQuanlity").value="";
    document.getElementById("addPrice").value="";
}

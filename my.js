
let array =["SamSung","Iphone","Oppo","Lennovo","Sony","Vsmart","Vivo","Xiaomi","Huawei"];
function init(){
    let str = "<tr>"
    str +="<td>"+"Number"+"</td>";
    str +="<td>"+"Product Name"+"</td>";
    str +="<td colspan='2' style='text-align: right'>"+array.length+"Products"+"</td>";
    str +="</tr>";
for (let i=1;i<array.length+1;i++){
    str+="<tr>";
    str+="<td>"+i+"</td>";
    str+="<td id='"+(i-1)+"'>"+array[i-1]+"</td>";
    str+="<td>"+"<button type='button' id='"+(i-1)+"' onclick='editPro(this)'>Edit</button>"+"</td>";
    str+="<td>"+"<button type='button' id='"+(i-1)+"' onclick='removePro(this)' >Delete</button>"+"</td>";
    str+="</tr>";
}

document.getElementById("replaceTb").innerHTML=str;
}
function addProduct(){
    let newProduct = document.getElementById("addPro").value;
     array.push(newProduct);
     init()
}
function editPro(e){
    let idOfE= e.getAttribute("id");
    let str = prompt("bạn muốn thay bằng");
    array[idOfE]=str;
    init()
}
function removePro(e){
    let idOfE= e.getAttribute("id");
    array.splice(idOfE,1);
    init()
}

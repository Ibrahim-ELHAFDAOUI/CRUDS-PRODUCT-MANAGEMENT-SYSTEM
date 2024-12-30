let title = document.getElementById('title');
let price = document.getElementById('price');
let ads = document.getElementById('ads');
let taxes = document.getElementById('taxes');
let discount = document.getElementById('discount');
let category = document.getElementById('category');
let create = document.getElementById('create');
let btndeleteall = document.getElementById("deleteAll");
let count = document.getElementById('count');

let array;
if (localStorage.product != null) {
    array = JSON.parse(localStorage.product);  
} else {
    array = [];
}

create.onclick = function () {
    let newPro = {
        title: title.value,
        price: price.value,
        ads: ads.value,
        taxes: taxes.value,
        discount: discount.value,
        category: category.value,
        count : count.value,
    };
    if(newPro.count>1){
         for(let i = 0; i<newPro.count; i++){
            array.push(newPro);
         }
    }else{
        array.push(newPro);
    }
    
    localStorage.setItem('product', JSON.stringify(array));
    clear();
    ShowData()
};

function clear() {
    title.value = '';
    price.value = '';
    ads.value = '';
    taxes.value = '';
    discount.value = '';
    category.value = '';
    count.value = '';
}


function ShowData(){
    let table = '';
    let MyTable = document.getElementById("MyTable");
    for(let i=0; i<array.length; i++){
         table += `
            <tr>
                 <td>${i}</td>
                <td>${array[i].title}</td>
                <td>${array[i].price}</td>
                 <td>${array[i].ads}</td>
                 <td>${array[i].taxes}</td>
                 <td>${array[i].discount}</td>
                 <td>${array[i].category}</td>
                 <td><button onclick= "Delete(${i})" >Delete</button></td>
                 <td><button onclick = "Update(${this})">update</button></td>
            </tr>
        `
    }
        MyTable.innerHTML=table;
        if(array.length>0){
            btndeleteall.innerHTML = `<button onclick="DeleteAll()">Delete All (${array.length})</button>`;

           }else{
            btndeleteall.innerHTML = ``;
           }
}




function Delete(i){
    array.splice(i,1);
    localStorage.product = JSON.stringify(array);
    ShowData();
}

function DeleteAll(){
    localStorage.clear();
    array.splice(0);
    ShowData();
}
ShowData();


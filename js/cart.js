let productosComprados= [];
let linksproducts=[];

let tabla= document.getElementById("tablaCarrito");
function subTotal(id,costo){
     //console.log(id);
     let cantidad=parseInt(document.getElementById(`cantidad${id}`).value);
     let subtotalFinal=cantidad*costo;
     let labelsubTotal=document.getElementById(`subTotal${id}`);
     labelsubTotal.innerHTML=subtotalFinal;
}
let cantidad = 1;

//let productoCarts= [];
function mostrarProducto(array){
let producto=array[0];
tabla.innerHTML+= `<table class="table table-hover">
<thead>
  
</thead>
<tbody>
  <tr>
    <th class="col-2">${producto.name}</th>
    <td class="col-2"><img src="${producto.image}" class="imgTable"></td>
    <td class="col-2">${producto.unitCost}</td>
    <td class="col-2"><input id="cantidad${producto.id}" class="text-center" type="number" min="1" max="9999" value="${producto.count}" onchange="subTotal(${producto.id},${producto.unitCost})"></td>
    <td class="col-2"><label id="subTotal${producto.id}">${producto.unitCost*producto.count}</label></td> 
</tbody>
</table>`
}


function mostrarProducto2(producto){
     
     tabla.innerHTML+= `<table class="table table-hover">
     <thead>
       
     </thead>
     <tbody>
       <tr>
         <th class="col-2">${producto.name}</th>
         <td class="col-2"><img src="img/prod${producto.id}_1.jpg" class="imgTable"></td>
         <td class="col-2">${producto.cost}</td>
         <td class="col-2"><input id="cantidad${producto.id}" class="text-center" type="number" min="1" max="9999" value="${cantidad}" onchange="subTotal(${producto.id},${producto.cost})"></td>
         <td class="col-2"><label id="subTotal${producto.id}">${producto.cost*cantidad}</label></td> 
     </tbody>
     </table>`
     }

































document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL).then(function (resultObj) {
         if (resultObj.status === "ok") {
              
              productoCarts = resultObj.data.articles;
              mostrarProducto(productoCarts);
              
              console.log(productoCarts)

         }
    });
productosComprados=JSON.parse(localStorage.getItem("selectproducts2"));
for (let i=0; i<productosComprados.length; i++){
     let idproducto = productosComprados[i];
     let linkproducto = `https://japceibal.github.io/emercado-api/products/`+idproducto+`.json`;
     if (!linksproducts.includes(linkproducto)){
          linksproducts.push(linkproducto);
          console.log(linksproducts);
     }
}
for (let i=0; i<linksproducts.length; i++){
     let URL = linksproducts[i];
     getJSONData(URL).then(function (resultObj) {
          if (resultObj.status === "ok") {
               
               newproduct = resultObj.data;
               mostrarProducto2(newproduct);
               
 
          }
     });
     
}





});







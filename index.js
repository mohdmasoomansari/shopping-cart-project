let store=document.querySelector("[store]");
let btn1_inc=document.getElementById("btn1-inc");
let btn1_dec=document.getElementById("btn1-dec");
let btn1_val=document.getElementById("btn1-val");
let btn2_inc=document.getElementById("btn2-inc");
let btn2_dec=document.getElementById("btn2-dec");
let btn2_val=document.getElementById("btn2-val");
let btn3_inc=document.getElementById("btn3-inc");
let btn3_dec=document.getElementById("btn3-dec");
let btn3_val=document.getElementById("btn3-val");
let sv=document.getElementById("sv");
let empty=document.getElementById("empty");
let cart=document.querySelector("[cart-amount");


//bbtn 1

btn1_inc.addEventListener('click',()=>{
    empty.textContent='';
    let val=parseInt(btn1_val.textContent);
    val++;
    display(0);
    cal_inc(0);
    btn1_val.textContent=val;
})
btn1_dec.addEventListener('click',()=>{
    let val=parseInt(btn1_val.textContent);
    if(val>0){
        val--;
        display2(0);
        cal_dec(0);
        btn1_val.textContent=val;
    }else{
        show();
        alert('please select a valid no of products');
    }
})

///btn 2
btn2_inc.addEventListener('click',()=>{
    empty.textContent='';
    let val=parseInt(btn2_val.textContent);
    val++;
    display(1);
    cal_inc(1);
    btn2_val.textContent=val;
    show()
})
btn2_dec.addEventListener('click',()=>{
    let val=parseInt(btn2_val.textContent);
    if(val>0){
        val--;
        display2(1);
        cal_dec(1);
        btn2_val.textContent=val;
        show()
    }else{
        show();
        alert('please select a valid no of products');
    }
    
})

//btn -3
btn3_inc.addEventListener('click',()=>{
    empty.textContent='';
    let val=parseInt(btn3_val.textContent);
    val++;
    display(2);
    cal_inc(2);
    btn3_val.textContent=val;
})
btn3_dec.addEventListener('click',()=>{
    let val=parseInt(btn3_val.textContent);
    if(val>0){
        val--;
        display2(2);
        cal_dec(2);
        btn3_val.textContent=val;
        show()
    }else{
        show();
        alert('please select a valid no of products');
    }
})

const Products = [
    { id: 1, name: 'Product-1', price: 100 ,val:1},
    { id: 2, name: 'Product-2', price: 200 ,val:1},
    { id: 3, name: 'Product-3', price: 300 ,val:1},
  ];
  
let saved=[];
function display(id){
    let foundProduct = saved.find(product => product.id == id+1);
    if (foundProduct) {
        render_inc(id);
        
        
    } else {
        
        let pro=document.createElement("div");
        pro.setAttribute('id',"del"+id);
        pro.classList.add("buy");
        let title=document.createElement("p");
        title.textContent=Products[id]?.name;
        let val=document.createElement("p");
        val.textContent=Products[id].val;
        val.setAttribute('id',id);
        let x=document.createElement('p');
        x.textContent='X';
        
        let price=document.createElement("p");
        price.textContent=Products[id].price;
        pro.appendChild(title);
        pro.appendChild(val);
        pro.appendChild(x);
        pro.appendChild(price);
        saved.push(Products[id]);
        sv.appendChild(pro);
        
    }

    
}
function display2(id){
    render_dec(id);

}
function render_inc(id){
    let ele=document.getElementById(id);
    let val=parseInt(ele.textContent);
    val++;
    ele.textContent=val;
    

}
function render_dec(id){
    let ele=document.getElementById(id);
    let val=parseInt(ele.textContent);
    val--;
    if(val==0){
        let d=document.getElementById("del"+id);
        let idx=findIndexById(id);
        saved.splice(idx, 1);
        d.remove();




    }else{
        ele.textContent=val;
    }
    
    

}
function findIndexById(id) {
    return saved.findIndex(product => product.id === id);
}
function show(){
    if(saved==''){
        empty.textContent="Cart is empty";
    }
}
function cal_dec(id){
    let v=parseInt(cart.textContent);
    if(v>0){
        let p= parseInt(saved[id]?.price);
      if(v==p){
        v=0;
      }else{
        v-=p;
      }
    cart.textContent=v;
    show();

    }
    


}
function cal_inc(id){
    let v=parseInt(cart.textContent);
    if(v>=0){
        let p= parseInt(saved[id]?.price);
    v+=p;
    cart.textContent=v;

    }

}
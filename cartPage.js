let addArr=JSON.parse(localStorage.getItem("addToCart"))||[];

addArrfun(addArr)
function addArrfun(addArr){
    document.querySelector("tbody").innerHTML="";
    let cartItems=0;
    addArr.forEach(function(elem,index,){
        let row=document.createElement("tr");
        let name=document.createElement("td");
        name.innerText=elem.name;
        let mrp=document.createElement("td");
        mrp.innerText="₹ "+elem.mrp;
        let dis=document.createElement("td");
        dis.innerText="₹ 0.00";

        let count=document.createElement("button");
        count.innerText=1;
        let qty=document.createElement("td");

        let ad=document.createElement("button");
        ad.innerText="+";
        ad.addEventListener("click",function(){
            count.innerText++;
            subTotal.innerText="₹ "+elem.mrp*count.innerText;
            qty.append(minus,count,ad)
            sub.innerText=(+sub.innerText)+(+elem.mrp)
            t.innerText=Math.round(+sub.innerText+(+charge))
        })
        let minus=document.createElement("button");
        minus.innerText="-";
        minus.addEventListener("click",function(){
            count.innerText--;
            if(count.innerText==0){
                deleteRow(elem,index)
                location.href="cartPage.html"
            } else{
                subTotal.innerText="₹ "+elem.mrp*count.innerText;
                qty.append(minus,count,ad)
                sub.innerText=(+sub.innerText)-(+elem.mrp)
                t.innerText=Math.round(+sub.innerText)+(+charge)
            }
        })
        qty.append(minus,count,ad)

        let subTotal=document.createElement("td");
        subTotal.innerText="₹ "+elem.mrp*count.innerText;

        let dele=document.createElement("td");
        let sp=document.createElement("span")
        sp.setAttribute("class","material-symbols-outlined")
        sp.innerText="cancel"
        dele.append(sp)
        dele.addEventListener("click",function(){
            deleteRow(elem,index)
            location.href="cartPage.html"
        })

        row.append(name,mrp,dis,qty,subTotal,dele);
        document.querySelector("tbody").append(row);
        let sub=document.querySelector("#subtotal");
        sub.innerText=(+sub.innerText)+(+elem.mrp)

        let t=document.querySelector("#totalAmt");
        let charge=document.querySelector("#deliveryCharge").innerText;
        t.innerText=Math.round(+sub.innerText+(+charge))
        
        cartItems++;
        document.querySelector("#itemCount").innerText=cartItems;
    })

    function deleteRow(elem,index){
        addArr.splice(index,1)
        localStorage.setItem("addToCart",JSON.stringify(addArr));
        addArrfun(addArr)
    }
}

let cartCrauser=[
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5f0bf801-bc90-4715-acaf-b980a919f9aa_425x425.jpg",
        name:"ZORABIAN CHICKEN DRUMSTICK",
        qty:"1 Pc",
        mrp:"265",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3efed72f-e840-4e33-a576-7167a13cc07f_425x425.jpg",
        name:"Crozzo Choco Drizzle Pack Of 2",
        qty:"1 Pc",
        mrp:"249",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a4cc6a4e-e0fd-4426-aecf-27f5a9dfeecb_425x425.jpg",
        name:"REAL GOOD CHICKEN CURRY CUT",
        qty:"1 Pc",
        mrp:"250.75",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/93c009fd-e44d-444c-acd4-ed385412bb1b_425x425.jpg",
        name:"ZORABIAN CHICKEN BREAST",
        qty:"1 Pc",
        mrp:"233.75",
    },
]
crauserData(cartCrauser,0,4)
function crauserData(cartCrauser,start,end){
    for (let i=start; i<end; i++){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.setAttribute("src",cartCrauser[i].img);

    let div1=document.createElement("div")

    let name=document.createElement("p");
    name.innerText=cartCrauser[i].name;

    let qty=document.createElement("p");
    qty.innerText=cartCrauser[i].qty;

    let price=document.createElement("a");
    price.innerText="₹"+cartCrauser[i].mrp;

    let addToCart=document.createElement("button");
    addToCart.addEventListener("click",function(){
        addToCartFunc(cartCrauser[i])
    })

    let span=document.createElement("span");
    span.setAttribute("class","material-symbols-outlined")
    span.innerText="shopping_cart"
    addToCart.append(span,"ADD");
    div1.append(name,qty,price,addToCart)
    div.append(img,div1);
    document.querySelector("#crauser1").append(div);
}
}

let curatedArr=[
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c9921594-55a8-4658-8a5e-b4fe49f02bb7_425x425.jpg",
        name:"Natural Rock Salt Organic - Organic Tatt",
        qty:"1 Pc",
        mrp:"52.25",
    },
        {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a2b79bf0-f7e2-444d-b7b7-326682d3c21e_425x425.jpg",
        name:"KEYA CINNAMON POWDER SRILANKA 5",
        qty:"1 Pc",
        mrp:"159.0",
    },
        {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6b5df9e3-0ba5-470b-84c8-dffc35a8913e_425x425.jpg",
        name:"Cinnamon Organic - Organic Tattva",
        qty:"1 Pc",
        mrp:"80.75",
    },
        {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3c569c7b-0ddd-4144-94bd-6127363cdd9f_425x425.jpg",
        name:"Organic Cinnamon Powder - Healthy Alt",
        qty:"50 g",
        mrp:"99.0",
    },
        {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bf7c89c2-4b80-4cd9-8bd7-cdb6b17eab1f_425x425.jpg",
        name:"KEYA NUTMEG POWDER - TRAVANCOR",
        qty:"1 Pc",
        mrp:"195.0",
    },
        {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a05e73a9-ec84-4ce3-bb6e-c583e09acee9_425x425.jpg",
        name:"Natural Asafoetida (Hing) - Healthy Alter",
        qty:"50 g",
        mrp:"521.55",
    },
        {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b6788a30-31e8-40fd-92cf-aa68f78d35b9_425x425.jpg",
        name:"ON1Y PAPRIKA POWDER 52g",
        qty:"1 Pc",
        mrp:"99.0",
    },
        {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/81528166-1b2f-4b39-a195-6c7617e85adc_425x425.jpg",
        name:"GAIA MUESLI FRUIT & NUT 400g",
        qty:"1 Pc",
        mrp:"285.0",
    },
]
curatedData(curatedArr,0,4)
function curatedData(curatedArr,start,end){
    for (let i=start; i<end; i++){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.setAttribute("src",curatedArr[i].img);

    let time=document.createElement("p");
    time.innerText="DELIVERY IN 90 MINUTES";

    let name=document.createElement("p");
    name.innerText=curatedArr[i].name;

    let qty=document.createElement("p");
    qty.innerText=curatedArr[i].qty;

    let mrp=document.createElement("a");
    mrp.innerText="MRP ₹"+curatedArr[i].mrp;

    let div1=document.createElement("div");
    let addToCart=document.createElement("button");
    addToCart.addEventListener("click",function(){
        addToCartFunc(curatedArr[i])
    })

    let span=document.createElement("span");
    span.setAttribute("class","material-symbols-outlined")
    span.innerText="shopping_cart"
    addToCart.append(span,"ADD");
    div1.append(mrp,addToCart)

    div.append(img,time,name,qty,div1);
    document.querySelector("#curated").append(div);
}
}
let curaStat=0;
document.querySelector("#rightBtn2").addEventListener("click",function(){
    document.querySelector("#curated").innerHTML=""
    curaStat++;
    if(curaStat==1){
        curatedData(curatedArr,4,8);
    }
    if(curaStat==2){
        curatedData(curatedArr,0,4)
        curaStat=0;
    }
})
document.querySelector("#leftBtn2").addEventListener("click",function(){
    document.querySelector("#curated").innerHTML=""
    curaStat--;
    if(curaStat==-1){
        curatedData(curatedArr,4,8)
        curaStat=1;
    }
    if(curaStat==0){
        curatedData(curatedArr,0,4)
    }
})

document.querySelector("#continue").addEventListener("click",function(){
    location.href="homepage.html"
})

document.querySelector("#checkout").addEventListener("click",function(){
    let t=document.querySelector("#totalAmt").innerText;
    if(+t>0){
        location.href="payment.html"
    }  else{
        alert("Order amount should be more than Rs.0/-")
    }
})
let loginStatus=localStorage.getItem("loginStatus");
let emailId=localStorage.getItem("emailId");
if(loginStatus){
    document.querySelector("#register").innerText="";
    document.querySelector("#loginId").innerText=emailId.slice(0,17);
    document.querySelector("#loginId").style.color="rgba(146,190,77,255)"
    document.querySelector("#loginId").style.borderRight="0px"
}
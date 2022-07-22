let dataArr=[
    {
        img:"https://d1z88p83zuviay.cloudfront.net/BannerImages/0f2301bb-4607-47f9-859c-1c2c21642159_1320x376.jpg",

    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/BannerImages/95cca699-6c66-4df8-ace2-7effeddecfaa_1320x376.jpg",

    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/BannerImages/bf01d76e-4c92-4046-832a-7b50b9ad266e_1320x376.jpg",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/BannerImages/ce74f1db-d70d-4ff2-a5d9-87f9a997fc32_1320x376.jpg",

    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/BannerImages/88d68b3d-2bfc-497e-af24-dd2b5378b675_1320x376.jpg",

    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/BannerImages/4209a79c-0340-4d68-9479-deee041844d0_1320x376.jpg",

    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/BannerImages/efc458aa-dd72-4a60-9be1-9dc516f10977_1320x376.jpg",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/BannerImages/0ccd5368-14a4-411d-bb6c-84d981238b15_1320x376.jpg",

    }
]
let crauser=document.querySelector(".crauser");
let image=document.querySelector(".crauser>img");
let num1=document.getElementById("num1")
num1.addEventListener("click",function(){
    let a=document.querySelector(".crauser>img");
    a.src=dataArr[0].img
})
let num2=document.getElementById("num2")
num2.addEventListener("click",function(){
    let a=document.querySelector(".crauser>img");
    a.src=dataArr[1].img
})
let num3=document.getElementById("num3")
num3.addEventListener("click",function(){
    let a=document.querySelector(".crauser>img");
    a.src=dataArr[2].img
})
let num4=document.getElementById("num4")
num4.addEventListener("click",function(){
    let a=document.querySelector(".crauser>img");
    a.src=dataArr[3].img
})
let num5=document.getElementById("num5")
num5.addEventListener("click",function(){
    let a=document.querySelector(".crauser>img");
    a.src=dataArr[4].img
})
let num6=document.getElementById("num6")
num6.addEventListener("click",function(){
    let a=document.querySelector(".crauser>img");
    a.src=dataArr[5].img
})
let num7=document.getElementById("num7")
num7.addEventListener("click",function(){
    let a=document.querySelector(".crauser>img");
    a.src=dataArr[6].img
})
let num8=document.getElementById("num8")
num8.addEventListener("click",function(){
    let a=document.querySelector(".crauser>img");
    a.src=dataArr[7].img
})


let categoryArr=[
    {
        img:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Exoticvegetablesweb.png",
        cat: "Exotic Vegetables",
        l1:"Asparagus Artichokes",
        l2:"Avocados Peppers",
        l3:"Broccoli Zucchini",
    },
    {
        img:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/coldcutweb.png",
        cat:"Meat, Poultry & Seafood",
        l1:"Chicken Cuts Lollipops Mince",
        l2:"Fish Other Seafood",
        l3:"Fresh Kebabs Others"
    },
    {
        img:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Freshartisinalbreadsweb.png",
        cat:"Fresh Artisanal Breads",
        l1:"Breadsticks Crostinni Lavache",
        l2:"Buns Croissants Bagels",
        l3:"Muffins Cakes Brownies"
    },
    {
        img:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/dailyessentialsweb.png",
        cat:"Daily Essentials",
        l1:"Snacks & Beverages",
        l2:"Breakfast, Dairy & Bakery",
        l3:"Staples",
    },
    {
        img:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Organicweb.png",
        cat:"Organic",
        l1:"Fruits & Vegetables",
        l2:"Staples",
        l3:"Bakery & Dairy",
    },
    {
        img:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Readytoeatweb.png",
        cat:"Ready to Eat",
        l1:"Hors'D Oeuvres",
        l2:"Pastries Desserts",
        l3:"Soups Salads",
    },
    {
        img:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/bespokeweb.png",
        cat:"The Gift Studio",
        l1:"Celebrations with Nature's Basket",
        l2:"World Food Hampers",
        l3:"Bulk Enquiry",
    },
    {
        img:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/fineteasweb.png",
        cat:"Fine Teas",
        l1:"Black Teas",
        l2:"Green White Oolong Teas",
        l3:"Herbal Teas Detox Benefit Blends",
    },
    {
        img:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/hearthealthyfoodsweb.png",
        cat:"Heart Healthy Foods",
        l1:"Amaranth Couscous Quinoa",
        l2:"Flours Rice Condiments",
        l3:"Seafood Lean Meats",
    },
    {
        img:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/indiangroceryweb.png",
        cat:"Indian Grocery",
        l1:"Salt Sugar Substitutes",
        l2:"Cooking Spices Powders",
        l3:"Oils",
    },
    {
        img:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/confectionaryweb.png",
        cat:"Confectionary and Patisseire",
        l1:"Milk Dark Mint Chocolates",
        l2:"Cakes, Brownie, Pancake & Mixes",
        l3:"Ice-creams & Kulfi",
    },
    {
        img:"https://gnbdevcdn.s3.amazonaws.com/Images/Category/internationalcusineweb.png",
        cat:"International Cuisine",
        l1:"Pasta",
        l2:"Rice Quinoa",
        l3:"Olive Extravirgin Olive Oils",
    }
]
catData(categoryArr,0,4);
function catData(categoryArr,start,end){
    for (let i=start; i<end; i++){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.setAttribute("src",categoryArr[i].img);
    let catname=document.createElement("ul");
    catname.innerText=categoryArr[i].cat;
    let l1=document.createElement("li");
    l1.innerText=categoryArr[i].l1;
    let l2=document.createElement("li");
    l2.innerText=categoryArr[i].l2
    let l3=document.createElement("li");
    l3.innerText=categoryArr[i].l3;
    let l4=document.createElement("li");
    l4.innerText="View All"
    div.append(img,catname,l1,l2,l3,l4);
    document.querySelector("#cat").append(div)
    let sp=document.createElement("span");
    sp.setAttribute("class","material-symbols-outlined")
    sp.innerText="arrow_right"
    sp.style.float="right";
    sp.style.color="#d6d6cd"
    l1.append(sp)
    let sp1=document.createElement("span");
    sp1.setAttribute("class","material-symbols-outlined")
    sp1.innerText="arrow_right"
    sp1.style.float="right";
    sp1.style.color="#d6d6cd"
    l2.append(sp1)
    let sp2=document.createElement("span");
    sp2.setAttribute("class","material-symbols-outlined")
    sp2.innerText="arrow_right"
    sp2.style.float="right";
    sp2.style.color="#d6d6cd"
    l3.append(sp2)
    let sp3=document.createElement("span");
    sp3.setAttribute("class","material-symbols-outlined")
    sp3.innerText="arrow_right"
    sp3.style.float="right";
    sp3.style.color="#d6d6cd"
    l4.append(sp3)
}
}

let leftB=0;
document.querySelector("#leftBtn").addEventListener("click",function(){
    document.querySelector("#cat").innerHTML=""
    leftB++;
    if(leftB==1){
        catData(categoryArr,categoryArr.length-4,categoryArr.length);
    }
    if(leftB==2){
        catData(categoryArr,categoryArr.length-8,categoryArr.length-4);
    }
    if(leftB==3){
        catData(categoryArr,0,4);
        leftB=0;
    }
})

let trendArr=[
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a7bb827b-18d6-4c40-b9f5-96ea997ec44c_425x425.jpg",
        name:"S&B Golden Curry Sauce Mix Medm Hot",
        qty:"1 Pc",
        disAmt:"526.50",
        mrp:"₹585.0",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/21524481-2a4b-453e-8928-24acf84dcdeb_425x425.jpg",
        name:"LA CARNE BACON WRAPPD PORK SAUS",
        qty:"1 Pc",
        disAmt:"410.00",
        mrp:"₹450.0",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/cb69f76a-2d99-4ca4-84cf-633d51c50ebc_425x425.jpg",
        name:"Voila Teriyaki Sauce 400g",
        qty:"1 Pc",
        disAmt:"312.00",
        mrp:"₹390.0",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/19c35a3a-bd55-45ba-ac25-e1bcdd239610_425x425.jpg",
        name:"ALF FARMS CHICKEN HOT DOG",
        qty:"1 Pc",
        disAmt:"170.00",
        mrp:"₹185.0",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5850e609-9fc0-4ea1-9401-f696651f0cde_425x425.jpg",
        name:"Wheat Grass Powder Organic - Organic Tattva",
        qty:"1 Pc",
        disAmt:"204.25",
        mrp:"₹215.0",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/cba34259-3bf4-4ef8-b7f3-1c3c66b7991b_425x425.JPG",
        name:"LA CARNE CHICKEN PIRI PIRI 300g",
        qty:"1 Pc",
        disAmt:"315.00",
        mrp:"₹340.0",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9f287bfb-a74b-46d9-a328-465804410ee9_425x425.jpg",
        name:"ALF FARMS PORK HAM 150 G",
        qty:"1 Pc",
        disAmt:"155.00",
        mrp:"₹170.0",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ef3cff84-d958-43f3-80f5-15c1c478b3d6_425x425.jpg",
        name:"BON APPETITE PORK CHORIZO 1KG",
        qty:"1 kg",
        disAmt:"2,475.00",
        mrp:"₹2750.0",
    }
]
trendData(trendArr,0,4);
function trendData(trendArr,start,end){
    for (let i=start; i<end; i++){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.setAttribute("src",trendArr[i].img);

    let time=document.createElement("p");
    time.innerText="DELIVERY IN 90 MINUTES";

    let name=document.createElement("p");
    name.innerText=trendArr[i].name;

    let qty=document.createElement("p");
    qty.innerText=trendArr[i].qty;

    let disAmt=document.createElement("p");
    disAmt.innerText="Buy @ Rs."+trendArr[i].disAmt+"/-";

    let mrp=document.createElement("a");
    let dis=document.createElement("s");
    dis.innerText=trendArr[i].mrp;
    mrp.innerText="MRP ";
    mrp.append(dis)

    let price=document.createElement("a");
    price.innerText="₹"+trendArr[i].disAmt;

    let addToCart=document.createElement("button");
    let span=document.createElement("span");
    span.setAttribute("class","material-symbols-outlined")
    span.innerText="shopping_cart"
    addToCart.append(span);
    div.append(img,time,name,qty,disAmt,mrp,price,addToCart);
    document.querySelector("#trend").append(div);
}
}
let imgStat=0;
document.querySelector("#rightBtn1").addEventListener("click",function(){
    document.querySelector("#trend").innerHTML=""
    imgStat++;
    if(imgStat==1){
        trendData(trendArr,4,8);
    }
    if(imgStat==2){
        trendData(trendArr,0,4);
        imgStat=0;
    }
})
document.querySelector("#leftBtn1").addEventListener("click",function(){
    document.querySelector("#trend").innerHTML=""
    imgStat--;
    if(imgStat==-1){
        trendData(trendArr,4,8);
        imgStat=1;
    }
    if(imgStat==0){
        trendData(trendArr,0,4);
    }
})

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
        mrp:"₹80.75",
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

    let addToCart=document.createElement("button");
    let span=document.createElement("span");
    span.setAttribute("class","material-symbols-outlined")
    span.innerText="shopping_cart"
    addToCart.append(span);
    div.append(img,time,name,qty,mrp,addToCart);
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

let banner2=[
    "https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg",
    "https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_pastaBlog_banner.jpg",
    "https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg",
]
let bannerStat=0;
let bann=document.querySelector("#banner2>img")
document.querySelector("#rightBtn3").addEventListener("click",function(){
    bannerStat++;
    if(bannerStat==banner2.length){
        bannerStat=0;
    }
    bann.src=banner2[bannerStat];
})
document.querySelector("#leftBtn3").addEventListener("click",function(){
    bannerStat--;
    if(bannerStat<0){
        bannerStat=banner2.length-1;
    }
    bann.src=banner2[bannerStat];
})

let whatsTrending=[
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg",
        name:"HA TAPIOCA FLOUR 400G",
        qty:"1 Pc",
        mrp:"210",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6b0dd5aa-bbfe-4961-b40a-2114246bcae9_425x425.jpg",
        name:"Kwality Wall's Ice Cream - Magnum C..",
        qty:"1 Pc",
        mrp:"80",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/120d587f-37c9-4743-bc37-2cbb7bd57025_425x425.jpg",
        name:"HA ORGANIC MOONG DAL YELLOW",
        qty:"1 Pc",
        mrp:"149",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/dbffcc93-9bce-442f-837f-d5d5f073c0c0_425x425.jpg",
        name:"Haagen-Dazs Ice Cream - Mango Ras..",
        qty:"1 Pc",
        mrp:"780",
    },
]
trendOffer(whatsTrending)
function trendOffer(whatsTrending){
    whatsTrending.forEach(function(elem){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",elem.img);
    
        let time=document.createElement("p");
        time.innerText="DELIVERY IN 90 MINUTES";
    
        let name=document.createElement("p");
        name.innerText=elem.name;
    
        let qty=document.createElement("p");
        qty.innerText=elem.qty;
    
        let mrp=document.createElement("a");
        mrp.innerText="MRP ₹"+elem.mrp;
    
        let addToCart=document.createElement("button");
        let span=document.createElement("span");
        span.setAttribute("class","material-symbols-outlined")
        span.innerText="shopping_cart"
        addToCart.append(span);
        div.append(img,time,name,qty,mrp,addToCart);
        document.querySelector("#trendingOff").append(div);
    })
}

let offerArr=[
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8fa1abad-91c9-4110-866c-e51e39a5b8c1_425x425.jpg",
        name:"IFB SMALL PRAWN 200G",
        qty:"1 Pc",
        disamt:"165",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6b0dd5aa-bbfe-4961-b40a-2114246bcae9_425x425.jpg",
        name:"Kwality Wall's Ice Cream - Magnum C..",
        qty:"1 Pc",
        disamt:"216",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/120d587f-37c9-4743-bc37-2cbb7bd57025_425x425.jpg",
        name:"HA ORGANIC MOONG DAL YELLOW",
        qty:"1 Pc",
        disamt:"125.1",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/dbffcc93-9bce-442f-837f-d5d5f073c0c0_425x425.jpg",
        name:"Haagen-Dazs Ice Cream - Mango Ras..",
        qty:"1 Pc",
        disamt:"62.1",
    },
]
offer(offerArr)
function offer(offerArr){
    offerArr.forEach(function(elem){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",elem.img);
    
        let time=document.createElement("p");
        time.innerText="DELIVERY IN 90 MINUTES";
    
        let name=document.createElement("p");
        name.innerText=elem.name;
    
        let qty=document.createElement("p");
        qty.innerText=elem.qty;

        let price=document.createElement("a");
        price.innerText="₹"+elem.disamt;

        let addToCart=document.createElement("button");
        let span=document.createElement("span");
        span.setAttribute("class","material-symbols-outlined")
        span.innerText="shopping_cart"
        addToCart.append(span);
        div.append(img,time,name,qty,price,addToCart);
        document.querySelector("#offer").append(div);
    })
}
let off=document.querySelector("#offTab")
off.addEventListener("click",function(){
    document.querySelector("#offer").innerHTML="";
    off.style.backgroundColor="white";
    off.style.color="rgba(146,190,77,255)";
    off.style.borderBottom=" 2px solid rgba(146,190,77,255)"
    org.style.backgroundColor="#f3eded";
    org.style.color="black";
    org.style.borderBottom="0px";
    heal.style.backgroundColor="#f3eded";
    heal.style.color="black";
    heal.style.borderBottom="0px";
    gif.style.backgroundColor="#f3eded";
    gif.style.color="black";
    gif.style.borderBottom="0px";
    offer(offerArr)
})

let organicArr=[
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b6be1126-0fba-41aa-9644-159a48b0076f_425x425.jpg",
        name:"Organic Wheat Flour - Healthy Alter..",
        qty:"500 g",
        disamt:"75",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1300491_1_425x425.jpg",
        name:"CONCISOUS FOOD RAW SUGAR 500G",
        qty:"1 Pc",
        disamt:"86.4",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/20155f80-b4c9-45dd-928b-6df91cb1da9d_425x425.jpg",
        name:"HA ORGANIC FLAX SEEDS 100G",
        qty:"1 Pc",
        disamt:"49",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/aff5852b-b487-45f8-b65a-22cbc4842982_425x425.jpg",
        name:"HA CORIANDER PWD 100G",
        qty:"1 Pc",
        disamt:"59",
    },
]

let org=document.querySelector("#orgTab")
org.addEventListener("click",function(){
    document.querySelector("#offer").innerHTML="";
    org.style.backgroundColor="white";
    org.style.color="rgba(146,190,77,255)";
    org.style.borderBottom=" 2px solid rgba(146,190,77,255)"
    off.style.backgroundColor="#f3eded";
    off.style.color="black";
    off.style.borderBottom="0px"
    heal.style.backgroundColor="#f3eded";
    heal.style.color="black";
    heal.style.borderBottom="0px";
    gif.style.backgroundColor="#f3eded";
    gif.style.color="black";
    gif.style.borderBottom="0px";
    offer(organicArr)
})

let healthArr=[
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/335e1b40-3a56-4e19-9f6c-010887d4dd55_425x425.jpg",
        name:"HA SPROUTED AMARANTH FLOUR 400G",
        qty:"1 Pc",
        disamt:"250",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1f4696d3-e753-463e-a87c-1457b2e2f242_425x425.jpg",
        name:"Organic Flax Seeds - Healthy Altern..",
        qty:"100 g",
        disamt:"48",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9ea315fa-fcd1-4d3b-a968-17a78bfafc5b_425x425.jpg",
        name:"HA SPROUTED QUINOA FLOUR 400G",
        qty:"1 Pc",
        disamt:"600",
    },
    {
        img:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/335e1b40-3a56-4e19-9f6c-010887d4dd55_425x425.jpg",
        name:"HA SPROUTED AMARANTH FLOUR 400G",
        qty:"1 Pc",
        disamt:"250",
    },
]

let heal=document.querySelector("#heal")
heal.addEventListener("click",function(){
    document.querySelector("#offer").innerHTML="";
    heal.style.backgroundColor="white";
    heal.style.color="rgba(146,190,77,255)";
    heal.style.borderBottom=" 2px solid rgba(146,190,77,255)"
    off.style.backgroundColor="#f3eded";
    off.style.color="black";
    off.style.borderBottom="0px"
    org.style.backgroundColor="#f3eded";
    org.style.color="black";
    org.style.borderBottom="0px";
    gif.style.backgroundColor="#f3eded";
    gif.style.color="black";
    gif.style.borderBottom="0px";
    offer(healthArr)
})
let gif=document.querySelector("#gif")
gif.addEventListener("click",function(){
    document.querySelector("#offer").innerHTML="";
    gif.style.backgroundColor="white";
    gif.style.color="rgba(146,190,77,255)";
    gif.style.borderBottom=" 2px solid rgba(146,190,77,255)"
    off.style.backgroundColor="#f3eded";
    off.style.color="black";
    off.style.borderBottom="0px"
    org.style.backgroundColor="#f3eded";
    org.style.color="black";
    org.style.borderBottom="0px";
    heal.style.backgroundColor="#f3eded";
    heal.style.color="black";
    heal.style.borderBottom="0px";
    offer(healthArr)
})

let brandsArr=[
    "https://d1z88p83zuviay.cloudfront.net/Images/lexlusif.jpg",
    "https://d1z88p83zuviay.cloudfront.net/Images/healthy.jpg",
    "https://d1z88p83zuviay.cloudfront.net/Images/cambay-tiger.jpg",
    "https://d1z88p83zuviay.cloudfront.net/Images/real-thai.jpg",
    "https://d1z88p83zuviay.cloudfront.net/Images/barilla.jpg",
    "https://d1z88p83zuviay.cloudfront.net/Images/ceres.jpg",
    "https://d1z88p83zuviay.cloudfront.net/Images/lindt.jpg",
    "https://d1z88p83zuviay.cloudfront.net/Images/silk.jpg",
    "https://d1z88p83zuviay.cloudfront.net/Images/davidoff-cafe.jpg",
    "https://d1z88p83zuviay.cloudfront.net/Images/lexlusif.jpg"
]
brandFunc(brandsArr,0,5)
function brandFunc(brandsArr,start,end){
    for(let i=start; i<end; i++){
        let img=document.createElement("img");
        img.setAttribute("src",brandsArr[i])
        document.querySelector("#brands").append(img)
    }
}
let brandCount=0;
document.querySelector("#leftBtn4").addEventListener("click",function(){
    document.querySelector("#brands").innerHTML=""
    brandCount++;
    if(brandCount==1){
        brandFunc(brandsArr,5,10);
    }
    if(brandCount==2){
        brandFunc(brandsArr,0,5);
        brandCount=0;
    }
})
// import { test } from "@playwright/test";
// let token:string;
// let productId: string;

// test("post_shopperlogin_testing",async({request})=>{
//     let r1 = await request.post("https://www.shoppersstack.com/shopping/users/login",{
//         data:{
//             email:"nikhiltank.csai26@gmail.com",
//             password:"22EJCCA036n@",
//             role:"SHOPPER"
//         },ignoreHTTPSErrors:true
//     })
//     let resp = await r1.json()
//     token=resp.data.jwtToken
//     console.log(resp)
//     console.log(token);
// });

// test("get",async({request})=>{
//     let r2 = await request.post("https://www.shoppersstack.com/shopping/products/alpha",{
//         data:{
//             // email:"nikhiltank.csai26@gmail.com",
//             // password:"22EJCCA036n@",
//             // role:"SHOPPER"
//         },ignoreHTTPSErrors:true
//     })
//     console.log(r2)
// });


// test("get2",async({request})=>{
//     let r3 = await request.get("https://www.shoppersstack.com/shopping/products/alpha",{
//         data:{
//             "brand": "string",
//             "category": "string",
//             "createdDateTime": "2026-03-27T09:38:29.463Z",
//             "description": "string",
//             "merchantId": 0,
//             "name": "string",
//             "offer": 0,
//             "price": 0,
//             "productId": 0,
//             "productImageURLs": [
//                 "string"
//             ],
//             "quantity": 0,
//             "rating": 0,
//             "reviews": [
//                 {
//                     "dateTime": "2026-03-27T09:38:29.463Z",
//                     "description": "string",
//                     "heading": "string",
//                     "rating": 0,
//                     "shopperId": 0,
//                     "shopperName": "string"
//                 }
//             ],
//             "searchTags": [
//                 "string"
//             ],
//             "status": "ACTIVE",
//             "thumbnailURL": "string",
//             "title": "string",
//             "type": "string",
//             "zoneId": "string"
//         },
//         ignoreHTTPSErrors: true
//     })

//     let resp2 = await r3.json();
//     productId = resp2.data.productId;
//     console.log(resp2);
//     console.log(productId);
// });


import { test,request } from "@playwright/test";
let token:string;

test("post_shopperlogin_testing",async({request})=>{
    let r1 = await request.post("https://www.shoppersstack.com/shopping/users/login",{
        data:{
            email:"nikhiltank.csai26@gmail.com",
            password:"22EJCCA036n@",
            role:"SHOPPER"
        },ignoreHTTPSErrors:true
    })
    let resp = await r1.json()
    token=resp.data.jwtToken
    console.log(resp)
    console.log(token);

    let r2 = await request.get("https://www.shoppersstack.com/shopping/products/alpha",{
        // headers:{
        //     Authorization:`Bearer ${token}`     }
        ignoreHTTPSErrors:true  ,params:{}      
    })
    console.log(await r2.json())
    let r3 = await request.get("https://www.shoppersstack.com/shopping/shoppers/377937/orders",{
        headers:{
             Authorization:`Bearer ${token}`     }
        ,ignoreHTTPSErrors:true  ,params:{}      
    })
    console.log(await r3.json());

    let r4 = await request.post("https://www.shoppersstack.com/shopping/shoppers/377937/wishlist",{
        data:{
            "productId": "51",
            "quantity": "2"
        },
        headers:{
             Authorization:`Bearer ${token}`     }
        ,ignoreHTTPSErrors:true  ,params:{}
    })
    console.log(await r4.json());

    let r5 = await request.get("https://www.shoppersstack.com/shopping/shoppers/377937/wishlist",{
        headers:{
             Authorization:`Bearer ${token}`     }
        ,ignoreHTTPSErrors:true  ,params:{}      
    })
    console.log(await r5.json());

    
    let r6 = await request.post("https://www.shoppersstack.com/shopping/shoppers/377937/carts",{
        data:{
            "productId": "51",
            "quantity": "2"
        },
        headers:{
             Authorization:`Bearer ${token}`     }
        ,ignoreHTTPSErrors:true  ,params:{}
    })
    console.log(await r6.json());

    let r7 = await request.get("https://www.shoppersstack.com/shopping/shoppers/377937/carts",{
        headers:{
             Authorization:`Bearer ${token}`     }
        ,ignoreHTTPSErrors:true  ,params:{}      
    })
    console.log(await r7.json());

    let r8 = await request.post("https://www.shoppersstack.com/shopping/shoppers/377937/orders",{
        data:{
            "addressId": "151707",
            "paymentMode": "COD"
        },
        headers:{
             Authorization:`Bearer ${token}`     }
        ,ignoreHTTPSErrors:true  ,params:{}
    })
    console.log(await r8.json());

    let r9 = await request.get("https://www.shoppersstack.com/shopping/shoppers/377937/orders",{
        headers:{
             Authorization:`Bearer ${token}`     }
        ,ignoreHTTPSErrors:true  ,params:{}      
    })
    console.log(await r9.json());

    let r10 = await request.post("https://www.shoppersstack.com/shopping/shoppers/377937/address",{
        data:{"name": "Nikhil Tank",
      "phone": "8387089111",
      "buildingInfo": "Flat 309",
      "streetInfo": "Ajmer Road",
      "landmark": "Near Chitrakoot Stadium",
      "city": "Thane",
      "state": "Maharashtra",
      "country": "India",
      "pincode": "432101",
      "type": "Home"
    },
            
    headers:{
             Authorization:`Bearer ${token}`     }
        ,ignoreHTTPSErrors:true  ,params:{}
    })
    console.log(await r10.json());



    let r11 = await request.get("https://www.shoppersstack.com/shopping/shoppers/377937/address",{
        headers:{
             Authorization:`Bearer ${token}`     }
        ,ignoreHTTPSErrors:true  ,params:{}      
    })
    console.log(await r11.json());


    let r12 = await request.post("https://www.shoppersstack.com/shopping/reviews/?Product_Id=51",{
        data:{  "dateTime": "2026-03-28T07:11:51.092Z",
  "description": "Great service and smooth shopping experience. Delivery was on time.",
  "heading": "Excellent Experience",
  "rating": 5,
  "shopperId": 377937,
  "shopperName": "Nikhil"
    },
            
    headers:{
             Authorization:`Bearer ${token}`     }
        ,ignoreHTTPSErrors:true  ,params:{}
    })

    // console.log(await r12.json());

let r13 = await request.get("https://www.shoppersstack.com/shopping/reviews/51",{
        headers:{
             Authorization:`Bearer ${token}`     }
        ,ignoreHTTPSErrors:true  ,params:{}      
    })


let r14 = await request.delete("https://www.shoppersstack.com/shopping/shoppers/377937/address/151707",{
        headers:{
             Authorization:`Bearer ${token}`     }
        ,ignoreHTTPSErrors:true  ,params:{}      
    })


let r15 = await request.delete("https://www.shoppersstack.com/shopping/377937/carts/51",{
        headers:{
             Authorization:`Bearer ${token}`     }
        ,ignoreHTTPSErrors:true  ,params:{}      
    })


let r16 = await request.delete("https://www.shoppersstack.com/shopping/shoppers/377937/wishlist/51",{
        headers:{
             Authorization:`Bearer ${token}`     }
        ,ignoreHTTPSErrors:true  ,params:{}      
    })



})
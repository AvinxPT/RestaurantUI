const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const menuData = {
    "menuList":[
        {
            "id":"1",
            "restaurantId":"1",
            "name":"Cabidela",
            "image":"food1.png",
            "price":10,
            "group":"String",
            "sales":[
                {
                "description":"something",
                "price":10,
                "hours": [
                    {
                        "from": "10:00:00",
                        "to": "20:00:00",
                        "days": [1,2,3]
                    }
                ]
                }
            ]
        },
        {
            "id": "2",
            "restaurantId":"1",
            "name":"Leitao",
            "image":"food2.png",
            "price":10,
            "group":"String",
            "sales":[
                {
                "description":"something",
                "price":10,
                "hours": [
                    {
                        "from": "10:00:00",
                        "to": "20:00:00",
                        "days": [1,2,3]
                    }
                ]
                }
            ]
        },
        {
            "id": "3",
            "restaurantId":"1",
            "name":"Leitao",
            "image":"food2.png",
            "price":10,
            "group":"String",
            "sales":[
                {
                "description":"something",
                "price":10,
                "hours": [
                    {
                        "from": "10:00:00",
                        "to": "20:00:00",
                        "days": [1,2,3]
                    }
                ]
                }
            ]
        },
        {
            "id": "4",
            "restaurantId":"1",
            "name":"Leitao",
            "image":"food2.png",
            "price":10,
            "group":"String",
            "sales":[
                {
                "description":"something",
                "price":10,
                "hours": [
                    {
                        "from": "10:00:00",
                        "to": "20:00:00",
                        "days": [1,2,3]
                    }
                ]
                }
            ]
        }
    ]
}

const data = {
    "restaurantList":[
        {
            "id":"1",
            "name":"Restaurant of patanisca",
            "address":"Address1",
            "img":"rest1.png",
            "hours":[
                {
                    "from":"10:00:00",
                    "to":"22:00:00"
                }
            ]
        },
        {
            "id":"2",
            "name":"sushi-ya",
            "address":"Address2",
            "img":"rest2.png",
            "hours":[
                {
                    "from":"08:00:00",
                    "to":"10:00:00"
                }
            ]
        },
        {
            "id":"3",
            "name":"fisherman",
            "address":"Address3",
            "img":"rest3.png",
            "hours":[
                {
                    "from":"11:00:00",
                    "to":"23:00:00"
                }
            ]
        }
    ]
}

// new API route: GET /users, returning a list of restaurants
app.get('/users', (request, response) => {
  response.json(data);
});

//API route : returning list of menus
app.get('/menus', (request, response) =>{
    response.json(menuData);
})

// Singular request rest
app.get('/restaurant/:id', (request, response) => {
    console.log(request.params.id);
    let restaurantFiltered;
    
    for(let x=0 ; x<data.restaurantList.length; x++){
        if(request.params.id === data.restaurantList[x].id){
            restaurantFiltered = data.restaurantList[x];
            break;
        }
    }
    response.json(restaurantFiltered);
})

// ---------------------- REBOCAR ------------------------
app.get('/restaurant/:id/menu', (request, response) => {
    let menusFlitered
    
    for(let x=0; x<menuData.menuList.length; x++){
        if(menuData.menuList[x].restaurantId === request.params.id){
            menusFlitered = menuData.menuList[x];
        }
    }

    response.json(menusFlitered);
})

app.listen(3000, () => {
    console.log('server is running at port 3000');
});
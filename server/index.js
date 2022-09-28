const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const menuData = {
    "menuList":[
        {
            "id":"1",
            "restaurantId":"1",
            "name":"Avocado",
            "image":"https://www.listchallenges.com/f/items/4a98113a-62e5-444a-82a1-627089b81bbb.jpg",
            "price":10,
            "group":"String",
            "sales":[
                {
                "description":"The simplest way to enjoy avocados is by sprinkling them with a pinch of salt and pepper. You can also try other seasonings like paprika, cayenne pepper, balsamic vinegar, or lemon juice.",
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
            "name":"Watercress Sandwich",
            "image":"https://www.listchallenges.com/f/items/583f1903-1c6a-4175-bc28-7bc3853cffac.jpg",
            "price":10,
            "group":"String",
            "sales":[
                {
                "description":"Watercress Tea Sandwich is a very traditional tea sandwich. During Victorian times, watercress was also known as Poor Man's Bread.",
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
            "name":"Flan",
            "image":"https://www.listchallenges.com/f/items/e5c177e2-b242-4d5e-9f04-daf93b399e59.jpg",
            "price":10,
            "group":"String",
            "sales":[
                {
                "description":"This baked flan recipe is made with condensed and evaporated milk and baked in a pie dish",
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
            "name":"Calamari",
            "image":"https://www.listchallenges.com/f/items/0f04265a-2252-4dd1-b2af-fb59cf42b2d6.jpg",
            "price":10,
            "group":"String",
            "sales":[
                {
                "description":"For the benefit of those who are not familiar to this yummy appetizer, calamari refers to a squid dish",
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
            "id": "5",
            "restaurantId":"1",
            "name":"Jumbalaya",
            "image":"https://www.listchallenges.com/f/items/5a8bd83d-9981-45b5-b85a-fdf6d45d4a26.jpg",
            "price":10,
            "group":"String",
            "sales":[
                {
                "description":"An easy Jambalaya recipe is pure comfort food filled to the brim with flavour. The aromatic trinity of Cajun/Creole cooking: onion, celery, and bell peppers",
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
            "id":"1",
            "restaurantId":"2",
            "name":"BLT",
            "image":"https://www.listchallenges.com/f/items/568cf5c1-e5d6-444a-a7c5-866d4ee69425.jpg",
            "price":10,
            "group":"String",
            "sales":[
                {
                "description":"Amazing Sandwich",
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
            "id": "5",
            "restaurantId":"1",
            "name":"Jumbalaya",
            "image":"https://www.listchallenges.com/f/items/5a8bd83d-9981-45b5-b85a-fdf6d45d4a26.jpg",
            "price":10,
            "group":"String",
            "sales":[
                {
                "description":"An easy Jambalaya recipe is pure comfort food filled to the brim with flavour. The aromatic trinity of Cajun/Creole cooking: onion, celery, and bell peppers",
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
            "id": "5",
            "restaurantId":"1",
            "name":"Jumbalaya",
            "image":"https://www.listchallenges.com/f/items/5a8bd83d-9981-45b5-b85a-fdf6d45d4a26.jpg",
            "price":10,
            "group":"String",
            "sales":[
                {
                "description":"An easy Jambalaya recipe is pure comfort food filled to the brim with flavour. The aromatic trinity of Cajun/Creole cooking: onion, celery, and bell peppers",
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
            "id": "5",
            "restaurantId":"1",
            "name":"Jumbalaya",
            "image":"https://www.listchallenges.com/f/items/5a8bd83d-9981-45b5-b85a-fdf6d45d4a26.jpg",
            "price":10,
            "group":"String",
            "sales":[
                {
                "description":"An easy Jambalaya recipe is pure comfort food filled to the brim with flavour. The aromatic trinity of Cajun/Creole cooking: onion, celery, and bell peppers",
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
            "name":"Cheesecake Factory",
            "address":"767 Walnutwood St.Barrington, IL 60010",
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
            "name":"Shokolaat",
            "address":"453 Crescent Dr.Piscataway, NJ 08854",
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
            "name":"Gordon Biersch",
            "address":"97 West Buckingham Ave.Loxahatchee, FL 33470",
            "img":"rest3.png",
            "hours":[
                {
                    "from":"11:00:00",
                    "to":"23:00:00"
                }
            ]
        },
        {
            "id":"4",
            "name":"Old Pro",
            "address":"9474 Gulf Street Bettendorf, IA 52722",
            "img":"rest3.png",
            "hours":[
                {
                    "from":"11:00:00",
                    "to":"23:00:00"
                }
            ]
        },
        {
            "id":"5",
            "name":"House of Bagels",
            "address":"Address3",
            "img":"rest3.png",
            "hours":[
                {
                    "from":"11:00:00",
                    "to":"23:00:00"
                }
            ]
        },
        {
            "id":"6",
            "name":"La Strada",
            "address":"550 Constitution Dr.South Bend, IN 46614",
            "img":"rest3.png",
            "hours":[
                {
                    "from":"11:00:00",
                    "to":"23:00:00"
                }
            ]
        },
        {
            "id":"7",
            "name":"Sprout Café",
            "address":"78 W. Beechwood CourtShelton, CT 06484",
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
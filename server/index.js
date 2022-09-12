const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

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

// new API route: GET /users, returning a list of users
app.get('/users', (request, response) => {
  response.json(data);
});

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

app.listen(3000, () => {
    console.log('server is running at port 3000');
});
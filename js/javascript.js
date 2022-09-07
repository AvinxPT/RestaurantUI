//let restaurantList = [
//    {
//        id:"1",
//        name:"Restaurant1",
//        address:"Address1",
//        img:"rest1.png",
//        hours:[
//            {
//                from:"10:00:00",
//                to:"22:00:00"
//            }
//        ]
//    },
//    {
//        id:"2",
//        name:"Restaurant2",
//        address:"Address2",
//        img:"rest2.png",
//        hours:[
//            {
//                from:"08:00:00",
//                to:"10:00:00"
//            }
//        ]
//    },
//    {
//        id:"3",
//        name:"Restaurant3",
//        address:"Address3",
//        img:"rest3.png",
//        hours:[
//            {
//                from:"11:00:00",
//                to:"23:00:00"
//            }
//        ]
//    },
//];

//current time
var currentDate = new Date();
var currentTime = currentDate.toLocaleTimeString();
//console.log(currentTime);
var restaurantId = "";

function drawTable(input, restaurantList){

    //input = 1 - desenha todos
    //input = 2 - desenha apenas o existente no search

    document.getElementById("tabela").innerHTML="";
    
    var table = document.getElementById("tabela");



    //Header Values
    var newTrHeader = document.createElement('tr');
    var newThHeaderName = document.createElement('th');
    var newThHeaderAddress = document.createElement('th');
    var newThHeaderImg = document.createElement('th');
    var newThHeaderStatus = document.createElement('th');
    var newThMoreInfo = document.createElement('th');

    newThHeaderName.innerHTML = "Name";
    newThHeaderAddress.innerHTML = "Address";
    newThHeaderImg.innerHTML = "Image";
    newThHeaderStatus.innerHTML = "Open/Closed";
    newThMoreInfo.innerHTML = "Details";



    table.appendChild(newTrHeader);
    newTrHeader.appendChild(newThHeaderImg);
    newTrHeader.appendChild(newThHeaderName);
    newTrHeader.appendChild(newThHeaderAddress);
    newTrHeader.appendChild(newThHeaderStatus);
    newTrHeader.appendChild(newThMoreInfo);

    for (var x=0; x<restaurantList.length; x++) {
        var newTr = document.createElement('tr');
        var newTdName = document.createElement('td');
        var newTdAddress = document.createElement('td');
            
        //image adding
        var newTdImg = document.createElement('td');
        var newImg = document.createElement('img');
        newImg.src = restaurantList[x].img;
        newTdImg.appendChild(newImg);

            
        
        //Restaurant status
        var newTdStatus = document.createElement('td');
        
        //opening time
        var status = restaurantList[x].hours[0];
        var fromStatus = status.from; 
        //console.log(fromStatus);
        
        //closing time
        var toStatus = status.to;

        //Restaurant Info Link
        let newTdRestaurantLink = document.createElement('td');
        let restaurantLink = document.createElement('a');
        let contentText = document.createTextNode('Details');
        restaurantLink.href="Restaurant.html";
        restaurantLink.appendChild(contentText);
        newTdRestaurantLink.appendChild(restaurantLink);
        
        
        //console.log(restaurantLink);

        //console.log(toStatus);
        if(currentTime >= fromStatus && currentTime <= toStatus) {
            newTdStatus.innerHTML = "Open";
        } else {
            newTdStatus.innerHTML = "Closed";
        }
        newTdName.innerHTML = restaurantList[x].name;
        newTdAddress.innerHTML = restaurantList[x].address;
        
        
        if(input === 1){
            //Desenha todos os elementos na tabela
            //console.log(newTdAddress, newTdName, newImg);
            table.appendChild(newTr);
            newTr.appendChild(newTdImg);
            newTr.appendChild(newTdName);
            newTr.appendChild(newTdAddress);
            newTr.appendChild(newTdStatus);
            newTr.appendChild(newTdRestaurantLink);
        }else if (input === 2){
            if(newSearch === newTdName.innerHTML){
                //Desenha o pedido na tabela
                //console.log(newTdAddress, newTdName, newImg);
                table.appendChild(newTr);
                newTr.appendChild(newTdName);
                newTr.appendChild(newTdAddress);
                newTr.appendChild(newTdImg);
                newTr.appendChild(newTdStatus);
                newTr.appendChild(newTdRestaurantLink);
            }
        }
    }
    //need a return for restaurant page
}



function restaurantInfo(){
    var restaurantIntro = document.getElementById('intro'); 
    restaurantIntro.innerHTML="";
    //console.log("function running");
    
    //image for the div
    var newImgRestaurant = document.createElement('img');
    newImgRestaurant.className = "image";
    newImgRestaurant.src = restaurantList[0].img;
    restaurantIntro.appendChild(newImgRestaurant);
    console.log(restaurantIntro);
    
    //content of restaurant description
    var restaurantNameIntro = document.createElement('p');
    restaurantNameIntro.className = "content";
    restaurantNameIntro.innerHTML = restaurantList[0].name;
    restaurantIntro.appendChild(restaurantNameIntro);

    //content of restaurant address
    var restaurantAddressIntro = document.createElement('p');
    restaurantAddressIntro.className = "content";
    restaurantAddressIntro.innerHTML = restaurantList[0].address;
    restaurantIntro.appendChild(restaurantAddressIntro);

    //var to use hour info
    var hourStatus = restaurantList[0].hours[0];
    var hourFrom = hourStatus.from;
    var hourTo = hourStatus.to;

    console.log(hourStatus, hourFrom, hourTo);
    
    //Restaurant Schedule
    var restaurantScheduleIntro = document.createElement('p');
    restaurantScheduleIntro.className = "content";
    restaurantScheduleIntro.innerHTML = "From "+hourFrom+" to "+hourTo;
    restaurantIntro.appendChild(restaurantScheduleIntro);
}





function jsonContent () {
    fetch('http://127.0.0.1:5500/js/db.json')
    .then((resp) => resp.json())
    .then(data => {
        for(i=0; i<data.restaurantList.length; i++){
            drawTable(1, data.restaurantList);
        }
    })
    .catch(function(error){
        console.log("deu erro");
    })
}

function jsonFilter(){
    fetch('http://127.0.0.1:5500/js/db.json')
    .then((resp) => resp.json())
    .then(data => {
        for(i=0; i<data.restaurantList.length; i++){
            drawTable(2, data.restaurantList);
        }
    })
    .catch(function(error){
        console.log("deu erro");
    })
}












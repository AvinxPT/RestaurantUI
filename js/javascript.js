let restaurantList = [
    {
        name:"Restaurant1",
        address:"Address1",
        img:"rest1.png",
        hours:[
            {
                from:"10:00:00",
                to:"22:00:00"
            }
        ]
    },
    {
        name:"Restaurant2",
        address:"Address2",
        img:"rest2.png",
        hours:[
            {
                from:"08:00:00",
                to:"10:00:00"
            }
        ]
    },
    {
        name:"Restaurant3",
        address:"Address3",
        img:"rest3.png",
        hours:[
            {
                from:"11:00:00",
                to:"23:00:00"
            }
        ]
    },
];

//current time
var currentDate = new Date();
var currentTime = currentDate.toLocaleTimeString();
//console.log(currentTime);


//desenha tabela
function drawRestaurants() {
    
    
    document.getElementById("tabela").innerHTML="";
    
    var table = document.getElementById("tabela");

    //Header Values
    var newTrHeader = document.createElement('tr');
    var newThHeaderName = document.createElement('th');
    var newThHeaderAddress = document.createElement('th');
    var newThHeaderImg = document.createElement('th');
    var newThHeaderStatus = document.createElement('th');

    newThHeaderName.innerHTML = "Name";
    newThHeaderAddress.innerHTML = "Address";
    newThHeaderImg.innerHTML = "Image";
    newThHeaderStatus.innerHTML = "Open/Closed";



    table.appendChild(newTrHeader);
    newTrHeader.appendChild(newThHeaderImg);
    newTrHeader.appendChild(newThHeaderName);
    newTrHeader.appendChild(newThHeaderAddress);
    newTrHeader.appendChild(newThHeaderStatus);
    

    //Table Content
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
            //console.log(toStatus);

            if(currentTime >= fromStatus && currentTime <= toStatus) {
                newTdStatus.innerHTML = "Open";
            } else {
                newTdStatus.innerHTML = "Closed";
            }


            newTdName.innerHTML = restaurantList[x].name;
            newTdAddress.innerHTML = restaurantList[x].address;
            
    
            //console.log(newTdAddress, newTdName, newImg);
            table.appendChild(newTr);
            newTr.appendChild(newTdImg);
            newTr.appendChild(newTdName);
            newTr.appendChild(newTdAddress);
            newTr.appendChild(newTdStatus);
        }
}

//adiciona fields a tabela
//function addRestaurants() {
////clearRestaurants();

//    var newObj = {};

//    var newName = document.getElementById("name").value;
//    var newAddress = document.getElementById("address").value;

//    newObj.name = newName;
//    newObj.address = newAddress;  
    //console.log(newObj);

//    restaurantList.push(newObj);
//    console.log(restaurantList);
    
    //drawRestaurants();
//}


function searchRestaurants(){
    var newSearch = document.getElementById("name").value; 
    
    
    document.getElementById("tabela").innerHTML="";
    
    var table = document.getElementById("tabela");

    //Header Values
    var newTrHeader = document.createElement('tr');
    var newThHeaderName = document.createElement('th');
    var newThHeaderAddress = document.createElement('th');
    var newThHeaderImg = document.createElement('th');
    var newThHeaderStatus = document.createElement('th');

    newThHeaderName.innerHTML = "Name";
    newThHeaderAddress.innerHTML = "Address";
    newThHeaderImg.innerHTML = "Image";
    newThHeaderStatus.innerHTML = "Open/Closed";

    table.appendChild(newTrHeader);
    newTrHeader.appendChild(newThHeaderName);
    newTrHeader.appendChild(newThHeaderAddress);
    newTrHeader.appendChild(newThHeaderImg);
    newTrHeader.appendChild(newThHeaderStatus);

    //Table Content
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
            console.log(fromStatus);
            //closing time
            var toStatus = status.to;
            console.log(toStatus);

            if(currentTime >= fromStatus && currentTime <= toStatus) {
                newTdStatus.innerHTML = "Open";
            } else {
                newTdStatus.innerHTML = "Closed";
            }


            
            newTdName.innerHTML = restaurantList[x].name;
            newTdAddress.innerHTML = restaurantList[x].address;
            
            //console.log(newSearch, newTdName.innerHTML);
            if(newSearch === newTdName.innerHTML){
                //console.log(newTdAddress, newTdName, newImg);
                table.appendChild(newTr);
                newTr.appendChild(newTdName);
                newTr.appendChild(newTdAddress);
                newTr.appendChild(newTdImg);
                newTr.appendChild(newTdStatus);
            }
        }


    //console.log(newSearch);
}

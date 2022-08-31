let restaurantList = [
    {
        name:"Restaurant1",
        address:"Address1"
    },
    {
        name:"Restaurant2",
        address:"Address2"
    },
    {
        name:"Restaurant3",
        address:"Address3"
    },
];




//desenha tabela
function drawRestaurants() {
    
    document.getElementById("tabela").innerHTML="";
    
    var table = document.getElementById("tabela");

    var newTrHeader = document.createElement('tr');
    var newThHeaderName = document.createElement('th');
    var newThHeaderAddress = document.createElement('th');

    newThHeaderName.innerHTML = "Name";
    newThHeaderAddress.innerHTML = "Address";

    table.appendChild(newTrHeader);
    newTrHeader.appendChild(newThHeaderName);
    newTrHeader.appendChild(newThHeaderAddress);

    //console.log("yo")
        for (var x=0; x<restaurantList.length; x++) {
            var newTr = document.createElement('tr');
            var newTdName = document.createElement('td');
            var newTdAddress = document.createElement('td');

            newTdName.innerHTML = restaurantList[x].name;
            newTdAddress.innerHTML = restaurantList[x].address;
            
            //console.log(newTdAddress, newTdName);
            table.appendChild(newTr);
            newTr.appendChild(newTdName);
            newTr.appendChild(newTdAddress);
        }
}

//adiciona fields a tabela
function addRestaurants() {
    //clearRestaurants();
    
    var newObj = {};

    var newName = document.getElementById("name").value;
    var newAddress = document.getElementById("address").value;

    newObj.name = newName;
    newObj.address = newAddress;  
    //console.log(newObj);

    restaurantList.push(newObj);
    console.log(restaurantList);
    
    drawRestaurants();
}

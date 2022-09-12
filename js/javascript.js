//current time
var currentDate = new Date();
var currentTime = currentDate.toLocaleTimeString();

//console.log(currentTime);
var restaurantId = "";

//--------------------------------------------------
// restaurantList array
let restaurants = [];
//--------------------------------------------------

//tabela para all rests
var table = document.getElementById("tabela");
//field searchBar
var searchBar = document.getElementById("searchBar");


//Function for Restaurants List Search Bar
function restaurantSearchBar(){
    searchBar = document.getElementById("searchBar");
    searchBar.innerHTML="";

    let restaurantSearchBarLabel = document.createElement('label');
    restaurantSearchBarLabel.htmlFor = "search";

    let restaurantSearchInputField = document.createElement('input');
    restaurantSearchInputField.type = "text";
    restaurantSearchInputField.setAttribute("id", "search");

    searchBar.appendChild(restaurantSearchBarLabel);
    searchBar.appendChild(restaurantSearchInputField);

    //--------------------------------------------------
    
    //input values
    const searchInput = document.getElementById("search");
    const restName = document.getElementsByClassName("name");
    const element = document.getElementsByClassName("element");

    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        console.log(value);
        for(let x=0 ; x<restName.length; x++){
            if (!restName[x].innerHTML.toLowerCase().includes(value)){
                console.log("igual!");
                element[x].classList.add("hide");
            } else {
                element[x].classList.remove("hide");
            }
        }
    })
      
    
    //--------------------------------------------------

}




function allRestaurantsTable(restaurantList){
    
    restaurantSearchBar();
    restaurants = restaurantList;

    document.getElementById("tabela").innerHTML="";

    ////Header Values
    //var newTrHeader = document.createElement('tr');
    //var newThHeaderName = document.createElement('th');
    //var newThHeaderAddress = document.createElement('th');
    //var newThHeaderImg = document.createElement('th');
    //var newThHeaderStatus = document.createElement('th');
    //var newThMoreInfo = document.createElement('th');
//
    //newThHeaderName.innerHTML = "Name";
    //newThHeaderAddress.innerHTML = "Address";
    //newThHeaderImg.innerHTML = "Image";
    //newThHeaderStatus.innerHTML = "Open/Closed";
    //newThMoreInfo.innerHTML = "Details";
//
    //table.appendChild(newTrHeader);
    //newTrHeader.appendChild(newThHeaderImg);
    //newTrHeader.appendChild(newThHeaderName);
    //newTrHeader.appendChild(newThHeaderAddress);
    //newTrHeader.appendChild(newThHeaderStatus);
    //newTrHeader.appendChild(newThMoreInfo);

    
    for (let x=0; x<restaurantList.length; x++) {
        let newTr = document.createElement('tr');
        newTr.className = "element";
        allRestaurantsImages(newTr, restaurantList[x]);
        allRestaurantsNames(newTr, restaurantList[x]);
        allRestaurantsAddresses(newTr, restaurantList[x]);
        allRestaurantsStatus(newTr, restaurantList[x]);
        allRestaurantsLink(newTr, restaurantList[x]);
    }
}

//functions for restaurants table data
function allRestaurantsImages(newTr, restaurantList){
        //image adding
        let newTdImg = document.createElement('td');
        let newImg = document.createElement('img');
        newImg.src = restaurantList.img;
        newTdImg.appendChild(newImg);
        //append na tabela da img
        table.appendChild(newTr);
        newTr.appendChild(newTdImg);
        //--------------------------------     
}

function allRestaurantsNames(newTr, restaurantList){
    let newTdName = document.createElement('td');
    newTdName.className = "name";
    newTdName.innerHTML = restaurantList.name;
    table.appendChild(newTr);
    newTr.appendChild(newTdName);
}

function allRestaurantsAddresses(newTr, restaurantList){
    let newTdAddress = document.createElement('td');
    newTdAddress.className = "address";
    newTdAddress.innerHTML = restaurantList.address;
    table.appendChild(newTr);
    newTr.appendChild(newTdAddress);
}

function allRestaurantsStatus(newTr, restaurantList){
    let newTdStatus = document.createElement('td');
    //opening time
    let status = restaurantList.hours[0];
    let fromStatus = status.from;
    //closing time
    let toStatus = status.to;
    
    if(currentTime >= fromStatus && currentTime <= toStatus) {
        newTdStatus.innerHTML = "Open";
    } else {
        newTdStatus.innerHTML = "Closed";
    }

    table.appendChild(newTr);
    newTr.appendChild(newTdStatus);
}

function allRestaurantsLink (newTr, restaurantList){
    let newTdRestaurantLink = document.createElement('td');
    let restaurantLink = document.createElement('button');
    restaurantLink.appendChild(document.createTextNode("Details"));
    restaurantLink.setAttribute("id",restaurantList.id);
    let restaurantId = restaurantList.id;
    restaurantLink.addEventListener("click", function(){singleRestaurantDetails(restaurantId)});
    newTdRestaurantLink.appendChild(restaurantLink);

    table.appendChild(newTr);
    newTr.appendChild(newTdRestaurantLink);
}

function restaurantInfo(restaurantFiltered){
    document.getElementById('body').innerHTML= ""
    console.log("fez load");

    var restaurantIntro = document.getElementById('singleRestaurantHeader'); 
    restaurantIntro.innerHTML="";
    //console.log("function running");

        
        //image for the div
        var newImgRestaurant = document.createElement('img');
        newImgRestaurant.className = "image";
        newImgRestaurant.src = restaurantFiltered.img;
        restaurantIntro.appendChild(newImgRestaurant);
        //console.log(restaurantIntro);
        
        //content of restaurant description
        var restaurantNameIntro = document.createElement('p');
        restaurantNameIntro.className = "content";
        restaurantNameIntro.innerHTML = restaurantFiltered.name;
        restaurantIntro.appendChild(restaurantNameIntro);

        //content of restaurant address
        var restaurantAddressIntro = document.createElement('p');
        restaurantAddressIntro.className = "content";
        restaurantAddressIntro.innerHTML = restaurantFiltered.address;
        restaurantIntro.appendChild(restaurantAddressIntro);

        //var to use hour info
        var hourStatus = restaurantFiltered.hours[0];
        var hourFrom = hourStatus.from;
        var hourTo = hourStatus.to;

        //console.log(hourStatus, hourFrom, hourTo);
        
        //Restaurant Schedule
        var restaurantScheduleIntro = document.createElement('p');
        restaurantScheduleIntro.className = "content";
        restaurantScheduleIntro.innerHTML = "From "+hourFrom+" to "+hourTo;
        restaurantIntro.appendChild(restaurantScheduleIntro);
}



//fetching functions

function allRestaurantDetails () {
    fetch('http://127.0.0.1:3000/users')
    .then((resp) => resp.json())
    .then(data => {
            allRestaurantsTable(data.restaurantList);
        })
    .catch(function(error){
        console.log(error);
    })
}

function singleRestaurantDetails(restaurantId){
    
    fetch('http://127.0.0.1:3000/restaurant/'+restaurantId)
    .then((resp) => resp.json())
    .then(data =>{
        console.log(data);
        restaurantInfo(data);
    })
}













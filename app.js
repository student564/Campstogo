const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}


function checker() {
  checkBox = document.getElementById("checkmark");
 text = document.getElementById("checkmark");
 if (checkBox.checked == true){
   text.style.display = "block";
 } else {
    text.style.display = "none";
 }
}

function checker2() {
checkBox2 = document.getElementById("checkmark2");
  text2 = document.getElementById("checkmark2");
 if (checkBox2.checked == true){
   text2.style.display = "block";
 } else {
    text2.style.display = "none";
 }
}


function checker3() {
  checkBox3 = document.getElementById("checkmark3");
  text = document.getElementById("checkmark3");
 if (checkBox3.checked == true){
   text3.style.display = "block";
 } else {
    text3.style.display = "none";
 }
}


let slideImages = document.querySelectorAll('.slide'),
leftArrow = document.querySelector('#left-arrowhead'),
rightArrow = document.querySelector('#right-arrowhead'),
current = 0;

function setting(){
for(i = 0; i < slideImages.length; i++){
slideImages[i].style.display ='none';
}
}


function slidestarter(){
 setting();
 slideImages[0].style.display = 'block';
}



function leftslide(){
 setting();
 slideImages[current - 1].style.display = 'block';
 current--;
}



function rightslide(){
 setting();
 slideImages[current + 1].style.display = 'block';
 current++;
}


rightArrow.addEventListener('click', function(){
 if(current === slideImages.length - 1){
  current = -1
 }
 rightslide();
 });

  leftArrow.addEventListener('click', function(){
if(current === 0){
 current = slideImages.length;
}
leftslide();
});
slidestarter();


function radioValue(){
var findHelpful;
if(document.getElementById('Yes').checked == true){
findHelpful = 'Yes';
}
if(document.getElementById('No').checked == true){
  findHelpful = 'No';
}

if(document.getElementById('Unsure').checked == true){
  findHelpful = 'Unsure';
}

document.getElementById('out').innerHTML = findHelpful;

}



const mapMarker = [
  {locationName: 'Griffin City Park 601 Camp Northern Rd, Griffin, GA 30224',
  lat:33.23561630 ,
  lng:-84.27170180,
  address:' 601 Camp Northern Rd, Griffin, GA 30224'
  },
  
  {
  locationName: 'Flat Creek Campground 3623 Mountville Hogansville Rd, Hogansville, GA 30230',
  lat: 33.13250200  ,
  lng: -84.89924300,
  address:'3623 Mountville Hogansville Rd, Hogansville, GA 30230'
  },
  
  {
  locationName: 'Southern Pines Campground 5337, 5006 Co Rd 212, Lanett, AL 36863',
  lat: 32.95618260,
  lng:  -85.21778860,
  
  }, 
  
  {
  locationName: 'Brush Creek Park PA-588, Beaver Falls, PA 15010',
  lat: 33.21167450,
  lng:  -85.09394210,
  
  },
  
  {
  locationName:'Muskegon River Campground 6190 W 112th st Grant, Michigan 49327',
  lat: 43.35161260,
  lng: -85.95463130
  },
  
  {
  locationName: 'Lake Margrethe State Campground Euclid Avenue Grayling, Michigan 49738',
  lat: 44.65744950,
  lng:-84.81753870
  }
      ];
  
  
      function mapJava() {
      var mapProp= {
        center:new google.maps.LatLng(33.2467807,-84.2640904),
        zoom:10,
        
      };
      const mapping = new google.maps.Map(document.getElementById("googleMap"),mapProp);
     
      const infoWindow = new google.maps.InfoWindow({
      minWidth:200,
      maxWidth:200
      });
  
      for(let o = 0; o < mapMarker.length; o++) {
      const mapmarker = new google.maps.Marker({
      position: {lat: mapMarker[o]['lat'],  lng: mapMarker[o]['lng'] },
      map: mapping,
      icon: 'campfire.png'
      });
  
  
  function makeInfoWindow(){
  const windowContent = mapMarker[o] ['locationName'];
  
  
  google.maps.event.addListener(mapmarker, 'click', function() {
  infoWindow.setContent(windowContent);
  infoWindow.open(mapping, mapmarker);
  });
  }
  makeInfoWindow();
  }
  }




            const PrivateIP = "http://13.200.156.231:8097";


//////////////////// Const Private IP declaration  ////////////////////////////////



function Logout(){
  sessionStorage.clear();
}

window.onload = function () {



    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();


//  Input Only number entering scrpit...... 

document.querySelectorAll('input[type="number"]').forEach( input => {
  input.oninput = () =>{
      if(input.value.length > input.maxLength) input.value = input.value.slice(0,input.maxLength);
  }; 
})
      


var name =  localStorage.getItem('Login-UserName');
var email = localStorage.getItem('Login-Email');
var mobileNo = localStorage.getItem('Login-MobileNumber')











//                                                          Getting User with ID

    var user_id = localStorage.getItem('User-ID');

    //let JwtToken = localStorage.getItem('JWT_Token');

    fetch(`${PrivateIP}/user/getBy/${user_id}`)

    
    // {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': `Bearer ${JwtToken}`
    //   }
    // })
    .then(response => response.json())
    .then(data => {  console.log(data) 

    document.getElementById('Login_User_Name').innerHTML = data.data.userName ;
    document.getElementById('username_viewprofile').setAttribute('value',data.data.userName ) ;
    document.getElementById('userMobile_viewprofile').setAttribute('value',data.data.mobileNo ) ;
    //document.getElementById('userEmail_viewprofile').innerHTML = data.data.email  ;

})


//               Home Hotel  Api calls 

document.getElementById('home_our_hotel_loader').style.display = "block";
document.getElementById('Hotelbooking_TopRatedHotels_loader').style.display = "block";

fetch(`${PrivateIP}/hotels/getAllHotels`)
.then(response => response.json())
.then(data => {  console.log(data.data) 

  document.getElementById('home_our_hotel_loader').style.display = "none";
  document.getElementById('Hotelbooking_TopRatedHotels_loader').style.display = "none";



  let data2 = "";

  data.data.map( (product) => {

    data2 +=`
  
        <div class="swiper-slide homeslides">
        <div class="hotel_contents_div">
            <img src="${PrivateIP}/hotels/displayHotelImage?id=${product.id}" class="hotel_imgs" alt="hotel_img1">
            <div class="rating_div">
                <i class="fa fa-star checked"></i>
                <span class="rating_span">${product.rating}</span>
            </div>
            <p class="hotel_name home_hotelName">${product.hotelName}</p>
            <i class="fa fa-user" aria-hidden="true"></i>
             <span class="profile_num">${product.totalPerson}</span>
             <span class="hotel_type">${product.hotelType}</span>
            <br>
            <span class="hotel_price">&#8377; ${product.price}</span>
            <input type="button" class="home_hotelBtn" id="hotel_btn" onclick="BookHotel_fromHome()" value="Book Now">
        </div>
    </div>
  
  
  
  
    `;
  
            document.getElementsByClassName("our_hotels_api")[0].innerHTML = data2;
            document.getElementById("swiper-wrapper_up_hotelbooking").innerHTML = data2;
            // console.log(data2);
  
          } )
          document.getElementById('hotel_btn').click();


})


// Home Ujjain API call

     
//               Ujjain Api calls 

document.getElementById('home_TopVisitedplaces_loader').style.display = "block";

fetch(`${PrivateIP}/guide/allGuides`)
.then(response => response.json())
.then(data => {  console.log(data.data[0]) 

  document.getElementById('home_TopVisitedplaces_loader').style.display = "none";


  let data2 = "";

  data.data.map( (product) => {

    data2 +=`
    <div class="swiper-slide home_slides_down">
    <div id="home_top_rated_div">
        <img src="${PrivateIP}/guide/displayHotelImage?id=${product.id}" class="home_top_img1" alt="image1">
        <div class="top_visited_rating_div">
            <i class="fa fa-star checked" id="icon"></i>
            <span class="top_visited_rating_span">${product.rating}</span>
        </div>
        <p class="top_visited_hotel_name">${product.name}</p>
        <img src="../Images/destination icon.PNG" class="destination-image"
            alt="destination-image">
        <span class="top-visited-km">${product.distance} km</span> 
        <input type="button"  id="top_visited_btn" value="Book a Guide" onclick="Home_ujjain_btn()">
    </div>
</div> `;
  
            document.getElementById("swiper-wrapper_down").innerHTML = data2;
            // console.log(data2);
  
          } )

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                    Puja Module  API calls here .....


document.getElementById('Pujabooking_TraditionalPujas_loader').style.display = "block";

fetch(`${PrivateIP}/poja/getAllPoja`)
.then(response => response.json())
.then(data => {  console.log(data.data[0])
 
  document.getElementById('Pujabooking_TraditionalPujas_loader').style.display = "none";

  let data2 = "";
 
  data.data.map( (product) => {
 
    data2 +=`
                            <div class="swiper-slide puja_slides_up">
                                <div class="Traditional_Pujas_div sateesh">
                                    <img src="${PrivateIP}/poja/display/custom?id=${product.id}" class="Traditional_Pujas_imgs"
                                        alt="">
                                    <p class="puja_name pujanames_oncard">${product.poojaName}</p>
                                    <div class="Location_pujaname_div">
                                        <img src="../Images/Location icon.png" class="Traditional_location_img" alt="">
                                        <span class="Temple_name">${product.templeName}</span>
                                    </div>
 
                                    <span class="puja_price" id="first_puja_price">&#8377; ${product.price}</span>
                                    <input type="button" class="puja_booknow_btn puja-api-button01" value="Book Now"
                                        onclick="pujaPackageBooking()">
                                </div>
                            </div>
 
       `;
 
            document.getElementById("swiper-wrapper_puja_up").innerHTML = data2;
            // console.log(data2);
 
          } )
 
});



document.getElementById('ujjain_Famous_loader').style.display = "block";

fetch(`${PrivateIP}/poja/getAllPoja`)
.then(response => response.json())
.then(data => {  console.log(data.data[0])
 
 document.getElementById('ujjain_Famous_loader').style.display = "none";

  let data2 = "";
 
  data.data.map( (product) => {
 
    data2 +=`
                           
    <div class="swiper-slide ujjainFamous_puja">
                                <div class="Ujjain_FamousPujas_div">
                                    <img src="${PrivateIP}/poja/display/custom?id=${product.id}"  class="Ujjain_FamousPujas_imgs"
                                        alt="" srcset="">
                                    <p class="Famous_puja_name">${product.poojaName}</p>
                                    <div class="Famous_Location_pujaname_div">
                                        <img src="../Images/Location icon.png" class="Famous_location_img" alt="">
                                        <span class="Famous_Temple_name">${product.templeName}</span>
                                    </div>
                                    <span class="Famous_puja_price">&#8377;${product.price} </span>
                                    <input type="button" class="Famous_puja_booknow_btn" value="Book Now">
                                </div>
                            </div>
 
       `;
 
            document.getElementById("swiper-wrapper_puja_down").innerHTML = data2;
            // console.log(data2);
 
          } )
 
});





















//                    Ujjain Module  API calls here .....



document.getElementById('UjjainDarshan_TopVisitedplaces_loader').style.display = "block";


fetch(`${PrivateIP}/guide/allGuides`)
.then(response => response.json())
.then(data => {  console.log(data.data[0]) 

  document.getElementById('UjjainDarshan_TopVisitedplaces_loader').style.display = "none";

  let data2 = "";

  data.data.map( (product) => {

    data2 +=`
    <div class="swiper-slide ujjain_swiperslides">

      <div class="top_visited_contents_div">
          <img src="${PrivateIP}/guide/displayHotelImage?id=${product.id}" class="ujjain-dharshan_imgs" alt="hotel_img1">
          <div class="rating_div">
              <i class="fa fa-star checked"></i>
              <span class="rating_span">${product.rating}</span>
          </div>
          <h3 class="ujjain_place_name">${product.name}</h3>
          <div class="destinatio_km_div">
              <img class="ujjain_desti_img" src="../Images/destination_popup_icon.png" alt="" srcset="">
              <span class="ujjain_km">${product.distance} km</span>
              <span class="ujjainprice">&#8377; ${product.price} </span>
          </div>
          <input type="button" id="UjjainCard_click" class="Topvisited_ujjain_btn" value="Book a Guide" onclick="ujjainFirstcard()" ondblclick="ujjainFirstcard_dbl()" >
      </div>
               
    </div> `;
  
            document.getElementById("swiper-wrapper_ujjain_up").innerHTML = data2;
            // console.log(data2);
  
          } )

          document.getElementById('UjjainCard_click').click();
})



            //  Ujjain Hotel  Api calls 

            document.getElementById('UjjainDarshan_hotels_loader_loader').style.display = "block";


fetch(`${PrivateIP}/hotels/getAllHotels`)
.then(response => response.json())
.then(data => {  console.log(data.data) 
  document.getElementById('UjjainDarshan_hotels_loader_loader').style.display = "none";

  let data2 = "";

  data.data.map( (product) => {

    data2 +=`

    <div class="swiper-slide ujjan_slides_down">
    <div id="home_top_rated_div">
        <img src="${PrivateIP}/hotels/displayHotelImage?id=${product.id}" class="home_top_img1" alt="image1">
        <div class="top_visited_rating_div">
            <i class="fa fa-star checked" id="icon"></i>
            <span class="top_visited_rating_span">${product.rating}</span>
        </div>
        <p class="top_visited_hotel_name small_hotel_name">${product.hotelName} </p>
        <i class="fa fa-user" aria-hidden="true"></i>
        <span class="top-visited-km">${product.totalPerson} </span>       <br>

        <div class="price_book_holes_in_small">
            <p class="hotel_price_in_small">&#8377;${product.price}</p>
            <input type="button" class="small_hotel_book_btn" value="Book Hotel">
        </div>
        
    </div>
</div>
  
  
    `;
  
            document.getElementById("swiper-wrapper_ujjain_down").innerHTML = data2;
            // console.log(data2);
  
          } )
         


})



//                  Omkar Module  API calls from here ......

 

  document.getElementById('Omkar_TopVisited_loader').style.display = "block";

      fetch(`${PrivateIP}/omkareshwar/getAll/omkareshwar`)
      .then(response => response.json())
      .then(data => {  console.log(data.data[0]) 
        document.getElementById('Omkar_TopVisited_loader').style.display = "none";

        let data2 = "";
        data.data.map( (product) => {

          data2 +=`
          <div class="swiper-slide ujjain_swiperslides">

            <div class="top_visited_contents_div">
                <img src="${PrivateIP}/omkareshwar/displayHotelImage?id=${product.id}" class="ujjain-dharshan_imgs" alt="hotel_img1">
                <div class="rating_div">
                    <i class="fa fa-star checked"></i>
                    <span class="rating_span">${product.rating}</span>
                </div>
                <h3 class="ujjain_place_name OmkarName">${product.name}</h3>
                <div class="destinatio_km_div">
                    <img class="ujjain_desti_img" src="../Images/destination_popup_icon.png" alt="" srcset="">
                    <span class="ujjain_km">${product.distance} km</span>
                    <span class="ujjainprice">&#8377; ${product.price} </span>
                </div>
                <input type="button" id="demo" class="Topvisited_ujjain_btn omkarbtn" value="Book a Guide" onclick="omkarFirstcard()" >
            </div>
                    
          </div> `;
        
                  document.getElementById("swiper-wrapper_omkar_up").innerHTML = data2;
                  // console.log(data2);
                } )
      })



                 //  Omkar Hotel  Api calls 
  
 document.getElementById('Omkar_hotels_loader_loader').style.display = "block";

fetch(`${PrivateIP}/hotels/getAllHotels`)
.then(response => response.json())
.then(data => {  console.log(data.data) 
  document.getElementById('Omkar_hotels_loader_loader').style.display = "none";

  let data2 = "";

  data.data.map( (product) => {

    data2 +=`

    <div class="swiper-slide omkar_slides_down">
      <div id="home_top_rated_div">
          <img src="${PrivateIP}/hotels/displayHotelImage?id=${product.id}" class="home_top_img1" alt="image1">
          <div class="top_visited_rating_div">
              <i class="fa fa-star checked" id="icon"></i>
              <span class="top_visited_rating_span">${product.rating}</span>
          </div>
          <p class="top_visited_hotel_name small_hotel_name">${product.hotelName}</p>
          <i class="fa fa-user" aria-hidden="true"></i>
          <span class="top-visited-km">${product.totalPerson} </span>       <br>
          <div class="price_book_holes_in_small">
              <p class="hotel_price_in_small">&#8377;${product.price}</p>
              <input type="button" class="small_hotel_book_btn" value="Book Hotel">
          </div>
          
      </div>
    </div>
  
  
    `;
  
            document.getElementById("swiper-wrapper_omkar_down").innerHTML = data2;
            // console.log(data2);
  
          } )
         


})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//       maabagla Module API from here .......


  //               Maabaglamukhi Api calls 
  document.getElementById('Maabagla_TopVisited_loader').style.display = "block";


  fetch(`${PrivateIP}/maaBaglamukhi/getAll/maaBaglamukhi`)
  .then(response => response.json())
  .then(data => {  console.log(data.data[0]) 
     
    document.getElementById('Maabagla_TopVisited_loader').style.display = "none";

    let data2 = "";
    data.data.map( (product) => {

      data2 +=`
      <div class="swiper-slide ujjain_swiperslides Maabagla_slides">

        <div class="top_visited_contents_div">
            <img src="${PrivateIP}/maaBaglamukhi/displayHotelImage?id=${product.id}" class="ujjain-dharshan_imgs" alt="hotel_img1">
            <div class="rating_div">
                <i class="fa fa-star checked"></i>
                <span class="rating_span">${product.rating}</span>
            </div>
            <h3 class="ujjain_place_name Maabagla_name">${product.name}</h3>
            <div class="destinatio_km_div">
                <img class="ujjain_desti_img" src="../Images/destination_popup_icon.png" alt="" srcset="">
                <span class="ujjain_km">${product.distance} km</span>
                <span class="ujjainprice">&#8377; ${product.price} </span>
            </div>
            <input type="button" id="demo" class="Topvisited_ujjain_btn Maabagla_btn" value="Book a Guide" onclick="maabagFirstcard()" >
        </div>
                
      </div> `;
    
              document.getElementById("swiper-wrapper_maabag_up").innerHTML = data2;
              // console.log(data2);
            } )
  })



     //  MAAbgla Hotel  Api calls 

document.getElementById('Maabagla_hotels_loader_loader').style.display = "block";
console.log('hey')

fetch(`${PrivateIP}/hotels/getAllHotels`)
.then(response => response.json())
.then(data => {  console.log(data.data) 

document.getElementById('Maabagla_hotels_loader_loader').style.display = "none";


let data2 = "";

data.data.map( (product) => {

data2 +=`

<div class="swiper-slide maabag_slides_down">
<div id="home_top_rated_div">
    <img src="${PrivateIP}/hotels/displayHotelImage?id=${product.id}" class="home_top_img1" alt="image1">
    <div class="top_visited_rating_div">
        <i class="fa fa-star checked" id="icon"></i>
        <span class="top_visited_rating_span">${product.rating}</span>
    </div>
    <p class="top_visited_hotel_name small_hotel_name"> ${product.hotelName}          </p>
    <i class="fa fa-user" aria-hidden="true"></i>
    <span class="top-visited-km">${product.totalPerson} </span>       <br>

    <div class="price_book_holes_in_small">
        <p class="hotel_price_in_small">&#8377;${product.price}</p>
        <input type="button" class="small_hotel_book_btn" value="Book Hotel">
    </div>
    
</div>
</div>


`;

        document.getElementById("swiper-wrapper_maabag_down").innerHTML = data2;
        // console.log(data2);

      } )
     


})



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   Shopping module API calls from here ................... 


document.getElementById('Shopping_loader').style.display = "block";

  fetch(`${PrivateIP}/shopping/getAll/product`)
  .then(response => response.json())
  .then(data => {  console.log(data.data) 
  
    document.getElementById('Shopping_loader').style.display = "none";

    let data2 = "";
  
    data.data.map( (product) => {
  
      data2 +=`


      <div class="swiper-slide swiper-slide-active shopping_slides" role="group" aria-label="1 / 7" >
        <div class="Ujjain_FamousPujas_div shoppingdivs_contents">
            <img src="${PrivateIP}/shopping/displayProductImage?id=${product.id}" class="Ujjain_FamousPujas_imgs shopimg" alt=""
                srcset="">
            <p class="Famous_puja_name shopping_name">${product.name}</p>
            <span class="Famous_puja_price shopprice">&#8377; ${product.price} </span>
            <input type="button" class="Famous_puja_booknow_btn shopbtn" onclick="shopping_btn()" value="Order Now">
        </div>
     </div>



      `;
    
              document.getElementById("swiper-wrapper_shopping_down").innerHTML = data2;
              // console.log(data2);
    
            } )
  
  })















// Initialize Swiper ______  UP

   var swiper = new Swiper("#swiper_up", {
     slidesPerView: 4,
     centeredSlides: true,
     spaceBetween: 30,
    //  pagination: {
    //    el: ".swiper-pagination",
    //    type: "fraction",
    //  },
     navigation: {
       nextEl: "#swiper-button-next_up",
       prevEl: "#prev_down_hotelBooking",       
       //prevE2: "#swiper-button-prev_up",

     },
   });
 
   var appendNumber = 4;
   var prependNumber = 1;
   document
     .querySelector(".prepend-2-slides")
     .addEventListener("click", function (e) {
       e.preventDefault();
       swiper.prependSlide([
         '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
         '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
       ]);
     });
   document
     .querySelector(".prepend-slide")
     .addEventListener("click", function (e) {
       e.preventDefault();
       swiper.prependSlide(
         '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
       );
     });
   document
     .querySelector(".append-slide")
     .addEventListener("click", function (e) {
       e.preventDefault();
       swiper.appendSlide(
         '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
       );
     });
   document
     .querySelector(".append-2-slides")
     .addEventListener("click", function (e) {
       e.preventDefault();
       swiper.appendSlide([
         '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
         '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
       ]);
     });
 


}



function swiperBtn_up(){  

    document.getElementById('prev_down_hotelBooking').style.display = "block";
}
function swiperBtn_hotel_down(){  document.getElementById('swiper-button-prev_up_hotelbooking').style.display = "block";  }
function swiperBtn_down() {    document.getElementById('swiper-button-prev_down').style.display = "block"; }

function swiperBtn_puja_up(){        document.getElementById('swiper-button-prev_puja_up').style.display = "block"; }
function swiperBtn_puja_down(){        document.getElementById('swiper-button-prev_puja_down').style.display = "block"; }

function swiperBtn_ujjain_up(){        document.getElementById('swiper-button-prev_ujjain_up').style.display = "block"; }
function swiperBtn_ujjain_down(){        document.getElementById('swiper-button-prev_ujjain_down').style.display = "block"; }

function swiperBtn_omkar_up(){        document.getElementById('swiper-button-prev_omkar_up').style.display = "block"; }
function swiperBtn_omkar_down(){        document.getElementById('swiper-button-prev_omkar_down').style.display = "block"; }

function swiperBtn_maabag_up(){        document.getElementById('swiper-button-prev_maabag_up').style.display = "block"; }
function swiperBtn_maabag_down(){        document.getElementById('swiper-button-prev_maabag_down').style.display = "block"; }

function swiperBtn_taxi_down(){        document.getElementById('swiper-button-prev_taxi_down').style.display = "block"; }
function swiperBtn_airport_down(){        document.getElementById('swiper-button-prev_airport_down').style.display = "block"; }




//      View Profile function


function viewProfile(){

console.log("View Profile Page ")
document.getElementById('profile_loader').style.display = "block";
document.getElementById('viewprofile').style.display = "none";
document.getElementById('profile_div').style.opacity ="0";
document.getElementById('profile_div2').style.opacity ="0";


////                                                     View Profile API 


      var user_id = localStorage.getItem('User-ID');

    fetch(`${PrivateIP}/user/getBy/${user_id}`)
    .then(response => response.json())
    .then(data => {  console.log(data.data) 
            console.log(data.data.hotelBooking); 


document.getElementById('profile_loader').style.display = "none";
document.getElementById('profile_div').style.opacity ="1";
document.getElementById('profile_div2').style.opacity ="1";




  try{

  
      let data2 = "";                                      //      Hotel Bookings  Display....
      data.data.hotelBooking.map( (product) => {

        console.log(product.hotels[0] )
        data2 +=`
                  <div class="child_divs hotel_booking_divs">
                      <div><img src="${PrivateIP}/hotels/displayHotelImage?id=${product.hotels[0].id}" class="hotel_build_imgs" alt=""></div>
                      <div>
                          <h1 class="hotel_names"> ${product.hotels[0].hotelName}</h1>
                          <p class="price"> <span class="currency_symbol">&#8377;</span> ${product.hotels[0].price} </p>
                      </div>
                  </div>
                `;
                  document.getElementById("hotelbook_inViewprofile").innerHTML = data2;     
        })

    }catch{

    }

        let data3 = "";                                        //      Ujjain Bookings  Display....
        data.data.ujjainBookings.map( (product) => {
        data3 +=`
                <div class="child_divs ujjain_Bookings_divss">
                    <div><img src="${PrivateIP}/guide/displayHotelImage?id=${product.ujjainDarshanGuide.id}" class="visited_imgs" alt=""></div>
                    <div>
                        <h1 class="hotel_names"> ${product.ujjainDarshanGuide.name}</h1>
                        <p class="price"> <span class="currency_symbol">&#8377;</span> ${product.ujjainDarshanGuide.price} </p>
                    </div>
                </div>

                `;
                  document.getElementById("UjjainBookings_inViewProfile").innerHTML = data3;    
        })
      

        let data4 = '';                                                //      Poja Bookings  Display....
        data.data.pojaBookings.map( (product) => {
          data4 +=`
                <div class="child_divs">
                <div><img src="${PrivateIP}/poja/display/custom?id=${product.poja.id}" class="visited_imgs" alt=""></div>
                <div>
                    <h1 class="puja_names">${product.poja.poojaName}</h1>
                    <img src="../Images/Location icon.png" class="Loc_imgs" alt="">
                    <span class="T_names">${product.poja.templeName}</span>
                    <span class="price"> <span class="currency_symbol">&#8377;</span> ${product.poja.price} </span>
                </div>

            </div>
              
            `;
              document.getElementById("Puja_Bookings_inViewProfile").innerHTML = data4;     
        })

        let data5= '';                                                //      TAXI Bookings  Display....
        data.data.taxiService.map( (product) => {

          console.log(product);

          data5 +=`

          <div class="child_divs taxi_bookings">
          <div class="parent_taxi_bookings_div">
             <div class="F_T_div"> <p class="p_tag_from_to">From :</p> <span class="hotel_names">${product.fromLocation}</span>  </div> 
             <div class="F_T_div">  <p class="p_tag_from_to">To :</p> <span class="hotel_names">${product.toLocation}</span> </div>
              <p class="price taxiprice_in_vieprofile"> <span class="currency_symbol">&#8377;</span> ${product.totalFare} </p>
          </div>
      </div>
              
            `;
              document.getElementById("TaxiBookings_viewProfile").innerHTML = data5;     
        })


        let data6= '';                                                //      Airport Bookings  Display....
        data.data.airport.map( (product) => {

          data6 +=`

          <div class="child_divs ">
          <div class="parent_taxi_bookings_div">
             <div class="F_T_div"> <p class="p_tag_from_to">From :</p> <span class="hotel_names">${product.from}</span>  </div> 
             <div class="F_T_div">  <p class="p_tag_from_to">To :</p> <span class="hotel_names">${product.to}</span> </div>
              <p class="price taxiprice_in_vieprofile"> <span class="currency_symbol">&#8377;</span> ${product.totalprice} </p>
          </div>
      </div>
              
            `;
              document.getElementById("AirportBook_inViewprofile").innerHTML = data6;     
        })

        let data7= '';                                                //      Shopping Bookings  Display....
        data.data.shopBookings.map( (product) => {

          console.log(product.shopping);

          data7 +=`

          <div class="child_divs ujjain_Bookings_divss">
          <div><img src="${PrivateIP}/shopping/displayProductImage?id=${product.shopping.id}" class="visited_imgs" alt=""></div>
          <div>
              <h1 class="hotel_names"> ${product.shopping.name}</h1>
              <p class="price"> <span class="currency_symbol">&#8377;</span> ${product.shopping.price} </p>
          </div>
      </div>

              
            `;
              document.getElementById("ShoppingBKG_inViewprofile").innerHTML = data7;     
        })




    })



document.getElementById('sidebar').style.height = "715px";
document.getElementById('home-div').style.backgroundColor = "white";
document.getElementById('home-div').style.color = "black";
document.getElementById('hotel-div').style.backgroundColor = "white";
document.getElementById('hotel-div').style.color = "black";
document.getElementById('pujabooking-div').style.backgroundColor = "white";
document.getElementById('pujabooking-div').style.color = "black";
document.getElementById('UjjainDarshan-div').style.backgroundColor = "white";
document.getElementById('UjjainDarshan-div').style.color = "black";
document.getElementById('Omkareshwar-div').style.backgroundColor = "white";
document.getElementById('Omkareshwar-div').style.color = "black";
document.getElementById('MaaBaglamukhi-div').style.backgroundColor = "white";
document.getElementById('MaaBaglamukhi-div').style.color = "black";
document.getElementById('TaxiServices-div').style.backgroundColor =  "white";
document.getElementById('TaxiServices-div').style.color = "black";
document.getElementById('AirportRides-div').style.backgroundColor = "white";
document.getElementById('AirportRides-div').style.color = "black";
document.getElementById('AboutUjjain-div').style.backgroundColor = "white";
document.getElementById('AboutUjjain-div').style.color = "black";
document.getElementById('shopping-div').style.backgroundColor = "white";
document.getElementById('shopping-div').style.color = "black";



document.getElementById('Home_main').style.display = "none";
document.getElementById('HotelBooking_main').style.display = "none";
document.getElementById('profile_view_main').style.display = "flex";
document.getElementById('Puja_booking_main').style.display = "none";
document.getElementById('UjjainDarshan_main').style.display = "none";
document.getElementById('Omkareshwar_main').style.display = "none";
  document.getElementById('MaaBaglamukhi_main').style.display = "none";
  document.getElementById('TaxiServices_main').style.display = "none";
  document.getElementById('AirportRides_main').style.display = "none";
  document.getElementById('AboutUjjain_main').style.display = "none";
  document.getElementById('shopping_main').style.display = "none";
 // document.getElementById('profile-update-container').style.display = "none";




}





function Edit_profileIcon(){

  document.getElementById('Update_btn').style.display = "block";
  document.getElementById('profile_edit_icon').style.display = "none";

// document.getElementById('Home_main').style.display = "none";
// document.getElementById('HotelBooking_main').style.display = "none";
// document.getElementById('profile_view_main').style.display = "none";
// document.getElementById('Puja_booking_main').style.display = "none";
// document.getElementById('UjjainDarshan_main').style.display = "none";
// document.getElementById('Omkareshwar_main').style.display = "none";
//   document.getElementById('MaaBaglamukhi_main').style.display = "none";
//   document.getElementById('TaxiServices_main').style.display = "none";
//   document.getElementById('AirportRides_main').style.display = "none";
//   document.getElementById('AboutUjjain_main').style.display = "none";
//   document.getElementById('shopping_main').style.display = "none";
//   document.getElementById('profile-update-container').style.display = "block";

 let readonlyInput = document.getElementById('username_viewprofile');
 let inputMobileNO =  document.getElementById('userMobile_viewprofile');

readonlyInput.removeAttribute('readonly');
inputMobileNO.removeAttribute('readonly');



  const formE1 = document.querySelector('#profile_update_form');

    formE1.addEventListener('submit', event => {
        event.preventDefault();

        let formData = new FormData(formE1);

        let data;
        data = Object.fromEntries(formData);
        console.log(data);  

        var user_id = localStorage.getItem('User-ID');


        fetch(`${PrivateIP}/user/updateById/${user_id}`, 
        {
            method: "PUT",
            body: JSON.stringify(

              {
                // "id": user_id,
                "userName": data.username_update,
                // "email":  data.email,
                "mobileNo": data.userMB_update,
                // "password": data.password
                
            }


            ),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })

        .then((response) => response.json())
        .then(data => {
            console.log(data);
            //console.log(data.data)

            if (data.statuscode == 200) {
              //  block of code to be executed if the condition is true
              location.reload();

          } else {
              //  block of code to be executed if the condition is false
             //document.getElementById('Update_error_message').style.display = "block";
             //document.getElementById('Update_error_message').innerHTML = data.data;
          }

           
        });     
      })
}


 function userUpdateBtn(){
  viewProfile();
 }





function myUpdate_user(){

  const inpOb = document.getElementById('update-number03');
    if (!inpOb.checkValidity()) {
        document.getElementById("Update_error_message").style.display = "block";
      document.getElementById("Update_error_message").innerHTML = "Number should be 10 digits";
    } else {
        document.getElementById("Update_error_message").style.display = "none";
    //   document.getElementById("demo").innerHTML = "Input OK";
    }


}



function Cancel_UpdateBtn(){
  viewProfile();
}






function myHotel_SaveMB(){

  const inpOb = document.getElementById('hotel_save_mb');
  if (!inpOb.checkValidity()) {
      document.getElementById("hotel_save_eror").style.display = "block";
    document.getElementById("hotel_save_eror").innerHTML = "Number should be 10 digits";
  } else {
      document.getElementById("hotel_save_eror").style.display = "none";
  //   document.getElementById("demo").innerHTML = "Input OK";
  }



}









function Home_ujjain_btn(){          // In home down slider ujjain book now button
  UjjainDarshan();
}


//              Home function

function Home() {
    console.log('Home Page');
   


    document.getElementById('sidebar').style.height = "715px";
    document.getElementById('home-div').style.backgroundColor = "#FF5F1F";
    document.getElementById('home-div').style.color = "white";
    document.getElementById('hotel-div').style.backgroundColor = "white";
    document.getElementById('hotel-div').style.color = "black";
    document.getElementById('pujabooking-div').style.backgroundColor = "white";
    document.getElementById('pujabooking-div').style.color = "black";
    document.getElementById('UjjainDarshan-div').style.backgroundColor = "white";
    document.getElementById('UjjainDarshan-div').style.color = "black";
    document.getElementById('Omkareshwar-div').style.backgroundColor = "white";
    document.getElementById('Omkareshwar-div').style.color = "black";
    document.getElementById('MaaBaglamukhi-div').style.backgroundColor = "white";
    document.getElementById('MaaBaglamukhi-div').style.color = "black";
    document.getElementById('TaxiServices-div').style.backgroundColor =  "white";
    document.getElementById('TaxiServices-div').style.color = "black";
    document.getElementById('AirportRides-div').style.backgroundColor = "white";
    document.getElementById('AirportRides-div').style.color = "black";
    document.getElementById('AboutUjjain-div').style.backgroundColor = "white";
    document.getElementById('AboutUjjain-div').style.color = "black";
    document.getElementById('shopping-div').style.backgroundColor = "white";
    document.getElementById('shopping-div').style.color = "black";

    document.getElementById('profile_view_main').style.display = "none";
    document.getElementById('HotelBooking_main').style.display = "none";
    document.getElementById('Home_main').style.display = "block";
    document.getElementById('Puja_booking_main').style.display = "none";
    document.getElementById('UjjainDarshan_main').style.display = "none";
    document.getElementById('Omkareshwar_main').style.display = "none";
  document.getElementById('MaaBaglamukhi_main').style.display = "none";
  document.getElementById('TaxiServices_main').style.display = "none";
  document.getElementById('AirportRides_main').style.display = "none";
  document.getElementById('AboutUjjain_main').style.display = "none";
  document.getElementById('shopping_main').style.display = "none";
 //document.getElementById('profile-update-container').style.display = "none";
 document.getElementById('viewprofile').style.display = "block";



}

//           Hotel Booking .......
  

function BookHotel_fromHome(){

    document.getElementsByClassName("home_hotelBtn")[0].addEventListener('click', function(){
      hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[0].innerHTML ;
        console.log(name);

        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 
      
        })
    })

    document.getElementsByClassName("home_hotelBtn")[1].addEventListener('click', function(){
      hotelBooking();
      let name = document.getElementsByClassName('home_hotelName')[1].innerHTML ;
      console.log(name);
      fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
      .then(response => response.json())
      .then(data => {  console.log(data.data[0])

        sessionStorage.setItem('hotel_id',data.data[0].id);
        document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
        document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
        document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
        document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
        document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
        document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
        document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
        document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
        document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

        document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

      })
    })

      document.getElementsByClassName("home_hotelBtn")[2].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[2].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      document.getElementsByClassName("home_hotelBtn")[3].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[3].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      document.getElementsByClassName("home_hotelBtn")[4].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[4].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      document.getElementsByClassName("home_hotelBtn")[5].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[5].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      document.getElementsByClassName("home_hotelBtn")[6].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[6].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      document.getElementsByClassName("home_hotelBtn")[7].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[7].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      document.getElementsByClassName("home_hotelBtn")[8].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[8].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      document.getElementsByClassName("home_hotelBtn")[9].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[9].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })
      
      document.getElementsByClassName("home_hotelBtn")[10].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[10].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      
      document.getElementsByClassName("home_hotelBtn")[11].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[11].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      
      document.getElementsByClassName("home_hotelBtn")[12].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[12].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      
      document.getElementsByClassName("home_hotelBtn")[13].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[13].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      
      document.getElementsByClassName("home_hotelBtn")[14].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[14].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      
      document.getElementsByClassName("home_hotelBtn")[15].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[15].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })
      document.getElementsByClassName("home_hotelBtn")[16].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[16].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      document.getElementsByClassName("home_hotelBtn")[17].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[17].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      document.getElementsByClassName("home_hotelBtn")[18].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[18].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      document.getElementsByClassName("home_hotelBtn")[19].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[19].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      document.getElementsByClassName("home_hotelBtn")[20].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[20].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      document.getElementsByClassName("home_hotelBtn")[21].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[21].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      document.getElementsByClassName("home_hotelBtn")[22].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[22].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })

      document.getElementsByClassName("home_hotelBtn")[23].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[23].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })


      document.getElementsByClassName("home_hotelBtn")[24].addEventListener('click', function(){
        hotelBooking();
        let name = document.getElementsByClassName('home_hotelName')[24].innerHTML ;
        console.log(name);
        fetch(`${PrivateIP}/hotels/getHotelWithBookings/${name}`)
        .then(response => response.json())
        .then(data => {  console.log(data.data[0])

          sessionStorage.setItem('hotel_id',data.data[0].id);
          document.getElementById('Book_hotel_name').innerHTML = data.data[0].hotelName;
          document.getElementsByClassName('popup_hotel_name')[0].innerHTML = data.data[0].hotelName;
          document.getElementById('Hotel_type_hotelbkgin_popup').innerHTML = data.data[0].hotelType ;
          document.getElementById('Hotel_type_hotelbkg').innerHTML = data.data[0].hotelType ;
          document.getElementsByClassName('hotelpersons')[0].innerHTML = data.data[0].totalPerson;
          document.getElementById('Book_hotel_price').innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelprice_popup')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[0].innerHTML = ` &#8377; ${data.data[0].price}`;
          document.getElementsByClassName('hotelsave_rate')[1].innerHTML = ` &#8377; ${data.data[0].price}`;

          document.getElementById('popup_hotelbuid_img1').src = `${PrivateIP}/hotels/displayHotelImage?id=${data.data[0].id} ` 

        })
      })


///////////   25 Hotels can book from Home Button...

}


function hotelBooking(){
    console.log("Hotel Page")
    document.getElementById('viewprofile').style.display = "block";

  document.getElementById('sidebar').style.height = "715px";
  document.getElementById('hotel-div').style.backgroundColor = "#FF5F1F";
  document.getElementById('hotel-div').style.color = "white";
  document.getElementById('home-div').style.backgroundColor = "white";
  document.getElementById('home-div').style.color = "black";
  document.getElementById('pujabooking-div').style.backgroundColor = "white";
  document.getElementById('pujabooking-div').style.color = "black";
  document.getElementById('UjjainDarshan-div').style.backgroundColor = "white";
  document.getElementById('UjjainDarshan-div').style.color = "black";
  document.getElementById('Omkareshwar-div').style.backgroundColor = "white";
  document.getElementById('Omkareshwar-div').style.color = "black";
  document.getElementById('MaaBaglamukhi-div').style.backgroundColor = "white";
  document.getElementById('MaaBaglamukhi-div').style.color = "black";
  document.getElementById('TaxiServices-div').style.backgroundColor =  "white";
  document.getElementById('TaxiServices-div').style.color = "black";
  document.getElementById('AirportRides-div').style.backgroundColor = "white";
  document.getElementById('AirportRides-div').style.color = "black";
  document.getElementById('AboutUjjain-div').style.backgroundColor = "white";
  document.getElementById('AboutUjjain-div').style.color = "black";
  document.getElementById('shopping-div').style.backgroundColor = "white";
  document.getElementById('shopping-div').style.color = "black";

    document.getElementById('Home_main').style.display = "none";
    document.getElementById('profile_view_main').style.display = "none";
    document.getElementById('HotelBooking_main').style.display = "block";
    document.getElementById('Puja_booking_main').style.display = "none";
    document.getElementById('UjjainDarshan_main').style.display = "none";
    document.getElementById('Omkareshwar_main').style.display = "none";
  document.getElementById('MaaBaglamukhi_main').style.display = "none";
  document.getElementById('TaxiServices_main').style.display = "none";
  document.getElementById('AirportRides_main').style.display = "none";
  document.getElementById('AboutUjjain_main').style.display = "none";
  document.getElementById('shopping_main').style.display = "none";
 // document.getElementById('profile-update-container').style.display = "none";



}

function hotelBooking_book_now_btn(){

 document.getElementsByClassName('HotelBooking_popup')[0].style.display = "block";
 document.getElementsByClassName('HotelBooking_popup_div')[0].style.display = "block"; 
 document.getElementById('hotelsavediv').style.display = "none";



}
function closePopUp() {
  console.log("Booking - close");
    document.getElementsByClassName('HotelBooking_popup')[0].style.display = "none";
}

function popup_bookhotel_btn() {

  document.getElementById('hotelsavediv').style.display = "block";
  document.getElementsByClassName('HotelBooking_popup_div')[0].style.display = "none"; 
  

     //   hotel save 

     const formhotel = document.querySelector('.hotel_form');

     formhotel.addEventListener('submit', event => {
         event.preventDefault();
   
         let formData = new FormData(formhotel);
         let data;
         data = Object.fromEntries(formData);
         console.log(data);
   
        // var hotel_name = document.getElementById('Book_hotel_name').innerHTML;
        var hotel_ID =  sessionStorage.getItem('hotel_id');

         var user_id = localStorage.getItem('User-ID');
   
         fetch(`${PrivateIP}/hotelbookings/booking/${hotel_ID}/${user_id}`,
             {
                 method: "POST",
                 body: JSON.stringify({
                  "name": data.username   ,
                  "mobileNo": data.mobileNumber,
                  "noOfAdults": data.noofadults,
                  "noOfChildren": data.noofchilds ,
                  
                  // "price": 150.0,
                  // "hotels": []
                 


                 }),
                 headers: {
                     "Content-type": "application/vnd.api+json; charset=UTF-8"
                     
                 },
             })
   
             .then((response) => response.json())
             .then(data => {
                 console.log(data);
                 //console.log(data.data)


                 if (data.statuscode == 200) {

                  document.getElementsByClassName('HotelConfirmation_popup_div')[0].style.display = "block"; 

                
              } else {
                document.getElementsByClassName('HotelConfirmation_popup_div')[0].style.display = "none"; 

              }
   
                
             });
   
     })


}

// function hotelsave_bookbtn(){
  
//    document.getElementsByClassName('HotelConfirmation_popup_div')[0].style.display = "block"; 


// }

function closePopUp_Confirmation() {

    console.log("Confirmation - close");
   // hotelBooking_book_now_btn();
   document.getElementsByClassName('HotelBooking_popup')[0].style.display = "none";
    document.getElementsByClassName('HotelConfirmation_popup_div')[0].style.display = "none"; 

}










function pujaBooking(){



console.log("Puja Page");
document.getElementById('viewprofile').style.display = "block";
    document.getElementById('sidebar').style.height = "715px";
    document.getElementById('pujabooking-div').style.backgroundColor = "#FF5F1F";
    document.getElementById('pujabooking-div').style.color = "white";
    document.getElementById('hotel-div').style.backgroundColor = "white";
    document.getElementById('hotel-div').style.color = "black";
    document.getElementById('home-div').style.backgroundColor = "white";
    document.getElementById('home-div').style.color = "black";
    document.getElementById('UjjainDarshan-div').style.backgroundColor = "white";
    document.getElementById('UjjainDarshan-div').style.color = "black";
    document.getElementById('Omkareshwar-div').style.backgroundColor = "white";
  document.getElementById('Omkareshwar-div').style.color = "black";
  document.getElementById('MaaBaglamukhi-div').style.backgroundColor = "white";
  document.getElementById('MaaBaglamukhi-div').style.color = "black";
  document.getElementById('TaxiServices-div').style.backgroundColor =  "white";
  document.getElementById('TaxiServices-div').style.color = "black";
  document.getElementById('AirportRides-div').style.backgroundColor = "white";
  document.getElementById('AirportRides-div').style.color = "black";
  document.getElementById('AboutUjjain-div').style.backgroundColor = "white";
  document.getElementById('AboutUjjain-div').style.color = "black";
  document.getElementById('shopping-div').style.backgroundColor = "white";
  document.getElementById('shopping-div').style.color = "black";

    document.getElementById('Home_main').style.display = "none";
    document.getElementById('profile_view_main').style.display = "none";
    document.getElementById('HotelBooking_main').style.display = "none";
    document.getElementById('Puja_booking_main').style.display = "block";
    document.getElementById('UjjainDarshan_main').style.display = "none";
    document.getElementById('Omkareshwar_main').style.display = "none";
  document.getElementById('MaaBaglamukhi_main').style.display = "none";
  document.getElementById('TaxiServices_main').style.display = "none";
  document.getElementById('AirportRides_main').style.display = "none";
  document.getElementById('AboutUjjain_main').style.display = "none";
  document.getElementById('shopping_main').style.display = "none";
  //document.getElementById('profile-update-container').style.display = "none";




// Initialize Swiper ______ Puja UP

var swiper = new Swiper("#swiper_puja_up", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
 //  pagination: {
 //    el: ".swiper-pagination",
 //    type: "fraction",
 //  },
  navigation: {
    nextEl: "#swiper-button-next_puja_up",
    prevEl: "#swiper-button-prev_puja_up",
  },
});

var appendNumber = 4;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document
  .querySelector(".append-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  });
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });


}

function pujaPackageBooking() {

//   // let pujaPrice = document.getElementById('first_puja_price').innerHTML;
//   // document.getElementById('Package_totalprice').innerHTML = pujaPrice;
//   document.getElementById('PujaBooking_popup').style.display = "block";    
//   document.getElementById('pujaPackageBooking_popupdiv').style.display = "block";
//  document.getElementById('PujaBooking_popup_div').style.display = "none";

 
 
  document.getElementsByClassName("puja-api-button01")[0].addEventListener("click",function() {
    console.log("hello");

    document.getElementById('PujaBooking_popup').style.display = "block";    
  document.getElementById('pujaPackageBooking_popupdiv').style.display = "block";
   

  let name = document.getElementsByClassName('pujanames_oncard')[0].innerHTML ;

    fetch(`${PrivateIP}/poja/GetByName/${name}`)
        .then(response => response.json())
        .then(data => {console.log(data.data[0])
 
          sessionStorage.setItem('puja_id',data.data[0].id);
 
        document.getElementsByClassName('puja-api-popup-name01')[0].innerHTML = data.data[0].poojaName ;
        document.getElementsByClassName('puja-api-popup-name02')[0].innerHTML = data.data[0].templeName ;
        document.getElementsByClassName('puja-api-popup-name04')[0].innerHTML = `&#8377; ${data.data[0].price} `;
        document.getElementsByClassName('puja-api-price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
        document.getElementsByClassName('confirmation_pujaPrice')[0].innerHTML = `&#8377; ${data.data[0].price} `;
             
        });
 
    });
 
 
    document.getElementsByClassName("puja-api-button01")[1].addEventListener("click",function() {
      console.log("hello");

      document.getElementById('PujaBooking_popup').style.display = "block";    
      document.getElementById('pujaPackageBooking_popupdiv').style.display = "block";

      let name = document.getElementsByClassName('pujanames_oncard')[1].innerHTML ;
     
      fetch(`${PrivateIP}/poja/GetByName/${name}`)
          .then(response => response.json())
          .then(data => {console.log(data.data[0])
 
            sessionStorage.setItem('puja_id',data.data[0].id);
 
          document.getElementsByClassName('puja-api-popup-name01')[0].innerHTML = data.data[0].poojaName ;
          document.getElementsByClassName('puja-api-popup-name02')[0].innerHTML = data.data[0].templeName ;
          document.getElementsByClassName('puja-api-popup-name04')[0].innerHTML = `&#8377; ${data.data[0].price} `;
          document.getElementsByClassName('puja-api-price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
          document.getElementsByClassName('puja-api-price')[1].innerHTML = `&#8377; ${data.data[0].price} `;
         // document.getElementById('Confirmation_booking_popup_total_price').innerHTML = `&#8377; ${data.data[0].price} `;                
          });
 
      });
 
 
      document.getElementsByClassName("puja-api-button01")[2].addEventListener("click",function() {
        console.log("hello");

        document.getElementById('PujaBooking_popup').style.display = "block";    
        document.getElementById('pujaPackageBooking_popupdiv').style.display = "block";
       
        let name = document.getElementsByClassName('pujanames_oncard')[2].innerHTML ;
        fetch(`${PrivateIP}/poja/GetByName/${name}`)
            .then(response => response.json())
            .then(data => {console.log(data.data[0])
 
 
              sessionStorage.setItem('puja_id',data.data[0].id);
   
            document.getElementsByClassName('puja-api-popup-name01')[0].innerHTML = data.data[0].poojaName ;
            document.getElementsByClassName('puja-api-popup-name02')[0].innerHTML = data.data[0].templeName ;
            document.getElementsByClassName('puja-api-popup-name04')[0].innerHTML = `&#8377; ${data.data[0].price} `;
            document.getElementsByClassName('puja-api-price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
            document.getElementsByClassName('sateesh01')[0].innerHTML = `&#8377; ${data.data[0].price} `;            });
   
        });

        document.getElementsByClassName("puja-api-button01")[3].addEventListener("click",function() {
          console.log("hello");
  
          document.getElementById('PujaBooking_popup').style.display = "block";    
          document.getElementById('pujaPackageBooking_popupdiv').style.display = "block";
         
          let name = document.getElementsByClassName('pujanames_oncard')[3].innerHTML ;
          fetch(`${PrivateIP}/poja/GetByName/${name}`)
              .then(response => response.json())
              .then(data => {console.log(data.data[0])
   

                sessionStorage.setItem('puja_id',data.data[0].id);
     
              document.getElementsByClassName('puja-api-popup-name01')[0].innerHTML = data.data[0].poojaName ;
              document.getElementsByClassName('puja-api-popup-name02')[0].innerHTML = data.data[0].templeName ;
              document.getElementsByClassName('puja-api-popup-name04')[0].innerHTML = `&#8377; ${data.data[0].price} `;
              document.getElementsByClassName('puja-api-price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
              document.getElementsByClassName('sateesh01')[0].innerHTML = `&#8377; ${data.data[0].price} `;            });
     
          });
   
          document.getElementsByClassName("puja-api-button01")[4].addEventListener("click",function() {
            console.log("hello");
    
            document.getElementById('PujaBooking_popup').style.display = "block";    
            document.getElementById('pujaPackageBooking_popupdiv').style.display = "block";
           
            let name = document.getElementsByClassName('pujanames_oncard')[4].innerHTML ;
            fetch(`${PrivateIP}/poja/GetByName/${name}`)
                .then(response => response.json())
                .then(data => {console.log(data.data[0])
     
  
                  sessionStorage.setItem('puja_id',data.data[0].id);
       
                document.getElementsByClassName('puja-api-popup-name01')[0].innerHTML = data.data[0].poojaName ;
                document.getElementsByClassName('puja-api-popup-name02')[0].innerHTML = data.data[0].templeName ;
                document.getElementsByClassName('puja-api-popup-name04')[0].innerHTML = `&#8377; ${data.data[0].price} `;
                document.getElementsByClassName('puja-api-price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
                document.getElementsByClassName('sateesh01')[0].innerHTML = `&#8377; ${data.data[0].price} `;            });
       
            });
 
 
   
 

            // 5 cards will work .... 
 
 
 
 
 
  let pujaPrice = document.getElementById('first_puja_price').innerHTML;
  document.getElementById('Package_totalprice').innerHTML = pujaPrice;
 
  
 //document.getElementById('PujaBooking_popup_div').style.display = "none";
 





}


function popup_packageBooking_btn(){


    var pujaId = sessionStorage.getItem('puja_id');
    var user_id = localStorage.getItem('User-ID');

    var formdata = new FormData();
    formdata.append("userId", user_id);
    formdata.append("pojaId", pujaId);
    var requestOptions = {  method: 'POST',  body: formdata,  redirect: 'follow'};

    fetch(`${PrivateIP}/admin/api/poja/book`, requestOptions)
    .then(response => response.text())
      .then(result => console.log(result))  
      .catch(error => console.log('error', error));
  
 
  let pujaPrice = document.getElementById('first_puja_price').innerHTML;
 document.getElementById('Confirmation_booking_popup_total_price').innerHTML = pujaPrice;
 
  document.getElementById('pujaPackageBooking_popupdiv').style.display = "none";
  document.getElementById('PujaConfirmation_popup_div').style.display = "block";
 


}








function popup_pujabook_btn(){

  document.getElementById('PujaBooking_popup_div').style.display = "none"; 
  document.getElementById('PujaConfirmation_popup_div').style.display = "block"; 


}


function pujaPackageBooking_closePopUp(){

  document.getElementById('pujaPackageBooking_popupdiv').style.display = "none";
}

function pujaBooking_closePopUp(){

  document.getElementById('PujaBooking_popup_div').style.display = "none";
    document.getElementById('pujaPackageBooking_popupdiv').style.display = "none";

}

function confirBooking_closePopUp(){

  document.getElementById('PujaConfirmation_popup_div').style.display = "none";
}


// Ujjain Darshan 





function UjjainDarshan() {

//               Ujjain Api calls 

  console.log("Ujjain Darshan Page")
  document.getElementById('viewprofile').style.display = "block";
  document.getElementById('sidebar').style.height = "715px";
  document.getElementById('UjjainDarshan-div').style.backgroundColor = "#FF5F1F";
  document.getElementById('UjjainDarshan-div').style.color = "white";
  document.getElementById('Omkareshwar-div').style.backgroundColor = "white";
  document.getElementById('Omkareshwar-div').style.color = "black";
  document.getElementById('MaaBaglamukhi-div').style.backgroundColor = "white";
  document.getElementById('MaaBaglamukhi-div').style.color = "black";
  document.getElementById('pujabooking-div').style.backgroundColor = "white";
  document.getElementById('pujabooking-div').style.color = "black";
  document.getElementById('hotel-div').style.backgroundColor = "white";
  document.getElementById('hotel-div').style.color = "black";
  document.getElementById('home-div').style.backgroundColor = "white";
  document.getElementById('home-div').style.color = "black";
  document.getElementById('TaxiServices-div').style.backgroundColor =  "white";
  document.getElementById('TaxiServices-div').style.color = "black";
  document.getElementById('AirportRides-div').style.backgroundColor = "white";
  document.getElementById('AirportRides-div').style.color = "black";
  document.getElementById('AboutUjjain-div').style.backgroundColor = "white";
  document.getElementById('AboutUjjain-div').style.color = "black";
  document.getElementById('shopping-div').style.backgroundColor = "white";
  document.getElementById('shopping-div').style.color = "black";



  document.getElementById('Home_main').style.display = "none";
  document.getElementById('profile_view_main').style.display = "none";
  document.getElementById('HotelBooking_main').style.display = "none";
  document.getElementById('Puja_booking_main').style.display = "none";
  document.getElementById('UjjainDarshan_main').style.display = "block";
  document.getElementById('Omkareshwar_main').style.display = "none";
  document.getElementById('MaaBaglamukhi_main').style.display = "none";
  document.getElementById('TaxiServices_main').style.display = "none";
  document.getElementById('AirportRides_main').style.display = "none";
  document.getElementById('AboutUjjain_main').style.display = "none";
  document.getElementById('shopping_main').style.display = "none";
 // document.getElementById('profile-update-container').style.display = "none";




  

  // Initialize Swiper ______ ujjain UP

var swiper = new Swiper("#swiper_ujjain_up", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
 //  pagination: {
 //    el: ".swiper-pagination",
 //    type: "fraction",
 //  },
  navigation: {
    nextEl: "#swiper-button-next_ujjain_up",
    prevEl: "#swiper-button-prev_ujjain_up",
  },
});

var appendNumber = 4;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document
  .querySelector(".append-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  });
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });



}


//////////////////////////////////////////////////////////////////////////

// ujjain popup script single click







// const button = document.querySelector('Topvisited_ujjain_btn') 
 
// button.addEventListener('click', e => { 
// 	console.log('I have been clicked') 
// }) 










 function ujjainFirstcard() {
  


document.getElementsByClassName('Topvisited_ujjain_btn')[0].addEventListener( "click",
function first(){

      console.log("first guide");
      document.getElementsByClassName('Topvisited_ujjain_btn')[0].style.backgroundColor = "#FF5F1F";
      document.getElementsByClassName('Topvisited_ujjain_btn')[0].style.color = "white";
  // document.getElementsByClassName('Topvisited_ujjain_btn')[8].style.color = "#FF5F1F";

      document.getElementById('ujjain_popup').style.display = "block";
      document.getElementById('ujjain_popupdiv').style.display = "block";
      document.getElementById('ujjainConfirmation_popupdiv').style.display = "none";
    
       let name = document.getElementsByClassName('ujjain_place_name')[0].innerHTML ;
    

fetch(`${PrivateIP}/guide/getByName/${name}`)
.then(response => response.json())
.then(data => {  console.log(data.data[0].name) 

  sessionStorage.setItem("ujjain_ID",data.data[0].id );

  document.getElementsByClassName('ujjainname')[0].innerHTML = data.data[0].name ;
  document.getElementsByClassName('ujjainkm')[0].innerHTML = `${data.data[0].distance} km ` ;
  document.getElementsByClassName('ujjainpopup_price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
  document.getElementsByClassName('ujjainpopup_price')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
  document.getElementsByClassName('ujjainpopup_price')[2].innerHTML = `&#8377; ${data.data[0].price} ` ;



   // image fetch 

        // fetch('${PrivateIP}/guide/AllGuides')
        // .then(response => response.json())
        // .then(data => {  console.log(data.data)  
        //   document.getElementsByClassName('ujjainpopup_img')[0].src = `${PrivateIP}/guide/displayHotelImage?id=${data.data[0].id}`

        // })


        let img = document.getElementsByClassName('ujjain-dharshan_imgs')[0].src;
        document.getElementsByClassName('ujjainpopup_img')[0].src = img;




})



});

document.getElementsByClassName('Topvisited_ujjain_btn')[1].addEventListener( "click",
function (){

 
      document.getElementById('ujjain_popup').style.display = "block";
      document.getElementById('ujjain_popupdiv').style.display = "block";
      document.getElementById('ujjainConfirmation_popupdiv').style.display = "none";

      let name = document.getElementsByClassName('ujjain_place_name')[1].innerHTML ;
    

      fetch(`${PrivateIP}/guide/getByName/${name}`)
      .then(response => response.json())
      .then(data => {  console.log(data.data[0].name) 
      
  sessionStorage.setItem("ujjain_ID",data.data[0].id );
      
        document.getElementsByClassName('ujjainname')[0].innerHTML = data.data[0].name ;
        document.getElementsByClassName('ujjainkm')[0].innerHTML = `${data.data[0].distance} km ` ;
        document.getElementsByClassName('ujjainpopup_price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
        document.getElementsByClassName('ujjainpopup_price')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
        document.getElementsByClassName('ujjainpopup_price')[2].innerHTML = `&#8377; ${data.data[0].price} ` ;
      

          // image fetch 

          // fetch('${PrivateIP}/guide/allGuides')
          // .then(response => response.json())
          // .then(data => {  console.log(data.data[1].id)  
          //   document.getElementsByClassName('ujjainpopup_img')[0].src = `${PrivateIP}/guide/displayHotelImage?id=1${data.data[1].id}`
  
          // })

          
        let img = document.getElementsByClassName('ujjain-dharshan_imgs')[1].src;
        document.getElementsByClassName('ujjainpopup_img')[0].src = img;


      
      })
      
});



document.getElementsByClassName('Topvisited_ujjain_btn')[2].addEventListener( "click",
function (){


      document.getElementById('ujjain_popup').style.display = "block";
      document.getElementById('ujjain_popupdiv').style.display = "block";
      document.getElementById('ujjainConfirmation_popupdiv').style.display = "none";

      let name = document.getElementsByClassName('ujjain_place_name')[2].innerHTML ;
     
      
      fetch(`${PrivateIP}/guide/getByName/${name}`)
      .then(response => response.json())
      .then(data => {  console.log(data.data[0].name) 

      sessionStorage.setItem("ujjain_ID",data.data[0].id );

        document.getElementsByClassName('ujjainname')[0].innerHTML = data.data[0].name ;
        document.getElementsByClassName('ujjainkm')[0].innerHTML = `${data.data[0].distance} km ` ;
        document.getElementsByClassName('ujjainpopup_price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
        document.getElementsByClassName('ujjainpopup_price')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
        document.getElementsByClassName('ujjainpopup_price')[2].innerHTML = `&#8377; ${data.data[0].price} ` ;


        // image fetch 
        let img = document.getElementsByClassName('ujjain-dharshan_imgs')[2].src;
        document.getElementsByClassName('ujjainpopup_img')[0].src = img;


        // fetch('${PrivateIP}/guide/allGuides')
        // .then(response => response.json())
        // .then(data => {  console.log(data.data[2].id)  
        //   document.getElementsByClassName('ujjainpopup_img')[0].src = `${PrivateIP}/guide/displayHotelImage?id=${data.data[2].id}`

        // })


      })



});

document.getElementsByClassName('Topvisited_ujjain_btn')[3].addEventListener( "click",
function (){

   
    document.getElementById('ujjain_popup').style.display = "block";
    document.getElementById('ujjain_popupdiv').style.display = "block";
    document.getElementById('ujjainConfirmation_popupdiv').style.display = "none";

    let name = document.getElementsByClassName('ujjain_place_name')[3].innerHTML ;
  
    fetch(`${PrivateIP}/guide/getByName/${name}`)
  .then(response => response.json())
  .then(data => {  console.log(data.data[0].name); 

    sessionStorage.setItem("ujjain_ID", data.data[0].id );

  document.getElementsByClassName('ujjainname')[0].innerHTML = data.data[0].name ;
  document.getElementsByClassName('ujjainkm')[0].innerHTML = `${data.data[0].distance} km ` ;
  document.getElementsByClassName('ujjainpopup_price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
  document.getElementsByClassName('ujjainpopup_price')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
  document.getElementsByClassName('ujjainpopup_price')[2].innerHTML = `&#8377; ${data.data[0].price} ` ;


  // image fetch 

  let img = document.getElementsByClassName('ujjain-dharshan_imgs')[3].src;
  document.getElementsByClassName('ujjainpopup_img')[0].src = img;


  // fetch('${PrivateIP}/guide/allGuides')
  // .then(response => response.json())
  // .then(data => {  console.log(data.data[3].id)  
  //   document.getElementsByClassName('ujjainpopup_img')[0].src = `${PrivateIP}/guide/displayHotelImage?id=${data.data[3].id}`


  // })


})



});


document.getElementsByClassName('Topvisited_ujjain_btn')[4].addEventListener( "click",
function (){

   
    document.getElementById('ujjain_popup').style.display = "block";
    document.getElementById('ujjain_popupdiv').style.display = "block";
    document.getElementById('ujjainConfirmation_popupdiv').style.display = "none";

    let name = document.getElementsByClassName('ujjain_place_name')[4].innerHTML ;
    

    fetch(`${PrivateIP}/guide/getByName/${name}`)
.then(response => response.json())
.then(data => {  console.log(data.data[0].name) 
  sessionStorage.setItem("ujjain_ID",data.data[0].id );

  document.getElementsByClassName('ujjainname')[0].innerHTML = data.data[0].name ;
  document.getElementsByClassName('ujjainkm')[0].innerHTML = `${data.data[0].distance} km ` ;
  document.getElementsByClassName('ujjainpopup_price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
  document.getElementsByClassName('ujjainpopup_price')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
  document.getElementsByClassName('ujjainpopup_price')[2].innerHTML = `&#8377; ${data.data[0].price} ` ;


      // image fetch 

      let img = document.getElementsByClassName('ujjain-dharshan_imgs')[4].src;
      document.getElementsByClassName('ujjainpopup_img')[0].src = img;

      // fetch('${PrivateIP}/guide/allGuides')
      // .then(response => response.json())
      // .then(data => {  console.log(data.data[4].id)  
      //   document.getElementsByClassName('ujjainpopup_img')[0].src = `${PrivateIP}/guide/displayHotelImage?id=${data.data[4].id}`

      // })

})


});

document.getElementsByClassName('Topvisited_ujjain_btn')[5].addEventListener( "click",
function (){

    // document.getElementsByClassName('Topvisited_ujjain_btn')[5].style.backgroundColor = "#FF5F1F";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[5].style.color = "white";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[1].style.backgroundColor = "white";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[1].style.color = "#FF5F1F";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[2].style.backgroundColor = "white";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[2].style.color = "#FF5F1F";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[3].style.backgroundColor = "white";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[3].style.color = "#FF5F1F";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[4].style.backgroundColor = "white";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[4].style.color = "#FF5F1F";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[0].style.backgroundColor = "white";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[0].style.color = "#FF5F1F";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[6].style.backgroundColor = "white";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[6].style.color = "#FF5F1F";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[7].style.backgroundColor = "white";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[7].style.color = "#FF5F1F";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[8].style.backgroundColor = "white";
    // document.getElementsByClassName('Topvisited_ujjain_btn')[8].style.color = "#FF5F1F";

    document.getElementById('ujjain_popup').style.display = "block";
    document.getElementById('ujjain_popupdiv').style.display = "block";
    document.getElementById('ujjainConfirmation_popupdiv').style.display = "none";

    let name = document.getElementsByClassName('ujjain_place_name')[5].innerHTML ;
    

    fetch(`${PrivateIP}/guide/getByName/${name}`)
  .then(response => response.json())
  .then(data => {  console.log(data.data[0].name) 

  sessionStorage.setItem("ujjain_ID",data.data[0].id );
  document.getElementsByClassName('ujjainname')[0].innerHTML = data.data[0].name ;
  document.getElementsByClassName('ujjainkm')[0].innerHTML = `${data.data[0].distance} km ` ;
  document.getElementsByClassName('ujjainpopup_price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
  document.getElementsByClassName('ujjainpopup_price')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
  document.getElementsByClassName('ujjainpopup_price')[2].innerHTML = `&#8377; ${data.data[0].price} ` ;


    // image fetch 
    let img = document.getElementsByClassName('ujjain-dharshan_imgs')[5].src;
    document.getElementsByClassName('ujjainpopup_img')[0].src = img;


    // fetch('${PrivateIP}/guide/allGuides')
    // .then(response => response.json())
    // .then(data => {  console.log(data.data[5].id)  
    //   document.getElementsByClassName('ujjainpopup_img')[0].src = `${PrivateIP}/guide/displayHotelImage?id=${data.data[5].id}`

    // })


})


});

document.getElementsByClassName('Topvisited_ujjain_btn')[6].addEventListener( "click",
function (){


    document.getElementById('ujjain_popup').style.display = "block";
    document.getElementById('ujjain_popupdiv').style.display = "block";
    document.getElementById('ujjainConfirmation_popupdiv').style.display = "none";

    let name = document.getElementsByClassName('ujjain_place_name')[6].innerHTML ;
    

    fetch(`${PrivateIP}/guide/getByName/${name}`)
  .then(response => response.json())
  .then(data => {  console.log(data.data[0].name) 
    sessionStorage.setItem("ujjain_ID",data.data[0].id );

  document.getElementsByClassName('ujjainname')[0].innerHTML = data.data[0].name ;
  document.getElementsByClassName('ujjainkm')[0].innerHTML = `${data.data[0].distance} km ` ;
  document.getElementsByClassName('ujjainpopup_price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
  document.getElementsByClassName('ujjainpopup_price')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
  document.getElementsByClassName('ujjainpopup_price')[2].innerHTML = `&#8377; ${data.data[0].price} ` ;

  // image fetch 
  let img = document.getElementsByClassName('ujjain-dharshan_imgs')[6].src;
  document.getElementsByClassName('ujjainpopup_img')[0].src = img;

  // fetch('${PrivateIP}/guide/allGuides')
  // .then(response => response.json())
  // .then(data => {  console.log(data.data[6].id)  
  //   document.getElementsByClassName('ujjainpopup_img')[0].src = `${PrivateIP}/guide/displayHotelImage?id=${data.data[6].id}`

  // })


})




});


document.getElementsByClassName('Topvisited_ujjain_btn')[7].addEventListener( "click",
function (){




    document.getElementById('ujjain_popup').style.display = "block";
    document.getElementById('ujjain_popupdiv').style.display = "block";
    document.getElementById('ujjainConfirmation_popupdiv').style.display = "none";

    let name = document.getElementsByClassName('ujjain_place_name')[7].innerHTML ;
    

    fetch(`${PrivateIP}/guide/getByName/${name}`)
.then(response => response.json())
.then(data => {  console.log(data.data[0].name) 

  sessionStorage.setItem("ujjain_ID",data.data[0].id );
  document.getElementsByClassName('ujjainname')[0].innerHTML = data.data[0].name ;
  document.getElementsByClassName('ujjainkm')[0].innerHTML = `${data.data[0].distance} km ` ;
  document.getElementsByClassName('ujjainpopup_price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
  document.getElementsByClassName('ujjainpopup_price')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
  document.getElementsByClassName('ujjainpopup_price')[2].innerHTML = `&#8377; ${data.data[0].price} ` ;

  // image fetch 

  let img = document.getElementsByClassName('ujjain-dharshan_imgs')[7].src;
  document.getElementsByClassName('ujjainpopup_img')[0].src = img;

  // fetch('${PrivateIP}/guide/allGuides')
  // .then(response => response.json())
  // .then(data => {  console.log(data.data[7].id)  
  //   document.getElementsByClassName('ujjainpopup_img')[0].src = `${PrivateIP}/guide/displayHotelImage?id=${data.data[7].id}`

  // })


})


});

document.getElementsByClassName('Topvisited_ujjain_btn')[8].addEventListener( "click",
function (){

 // document.getElementsByClassName('Topvisited_ujjain_btn')[7].style.color = "#FF5F1F";

    document.getElementById('ujjain_popup').style.display = "block";
    document.getElementById('ujjain_popupdiv').style.display = "block";
    document.getElementById('ujjainConfirmation_popupdiv').style.display = "none";

    let name = document.getElementsByClassName('ujjain_place_name')[8].innerHTML ;
    

    fetch(`${PrivateIP}/guide/getByName/${name}`)
.then(response => response.json())
.then(data => {  console.log(data.data[0].name) 

  sessionStorage.setItem("ujjain_ID",data.data[0].id );
  document.getElementsByClassName('ujjainname')[0].innerHTML = data.data[0].name ;
  document.getElementsByClassName('ujjainkm')[0].innerHTML = `${data.data[0].distance} km ` ;
  document.getElementsByClassName('ujjainpopup_price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
  document.getElementsByClassName('ujjainpopup_price')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
  document.getElementsByClassName('ujjainpopup_price')[2].innerHTML = `&#8377; ${data.data[0].price} ` ;


  // image fetch 
  let img = document.getElementsByClassName('ujjain-dharshan_imgs')[8].src;
  document.getElementsByClassName('ujjainpopup_img')[0].src = img;


  // fetch('${PrivateIP}/guide/allGuides')
  // .then(response => response.json())
  // .then(data => {  console.log(data.data[8].id)  
  //   document.getElementsByClassName('ujjainpopup_img')[0].src = `${PrivateIP}/guide/displayHotelImage?id=${data.data[8].id}`

  // })

})

});

  
document.getElementsByClassName('Topvisited_ujjain_btn')[9].addEventListener( "click",
function (){
  console.log("tenth guide");
   

    document.getElementById('ujjain_popup').style.display = "block";
    document.getElementById('ujjain_popupdiv').style.display = "block";
    document.getElementById('ujjainConfirmation_popupdiv').style.display = "none";

    let name = document.getElementsByClassName('ujjain_place_name')[9].innerHTML ;
    

    fetch(`${PrivateIP}/guide/getByName/${name}`)
.then(response => response.json())
.then(data => {  console.log(data.data) 
  sessionStorage.setItem("ujjain_ID",data.data[0].id );

  document.getElementsByClassName('ujjainname')[0].innerHTML = data.data[0].name ;
  document.getElementsByClassName('ujjainkm')[0].innerHTML = `${data.data[0].distance} km ` ;
  document.getElementsByClassName('ujjainpopup_price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
  document.getElementsByClassName('ujjainpopup_price')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
  document.getElementsByClassName('ujjainpopup_price')[2].innerHTML = `&#8377; ${data.data[0].price} ` ;


  // image fetch 
  let img = document.getElementsByClassName('ujjain-dharshan_imgs')[9].src;
  document.getElementsByClassName('ujjainpopup_img')[0].src = img;


  // fetch('${PrivateIP}/guide/allGuides')
  // .then(response => response.json())
  // .then(data => {  console.log(data.data[9].id)  
  //   document.getElementsByClassName('ujjainpopup_img')[0].src = `${PrivateIP}/guide/displayHotelImage?id=${data.data[9].id}`

  //     })
      
    })

});




 } /// ujjain book end here







function ujjainpackage_popup_btn() {
  document.getElementById('ujjain_popupdiv').style.display = "none";

  //document.getElementById('ujjain_popupdiv').style.display = "block";

 var Ujjain_id = sessionStorage.getItem('ujjain_ID');
 var user_id = localStorage.getItem('User-ID');

  var formdata = new FormData();
  formdata.append("userId", user_id);
  formdata.append("ujjainId", Ujjain_id);
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch(`${PrivateIP}/admin/api/ujjain/book` , requestOptions)
    .then(response => response.json())
    .then(result => {console.log(result)     })
    .catch(error => console.log('error', error));


    document.getElementById('ujjainConfirmation_popupdiv').style.display = "block";



}


function ujjain_delete(){
  ujjainBooking_closePopUp();
}



function ujjainBooking_closePopUp(){
  document.getElementById('ujjain_popup').style.display = "none";
  document.getElementsByClassName('Topvisited_ujjain_btn')[0].style.backgroundColor = "white";
  document.getElementsByClassName('Topvisited_ujjain_btn')[0].style.color = "#FF5F1F";
  document.getElementsByClassName('Topvisited_ujjain_btn')[1].style.backgroundColor = "white";
  document.getElementsByClassName('Topvisited_ujjain_btn')[1].style.color = "#FF5F1F";
  document.getElementsByClassName('Topvisited_ujjain_btn')[2].style.backgroundColor = "white";
  document.getElementsByClassName('Topvisited_ujjain_btn')[2].style.color = "#FF5F1F";
  document.getElementsByClassName('Topvisited_ujjain_btn')[3].style.backgroundColor = "white";
  document.getElementsByClassName('Topvisited_ujjain_btn')[3].style.color = "#FF5F1F";


}
function ujjainConfirmation_closePopUp() {
  document.getElementById('ujjain_popup').style.display = "none";
  ujjainBooking_closePopUp();

  document.getElementById('shopping_main').style.display = "none";
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Omkareshwar() {
  console.log("Omkareshwar  Page")
  document.getElementById('viewprofile').style.display = "block";

  document.getElementById('sidebar').style.height = "715px";
  document.getElementById('Omkareshwar-div').style.backgroundColor = "#FF5F1F";
  document.getElementById('Omkareshwar-div').style.color = "white";
  document.getElementById('MaaBaglamukhi-div').style.backgroundColor = "white";
  document.getElementById('MaaBaglamukhi-div').style.color = "black";
  document.getElementById('UjjainDarshan-div').style.backgroundColor = "white";
  document.getElementById('UjjainDarshan-div').style.color = "black";
  document.getElementById('pujabooking-div').style.backgroundColor = "white";
  document.getElementById('pujabooking-div').style.color = "black";
  document.getElementById('hotel-div').style.backgroundColor = "white";
  document.getElementById('hotel-div').style.color = "black";
  document.getElementById('home-div').style.backgroundColor = "white";
  document.getElementById('home-div').style.color = "black";
  document.getElementById('TaxiServices-div').style.backgroundColor =  "white";
  document.getElementById('TaxiServices-div').style.color = "black";
  document.getElementById('AirportRides-div').style.backgroundColor = "white";
  document.getElementById('AirportRides-div').style.color = "black";
  document.getElementById('AboutUjjain-div').style.backgroundColor = "white";
  document.getElementById('AboutUjjain-div').style.color = "black";
  document.getElementById('shopping-div').style.backgroundColor = "white";
  document.getElementById('shopping-div').style.color = "black";



  document.getElementById('Home_main').style.display = "none";
  document.getElementById('profile_view_main').style.display = "none";
  document.getElementById('HotelBooking_main').style.display = "none";
  document.getElementById('Puja_booking_main').style.display = "none";
  document.getElementById('UjjainDarshan_main').style.display = "none";
  document.getElementById('Omkareshwar_main').style.display = "block";
  document.getElementById('MaaBaglamukhi_main').style.display = "none";
  document.getElementById('TaxiServices_main').style.display = "none";
  document.getElementById('AirportRides_main').style.display = "none";
  document.getElementById('AboutUjjain_main').style.display = "none";
  document.getElementById('shopping_main').style.display = "none";
  //document.getElementById('profile-update-container').style.display = "none";



  // Initialize Swiper ______ Omkar UP

var swiper = new Swiper("#swiper_omkar_up", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
 //  pagination: {
 //    el: ".swiper-pagination",
 //    type: "fraction",
 //  },
  navigation: {
    nextEl: "#swiper-button-next_omkar_up",
    prevEl: "#swiper-button-prev_omkar_up",
  },
});

var appendNumber = 4;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document
  .querySelector(".append-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  });
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });


   



}

//              omkar popup 


function omkarFirstcard() {


  document.getElementsByClassName('omkarbtn')[0].addEventListener( "click",
  function (){

    document.getElementById('omkar_popup').style.display = "block";
    document.getElementById('omkar_popupdiv').style.display = "block";
    document.getElementById('omkarConfirmation_popupdiv').style.display = "none";
  
      let name = document.getElementsByClassName('OmkarName')[0].innerHTML ;
      fetch(`${PrivateIP}/omkareshwar/GetByName/${name}`)
     .then(response => response.json())
     .then(data => {  console.log(data.data[0].name); 
  
      sessionStorage.setItem("omkarID", data.data[0].id );
      document.getElementsByClassName('omkarpujaNames')[0].innerHTML = data.data[0].name ;
      document.getElementsByClassName('omkarkm')[0].innerHTML = `${data.data[0].distance} km ` ;
      document.getElementsByClassName('omkarpopup_price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
      document.getElementsByClassName('omkartotalprice')[0].innerHTML = `&#8377; ${data.data[0].price} ` ;
      document.getElementsByClassName('omkartotalprice')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
    
    // image fetch 
    let OmkarID = sessionStorage.getItem('omkarID');
    document.getElementsByClassName('omkarpopup_img')[0].src = `${PrivateIP}/omkareshwar/displayHotelImage?id=${OmkarID}`
 
  })
  });

  document.getElementsByClassName('omkarbtn')[1].addEventListener( "click",
  function (){

    document.getElementById('omkar_popup').style.display = "block";
    document.getElementById('omkar_popupdiv').style.display = "block";
    document.getElementById('omkarConfirmation_popupdiv').style.display = "none";
  
      let name = document.getElementsByClassName('OmkarName')[1].innerHTML ;
      fetch(`${PrivateIP}/omkareshwar/GetByName/${name}`)
     .then(response => response.json())
     .then(data => {  console.log(data.data[0].name); 
  
      sessionStorage.setItem("omkarID", data.data[0].id );
      document.getElementsByClassName('omkarpujaNames')[0].innerHTML = data.data[0].name ;
      document.getElementsByClassName('omkarkm')[0].innerHTML = `${data.data[0].distance} km ` ;
      document.getElementsByClassName('omkarpopup_price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
      document.getElementsByClassName('omkartotalprice')[0].innerHTML = `&#8377; ${data.data[0].price} ` ;
      document.getElementsByClassName('omkartotalprice')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
    
        let OmkarID = sessionStorage.getItem('omkarID');
        document.getElementsByClassName('omkarpopup_img')[0].src = `${PrivateIP}/omkareshwar/displayHotelImage?id=${OmkarID}`
       

  })
  });

  document.getElementsByClassName('omkarbtn')[2].addEventListener( "click",
  function (){

    document.getElementById('omkar_popup').style.display = "block";
    document.getElementById('omkar_popupdiv').style.display = "block";
    document.getElementById('omkarConfirmation_popupdiv').style.display = "none";
  
      let name = document.getElementsByClassName('OmkarName')[2].innerHTML ;
      fetch(`${PrivateIP}/omkareshwar/GetByName/${name}`)
     .then(response => response.json())
     .then(data => {  console.log(data.data[0].name); 
  
      sessionStorage.setItem("omkarID", data.data[0].id );
      document.getElementsByClassName('omkarpujaNames')[0].innerHTML = data.data[0].name ;
      document.getElementsByClassName('omkarkm')[0].innerHTML = `${data.data[0].distance} km ` ;
      document.getElementsByClassName('omkarpopup_price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
      document.getElementsByClassName('omkartotalprice')[0].innerHTML = `&#8377; ${data.data[0].price} ` ;
      document.getElementsByClassName('omkartotalprice')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
    
    // image fetch 
    let OmkarID = sessionStorage.getItem('omkarID');
    document.getElementsByClassName('omkarpopup_img')[0].src = `${PrivateIP}/omkareshwar/displayHotelImage?id=${OmkarID}`
  })
  });

  document.getElementsByClassName('omkarbtn')[3].addEventListener( "click",
  function (){

    document.getElementById('omkar_popup').style.display = "block";
    document.getElementById('omkar_popupdiv').style.display = "block";
    document.getElementById('omkarConfirmation_popupdiv').style.display = "none";
  
      let name = document.getElementsByClassName('OmkarName')[3].innerHTML ;
      fetch(`${PrivateIP}/omkareshwar/GetByName/${name}`)
     .then(response => response.json())
     .then(data => {  console.log(data.data[0].name); 
  
      sessionStorage.setItem("omkarID", data.data[0].id );
      document.getElementsByClassName('omkarpujaNames')[0].innerHTML = data.data[0].name ;
      document.getElementsByClassName('omkarkm')[0].innerHTML = `${data.data[0].distance} km ` ;
      document.getElementsByClassName('omkarpopup_price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
      document.getElementsByClassName('omkartotalprice')[0].innerHTML = `&#8377; ${data.data[0].price} ` ;
      document.getElementsByClassName('omkartotalprice')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
    
    // image fetch 
    let OmkarID = sessionStorage.getItem('omkarID');
    document.getElementsByClassName('omkarpopup_img')[0].src = `${PrivateIP}/omkareshwar/displayHotelImage?id=${OmkarID}`
  })
  });

  document.getElementsByClassName('omkarbtn')[4].addEventListener( "click",
  function (){

    document.getElementById('omkar_popup').style.display = "block";
    document.getElementById('omkar_popupdiv').style.display = "block";
    document.getElementById('omkarConfirmation_popupdiv').style.display = "none";
  
      let name = document.getElementsByClassName('OmkarName')[4].innerHTML ;
      fetch(`${PrivateIP}/omkareshwar/GetByName/${name}`)
     .then(response => response.json())
     .then(data => {  console.log(data.data[0].name); 
  
      sessionStorage.setItem("omkarID", data.data[0].id );
      document.getElementsByClassName('omkarpujaNames')[0].innerHTML = data.data[0].name ;
      document.getElementsByClassName('omkarkm')[0].innerHTML = `${data.data[0].distance} km ` ;
      document.getElementsByClassName('omkarpopup_price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
      document.getElementsByClassName('omkartotalprice')[0].innerHTML = `&#8377; ${data.data[0].price} ` ;
      document.getElementsByClassName('omkartotalprice')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
    
    // image fetch 
    let OmkarID = sessionStorage.getItem('omkarID');
    document.getElementsByClassName('omkarpopup_img')[0].src = `${PrivateIP}/omkareshwar/displayHotelImage?id=${OmkarID}`
  })
  });

  document.getElementsByClassName('omkarbtn')[5].addEventListener( "click",
  function (){

    document.getElementById('omkar_popup').style.display = "block";
    document.getElementById('omkar_popupdiv').style.display = "block";
    document.getElementById('omkarConfirmation_popupdiv').style.display = "none";
  
      let name = document.getElementsByClassName('OmkarName')[5].innerHTML ;
      fetch(`${PrivateIP}/omkareshwar/GetByName/${name}`)
     .then(response => response.json())
     .then(data => {  console.log(data.data[0].name); 
  
      sessionStorage.setItem("omkarID", data.data[0].id );
      document.getElementsByClassName('omkarpujaNames')[0].innerHTML = data.data[0].name ;
      document.getElementsByClassName('omkarkm')[0].innerHTML = `${data.data[0].distance} km ` ;
      document.getElementsByClassName('omkarpopup_price')[0].innerHTML = `&#8377; ${data.data[0].price} `;
      document.getElementsByClassName('omkartotalprice')[0].innerHTML = `&#8377; ${data.data[0].price} ` ;
      document.getElementsByClassName('omkartotalprice')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
    
    // image fetch 
    let OmkarID = sessionStorage.getItem('omkarID');
    document.getElementsByClassName('omkarpopup_img')[0].src = `${PrivateIP}/omkareshwar/displayHotelImage?id=${OmkarID}`
  })
  });






  


  }    



function deleteomkarcard(){
  

  // document.getElementsByClassName('omkar_delete_icon')[0].addEventListener('click',
  // function(){
  // document.getElementsByClassName('omkarprice')[0].innerHTML = 0;
  // document.getElementsByClassName('omkarpackagediv')[0].style.display = "none";
  // add_omkarprice();
  // })

  // document.getElementsByClassName('omkar_delete_icon')[1].addEventListener('click',
  // function(){
  // document.getElementsByClassName('omkarprice')[1].innerHTML = 0;
  // document.getElementsByClassName('omkarpackagediv')[1].style.display = "none";
  // add_omkarprice();
  // })

  // document.getElementsByClassName('omkar_delete_icon')[2].addEventListener('click',
  // function(){
  // document.getElementsByClassName('omkarprice')[2].innerHTML = 0;
  // document.getElementsByClassName('omkarpackagediv')[2].style.display = "none";
  // add_omkarprice();
  // })

  // document.getElementsByClassName('omkar_delete_icon')[3].addEventListener('click',
  // function(){
  // document.getElementsByClassName('omkarprice')[3].innerHTML = 0;
  // document.getElementsByClassName('omkarpackagediv')[3].style.display = "none";
  // add_omkarprice();
  // })

  // document.getElementsByClassName('omkar_delete_icon')[4].addEventListener('click',
  // function(){
  // document.getElementsByClassName('omkarprice')[4].innerHTML = 0;
  // document.getElementsByClassName('omkarpackagediv')[4].style.display = "none";
  // add_omkarprice();
  // })

  // document.getElementsByClassName('omkar_delete_icon')[5].addEventListener('click',
  // function(){
  // document.getElementsByClassName('omkarprice')[5].innerHTML = 0;
  // document.getElementsByClassName('omkarpackagediv')[5].style.display = "none";
  // add_omkarprice();
  // })

  // document.getElementsByClassName('omkar_delete_icon')[6].addEventListener('click',
  // function(){
  // document.getElementsByClassName('omkarprice')[6].innerHTML = 0;
  // document.getElementsByClassName('omkarpackagediv')[6].style.display = "none";
  // add_omkarprice();
  // })

  // document.getElementsByClassName('omkar_delete_icon')[7].addEventListener('click',
  // function(){
  // document.getElementsByClassName('omkarprice')[7].innerHTML = 0;
  // document.getElementsByClassName('omkarpackagediv')[7].style.display = "none";
  // add_omkarprice();
  // })

  // document.getElementsByClassName('omkar_delete_icon')[8].addEventListener('click',
  // function(){
  // document.getElementsByClassName('omkarprice')[8].innerHTML = 0;
  // document.getElementsByClassName('omkarpackagediv')[8].style.display = "none";
  // add_omkarprice();
  // })



}



// adding omkar  prices 

// function add_omkarprice(){

//   let a = parseInt(document.getElementsByClassName('omkarprice')[0].innerHTML);
//   let b = parseInt( document.getElementsByClassName('omkarprice')[1].innerHTML);
//   let c = parseInt( document.getElementsByClassName('omkarprice')[2].innerHTML);
//   let d = parseInt(document.getElementsByClassName('omkarprice')[3].innerHTML);
//   let e = parseInt( document.getElementsByClassName('omkarprice')[4].innerHTML);
//   let f = parseInt( document.getElementsByClassName('omkarprice')[5].innerHTML);
//   let g = parseInt(document.getElementsByClassName('omkarprice')[6].innerHTML);
//   let h = parseInt( document.getElementsByClassName('omkarprice')[7].innerHTML);
//   let i = parseInt( document.getElementsByClassName('omkarprice')[8].innerHTML);      // 9th product
//    let j = parseInt(document.getElementsByClassName('omkarprice')[9].innerHTML);    //10th product
//   // let k = parseInt( document.getElementsByClassName('omkarprice')[1].innerHTML);   11 product is add enable this
//   // let l = parseInt( document.getElementsByClassName('omkarprice')[2].innerHTML);
// let sum = a+b+c+d+e+f+g+h+i+j ;

// document.getElementsByClassName('omkartotalprice')[0].innerHTML = sum ;
// document.getElementsByClassName('omkartotalprice')[1].innerHTML = sum ;

// console.log(sum)


// }



function omkarpackage_popup_btn() {

  var OmkarID = sessionStorage.getItem('omkarID');
  var user_id = localStorage.getItem('User-ID');
 
   var formdata = new FormData();
   formdata.append("userId", user_id);
   formdata.append("omkarId", OmkarID);
   
   var requestOptions = {
     method: 'POST',
     body: formdata,
     redirect: 'follow'
   };
   
   fetch(`${PrivateIP}/admin/api/omkareshwar/book`, requestOptions)
     .then(response => response.json())
     .then(result => {console.log(result)  
    
        document.getElementById('omkarConfirmation_popupdiv').style.display = "block";
        document.getElementById('omkar_popupdiv').style.display = "none";

    })
     .catch(error => console.log('error', error));
 

 
}


function omkarBooking_closePopUp() {
  document.getElementById('omkar_popup').style.display = "none";
  // document.getElementsByClassName('Topvisited_omkar_btn')[0].style.backgroundColor = "white";
  // document.getElementsByClassName('Topvisited_omkar_btn')[0].style.color = "#FF5F1F";
  // document.getElementsByClassName('Topvisited_omkar_btn')[1].style.backgroundColor = "white";
  // document.getElementsByClassName('Topvisited_omkar_btn')[1].style.color = "#FF5F1F";
  // document.getElementsByClassName('Topvisited_omkar_btn')[2].style.backgroundColor = "white";
  // document.getElementsByClassName('Topvisited_omkar_btn')[2].style.color = "#FF5F1F";
  // document.getElementsByClassName('Topvisited_omkar_btn')[3].style.backgroundColor = "white";
  // document.getElementsByClassName('Topvisited_omkar_btn')[3].style.color = "#FF5F1F";
}

function omkarConfirmation_closePopUp(){
  document.getElementById('omkar_popup').style.display = "none";
  omkarBooking_closePopUp();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// MaaBaglaMukhi functions



function MaaBaglamukhi() {
  console.log("MaaBaglamukhi  Page")

  document.getElementById('viewprofile').style.display = "block";

  document.getElementById('sidebar').style.height = "715px";
  document.getElementById('MaaBaglamukhi-div').style.backgroundColor = "#FF5F1F";
  document.getElementById('MaaBaglamukhi-div').style.color = "white";
  document.getElementById('Omkareshwar-div').style.backgroundColor = "white";
  document.getElementById('Omkareshwar-div').style.color = "black";
  document.getElementById('UjjainDarshan-div').style.backgroundColor = "white";
  document.getElementById('UjjainDarshan-div').style.color = "black";
  document.getElementById('pujabooking-div').style.backgroundColor = "white";
  document.getElementById('pujabooking-div').style.color = "black";
  document.getElementById('hotel-div').style.backgroundColor = "white";
  document.getElementById('hotel-div').style.color = "black";
  document.getElementById('home-div').style.backgroundColor = "white";
  document.getElementById('home-div').style.color = "black";
  document.getElementById('TaxiServices-div').style.backgroundColor =  "white";
  document.getElementById('TaxiServices-div').style.color = "black";
  document.getElementById('AirportRides-div').style.backgroundColor = "white";
  document.getElementById('AirportRides-div').style.color = "black";
  document.getElementById('AboutUjjain-div').style.backgroundColor = "white";
  document.getElementById('AboutUjjain-div').style.color = "black";
  document.getElementById('shopping-div').style.backgroundColor = "white";
  document.getElementById('shopping-div').style.color = "black";



  document.getElementById('Home_main').style.display = "none";
  document.getElementById('profile_view_main').style.display = "none";
  document.getElementById('HotelBooking_main').style.display = "none";
  document.getElementById('Puja_booking_main').style.display = "none";
  document.getElementById('UjjainDarshan_main').style.display = "none";
  document.getElementById('Omkareshwar_main').style.display = "none";
  document.getElementById('MaaBaglamukhi_main').style.display = "block";
  document.getElementById('TaxiServices_main').style.display = "none";
  document.getElementById('AirportRides_main').style.display = "none";
  document.getElementById('AboutUjjain_main').style.display = "none";
  document.getElementById('shopping_main').style.display = "none";
 // document.getElementById('profile-update-container').style.display = "none";




  // Initialize Swiper ______ Maa Baglamukhi Tour UP

var swiper = new Swiper("#swiper_maabag_up", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
 //  pagination: {
 //    el: ".swiper-pagination",
 //    type: "fraction",
 //  },
  navigation: {
    nextEl: "#swiper-button-next_maabag_up",
    prevEl: "#swiper-button-prev_maabag_up",
  },
});

var appendNumber = 4;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document
  .querySelector(".append-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  });
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });


}


function maabagFirstcard() {

  document.getElementsByClassName('Maabagla_btn')[0].addEventListener( "click",
  function (){

    document.getElementById('maabag_popup').style.display = "block";
    document.getElementById('maabag_popupdiv').style.display = "block";
    document.getElementById('maabagConfirmation_popupdiv').style.display = "none";

      let name = document.getElementsByClassName('Maabagla_name')[0].innerHTML ;
      fetch(`${PrivateIP}/maaBaglamukhi/GetByName/${name}`)
     .then(response => response.json())
     .then(data => {  console.log(data.data[0].name); 
  
      sessionStorage.setItem("MaabaglaID", data.data[0].id );
      document.getElementsByClassName('mabaglaname')[0].innerHTML = data.data[0].name ;
      document.getElementsByClassName('mabaglakm')[0].innerHTML = `${data.data[0].distance} km ` ;
      document.getElementsByClassName('maabaglaprice')[0].innerHTML = `&#8377; ${data.data[0].price} `;
      document.getElementsByClassName('maabagla_totalprice')[0].innerHTML = `&#8377; ${data.data[0].price} ` ;
      document.getElementsByClassName('maabagla_totalprice')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
    
    // image fetch 
    let MaabaglaID = sessionStorage.getItem('MaabaglaID');
    document.getElementsByClassName('mabagala_popupimg')[0].src = `${PrivateIP}/maaBaglamukhi/displayHotelImage?id=${MaabaglaID}`
 
  })
  });

  document.getElementsByClassName('Maabagla_btn')[1].addEventListener( "click",
  function (){

    document.getElementById('maabag_popup').style.display = "block";
    document.getElementById('maabag_popupdiv').style.display = "block";
    document.getElementById('maabagConfirmation_popupdiv').style.display = "none";

      let name = document.getElementsByClassName('Maabagla_name')[1].innerHTML ;
      fetch(`${PrivateIP}/maaBaglamukhi/GetByName/${name}`)
     .then(response => response.json())
     .then(data => {  console.log(data.data[0].name); 
  
      sessionStorage.setItem("MaabaglaID", data.data[0].id );
      document.getElementsByClassName('mabaglaname')[0].innerHTML = data.data[0].name ;
      document.getElementsByClassName('mabaglakm')[0].innerHTML = `${data.data[0].distance} km ` ;
      document.getElementsByClassName('maabaglaprice')[0].innerHTML = `&#8377; ${data.data[0].price} `;
      document.getElementsByClassName('maabagla_totalprice')[0].innerHTML = `&#8377; ${data.data[0].price} ` ;
      document.getElementsByClassName('maabagla_totalprice')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
    
    // image fetch 
    let MaabaglaID = sessionStorage.getItem('MaabaglaID');
    document.getElementsByClassName('mabagala_popupimg')[0].src = `${PrivateIP}/maaBaglamukhi/displayHotelImage?id=${MaabaglaID}`
 
  })
  });

  document.getElementsByClassName('Maabagla_btn')[2].addEventListener( "click",
  function (){

    document.getElementById('maabag_popup').style.display = "block";
    document.getElementById('maabag_popupdiv').style.display = "block";
    document.getElementById('maabagConfirmation_popupdiv').style.display = "none";

      let name = document.getElementsByClassName('Maabagla_name')[0].innerHTML ;
      fetch(`${PrivateIP}/maaBaglamukhi/GetByName/${name}`)
     .then(response => response.json())
     .then(data => {  console.log(data.data[0].name); 
  
      sessionStorage.setItem("MaabaglaID", data.data[0].id );
      document.getElementsByClassName('mabaglaname')[0].innerHTML = data.data[0].name ;
      document.getElementsByClassName('mabaglakm')[0].innerHTML = `${data.data[0].distance} km ` ;
      document.getElementsByClassName('maabaglaprice')[0].innerHTML = `&#8377; ${data.data[0].price} `;
      document.getElementsByClassName('maabagla_totalprice')[0].innerHTML = `&#8377; ${data.data[0].price} ` ;
      document.getElementsByClassName('maabagla_totalprice')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
    
    // image fetch 
    let MaabaglaID = sessionStorage.getItem('MaabaglaID');
    document.getElementsByClassName('mabagala_popupimg')[0].src = `${PrivateIP}/maaBaglamukhi/displayHotelImage?id=${MaabaglaID}`
 
  })
  });

  document.getElementsByClassName('Maabagla_btn')[3].addEventListener( "click",
  function (){

    document.getElementById('maabag_popup').style.display = "block";
    document.getElementById('maabag_popupdiv').style.display = "block";
    document.getElementById('maabagConfirmation_popupdiv').style.display = "none";

      let name = document.getElementsByClassName('Maabagla_name')[3].innerHTML ;
      fetch(`${PrivateIP}/maaBaglamukhi/GetByName/${name}`)
     .then(response => response.json())
     .then(data => {  console.log(data.data[0].name); 
  
      sessionStorage.setItem("MaabaglaID", data.data[0].id );
      document.getElementsByClassName('mabaglaname')[0].innerHTML = data.data[0].name ;
      document.getElementsByClassName('mabaglakm')[0].innerHTML = `${data.data[0].distance} km ` ;
      document.getElementsByClassName('maabaglaprice')[0].innerHTML = `&#8377; ${data.data[0].price} `;
      document.getElementsByClassName('maabagla_totalprice')[0].innerHTML = `&#8377; ${data.data[0].price} ` ;
      document.getElementsByClassName('maabagla_totalprice')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
    
    // image fetch 
    let MaabaglaID = sessionStorage.getItem('MaabaglaID');
    document.getElementsByClassName('mabagala_popupimg')[0].src = `${PrivateIP}/maaBaglamukhi/displayHotelImage?id=${MaabaglaID}`
 
  })
  });


  document.getElementsByClassName('Maabagla_btn')[4].addEventListener( "click",
  function (){

    document.getElementById('maabag_popup').style.display = "block";
    document.getElementById('maabag_popupdiv').style.display = "block";
    document.getElementById('maabagConfirmation_popupdiv').style.display = "none";

      let name = document.getElementsByClassName('Maabagla_name')[4].innerHTML ;
      fetch(`${PrivateIP}/maaBaglamukhi/GetByName/${name}`)
     .then(response => response.json())
     .then(data => {  console.log(data.data[0].name); 
  
      sessionStorage.setItem("MaabaglaID", data.data[0].id );
      document.getElementsByClassName('mabaglaname')[0].innerHTML = data.data[0].name ;
      document.getElementsByClassName('mabaglakm')[0].innerHTML = `${data.data[0].distance} km ` ;
      document.getElementsByClassName('maabaglaprice')[0].innerHTML = `&#8377; ${data.data[0].price} `;
      document.getElementsByClassName('maabagla_totalprice')[0].innerHTML = `&#8377; ${data.data[0].price} ` ;
      document.getElementsByClassName('maabagla_totalprice')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
    
    // image fetch 
    let MaabaglaID = sessionStorage.getItem('MaabaglaID');
    document.getElementsByClassName('mabagala_popupimg')[0].src = `${PrivateIP}/maaBaglamukhi/displayHotelImage?id=${MaabaglaID}`
 
  })
  });

  document.getElementsByClassName('Maabagla_btn')[5].addEventListener( "click",
  function (){

    document.getElementById('maabag_popup').style.display = "block";
    document.getElementById('maabag_popupdiv').style.display = "block";
    document.getElementById('maabagConfirmation_popupdiv').style.display = "none";

      let name = document.getElementsByClassName('Maabagla_name')[5].innerHTML ;
      fetch(`${PrivateIP}/maaBaglamukhi/GetByName/${name}`)
     .then(response => response.json())
     .then(data => {  console.log(data.data[0].name); 
  
      sessionStorage.setItem("MaabaglaID", data.data[0].id );
      document.getElementsByClassName('mabaglaname')[0].innerHTML = data.data[0].name ;
      document.getElementsByClassName('mabaglakm')[0].innerHTML = `${data.data[0].distance} km ` ;
      document.getElementsByClassName('maabaglaprice')[0].innerHTML = `&#8377; ${data.data[0].price} `;
      document.getElementsByClassName('maabagla_totalprice')[0].innerHTML = `&#8377; ${data.data[0].price} ` ;
      document.getElementsByClassName('maabagla_totalprice')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
    
    // image fetch 
    let MaabaglaID = sessionStorage.getItem('MaabaglaID');
    document.getElementsByClassName('mabagala_popupimg')[0].src = `${PrivateIP}/maaBaglamukhi/displayHotelImage?id=${MaabaglaID}`
 
  })
  });

  document.getElementsByClassName('Maabagla_btn')[6].addEventListener( "click",
  function (){

    document.getElementById('maabag_popup').style.display = "block";
    document.getElementById('maabag_popupdiv').style.display = "block";
    document.getElementById('maabagConfirmation_popupdiv').style.display = "none";

      let name = document.getElementsByClassName('Maabagla_name')[6].innerHTML ;
      fetch(`${PrivateIP}/maaBaglamukhi/GetByName/${name}`)
     .then(response => response.json())
     .then(data => {  console.log(data.data[0].name); 
  
      sessionStorage.setItem("MaabaglaID", data.data[0].id );
      document.getElementsByClassName('mabaglaname')[0].innerHTML = data.data[0].name ;
      document.getElementsByClassName('mabaglakm')[0].innerHTML = `${data.data[0].distance} km ` ;
      document.getElementsByClassName('maabaglaprice')[0].innerHTML = `&#8377; ${data.data[0].price} `;
      document.getElementsByClassName('maabagla_totalprice')[0].innerHTML = `&#8377; ${data.data[0].price} ` ;
      document.getElementsByClassName('maabagla_totalprice')[1].innerHTML = `&#8377; ${data.data[0].price} ` ;
    
    // image fetch 
    let MaabaglaID = sessionStorage.getItem('MaabaglaID');
    document.getElementsByClassName('mabagala_popupimg')[0].src = `${PrivateIP}/maaBaglamukhi/displayHotelImage?id=${MaabaglaID}`
 
  })
  });



  // document.getElementsByClassName('Topvisited_maabag_btn')[0].style.backgroundColor = "#FF5F1F";
  // document.getElementsByClassName('Topvisited_maabag_btn')[0].style.color = "white";


      
  // fetch('${PrivateIP}/guide/allGuides')
  // .then(response => response.json())
  // .then(data => {  console.log(data.data) 
  
  //   let data2 = "";
  
  //   data.data.map( (product) => {
  
  //     data2 +=`
  
  //               <div class="puja_package_divs maabaglapackagediv">
  //               <img class="Package_imgs" src="${PrivateIP}/guide/displayHotelImage?id=${product.id}" alt="" srcset="">
  //               <div>  
  //                   <span class="omkarpujaNames">${product.name}</span>
  //                   <div class="dis_price_div" >
  //                       <img class="Package_location_img" src="../Images/destination_popup_icon.png" style="width: 19px;"  alt="" >
  //                       <span class="Package_templeName" style="font-size: 11px;">${product.distance} km</span>
  //                       <span class="Package_pricenum "  >&#8377; <span class="maabaglaprice"> ${product.price}</span>  </span>
  //                   </div>
  //               </div>
  //                   <img class="maabagla_deleteicon" id="maabagladelete"  onclick="delete_maabaglacard()"  src="../Images/delete_icon.png" alt="">
  //           </div>
  
  //      `;
    
  //             document.getElementById("maabagla_guides_packages_divs").innerHTML = data2;
          
  //           } )

  //           add_maabaglaprice()

  //           document.getElementById("maabagladelete").click();
  // })
  

}


function delete_maabaglacard(){
  

  document.getElementsByClassName('maabagla_deleteicon')[0].addEventListener('click',
  function(){
  document.getElementsByClassName('maabaglaprice')[0].innerHTML = 0;
  document.getElementsByClassName('maabaglapackagediv')[0].style.display = "none";
  add_maabaglaprice()
  })

  document.getElementsByClassName('maabagla_deleteicon')[1].addEventListener('click',
  function(){
  document.getElementsByClassName('maabaglaprice')[1].innerHTML = 0;
  document.getElementsByClassName('maabaglapackagediv')[1].style.display = "none";
  add_maabaglaprice()
  })

  document.getElementsByClassName('maabagla_deleteicon')[2].addEventListener('click',
  function(){
  document.getElementsByClassName('maabaglaprice')[2].innerHTML = 0;
  document.getElementsByClassName('maabaglapackagediv')[2].style.display = "none";
  add_maabaglaprice()
  })

  document.getElementsByClassName('maabagla_deleteicon')[3].addEventListener('click',
  function(){
  document.getElementsByClassName('maabaglaprice')[3].innerHTML = 0;
  document.getElementsByClassName('maabaglapackagediv')[3].style.display = "none";
  add_maabaglaprice()
  })

  document.getElementsByClassName('maabagla_deleteicon')[4].addEventListener('click',
  function(){
  document.getElementsByClassName('maabaglaprice')[4].innerHTML = 0;
  document.getElementsByClassName('maabaglapackagediv')[4].style.display = "none";
  add_maabaglaprice()
  })

  document.getElementsByClassName('maabagla_deleteicon')[5].addEventListener('click',
  function(){
  document.getElementsByClassName('maabaglaprice')[5].innerHTML = 0;
  document.getElementsByClassName('maabaglapackagediv')[5].style.display = "none";
  add_maabaglaprice()
  })

  document.getElementsByClassName('maabagla_deleteicon')[6].addEventListener('click',
  function(){
  document.getElementsByClassName('maabaglaprice')[6].innerHTML = 0;
  document.getElementsByClassName('maabaglapackagediv')[6].style.display = "none";
  add_maabaglaprice()
  })

  document.getElementsByClassName('maabagla_deleteicon')[7].addEventListener('click',
  function(){
  document.getElementsByClassName('maabaglaprice')[7].innerHTML = 0;
  document.getElementsByClassName('maabaglapackagediv')[7].style.display = "none";
  add_maabaglaprice()
  
  })

  document.getElementsByClassName('maabagla_deleteicon')[8].addEventListener('click',
  function(){
  document.getElementsByClassName('maabaglaprice')[8].innerHTML = 0;
  document.getElementsByClassName('maabaglapackagediv')[8].style.display = "none";
  add_maabaglaprice()
  
  })




}


// adding Maabagla  prices ....

// function add_maabaglaprice(){
//   let a = parseInt(document.getElementsByClassName('maabaglaprice')[0].innerHTML);
//   let b = parseInt( document.getElementsByClassName('maabaglaprice')[1].innerHTML);
//   let c = parseInt( document.getElementsByClassName('maabaglaprice')[2].innerHTML);
//   let d = parseInt(document.getElementsByClassName('maabaglaprice')[3].innerHTML);
//   let e = parseInt( document.getElementsByClassName('maabaglaprice')[4].innerHTML);
//   let f = parseInt( document.getElementsByClassName('maabaglaprice')[5].innerHTML);
//   let g = parseInt(document.getElementsByClassName('maabaglaprice')[6].innerHTML);
//   let h = parseInt( document.getElementsByClassName('maabaglaprice')[7].innerHTML);
//   let i = parseInt( document.getElementsByClassName('maabaglaprice')[8].innerHTML);   // 09 
//   let j = parseInt(document.getElementsByClassName('maabaglaprice')[9].innerHTML);    // 10 
//  // let k = parseInt( document.getElementsByClassName('omkarprice')[1].innerHTML);   //11 product is add enable this
//   // let l = parseInt( document.getElementsByClassName('omkarprice')[2].innerHTML);
//   let sum = a+b+c+d+e+f+g+h+i+j ;

// document.getElementsByClassName('maabagla_totalprice')[0].innerHTML = sum ;
// document.getElementsByClassName('maabagla_totalprice')[1].innerHTML = sum ;

// console.log(sum)

// }




function maabagpackage_popup_btn() {
  document.getElementById('maabag_popupdiv').style.display = "none";

  document.getElementById('maabagConfirmation_popupdiv').style.display = "block";
}
function maabagBooking_closePopUp(){
  document.getElementById('maabag_popup').style.display = "none";
}
function maabagConfirmation_closePopUp() {
  document.getElementById('maabag_popup').style.display = "none";
  maabagBooking_closePopUp();
}





//                 Taxi services   

function TaxiServices(){
  console.log('Taxi Services Page');
  document.getElementById('viewprofile').style.display = "block";

  const formE1 = document.querySelector('#taxi');
 
  formE1.addEventListener('submit', event => {
      event.preventDefault();
 
      let formData = new FormData(formE1);
 
      var pickup = document.getElementById("taxipickup").value;
      var drop = document.getElementById("taxi-drop").value;
      console.log("Pick-up Location" + '' + pickup);
      console.log("Desination" + '' + drop);
      let data;
      data = Object.fromEntries(formData);
      console.log(data);
      var user_id = localStorage.getItem('User-ID');
      fetch(`${PrivateIP}/taxiService/save/${user_id}`,
     
          {
              method: "POST",
              body: JSON.stringify({
 
                  "fromLocation": pickup,
                  "toLocation": drop,
                  "totalFare" : 100
              }),
              headers: {
                  "Content-type": "application/json; charset=UTF-8"
              },
          })
          .then((response) => response.json())
          .then(data => {
              console.log(data);
            })
          })









  document.getElementById('sidebar').style.height = "715px";
  document.getElementById('home-div').style.backgroundColor = "white";
  document.getElementById('home-div').style.color = "black";
  document.getElementById('hotel-div').style.backgroundColor = "white";
  document.getElementById('hotel-div').style.color = "black";
  document.getElementById('pujabooking-div').style.backgroundColor = "white";
  document.getElementById('pujabooking-div').style.color = "black";
  document.getElementById('UjjainDarshan-div').style.backgroundColor = "white";
  document.getElementById('UjjainDarshan-div').style.color = "black";
  document.getElementById('Omkareshwar-div').style.backgroundColor = "white";
  document.getElementById('Omkareshwar-div').style.color = "black";
  document.getElementById('MaaBaglamukhi-div').style.backgroundColor = "white";
  document.getElementById('MaaBaglamukhi-div').style.color = "black";
  document.getElementById('TaxiServices-div').style.backgroundColor =  "#FF5F1F";
  document.getElementById('TaxiServices-div').style.color = "white";
  document.getElementById('AirportRides-div').style.backgroundColor = "white";
  document.getElementById('AirportRides-div').style.color = "black";
  document.getElementById('AboutUjjain-div').style.backgroundColor = "white";
  document.getElementById('AboutUjjain-div').style.color = "black";
  document.getElementById('shopping-div').style.backgroundColor = "white";
  document.getElementById('shopping-div').style.color = "black";






  document.getElementById('Home_main').style.display = "none";
  document.getElementById('profile_view_main').style.display = "none";
  document.getElementById('HotelBooking_main').style.display = "none";
  document.getElementById('Puja_booking_main').style.display = "none";
  document.getElementById('UjjainDarshan_main').style.display = "none";
  document.getElementById('Omkareshwar_main').style.display = "none";
  document.getElementById('MaaBaglamukhi_main').style.display = "none";
 document.getElementById('TaxiServices_main').style.display = "block";
 document.getElementById('AirportRides_main').style.display = "none";
 document.getElementById('AboutUjjain_main').style.display = "none";
 document.getElementById('shopping_main').style.display = "none";
 //document.getElementById('profile-update-container').style.display = "none";




 document.getElementById('taxi_popup').style.display = "block";
 document.getElementById('taxi_popupdiv').style.display = "block";


 // Initialize Swiper ______ Taxi UP

 var swiper = new Swiper("#swiper_taxi_up", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
 //  pagination: {
 //    el: ".swiper-pagination",
 //    type: "fraction",
 //  },
  navigation: {
    nextEl: "#swiper-button-next_taxi_up",
    prevEl: "#swiper-button-prev_taxi_up",
  },
});

var appendNumber = 4;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document
  .querySelector(".append-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  });
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });


  /// error will get 

}
function swiperBtn_taxi_up(){
  document.getElementById('swiper-button-prev_taxi_up').style.display = "block";
}

// Taxi  cards functions ....... 


function Taxifirstcard(){
  document.getElementById('taxi_popup').style.display = "block";
  document.getElementById('taxi_popupdiv').style.display = "block";
  document.getElementById('taxi_confirmation_popup_div').style.display = "none";

}

function Taxibooking_closePopUp(){
  document.getElementById('taxi_popup').style.display = "none";

}
function taxibook_popup_btn() {

  document.getElementById('taxi_popup').style.display = "block";
  document.getElementById('taxi_popupdiv').style.display = "none";
  document.getElementById('taxi_confirmation_popup_div').style.display = "block";
}
function Taxiconfirm_closePopUp(){
   
  document.getElementById('taxi_popupdiv').style.display = "none";
  Taxibooking_closePopUp()
}











//                                       Airport Rides 

function AirportRides(){

  console.log('Airport Rides Page');
  document.getElementById('viewprofile').style.display = "block";

  const formE2 = document.querySelector('#airport');
 
  formE2.addEventListener('submit', event => {
      event.preventDefault();
 
      let formData1 = new FormData(formE2);
      var airportpickup = document.getElementById("airport-pickup").value;
      var airportdrop = document.getElementById("airport-drop").value;
      console.log("Ujjian Airport" + ' ' + airportpickup);
      console.log("drop point" + ' ' + airportdrop);
      let data1;
      data1 = Object.fromEntries(formData1);
      console.log(data1);
      var user_id = localStorage.getItem('User-ID');
      fetch(`${PrivateIP}/airportRides/save/${user_id}`,
          {
              method: "POST",
              body: JSON.stringify({
 
                  "from": airportpickup,
                  "to": airportdrop,
                  "totalprice" : 100
              }),
              headers: {
                  "Content-type": "application/json; charset=UTF-8"
              },
          })
          .then((response) => response.json())
          .then(data1 => {
              console.log(data1);
            })
          })



  document.getElementById('sidebar').style.height = "715px";
  document.getElementById('home-div').style.backgroundColor = "white";
  document.getElementById('home-div').style.color = "black";
  document.getElementById('hotel-div').style.backgroundColor = "white";
  document.getElementById('hotel-div').style.color = "black";
  document.getElementById('pujabooking-div').style.backgroundColor = "white";
  document.getElementById('pujabooking-div').style.color = "black";
  document.getElementById('UjjainDarshan-div').style.backgroundColor = "white";
  document.getElementById('UjjainDarshan-div').style.color = "black";
  document.getElementById('Omkareshwar-div').style.backgroundColor = "white";
  document.getElementById('Omkareshwar-div').style.color = "black";
  document.getElementById('MaaBaglamukhi-div').style.backgroundColor = "white";
  document.getElementById('MaaBaglamukhi-div').style.color = "black";
  document.getElementById('TaxiServices-div').style.backgroundColor =  "white";
  document.getElementById('TaxiServices-div').style.color = "black";
  document.getElementById('AirportRides-div').style.backgroundColor = "#FF5F1F";
  document.getElementById('AirportRides-div').style.color = "white";
  document.getElementById('AboutUjjain-div').style.backgroundColor = "white";
  document.getElementById('AboutUjjain-div').style.color = "black";
  document.getElementById('shopping-div').style.backgroundColor = "white";
  document.getElementById('shopping-div').style.color = "black";




  document.getElementById('Home_main').style.display = "none";
  document.getElementById('profile_view_main').style.display = "none";
  document.getElementById('HotelBooking_main').style.display = "none";
  document.getElementById('Puja_booking_main').style.display = "none";
  document.getElementById('UjjainDarshan_main').style.display = "none";
  document.getElementById('Omkareshwar_main').style.display = "none";
  document.getElementById('MaaBaglamukhi_main').style.display = "none";
  document.getElementById('TaxiServices_main').style.display = "none";
  document.getElementById('AirportRides_main').style.display = "block";
  document.getElementById('AboutUjjain_main').style.display = "none";
  document.getElementById('shopping_main').style.display = "none";
  //document.getElementById('profile-update-container').style.display = "none";



  document.getElementById('Airport_popup').style.display = "block";
  document.getElementById('Airport_popupdiv').style.display = "block";


  // Initialize Swiper ______ Maa Baglamukhi Tour UP

var swiper = new Swiper("#swiper_airport_up", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
 //  pagination: {
 //    el: ".swiper-pagination",
 //    type: "fraction",
 //  },
  navigation: {
    nextEl: "#swiper-button-next_airport_up",
    prevEl: "#swiper-button-prev_airport_up",
  },
});

var appendNumber = 4;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });
document
  .querySelector(".append-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  });
document
  .querySelector(".append-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  });

}
function swiperBtn_airport_up(){
  document.getElementById('swiper-button-prev_airport_up').style.display = "block";
}

///////////////

function Airportfirstcard(){

  document.getElementById('Airport_popup').style.display = "block";
  document.getElementById('Airport_popupdiv').style.display = "block";
  document.getElementById('Airport_confirmation_popup_div').style.display = "none";

}

function Airportbooking_closePopUp(){
  document.getElementById('Airport_popup').style.display = "none";

}
function Airportbook_popup_btn() {

  document.getElementById('Airport_popup').style.display = "block";
  document.getElementById('Airport_popupdiv').style.display = "none";
  document.getElementById('Airport_confirmation_popup_div').style.display = "block";
}
function Airportconfirm_closePopUp(){
   
  document.getElementById('Airport_popupdiv').style.display = "none";
  Airportbooking_closePopUp()
}


////////////////////////////////////////////////////////////////////// 

// Shopping 

function Shopping(){
  document.getElementById('viewprofile').style.display = "block";



  document.getElementById('home-div').style.backgroundColor = "white";
  document.getElementById('home-div').style.color = "black";
  document.getElementById('hotel-div').style.backgroundColor = "white";
  document.getElementById('hotel-div').style.color = "black";
  document.getElementById('pujabooking-div').style.backgroundColor = "white";
  document.getElementById('pujabooking-div').style.color = "black";
  document.getElementById('UjjainDarshan-div').style.backgroundColor = "white";
  document.getElementById('UjjainDarshan-div').style.color = "black";
  document.getElementById('Omkareshwar-div').style.backgroundColor = "white";
  document.getElementById('Omkareshwar-div').style.color = "black";
  document.getElementById('MaaBaglamukhi-div').style.backgroundColor = "white";
  document.getElementById('MaaBaglamukhi-div').style.color = "black";
  document.getElementById('TaxiServices-div').style.backgroundColor =  "white";
  document.getElementById('TaxiServices-div').style.color = "black";
  document.getElementById('AirportRides-div').style.backgroundColor =  "white";
  document.getElementById('AirportRides-div').style.color = "black";
  document.getElementById('shopping-div').style.backgroundColor = "#FF5F1F";
  document.getElementById('shopping-div').style.color = "white";
  document.getElementById('AboutUjjain-div').style.backgroundColor = "white";
  document.getElementById('AboutUjjain-div').style.color = "black";


  document.getElementById('AboutUjjain_main').style.display = "none";
  document.getElementById('Home_main').style.display = "none";
  document.getElementById('profile_view_main').style.display = "none";
  document.getElementById('HotelBooking_main').style.display = "none";
  document.getElementById('Puja_booking_main').style.display = "none";
  document.getElementById('UjjainDarshan_main').style.display = "none";
  document.getElementById('Omkareshwar_main').style.display = "none";
  document.getElementById('MaaBaglamukhi_main').style.display = "none";
  document.getElementById('TaxiServices_main').style.display = "none";
  document.getElementById('AirportRides_main').style.display = "none";
  document.getElementById('shopping_main').style.display = "block";
 // //document.getElementById('profile-update-container').style.display = "none";




  
  

}



 
function shopping_btn(){
 


document.getElementsByClassName('shopbtn')[0].addEventListener('click',
  function(){

    //document.getElementById('profile-update-container').style.display = "none";
    document.getElementById('shopping_main').style.display = "block";
    document.getElementById('shopping_popup').style.display = "block";
    document.getElementById('shopPackageBooking_popupdiv').style.display = "block";
    document.getElementById('shoppingConfirmation_popup_div').style.display = "none";  

    let shopName = document.getElementsByClassName('shopping_name')[0].innerHTML;

    fetch(`${PrivateIP}/shopping/getProductByName/${shopName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.data[0]);  
      sessionStorage.setItem('shoppingId', data.data[0].id);
    document.getElementById('shopping_name_inpoup').innerHTML = data.data[0].name;
    document.getElementsByClassName('shopping_popup_price')[0].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[1].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[2].innerHTML = data.data[0].price;

    let shop_popup_img = document.getElementsByClassName('shopimg')[0].src;
    
    document.getElementById('shopping_poup_img').src = shop_popup_img ;
    })

  });

  document.getElementsByClassName('shopbtn')[1].addEventListener('click',
  function(){

   
    document.getElementById('shopping_main').style.display = "block";
    document.getElementById('shopping_popup').style.display = "block";
    document.getElementById('shopPackageBooking_popupdiv').style.display = "block";
    document.getElementById('shoppingConfirmation_popup_div').style.display = "none";  


    let shopName = document.getElementsByClassName('shopping_name')[1].innerHTML;

    fetch(`${PrivateIP}/shopping/getProductByName/${shopName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.data[0]);  
      sessionStorage.setItem('shoppingId', data.data[0].id);
    document.getElementById('shopping_name_inpoup').innerHTML = data.data[0].name;
    document.getElementsByClassName('shopping_popup_price')[0].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[1].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[2].innerHTML = data.data[0].price;

    let shop_popup_img = document.getElementsByClassName('shopimg')[1].src;
    
    document.getElementById('shopping_poup_img').src = shop_popup_img ;
    })

  });

  document.getElementsByClassName('shopbtn')[2].addEventListener('click',
  function(){

   
    document.getElementById('shopping_main').style.display = "block";
    document.getElementById('shopping_popup').style.display = "block";
    document.getElementById('shopPackageBooking_popupdiv').style.display = "block";
    document.getElementById('shoppingConfirmation_popup_div').style.display = "none";  


    let shopName = document.getElementsByClassName('shopping_name')[2].innerHTML;

    fetch(`${PrivateIP}/shopping/getProductByName/${shopName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.data[0]);  
      sessionStorage.setItem('shoppingId', data.data[0].id);
    document.getElementById('shopping_name_inpoup').innerHTML = data.data[0].name;
    document.getElementsByClassName('shopping_popup_price')[0].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[1].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[2].innerHTML = data.data[0].price;

    let shop_popup_img = document.getElementsByClassName('shopimg')[2].src;
    
    document.getElementById('shopping_poup_img').src = shop_popup_img ;
    })

  });

  document.getElementsByClassName('shopbtn')[3].addEventListener('click',
  function(){

   
    document.getElementById('shopping_main').style.display = "block";
    document.getElementById('shopping_popup').style.display = "block";
    document.getElementById('shopPackageBooking_popupdiv').style.display = "block";
    document.getElementById('shoppingConfirmation_popup_div').style.display = "none";  


    let shopName = document.getElementsByClassName('shopping_name')[3].innerHTML;

    fetch(`${PrivateIP}/shopping/getProductByName/${shopName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.data[0]);  
      sessionStorage.setItem('shoppingId', data.data[0].id);
    document.getElementById('shopping_name_inpoup').innerHTML = data.data[0].name;
    document.getElementsByClassName('shopping_popup_price')[0].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[1].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[2].innerHTML = data.data[0].price;

    let shop_popup_img = document.getElementsByClassName('shopimg')[3].src;
    
    document.getElementById('shopping_poup_img').src = shop_popup_img ;
    })

  });

  document.getElementsByClassName('shopbtn')[4].addEventListener('click',
  function(){

    document.getElementById('shopping_main').style.display = "block";
    document.getElementById('shopping_popup').style.display = "block";
    document.getElementById('shopPackageBooking_popupdiv').style.display = "block";
    document.getElementById('shoppingConfirmation_popup_div').style.display = "none";  


    let shopName = document.getElementsByClassName('shopping_name')[4].innerHTML;

    fetch(`${PrivateIP}/shopping/getProductByName/${shopName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.data[0]);  
      sessionStorage.setItem('shoppingId', data.data[0].id);
    document.getElementById('shopping_name_inpoup').innerHTML = data.data[0].name;
    document.getElementsByClassName('shopping_popup_price')[0].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[1].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[2].innerHTML = data.data[0].price;

    let shop_popup_img = document.getElementsByClassName('shopimg')[4].src;
    
    document.getElementById('shopping_poup_img').src = shop_popup_img ;
    })

  });

  document.getElementsByClassName('shopbtn')[5].addEventListener('click',
  function(){

   
    document.getElementById('shopping_main').style.display = "block";
    document.getElementById('shopping_popup').style.display = "block";
    document.getElementById('shopPackageBooking_popupdiv').style.display = "block";
    document.getElementById('shoppingConfirmation_popup_div').style.display = "none";  


    let shopName = document.getElementsByClassName('shopping_name')[5].innerHTML;

    fetch(`${PrivateIP}/shopping/getProductByName/${shopName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.data[0]);  
      sessionStorage.setItem('shoppingId', data.data[0].id);
    document.getElementById('shopping_name_inpoup').innerHTML = data.data[0].name;
    document.getElementsByClassName('shopping_popup_price')[0].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[1].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[2].innerHTML = data.data[0].price;

    let shop_popup_img = document.getElementsByClassName('shopimg')[5].src;
    
    document.getElementById('shopping_poup_img').src = shop_popup_img ;
    })

  });

  document.getElementsByClassName('shopbtn')[6].addEventListener('click',
  function(){

   
    document.getElementById('shopping_main').style.display = "block";
    document.getElementById('shopping_popup').style.display = "block";
    document.getElementById('shopPackageBooking_popupdiv').style.display = "block";
    document.getElementById('shoppingConfirmation_popup_div').style.display = "none";  

    let shopName = document.getElementsByClassName('shopping_name')[6].innerHTML;

    fetch(`${PrivateIP}/shopping/getProductByName/${shopName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.data[0]);  
      sessionStorage.setItem('shoppingId', data.data[0].id);
    document.getElementById('shopping_name_inpoup').innerHTML = data.data[0].name;
    document.getElementsByClassName('shopping_popup_price')[0].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[1].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[2].innerHTML = data.data[0].price;

    let shop_popup_img = document.getElementsByClassName('shopimg')[6].src;
    
    document.getElementById('shopping_poup_img').src = shop_popup_img ;
    })

  });

  document.getElementsByClassName('shopbtn')[7].addEventListener('click',
  function(){

   
    document.getElementById('shopping_main').style.display = "block";
    document.getElementById('shopping_popup').style.display = "block";
    document.getElementById('shopPackageBooking_popupdiv').style.display = "block";
    document.getElementById('shoppingConfirmation_popup_div').style.display = "none";  

    let shopName = document.getElementsByClassName('shopping_name')[7].innerHTML;

    fetch(`${PrivateIP}/shopping/getProductByName/${shopName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.data[0]);  
      sessionStorage.setItem('shoppingId', data.data[0].id);
    document.getElementById('shopping_name_inpoup').innerHTML = data.data[0].name;
    document.getElementsByClassName('shopping_popup_price')[0].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[1].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[2].innerHTML = data.data[0].price;

    let shop_popup_img = document.getElementsByClassName('shopimg')[7].src;
    
    document.getElementById('shopping_poup_img').src = shop_popup_img ;
    })

  });
  

  document.getElementsByClassName('shopbtn')[8].addEventListener('click',
  function(){

   
    document.getElementById('shopping_main').style.display = "block";
    document.getElementById('shopping_popup').style.display = "block";
    document.getElementById('shopPackageBooking_popupdiv').style.display = "block";
    document.getElementById('shoppingConfirmation_popup_div').style.display = "none";  

    let shopName = document.getElementsByClassName('shopping_name')[8].innerHTML;

    fetch(`${PrivateIP}/shopping/getProductByName/${shopName}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.data[0]);  
      sessionStorage.setItem('shoppingId', data.data[0].id);
    document.getElementById('shopping_name_inpoup').innerHTML = data.data[0].name;
    document.getElementsByClassName('shopping_popup_price')[0].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[1].innerHTML = data.data[0].price;
    document.getElementsByClassName('shopping_popup_price')[2].innerHTML = data.data[0].price;

    let shop_popup_img = document.getElementsByClassName('shopimg')[8].src;
    
    document.getElementById('shopping_poup_img').src = shop_popup_img ;
    })

  });





 
  // -------shopping items couting --------
  let remove = document.getElementById('minus01');
  let add = document.getElementById('plus01');
   
  let int = document.getElementById('number');
  let integer = 0;
   
  add.addEventListener('click',function() {
  
    integer++;
    int.innerHTML = integer;
  
   
  });
   
  remove.addEventListener('click',function() {
    if(integer > 1){
      integer--;
    }
    int.innerHTML = integer;
   
  });
  // --------------------------------------------------
  
  








// document.getElementsByClassName('shopbtn')[1].addEventListener('click',
// function(){
//   sessionStorage.setItem('shoppingId', 12);
//   document.getElementById('profile-update-container').style.display = "none";
//   document.getElementById('shopping_popup').style.display = "block";
//   document.getElementById('shopping_main').style.display = "block";
//   document.getElementById('shoppingConfirmation_popup_div').style.display = "none";  

//   fetch('${PrivateIP}/shopping/getProductById/12')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.data);  
//   document.getElementById('shopping_name_inpoup').innerHTML = data.data.name;
//   document.getElementsByClassName('shopping_popup_price')[0].innerHTML = data.data.price;
//   document.getElementsByClassName('shopping_popup_price')[1].innerHTML = data.data.price;
//   document.getElementsByClassName('shopping_popup_price')[2].innerHTML = data.data.price;

  
//   document.getElementById('shopping_poup_img').src = "${PrivateIP}/shopping/displayProductImage?id=12"
//   })

// });


// document.getElementsByClassName('shopbtn')[2].addEventListener('click',
//   function(){
//     sessionStorage.setItem('shoppingId', 13);
//     document.getElementById('profile-update-container').style.display = "none";
//     document.getElementById('shopping_popup').style.display = "block";
//     document.getElementById('shopping_main').style.display = "block";
//     document.getElementById('shoppingConfirmation_popup_div').style.display = "none";  

//     fetch('${PrivateIP}/shopping/getProductById/13')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data.data);  
//     document.getElementById('shopping_name_inpoup').innerHTML = data.data.name;
//     document.getElementsByClassName('shopping_popup_price')[0].innerHTML = data.data.price;
//     document.getElementsByClassName('shopping_popup_price')[1].innerHTML = data.data.price;
//     document.getElementsByClassName('shopping_popup_price')[2].innerHTML = data.data.price;

    
//     document.getElementById('shopping_poup_img').src = "${PrivateIP}/shopping/displayProductImage?id=13"
//     })

//   });

//   document.getElementsByClassName('shopbtn')[3].addEventListener('click',
//   function(){
//     sessionStorage.setItem('shoppingId', 14);
//     document.getElementById('profile-update-container').style.display = "none";
//     document.getElementById('shopping_popup').style.display = "block";
//     document.getElementById('shopping_main').style.display = "block";
//     document.getElementById('shoppingConfirmation_popup_div').style.display = "none";  

//     fetch('${PrivateIP}/shopping/getProductById/14')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data.data);  
//     document.getElementById('shopping_name_inpoup').innerHTML = data.data.name;
//     document.getElementsByClassName('shopping_popup_price')[0].innerHTML = data.data.price;
//     document.getElementsByClassName('shopping_popup_price')[1].innerHTML = data.data.price;
//     document.getElementsByClassName('shopping_popup_price')[2].innerHTML = data.data.price;

    
//     document.getElementById('shopping_poup_img').src = "${PrivateIP}/shopping/displayProductImage?id=14"
//     })

//   });

//   document.getElementsByClassName('shopbtn')[4].addEventListener('click',
//   function(){
//     sessionStorage.setItem('shoppingId', 15);
//     document.getElementById('profile-update-container').style.display = "none";
//     document.getElementById('shopping_popup').style.display = "block";
//     document.getElementById('shopping_main').style.display = "block";
//     document.getElementById('shoppingConfirmation_popup_div').style.display = "none";  

//     fetch('${PrivateIP}/shopping/getProductById/15')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data.data);  
//     document.getElementById('shopping_name_inpoup').innerHTML = data.data.name;
//     document.getElementsByClassName('shopping_popup_price')[0].innerHTML = data.data.price;
//     document.getElementsByClassName('shopping_popup_price')[1].innerHTML = data.data.price;
//     document.getElementsByClassName('shopping_popup_price')[2].innerHTML = data.data.price;

    
//     document.getElementById('shopping_poup_img').src = "${PrivateIP}/shopping/displayProductImage?id=15"
//     })

//   });













}



function shopconfirmation(){
 
  
 // document.getElementById('profile-update-container').style.display = "none";
  document.getElementById('shopping_popup').style.display = "block";
  document.getElementById('shopPackageBooking_popupdiv').style.display = "none";
  document.getElementById('shopping_main').style.display = "block";
  document.getElementById('shoppingConfirmation_popup_div').style.display = "block";



  var shoppingID = sessionStorage.getItem('shoppingId');
  var user_id = localStorage.getItem('User-ID');
 
   var formdata = new FormData();
   formdata.append("userId", user_id);
   formdata.append("shoppingId", shoppingID);
   formdata.append("items", "1");
   
   var requestOptions = {
     method: 'POST',
     body: formdata,
     redirect: 'follow'
   };
   
   fetch(`${PrivateIP}/admin/api/shop/book`, requestOptions)
     .then(response => response.json())
     .then(result => {console.log(result)  
    
        // document.getElementById('omkarConfirmation_popupdiv').style.display = "block";
        // document.getElementById('omkar_popupdiv').style.display = "none";

    })
     .catch(error => console.log('error', error));
 
 
}

function shoppingBooking_closePopUp() {
 // document.getElementById('profile-update-container').style.display = "none";
  document.getElementById('shopping_popup').style.display = "none";
  document.getElementById('shopping_main').style.display = "block";
  document.getElementById('shoppingConfirmation_popup_div').style.display = "none";

}

function ShoppingConfirmation_closePopUp() {
 // document.getElementById('profile-update-container').style.display = "none";
  document.getElementById('shopping_popup').style.display = "none";
  document.getElementById('shopping_main').style.display = "block";
  document.getElementById('shoppingConfirmation_popup_div').style.display = "none";
 
 
 }



//                          About Ujjain functions ....    

function AboutUjjain(){

  console.log(' About ujjain Page');
  document.getElementById('viewprofile').style.display = "block";

  // document.getElementById('sidebar').style.height = "1640px";
  document.getElementById('home-div').style.backgroundColor = "white";
  document.getElementById('home-div').style.color = "black";
  document.getElementById('hotel-div').style.backgroundColor = "white";
  document.getElementById('hotel-div').style.color = "black";
  document.getElementById('pujabooking-div').style.backgroundColor = "white";
  document.getElementById('pujabooking-div').style.color = "black";
  document.getElementById('UjjainDarshan-div').style.backgroundColor = "white";
  document.getElementById('UjjainDarshan-div').style.color = "black";
  document.getElementById('Omkareshwar-div').style.backgroundColor = "white";
  document.getElementById('Omkareshwar-div').style.color = "black";
  document.getElementById('MaaBaglamukhi-div').style.backgroundColor = "white";
  document.getElementById('MaaBaglamukhi-div').style.color = "black";
  document.getElementById('TaxiServices-div').style.backgroundColor =  "white";
  document.getElementById('TaxiServices-div').style.color = "black";
  document.getElementById('AirportRides-div').style.backgroundColor =  "white";
  document.getElementById('AirportRides-div').style.color = "black";
  document.getElementById('shopping-div').style.backgroundColor = "white";
  document.getElementById('shopping-div').style.color = "black";
  document.getElementById('AboutUjjain-div').style.backgroundColor = "#FF5F1F";
  document.getElementById('AboutUjjain-div').style.color = "white";

  document.getElementById('AboutUjjain_main').style.display = "block";
  document.getElementById('Home_main').style.display = "none";
  document.getElementById('profile_view_main').style.display = "none";
  document.getElementById('HotelBooking_main').style.display = "none";
  document.getElementById('Puja_booking_main').style.display = "none";
  document.getElementById('UjjainDarshan_main').style.display = "none";
  document.getElementById('Omkareshwar_main').style.display = "none";
  document.getElementById('MaaBaglamukhi_main').style.display = "none";
  document.getElementById('TaxiServices_main').style.display = "none";
  document.getElementById('AirportRides_main').style.display = "none";
  document.getElementById('shopping_main').style.display = "none";
  //document.getElementById('profile-update-container').style.display = "none";



}




function swiperBtn_shopping_down(){   
   document.getElementById('swiper-button-prev_shopping_down').style.display = "block"; 
}

function swiperBtn_gallery_down(){   
  document.getElementById('swiper-button-prev_gallery_down').style.display = "block"; 
}


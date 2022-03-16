import React from "react"
import "./Videocarosal.css"

function Videocarosal(){

return (

<>


<div class="emptydiv"></div>


  <div id="carouselExampleIndicators" class="carousel slide slide_custom" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <video src="https://tesla-cdn.thron.com/delivery/public/video/tesla/a45a269f-1acf-4022-aa69-0d25518350e2/bvlatuR/WEBHD/MS-Interior-Carousel-5-Gaming-Desktop" class="d-block  video" alt="..." loop autoplay />
      </div>
      <div class="carousel-item">
        <video src="https://tesla-cdn.thron.com/delivery/public/video/tesla/537cfaca-9a4a-4370-b122-8b46d37762c1/bvlatuR/WEBHD/MS-Interior-Carousel-1-Cinematic-Display-Desktop
        " class="d-block w-100 video" alt="..." loop autoplay  />     
           </div>
      <div class="carousel-item">



        <video src="https://tesla-cdn.thron.com/delivery/public/video/tesla/e921983e-9d09-4708-ac81-b12ff36fe0e6/bvlatuR/WEBHD/MS-Interior-Carousel-3-Environment-Mobile
        " class="d-block w-100 video" alt="..." loop autoplay />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>










</>


)




}

export default Videocarosal;
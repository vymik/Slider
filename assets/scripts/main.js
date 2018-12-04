"use strict";

let nextSlider = document.querySelector("#right-angle");
let prevSlider = document.querySelector("#left-angle");
let slider = document.querySelector("#slider");

let imgArray = [
    "url('https://pbs.twimg.com/media/DMDIKcyWsAEsKDj.jpg')",
    "url('https://www.hdwallpaper.co/wp-content/uploads/2018/11/Sundown-Landscape-Minimalist-4k-wallpaper.jpg')",
    "url('https://store-images.s-microsoft.com/image/apps.56149.13510798887023509.52cb7b9d-27cf-417d-b33e-e4e758263928.1129934f-d053-41a1-935a-20913a56ea70?mode=scale&q=90&h=1080&w=1920')",
    "url('https://stmed.net/sites/default/files/car-wallpapers-31955-5765538.jpg')"
    ];

let currentIndex = 0;
    
nextSlider.addEventListener("click", () => {
    if(currentIndex == imgArray.length -1){
        currentIndex= -1;
    }
    slider.style.backgroundImage = imgArray[currentIndex +1];
    if(currentIndex < imgArray.length -1){
    currentIndex++;
    }

});
prevSlider.addEventListener("click", () => {
    if(currentIndex == 0){
        currentIndex= imgArray.length;
    }
    slider.style.backgroundImage = imgArray[currentIndex -1];
    if(currentIndex>0){
        currentIndex--;
    }
});


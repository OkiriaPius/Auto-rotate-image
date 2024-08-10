const imageContainerEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");

const nextEl = document.getElementById("next");

 let x = 0;

 //to remove the interferance with the timeout with the buttons so that we can clear it later 

 let timer;

 //for the button to go to the previous item

prevEl.addEventListener("click",()=>{

    clearTimeout(timer);

    x = x + 45;

    updateGallery();

});



//for the button to go to the next item

nextEl.addEventListener("click",()=>{

    clearTimeout(timer);

    x = x - 45;

    updateGallery();

});



// this function will be for changing the style

function updateGallery() {

  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  //setting so that the items keep rotating

  timer = setTimeout(()=>{

    x = x - 45;

  updateGallery();

  },5000)

}



updateGallery();

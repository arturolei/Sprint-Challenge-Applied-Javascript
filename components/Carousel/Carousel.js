class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement;
        this.images = this.carouselElement.querySelectorAll('img');
        //Default is last image
        this.imgIndex = 0;
        this.images[this.imgIndex].style.display = "block";   
        

        this.rightButton = this.carouselElement.querySelector(".right-button");
        this.leftButton = this.carouselElement.querySelector(".left-button");

        this.leftButton.addEventListener('click', () => this.moveLeft());
        this.rightButton.addEventListener('click', () => this.moveRight());
    }
    moveRight(){
        if(this.imgIndex < this.images.length-1){
            this.images[this.imgIndex].style.display = "none";
            this.imgIndex++;
            this.images[this.imgIndex].style.display = "block";
        } else if (this.imgIndex === this.images.length-1) {
            this.images[this.imgIndex].style.display = "none";
            this.imgIndex = 0;
            this.images[this.imgIndex].style.display = "block";
        
        
        } else if(this.imgIndex === 0){
            this.images[this.images.length-1].style.display = "none";
            this.images[this.imgIndex].style.display = "block";
            
        }
    }
    moveLeft(){
        if(this.imgIndex > 0){
            this.images[this.imgIndex].style.display = "none";
            this.imgIndex--;
            this.images[this.imgIndex].style.display = "block";
        } else if (this.imgIndex === 0){
            this.images[this.imgIndex].style.display = "none";
            this.imgIndex = this.images.length-1;
            console.log("End of Watch");
            this.images[this.imgIndex].style.display = "block";
        }
    }
}

let carousel = new Carousel(document.querySelector(".carousel"));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
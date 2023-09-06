


        

document.addEventListener('visibilitychange',
    function() {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio || ISHIMWE Jean Gloire";
        } else {
            document.title = "🙏 Come Back To Portfolio 😢";
        }
    })


// const navbarMenu =document.querySelector('.menu');
const menuLinks =document.querySelectorAll('.menu_link');

menuLinks.forEach(menuLink=>{
    menuLink.addEventListener('click',()=>{
        document.querySelector('.active-link')?.classList.remove('active-link');
        menuLink.classList.add('active-link');
    })
})
// Gallery Filter Item

const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function() {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }

            if (target == "all") {
                items[k].style.display = "block";
            }
        }
    })
}


// Water Reflects

$('.ripples').ripples({
    resolution:512,
    dropRadius:20,
    perturbance:0.03,
})
// $('#ripples').ripples({
//     resolution:512,
//     dropRadius:20,
//     perturbance:0.04,
// })


$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script

    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });

    // toggle menu/navbar script

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});


// typed js styling

// var typed = new Typed(".typing", {
//     strings: ["Web Design", "Web Developer", "Blogger", "Freelancer"],
//     typedSpeed: 100,
//     backSpeed: 50,
//     loop: true,
//     backDelay:2000
// });


// Owl Carousel styling

$(document).ready(function () {

    //REVIEW SLIDER

    $('#review-slider').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        dots: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 0,
            },
            768: {
                items: 2,
            },
            1140: {
                items: 2,
                center: true,
                dots: true,
                margin:10,
                
            }
        }
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        nav: false,
        dots: true,
        items: 1,
        smartSpeed:1000,
        autoHeight:true,
        margin:10,
      
    })
});

setTimeout(function(){
    $('.loadinga').fadeToggle();
},1700)


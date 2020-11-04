// Pentru a implementa efectul de carousel a fost folosita biblioteca owl-carousel.
// Informatii: https://owlcarousel2.github.io/OwlCarousel2/
// Pentru ca aceasta sa functioneze, este nevoie si de jQuery.

// configurarea caruselului
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }   
    }
})

document.addEventListener('DOMContentLoaded', ()=>{
    form = document.inputForm;
    btAdd = form.btAdd;
    fileInput = form.fileInput;
    mainImage = document.querySelector(".big-image");
    thumnails = document.querySelectorAll(".frame img");
    noMainImage = true; 

    btAdd.addEventListener('click', (e)=>{
        // pentru fiecare fisier selectat este creat cate un thumnbnail. Acesta va 
        // fi inserat in carousel.
        files = fileInput.files;
        for(let i = 0; i < files.length; i++)
            insertThumbnail(files[i]);
        
        // imaginea principala este setata ca fiind prima imagine din carousel (daca este necesar)
        if(noMainImage){
            mainImage.src = URL.createObjectURL(files[0]);
            noMainImage = false;
        }

        // resetarea formularului pentru a curata inputul de tip file.
        form.reset();
    })

    function insertThumbnail(file){
        // este utilizata arhitectura necesara pentru a introduce o imagine
        // in carouselul din cadrul bibliotecii owl-carousel.
        item = document.createElement('div');
        item.classList = "item";
        frame = document.createElement('div');
        frame.classList = "frame";
        img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.addEventListener('click', (e)=> { mainImage.src = e.target.src; });
        frame.appendChild(img);
        item.appendChild(frame);

        // comanda pentru introducerea unui element nou in carousel
        $('#carousel').trigger('add.owl.carousel', [item])
        .trigger('refresh.owl.carousel');
    }
});
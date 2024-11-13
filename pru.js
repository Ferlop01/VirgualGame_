const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

const paginas = [
    'Sub-Paginas/Zenless Zone Zero/index.html',
    'Sub-Paginas/Resident Evil 4 REmake/index.html',
    'Sub-Paginas/Persona 3 Reload/index.html',
    'Sub-Paginas/Halo 3/index.html',
    'Sub-Paginas/Forza Horizon 5/index.html',
    'Sub-Paginas/Valorant/index.html',
    'Sub-Paginas/Dark Souls/index.html',
    'Sub-Paginas/Fortnite/index.html',
    'Sub-Paginas/Dead Space/index.html',
    'Sub-Paginas/Outlast/index.html',
    'Sub-Paginas/Bioshock/index.html',
    'Sub-Paginas/Tomb Raider/index.html',
];

function redirigirPaginaAleatoria() {
    const paginaAleatoria = paginas[Math.floor(Math.random() * paginas.length)];
    window.location.href = paginaAleatoria;  
}


document.getElementById('nuevoLanzamientoBtn').addEventListener('click', function(e) {
    e.preventDefault();  
    redirigirPaginaAleatoria();  
});


const popup = document.getElementById('popup');
const popupVisita = document.getElementById('popupVisita');

if (localStorage.getItem('visitas')) {
  let visitas = parseInt(localStorage.getItem('visitas')) + 1;
  localStorage.setItem('visitas', visitas);
} else {
  localStorage.setItem('visitas', 1);
}

popupVisita.textContent = localStorage.getItem('visitas');

if (!localStorage.getItem('popupShown')) {
  window.onload = () => {
    console.log('Mostrar popup');
    popup.classList.add('show');

    localStorage.setItem('popupShown', 'true');

    setTimeout(() => {
      console.log('Ocultar popup');
      popup.classList.remove('show');
    }, 3000);
  };
}

// Obtén todos los botones "Añadir al carrito"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = cart.findIndex(p => p.name === product.name);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity++;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));


    window.location.href = "Carrito/carrone.html";  
}


addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productBox = event.target.closest('.portafolio-box'); 
        const product = {
            id: productBox.dataset.id,
            name: productBox.dataset.name,
            price: parseFloat(productBox.dataset.price), 
            image: productBox.querySelector('img').src, 
        };
        
        addToCart(product);
    });
});

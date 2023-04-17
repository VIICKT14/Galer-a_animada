window.addEventListener('scroll', function () {           // Event listener del scroll bar

    if (window.pageYOffset > 100) {                         // Comparamos si está mayer a 100 px

        document.querySelector('header').classList.add('bg-on-scale'); // Agregamos nuestra clase bg-on-scale al header 

    } else {                                               // Si no es mayor a 100 px le quitamos la clase bg-on scale      

        document.querySelector('header').classList.remove('bg-on-scale');

    }
});
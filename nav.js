const navSlide= () =>{
    const light= document.querySelector('.light');
    const nav= document.querySelector('.nav-links');

    light.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        light.classList.toggle('toggle');
    });
}


navSlide(); 
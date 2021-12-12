//intersection observer

const isIntersecting = (entry) => {
    return entry.isIntersecting; //true si esta dentro de la pantalla, falsa si es lo contrario
};

const loadImage = (entry) => {
    const container = entry.target //container (DIV)
    const imagen = container.querySelector("img");
    const url = imagen.dataset.src;

    //cargar la imagen
    imagen.src =url;

    loadedImages++;
    printLog();

    // debugger;

    //desregistra la imagen (unlisten)
    observer.unobserve(container);
};

// la funcion que recibe IntersectionObserver es la funcion que hacer por cada imagen
const observer = new IntersectionObserver((entries)=>{
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
});

export const registerImage = (imagen) =>{
    //intersection observer -> observer(imagen)
    observer.observe(imagen);

};
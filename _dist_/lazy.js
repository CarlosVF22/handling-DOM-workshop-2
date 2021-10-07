//intersection observer

const isIntersecting = (entry) => {
    return entry.isIntersecting; //true si esta dentro de la pantalla, falsa si es lo contrario
};

const action = (entry) => {
    const nodo = entry.target
    console.log("holis");

    //desregistra la imagen (unlisten)
    observer.unobserve(nodo);
};

// la funcion que recibe IntersectionObserver es la funcion que hacer por cada imagen
const observer = new IntersectionObserver((entries)=>{
    entries
        .filter(isIntersecting)
        .forEach(action)
});

export const registerImage = (imagen) =>{
    //intersection observer -> observer(imagen)
    observer.observe(imagen);

};
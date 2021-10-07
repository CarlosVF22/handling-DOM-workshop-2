import { registerImage } from "./lazy";

//crear 1 imagen
//agregar al contenedor imagen
const max = 123;
const min = 1;
const random =() => Math.floor(Math.random()*(max-min)) +min;

const createImageNode = () =>{
    //creando el contenedor de la imagen
    const container = document.createElement("div");
    container.className="p-4";

    // creando la etiqueta img, dandole diseños y colocando la imagen por uri
    const imagen =document.createElement('img');
    imagen.className ="mx-auto";
    imagen.width ="320";
    imagen.src=`https://randomfox.ca/images/${random()}.jpg`; //ToDo (por hacer)

    container.appendChild(imagen);

    return container;
};

const mountNode =document.getElementById("images");

const addButton = document.querySelector("button");

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};


addButton.addEventListener("click",addImage);


import h from "hyperscript";
import { registerImage } from "./lazy";

//crear 1 imagen
//agregar al contenedor imagen
const max = 123;
const min = 1;
const random =() => Math.floor(Math.random()*(max-min)) +min;

const createImageNode = () =>{
    //creando el contenedor de la imagen
    // const container = document.createElement("div");
    // container.className="p-4";

    // creando la etiqueta img, dandole diseños y colocando la imagen por uri
    // const imagen =document.createElement('img');
    // imagen.className ="mx-auto";
    // imagen.width ="320";
    // imagen.dataset.src=`https://randomfox.ca/images/${random()}.jpg`;

    //utilizando hyperscript
    const imagen = h('img.mx-auto',{ //paso atributos con los cual voy a inicializar
        width:"320",
        "data-src": `https://randomfox.ca/images/${random()}.jpg`,
    });

    //utilizando hyperscript
    const container = h('div.p-4.mt-3',imagen); //el segundo parametro indica el hijo que se va a agregar al container

    //creando imgWrapper
    const imgWrapper = document.createElement("div");
    imgWrapper.className = "bg-gray-300";
    // imgWrapper.style.minHeight ="100px";
    imgWrapper.style.display ="inline-block";

    // imgWrapper.appendChild(imagen)
    container.appendChild(imgWrapper);

    appendedImages++;
    printLog();

    return container;
};

const mountNode =document.getElementById("images");

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};

const removeImages =() =>{
    console.log(mountNode.childNodes);
    [...mountNode.childNodes].forEach(child =>{
        child.remove();
    })

};


addButton.addEventListener("click",addImage);
removeButton.addEventListener("click",removeImages);


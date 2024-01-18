import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [objectGif, setObjectGif] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getObjectGif = async () => {
        const newObjectGif = await getGifs(category);
        setObjectGif(newObjectGif);
        setisLoading(false);
    };

    useEffect(() => {
        getObjectGif();
        //tambien tiene una funcion cleanup es para hacer una limpieza por si tiene un observable
    }, []);
    //si dejo vacio el deps(el array), solo se ejecutara la primera vez que se despliegue el componente
    // si no se pone nada se ejcutara cada vez que se renderice

    return {
        objectGif,
        isLoading,
    }
};


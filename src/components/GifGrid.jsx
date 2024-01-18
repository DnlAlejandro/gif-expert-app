import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const {objectGif, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Loading...</h2>
            }
            <div className="card-grid">
                {objectGif.map(( image ) => (
                    <GifItem 
                        key= { image.id }
                        // title={image.title}
                        // url={image.url}
                        { ...image }
                    />
                ))}
            </div>
        </>
    );
};
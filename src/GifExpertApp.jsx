import { useState } from "react";
import { AddCategories, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["UFC"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategories
                //setCategories={setCategories}
                onNewCategory={onAddCategory}
                currentCategories={categories}
            />
            {categories.map((category) => (
                <GifGrid 
                    key={category} 
                    category={category}
                />
                    // <div key={category}>
                    //     <h3>{category}</h3>
                    //     <li>{category}</li>
                    // </div>
                )
            )}
        </>
    );
};

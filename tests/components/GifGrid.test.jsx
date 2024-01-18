import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe("test in GifGrid", () => {
    const category = "chuck norris"
    test("should show initially loading", () => {

        useFetchGifs.mockReturnValue({
            objectGif: [], 
            isLoading: true
        })

        render(<GifGrid category={category}/>)
        expect(screen.getByText('Loading...'))
        expect(screen.getByText(category))
        //screen.debug()

    });

    test("should show items when images are loaded from useFetchGifs", () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'titleGif',
                url: 'https://urlGif.jpg'
            },
            {
                id: 'ABCD',
                title: 'titleGif2',
                url: 'https://urlGif2.jpg'
            },
        ]
        useFetchGifs.mockReturnValue({
            objectGif: gifs, 
            isLoading: true
        })
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2)
        screen.debug();

    });
});

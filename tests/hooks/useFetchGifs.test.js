import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('test in useFetchGifs', () => { 
    test('should return initial state', () => {
        const { result } = renderHook( () => useFetchGifs('MMA'));
        const { objectGif, isLoading } = result.current;

        expect(objectGif.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('should return an image array and isLoading in false', async() => {
        const a = renderHook( () => useFetchGifs('MMA'));
        console.log(a)
        // await waitFor(
        //     () => expect(result.current.objectGif.length).toBeGreaterThan(0) 
        // );

        // const { objectGif, isLoading } = result.current;
        // expect(objectGif.length).toBeGreaterThan(0);
        // expect(isLoading).toBeFalsy();

    });  
});
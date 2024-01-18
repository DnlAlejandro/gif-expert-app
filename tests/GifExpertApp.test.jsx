import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('test in GifExpertApp', () => { 

    test("should be match with snapshot", () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
        console.log(container)
    });

    test('should exist title page', () => { 
        render(<GifExpertApp />);
        expect(screen.getByText('GifExpertApp')).toBeTruthy();
    })

    test('should return initial state', () => {
        const a = render(<GifExpertApp />);
    
    });
})
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("tests in <GifItem></GifItem>", () => {

    const title = "i'm title";
    const url = "https://image.com/";

    test("should be match with snapshot", () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test("should show image with url and alt properly", () => {
        render(<GifItem title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
        //screen.debug();
    });

    test("should show title in component", () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

});

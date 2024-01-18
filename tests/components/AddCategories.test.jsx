import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategories } from "../../src/components";

describe("test in AddCategories", () => {
    test("should change the value in text box", () => {
        render(<AddCategories onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Connor'}})
        expect(input.value).toBe('Connor')
    });

    test("should call onNewCategory if input has a value", () => {

        const inputValue = "Volkanovsky"
        const onNewCategory = jest.fn()

        render(<AddCategories onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form)
        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test("shouldn't call onNewCategory if input is empty", () => {

        const onNewCategory = jest.fn()
        render(<AddCategories onNewCategory={onNewCategory} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).not.toHaveBeenCalled();
        
        
    });
});

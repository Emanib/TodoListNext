
/**
 * @jest-environment jsdom
 */
import Todo from '../Todo'
import {act, fireEvent, render, screen} from "@testing-library/react";

    it('should input todo handle onChange', async function () {
        render(<Todo 
           />)
            const inputElement=screen.getByPlaceholderText("enter value")
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, {target:{
            value:"Eman"
            }})
        expect(inputElement.value).toBe("Eman")
    });
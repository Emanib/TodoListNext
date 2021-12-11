import { act, fireEvent, render, screen } from "@testing-library/react";
import Todo from '../Todo'
// const mockedCallback = jest.fn()
describe(' Todo',  function () {
    it('should render input', async function () {
        render(<Todo 
           />)
            const inputElement=screen.getByPlaceholderText("enter value")
        expect(inputElement).toBeInTheDocument()
    });

    it('should input handle onChange', async function () {
        render(<Todo 
          />)
            const inputElement=screen.getByPlaceholderText("enter value")
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, {target:{
            value:"eman"
            }})
        expect(inputElement.value).toBe("eman")
    });

    it('should render button', async function () {
        render(<Todo />)
            const buttonElement=screen.getByRole("button", {
                name:/Add/i
            })
        expect(buttonElement).toBeInTheDocument()
    });

    it('should button handle onClick', async function () {
        render(<Todo />)
            const buttonElement=screen.getByRole("button", {
                name:/Add/i
            })

        fireEvent.click(buttonElement)
        // expect(mockedCallback).toBeCalled()
    });

    it('should button handle onClick', async function () {
        render(<Todo 
            />)

        const inputElement=screen.getByPlaceholderText("enter value")
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, {target:{
                value:"Eman"
            }})
        expect(inputElement.value).toBe("eman")

            const buttonElement=screen.getByRole("button", {
                name:/Add/i
            })

        act(()=>{
            fireEvent.click(buttonElement)
        })
        // expect(mockedCallback).toBeCalled()
        expect(inputElement.value).toBe("")
    });
})
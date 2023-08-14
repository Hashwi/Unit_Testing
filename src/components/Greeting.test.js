import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Greeting Components', ()=> {
    test("renders Hello World as a text", () => {
        //Arrange
        render(<Greeting/>)
        
        //Act
        //... nothing
        
        // Assert
        const helloWorldElement = screen.getByText('Hello World', {exact: false})
        expect(helloWorldElement).toBeInTheDocument()
        });

        test("renders Nice to see you here if the button was NOT clicked", () => {
            //Arrange
            render(<Greeting/>)
            
            //Act
            //... nothing
            
            // Assert
            const outputElement = screen.getByText('Nice to see you here!!', {exact: false})
            expect(outputElement).toBeInTheDocument()
            });

            test("renders 'See You soon' if the button was clicked", () => {
                //Arrange
                render(<Greeting/>)
                
                //Act
                const buttonElement = screen.getByRole('button')
                userEvent.click(buttonElement)
                
                // Assert
                const outputElement = screen.getByText('See You soon!!', {exact: false})
                expect(outputElement).toBeInTheDocument()
                });

})



import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

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

})


import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (
        <CheckoutForm />
    )
    const header=screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {

    render(<CheckoutForm />
        )

     const firstNameInput = screen.getByLabelText(/first name:/i)
     const lastNameInput = screen.getByLabelText(/last name:/i)
     const addressInput = screen.getByLabelText(/address:/i)
     const cityInput = screen.getByLabelText(/city:/i)
     const stateInput = screen.getByLabelText(/state:/i)
     const zipCodeInput = screen.getByLabelText(/zip:/i)

     fireEvent.change(firstNameInput,{
        target:{name: "firstName", value:"suzie"}
        });
     fireEvent.change(lastNameInput,{
        target:{name: "lastName", value:"peluso"}
        });
     fireEvent.change(addressInput,{
         target:{name: "address", value:"344 second ave"}
        });
     fireEvent.change(cityInput,{
        target:{name: "city", value:"lindenwold"}
         });
     fireEvent.change(stateInput,{
         target:{name: "state", value:"new jesey"}
        });  
     fireEvent.change(zipCodeInput,{
         target:{name: "zip", value:"08021"}
        }); 

    // console.log(firstNameInput.value)
    // console.log(lastNameInput.value)
    // console.log(addressInput.value)
    // console.log(cityInput.value)
    // console.log(stateInput.value)
    // console.log(zipCodeInput.value)

       const checkoutButton=screen.getByRole("button")
      act(()=>{
        fireEvent.click(checkoutButton)
      }) 


     screen.findByText(/suzie peluso 344 second ave lindenwold new jersy 08021/i)
 
  


    })

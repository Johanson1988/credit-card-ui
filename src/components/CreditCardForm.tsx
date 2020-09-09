import React, { useState } from "react";
//import styled from "styled-components";

/*const StyledFooter = styled.footer`
    width: 80%;
    background-color: ${({ theme: { colors } }) => colors.main};
    color: ${({ theme: { colors } }) => colors.secondary};
    margin: 1em auto;
    text-align: center;
`*/

//import modules
import CardNumber from './FormFields/CardNumber';
import CardMonth from './FormFields/CardMonth';
import CardYear from './FormFields/CardYear';
import CardCcv from './FormFields/CardCcv';

type FormEvent = React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>;

const CreditCardForm: React.FC<{}> = () => {

    const [inputCardDetails, setInputCardDetails] = useState({
        number: "",
        month: "",
        year: "",
        ccv: ""
    });

    const updateFieldInfo = (event: FormEvent) =>
        setInputCardDetails({...inputCardDetails, [event.target.name]: event.target.value });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("Information submitted");        
    } 
    
    return(
    <>
        <form className="credit-card">
            <div className="form-header">
                <h4 className="title">Credit card detail</h4>
            </div>
    
            <div className="form-body">
                <CardNumber updateFieldInfo={updateFieldInfo} />
                <div className="date-field">
                    <CardMonth updateFieldInfo={updateFieldInfo} />
                    <CardYear updateFieldInfo={updateFieldInfo}/>
                </div>
                <CardCcv updateFieldInfo={updateFieldInfo}/>

        <button type="submit" className="proceed-btn">Proceed</button>
        <button type="submit" className="paypal-btn">Pay With</button>
    </div>
    </form> 
    </>
    )
}


export default CreditCardForm;
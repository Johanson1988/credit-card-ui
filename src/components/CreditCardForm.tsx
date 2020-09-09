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

export type CardDetails = {
    number?: string,
    month?: string,
    year?: string,
    ccv?: string,
}

const CreditCardForm: React.FC<{}> = () => {

    const [inputCardDetails, setInputCardDetails] = useState({
        number: "",
        month: "",
        year: "",
        ccv: ""
    });

    const updateFieldInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedCardDetails = {...inputCardDetails, [event.target.name]: event.target.value };
        setInputCardDetails(updatedCardDetails);
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
                    <CardMonth />
                    <CardYear />
                </div>
                <CardCcv />

        <button type="submit" className="proceed-btn">Proceed</button>
        <button type="submit" className="paypal-btn">Pay With</button>
    </div>
    </form> 
    </>
    )
}


export default CreditCardForm;
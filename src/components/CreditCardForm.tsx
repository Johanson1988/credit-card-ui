import React, { useState } from "react";

/** Components */
import CardNumber from './FormFields/CardNumber';
import CardMonth from './FormFields/CardMonth';
import CardYear from './FormFields/CardYear';
import CardCcv from './FormFields/CardCcv';

/** Styled Components */
import StyledForm from './../styles/StyledForm';
import StyledFormHeader from './../styles/StyledFormHeader';
import StyledFormBody from './../styles/StyledFormBody';
import StyledTitle from './../styles/StyledTitle';
import StyledButton from './../styles/StyledButton';

type FormEvent = React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>;

const CreditCardForm: React.FC<{}> = () => {

    const [inputCardDetails, setInputCardDetails] = useState({
        number: "",
        month: "January",
        year: "2020",
        ccv: ""
    });

    const updateFieldInfo = (event: FormEvent) =>
        setInputCardDetails({...inputCardDetails, [event.target.name]: event.target.value });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { number, month, year, ccv } = inputCardDetails;
        if (number && month && year && ccv ) alert("Information correctly submitted");    
        else alert("Please, review all fields")
    } 
    
    return(
        <>
            <StyledForm onSubmit={handleSubmit}>
                <StyledFormHeader>
                    <StyledTitle>Credit card details</StyledTitle>
                </StyledFormHeader>
                <StyledFormBody>
                    <CardNumber updateFieldInfo={updateFieldInfo} />
                    <div>
                        <CardMonth updateFieldInfo={updateFieldInfo} />
                        <CardYear updateFieldInfo={updateFieldInfo}/>
                    </div>
                    <CardCcv updateFieldInfo={updateFieldInfo}/>
                    <StyledButton type="submit">Pay</StyledButton>
                </StyledFormBody>
            </StyledForm> 
        </>
    )
}

export default CreditCardForm;
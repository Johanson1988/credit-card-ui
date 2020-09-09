import React, { useState } from "react";
import styled from 'styled-components';

/** Helper functions */
import { OnlyNumbersKeyDown } from './../../helpers/helpers';
import { checkLength } from './../../helpers/helpers';

const StyledInput = styled.input`
    float: left;
    width: 145px;
    padding-left: 20px;
    border: 2px solid #e1e8ee;
    border-radius: 6px;
    background: #fff;
`

const StyledSmallLetters = styled.small`
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
    float: right;
    margin-bottom: 20px;
`

type Props = {
    updateFieldInfo: (fieldInfo: React.ChangeEvent<HTMLInputElement>) => void
}

const CardCcv: React.FC<Props> = ({ updateFieldInfo }) => {

    const [validInput, setValidInput] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (checkLength(e.currentTarget.value.length, 3) ) {
            setValidInput(true);
            updateFieldInfo(e);
        }
        else setValidInput(false);
    }

    return (
        <div className="card-verification">
            {
                !validInput ?
                    <p>Length must be 3.</p>
                :
                    null
            } 
            <div className="cvv-input">
                <StyledInput
                    type="text"
                    placeholder="CVV"
                    name="ccv" 
                    onChange={handleChange}
                    onKeyDown={OnlyNumbersKeyDown}
                />
            </div>
            <div className="cvv-details">
                <StyledSmallLetters>3 digits usually found on the signature strip</StyledSmallLetters>
            </div>
        </div>
    )
}

export default CardCcv;
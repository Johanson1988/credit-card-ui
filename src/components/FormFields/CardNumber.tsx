import React, { useState } from "react";
import styled from 'styled-components';

import { OnlyNumbersKeyDown } from './../../helpers/helpers';
import { checkLength } from './../../helpers/helpers';


const StyledInput = styled.input`
    font-size: 14px;
    font-weight: 100;
    line-height: 14px;
    opacity: .7;
    color: #86939e;
    width: 100%;
    margin-bottom: 20px;
    padding-left: 20px;
    border: 2px solid #e1e8ee;
    border-radius: 6px;
`

type Props = {
    updateFieldInfo: (fieldInfo: React.ChangeEvent<HTMLInputElement>) => void
}

const CardNumber: React.FC<Props> = ({ updateFieldInfo }) => {
    
    const [validInput, setValidInput] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (checkLength(e.currentTarget.value.length, 16) ) {
            setValidInput(true);
            updateFieldInfo(e);
        }
        else setValidInput(false);
    }

    return(
        <>
            {
                !validInput ?
                    <p>Length must be 16.</p>
                :
                    null
            }        
            <StyledInput type="text"
                className="card-number"
                placeholder="Card Number"
                onChange={handleChange}
                name="number"
                onKeyDown={OnlyNumbersKeyDown}
            />
        </>
    )
}

export default CardNumber;
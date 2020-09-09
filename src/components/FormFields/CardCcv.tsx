import React, { useState } from "react";

import { OnlyNumbersKeyDown } from './../../helpers/helpers';
import { checkLength } from './../../helpers/helpers';

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
                <input
                    type="text"
                    placeholder="CVV"
                    name="ccv" 
                    onChange={handleChange}
                    onKeyDown={OnlyNumbersKeyDown}
                />
            </div>
            <div className="cvv-details">
                <p>3 or 4 digits usually found on the signature strip</p>
            </div>
        </div>
    )
}

export default CardCcv;
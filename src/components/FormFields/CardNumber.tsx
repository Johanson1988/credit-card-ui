import React, { useState } from "react";

import { OnlyNumbersKeyDown } from './../../helpers/helpers';
import { checkLength } from './../../helpers/helpers';

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
            <input type="text"
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
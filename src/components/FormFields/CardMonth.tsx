import React from "react";
import styled from 'styled-components';

import StyledSelect from './../../styles/StyledSelect';

const StyledMonth = styled(StyledSelect)`
    float: left;
`

type Props = {
    updateFieldInfo: (fieldInfo: React.ChangeEvent<HTMLSelectElement>) => void
}

const CardMonth: React.FC<Props> = ({ updateFieldInfo }) => 
    <div className="month-class">
        <StyledMonth name="month" onChange={updateFieldInfo} >
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
        </StyledMonth>
    </div>

export default CardMonth;
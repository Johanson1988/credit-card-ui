import React from "react";
import styled from 'styled-components';

import StyledSelect from './../../styles/StyledSelect';

const StyledYear = styled(StyledSelect)`
    float: right;
`

type Props = {
    updateFieldInfo: (fieldInfo: React.ChangeEvent<HTMLSelectElement>) => void
}

const CardYear: React.FC<Props> = ({ updateFieldInfo }) => 
    <div className="Year">
        <StyledYear name="year" onChange={updateFieldInfo}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
        </StyledYear>
    </div>

export default CardYear;
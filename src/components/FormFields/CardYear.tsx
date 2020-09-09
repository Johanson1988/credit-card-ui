import React from "react";

type Props = {
    updateFieldInfo: (fieldInfo: React.ChangeEvent<HTMLSelectElement>) => void
}

const CardYear: React.FC<Props> = ({ updateFieldInfo }) => 
    <div className="Year">
        <select name="year" onChange={updateFieldInfo}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
        </select>
    </div>

export default CardYear;
import React from "react";

type Props = {
    updateFieldInfo: (fieldInfo: React.ChangeEvent<HTMLInputElement>) => void
}

const CardNumber: React.FC<Props> = ({ updateFieldInfo }) => 
    <input type="text" className="card-number" placeholder="Card Number" onChange={updateFieldInfo} name="number"/>

export default CardNumber;
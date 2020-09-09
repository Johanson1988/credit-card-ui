import React from "react";

const CardCcv: React.FC<{}> = () => 
    <div className="card-verification">
        <div className="cvv-input">
            <input type="text" placeholder="CVV" />
        </div>
        <div className="cvv-details">
            <p>3 or 4 digits usually found on the signature strip</p>
        </div>
    </div>

export default CardCcv;
import React from 'react';
import BobaCup from '../images/cup.PNG';
import BobaPearl from '../images/boba.PNG';

function Cup() {
    return (
        <div>
            <img className="boba-cup" src={BobaCup} alt="boba-cup" />
            <div className="boba-section">
                <img className="boba-pearl pearl1" src={BobaPearl} alt="boba-pearl" />
                <img className="boba-pearl pearl2" src={BobaPearl} alt="boba-pearl" />
                <img className="boba-pearl pearl3" src={BobaPearl} alt="boba-pearl" />
                <br />
                <img className="boba-pearl pearl4" src={BobaPearl} alt="boba-pearl" />
                <img className="boba-pearl pearl5" src={BobaPearl} alt="boba-pearl" />
                <img className="boba-pearl pearl6" src={BobaPearl} alt="boba-pearl" />
            </div>
        </div>
    )
}

export default Cup;
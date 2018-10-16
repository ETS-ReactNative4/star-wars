import React from 'react';

const NextPrevious = ({nexprev, nextButton}) => {
    console.log(nexprev.next);
    console.log(nexprev.previous); 


    if (nexprev.next !== null && nexprev.next !== undefined && nexprev.previous !== null && nexprev !== undefined) {
        return(
            <div>
                <button className="f3 link dim ph3 pv2 mb2 dib white bg-blue" id="previous" onClick={nextButton}>View Previous</button>     
                <button className="f3 link dim ph3 pv2 mb2 dib white bg-blue" id="next" onClick={nextButton}>View next</button>
            </div>
        );
    } else if (nexprev.next !== undefined && nexprev.next !== null) {
        return(
            <div>
                <button className="f3 link dim ph3 pv2 mb2 dib white bg-blue" id="next" onClick={nextButton}>View next</button>
            </div>
        );

    } else if (nexprev.previous !== undefined && nexprev.previous !== null) {
        return(
            <div>
                <button className="f3 link dim ph3 pv2 mb2 dib white bg-blue" id="previous" onClick={nextButton}>View previous</button>     
            </div>
        );
        
    } else {
        return <p></p>
    }
};

export default NextPrevious;
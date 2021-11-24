import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Stats() {
  const [ numberOfVisits, setNumberOfVisits ] = useState(null);

  const URL = 'https://portfolioproject-211a3-default-rtdb.firebaseio.com/portfolio/visits/-MpFm7BGCp_qZYXI2x3Y.json';

  const fetchNumberOfVisits = async () => {
    const response = await axios.get(URL);
    const result = response.data.numberOfVisits
    console.log("Result", result);
    const body = {
      numberOfVisits: result + 1
    };
    setNumberOfVisits(result);
    await axios.put(URL, body);
  };

  useEffect( () => { 
    fetchNumberOfVisits();
  }, [] );
  return (
    <div>
        <section id="stats" className="count-up">
          <div className="row">
            <div className="col-full">      					
                <div className="stat">
                  <div className="icon-part">
                    <i className="icon-users" />
                  </div>
                  <h3 className="stat-count-new">
                    {numberOfVisits}
                  </h3>
                  <h5 className="stat-title">
                    User Visits
                  </h5>
                </div>									
              
            </div>
          </div>
        </section> 
      </div>
  )
}

export default Stats

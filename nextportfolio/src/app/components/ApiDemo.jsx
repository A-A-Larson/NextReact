import React, { useState } from 'react';

const ApiDemo = () => {
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [VIN, setVIN] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!VIN) {
          setError("Please enter a VIN.");
          return;
        }
        setLoading(true);
        setError(null); // Clear any previous errors

        if (loading) {
            return '<div>Loading</div>'
        }
    
        try {
          const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${VIN}?format=json`);
    
          // Check if the response is successful
          if (!response.ok) {
            throw new Error("Failed to fetch vehicle data.");
          }
          
          const data = await response.json(); // Parse the JSON response
          setVehicle(data);
        } catch (error) {
          setError("Failed to fetch vehicle data. Please try again.");
        } finally {
          setLoading(false);
        }
    };

    return (
        <div className='apiDemoContainer text-lightHdrClr dark:text-darkHdrClr'>
            
                <h2 className='apiH2'>API Demo: VIN Decoder</h2>
                <div className='apiTextContainer'>
                    <p className='apiP'>
                        I created this section to demonstrate API calls. 
                        I often need to decode Vehicle Identification Numbers 
                        to verify specs when looking up parts or service
                        information on a vehicle. So I decided I would make my own!
                    </p> <br/>
                    <div className='examplesContainer dark:border-inherit'>
                        <h3 className='apiH3'>Try these VINs:</h3>
                        
                            <p className='apiLI'>SCEDT26T1CD020105</p>
                            <p className='apiLI'>1G2AW87S8DN206835</p> 
                            <p className='apiLI'>WP0AA2Y18PSA00103</p>
                            <p className='apiLI'>2HGEJ6611YH548121</p>
                        
                    </div>
                </div>

            <form className='apiForm' method='post' onSubmit={handleSubmit}>
                <label htmlFor='vinput'>
                        VIN: <input 
                                className='bg-lightBG dark:bg-darkBG border border-lightHdrClr dark:border-darkHdrClr'
                                type='text' 
                                id='vinput' 
                                value={VIN}
                                onChange={e => setVIN(e.target.value)}
                                minLength="17" 
                                maxLength="17"
                                size="17"
                             />    
                </label> 
                <button className='vinButton border border-lightHdrClr dark:border-darkHdrClr' 
                        type='submit' value="Submit">
                    Submit
                </button>        
            </form> <br/>

            {error && <div style={{ color: 'red' }}>{error}</div>}

            {vehicle && vehicle.Results && vehicle.Results.length > 0 && (

            <div className='apiTableContainer'>
                <h3 className='apiH3'>Vehicle Information:</h3>
                <table className='apiTable border border-lightHdrClr dark:border-darkHdrClr' border="1">
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                    {vehicle.Results.map((result, index) => {
                        // Only render the result if both 'Variable' and 'Value' exist
                        if (result.Variable && result.Value) {
                        return (
                            <tr key={index}>
                            <td className='apiFieldColumn border border-lightHdrClr dark:border-darkHdrClr'><strong>{result.Variable}:</strong></td>
                            <td className='apiValueColumn border border-lightHdrClr dark:border-darkHdrClr'>{result.Value}</td>
                            </tr>
                        );
                        }
                        return null; // If either 'Variable' or 'Value' is missing, return null
                    })}
                    </tbody>
                </table>
            </div>
            )}        
        </div>
    );
};

export default ApiDemo;
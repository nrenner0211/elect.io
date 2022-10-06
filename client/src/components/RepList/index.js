import React from 'react';
import { useState, useEffect } from 'react';
import civicInfo from '../../api/civicInfo';
import TextField from '@mui/material/TextField';
import auth from '../../utils/auth';


export const RepList = () => {

    let userAddress = '';
    if(auth.loggedIn())
    {
        userAddress = auth.getProfile();
        userAddress = userAddress.data.address;
    }

    const [representatives, setRepresentatives] = useState([])
    const [watchList, setWatchList] = useState([userAddress]);


    // API CALL

    useEffect(() => {
        let isMounted = true
        const fetchdata = async () => {
            try {
                const responses = await Promise.all(watchList.map((address) => {
                    return civicInfo.get('/representatives', {
                        params: {
                            address: address
                        }
                    })
                }))

                const repData = responses.map((response) => {
                return  {
                        officials: response.data.officials
                    }
                })
                if (isMounted) {
                    setRepresentatives(repData[0].officials)
                }
                
                
            } catch (err) {

            }
        }
        fetchdata()

        return () => (isMounted = false)
    }, [watchList]) 


return (
    <>
        <h4>Enter Address:</h4>
    
        {/* textfield component is loaded with label and such */}
    
        <form className="addressForm center">
            <TextField className='userInput' id="outlined-basic" label="Address" variant="outlined"/>
            <button className="btn" type="submit" onSubmit={(event) => {
                event.preventDefault();
                console.log(document.getElementById('outlined-basic').value);
                setWatchList(document.getElementById('outlined-basic').value)
            }}>Submit</button>
        </form>
    
        <h5>Powered by the Civic Information API, <a href='https://developers.google.com/civic-information'>Learn More</a></h5>
    
        <div>
            <table className='table'>
                <thead style={{ color: '#004FFF'}}>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Party</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Website</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {representatives.map((item) => {
                        return ( 
                            <>                  
                            <tr>
                                <th scope='row'>{item.name}</th>
                                <td>{item.party}</td>
                                <td>{item.phones}</td>
                                <td>{item.urls}</td> 
                            </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
        )
}

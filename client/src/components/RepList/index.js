import React from 'react';
import { useState, useEffect } from 'react';
import civicInfo from '../../api/civicInfo';

// mock data
// const mockData = require('../../api/data.json');


export const RepList = () => {
    const [representatives, setRepresentatives] = useState([])
    const [watchList] = useState(['131 Riverview AVE, Wheeling WV 26003'])

    // MOCKDATA
    // let representatives = mockData.officials;




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
                
                //console.log(responses)
                const repData = responses.map((response) => {
                return  {
                        data: response.data.offices,
                        officials: response.data.officials
                    }
                })
                //console.log(repData[0])
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
    )
}
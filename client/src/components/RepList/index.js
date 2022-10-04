import { useState, useEffect } from 'react';
import civicInfo from '../../api/civicInfo';

export const RepList = () => {
    const [address, setAddress] = useState([])
    const [watchList, setWatchList] = useState(['131 Riverview AVE, Wheeling WV 26003'])

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
                
                // console.log(responses)
                const data = responses.map((response) => {
                return  {
                        data: response.data.offices,
                        officials: response.data.officials
                    }
                })
                // console.log(data)
                if (isMounted) {
                    setAddress(data)
                }
                
            } catch (err) {

            }
        }
        fetchdata()

        return () => (isMounted = false)
    }, [])
    return <div>
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
                {address.map((data) => {
                    return (                    
                    <tr key={data.offices}>
                        <th scope='row'>{data.name}</th>
                        <td>{data.party}</td>
                        <td>{data.phones}</td>
                        <td>{data.urls}</td> 
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
}
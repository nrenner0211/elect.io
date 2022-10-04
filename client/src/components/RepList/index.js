import { useState, useEffect } from 'react';
import civicInfo from '../../api/civicInfo';

export const RepList = () => {
    const [address, setAddress] = useState()
    const [watchList, setWatchList] = useState(['131 Riverview AVE, Wheeling WV 26003'])

    useEffect(() => {
        let isMounted = true
        const fetchData = async () => {
            try {
                const responses = Promise.all(watchList.map((address) => {
                    return civicInfo.get('/representatives', {
                        params: {
                            address: address
                        }
                    })
                }))
                
                console.log(responses)
                if (isMounted) {
                    setAddress(responses)
                }
                
            } catch (err) {

            }
        }
        fetchData()

        return () => (isMounted = false)
    }, [])
    return <div>repList</div>
}
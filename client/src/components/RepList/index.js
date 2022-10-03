import { useState, useEffect } from 'react';
import civicInfo from '../../api/civicInfo';

export const RepList = () => {
    const [address, setAddress] = useState()

    useEffect(() => {
        let isMounted = true
        const fetchData = async () => {
            try {
                const response = await civicInfo.get('/representatives?', {
                    params: {
                        address: '131 Riverview AVE, Wheeling WV 26003'
                    }
                })
                console.log(response)
                if (isMounted) {
                    setAddress(response.data)
                }
                
            } catch (err) {

            }
        }
        fetchData()

        return () => (isMounted = false)
    }, [])
    return <div>repList</div>
}
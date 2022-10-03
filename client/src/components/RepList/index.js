import { useState, useEffect } from 'react';
import civicInfo from '../../api/civicInfo';

export const RepList = () => {
    const address = useState('131riverviewavewheelingwv')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await civicInfo.get('/representatives?key=AIzaSyB6Ob6qiK4MHLPTscdDbTRfMy3nIdoagOA&address=131riverviewavewheeligwv26003')
                console.log(response)
            } catch (err) {

            }
        }
        fetchData()
    }, [])
    return <div>repList</div>
}
import axios from 'axios';

const key = 'AIzaSyB6Ob6qiK4MHLPTscdDbTRfMy3nIdoagOA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/civicinfo/v2',
    params: {
        key
    }
})
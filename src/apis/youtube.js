import axios from 'axios'


const key = 'AIzaSyD3_gvkNh1DMDxZiCe6IdrcW0KDTd3Mp4Q'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: key,

    }

})


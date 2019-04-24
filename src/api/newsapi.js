import axios from 'axios'

export default 
axios.create({
    baseURL:'https://newsapi.org/v2',
        headers: {
            Authorization: "5e161d0fb95b487da8bf2daced3e729d"
        
    }
})
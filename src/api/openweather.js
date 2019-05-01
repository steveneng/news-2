import axios from 'axios'

export default 
axios.create({
    baseURL:'https://api.openweathermap.org',
        headers: {
            Authorization: "29353e068b18a6d5b8999d7d4aa45b7d"
        
    }
})
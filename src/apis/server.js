import axios from 'axios'
export default axios.create({
    baseURL: 'https://watchtwogether.herokuapp.com'
    //baseURL: 'http://localhost:7777'
})
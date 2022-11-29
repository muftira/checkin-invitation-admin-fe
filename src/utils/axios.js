import axios from "axios";

const base_url = 'http://localhost:5500/api'


export const getData = () => 
    axios.get(base_url+"/guest")


export const postData = (name, address) => 
    axios.post(base_url+"/guest", {name, address})

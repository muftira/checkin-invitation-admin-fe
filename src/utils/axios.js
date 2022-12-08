import axios from "axios";

const base_url = 'http://localhost:5500/api'


export const getData = () => 
    axios.get(base_url+"/guest")


export const postData = (name, address) => 
    axios.post(base_url+"/guest", {name, address})

export const deleteData = (id) =>
    axios.delete(base_url+"/guest/"+id)

export const updateData = (id, name, address) =>
    axios.put(base_url+"/guest/"+id, {name, address})

export const updateArriving = (id, isArrived) =>
    axios.put(base_url+"/guest/"+id, {isArrived : !isArrived})

    export const updateSpreading = (id, isSpread) =>
    axios.put(base_url+"/guest/"+id, {isSpread : !isSpread})
import axios from "axios";

// const base_url = 'http://localhost:5500/api'
const base_url = "https://checkin-invitation-be.vercel.app/";

export const getData = () => axios.get(base_url + "api/guest");

export const postData = (name, address) =>
  axios.post(base_url + "api/guest", { name, address });

export const deleteData = (id) => axios.delete(base_url + "api/guest/" + id);

export const updateData = (id, name, address) =>
  axios.put(base_url + "api/guest/" + id, { name, address });

export const updateArriving = (id, isArrived) =>
  axios.put(base_url + "api/guest/" + id, { isArrived: !isArrived });

export const updateSpreading = (id, isSpread) =>
  axios.put(base_url + "api/guest/" + id, { isSpread: !isSpread });

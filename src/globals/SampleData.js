import axios from "axios"

export const fetchSampleUserData = async()=>{
    const URL = "https://jsonplaceholder.typicode.com/users"
    const data = await axios.get(URL).then(response => {
        return response.data
    }).catch(err =>{
        console.error(err)
        return []
    })
    return data
}
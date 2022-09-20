import axios from "axios"

export default {
    remover: (item) => {
        return axios.post(`${process.env.VUE_APP_API_URL}/remove-pet`, item)
    }
}
import axios from "axios"

export default {
    atualizar: (json) => {
        return axios.put(`${process.env.VUE_APP_API_URL}/alter-pet`, json)
    }
}
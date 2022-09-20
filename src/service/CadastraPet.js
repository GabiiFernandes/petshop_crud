import axios from "axios"

export default {
    cadastrar: (json) => {
      return axios.post(`${process.env.VUE_APP_API_URL}/add-pet`, json)
    }
}
import axios from "axios"

export default {
    listar: () => {
      return axios.get(`${process.env.VUE_APP_API_URL}/`)
    }
}
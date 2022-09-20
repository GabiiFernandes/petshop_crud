import axios from "axios"

export default {
    listar: (Id) => {
      return axios.get(`${process.env.VUE_APP_API_URL}/select-one`, {
        params: {
          id: Id
        }
      })
    }
}
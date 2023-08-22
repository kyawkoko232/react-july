import axios from "axios";


const SearchUsers = async (term) => {

    const token = '1Eq4yaGxkQVQR65E7PU42TGkxDAzfvUnCokY4bmW';
    const response = await axios.get('http://127.0.0.1:8000/api/v1/user',{
        headers : {
            Authorization: `Bearer ${token}`

        },

        params : {
            query : term,
        }

    })



    return response.data.users
    


   
   

    


}

export default SearchUsers;
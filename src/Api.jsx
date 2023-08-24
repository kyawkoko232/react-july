import axios from "axios";


const SearchUsers = async (term) => {

    const token = 'haC1eZWGAg9pHmbdVnAG7zxevJIAWaPYwWr4tj16';
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
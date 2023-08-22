import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchUsers from "./Api";
import UserList from "./components/UserList";




function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = async (term) => {
    const result = await SearchUsers(term);
    
    console.log(result); // This should display array(10)
    setUsers(result);
};

  
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    
    <UserList  users={users} />

    </div>
  );
}

export default App;

import UserShow from "./UserShow";


function UserList({ users }) {
  const renderedUsers = users.map((user) => {
    return <UserShow key={user.id} user={user} />
  })

  return (
    <div>

      <h1 className="text-center text-xl font-sans">User List</h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {renderedUsers}
      </div>


    </div>)
}



export default UserList;

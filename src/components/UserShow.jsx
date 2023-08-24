function UserShow({ user }) {
  return (

    <div className="mt-10">

      <ul className="list-disc flex flex-col gap-y-2 bg-slate-900 text-gray-400 shadow-xl font-roboto hover:bg-blue-500 hover:text-gray-200 hover:rounded-2xl transition-all duration-500 border px-10 py-5 rounded-lg">
        <li>Name - {user.name}</li>
        <li>Email - {user.email}</li>
        <li>Verfied at - {user.email_verified}</li>
        <li>Gender - {user.gender}</li>
  
        <li>Role - {user.role}</li>
        <li>
            Zodiac Sign - {user.zodiac.sun_sign}
        </li>
       
      </ul>
      
    </div>

  )

}

export default UserShow;

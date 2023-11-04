function ManageUser(user){ //prop for Login.js (google login)
    return (
        <div className="userProfiles">
            <img src={user.defaultPic}/>
            <h2>{user.firstName + " " + user.lastName}</h2>
            <p>{user.email}</p>
        </div>
    )
}


export default ManageUser;
function User({user}){
    return (
        <>
        <p>{user.id}. {user.name}</p>
        <p></p>
        <p>{user.email}</p>
        </>
    )
}

export default User;
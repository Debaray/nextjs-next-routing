import User from "../../components/user";

function UserList(props) {
    const { users } = props;
    return (
        <>
            <h1>List of users</h1>
            {
                users?.map(user => {
                    return (
                        <div key={user.id}>
                          <User user={user}></User>
                        </div>
                    )
                })
            }
        </>
    )
}

export default UserList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    console.log(data)
    return {
        props: {
            users: data
        }
    };
}
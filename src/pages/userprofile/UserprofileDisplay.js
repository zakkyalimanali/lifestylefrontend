import React , {useState , useEffect} from 'react'
import UserProfileAPI from '../../api/UserProfileAPI'
import { Link } from 'react-router-dom'

function UserprofileDisplay() {
    const [users , setUsers] =useState([])
    // const [full_name , setFullName] = useState('')

    useEffect(() => {
        fetchUserProfile()
    },[]) 

    const fetchUserProfile = () => {
        UserProfileAPI.get('/')
        .then((res) => {
            setUsers(res.data)
        })
        .catch(console.log)
    }

  return (
    <div>
      {users.map((user) => {
        return (
          <div>
        <h1>{user.username}</h1>
        <h3>{user.email}</h3>
        </div>
        )
      })}
      <Link to="/userprofileadd">Add User</Link>
    </div>
  )
}

export default UserprofileDisplay

import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditForm from './forms/EditUserForm'

const App = () => {
  const usersData = [
    {id: 1, name: 'Tania', username: 'floopydiskette'},
    {id: 2, name: 'Craig', username: 'siliconeidolon'},
    {id: 3, name: 'Ben', username: 'benisphere'},
  ]

  const initialFormState = {
    id: null, 
    name: '', 
    username: '' 
  }

  const addUser = u => {
    users.id = u.length + 1;
    setUsers([...users, u])
  }
  const deleteUser = uid => {
    setEditing(false)
    setUsers(users.filter(user =>(user.id !== uid )))
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = (u) => {
    setEditing(true)
    setCurrentUser({id: u.id, name: u.name, username: u.username })
  }


  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)



  return(
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
        {
          editing ? (
          <div>
            <h2>Edit user</h2>
            <EditForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>) : (
          <div>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />
          </div>)
        }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  )
}

export default App;

import React from 'react'
const UserTable = (props) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {   
                    props.users.length > 0 ? (
                        props.users.map(u =>(
                            <tr key={u.id}>
                                <td>{u.name}</td>
                                <td>{u.username}</td>
                                <td>
                                    <button 
                                        onClick={() => {
                                            props.editRow(u)
                                        }}
                                        className="button muted-button"
                                    >Edit</button>
                                    <button 
                                        onClick={()=>props.deleteUser(u.id)} 
                                        className="button muted-button"
                                    >Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3}>No users.</td>
                        </tr>
                    )
                }    

                    
                
            </tbody>
        </table>
    )
}

export default UserTable

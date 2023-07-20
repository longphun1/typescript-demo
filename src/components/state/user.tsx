import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

const user = () => {
    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({ name: 'Long', email: 'long@example.com'})
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={handleLogout}>Log out</button>
            <h2>User name - {user?.name}</h2>
            <h2>Email - {user?.email}</h2>
        </div>
    )
}

export default user

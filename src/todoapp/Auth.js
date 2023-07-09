import { useContext, useState } from "react"
import UserContext from "./context/UserContext";

export default function Auth () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const userContext = useContext(UserContext);

    function onSubmit (e) {
        e.preventDefault();

        if(username === "test" && password === "test") {
            console.log("sg")
            userContext.setUser({
                name: 'test'
            })
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input 
                    type="text" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div>
                <input 
                    type="password"
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">submit</button>
        </form>
    )
}
import { children, createContext, useState } from "react"
// import { useNavigate } from "react-router-dom"


const AuthContextProvider = createContext(null)

function AuthContext({ children }) {

    const [data, setData] = useState([{ username: "midhun", password: "4321" }])
    // const navigate = useNavigate()

    const loginAuth = (userData) => {
        // data.find(userData) ? console.log("successfull login") : console.log("wrong username or pass")
        console.log(userData);
    }
    return (
        <AuthContextProvider.Provider value={loginAuth}>
            {children}
        </AuthContextProvider.Provider>
    )
}

export default AuthContext
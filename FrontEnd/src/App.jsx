import Cookies from "js-cookie";
import { useContext, useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import "./index.css"
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { AppContext } from "./AppContext";

function App() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { setUserData } = useContext(AppContext)

  useEffect(() => {
    try {
      const handleGetUser = async () => {
        await axios.get('http://localhost:3000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).
        then((res) => {
            console.log(res)
            setUserData(res.data)
          }).catch((error) => {
            try {
              toast.error(error.response.data.message);
            } catch (error) {
              toast.error(error.message);
            }
          })
      }
      const token = Cookies.get("token")
      if (token) {
        handleGetUser()
      }
       else {
        if (pathname !== "/signUppage" || pathname !== "/loginpage") {
          navigate("/login")
        }
      }

    } catch (error) {
      console.log(error)
    }
  }, [pathname, navigate, setUserData])
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  )
}
export default App

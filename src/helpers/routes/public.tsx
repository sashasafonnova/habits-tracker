
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import RegistrationPage from "../../pages/RegistrationPage";



export const publicRoutes = [
   {
      path: "/",
      element: <HomePage />,
   },
   {
      path: "/login",
      element: <LoginPage/>,
   },
   {
      path: "/registration",
      element: <RegistrationPage />,
   },
   
]
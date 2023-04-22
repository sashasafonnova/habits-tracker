import CreateHabitPage from "../../pages/CreateHabitPage";
import HabitsPage from "../../pages/HabitsPage";
import ItemPage from "../../pages/ItemPage";



export const privateRoutes = [
   {
      path: "/my-habits/:id",
      element: <ItemPage/>,
   },
   {
      path: "/my-habits",
      element: <HabitsPage/>,
   },
   {
      path: "/create",
      element: <CreateHabitPage/>,
   }
]
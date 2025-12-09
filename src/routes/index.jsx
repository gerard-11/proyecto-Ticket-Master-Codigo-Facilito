import {
    createBrowserRouter,
    RouterProvider} from 'react-router-dom'
import {Suspense} from 'react'
import Home from '../views/home'
import Detail from '../views/detail'
import Error404 from '../views/error'
import Profile from '../views/profile'
import LikedEvents from '../views/profile/components/likedEvents/index.jsx'
import MyInfo from '../views/profile/components/myInfo/index.jsx'

const router=createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        errorElement:<Error404/>
    },
    {
        path:'/detail/:eventId',
        element:(
            <Suspense fallback={<div>Cargando...</div>}>
                <Detail/>
            </Suspense>


        )
    },
    {
        path:'/profile',
        element:<Profile/>,
        children: [{
            path:'my-info',
            element: <MyInfo/>,
        }
        ,{
            path:'liked-events',
                element:<LikedEvents/>
            }
            ]
    }
])
const MyRoutes = () => <RouterProvider router={router}/>

export default MyRoutes;

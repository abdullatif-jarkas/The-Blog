import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import Home from './pages/Home/Home.tsx'
import Blog from './pages/Blog/Blog.tsx'
import Newsletter from './pages/Newsletter/Newsletter.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store/index.ts'
import Auth from './pages/Auth/Auth.tsx'
import Layout from './layout/Layout.tsx'

const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children : 
      [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/blog/:id',
          element: <Blog/>
        },
        {
          path: '/new',
          element: <Newsletter/>
        },
        {
          path: '/auth/:formType',
          element : <Auth/>,
        }
      ]
    }

  ], { basename: '/The-Blog'}
)



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}/>
    </Provider>
  </StrictMode>,
)

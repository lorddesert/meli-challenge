import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SearchResults } from './SearchResults.tsx';
import { ResultDetails } from './ResultDetails.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/items/:id',
        element: <ResultDetails />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:3000/api/items/${params.id}`)
        }
      },
      {
        path: '/items',
        element: <Suspense fallback={<>Cargando...</>}>
          <SearchResults />
        </Suspense>,
        loader: async ({ request }) => {
          const url = new URL(request.url)
          const searchTerm = url.searchParams.get("search")
    
          return fetch(`http://localhost:3000/api/items?q=${searchTerm}`)
        }
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

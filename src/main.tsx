import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import Layout from './routes/Layout.tsx'
import Gallery, { loader as galleryLoader } from './routes/Gallery.tsx'
import ProjectPage, { loader as projectLoader } from './routes/Project.tsx'
import CV from './routes/CV.tsx'
import NotFound from './routes/NotFound.tsx'

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Gallery />, loader: galleryLoader },
        { path: 'cv', element: <CV /> },
        { path: ':slug', element: <ProjectPage />, loader: projectLoader },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'
import AppProvider from './AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppProvider>
        <RouterProvider router={router} />
    </AppProvider>
)

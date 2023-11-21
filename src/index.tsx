import App from 'App'
import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import 'index.scss'
import './global.scss'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <Router basename='/'>
        <Suspense>
            <App />
        </Suspense>
    </Router>
)
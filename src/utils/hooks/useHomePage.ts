import { useLocation } from 'react-router-dom'

const useHomePage = () => {
    const location = useLocation()
    return location.pathname === "/"
}

export default useHomePage
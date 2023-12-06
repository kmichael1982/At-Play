import { BaseApi } from 'shared/api/base'
import { HOME_PAGE_URL } from 'shared/helpers/api-routes'

export const getHomePageFullInfo = async () => {
    try {
        const http = new BaseApi('')
        return await http.get(HOME_PAGE_URL)
    } catch (error) {
        console.error('Failed to fetch product data:', error)
        return null
    }
}
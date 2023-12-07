import { BASE_URL } from 'shared/helpers/api-routes'

export class BaseApi {
    private baseApi: string = ''

    constructor(
        private baseUrl: string = BASE_URL || '',
    ) {
        this.baseApi = this.baseUrl || ''
    }

    private getUrl(url: string) {
        return `${url}`
    }

    private handleResponse(res: Response) {
        return res.json()
    }

    public get(
        url: string = '',
    ): Promise<any> {
        return fetch(this.getUrl(url))
            .then(this.handleResponse)
    }
}
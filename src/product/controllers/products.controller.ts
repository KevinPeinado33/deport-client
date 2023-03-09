import { useQuery } from '@tanstack/react-query'

import { storeApi } from '@/common/api'
import { AxiosAdapter } from '@/common/adapters/http.adapter'

import { IProducts } from '../interfaces'

export const productsController = () => {

    const http = new AxiosAdapter( storeApi )

    const query = useQuery(
        ['products'],
        async () => await http.get< IProducts[] >('/products')
    )

    return {
        query
    }

}

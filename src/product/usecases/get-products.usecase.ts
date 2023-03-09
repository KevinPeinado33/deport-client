import { AppDispatch } from '@/common/data/store'
import { storeApi }    from '@/common/api'
import { showToast }   from '@/common/utils'

import { IProducts }   from '../interfaces'

export const getProductsUseCase = () => async ( dispatch: AppDispatch ) =>{
    
    try {

    } catch ( error ) {
        showToast({
            message: 'Hubo un error al traer los productos',
            type: 'error'
        })
    } 

}

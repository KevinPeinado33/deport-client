import { productsController } from '../controllers'

export const ProductsPage = () => {

    const { query } = productsController()

    if ( query.isError )    return (<h1>{`${ query.error }`}</h1>)
    if ( query.isFetching ) return (<h1>Cargando ...</h1>)

    return (
        <ul>
            {
                query.data?.map( product => (
                    <li key={ product.id }>
                        { product.title }
                    </li>
                ))
            }
        </ul>
    )

}

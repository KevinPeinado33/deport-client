import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {

    const error = useRouteError()

    console.log({ error })

    return (
        <div id='error-page'>
            <h1>Oops!</h1>
            <p>Sorry, hay un error pe mmvrga.</p>
            <p>No se encontro pe crrano!</p>
        </div>
    )
}

import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {

  const { message = '' } = useRouteError() as { message: string }

  return (
    <div>{ message }</div>
  )
}

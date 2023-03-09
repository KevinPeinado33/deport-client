import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <>
      <h1>navbar</h1>
      <Outlet />
    </>
  )
}

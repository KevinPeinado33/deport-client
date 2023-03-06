import { Outlet } from 'react-router-dom'

import { GameNavbar, GameSidebar } from '../ui'

export const GameLayout = () => {
  return (
    <>
      <GameNavbar />
      <GameSidebar />
      <main 
        style={{
          margin: '80px auto',
          maxWidth: '1440px',
          padding: '0px 30px'
        }}
      >
        <Outlet />
      </main>
    </>
  )
}
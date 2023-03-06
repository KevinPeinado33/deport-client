import { Button } from '@mui/material'

import { gameController } from '../controller'

export const GamePage = () => {

  const { addGame } = gameController()

  return (
    <>
      <h1>game</h1>
      <Button
        onClick={ () => addGame({
          id: 'qw',
          startDate: 'hoy',
          endDate: 'tomorrow',
          status: false,
          teams: []
        }) }
      >
        Click pa agregar!
      </Button>
    </>
  )
}

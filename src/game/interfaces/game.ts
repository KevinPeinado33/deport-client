import { ITeam } from '@/team/interfaces'

export interface IGame {
    
    id       : string
    startDate: string
    endDate  : string
    status   : boolean
    winner   : ITeam
    teams    : ITeam[ ]

}

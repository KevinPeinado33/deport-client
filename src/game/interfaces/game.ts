import { ITeam } from '@/team/interfaces'

export interface IGame {
    
    _id      : string
    startDate: string
    endDate  : string
    status   : boolean
    winner   : ITeam
    teams    : ITeam[ ]

}

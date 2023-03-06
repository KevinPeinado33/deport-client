import { IMember } from './'

export interface ITeam {

    _id            : string
    name           : string
    numberOfMembers: number
    startDate      : string
    status         : boolean
    members        : IMember[ ]
}

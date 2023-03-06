export interface IMember {
    
    id       : string
    firstName: string
    lastName : string
    age      : string
    dni      : string
    role     : RoleTeam
    
}

type RoleTeam = [ 'lider', 'asistente', 'arquero', 'delantero' ]

export interface Job {
  idJob: number
  fechaPublicacion?: string
  slug: string
  nombreJob: string
  empresa: string
  tipoContrato: string
  ubicacion: string
  stateJobCall: boolean
  descripcion: string
  specialityJob: RequirementItem[]
  destacado: boolean
}

export interface RequirementItem {
  title: string
  dataJob: string[]
}

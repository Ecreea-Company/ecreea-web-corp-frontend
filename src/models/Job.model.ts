export interface Job {
  idJob: number
  fechaPublicacion: string
  slug: string
  nombreJob: string
  empresa: string
  tipoContrato: string
  ubicacion: string
  stateJobCall: boolean
  descripcion: string
  specialityJob: RequirementJob
}

export interface RequirementJob {
  areaTrabajo: string[]
  beneficios: string[]
  funciones: string[]
  competencias: string[]
  carreras: string[]
  conocimientoDeseado: string[]
  idiomas: string
  modalidadTrabajo: string
}

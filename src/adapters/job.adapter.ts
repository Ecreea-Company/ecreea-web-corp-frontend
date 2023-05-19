import { Job } from '@/models'

export const adapterJobs = (data: any): Job[] => {
  const newJobs = data.map(
    (data: any): Job => ({
      idJob: data.id,
      fechaPublicacion: new Date(data.attributes.createdAt).toLocaleDateString(
        'es-ES',
        { day: 'numeric', month: 'long', year: 'numeric' }
      ),
      slug: data.attributes.slug,
      nombreJob: data.attributes.nombre_puesto,
      empresa: data.attributes.compania.data.attributes.nombre,
      tipoContrato: data.attributes.tipo_contrato.data.attributes.nombre,
      ubicacion: data.attributes.ubicacion.data.attributes.nombre,
      stateJobCall: data.attributes.convocatoria_cerrada,
      descripcion: data.attributes.descripcion,
      specialityJob: {
        areaTrabajo: data.attributes.area_trabajo.data.attributes.nombre,
        beneficios: data.attributes.beneficios.map(
          (beneficio: any) => beneficio.nombre
        ),
        funciones: data.attributes.funciones.map(
          (funcion: any) => funcion.nombre
        ),
        competencias: data.attributes.competencias.map(
          (competencia: any) => competencia.nombre
        ),
        carreras: data.attributes.carreras.map(
          (carrera: any) => carrera.nombre
        ),
        conocimientoDeseado: data.attributes.conocimiento_deseado.map(
          (conocimiento: any) => conocimiento.nombre
        ),
        idiomas: data.attributes.idiomas,
        modalidadTrabajo:
            data.attributes.modalidad_trabajo.data.attributes.nombre
      }
    })
  )

  return newJobs
}

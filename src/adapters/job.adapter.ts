import { Job } from '@/models'

export const adapterJobs = (data: any): Job => {
  const newData: Job = {
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
    specialityJob: [
      { title: 'Área de trabajo', dataJob: [data.attributes.area_trabajo.data.attributes.nombre] },
      { title: 'Beneficios', dataJob: data.attributes.beneficios.map((beneficio: any) => beneficio.nombre) },
      { title: 'Funciones', dataJob: data.attributes.funciones.map((funcion: any) => funcion.nombre) },
      { title: 'Competencias', dataJob: data.attributes.competencias.map((competencia: any) => competencia.nombre) },
      { title: 'Carreras', dataJob: data.attributes.carreras.map((carrera: any) => carrera.nombre) },
      { title: 'Conocimiento deseados', dataJob: data.attributes.conocimiento_deseado.map((conocimiento: any) => conocimiento.nombre) },
      { title: 'Idioma', dataJob: [data.attributes.idiomas] },
      { title: 'Modalidad de Trabajo', dataJob: [data.attributes.modalidad_trabajo.data.attributes.nombre] }
    ],
    destacado: data.attributes.destacado
  }

  return newData
}

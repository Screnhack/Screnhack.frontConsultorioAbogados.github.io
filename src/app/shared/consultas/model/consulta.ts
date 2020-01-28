
export class Consulta {
    id: number;
    nombre: string;
    identificacion: string;
    celular: string;
    tipoConsultoria: string;
    estado: string = 'PENDIENTE';
    fechaConsulta: Date;
}
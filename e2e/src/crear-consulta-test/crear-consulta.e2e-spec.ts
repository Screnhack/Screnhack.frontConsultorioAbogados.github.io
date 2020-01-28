import { CrearConsultaPage } from './crear-consulta.po';

describe('Prueba de Creacion de consulta', function(){
    let crearConsultaPage: CrearConsultaPage;

    const NOMBRE_CLIENTE: string = "Andres Moreno";
    const IDENTIFICACION: string = '1520365488';
    const CELULAR : string = '3154862598';
    const FECHA_CONSULTA: string = '02-05-2020';
    const TIME_SLEEP: number = 6000;

    beforeEach(async() => {
        crearConsultaPage = new CrearConsultaPage;
        await crearConsultaPage.navigateTo();
    });
    
    it('Verificar Pantalla Crear Consulta Abogado', async() =>{
        expect(crearConsultaPage.getTituloText().getText()).toEqual('Crear consulta de abogado');
    });
    
    it('Crear Consulta Abogado',  async() => {
        await crearConsultaPage.setNombreCliente(NOMBRE_CLIENTE);
        await crearConsultaPage.setIdentificacionCliente(IDENTIFICACION);
        await crearConsultaPage.setCelularCliente(CELULAR);
        await crearConsultaPage.setSelectTipoConsulta();
        await crearConsultaPage.setFechaConsulta(FECHA_CONSULTA);
        await crearConsultaPage.getBotonCrearConsulta();
        await crearConsultaPage.getBotonAceptarCreacionConsulta();
        expect(crearConsultaPage.getRespuestaCrearConsultaText().getText()).toEqual('Registro de Consulta Abogado Exitosa');
    });
})
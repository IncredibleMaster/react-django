import React,{useEffect, useState} from 'react';
import Tabla from '../components/tabla';
import apiService from '../config/apiService';
import ListHeader from '../components/listHeader';

const Zonas = () => {
    const ENDPOINT = 'zonas';

    const columnas = ['ID', 'Nombre', 'Cantidad de estructuras'];
    const refColumnas = ['id', 'nombre', 'estructuras'];
    const refPropsColumnas = ['', '', 'length'];
    const linkBase = '/zonas';
    const alineacionesColumnas = ['c', 'l', 'c'];

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await apiService(ENDPOINT, 'GET');
            setData(response);
        }
        getData();
    }, [])

    return(
        <div className="main container">
            <ListHeader titulo="Zonas"/>
            <Tabla  columnas={columnas}
                    data={data}
                    refColumnas={refColumnas}
                    refPropsColumnas={refPropsColumnas}
                    linkBase={linkBase}
                    alineacionesColumnas={alineacionesColumnas}/>
        </div>
    );
};

export default Zonas;
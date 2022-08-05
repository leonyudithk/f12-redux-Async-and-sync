import React from 'react';
import { Button, Table } from 'react-bootstrap';


const ListarCitas = () => {
    
    return (
        <div  style={{margin: '5%', marginLeft: '10%', marginRight: '10%'}}>
            <Table striped bordered hover variant="info">
                <thead>
                    <tr style={{textAlign: 'center'}}>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Telefono</th>
                        <th>Síntoma</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
               
                        <tr >
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            
                            <Button type="button" variant="outline-danger" >Eliminar</Button>
                            <Button type="button" variant="outline-info" >Editar</Button>
                            <Button type="button" variant="outline-warning" >Detalle</Button>
                        </td>
                    </tr>
               
                    
                </tbody>
            </Table>
          
        </div>
    );
};

export default ListarCitas;
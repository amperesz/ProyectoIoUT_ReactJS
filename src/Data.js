import React, { useEffect, useState } from 'react';
import * as AWS from 'aws-sdk';

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataFromDynamoDB();
  }, []);

  const fetchDataFromDynamoDB = async () => {
    const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
    const params = {
      TableName: 'wx_data',
    };
    try {
      const response = await dynamodb.scan(params).promise();
      const items = response.Items.map((item) => AWS.DynamoDB.Converter.unmarshall(item));
      items.sort((a, b) => b.sample_time - a.sample_time);

      const formattedItems = items.map((item) => {
        const date = new Date(item.sample_time);
        const formdate = date.toLocaleString('sv');
        return {
          ...item,
          sample_time: formdate, // Combina la fecha y la hora en el formato deseado
        };
      });

      setData(formattedItems)      
    } catch (error) {
      console.error('Error al obtener datos de DynamoDB', error);
    }
  };

  return (
    <div>
      <h1 style={titleStyle}>Tabla de Datos</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerCellStyle}>Timestamp</th>
              <th style={headerCellStyle}>Device</th>
              <th style={headerCellStyle}>TempC1</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={cellStyle}>{item.sample_time}</td>
                <td style={cellStyle}>{item.device_id}</td>
                <td style={cellStyle}>{item.device_data.TempC1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const titleStyle = {
    textAlign: 'center', // Centra el título horizontalmente
  };

const tableStyle = {
    borderCollapse: 'collapse',
    width: '80%', // Ajusta el ancho de la tabla según tus preferencias
    border: '2px solid blue', // Agrega bordes azules
  };
  
  const headerCellStyle = {
    border: '1px solid blue', // Agrega bordes azules a las celdas del encabezado
    padding: '8px', // Espacio interior para mejorar el aspecto
    textAlign: 'center', // Centra el contenido en las celdas
    backgroundColor: '#f2f2f2', // Color de fondo para las celdas de encabezado
  };
  
  const cellStyle = {
    border: '1px solid blue', // Agrega bordes azules a las celdas
    padding: '8px', // Espacio interior para mejorar el aspecto
    textAlign: 'center', // Centra el contenido en las celdas
  };
  


export default Data;

import React, { useEffect, useState } from "react";
import { fetchTipogrupos } from "../../api/dataService"; // Asegúrate de que tengas una función fetchTipogrupos
import 'devextreme/data/odata/store';
import DataGrid, { Column } from 'devextreme-react/data-grid';

export default function Tipogrupo() {
  const [tipogruposWithGroupCount, setTipogruposWithGroupCount] = useState([]);

  useEffect(() => {
    fetchTipogrupos() // Debes tener una función para obtener datos de Tipogrupo
      .then((response) => {
        const tipogruposData = response.data;

        console.log(tipogruposData);

        setTipogruposWithGroupCount(tipogruposData.map(tipogrupo => ({
          id: tipogrupo.id,
          name: tipogrupo.name,
          groupCount: tipogrupo.grupos ? tipogrupo.grupos.length : 0
        })));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <DataGrid
      dataSource={tipogruposWithGroupCount}
      showBorders={true}
    >
      <Column dataField="id" width={150} alignment="center" />
      <Column dataField="name" alignment="center" />
      <Column dataField="groupCount" alignment="center" caption="Number of Groups" />
    </DataGrid>
  );
}

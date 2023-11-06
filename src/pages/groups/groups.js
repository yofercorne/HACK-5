import React, { useEffect, useState } from "react";
import { fetchGroups } from "../../api/dataService";
import 'devextreme/data/odata/store';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import './groups.scss';

export default function Group() {
  const [groupsWithPersonCount, setGroupsWithPersonCount] = useState([]);

  useEffect(() => {
    fetchGroups()
      .then((response) => {
        const groupsData = response.data;
        console.log(groupsData);

        setGroupsWithPersonCount(groupsData.map(group => ({
          id: group.id,
          name: group.name,
          personCount: group.persons ? group.persons.length : 0,
          tipoGrupo: group.tipogrupo
        })))
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  const scoreCellRender = (data) => {
    const scoreValue = data.value; 
    let cellBackgroundColor = "white";

    if (scoreValue <= 10) {
      cellBackgroundColor = "lightgreen";
    } else if (scoreValue > 20) {
      cellBackgroundColor = "lightcoral";
    }

    return <div style={{ background: cellBackgroundColor }}>{scoreValue}</div>;
  };

  return (
    <DataGrid
      dataSource={groupsWithPersonCount}
      showBorders={true}
      className="custom-data-grid"
    >
      <Column dataField="id" width={150} alignment="center" cellRender={scoreCellRender} />
      <Column dataField="name" alignment="center" cellRender={scoreCellRender} />
      <Column dataField="personCount" caption="Number of Persons" alignment="center" cellRender={scoreCellRender} />
      {/* Agrega la columna para mostrar el tipo de grupo */}
      <Column dataField="tipoGrupo.name" caption="Tipo de Grupo" alignment="center" />
    </DataGrid>
  )
}

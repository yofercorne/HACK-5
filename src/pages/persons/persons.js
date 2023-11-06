import React, { useEffect, useState } from "react";
import { fetchPersons } from "../../api/dataService";
import 'devextreme/data/odata/store';
import DataGrid, { Column } from 'devextreme-react/data-grid';

export default function Person() {
 
  const [personsWithPersonCount, setPersonsWithPersonCount] = useState([]);

  
  useEffect(() => {
    fetchPersons()
      .then((response) => {
        const personsData = response.data;

        console.log(personsData);
   
        setPersonsWithPersonCount(personsData.map(person => ({
          id: person.id,
          name: person.name,
          score: person.score,
          groupCount: person.grupos ? person.grupos.length : 0    
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
      dataSource={personsWithPersonCount}
      
      showBorders={true}
    >
      <Column dataField="id" width={150} alignment="center"  cellRender={scoreCellRender} />
      
      
      <Column dataField="name" alignment="center" />
      
     

      <Column dataField="groupCount" alignment="center"  caption="Number of Groups" />
    </DataGrid>
  )
}

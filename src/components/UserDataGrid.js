import React, { useEffect, useState } from 'react';
import DataGrid, { Column, Paging, Pager } from 'devextreme-react/data-grid';
import 'devextreme/data/odata/store';
import { fetchGroups } from '../api/dataService';

const UserDataGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchGroups()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <DataGrid
      dataSource={data}
      keyExpr="id"
    >
      <Column dataField="name" caption="Group Name" />
      <Column dataField="personCount" caption="Number of Persons" />
      <Paging defaultPageSize={10} />
      <Pager
        showPageSizeSelector={true}
        allowedPageSizes={[5, 10, 20]}
        showInfo={true}
      />
    </DataGrid>
  );
};

export default UserDataGrid;

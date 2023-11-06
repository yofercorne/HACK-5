import 'devextreme/dist/css/dx.common.css';
import './themes/generated/theme.base.css';
import './themes/generated/theme.additional.css';
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './dx-styles.scss';
import LoadPanel from 'devextreme-react/load-panel';
import { NavigationProvider } from './contexts/navigation';
import { AuthProvider, useAuth } from './contexts/auth';
import { useScreenSizeClass } from './utils/media-query';
import Content from './Content';
import UnauthenticatedContent from './UnauthenticatedContent';
import UserDataGrid from './components/UserDataGrid'; // Importa el nuevo componente

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadPanel visible={true} />;
  }

  if (user) {
    return (
      <Content>
        {/* Agrega una nueva ruta para el componente UserDataGrid */}
        <Route path="/user-data-grid">
          <UserDataGrid />
        </Route>
      </Content>
    );
  }

  return <UnauthenticatedContent />;
}

export default function Root() {
  const screenSizeClass = useScreenSizeClass();

  return (
    <Router>
      <AuthProvider>
        <NavigationProvider>
          <div className={`app ${screenSizeClass}`}>
            <App />
          </div>
        </NavigationProvider>
      </AuthProvider>
    </Router>
  );
}

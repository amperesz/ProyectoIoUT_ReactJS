import logo from './logo.svg';
import './App.css';
import MyRoutes from './Routes'; // Cambia el nombre de la importación

function App() {
  return (
    <div>
      {/* Header */}
      <header style={headerStyle}>
        <div style={logoStyle}>
          <a href="/">
            <img src={logo} alt="Logo" style={logoImgStyle} />
          </a>
        </div>
        <div style={buttonContainerStyle}>
          <a href="/dashboard" style={buttonStyle}>Dashboard</a>
          <a href="/data" style={buttonStyle}>Ver datos</a>
        </div>
      </header>

      <main>
        <MyRoutes /> {/* Usa el componente importado con el nuevo nombre */}
      </main>
    </div>
  );
}

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  backgroundColor: '#333',
  color: '#fff',
};

const logoStyle = {
  flex: 1,
};

const logoImgStyle = {
  maxWidth: '50px',
  maxHeight: '50px',
};

const buttonContainerStyle = {
  display: 'flex',
};

const buttonStyle = {
  marginRight: '10px',
  padding: '5px 10px',
  background: 'blue',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

export default App;

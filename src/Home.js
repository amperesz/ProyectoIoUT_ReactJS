import React from 'react';

const Home = () => {
  return (
    <div style={contentContainerStyle}>
        <div style={backgroundImageStyle} />
        <div style={textBoxStyle}>
            <h1>Proyecto IoUT - Grupo 2</h1>
            <p>Red de Sensores Inalámbricos para la detección y monitoreo de derrames de petroleo.</p>
        </div>
    </div>
  );
};

const contentContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 100px)',
    position: 'relative', // Permite posicionar elementos dentro de este contenedor
  };
  
  const backgroundImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/ruta-de-la-imagen-de-fondo.jpg")', // Ruta de tu imagen de fondo
    backgroundSize: 'cover', // Ajusta el tamaño de la imagen al contenedor
    opacity: 0.6, // Ajusta la opacidad de la imagen de fondo
    zIndex: -1, // Coloca la imagen detrás del contenido
  };
  
  const textBoxStyle = {
    textAlign: 'center',
    zIndex: 1, // Asegura que el contenido esté delante de la imagen de fondo
  };

export default Home;

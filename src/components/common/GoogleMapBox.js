const containerStyle = {
  width: '100%',
  height: '230px',
  zIndex: 1,
};

const GoogleMapBox = ({ center }) => {
  const src = `https://www.google.com/maps/embed/v1/view?key=AIzaSyDVUsf7YSkTVJ5pbG5OZlBXrbrCUMD1dVQ&center=${center.lat},${center.lng}&zoom=20`;
  return <iframe title="Google Map" src={src} style={containerStyle} />;
};

export default GoogleMapBox;

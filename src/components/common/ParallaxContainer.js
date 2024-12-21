import { Parallax, Background } from 'react-parallax';

const ParallaxContainer = ({ children, url, strength }) => {
  return (
    <Parallax strength={strength} bgImage={url}>
      {children}
    </Parallax>
  );
};

export default ParallaxContainer;

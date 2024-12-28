import styled from 'styled-components';
import Container from '../common/Container';
import { InstagramOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import FooterImage1 from '../../images/Footer_img1.jpg';
import FooterImage2 from '../../images/Footer_img2.jpg';
import FooterImage3 from '../../images/Footer_img3.jpg';
import FooterImage4 from '../../images/Footer_img4.jpg';
import FooterImage5 from '../../images/Footer_img5.jpg';
import FooterImage6 from '../../images/Footer_img6.jpg';

const FootImage = {
  img1: FooterImage1,
  img2: FooterImage2,
  img3: FooterImage3,
  img4: FooterImage4,
  img5: FooterImage5,
  img6: FooterImage6,
};

const FooterContent = styled.div`
  background-color: #333333;
  min-height: 360px;
`;

const FooterSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  color: #b0b0b0;
  gap: 120px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const FooterFollow = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterImagesBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const Image = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
`;

const Footer = () => {
  return (
    <FooterContent>
      <Container>
        <FooterSection>
          <FooterText>
            <p>讓夜晚多一點溫度，讓故事多一些餘韻</p>
            <p>月下相伴，情懷永存</p>
          </FooterText>
          <FooterInfo>
            <p>懷舊風華，微醺時光</p>
            <p>月光下的相遇，每一次都是緣分的開始</p>
            <p>訂位專線:0938 552 051</p>
            <p>台中市西屯區杏林路57號</p>
            <IconBox>
              <StyledLink to="https://www.instagram.com/xuyue.bistro/">
                <InstagramOutlined style={{ fontSize: '24px' }} />
              </StyledLink>
              {/* <FacebookOutlined style={{ fontSize: '24px' }} /> */}
            </IconBox>
          </FooterInfo>
          <FooterFollow>
            <p>FOLLOW ME</p>
            <FooterImagesBox>
              {Object.values(FootImage).map((image, index) => (
                <Link key={index} to="https://www.instagram.com/xuyue.bistro/">
                  <Image src={image} height={100} width={100} />
                </Link>
              ))}
            </FooterImagesBox>
          </FooterFollow>
        </FooterSection>
      </Container>
    </FooterContent>
  );
};

export default Footer;

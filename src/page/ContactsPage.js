import styled from 'styled-components';
import DefaultLayout from '../components/layout/DefaultLayout';
import BannerImage from '../images/contactsImages/Banner_img.jpg';
import { HomeFilled, InstagramOutlined, PhoneFilled } from '@ant-design/icons';
import ParallaxContainer from '../components/common/ParallaxContainer';
import GoogleMapBox from '../components/common/GoogleMapBox';
import { Link } from 'react-router-dom';

const ContactsBanner = styled.div`
  width: 100%;
  height: 440px;
  background-image: url(${BannerImage});
  background-position: center 80%;
  background-size: cover;
  box-sizing: border-box;
`;

const ContactsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 70%;
  padding: 60px 0;
  gap: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: white;
  opacity: 0.65;
`;

const ContactsTitle = styled.div`
  font-size: 40px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const ContactsContent = styled.div`
  opacity: 0;
  transform: translateX(500px);
  animation: fadeIn 1s ease forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ContactsBox = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const ContactsListTitle = styled.div`
  font-size: 40px;

  margin-bottom: 20px;
`;

const ContactsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactsInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
`;

const MapCenter = {
  lat: 24.16781530476988,
  lng: 120.64274243730885,
};

const InstagramLink = styled(Link)`
  color: black;
`;

const ContactsPage = () => {
  return (
    <DefaultLayout>
      <ContactsBanner />
      <ContactsTitle>聯絡我們</ContactsTitle>
      <ContactsContent>
        <ParallaxContainer strength={500} url={BannerImage}>
          <Box />
          <ContactsSection>
            <GoogleMapBox center={MapCenter} />
            <ContactsBox>
              <ContactsListTitle>台中總店</ContactsListTitle>
              <ContactsList>
                <ContactsInfo>
                  <HomeFilled style={{ fontSize: '24px' }} />
                  <span>
                    台中市西屯區杏林路57號
                    <br />
                    No. 57, Xinglin Rd., Xitun Dist., Taichung City,Taiwan (R.O.C.)
                  </span>
                </ContactsInfo>
                <ContactsInfo>
                  <PhoneFilled style={{ fontSize: '24px' }} />
                  <div>0938-552-051</div>
                </ContactsInfo>
                <InstagramLink to="https://www.instagram.com/xuyue.bistro/">
                  <InstagramOutlined style={{ fontSize: '24px' }} />
                </InstagramLink>
              </ContactsList>
            </ContactsBox>
          </ContactsSection>
        </ParallaxContainer>
      </ContactsContent>
    </DefaultLayout>
  );
};

export default ContactsPage;

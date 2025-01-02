import styled from 'styled-components';
import DefaultLayout from '../components/layout/DefaultLayout';
import ParkingBannerImage from '../images/parkingImages/Parking_img.jpg';
import GoogleMapBox from '../components/common/GoogleMapBox';

const ParkingBanner = styled.div`
  width: 100vh;
  height: 40vh;
  background-image: url(${ParkingBannerImage});
  background-position: center 50%;
  background-size: cover;
  box-sizing: border-box;
  margin: auto;
  margin-top: 80px;
`;

const ParkingSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ParkingTitle = styled.div`
  font-size: 40px;
  margin-top: 50px;
`;

const ParkingInfo = styled.div`
  display: flex;
  width: 50%;
  margin-top: 50px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ParkingInfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const ParkingName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ParkingAddress = styled.div`
  color: #3b3d42;
  margin-top: 16px;
`;

const MapCenter1 = {
  lat: 24.16683680430814,
  lng: 120.64021551134972,
};

const MapCenter2 = {
  lat: 24.16449808837629,
  lng: 120.64222399139257,
};

const ParkingPage = () => {
  return (
    <DefaultLayout>
      <ParkingBanner />
      <ParkingSection>
        <ParkingTitle>停車資訊</ParkingTitle>
        <ParkingInfo>
          <ParkingInfoBox>
            <ParkingName>秋虹谷收費停車場</ParkingName>
            <ParkingAddress>台中市西屯區河南路三段49號</ParkingAddress>
          </ParkingInfoBox>
          <GoogleMapBox center={MapCenter1} />
        </ParkingInfo>
        <ParkingInfo>
          <ParkingInfoBox>
            <ParkingName>惠新收費停車場</ParkingName>
            <ParkingAddress>台中市西屯區市政北七路44號(新光三越旁)</ParkingAddress>
          </ParkingInfoBox>
          <GoogleMapBox center={MapCenter2} />
        </ParkingInfo>
      </ParkingSection>
    </DefaultLayout>
  );
};

export default ParkingPage;

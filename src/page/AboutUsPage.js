import styled from 'styled-components';
import DefaultLayout from '../components/layout/DefaultLayout';
import AboutImage from '../images/aboutUsImages/AboutUs_img1.jpg';
import AboutBannerImage from '../images/aboutUsImages/AboutUs_img2.jpg';

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  width: 60%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 80px;
  margin-top: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  font-size: 18px;
  color: #7b7e81;
`;

const TextImage = styled.div`
  background-image: url(${AboutImage});
  width: 360px;
  height: 100%;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 360px;
    height: 400px;
  }
`;

const AboutBanner = styled.div`
  width: 60%;
  height: 40vh;
  background-image: url(${AboutBannerImage});
  background-position: center 75%;
  background-size: cover;
  box-sizing: border-box;
  margin: auto;
  margin-top: 80px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const AboutUsPage = () => {
  return (
    <DefaultLayout>
      <ContainerBox>
        <h1>關於我們</h1>
        <TextBox>
          <TextImage />
          <Text>
            <p>敘月餐酒館</p>
            <br />
            <p>以懷舊與復古為靈感，</p>
            <p>打造一個專屬於你的放鬆空間。</p>
            <p>無論是與三五好友暢談人生，</p>
            <p>還是靜靜享受屬於自己的時光，</p>
            <p>我們都在這裡，</p>
            <p>陪伴你度過每一個月下的微醺時刻。</p>
            <p>在這裡，</p>
            <p>每一道料理都是一段故事，</p>
            <p>每一杯酒都蘊藏著情感。</p>
            <p>我們希望，</p>
            <p>你的故事能與我們的月光交織，</p>
            <p>成為美好回憶的一部分。</p>
          </Text>
        </TextBox>
        <AboutBanner />
      </ContainerBox>
    </DefaultLayout>
  );
};

export default AboutUsPage;

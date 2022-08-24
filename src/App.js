import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import "./styles/font.scss";
import React from "react";

export default function App() {
  const Header = styled.header`
    font-family: "LeferiPoint-BlackA", sans-serif;
    width: inherit;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .spline {
      position: absolute;
      margin: 0;
      top: 0;
      left: 0;
      right: 0;
    }
  `;
  const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Content = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    display: flex;
    justify-content: space-around;
    span {
      font-size: 100px;
      margin: 0;
    }
  `;
  const Section = styled.section`
    width: 1200px;
    padding: 20px;
  `;
  const SectionTile = styled.h2`
    font-family: "LeferiPoint-BlackA", sans-serif;
    font-size: 50px;
    text-align: center;
    margin-bottom: 100px;
  `;
  const TextBox = styled.p`
    width: 50%;
    font-size: 20px;
    line-height: 2;
    p {
      margin-bottom: 20px;
    }
  `;
  const Profile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .profile_img {
      background: red;
      width: 350px;
      height: 350px;
      border-radius: 50%;
    }
  `;
  const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-around;
  `;
  const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    width: 30%;
  `;
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header>
          <Spline
            className="spline"
            scene="https://prod.spline.design/zAaQMq2UJFoYEqA3/scene.splinecode"
          />
          <Content>
            <span>당신의</span>
            <span>이야기^^</span>
          </Content>
        </Header>
      </Wrapper>
      <Wrapper>
        <Section>
          <SectionTile>저를 소개합니다~^^</SectionTile>
          <ContentWrapper>
            <TextBox>
              <h3>간단한 신상 공개</h3>
              <p>
                이름: 이소연(써니)
                <br />
                영어이름이 써니인 이유: 그냥 본명이랑 이니셜 비슷하고 외우기
                쉬워서
                <br />
                1997년 6월 22일생 <br />
                서울에서 태어났지만 가장 오래 지낸 곳은 광주
              </p>
              <h3>사주, 성격유형 TMI</h3>
              <p>
                일주 동물: 푸른양🐑 <br />
                사주에 🔥랑 식상이 많다 <br />
                INTJ
              </p>
              <p>
                무언가에 꽂히면 일단 지르고 보는 성향이 강함😛 <br />
                대신 관심 없는 건 쳐다보지도 않음🙁 <br />
              </p>
            </TextBox>
            <Profile>
              <div className="profile_img"></div>
            </Profile>
          </ContentWrapper>
        </Section>
      </Wrapper>
      <Wrapper>
        <Section>
          <SectionTile>운칠기삼 합류 전 - 미대에 가다</SectionTile>
          <ContentWrapper>
            <TextBox>
              <h3>애니과에 가게 된 계기🤓</h3>
              <p>
                스타워즈, Wow(게임) 매니아인 아빠의 유전자를 물려받아 자연스럽게
                덕후가 됨.
                <br />
                만화보다는 해외에서 만든 합성 영상이나 애니메이션을 좋아했음
                <br />
                그림을 그리는 걸 좋아하기도 해서 애니메이션으로 유명한 모 대학에
                입학함
              </p>
              <h3>애니과에서 뭐 배움?🤔</h3>
              <p>
                3D 애니: 모델링부터 리깅, 애니메이팅, 라이팅, VFX
                <br />
                공통으로 배우는 것: 영화 연출, 크로키, 컨셉 아트, 음향, 연기,
                <br />
                컴퓨터 앞에서 기도와 명상의 시간 갖기
                <br />
                애니메이션 제작에 필요한 기본적인 것들을 공부한다. <br />
                기본적으로 영상을 다루기 때문에 웹툰 생각하고 들어오면 후회와
                지옥을 맛보게 된다 <br />
              </p>
              <img src="img/tired.jpg" width={200} alt="힘든짤" />
              <img src="img/tired2.gif" width={200} alt="힘든짤2" />
            </TextBox>
            <ImageBox>
              <div>
                <img src="img/dolphin.png" width={450} alt="3D작1" />
                <span>신입생 라이팅 수업 때 만든 거</span>
              </div>
            </ImageBox>
          </ContentWrapper>
        </Section>
      </Wrapper>
      <Wrapper>
        <SectionTile>대학시절 작업물들~</SectionTile>
        <ContentWrapper></ContentWrapper>
      </Wrapper>
      <Wrapper>
        <Section>
          <SectionTile>운칠기삼 합류 전 - 대학 졸업 후</SectionTile>
          <ContentWrapper>
            <TextBox>
              <h3>즐거운 인턴 생활🦧</h3>
              <p>
                컨텐츠 관련 공공기관에 4개월동안 체험형 인턴으로 근무
                <br />
                체험형 인턴 특: 시간 더럽게 안감(노잼)
                <br />
                너~무 한가해서 엑셀로 컴활 공부하고 연구집만 읽음
                <br />
                인턴하면서 알게 된 것: 우리나라 컨텐츠 업계가 아웃풋에 비해 많이
                열악함 <br />
                마지막 날에 직원분들과 티타임을 가졌는데 아직 젊으니까 더 많은
                걸 공부해보라고 함
                <br />그 때부터 갓수 생활 시작 <br />
                <img src="img/doge.png" width={200} alt="댕댕이" />
              </p>
              <h3>신나는 갓수 생활😉</h3>
              <p>
                모아놓은 돈으로 운동도 하고, 중국어랑 일본어 공부하고, 동생이랑
                같이 게임도 만들어봄
                <br />
                돈이 떨어지면 그림을 팔아서 충당함 (오타쿠는 돈이 된다)
                <br />
                해외 스튜디오에서 만든 포트폴리오 사이트를 보고 코딩을 하기로
                결심 <br />
                처음엔 퍼블리셔가 되려고 했었는데 계속 포트폴리오를 만들다보니
                운칠기삼에 개발자로 입사하게 됐다
                <br />
              </p>
            </TextBox>
            <div></div>
          </ContentWrapper>
        </Section>
      </Wrapper>
    </>
  );
}

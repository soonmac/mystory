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
              <p>
                이름: 이소연(써니)
                <br />
                1997년 6월 22일생 <br />
                영어이름이 써니인 이유: 그냥 본명이랑 이니셜 비슷하고 외우기
                쉬워서
                <br />
                서울에서 태어났지만 가장 오래 지낸 곳은 광주
              </p>
              <p>
                일주 동물: 푸른양 <br />
                INTJ
              </p>
              <p>
                무언가에 꽂히면 일단 지르고 보는 성격 <br />
                대신 관심 없는 건 쳐다보지도 않음ㅠㅠ <br />
              </p>
            </TextBox>
            <Profile>
              <div className="profile_img"></div>
            </Profile>
          </ContentWrapper>
        </Section>
      </Wrapper>
    </>
  );
}

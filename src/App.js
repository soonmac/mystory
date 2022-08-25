import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import "./styles/font.scss";
import { React, useRef, useEffect, useState } from "react";
import { Carousel } from "./Carousel/Carousel";

const Header = styled.header`
  font-family: "LeferiPoint-BlackA", sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .spline {
    width: 100%;
    @media screen and (max-width: 500px) {
      width: 50%;
    }
  }
`;
const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Headline = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  display: flex;
  justify-content: space-around;
  span {
    font-size: 6.25em;
    margin: 0;
  }
`;
const Section = styled.section`
  width: 1200px;
  min-height: 1000px;
  padding: 20px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const SectionTile = styled.h2`
  font-family: "LeferiPoint-BlackA", sans-serif;
  font-size: 50px;
  text-align: center;
  margin-bottom: 100px;
`;
const TextBox = styled.p`
  width: 70%;
  font-size: 18px;
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
    @media screen and (max-width: 500px) {
      width: 200px;
      height: 200px;
    }
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 30%;
`;

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [divHeight, setDivHeight] = useState(0);
  const [isTransparent, setTransparnet] = useState(true);
  const ref = useRef(null);
  useEffect(() => {
    (() => {
      setDivHeight(ref.current.clientHeight);
      window.addEventListener("scroll", () => setScrollY(window.pageYOffset));
      if (scrollY > divHeight + 100) {
        setTransparnet(false);
      } else if (scrollY < divHeight + 100) {
        setTransparnet(true);
      }
    })();
    return () => {
      window.removeEventListener("scroll", () => {
        setScrollY(window.pageYOffset);
      });
    };
  });

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header ref={ref}>
          {isTransparent ? (
            <Spline
              className="spline"
              scene="https://prod.spline.design/zAaQMq2UJFoYEqA3/scene.splinecode"
            />
          ) : (
            <img className="spline" src="img/heroImage.png" alt="3d대체" />
          )}
          <Headline>
            <span>당신의</span>
            <span>이야기^^</span>
          </Headline>
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
                서울에서 태어났지만 가장 오래 지낸 곳은 광주 <br />
                운칠기삼에서 프론트엔드 개발자로 일하고 있음
              </p>
              <h3>사주, 성격 TMI</h3>
              <p>
                일주 동물: 푸른양🐑 <br />
                사주에 🔥랑 식상이 많다 <br />
                INTJ
                <br />
                무언가에 꽂히면 일단 지르고 보는 성향이 강함😛 <br />
                대신 관심 없는 건 쳐다보지도 않음🙁 <br />
              </p>
              <p>
                <h3>좋아하는 것</h3>
                빽다방 완전초코바나나, 중국음식, 유튜브 탐방
                <h3>싫어하는 것</h3>
                수박(비린맛 남)
              </p>
            </TextBox>
            <Profile>
              <img src="img/profile.png" alt="프로필사진"></img>
            </Profile>
          </ContentWrapper>
        </Section>
      </Wrapper>
      <Wrapper>
        <Section>
          <SectionTile>운칠기삼 합류 전</SectionTile>
          <ContentWrapper>
            <TextBox>
              <h3>애니메이션을 전공🤓</h3>
              <p>
                스타워즈, 와우(게임) 매니아인 아빠의 유전자를 물려받아
                자연스럽게 덕후가 됨.
                <br />
                만화보다는 해외에서 만든 합성 영상이나 애니메이션을 좋아했음
                <br />
                그림을 그리는 걸 좋아하기도 해서 애니메이션으로 유명한 모 대학에
                입학함 <br />
                3D가 멋있어보여서 3D 애니메이션을 공부함
              </p>
              <h3>애니과에서 뭐 배움?🤔</h3>
              <p>
                3D 애니: 모델링부터 리깅, 애니메이팅, 라이팅, VFX 등..
                <br />
                공통으로 배우는 것: 영화 연출, 크로키, 컨셉 아트, 음향, 연기
                등등...
                <br />
                애니메이션 제작에 필요한 기본적인 것들을 공부한다 <br />
                컴퓨터 앞에서 기도와 명상의 시간 갖는 법을 깨닫게 된다
                <br />
              </p>
              <img src="img/tired.jpg" width={200} alt="힘든짤" />
              <img src="img/tired2.gif" width={200} alt="힘든짤2" />
            </TextBox>
            <ImageBox>
              <figure>
                <img src="img/dolphin.png" width={450} alt="3D작1" />
                <figcaption>새내기 라이팅 수업에서 만든 거</figcaption>
              </figure>
              <figure>
                <img
                  src="img/grapheditor.jpg"
                  width={450}
                  alt="그래프 에디터"
                />
                <figcaption>
                  3D의 움직임을 만들 때 쓰는 그래프 에디터
                </figcaption>
              </figure>
            </ImageBox>
          </ContentWrapper>
        </Section>
      </Wrapper>
      <div style={{ height: "100vh" }}>
        <SectionTile>대학시절 작업물 공개</SectionTile>
        <Carousel />
      </div>
      <Wrapper>
        <Section>
          <SectionTile>운칠기삼 합류 전 - 대학 졸업 후</SectionTile>
          <ContentWrapper>
            <TextBox>
              <h3>즐거운 인턴 생활🦧</h3>
              <p>
                한국콘텐츠진흥원에서 4개월동안 체험형 인턴으로 근무
                <br />
                체험형 인턴 특: 시간 더럽게 안감(노잼)
                <br />
                너~무 한가해서 엑셀로 컴활 공부하고 연구집만 읽음
                <br />
                인턴하면서 알게 된 것: 우리나라 컨텐츠 업계가 아웃풋에 비해 많이
                열악함 <br />
                마지막 날에 직원분들이 아직 젊으니까 다양한 걸 공부해보라고 함
                <br />
                그렇게 갓수 생활 시작
                <br />
                <img src="img/doge.png" width={200} alt="댕댕이" />
              </p>
              <h3>신나는 갓수 생활😉</h3>
              <p>
                모아놓은 돈으로 운동도 하고, 중국어랑 일본어도 공부하고, <br />
                동생이랑 같이 게임도 만들어봄
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
            <ImageBox>
              <figure>
                <img src="img/gallery_01.png" alt="3d 작업물" width={500} />
                <figcaption>그시절 작업물</figcaption>
              </figure>
              <figure>
                <img src="img/portfolio.png" alt="포트폴리오 캡" />
                <figcaption>포트폴리오로 제출했던 거</figcaption>
              </figure>
            </ImageBox>
          </ContentWrapper>
        </Section>
      </Wrapper>
      <Wrapper>
        <Section>
          <SectionTile>운칠기삼 합류 후</SectionTile>
          <ContentWrapper>
            <TextBox>
              <h3>무엇을 했나요?🤔</h3>
              <ul>
                <li>스튜디오 개선</li>
                <li>
                  네이탈 차트 코드를 파이썬에서 자바스크립트(NodeJs)로 옮기기
                </li>
                <li>프리미엄 타로 스크립트 작성</li>
                <li>웹 유도 설치 관련 a/b 테스트</li>
                <li>디자인 시스템</li>
              </ul>
              <img
                src="img/keyboard1.jpg"
                height={133}
                alt="열심히하겠습니다."
              />
              <img src="img/hard.jpg" height={133} alt="열심히하겠습니다." />
            </TextBox>
            <ImageBox>
              <figure>
                <img src="img/taro.png" alt="타로 표지 이미지" width={300} />
                <figcaption>최근에 작업한 프리미엄 타로</figcaption>
              </figure>
            </ImageBox>
          </ContentWrapper>
        </Section>
      </Wrapper>
      <Wrapper>
        <Section>
          <SectionTile>포스텔러 팬아트 그렸어요^^</SectionTile>
          <ContentWrapper style={{ justifyContent: "center" }}>
            <ImageBox>
              <figure>
                <img src="img/lily.png" alt="타로 표지 이미지" />
                <figcaption>릴리💗</figcaption>
              </figure>
            </ImageBox>
          </ContentWrapper>
        </Section>
      </Wrapper>
      <Wrapper style={{ flexDirection: "column" }}>
        <img src="img/heart.png" alt="하트" />
        <SectionTile>감사합니다</SectionTile>
      </Wrapper>
    </>
  );
}

import styled from 'styled-components';

export const RegisterContainer = styled.div`
  height: 852px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* 중앙 정렬을 위해 추가 */
  padding: 0px 50px;
  gap: 5px;
  text-align: center; /* 내부 인라인 요소들 가운데 정렬을 위해 추가 */
`;

export const Header = styled.h1`
  font-family: "SUIT Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const Imoticon = styled.div`
  font-size: 60px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const Button = styled.a`
  display: inline-flex; /* inline-flex로 변경 */
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  color: white;
  border: none;
  width: 138px;
  height: 38px;
  border-radius: 10px;
  background: rgb(105, 210, 255);
  box-shadow: 0px 7px 7px 0px rgba(0, 0, 0, 0.09), 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
  text-align: center;
  text-decoration: none;
  margin-top: 20px;
`;

export default function signup_complete() {
  return (
    <RegisterContainer>
      <Header>모든 준비가 완료되었어요!</Header>
      <Imoticon>🥳</Imoticon>
      <Button href={'/SpotList'}>포토 스팟 둘러보기</Button>
    </RegisterContainer>
  );
}

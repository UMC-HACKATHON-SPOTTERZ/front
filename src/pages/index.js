import color from '@/styles/color';
import font from '@/styles/font';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function Home() {
  const router = useRouter();

  const handleCheckLogin = () => {
    if (localStorage.getItem('id')) {
      router.push('/my-page');
    } else {
      alert('로그인을 먼저 해주세요.');
      router.push('/login');
    }
  };
  return (
    <>
      <Wrapper>
        <Text>인생샷 명소, 제일 쉽게 찾는 법</Text>
        <Image
          src='/icons/logo.svg'
          alt='logo'
          priority={true}
          width={194}
          height={50}
          style={{ marginBottom: '25px' }}
        />
        <Button onClick={() => router.push('/spot-list')}>
          내 주변 포토스팟 찾기
        </Button>
        <Button onClick={() => handleCheckLogin()}>마이페이지</Button>
        <LinkWrapper>
          <Link href='/login'>로그인</Link>/<Link href='/sign_up'>회원가입</Link>
        </LinkWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  height: calc(var(--vh, 1vh) * 100);
`;

const Text = styled.p`
  color: ${color.primary};
  ${font.medium_16};
`;

const LinkWrapper = styled.div`
  color: ${color.primary_100};
  ${font.regular_14};
  text-decoration: underline;
`;

const Link = styled.a`
  color: ${color.primary_100};
  ${font.regular_14};
`;

const Button = styled.button`
  width: 27.7rem;
  height: 6.2rem;
  border-radius: 5rem;
  background: ${color.primary};
  border: none;

  color: #fff;
  ${font.title};

  cursor: pointer;

  &:hover {
    background: ${color.primary_50};
  }
`;

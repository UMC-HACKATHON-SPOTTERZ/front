import Back from '@/components/common/Back';
import color from '@/styles/color';
import font from '@/styles/font';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function Edit() {
  const [uploadImg, setUploadImg] = useState(null);

  const onChangeImage = e => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUploadImg(imageUrl);
  };

  const fileInput = React.useRef(null);
  const handleButtonClick = () => {
    fileInput.current.click();
  };

  return (
    <Wrapper>
      <Back />
      <AddImage onClick={() => handleButtonClick()}>
        {uploadImg ? (
          <Image
            src={uploadImg}
            alt='upload'
            width={339}
            height={339}
            style={{ objectFit: 'contain' }}
          />
        ) : (
          <Image src='/icons/plus_grey.svg' alt='plus' width={37} height={37} />
        )}
        <input
          onChange={onChangeImage}
          type='file'
          style={{ display: 'none' }}
          ref={fileInput}
        />
      </AddImage>
      <ItemWrapper>
        <Text>닉네임</Text>
        <Input />
      </ItemWrapper>
      <Button>변경사항 저장하기</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 216px 62px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddImage = styled.div`
  width: 33.9rem;
  height: 33.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ececec;
  border-radius: 1rem;
`;

const ItemWrapper = styled.div`
  width: 33.9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.6rem;
  gap: 5px;
`;

const Text = styled.div`
  width: 6.8rem;

  color: var(--Blue-main, #69d2ff);
  font-family: 'SUIT Variable';
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  text-align: center;
`;

const Input = styled.input`
  width: 244px;
  height: 40px;
  padding: 10px 20px;

  border: none;
  border-radius: 10px;
  background: var(--Gray, #ececec);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.09),
    0px 1px 2px 0px rgba(0, 0, 0, 0.1);
`;

const Button = styled.div`
  width: 309px;
  height: 43px;

  border-radius: 10px;
  background: #69d2ff;
  box-shadow: 0px 7px 7px 0px rgba(0, 0, 0, 0.09),
    0px 2px 4px 0px rgba(0, 0, 0, 0.1);

  color: #fff;
  font-family: 'SUIT Variable';
  font-size: 13px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  padding: 15px 107px;
  margin-top: 4.4rem;
`;

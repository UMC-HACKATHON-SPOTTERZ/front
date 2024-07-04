import DropDown from '@/components/Upload/DropDown';
import Back from '@/components/common/Back';
import color from '@/styles/color';
import font from '@/styles/font';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

export default function Upload() {
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
        <Text>위치</Text>
        <Input />
      </ItemWrapper>
      <ItemWrapper>
        <Text>제목</Text>
        <Input />
      </ItemWrapper>
      <ItemWrapper>
        <Text>사진 유형</Text>
        <DropDown />
      </ItemWrapper>
      <ItemWrapper>
        <Text>설명</Text>
        <Textarea />
      </ItemWrapper>
      <Button>사진 업로드하기</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 11.9rem;
`;

const AddImage = styled.div`
  width: 33.9rem;
  height: 33.9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 3.2rem;

  background-color: #ececec;
  border-radius: 1rem;
`;

const ItemWrapper = styled.div`
  width: 33.9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  gap: 5px;
`;

const Text = styled.div`
  width: 6.8rem;

  color: ${color.primary};
  ${font.bold_18}
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

const Textarea = styled.textarea`
  width: 244px;
  height: 153px;

  border: none;
  border-radius: 10px;
  background: var(--Gray, #ececec);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.09),
    0px 1px 2px 0px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  width: 339px;
  height: 43px;

  margin-top: 5.2rem;
  color: white;

  border: none;
  border-radius: 10px;
  background: #69d2ff;
  box-shadow: 0px 7px 7px 0px rgba(0, 0, 0, 0.09),
    0px 2px 4px 0px rgba(0, 0, 0, 0.1);
`;

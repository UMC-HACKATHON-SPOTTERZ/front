// 사용 예시 파일
import { GET } from './setting';

export const getUser = async userId => {
  const { data } = await GET(`/user/${userId}`);
  return data;
};

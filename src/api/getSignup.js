// pages/api/v1/users/signup.js
import { addUser, getUserById } from '../data/users';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, password, nickname } = req.body;

    // 입력값 검증
    if (!id || !password || !nickname) {
      return res.status(400).json({ errorMessage: '모든 필드를 입력해주세요.' });
    }

    // 아이디 중복 체크
    if (getUserById(id)) {
      return res.status(400).json({ errorMessage: '이미 존재하는 아이디입니다.' });
    }

    try {
      // 비밀번호 해시화
      const hashedPassword = await bcrypt.hash(password, 10);

      // 사용자 생성
      const newUser = {
        id,
        password: hashedPassword,
        nickname,
      };

      addUser(newUser);

      res.status(201).json({ message: '회원가입 성공' });
    } catch (error) {
      console.error('회원가입 오류:', error);
      res.status(500).json({ errorMessage: '회원가입 중 오류가 발생했습니다.' });
    }
  } else {
    res.status(405).json({ errorMessage: 'Method not allowed' });
  }
}

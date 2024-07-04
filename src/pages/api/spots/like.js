// 예시로 사용할 임시 데이터베이스
let likes = [];

// POST 요청 처리 함수
export default function handler(req, res) {
  
    console.log(req.body.userId)
    const { userId, spotId } = req.body;

    // 이미 좋아요 했는지 확인
    const existingLike = likes.find(like => like.userId === userId && like.spotId === spotId);
    if (existingLike) {
      return res.status(400).json({ message: '이미 좋아요를 눌렀습니다.' });
    }

    // 좋아요 추가
    likes.push({ userId, spotId });

    // 현재 좋아요 수 반환 (임의의 방법으로)
    const likeCount = likes.filter(like => like.spotId === spotId).length;

    // 클라이언트에 응답
    return res.status(200).json({ message: '좋아요가 추가되었습니다.', likeCount });
  
}
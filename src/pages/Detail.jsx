import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <div>
        <div>제목</div>
        <p>내용</p>
      </div>
      <div>
        <button>완료</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default Detail;

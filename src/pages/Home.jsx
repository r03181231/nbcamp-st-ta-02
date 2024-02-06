import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const init = useSelector((store) => store.todos[0]);
  console.log(init);
  const [inputValue, setInputValue] = useState({ init });
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue([...inputValue, { [name]: value }]);
  };

  const onSumitChange = (e) => {
    e.preventDefault();
  };

  const moveDetail = () => {
    navigate("/:id");
  };

  return (
    <div>
      <section>
        <form action="" onSubmit={onSumitChange}>
          <input
            type="text"
            name="title"
            value={inputValue}
            onChange={onChange}
          />
          <input
            type="text"
            name="body"
            value={inputValue}
            onChange={onChange}
          />
          <div>
            <button>제출</button>
          </div>
        </form>
      </section>
      <section>
        <div>
          <div>TodoList</div>
          <div>
            <div>제목</div>
            <p>내용</p>
          </div>
          <div>
            <button>완료:취소</button>
            <button>삭제</button>
            <button onClick={moveDetail}>상세보기</button>
          </div>
        </div>
        <div>
          <div>DoneList</div>
        </div>
      </section>
    </div>
  );
};

export default Home;

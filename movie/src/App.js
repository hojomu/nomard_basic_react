import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) =>{
  // submit 해도 페이지 새로고침은 되지 않고, input value를 비움
    event.preventDefault();
    if (toDo === ""){
      return;
    }
  // currentArray 함수를 생성, 새로운 toDo를 배열내부에 추가하고
  // currentArray 속의 배열 값들을 ... 으로 배열 내부에 추가한다
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  };

  return (
    <div>
      <h1>To My Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {/* .map() 은 괄호안의 명령어를 배열 안의 모든 값으로 실행한다.
          따라서 for문 처럼 사용할 수도 있다.
          (첫 번째 매개변수에 각 값들이 저장된다) each 와 비슷*/}
      <ul>
        {toDos.map((item,index) => (
      // 같은 component의 list를 render할 때 key 라는 prop을 넣어야한다
        <li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}

export default App;

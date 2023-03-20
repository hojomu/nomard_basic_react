import React from "react";

import { useNavigate  } from "react-router-dom";


function Detail() {
  let navigate = useNavigate();
    return (
    <div>Detail 페이지
    <button onClick={() => {navigate("/")}}> 홈으로 이동하기 </button>
    </div>
  )}
  export default Detail;
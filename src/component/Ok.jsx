import React, { useState } from "react";

function Ok() {
  const [value, setvalue] = useState("");
  const [value1, setvalue1] = useState("");
  const [tong, settong] = useState(0);
  const [nhan, setnhan] = useState(1);
  const tong2so = () => {
    settong(Number(value) + Number(value1));
    setnhan(Number(value) * Number(value1));
  };
  return (
    <div>
      Ok
      <input
        type="text"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      ></input>
      <br></br>
      <input
        type="text"
        value={value1}
        onChange={(e) => setvalue1(e.target.value)}
      ></input>
      <button onClick={tong2so}>tính tổng</button>
      <h1>
        {tong},{nhan}
      </h1>
    </div>
  );
}

export default Ok;

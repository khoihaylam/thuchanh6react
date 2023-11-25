import React, { useState } from "react";
import { bt6 } from "react";
function Bt6() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const submit1 = (e) => {
    e.preventDefault();
    console.log(name, email, phone);
  };
  return (
    <form onSubmit={submit1}>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        ></input>
        <br></br>
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        ></input>
        <br></br>
        <input
          type="text"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
        ></input>
        <br></br>
      </div>
    </form>
  );
}

export default Bt6;

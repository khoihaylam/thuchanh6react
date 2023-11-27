import React, { useState } from "react";

function Order() {
  const [name, setname] = useState("");
  // const[address,setaddress]=useState("")
  const [phone, setphone] = useState("");
  const [error, seterror] = useState(null);
  const [success, setsuccess] = useState(true);
  const check = (e) => {
    e.preventDefault();
    if (name == "") {
      seterror(alert("chưa nhập tên"));
    } else {
      const ktname = /^[a-z0-9_-]{3,16}$/;
      if (!ktname.test(name)) {
        seterror(alert("tên người dùng k đúng định dạng"));
      } else {
        seterror("");
      }
    }
    if (phone == "") {
      seterror(alert("chua nhap số điện thoại"));
    } else {
      const ktphone =
        /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
      if (!ktphone.test(phone)) {
        seterror(alert("số điện thoại k đúng định dạng"));
      } else {
        seterror("");
      }
    }
  };
  return (
    <div>
      Order
      <form onSubmit={check}>
        {error && <div style={{ color: "red" }}></div>}
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        ></input>
        <br></br>
        <input
          type="text"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
        ></input>
        <br></br>
        <button onClick={check}>đăng nhập</button>
      </form>
    </div>
  );
}

export default Order;

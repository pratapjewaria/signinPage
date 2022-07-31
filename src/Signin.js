import { useState } from "react";
import "./signin.css";

export default function Sign() {
  console.log("renderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
  const [pre, setPre] = useState("");
  const [formData, setFormData] = useState({
    firstName: "Mah",
    lastName: "endr",
    email: "mahendra@gmail.com"
  });
  console.log("renderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", formData);
  const submit = (e) => {
    console.log("formData", formData);
    setPre(JSON.stringify(formData, undefined, 2));
    e.preventDefault();
  };
  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setFormData((d) => {
      return { ...d, [name]: value };
    });
    console.log("formData", formData);
  };
  return (
    <>
      <h1>SignIn Page</h1>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            maxLength="20"
            name="firstName"
            placeholder="First Name"
            onChange={onChangeInput}
            defaultValue={formData.firstName}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            maxLength="20"
            name="lastName"
            placeholder="Last Name"
            onChange={onChangeInput}
            defaultValue={formData.lastName}
          />
        </div>
        <div>
          <label>Email Address:</label>
          <input
            type="email"
            maxLength="20"
            name="email"
            placeholder="Email Address"
            onChange={onChangeInput}
            defaultValue={formData.email}
          />
        </div>
        <button onClick={submit}>Submit</button>
      </form>
      <pre>{pre}</pre>
    </>
  );
}

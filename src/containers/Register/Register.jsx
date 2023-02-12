import React, { useEffect, useState } from "react";
import AuthService from "../../_services/AuthService";
import User from "../User/User";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleChang = (event) => {
    setEmail(event.target.value);
  };
  const handleChan = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit register");
    console.log(name);
    console.log(email);
    console.log(password);
    const user = {
      name: name,
      email: email,
      password: password,
    };
    register(user);

  
  };
  const register = async (user) => {
    try {
      const res = await AuthService.register(user);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div>Nombre</div>
      <input
        type="text"
        placeholder="nombre"
        value={name}
        onChange={handleChange}
      />
      <div>Email</div>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={handleChang}
      />
      <div>Password</div>
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={handleChan}
      />

      <div className="">
        <button type="submit" className="btn btn-primary text-white fw-bold">
          Enviar
        </button>
      </div>
    </form>
  );
}

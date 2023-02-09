import React, { useEffect, useState } from "react";
import AuthService from "../../_services/AuthService";

export default function Register() {
  const [name, setName] = useState("Your name here!");
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("password");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleChang = (event) => {
    setEmail(event.target.value);
  };
  const handleChan = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form>
      <div>Nombre</div>
      <input type="text" value={user.name} onChange={handleChange} />
      <div>Email</div>
      <input type="text" value={email} onChange={handleChang} />
      <div>Password</div>
      <input type="text" value={password} onChange={handleChan} />

      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary text-white fw-bold">
          Enviar
        </button>
      </div>
    </form>
  );
}

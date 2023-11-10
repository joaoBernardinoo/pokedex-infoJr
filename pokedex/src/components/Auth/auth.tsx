import { useEffect, useState } from 'react';

type LoginModalProps = {
  onClose: () => void;
};

export default function LoginModal({ onClose }: LoginModalProps) {
  const [user, setUser] = useState<string>('não logado');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<number>(0);

  const fetchUser = async () => {
    fetch('/api/user', { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        if (responseData.data) setUser(responseData.data.data[0].email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  return (
    <div>
      <div className="form-container">
        <button onClick={fetchUser}>Buscar</button>
        <h1>{user}</h1>
        <h2>Login</h2>
        <label>
          <input
            type="text"
            value={email}
            placeholder="e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type="number"
            value={password == 0 ? '' : password}
            min={0}
            placeholder="senha"
            onChange={(e) => setPassword(parseInt(e.target.value))}
          />
        </label>
        <div className="button-container">
          <button className="submit-button">Enviar</button>
          <button className="cancel-button">Cancelar</button>
        </div>
      </div>
    </div>
  );
}

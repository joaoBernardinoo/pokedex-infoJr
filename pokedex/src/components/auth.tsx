import { useEffect, useState } from 'react';

type LoginModalProps = {
  session: any;
};

export default function LoginModal({ session }: LoginModalProps) {
  const [user, setUser] = useState<string>('não logado');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<number>(0);

  // const fetchUser = async () => {
  //   fetch('/api/user', { method: 'GET' })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((responseData) => {
  //       if (responseData.data) setUser(responseData.data.data[0].email);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  
  if (session) {
    return (
      <>
        <h3>Seja bem-vindo {session.nickname}</h3>
        <a href="/api/auth/logout">Deslogar</a>
      </>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}
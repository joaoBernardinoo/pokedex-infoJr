type LoginModalProps = {
  session: any;
};

export default function LoginModal({ session }: LoginModalProps) {
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
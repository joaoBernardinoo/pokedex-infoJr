import { useEffect, useState } from 'react';
import '@/styles/auth.module.css';

type LoginModalProps = {
  onClose: () => void;
};

export default function LoginModal({ onClose }: LoginModalProps) {
  return (
    <section className="modal">
      <h1>Teste</h1>
    </section>
  );
}

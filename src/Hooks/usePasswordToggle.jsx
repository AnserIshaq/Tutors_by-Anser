import { useState } from 'react';

export default function usePasswordToggle() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible((prev) => !prev);

  const type = visible ? 'text' : 'password';
  const icon = visible ? '/open-eye.svg' : '/Eye.svg';

  return { type, icon, toggleVisibility, visible };
}

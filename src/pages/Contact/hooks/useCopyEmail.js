import { useState } from 'react';

export const useCopyEmail = (email = 'mayrayazminmoyano@gmail.com') => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return { copied, copyEmail };
};
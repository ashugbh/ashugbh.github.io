import { useEffect, useState } from "react";

export function useTypewriter(words, options = {}) {
  const {
    enabled = true,
    startDelay = 600,
    typingSpeed = 72,
    deletingSpeed = 42,
    pauseDelay = 1300
  } = options;

  const [text, setText] = useState(words[0] ?? "");

  useEffect(() => {
    if (!enabled || words.length === 0) {
      setText(words[0] ?? "");
      return undefined;
    }

    let timeoutId;
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const currentWord = words[wordIndex];
      const nextText = deleting
        ? currentWord.slice(0, Math.max(0, charIndex - 1))
        : currentWord.slice(0, charIndex + 1);

      setText(nextText);
      charIndex += deleting ? -1 : 1;

      if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        timeoutId = window.setTimeout(tick, pauseDelay);
        return;
      }

      if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }

      timeoutId = window.setTimeout(tick, deleting ? deletingSpeed : typingSpeed);
    };

    timeoutId = window.setTimeout(tick, startDelay);

    return () => window.clearTimeout(timeoutId);
  }, [deletingSpeed, enabled, pauseDelay, startDelay, typingSpeed, words]);

  return text;
}

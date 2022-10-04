import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: (event: Event) => void
) => {
  const listener = (event: Event) => {
    const el = ref?.current;

    if (!el || el.contains(event?.target as Node)) {
      return;
    }

    callback(event);
  };

  useEffect(() => {
    // Add event listeners on mount
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Remove event listeners on unmount
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });
};

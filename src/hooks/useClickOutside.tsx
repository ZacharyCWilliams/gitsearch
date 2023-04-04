import { RefObject, useEffect, useCallback } from "react";

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  onClickOutside?: (e: MouseEvent | TouchEvent) => void
) => {
  // check if the click is outside of the ref element
  const isOutside = useCallback(
    (e: MouseEvent | TouchEvent) => {
      return !!ref.current && !ref.current.contains(e.target as HTMLElement);
    },
    [ref]
  );

  const onMouseClicked = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (isOutside(e) && onClickOutside) {
        onClickOutside(e);
      }
    },
    [isOutside, onClickOutside]
  );

  useEffect(() => {
    document.addEventListener("mousedown", onMouseClicked);
    document.addEventListener("touchstart", onMouseClicked);

    return () => {
      document.removeEventListener("mousedown", onMouseClicked);
      document.removeEventListener("touchstart", onMouseClicked);
    };
  }, [onClickOutside, onMouseClicked, isOutside]);
};

export { useClickOutside };

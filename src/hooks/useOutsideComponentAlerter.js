import { useEffect } from "react";

const useOutsideComponentAlerter = (ref, cb) => {
  useEffect(() => {
    const handleOutsideComponentClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    };

    document.addEventListener("mousedown", handleOutsideComponentClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideComponentClick);
    };
  }, [ref, cb]);
};

export default useOutsideComponentAlerter;

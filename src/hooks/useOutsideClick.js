import { useEffect } from "react";

const useOutsideClick = (ref, setShow) => {
  useEffect(() => {
    // 이벤트 핸들러: 클릭 이벤트가 ref의 외부에서 발생하면 setShow를 이용하여 상태 변경
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setShow]);
};

export default useOutsideClick;

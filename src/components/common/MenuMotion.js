import 'animate.css';
import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

const StyledMotion = styled.div`
  position: relative;
  width: 200%;
  display: flex;
  justify-content: center;
  opacity: 0;
  &.animate__animated {
    animation-duration: 1.5s;
    animation-fill-mode: both;
  }
  @media (max-width: 768px) {
    ${(props) =>
      props.reverseOrder &&
      `
  &:first-child {
    order: 2;
  }
  &:last-child {
    order: 1;
  }
`}
  }
`;

const MenuMotion = ({ children, direction, reverseOrder }) => {
  // 使用 useState 初始化 isInView 狀態，表示元素是否進入視口
  const [isInView, setIsInView] = useState(false);
  // 使用 useRef 創建一個引用元素的變數 elementRef
  const elementRef = useRef(null);

  const animationClass = isInView ? (direction === 'left' ? 'animate__fadeInLeft' : 'animate__fadeInRight') : '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 當觀察的元素進入視口時觸發
        if (entry.isIntersecting) {
          // 如果元素進入視口，設置 isInView 為 true，觸發動畫
          setIsInView(true);
        }
      },
      {
        threshold: 0.5,
      }
    );
    // 觀察當前引用的 DOM 元素
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    // 清理函數，當組件卸載或元素不再需要觀察時，停止觀察
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <StyledMotion ref={elementRef} className={`animate__animated ${animationClass}`} reverseOrder={reverseOrder}>
      {children}
    </StyledMotion>
  );
};

export default MenuMotion;

import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTopButton = styled(Link)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  color: #fff;
  font-size: 2rem;
  font-weight: 700;

  background: #01bf71;
  box-shadow: 5px 5px 20px 1px rgba(0, 0, 0, 0.5);
  width: 4rem;
  height: 4rem;
  border-radius: 2.5rem;
  bottom: 25px;
  right: 25px;
  cursor: pointer;
  text-align: center;
  line-height: 3rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ScrollToTop = ({ toggleHome, scrollNav }) => {
  return (
    <>
      {scrollNav && (
        <ScrollToTopButton onClick={toggleHome}>
          <FaArrowUp />
        </ScrollToTopButton>
      )}
    </>
  );
};

export default ScrollToTop;

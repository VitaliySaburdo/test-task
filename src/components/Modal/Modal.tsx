import { createPortal } from 'react-dom';
import { Overlay, ModalBody, CrossBtn } from './Modal.styled';
import { useEffect } from 'react';
import cross from '../../images/Modal/cross.png'

const modalRoot = document.querySelector('#modal-root');

type ModalProps = {
  onClick: () => void; 
  children: React.ReactNode; 
};

export const Modal: React.FC<ModalProps> = ({ onClick, children }) => {
  useEffect(() => {
    const handleEscDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleEscDown);
    disableBodyScroll();
    return () => {
      window.removeEventListener('keydown', handleEscDown);
      enableBodyScroll();
    };
  }, [onClick]);


function disableBodyScroll() {
  document.body.style.overflow = 'hidden';
}
function enableBodyScroll() {
  document.body.style.overflow = 'auto';
}

  const handleBackdropClick = () => {
      onClick(); 
  };


return modalRoot
  ? createPortal(
      <Overlay onClick={handleBackdropClick}>
      <ModalBody onClick={(e)=>e.stopPropagation()}>
        <CrossBtn onClick={handleBackdropClick} type="button">
          <img src={cross} alt="cross" width={14}/>
        </CrossBtn>
        {children}</ModalBody>
      </Overlay>,
      modalRoot
    )
  : null;
};


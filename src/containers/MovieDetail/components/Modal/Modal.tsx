import React from "react";
import { DivClose, DivModalContainer, ImgModalContent } from "./Modal.style";

interface IModalProps {
  image: string;
  isShowing: boolean;
  onClose: () => void;
}

const Modal = ({ isShowing, onClose, image }: IModalProps) => {
  return (
    <DivModalContainer data-testid="container" isShowing={isShowing} onClick={onClose}>
      <DivClose onClick={onClose}>&times;</DivClose>
      <ImgModalContent src={image} />
    </DivModalContainer>
  );
};

export default Modal;

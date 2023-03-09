import Key from "./Key";
import { FC, useRef, RefObject, DragEvent } from 'react';
import { useKeyboard } from '../../hooks/useKeyboard';
import { IComponentProps } from '../../types/types';

const EqualBtn:FC<IComponentProps> = ({isDragable, className, elRef, onDragOver, onDragStart}) => {
  const {onClick} = useKeyboard()

  return (
    <div
      className={`wrapper equal__btn ${className}`}
      id="4"
      ref={elRef}
      draggable={isDragable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
    >
      <div>
        <Key handler={onClick} >=</Key>
      </div>
    </div>
  );
};

export default EqualBtn;
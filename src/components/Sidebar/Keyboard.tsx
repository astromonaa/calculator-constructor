import '../../styles/ui/keyboard.scss'
import { useKeyboard } from '../../hooks/useKeyboard';
import Key from '../UI/Key';
import { FC } from 'react';
import { IComponentProps } from '../../types/types';

const Keyboard:FC<IComponentProps> = ({isDragable, className, elRef, onDragStart, onDragOver}) => {
  const {numbers, onClick} = useKeyboard()

  return (
    <div
      id='3'
      ref={elRef}
      className={`wrapper keyboard ${className}`}
      draggable={isDragable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
    >
      {
        numbers.map(number =>
          <Key
            handler={onClick}
            key={number.id}
            className="keyboard__item"
          >
            {number.number}
          </Key>)
      }
    </div>
  );
};

export default Keyboard;
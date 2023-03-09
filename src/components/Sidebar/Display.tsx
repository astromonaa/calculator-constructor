import '../../styles/ui/display.scss'
import { useAppSelector } from '../../hooks/hooks';
import { useDisplayScroll } from '../../hooks/useDisplayScroll';
import { FC } from 'react';
import { IComponentProps } from '../../types/types';

const Display:FC<IComponentProps> = ({isDragable, className, elRef, onDragStart, onDragOver}) => {

  const { displayValue } = useAppSelector(state => state.calculator)
  const ref = useDisplayScroll(displayValue)

  return (
    <div className={`wrapper display-wrapper ${className}`}
      ref={elRef}
      id='1'
      draggable={isDragable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
    >
      <div className="display__content" ref={ref}>{displayValue}</div>
    </div>
  );
};

export default Display;
import '../../styles/ui/operations.scss'
import { useOperations } from '../../hooks/useOperations';
import Key from '../UI/Key';
import { FC } from 'react';
import { IComponentProps } from '../../types/types';

const Operations:FC<IComponentProps> = ({isDragable, className, elRef, onDragStart, onDragOver}) => {
  const {operations, onClick} = useOperations()

  return (
    <div
      className={`wrapper operations ${className}`}
      id='2'
      ref={elRef}
      draggable={isDragable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
    >
      {
        operations.map(operation => <Key key={operation.id} handler={onClick}>{operation.sign}</Key>)
      }
    </div>
  );
};

export default Operations;
import { RefObject, DragEvent } from 'react';

export interface IComponentProps {
  className?: string;
  elRef?: RefObject<HTMLDivElement>,
  onDragOver?: (event: DragEvent<HTMLDivElement>) => void;
  onDragStart?: (event: DragEvent<HTMLDivElement>) => void;
  isDragable: boolean;
}
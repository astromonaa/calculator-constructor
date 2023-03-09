import { FC, RefObject } from 'react';
import { useCanvas } from '../../hooks/useCanvas';

interface IProps {
  displayRef: RefObject<HTMLDivElement>
  operRef: RefObject<HTMLDivElement>
  keyboardRef: RefObject<HTMLDivElement>
  btnRef: RefObject<HTMLDivElement>
}

const DropElements:FC<IProps> = ({displayRef, operRef, keyboardRef, btnRef}) => {
  const {display, operations, keyboard, equalBtn, onDoubleClick} = useCanvas()  

  return (
    <div className="drop__elements">
      <div
        className="drop-display"
        ref={displayRef}
        onDoubleClick={() => onDoubleClick('display')}
      >
        {display}
    </div>
      <div
        className="drop-operations"
        ref={operRef}
        onDoubleClick={() => onDoubleClick('operations')}
      >
        {operations}
    </div>
      <div
        className="drop-keyboard"
        ref={keyboardRef}
        onDoubleClick={() => onDoubleClick('keyboard')}
      >
        {keyboard}
    </div>
      <div
        className="drop-btn"
        ref={btnRef}
        onDoubleClick={() => onDoubleClick('btn')}
      >
        {equalBtn}
    </div>
    </div>
  );
};

export default DropElements;
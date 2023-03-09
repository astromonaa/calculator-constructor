import '../../styles/canvas.scss'
import CanvasEmpty from './CanvasEmpty';
import { useAppSelector } from '../../hooks/hooks';
import DropElements from './DropElements';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

const Canvas = () => {
  const {dropElements} = useAppSelector(state => state.canvas)
  const {dropBlockRef, dragLeaveHandler, dragOverHandler, dropHandler, dropDisplayRef, dropOperRef, dropKeybRef, dropBtnRef} = useDragAndDrop(null)

  return (
    <div className='canvas'
      onDragLeave={dragLeaveHandler}
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
      ref={dropBlockRef}
    >
      {!dropElements.length 
      ? <CanvasEmpty/>
      : <DropElements
          displayRef={dropDisplayRef}
          operRef={dropOperRef}
          keyboardRef={dropKeybRef}
          btnRef={dropBtnRef}
        />
      }
      
    </div>
  );
};

export default Canvas;
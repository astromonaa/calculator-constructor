import Display from './Display';
import Operations from './Operations';
import Keyboard from './Keyboard';
import '../../styles/sidebar.scss'
import EqualBtn from '../UI/EqualBtn';
import { useRef } from 'react';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { useAppSelector } from '../../hooks/hooks';

const SideBar = () => {
  const {isDragable} = useAppSelector(state => state.calculator)

  const displayRef = useRef<HTMLDivElement>(null)
  const operationsRef = useRef<HTMLDivElement>(null)
  const keyboardRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)

  const {isDisplaced: isDisplayDisplaced, dragStartHandler: dispDragStart, dragOverHandler: dispDragOver} = useDragAndDrop(displayRef)
  const {isDisplaced: isOperationDisplaced, dragStartHandler: operDragStart, dragOverHandler: operDragOver} = useDragAndDrop(operationsRef)
  const {isDisplaced: isKeyboardDisplaced, dragStartHandler: keybDragStart, dragOverHandler: keybDragOver} = useDragAndDrop(keyboardRef)
  const {isDisplaced: isBtnDisplaced, dragStartHandler: btnDragStart, dragOverHandler: btnDragOver} = useDragAndDrop(btnRef)


  return (
    <>
      <div className='sidebar'>
        <Display
          className={isDisplayDisplaced ? 'displaced' : ''}
          elRef={displayRef}
          onDragOver={dispDragOver}
          onDragStart={dispDragStart}
          isDragable={isDragable}
        />
        <Operations
          className={isOperationDisplaced ? 'displaced' : ''}
          elRef={operationsRef}
          onDragOver={operDragOver}
          onDragStart={operDragStart}
          isDragable={isDragable}
        />
        <Keyboard
          className={isKeyboardDisplaced ? 'displaced' : ''}
          elRef={keyboardRef}
          onDragOver={keybDragOver}
          onDragStart={keybDragStart}
          isDragable={isDragable}
        />
        <EqualBtn
          className={isBtnDisplaced ? 'displaced' : ''}
          elRef={btnRef}
          onDragOver={btnDragOver}
          onDragStart={btnDragStart}
          isDragable={isDragable}
        />
      </div>
    </>
  );
};

export default SideBar;
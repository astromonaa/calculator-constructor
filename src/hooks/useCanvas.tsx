import Display from "../components/Sidebar/Display";
import Operations from "../components/Sidebar/Operations";
import Keyboard from "../components/Sidebar/Keyboard";
import EqualBtn from "../components/UI/EqualBtn";

import { useAppSelector } from './hooks';
import { useState, useMemo, RefObject } from 'react';
import { useActions } from './actions';


export function useCanvas () {
  const {dropElements} = useAppSelector(state => state.canvas)
  const {setDropElements} = useActions()

  const [elements, setElements] = useState([
    { id: 1, element: <Display isDragable={false} /> },
    { id: 2, element: <Operations isDragable={false} /> },
    { id: 3, element: <Keyboard isDragable={false} /> },
    { id: 4, element: <EqualBtn isDragable={false} /> }
  ])

  const display = useMemo(() => {
    const find = dropElements.find(el => el === '1')
    if (find) {
      return elements[0].element
    }else {
      return ''
    }
  }, [dropElements])

  const operations = useMemo(() => {
    const find = dropElements.find(el => el === '2')
    if (find) {
      return elements[1].element
    }else {
      return ''
    }
  }, [dropElements])

  const keyboard = useMemo(() => {
    const find = dropElements.find(el => el === '3')
    if (find) {
      return elements[2].element
    }else {
      return ''
    }
  }, [dropElements])

  const equalBtn = useMemo(() => {
    const find = dropElements.find(el => el === '4')
    if (find) {
      return elements[3].element
    }else {
      return ''
    }
  }, [dropElements])

  const onDoubleClick = (el:string) => {
    const id = getElementId(el)
    const filtered = dropElements.filter(el => el !== id)
    setDropElements(filtered)
  }
  const getElementId = (el:string) => {
    switch(el) {
      case 'display':
        return '1'
      case 'operations':
        return '2'
      case 'keyboard':
        return '3'
      case 'btn':
        return '4'
      default:
        return
    }
  }
  return {
    display,
    operations,
    keyboard,
    equalBtn,
    onDoubleClick
  }

}
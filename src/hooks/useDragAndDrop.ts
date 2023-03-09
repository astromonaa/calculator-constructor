import { DragEvent, RefObject, useMemo, useRef } from 'react'
import { useActions } from './actions'
import { useAppSelector } from './hooks'

export function useDragAndDrop(elRef: RefObject<HTMLElement> | null) {
  const { currentElement, dropElements } = useAppSelector(state => state.canvas)
  const { isDragable } = useAppSelector(state => state.calculator)
  const { setDropElements, setCurrent } = useActions()

  const dropBlockRef = useRef<HTMLDivElement>(null)

  const dropDisplayRef = useRef<HTMLDivElement>(null)
  const dropOperRef = useRef<HTMLDivElement>(null)
  const dropKeybRef = useRef<HTMLDivElement>(null)
  const dropBtnRef = useRef<HTMLDivElement>(null)

  const dragStartHandler = (event: DragEvent) => {
    const target = event.target as HTMLDivElement
    setCurrent(target.id)
  }

  const dropHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (!isDragable) {
      return
    }
    if (dropBlockRef.current && !dropElements.length) {
      dropBlockRef.current!.style.background = 'none'
    }else {
      resetStyles()
    }
    if (!dropElements.includes(currentElement)) {
      setDropElements([...dropElements, currentElement])
    }
  }
  const dragLeaveHandler = () => {
    if (!isDragable) {
      return
    }
    if (dropBlockRef.current && !dropElements.length) {
      dropBlockRef.current!.style.background = 'none'
    }else {
      resetStyles()
    }
  }
  const dragOverHandler = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (!isDragable) {
      return
    }
    if (dropBlockRef.current && !dropElements.length) {
      dropBlockRef.current!.style.background = 'rgba(0, 0, 0, 0.2)'
    }else {
      changeStyle()
    }
  }

  const changeStyle = () => {
    if (!dropDisplayRef.current) return

    if (currentElement === '1') {
      dropDisplayRef.current!.style.background = 'rgba(0, 0, 0, 0.2)'
    }else if (currentElement === '2') {
      dropOperRef.current!.style.background = 'rgba(0, 0, 0, 0.2)'
    }else if (currentElement === '3') {
      dropKeybRef.current!.style.background = 'rgba(0, 0, 0, 0.2)'
    }else {
      dropBtnRef.current!.style.background = 'rgba(0, 0, 0, 0.2)'
    }
  }

  const resetStyles = () => {
    if (currentElement === '1') {
      dropDisplayRef.current!.style.background = 'none'
    }else if (currentElement === '2') {
      dropOperRef.current!.style.background = 'none'
    }else if (currentElement === '3') {
      dropKeybRef.current!.style.background = 'none'
    }else {
      dropBtnRef.current!.style.background = 'none'
    }
  }

  const isDisplaced = useMemo(() => {
    return dropElements.find((el: string) => el === elRef?.current?.id)
  }, [dropElements])


  return {
    dragStartHandler,
    dragOverHandler,
    dropHandler,
    dragLeaveHandler,
    dropBlockRef,
    isDisplaced,
    dropDisplayRef,
    dropOperRef,
    dropKeybRef,
    dropBtnRef,
  }
}
import { useRef, useEffect } from 'react';


export function useDisplayScroll(displayValue:string | number) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.scrollTo({left: ref.current?.scrollWidth})
  }, [displayValue])

  return ref
}
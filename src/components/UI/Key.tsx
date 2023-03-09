import { FC } from 'react';

interface IKeyProps {
  children: string;
  handler: (children: string) => void;
  className?: string;
}


const Key:FC<IKeyProps> = ({children, handler, className}) => {
  return (
    <div className={`key ` + className} onClick={() => handler(children)}>
      {children}
    </div>
  );
};

export default Key;
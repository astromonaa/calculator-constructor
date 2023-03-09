import '../styles/switcher.scss'
import Code from '../assets/code.svg'
import Eye from '../assets/eye.svg'
import { useAppSelector } from '../hooks/hooks';
import { useActions } from '../hooks/actions';

const Switcher = () => {
  const {isDragable} = useAppSelector(state => state.calculator)
  const {setIsDragable, setDropElements} = useActions()

  const switchDraggable = (value:string) => {
    if (value === 'on') {
      setIsDragable(true)
      setDropElements([])
    }else {
      setIsDragable(false)
    }
  }

  return (
    <div className='switcher'>
      <div
        className={isDragable ? '' : 'choosen'}
        onClick={() => switchDraggable('off')}
      >
        <img src={Eye} alt="icon" />
        <span>Runtime</span>
      </div>
      <div
        className={isDragable ? 'choosen' : ''}
        onClick={() => switchDraggable('on')}
      >
        <img src={Code} alt="icon" />
        <span>Constructor</span>
      </div>
    </div>
  );
};

export default Switcher;
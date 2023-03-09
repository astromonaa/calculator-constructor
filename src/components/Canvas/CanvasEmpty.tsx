import emptyImg from '../../assets/img.svg'

const CanvasEmpty = () => {
  return (
    <div className='canvas__empty'>
      <div>
        <img src={emptyImg} alt="icon" />
        <span>Перетащите сюда</span>
        <small>любой элемент <br/> из левой панели</small>
      </div>
    </div>
  );
};

export default CanvasEmpty;
const Controller = ({ onClickButton }) => {
  return (
    <div>
      <button value={-1} onClick={onClickButton}>
        -1
      </button>
      <button value={-10} onClick={onClickButton}>
        -10
      </button>
      <button value={-100} onClick={onClickButton}>
        -100
      </button>
      <button value={+100} onClick={onClickButton}>
        +100
      </button>
      <button value={+10} onClick={onClickButton}>
        +10
      </button>
      <button value={+1} onClick={onClickButton}>
        +1
      </button>
    </div>
  );
};

export default Controller;

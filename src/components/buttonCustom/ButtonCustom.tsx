interface IButtonCustom {
  textBtn:string
  onClick: () => void
}

export default function ButtonCustom({ textBtn, onClick }:IButtonCustom):JSX.Element  {

  return (
    <button className='custom_btn' onClick={onClick}  >
      {textBtn}
    </button>
  )
}

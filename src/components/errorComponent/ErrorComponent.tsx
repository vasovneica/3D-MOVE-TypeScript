import style from './ErrorComponent.module.css';


export default function ErrorComponent({addClass}:any):JSX.Element {

  return (
    <div className= {`${style.error_element_body} ${addClass}`}>
      ErrorComponent
    </div>
  )
}

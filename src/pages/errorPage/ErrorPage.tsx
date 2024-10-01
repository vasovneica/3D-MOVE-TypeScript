import { Link } from 'react-router-dom';


export default function ErrorPage(): JSX.Element {

  return (
    <div className='container'>
      ErrorPage
      <Link className='custom_btn'
        to={`/`} >
        Home
      </Link>
    </div>
  )
}

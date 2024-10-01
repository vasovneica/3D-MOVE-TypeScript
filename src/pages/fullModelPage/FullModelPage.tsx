import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utilities/utilities';
import { useGetModelByIdQuery } from '../../redux-store/modelsApi.ts';
import ErrorComponent from '../../components/errorComponent/ErrorComponent.tsx';
import SliderImages from '../../components/sliderImages/SliderImages.tsx';
import Container from '../../components/Container/Container';
import style from './FullModelPage.module.css';

export interface IFullModelCard {
  createdAt: string
  faces: number
  group: string
  imageUrl: string
  imgFGH: string
  imgSGH: string
  loadCount: number
  modelUrl: string
  secondImageUrl: string
  text: string
  title: string
  updatedAt: string
  user: string
  __v: number
  _id: string

}

export default function FullModelPage(): JSX.Element | undefined {

  const idFromPath: string = window.location.pathname.split('/')[2]

  const { data: model, error, isLoading } = useGetModelByIdQuery(idFromPath);


  useEffect(() => {
    scrollToTop()
    console.log(error);

  }, [isLoading])

  if (error) {
    return (
      <ErrorComponent />
    )
  }
  if (model) {
    return (

      <article className={style.full_model_page}>
        <Container>
          <h1 className={style.full_model_page_title}>3d-move</h1>
          <div className={style.full_model_page_header} >

            <Link className='custom_btn'
              to={`/home`}
            >Home</Link>

            <Link className='custom_btn'
              to={`/api/models?sort=all&page=1`}
            >Models</Link>

            <Link className='custom_btn'
              to={String(model.modelUrl)}
            >Download</Link>

          </div>

          <div className={style.full_model_cards_wrapper}>
            <div className={style.full_model_page_info}>
              <h3 className='card-title' >{model.title}</h3>

              <SliderImages slides={[model.imgFGH, model?.imgSGH]} />

            </div>
          </div>
        </Container>
      </article>

    )
  }

}

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utilities/utilities';
import textureDemo from '../../img/texture_demo.jpg';
import textureForDownload from '../../img/new_new_color.png';
import ButtonCustom from '../../components/buttonCustom/ButtonCustom';
import Container from '../../components/Container/Container';
import CardsWrapper from '../../components/CardsWrapper/CardsWrapper';
import PageTitle from '../../components/PageTitle/PageTitle';
import PageHeader from '../../components/PageHeader/PageHeader';
import style from './HowUsePage.module.css';


export default function HowUsePage(): JSX.Element {

  useEffect(() => {
    scrollToTop()
  }, [])

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = textureForDownload;
    link.download = 'texture.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  };

  return (
    <main>
      <article className={style.how_use_page}>
        <Container>
          <PageTitle>How use page</PageTitle>

          <PageHeader>

            <Link className='custom_btn'
              to={`/home`}
            >Home</Link>

            <Link className='custom_btn'
              to={`/api/models?sort=all&page=1`}
            >Models</Link>

            <ButtonCustom
              textBtn={`${'texture'}`}
              onClick={handleDownload} />

          </PageHeader>

          <CardsWrapper>
            <div className={style.how_use_page_info}>
              <h3>Instruction</h3>

              <p>All models contain separation by materials</p>

              <p><b>0</b> - the color of the window frames, bottom, etc</p>
              <p><b>1</b> - the main color of the body</p>
              <p><b>2</b> - window material</p>
              <p><b>3</b> - the material of the front lights</p>
              <p><b>4</b> - taillight material</p>
              <p>Above, you can download the original texture with which all the models were created.</p>

            </div>

            <div className={style.how_use_page_info}>
              <h3 className={style.how_use_page_info_title} onClick={handleDownload}>Texture</h3>

              <img className={style.how_use_page_img} src={textureDemo} />

            </div>
          </CardsWrapper>
        </Container>
      </article>
    </main>

  )
}

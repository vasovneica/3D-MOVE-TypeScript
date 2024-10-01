import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ModelCard from '../../components/modelCard/ModelCard.tsx';
import { scrollToTop } from '../../utilities/utilities.ts';
import Container from '../../components/Container/Container.tsx';
import CardsWrapper from '../../components/CardsWrapper/CardsWrapper.tsx';
import PageTitle from '../../components/PageTitle/PageTitle.tsx';
import PageHeader from '../../components/PageHeader/PageHeader.tsx';
import { useGetAllModelsQuery } from '../../redux-store/modelsApi.ts';
import TypeChanger from '../../components/TypeChanger/TypeChanger.tsx';
import style from './ModelsPage.module.css';


export default function ModelsPage(): JSX.Element {

  const [typeModels] = useState<string>(" ");
  const [searchParams] = useSearchParams();
  const postQuery: string = searchParams.get("sort") || "all";
  const pageFromHistory: string = searchParams.get("page") || '1';
  const [currentPage, setCurrentPage] = useState(pageFromHistory);

  const queryParams = () => ({
    sortParam: (postQuery !== undefined) ? postQuery : "all",
    page: pageFromHistory,
  });

  const { data, isLoading } = useGetAllModelsQuery(queryParams());

  useEffect(() => {
    scrollToTop()
  }, [typeModels, currentPage])

  const pageNumbers = [];
  for (let index = 1; index <= Number(data?.totalPages); index++) {
    pageNumbers.push(index)
  }

  return (
    <>
      <main>
        <article className={style.models_page}>
          <Container>
            <PageTitle >{`${postQuery} ${'models page'}`}</PageTitle>
            <PageHeader>

              <Link className='custom_btn'
                to={`/home`}
              >Home</Link>

              <Link className='custom_btn'
                to={`/howusepage`}
              >How use</Link>

              <TypeChanger postQuery={postQuery} />
            </PageHeader>

            <CardsWrapper>
              {
                isLoading
                  ? <h4 style={{ display: 'none' }}>Loading</h4>
                  : data?.transformedPosts.map(post => (

                    <ModelCard
                      key={post._id}
                      img={post.img}
                      title={post.title}
                      description={`${'Faces :'}${post.faces}`}
                      hrefTo={`${'/model/'}${String(post._id)}`} />

                  ))
              }
              {/* {error && <h3>{}</h4>} */}
            </CardsWrapper>

            {/* Pages list */}
            <ul className={style.ul_pages}>
              {pageNumbers.length >= 2 &&
                pageNumbers.map(number => (
                  <li key={number}>

                    <Link className={`${number === Number(data?.page) ? [style.active_page] : [style.list_page]}`}
                      to={`?sort=${postQuery}&page=${number}`}
                      key={number}
                      onClick={() => setCurrentPage(String(number))}
                    >{number}
                    </Link>

                  </li>
                ))
              }

              {/* Before load models */}
              {isLoading &&
                <li style={{ color: '#eee' }}>loading...</li>
              }

              {/* display how many models found. Only if less than 2 pages are found */}
              {isLoading
                ? null
                : (Number(data?.totalPages) < 2 &&
                  <li style={{ color: '#4d4d4d' }}>{data?.transformedPosts.length} models found.</li>
                )}

            </ul>
          </Container>
        </article>
      </main>
    </>
  )
}



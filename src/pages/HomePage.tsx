import wheels from '../img/wheels.jpg';
import obj from '../img/obj.jpg';
import info from '../img/info.jpg';
import cars from '../img/cars.jpg';
import Header from '../components/header/Header.tsx';
import ModelCard from '../components/modelCard/ModelCard.tsx';
import Container from '../components/Container/Container.tsx';
import CardsWrapper from '../components/CardsWrapper/CardsWrapper.tsx';
import PageTitle from '../components/PageTitle/PageTitle.tsx';


export default function HomePage(): JSX.Element {

    // key:number
    // img:string
    // title:string
    // description:string
    // hrefTo:string

    return (
        <>
            <Header />
            <main>
                <section className='home_page' id='section_home_page'>
                    <Container>
                        <PageTitle>3D move</PageTitle>
                        <CardsWrapper>

                            <ModelCard
                                key={0}
                                img={cars}
                                title={'Models'}
                                description={'Here is a list of all models'}
                                hrefTo={`/api/models?sort=all&page=1`} />

                            <ModelCard
                                key={1}
                                img={info}
                                title={'How to use'}
                                description={'Here are the detailed instructions'}
                                hrefTo={'/howusepage'} />

                            <ModelCard
                                key={2}
                                img={obj}
                                title={'What format is available?'}
                                description={'All models posted here are in >obj< format'}
                                hrefTo={'/'}
                            />

                            <ModelCard
                                key={3}
                                img={wheels}
                                title={'Wheels etc'}
                                description={'Add mirrors, fog lights, in the engine.'}
                                hrefTo={'/api/models?sort=other&page=1'}
                            />

                        </CardsWrapper>
                    </Container>
                </section>
            </main>
        </>
    )
}

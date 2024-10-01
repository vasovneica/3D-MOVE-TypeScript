import { useState } from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import { FaItchIo } from 'react-icons/fa6';
import style from './Footer.module.css';
import Container from '../Container/Container';


export default function Footer(): JSX.Element {

    const [copied, setCopied] = useState<boolean>(false);
    const [email] = useState<string>('vasovneica@rambler.ru')

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };


    return (
        <>
            <footer className={style.footer}>
                <Container>
                    <div className={style.footer_row}>
                        <div className={`${style.footer_copyright} ${style.footer_col}`}>
                            <div className='footer-copyright-name'>© Vasovneica</div>
                            <p>3d-move</p>
                        </div>
                        <div className={`${style.footer_icons} ${style.footer_col}`}>
                            <p>My profiles:</p>
                            <div className={style.footer_icons_row}>

                                <a href="#">
                                    <FaItchIo className={style.footer_social_icons} />
                                </a>

                                <a href="#">
                                    <IoLogoGithub className={style.footer_social_icons} />
                                </a>

                            </div>
                        </div>

                        <div className={`${style.footer_contacts} ${style.footer_col}`}>
                            {!copied && <span className='custom_btn'
                                onClick={copyEmail}>mail copy</span>}

                            {copied && <span className='custom_btn'>Copied!</span>}

                            <p> Any questions? write me an email.</p>

                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}

import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

const Footer = ({ description }) => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-up">
                    <div className="footer-logo">
                        <img src={description.logo2} alt="logo" />
                    </div>
                    <div className="footer-company">
                        <h4>Компания</h4>
                        <div>
                            <Link to="/about">О нас</Link>
                        </div>
                        <div>
                            <Link to="/news">Новости</Link>
                        </div>
                        <div>
                            <Link to="/help">Помощь</Link>
                        </div>
                        <div className="public-offer">
                            <Link to="/offer">Публичная оферта</Link>
                        </div>
                    </div>
                    <div className="footer-contacts">
                        <h4>Контакты</h4>
                        <div>
                            <CallIcon />
                            <p>{description.phone2}</p>
                        </div>
                        <div>
                            <CallIcon />
                            <p>{description.phone2}</p>
                        </div>
                        <div>
                            <MailOutlineIcon />
                            <p>{description.mail}</p>
                        </div>
                    </div>
                    <div className="footer-social">
                        <h4>Мы в социальных сетях:</h4>
                        <div>
                            <InstagramIcon />
                            <a target="_blank" rel="noopener noreferrer" href={description.instagram}>Instagram</a>
                        </div>
                        <div>
                            <TelegramIcon />
                            <a target="_blank" rel="noopener noreferrer" href={description.telegram}>Telegram</a>
                        </div>
                        <div>
                            <WhatsAppIcon />
                            <a target="_blank" rel="noopener noreferrer" href={description.whatsapp}>WhatsApp</a>
                        </div>
                    </div>
                </div>
                <div className="footer-down">
                    Developed by Zeon 2022
                </div>
            </div>
        </div>
    );
};

export default Footer;
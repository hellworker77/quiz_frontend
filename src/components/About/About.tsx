import React, {useEffect} from 'react';
import vkLogo from '../../images/vk.png'
import telegramLogo from '../../images/telegram.png'
import discordLogo from '../../images/discord.png'
import aboutStyles from './About.module.css'
import {AboutProps} from "../../types/Implementation/Props/AboutProps";
import aboutLogo from './../../images/about.png'

const About = (props: AboutProps) => {
    useEffect(()=>{
        let prevBackground = props.background;
        props.changeBackground(aboutLogo)
        return () => {
            props.changeBackground(prevBackground)
        }
    }, []);
    return (
        <div>
            <p className={aboutStyles.display_text}>
                Данное деяние носит в себе развлекательный и познавательный характер,
                так что не воспринимайте все близко к сердцу :)
            </p>
            <p className={aboutStyles.display_text}>
                Тесты отобраны на тему аниме и игр,
                проверены на адекватность и доступность,
                а так же отредактированы лично мной для большего интереса.
            </p>
            <div className={aboutStyles.links}>
                <a href = "https://t.me/caxarochek11" className={aboutStyles.link}>
                    <img src={telegramLogo} alt={'telegram'}/>
                    <p>Telegram автора</p>
                </a>
                <a href = "https://vk.com/vadfenrir"  className={aboutStyles.link}>
                    <img src={vkLogo} alt={'vk'}/>
                    <p>VK автора</p>
                </a>
                <a href = "https://discord.com/channels/@me" className={aboutStyles.link}>
                    <img src={discordLogo} alt={'discord'}/>
                    <p>Discord автора</p>
                </a>
            </div>
        </div>
    );
};

export default About;
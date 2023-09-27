import React from "react";
import * as style from "./SinglePageFooter.module.scss";
import {data, socialLinksList} from "./data/data";

import AWS from "./img/aws.svg";
import CLOUD from "./img/cloud_native.svg";
import Container from "../../global/Container/Container";
import ButtonLink from "../../global/ButtonLink/ButtonLink";
import LightrunSmallLogo from "./img/LightrunSmallLogo";
import FooterBackground from './img/footer_background.png';

const support = (
    <div className={style.support}>
        <div className={style.imgWrapper}>
            <a href="https://aws.amazon.com/marketplace/pp/prodview-gdzru3elyy5zo">
                <img src={AWS.src} loading="lazy" alt="AWS partner" width="163" height="46"/>
            </a>
            <a href="https://www.cncf.io/announcements/2022/03/08/68-new-members-join-the-cloud-native-computing-foundation/">
                <img src={CLOUD.src} loading="lazy" alt="Cloud Native Computing Foundation member" width="233" height="37"/>
            </a>
        </div>
    </div>
);

const copyright = (
    <div className={style.license}>
        © 2023, Lightrun, Inc. All Rights Reserved.
    </div>
);

const links = (
    <div className={style.footerNav}>
        <LightrunSmallLogo/>
        <div className={style.footerNavWrapper}>
            {data.map((item) => (
                <div className={style.referencesList}>
                    <div className={style.title}>{item.title}</div>
                    <ul className={style.itemsList}>
                        {item.listReferences.map((el) => (
                            <li key={el.title} className={style.underline}>
                                <a href={el.link}>{el.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

const subscribe = (
    <div className={style.subscribeGrid}>
        <p className={style.subscribe}>
            <span className={style.bold}>Subscribe to our Newsletter</span>
            <span>
        and get the latest news, articles, and resources, sent to your inbox.
      </span>
        </p>
        <div className={style.inputWrapper}>
            <input placeholder="Email" className={style.inputEl}/>
            <ButtonLink classes={style.formLink}>Subscribe</ButtonLink>
        </div>
    </div>
);
const socialLinks = (
    <ul className={style.socialWrapper}>
        {socialLinksList.map((item) => (
            <li key={item.title}>
                <a href={item.link}>
                    <img src={item.icon.src} loading="lazy" alt={item.title} className={style.simple}/>
                    {item.iconhover && (
                        <img
                            src={item.iconhover.src}
                            loading="lazy"
                            alt={item.title}
                            className={style.hover}
                        />
                    )}
                </a>
            </li>
        ))}
    </ul>
);

const SinglePageFooter = () => {
    return (
        <footer className={['sectionWrapper', style.footer].join(' ')}>
            <div className={style.footerBackgroundImage}>
                <img src={FooterBackground.src} loading="lazy" alt="Lightrun logo" height={500}/>
            </div>
            <Container>
                <div className={style.footerWrapper}>
                    {subscribe}
                    {links}
                    {support}
                    {socialLinks}
                    {copyright}
                </div>
            </Container>
        </footer>
    );
};

export default SinglePageFooter;

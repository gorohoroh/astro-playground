import preact from "@astrojs/preact";

import * as style from './ButtonLink.module.scss';

const ButtonLink = ({link, transparent, classes = '', children}) => {
    return (
        <a href={link} className={[style.linkBtn, transparent ? style.transparent : style.fill, classes].join(' ')}>{children}</a>
    )
}

export default ButtonLink;

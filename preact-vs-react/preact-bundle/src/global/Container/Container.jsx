import React from 'react';

import * as style from './Container.module.scss'


const Container = ({children, type}) => {
    return (<div className={type === 'large' ? style.largeContainer : style.container}>
        {children}
    </div>)
}

export default Container;
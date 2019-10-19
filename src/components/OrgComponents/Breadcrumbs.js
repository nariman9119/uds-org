import React from 'react';
import "../../styles/Breadcrumbs.css";

const Arrow = () => (
    <svg width="14" height="14" viewBox="0 0 64 64" className="breadcrumb-arrow">
        <path fill="currentColor"
    d="M22.674 33.219A2.352 2.352 0 0 1 22 31.602c0-.606.27-1.213.674-1.617l12.328-12.328c.876-.876 2.358-.876 3.234 0 .876.876.876 2.358 0 3.234L27.592 31.602l10.644 10.644a2.19 2.19 0 0 1 .673 1.617c0 .606-.202 1.213-.673 1.617-.876.876-2.358.876-3.234 0L22.674 33.219z"/>
    </svg>
);

export default ({orgName}) => (
    <section className="breadcrumbs">
        <a className="breadcrumb-el" href="/">Главная</a>
        <Arrow/>
        <a className="breadcrumb-el" href="/#uds-orgs">Учреждения</a>
        <Arrow/>
        <span className="breadcrumb-current">{orgName}</span>
    </section>
)

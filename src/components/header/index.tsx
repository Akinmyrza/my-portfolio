/* External dependencies */
import React from 'react';

/* Local dependencies */
import CTA from './CTA';
import './index.scss';

export default function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Akinmyrza Kanat uulu</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />
      </div>
    </header>
  );
}

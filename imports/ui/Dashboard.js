
import React from 'react';

import Header from './Header';
import MainMenu from './MainMenu';
import SideBar from './SideBar';
import MainPageContent from './MainPageContent';
import FillWithText from './FillWithText';
export default () => {

    return (
        <div>        
            <Header title="Dashboard" />             
            <div className='page-content'>           
            <div  className= "page-content__sidebar"><SideBar/></div>
            <div  className= "page-content__main"><MainPageContent/></div>
            <FillWithText/>
            </div>
        </div>

    );

}
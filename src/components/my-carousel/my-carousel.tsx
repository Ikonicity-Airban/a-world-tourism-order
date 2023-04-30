import React from 'react';
import { Carousel } from 'antd';
import TopSection_module from '../top-section/top-section.module.scss';
import Navbar_module from '../navbar/navbar.module.scss';
import Classnames from 'classnames';

const contentStyle: React.CSSProperties = {
    margin: 0,
    minHeight: '350px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export const My_Carousel: React.FC = () => {
    const onChange = (currentSlide: number) => {
        //console.log(currentSlide);
    };

    return (
        <div className={TopSection_module.root}>
            <Carousel infinite>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    );
};

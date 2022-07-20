import React from 'react'
import { advertisementList } from '../../common/advertisementList/advertisementList';
import Flickity from "react-flickity-component"
import { useViewport } from "../../customhooks"

import "./Advertisement.sass"

const Advertisement = () => {
    const viewport = useViewport();
    const isMobileView = viewport.width < 1024
    const flickityOptions = {
        initialIndex: 0,
        autoPlay: 3000,
        wrapAround: true,
        draggable: true

    };
    return (<>
        {isMobileView ? <section className='advertisement advertisement-mobile'>
            <div className="advertisement-main main-mobile">
                <Flickity options={flickityOptions}>
                    {advertisementList.map((ad, index) => {
                        const {
                            img
                        } = ad;
                        return (
                            <div key={index} className="advertisement-card">
                                <img src={img} alt="abc" />
                            </div>
                        )
                    })}
                </Flickity>
            </div>
            <div className="advertisement-sub sub-mobile">
                <div className="advertisement-card">
                    <img src={advertisementList[0].img} alt="abc" />
                </div>
                <div className="advertisement-card">
                    <img src={advertisementList[0].img} alt="abc" />
                </div>
            </div>
        </section>
            :
            <section className='advertisement'>
                <div className="advertisement-main">
                    <Flickity options={flickityOptions}>
                        {advertisementList.map((ad, index) => {
                            const {
                                img
                            } = ad;
                            return (
                                <div key={index} className="advertisement-card">
                                    <img src={img} alt="abc" />
                                </div>
                            )
                        })}
                    </Flickity>
                </div>
                <div className="advertisement-sub">
                    <div className="advertisement-card">
                        <img src={advertisementList[0].img} alt="abc" />
                    </div>
                    <div className="advertisement-card">
                        <img src={advertisementList[0].img} alt="abc" />
                    </div>
                </div>
            </section>}

    </>
    )
}

export default Advertisement
import React from 'react'
import { BiUpArrowAlt } from "react-icons/bi";
import { useViewport } from '../../customhooks';
import "./ScrollTopButton.sass"

const ScrollTopButton = () => {
    const viewport = useViewport()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (<>
        {viewport.scroll >= 300 && <div className='scroll-btn'>
            <button className='btn' onClick={scrollToTop}>
                <BiUpArrowAlt />
            </button>
        </div>
        }
    </>
    )
}

export default ScrollTopButton
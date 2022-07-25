import React, { useState } from 'react'
import {
    brandList,
    colorList,
    styleList
} from "../../common/filterList/filterList"
import { BiCaretDown } from "react-icons/bi";

import "./Filter.sass"
import { useViewport } from '../../customhooks';

const Filter = () => {
    const viewport = useViewport()
    const isMobileViewport = viewport.width <= 650
    const [brandDisplayList, setBrandDisplayList] = useState(brandList.slice(0, 4))
    return (
        <aside className={isMobileViewport ? "filter mobile-filter" : "filter"}>
            <div className={isMobileViewport ? "filter-container mobile-filter-container" : "filter-container"}>
                <div className="filter-field">
                    <div className="filter-name">
                        Brands
                    </div>
                    <div className={isMobileViewport ? "filter-content mobile-filter-content" : "filter-content"}>
                        {brandDisplayList.map((brand, index) => {
                            return <div key={index} className="checkbox-container">
                                <input type="checkbox" name="brand" id={brand} />
                                <label htmlFor={brand}>{brand}</label>
                            </div>
                        })}
                    </div>
                    <div className="filter-btn">
                        <button className='btn brand-btn'>See more <BiCaretDown /></button>
                    </div>
                </div>
                <div className="filter-field">
                    <div className="filter-name">
                        Price
                    </div>
                    <div className="filter-content">
                        <div className="price-container">
                            <input type="text" className='price-input' id="min-price" placeholder='Min' />
                            <input type="text" className='price-input' id="max-price" placeholder='Max' />
                            <button className="price-btn">Go</button>
                        </div>
                    </div>
                </div>
                <div className="filter-field">
                    <div className="filter-name">
                        Color
                    </div>
                    <div className="filter-content">
                        <div className="color-list">
                            {colorList.map((color, index) => {
                                return <div key={index} className='color' style={{ backgroundColor: `${color}` }}></div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="filter-field">
                    <div className="filter-name">
                        Style
                    </div>
                    <div className={isMobileViewport ? "filter-content mobile-filter-content" : "filter-content"}>
                        {styleList.map((style, index) => {
                            return <div key={index} className="checkbox-container">
                                <input type="checkbox" name="brand" id={style} />
                                <label htmlFor={style}>{style}</label>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </aside>

    )
}

export default Filter
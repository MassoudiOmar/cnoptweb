import React, { useState } from 'react'
import '../assets/styles/Documents.css'
import pdfIcon from "../assets/images/pdf-icon.png"
import NavigationBtns from '../components/navigationBtns';

export default function Documents() {
    const element = [0, 1]
    const categories = [0, 1];
    const [selectedCategory, setSelectedCategory] = useState('');

    const categoryList = ['list1', 'list2', 'list3']; // Add your category options here

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div className='Documents-container'>
            <div className='inner-navbar'>
                <NavigationBtns />
            </div>
            <div className='Documents-body'>

                <div className='Documents-title-section'> <span className='Documents-title'>Documents</span><span className='line'></span> </div>

                <div className='Documents-section'>
                    <div className="categories-input-container">
                        <input
                            className="categories-input"
                            list="categoryList"
                            placeholder="Select a category"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        />
                        <datalist id="categoryList">
                            {categoryList.map((category, index) => (
                                <option value={category} key={index} />
                            ))}
                        </datalist>
                    </div>                    <div className='Documents-main'>
                        {
                            element.map((e, i) => (
                                <div className='pdf-container-lol'>
                                    <div className='icon-container'>
                                        <img src={pdfIcon} alt='icon' style={{ height: "55%", width: "35%" }} />
                                    </div>
                                    <div className='title-container-lol'>Retrait des lots des dispositifs médicaux
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='see-also'>
                        <div className='see-also-text-container'><span>Voir Plus</span></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

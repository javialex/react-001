import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//Functional Component
const GifExportApp = ()=>{
    
    const [categories, setCategories] = useState(['One Punch']);
    return (<>
        <h2>GifExportApp</h2>
        <AddCategory setCategories = {setCategories}></AddCategory>
        <hr />        
        <ol>
            {
                categories.map((category, i) => 
                    <GifGrid 
                    key={category}
                    category={category}/>
                ) 
            }
        </ol>
        </>);    
};

export default GifExportApp;
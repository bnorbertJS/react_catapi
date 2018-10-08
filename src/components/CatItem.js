import React from 'react'
import Image from './proxy/Image'

const CatItem = (props) =>{

    return (
        <li className="cat-item">
            <div>
                <Image {...props}/>
            </div>
        </li>
    )
}

export default CatItem
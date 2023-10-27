import React from 'react'
import '../ProfileImage.css'

const Profilimage = ({titulo, imagem, alt}) => {
    return(
        <div className='card'>
            <h2>{titulo}</h2>
            <img src={imagem} alt={alt} className='imagem'/>
            </div>
    )
}

export default Profilimage
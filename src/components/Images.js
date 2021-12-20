import React from 'react'
import { Image } from 'react-bootstrap'

const Images = (data) => {
    return (
        <>
        {data.data.map((i) => <Image key='{i}'src={i.strMealThumb} width={171} height={180} fluid></Image>)}
        </>
    )
}

export default Images

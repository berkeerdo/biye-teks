import React from 'react'
import { styled } from "@mui/styles";
import MapImg from "../../assets/Map.png"

const CustomMap = styled("img") (({ theme }) => ({
    height : "100%",
    width : "100%",
    borderRadius : "10%",

}))

const Map = () => {
    return (
        <>
            <CustomMap src = {MapImg}/>
        </>
    )
}

export default Map

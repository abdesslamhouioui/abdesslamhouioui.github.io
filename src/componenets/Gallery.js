import React from 'react'
import { GalleryTitle, GalleryRapper, GalleryImg, GalleryImgRapper, GalleryImgText } from '../styles/Styles'
import GalleryImg1 from '../styles/Gallery1.png'
import GalleryImg2 from '../styles/Gallery2.png'
import GalleryImg3 from '../styles/Gallery3.png'
import GalleryImg4 from '../styles/Gallery4.png'
const Gallery = () => {
    return (
        <GalleryRapper>


            <GalleryTitle >Our teams are continuously developing innovative strategies, building new technologies, and conducting ongoing research. </GalleryTitle >

            <GalleryImgRapper>
                <GalleryImgText>Administration</GalleryImgText>
                <GalleryImg src={GalleryImg1} alt="Gallery image 1" width="19vw" widthMob="25vw" />
            </GalleryImgRapper>

            <GalleryImgRapper>
                <GalleryImgText>Design</GalleryImgText>
                <GalleryImg src={GalleryImg2} alt="Gallery image 2" width="19vw" widthMob="25vw" />
            </GalleryImgRapper>

            <GalleryImgRapper>
                <GalleryImgText>Development</GalleryImgText>
                <GalleryImg src={GalleryImg3} alt="Gallery image 3" width="41vw" widthMob="41vw" />
            </GalleryImgRapper>

            <GalleryImgRapper>
                <GalleryImgText>AI</GalleryImgText>
                <GalleryImg src={GalleryImg4} alt="Gallery image 4" width="19vw" widthMob="25vw" />
            </GalleryImgRapper>


        </GalleryRapper>
    )
}

export default Gallery
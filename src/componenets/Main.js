import {React,useEffect,useRef} from 'react'
import { MainHr, Light, MainRapper, MainTitle, Innovate, Underline, MainImg, OurCliens, Decription, Btn } from '../styles/Styles'
import { gsap } from "gsap";
import {TextPlugin} from "gsap/TextPlugin"
import {MotionPathPlugin} from "gsap/MotionPathPlugin"
import './anime.css'
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(MotionPathPlugin);

const Main = () => {
    const boxRef = useRef();
    const boxRef1 = useRef();
    useEffect(() => {
        gsap.to(boxRef.current, {
            duration: 10, 
            repeat: Infinity,
            repeatDelay: 3,
            yoyo: true,
            ease: "power1.inOut",
            motionPath:{
              path: "M522.191,-38.67 C522.191,-38.67 38.888,-40.915 13.177,-41.879 0.848,-42.341 12.805,166.194 13.385,197.599 13.963,229.272 523.044,-37.19 523.044,-37.19 " ,
              align: "#path",
              autoRotate: true,
              alignOrigin: [0,0]
            }
          });
      },[]);

      useEffect(() => {
        gsap.to(boxRef1.current, {
            duration: 10, 
            repeat: Infinity,
            repeatDelay: 3,
            yoyo: true,
            ease: "power1.inOut",
            motionPath:{
              path: "M479.244,-42.156 C479.244,-42.156 -19.479,168.345 -11.488,192.803 -6.452,208.265 428.644,194.946 462.167,193.526 476.071,192.937 478.067,-42.417 478.067,-42.417  " ,
              align: "#path",
              autoRotate: true,
              alignOrigin: [0,0]
            }
          });
      },[]);
    return (
        <MainRapper>
            <MainTitle>Closen the technology of the future to help you                
                <div id="slideset2">
  <div>
  <Innovate>Innovate</Innovate >
  </div>
  <div>
  <Innovate>Connect</Innovate >
  </div>
  <div>
  <Innovate>inspire</Innovate >
  </div>
</div>
                    <Underline />
            </MainTitle>
            <MainImg />
            <div>
                <Decription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam quam arcu nunc, orci eu bibendum. Sed morbi pellentesque elit purus quam a sollicitudin convallis purus. Sed sed quam risus laoreet viverra id ut amet feugiat. Sed nec id id sed ut nulla aliquet neque. Sed est malesuada lobortis aliquam dolor eget donec </Decription>
                <Btn>Get Started</Btn>
            </div>
            <OurCliens />
            <Light ref={boxRef}/>
            <Light ref={boxRef1}/>
            <MainHr />
        </MainRapper >
    )
}
export default Main
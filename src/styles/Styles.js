import styled from 'styled-components'
import logo from './logo.svg'
import underlineImg from './underline.png'
import mainImg from './mainImg.png'
import ourClients from './ourClients.png'
import projectImg from './projectImg.png'
import Woman from './Woman.png'
import rectangle from './Rectangle.png'
import vector from './Vector.png'


///////////////////////////navBar/////////////////////////

export const NavRapper = styled.div`
 display: flex;
 align-items: center;
justify-content: space-between;
padding: 1.5rem;
@media screen and (max-width: 768px) {
justify-content: center;
}
border-bottom: 1px solid rgba(227, 255, 230, 0.3);
`
export const Logo = styled.img.attrs(props => ({
	src: logo,
	alt: 'logo'
}))`
margin-left: 5rem;
@media screen and (max-width: 768px) {
	display: none;
}
`
export const MenuIcon = styled.div`
width: 2rem;
`
///////////////////////////Main//////////////////////////

export const MainRapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 30% 55% 1fr;
justify-content: center;
align-items: center;
box-sizing: content-box;
@media screen and (max-width: 768px) {
	grid-template-columns: 1fr ;
	grid-template-rows: 20% 60% 20%;
	
}
`
export const MainHr = styled.hr`
height:0.1px;
width:100%;
border-width:0;
background-color:rgba(227, 255, 230, 0.3);
grid-column: 1;
margin-left: 5rem;
@media screen and (max-width: 768px) {
	width:100%;	
	margin-left: 0%;
}
`
export const MainTitle = styled.div`
margin-left: 5rem;
padding-top:20%;
font-family: system-ui;
color :#ECF9E8;
font-size: 3.25rem;
@media screen and (max-width: 768px) {
	grid-row: 1;
	font-size: 2rem;
	line-height: 130%;
}
`
export const Innovate = styled.div`
display: inline-grid;
color:#C8F4A6;
`
export const Underline = styled.img.attrs(props => ({
	src: underlineImg,
	alt: 'underline'
}))`
`
export const MainImg = styled.img.attrs(props => ({
	src: mainImg,
	alt: 'main image'
}))`
height:80%;
grid-row: 1 / span 3;
grid-column : 2;
justify-self: center;
@media screen and (max-width: 768px) {
	grid-row: 2;
	grid-column : 1;
}
`
export const OurCliens = styled.img.attrs(props => ({
	src: ourClients,
	alt: 'Our cliens'
}))`
margin-left: 5rem;
@media screen and (max-width: 768px) {
	grid-row: 3;
	
}
`
export const Decription = styled.p`
padding-top: 10%;
font-family: system-ui;
color: #ECF9E8;
font-size: 0.9rem;
margin-left: 5rem;
line-height: 150%;
@media screen and (max-width: 768px) {
	display: none;	
}
`
export const Btn = styled.button`
width: 9.375rem;
height: 3.125rem;
background-color: #E3FFE6;
border-radius: 5px;
color: #1E3F04;
margin-left: 5rem;
font-size: 1rem;
font-weight:600;
@media screen and (max-width: 768px) {
	display: none;
}
`
///////////////////////////Projects//////////////////////////

export const ProjectsRapper = styled.div`
margin-top: 7%;
display: grid;
grid-template-columns: 33% 1fr 33%;
align-items: center;
@media screen and (max-width: 768px) {
	grid-template-columns: 1fr;
	margin-bottom:-5rem;
}
`
export const ProjectsTitle = styled.div`
font-family: system-ui;
color: #ECF9E8;
font-size: 3em;
grid-column: 1/4;
margin-left: 2%;
margin-bottom: 2%;
max-width:58%;
@media screen and (max-width: 768px) {
	font-size: 2em;
	max-width:100%;
}

`

export const ProjectsHr = styled.hr`
height:0.1px;
width:90%;
border-width:0;
background-color:rgba(227, 255, 230, 0.3);
grid-column: 1/4;
@media screen and (max-width: 768px) {
	width:100%;	
}
`
export const ProjectImg = styled.img.attrs(props => (
	{
		src: projectImg,
		alt: 'project image'
	}
))`
position: absolute;
width: 85%;
grid-column: 3;
grid-row: 1 ;
z-index:1;
display: none;
@media screen and (max-width: 768px) {
	display: none;
}
`

export const ProjectNumb = styled.div`
font-family: system-ui;
font-size: 1.5rem;
color: #ECF9E8;
margin-left: 20%;
@media screen and (max-width: 768px) {
	margin-left: 2%;
}
`

export const ProjectDesc = styled.div`
font-size: 0.9rem;
font-family: system-ui;
color: #ECF9E8;
margin: 2%;
@media screen and (max-width: 768px) {
	margin: 2%;
}
`
export const ProjectCard = styled.div`
display: grid;
position: relative;
grid-template-columns: 33% 1fr 33%;
grid-column: 1/4;
align-items: center;
:hover {
	background-color: #E3FFE6
	;
}
:hover ${ProjectNumb} {
	color: #000000;

}
:hover ${ProjectDesc} {
	color: #000000;
}
@media screen and (max-width: 768px) {
	grid-template-columns: 1fr;
}
:hover ${ProjectImg} {
	display: block;
	@media screen and (max-width: 768px) {
		display: none;
	}
}
@media screen and (max-width: 768px) {
	grid-template-columns: 1fr;
}
`

//////////////////Woman///////////////////////

export const WomanRapper = styled.div`
display: grid;
margin-top: 7%;
grid-template-columns: 25% 75%;
grid-template-rows: 30% 70% ;
align-items: center;
@media screen and (max-width: 768px) {
	grid-template-columns: 1fr;
	margin-bottom:20%;
}
`
export const WomanImg = styled.img.attrs(props => ({
	src: Woman,
	alt: Woman
}))
	`grid-column:1;
grid-row:1/3;
width: 90%;
height: 93%;
@media screen and (max-width: 768px) {
	display:none;
}
`
export const WomanHeader = styled.h1`
margin-inline-start: 25px;
margin-top:15%;
grid-column:2;
max-width:80%;
grid-row:1;
color:#ECF9E8;
font-weight: 400;
font-family: system-ui;
font-size:3.5rem;
@media screen and (max-width: 768px){
	font-size:2.5rem;
	max-width:100%;
}
`
export const WomanRapper2 = styled.div`
grid-column:2;
grid-row:2;
align-self: baseline;
display:flex;
max-width:70%;
margin-top:15%;
justify-content:space-between;
@media screen and (max-width: 768px) {
	display:grid;
	grid-template-rows: 33% 33% 33% ;
	grid-template-columns: 1fr ;
	align-items: center;
	margin-top:-2rem;
}
`
export const WomanDiv=styled.div`
@media screen and (max-width: 768px){
	margin-bottom: 20em;
}
`
export const WomanRectangle = styled.img.attrs(props => ({
	src: rectangle,
	alt: rectangle
}))`
margin-left: 40px;
width: 40px;
height: 40px;
@media screen and (max-width: 768px) {
	grid-row:${props => props.row};
}
`
export const WomanVector = styled.img.attrs(props => ({
	src: vector,
	alt: vector
}))`
position: absolute;
margin-left: -40px;
width:1px;
height:15em;
@media screen and (max-width: 768px) {
	grid-row:${props => props.row};
	height: 18rem;
	margin-bottom:10%;
}
`
export const WomanHeader2 = styled.h3`
position:absolute;
margin-block-start: -43px;
color:#1E3F04;
margin-inline-start: 45px;
font-family: system-ui;
font-weight: 400;
font-size:1.5rem;
@media screen and (max-width: 768px) {
	grid-row:${props => props.row};
}
`
export const WomanHeader3 = styled.h3`
position:absolute;
padding-left:30px;
margin-inline-start: 45px;
margin-block-start: 15px;
color:#ECF9E8;
font-family: system-ui;
font-weight: 400;
font-size:2rem;
@media screen and (max-width: 768px) {
	grid-row:${props => props.row};
}
`
export const Womanp = styled.p`
position:absolute;
grid-column:1;
padding-left:30px;
margin-inline-start: 45px;
padding-top:60px;
color:#ECF9E8;
font-family: system-ui;
font-weight: 400;
max-width: 17%;
font-size: 0.75vw;
font-style:italic;
@media screen and (max-width: 768px) {
	max-width: 80%;
	padding-right: 20px;
	font-size: 18px;
	font-weight: 300;
	grid-row:${props => props.row};
}
`
//////////////////Gallery//////////////////

export const GalleryRapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr) ;
gap: 0.2%;
@media screen and (max-width: 768px) {
	grid-template-columns: 1fr ;
	grid-template-rows: repeat(4,0.5fr) ;
}
`

export const GalleryTitle = styled.div`
font-family: system-ui;
color: #ECF9E8;
font-size: 3.5em;
grid-column: 1/5;
margin: 2%;
grid-row: 1;
margin-bottom: 2%;
@media screen and (max-width: 768px){
	font-size: 2em;
}
`
export const GalleryImg = styled.img`
position: relative;
width: ${props => props.width};
height:100%;
@media screen and (max-width: 768px) {
	width: 100%;
	height: 45vh;
	object-fit: cover;
}

`
export const GalleryImgRapper = styled.div`
position: relative;
@media screen and (max-width: 768px) {
	width: 100%;
	height: ${props => props.widthMob};
	grid-column: 1;
	object-fit: cover;
}
`
export const GalleryImgText = styled.div`
position: absolute;
z-index:1;
bottom:3%;
left:5%;
font-family: system-ui;
color: #ECF9E8;
font-size: 1.5vw;
color: #ECF9E8;
@media screen and (max-width: 768px) {
	font-size: 1.8em;
}
`
/////////////////Question////////////////
export const QuestionWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10%;
`

export const QuestionText = styled.div`
font-family: system-ui;
color: #ECF9E8;
font-size: 3rem;
margin: 2%;
max-width:80%;
text-align: justify;
grid-row: 1;
margin-bottom: 2%;
margin-top: 10%;
text-align: center;
@media screen and (max-width: 768px){
	max-width:90%;
}
`
export const QuestionBtn = styled(Btn)`
display: block;
margin-bottom:10%;
width: 11.375rem;
margin-top:5%;
margin-left:0rem;
@media screen and (max-width: 768px){
	margin-top:10%;
	margin-left:0rem;
	margin-bottom:5%;
}
`

/////////////////footer////////////////

export const FooterWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
border-top: 1px solid rgba(227,255,230,0.3);
justify-items: center;
@media screen and (max-width: 768px) {
	grid-template-rows: 0.5fr 1fr 1fr;
	grid-template-columns: 1fr 1fr ;
	margin-top:30%;
}
`
export const FooterList = styled.ul`
list-style: none;
font-family: system-ui;
color: #ECF9E8;
font-size: 0.7rem;
line-height: 3em;
@media screen and (max-width: 768px) {
	display: block;
	grid-column:${props=>props.column};
	grid-row: ${props=>props.row};
}
`
export const FooterLogo = styled(Logo)`
margin-top: 1.5rem;
width: 30%;
@media screen and (max-width: 768px) {
	display: block;
	width: 60%;
	margin-left:3%;
	grid-column: 1/ 4;
	grid-row: 1;
}
`
//////////////////light/////////////////////
export const Light = styled.div`
position: absolute;
margin-left:65%;
border-radius:70%;
margin-top:-20%;
width: 5rem;
height: 5rem;
background: #dfd8c147;
box-shadow: 0px 0px 31px 29px #dfd8c147;
@media screen and (max-width: 768px) {
	display:none;
}
`
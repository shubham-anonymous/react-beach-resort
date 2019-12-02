import styled from "styled-components";
import defaultimg from '../images/room-1.jpeg'



const StyledHero = styled.header`
min-height:60vh;
display:flex;
align-items:center;
justify-content:center;
background: url(${props => props.img ? props.img: defaultimg});
background-size: cover;
background-position:center center;
`

export  default StyledHero;
import styled from "styled-components";

export const MainMenuStyled = styled.main`
width: 100%;
height: 100vh;
max-width: 100vw;
max-height: 100vh;
background-color: black;
overflow: hidden;

@import "susy";
@import "compass/reset";

.stars, .twinkling, .clouds {
	position:absolute;
	display:block;
	top:0; bottom:0;
	left:0; right:0;
	width:100%; height:100%;
}

.stars {
	z-index: 0;
	background: #000 url('https://image.ibb.co/mjnygo/stars.png') repeat top center;
}

.twinkling{
	z-index: 1;
	background:transparent url('https://image.ibb.co/ir1DE8/twinkling.png') repeat top center;
	animation: move-twink-back 200s linear infinite;
}

.clouds{
	z-index: 2;
    background:transparent url('https://image.ibb.co/bT4N7T/clouds.png') repeat top center;
	animation: move-clouds-back 200s linear infinite;
}

@keyframes move-twink-back {
	from {background-position:0 0;}
	to {background-position:-10000px 5000px;}
}

@keyframes move-clouds-back {
	from {background-position:0 0;}
	to {background-position:10000px 0;}
}



`
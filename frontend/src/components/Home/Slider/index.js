// import React from 'react';
// import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
// import { Container } from 'react-bootstrap';
// import './Slider.css';

// export default function Slider(props) {
//     return (
//         <Container className='slider-container' fluid >
//             <div className='arrow left-arrow' direction='left' onClick={()=>handleClick("left")}>
//                 <ArrowLeftOutlined />
//             </div>
//             <div className='wrapper'>
//                 <div className='slide'>
//                     <div className='img-container'>
//                         <img src='https://drive.google.com/uc?id=1IJgAVDm40y3_QKvkPTMKIjT8YNv9fo2b' alt='slider-1' />
//                     </div>
//                 </div>
//                 <div className='slide'>
//                     <div className='img-container'>
//                         <img src='https://drive.google.com/uc?id=1wdhQNEtBpUVlNHgmc78Dq8IhLtD15Zhb' alt='slider-2' />
//                     </div>
//                 </div>
//                 <div className='slide'>
//                     <div className='img-container'>
//                         <img src='https://drive.google.com/uc?id=142xyw2m_lbE2lTgklPDVzK8PK20Js63e' alt='slider-3' />
//                     </div>
//                 </div>
//                 <div className='slide'>
//                     <div className='img-container'>
//                         <img src='https://drive.google.com/uc?id=1HirEr5J7h2cVj7HHkMOdIoaSF62AqcZP' alt='slider-4' />
//                     </div>
//                 </div>
//             </div>
//             <div className='arrow right-arrow' onClick={()=>handleClick("right")}>
//                 <ArrowRightOutlined />
//             </div>
//         </Container>
//     );
// }

// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import { useState } from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   width: 100%;
//   height: 60vh;
//   display: flex;
//   position: relative;
//   overflow: hidden;
// `;

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;

// const Wrapper = styled.div`
//   height: 60vh;
//   width: 100%;
//   display: flex;
//   transition: all 1.5s ease;
//   transform: translateX(${(props) => props.slideIndex * -100}vw);
// `;

// const Slide = styled.div`
//   width: 100vw;
//   height: 60vh;
//   display: flex;
//   align-items: center;
//   background-color: #${(props) => props.bg};
// `;

// const ImgContainer = styled.div`
//   width: 100%;
//   flex: 1;
// `;

// const Image = styled.img`
//   height: 100%;
// `;

// const Slider = () => {
//     const [slideIndex, setSlideIndex] = useState(0);
//     const handleClick = (direction) => {
//         if (direction === "left") {
//             setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
//         } else {
//             setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
//         }
//     };

//     return (
//         <Container>
//             <Arrow direction="left" onClick={() => handleClick("left")}>
//                 <ArrowLeftOutlined />
//             </Arrow>
//             <Wrapper slideIndex={slideIndex}>

//                 <Slide >
//                     <ImgContainer>
//                         <Image src='https://drive.google.com/uc?id=1IJgAVDm40y3_QKvkPTMKIjT8YNv9fo2b' alt='slider-1' />
//                     </ImgContainer>
//                 </Slide>

//                 <Slide >
//                     <ImgContainer>
//                         <Image src='https://drive.google.com/uc?id=1wdhQNEtBpUVlNHgmc78Dq8IhLtD15Zhb' alt='slider-2' />
//                     </ImgContainer>
//                 </Slide>

//                 <Slide >
//                     <ImgContainer>
//                         <Image src='https://drive.google.com/uc?id=1pFe1axRH7WYacmtT7xTs4D86iChOYzqI' alt='slider-3' />
//                     </ImgContainer>
//                 </Slide>

//                 <Slide >
//                     <ImgContainer>
//                         <Image src='https://drive.google.com/uc?id=13dv2mac7HV5HUHX1YyzXpaBDfhHwDXDw' alt='slider-4' />
//                     </ImgContainer>
//                 </Slide>


//             </Wrapper>
//             <Arrow direction="right" onClick={() => handleClick("right")}>
//                 <ArrowRightOutlined />
//             </Arrow>
//         </Container>
//     );
// };

// export default Slider;

import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Slider.css';

const photos = [
    {
        name: 'Photo 1',
        url: 'https://drive.google.com/uc?id=1AH5LvkZwsuzg8El6iE_kqLBHdaycv4G6'
    },
    {
        name: 'Photo 2',
        url: 'https://drive.google.com/uc?id=15LF_FMbPjBIsEaXuEfPc18dc91TOYWnC'
    },
    {
        name: 'Photo 3',
        url: 'https://drive.google.com/uc?id=1L45ZYzZTASQpRxQdOxluD1U33DU54AtH'
    },
    {
        name: 'Photo 4',
        url: 'https://drive.google.com/uc?id=1-_QyB0Pqoi_hQT8zrIlh-Q6bRmtDBgvg'
    }
]
export default function Slide() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        adaptiveHeight: true,
        slidesToScroll: 1,
        pauseOnHover: true,
        className: 'slides'
    }
    return (
        <div className='slider-container'>
            <Slider {...settings}>
                {photos.map((photo, index) => {
                    return (
                        <div className='slider-item' key={`slider-item-${index}`}>
                            <img width='100%' src={photo.url} />
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderCategories } from './SliderCategories';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  className: 'slide',
};

function SimpleSlider() {

  return (
    <Container>
      <StyledSlider {...settings}>
        {CATEGORIES.map(({ id, text }) => {
          return (
            <CategoryContainer key={id}>
              <SliderCategories text={text} />
            </CategoryContainer>
          );
        })}
      </StyledSlider>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  width: 600px;
  margin: 0 auto;
  .slick-prev {
    left: 0;
    top: 29%;
    z-index: 5;
    &:before {
      background: url('https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_960_720.png')
        center center / 10px no-repeat;
    }
  }

  .slick-next {
    right: 0;
    top: 30%;
    z-index: 5;
    &:before {
      background: url('https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646214_960_720.png')
        center center / 10px no-repeat;
    }
  }

  .slick-prev:before,
  .slick-next:before {
    content: '';
    background-size: contain;
    width: 25px;
    height: 25px;
    z-index: 10;
    display: block;
  }

  .slick-slide div {
    outline: none;
    display: inline;
  }
  .slick-list {
    width: 500px;
    margin: auto;
  }
`;

const CategoryContainer = styled.div`
  margin: 0 16px;
`;

const CATEGORIES = [
  {
    id: 1,
    text: 'Dress',
  },
  {
    id: 2,
    text: 'T-Shirts',
  },
  {
    id: 3,
    text: 'Shirts',
  },
  {
    id: 4,
    text: 'Socks',
  },
  {
    id: 5,
    text: 'Coats',
  },
  {
    id: 6,
    text: 'Knitwear',
  },
  {
    id: 7,
    text: 'Swimwear',
  },
  {
    id: 8,
    text: 'Shoes',
  },
  {
    id: 9,
    text: 'Tops',
  },
  {
    id: 10,
    text: 'Sportswear',
  },
  {
    id: 11,
    text: 'Nightwear',
  },
  {
    id: 12,
    text: 'Tailoring',
  },
];

export default SimpleSlider;

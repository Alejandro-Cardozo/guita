import { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../UI/ButtonElement';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from './HeroElements';

const Hero = () => {
  const [hover, setHover] = useState(false)

  const onHoverHandler = () => {
    setHover(prev => !prev)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards
          your next payment
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHoverHandler} onMouseLeave={onHoverHandler} primary='true'>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

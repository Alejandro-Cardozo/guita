import svg1 from '../../images/svg-1.svg';
import svg2 from '../../images/svg-2.svg';
import svg3 from '../../images/svg-3.svg';
import svg4 from '../../images/svg-4.svg';
import svg5 from '../../images/svg-5.svg';
import svg6 from '../../images/svg-6.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transaction with zero fees.',
  description:
    'Get access to our exclusive app that allow you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Get Started',
  imgStart: false,
  img: svg3,
  alt: 'Transaction',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Login to your account at any time',
  description:
    'We have you covered no matter where you are located. All you need is an internet connection and phone or computer',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: svg5,
  alt: 'Save Money',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headline: 'Creating an account is extremely easy',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: false,
  img: svg6,
  alt: 'Form',
  dark: false,
  primary: false,
  darkText: true,
};

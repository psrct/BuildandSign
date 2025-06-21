import AboutService from './_components/AboutService';
import Whyus from './_components/Whyus';
import Article from './article/articles';
import Index from './_components/index';
import Myservice from './_components/myservice';

export default async function Home() {
  return (
    <>
    <Index />  
    <Whyus />
    <Myservice />
    <AboutService />
    <Article/>
    </>
  );
}

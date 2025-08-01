
import HeroContent from '@/@components/Homepage/HeroSection/HeroContent';
import HeroImage from '@/@components/Homepage/HeroSection/HeroImage';
import LayoutContainer from '@/@components/layout/LayoutContainer';
import homepageData from '@/@contents/homepage.json';

const HeroSection = () => {
    const { heroSection } = homepageData;

    return (
        <section className="relative bg-dark-bg py-12 lg:py-14 overflow-hidden">
            <LayoutContainer>
                {/* Add relative here to allow z-index to work properly */}
                <div className="relative flex flex-col">
                    <div className='w-full lg:w-[525px] z-100 relative order-2 lg:order-1'>
                        <HeroContent heroSection={heroSection} />
                    </div>
                    <div className='lg:absolute -right-30 top-0 order-1 lg:order-2'>
                        <HeroImage />
                    </div>
                </div>
            </LayoutContainer>
        </section>
    );
};

export default HeroSection;
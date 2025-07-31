
import HeroContent from '@/@components/Homepage/HeroSection/HeroContent';
import HeroImage from '@/@components/Homepage/HeroSection/HeroImage';
import LayoutContainer from '@/@components/layout/LayoutContainer';
import homepageData from '@/@contents/homepage.json';

const HeroSection = () => {
    const { heroSection } = homepageData;

    return (
        <section className="bg-[#0a0a0a] py-12 lg:py-14 overflow-hidden">
            <LayoutContainer>
                <div className="flex flex-col lg:flex-row lg:justify-between gap-4 items-center">
                    <HeroContent heroSection={heroSection} />
                    <HeroImage />
                </div>
            </LayoutContainer>
        </section>
    );
};

export default HeroSection;
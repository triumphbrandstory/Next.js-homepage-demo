import heroImage from '@/@assets/images/hero-bg.png';
import Button from '@/@components/ui/Button';
import LayoutContainer from '@/@components/layout/LayoutContainer';
import homepageData from '@/@contents/homepage.json';
import Image from 'next/image';

const HeroSection = () => {
    const { heroSection } = homepageData;

    return (
        <section className="bg-[#0a0a0a] py-12 lg:py-14 overflow-hidden">
            <LayoutContainer>
                <div className="flex flex-col lg:flex-row lg:justify-between gap-4 items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-6 md:space-y-8 order-2 lg:order-1 lg:w-1/2 lg:flex-shrink-0">
                        {/* Main Heading */}
                        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight mb-2">
                            {heroSection.mainHeading}
                        </h1>

                        {/* Sub Heading */}
                        <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#00E7F9] text-shadow-[0px_4px_4px_#FC004E]">
                            {heroSection.subHeading}
                        </h2>

                        {/* Features List */}
                        <div className="space-y-4">
                            {heroSection.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="text-yellow-400 text-xl md:text-2xl mt-1 flex-shrink-0">✨</span>
                                    <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="space-y-3 max-w-md">
                            <Button
                                size="lg"
                                className="w-full max-w-md text-xl font-bold tracking-wide"
                            >
                                {heroSection.cta.text} ›
                            </Button>
                            <p className="text-cyan-400 text-sm md:text-base font-medium text-center">
                                {heroSection.cta.subText}
                            </p>
                        </div>

                        {/* Legal Text */}
                        <div className="space-y-2 text-xs md:text-sm text-gray-400">
                            <p className="leading-relaxed">
                                {heroSection.legalText}
                            </p>
                            <p className="text-gray-500">
                                {heroSection.copyright.replace('{year}', new Date().getFullYear().toString())}
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className="w-full flex justify-center items-center order-1 lg:order-2">
                        <div className="w-full">
                            <Image
                                src={heroImage}
                                alt="Phone Mockup"
                                className="w-full h-auto max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </LayoutContainer>
        </section>
    );
};

export default HeroSection;
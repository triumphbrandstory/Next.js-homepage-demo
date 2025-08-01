import HeroCTASection from './HeroCTASection';
import HeroFeaturesList from './HeroFeaturesList';
import HeroHeadings from './HeroHeadings';
import HeroLegalText from './HeroLegalText';

interface HeroContentProps {
    heroSection: {
        mainHeading: string;
        subHeading: string;
        features: string[];
        cta: {
            text: string;
            subText: string;
        };
        legalText: string;
        copyright: string;
    };
}

const HeroContent = ({ heroSection }: HeroContentProps) => {
    return (
        <div className="w-full text-white space-y-6 md:space-y-8">
            <HeroHeadings
                mainHeading={heroSection.mainHeading}
                subHeading={heroSection.subHeading}
            />

            <HeroFeaturesList features={heroSection.features} />

            <div className='flex flex-col'>
                <HeroCTASection cta={heroSection.cta} />
                
                <HeroLegalText
                    legalText={heroSection.legalText}
                    copyright={heroSection.copyright}
                />
            </div>


        </div>
    );
};

export default HeroContent;
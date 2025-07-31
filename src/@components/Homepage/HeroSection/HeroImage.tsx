import heroImage from '@/@assets/images/hero-bg.png';
import Image from 'next/image';

const HeroImage = () => {
    return (
        <div className="w-full flex justify-center items-center order-1 lg:order-2">
            <div className="w-full">
                <Image
                    src={heroImage}
                    alt="Phone Mockup"
                    className="w-full h-auto max-w-full"
                />
            </div>
        </div>
    );
};

export default HeroImage;
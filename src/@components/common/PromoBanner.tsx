
import homepageData from '@/@contents/homepage.json';

const PromoBanner = () => {
    const { topBanner } = homepageData.promoSections;

    return (
        <div
            className="w-full py-5 lg:py-2.5 px-4 text-center text-white font-medium bg-promo-background"
        >
            <div className="flex items-center justify-center gap-2 font-extrabold">
                <span className="text-base lg:text-xl">
                    <span className="text-dark-cyan">{topBanner.title}:</span>
                    <span className="ml-2">{topBanner.description}</span>
                </span>
            </div>
        </div>
    );
};

export default PromoBanner;
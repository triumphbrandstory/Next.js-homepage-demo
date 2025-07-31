
import homepageData from '@/@contents/homepage.json';

const PromoBanner = () => {
    const { topBanner } = homepageData.promoSections;

    return (
        <div
            className="w-full py-3 px-4 text-center text-white font-medium bg-promo-background"
        >
            <div className="flex items-center justify-center gap-2">
                <span className="text-lg">{topBanner.icon}</span>
                <span className="text-sm sm:text-base">
                    <span className="font-bold text-cyan-200">{topBanner.title}:</span>
                    <span className="ml-1">{topBanner.description}</span>
                </span>
            </div>
        </div>
    );
};

export default PromoBanner;
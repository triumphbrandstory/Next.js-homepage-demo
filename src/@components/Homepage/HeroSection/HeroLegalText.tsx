interface HeroLegalTextProps {
    legalText: string;
    copyright: string;
}

const HeroLegalText = ({ legalText, copyright }: HeroLegalTextProps) => {
    const currentYear = new Date().getFullYear().toString();

    return (
        <div className="text-dark-gray order-1 lg:order-2 mb-8">
            <p className="text-xs text-center lg:text-left leading-5">
                {legalText}
            </p>
            <p className="text-[10px] lg:text-xs text-center lg:text-left mt-5 md:mt-3">
                {copyright.replace('{year}', currentYear)}
            </p>
        </div>
    );
};

export default HeroLegalText;
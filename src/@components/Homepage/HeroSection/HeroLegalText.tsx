interface HeroLegalTextProps {
    legalText: string;
    copyright: string;
}

const HeroLegalText = ({ legalText, copyright }: HeroLegalTextProps) => {
    const currentYear = new Date().getFullYear().toString();

    return (
        <div className="space-y-2 text-xs text-dark-gray order-1 lg:order-2 mb-8">
            <p className="text-center lg:text-left leading-5">
                {legalText}
            </p>
            <p className="text-center lg:text-left">
                {copyright.replace('{year}', currentYear)}
            </p>
        </div>
    );
};

export default HeroLegalText;
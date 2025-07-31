interface HeroLegalTextProps {
    legalText: string;
    copyright: string;
}

const HeroLegalText = ({ legalText, copyright }: HeroLegalTextProps) => {
    const currentYear = new Date().getFullYear().toString();

    return (
        <div className="space-y-2 text-xs md:text-sm text-gray-400">
            <p className="leading-relaxed">
                {legalText}
            </p>
            <p className="text-gray-500">
                {copyright.replace('{year}', currentYear)}
            </p>
        </div>
    );
};

export default HeroLegalText;
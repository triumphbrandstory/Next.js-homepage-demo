interface HeroHeadingsProps {
    mainHeading: string;
    subHeading: string;
}

const HeroHeadings = ({ mainHeading, subHeading }: HeroHeadingsProps) => {
    return (
        <div className="space-y-2">
            {/* Main Heading */}
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight">
                {mainHeading}
            </h1>

            {/* Sub Heading */}
            <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#00E7F9] text-shadow-[0px_4px_4px_#FC004E]">
                {subHeading}
            </h2>
        </div>
    );
};

export default HeroHeadings;
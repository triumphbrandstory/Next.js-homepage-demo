interface HeroHeadingsProps {
    mainHeading: string;
    subHeading: string;
}

const HeroHeadings = ({ mainHeading, subHeading }: HeroHeadingsProps) => {
    return (
        <div className="space-y-2 px-2 lg:px-0">
            {/* Main Heading */}
            <h1 className="text-center lg:text-left text-2xl lg:text-4xl font-bold leading-tight">
                {mainHeading}
            </h1>

            {/* Sub Heading */}
            <h2 className="text-center lg:text-left text-2xl lg:text-4xl font-semibold text-[#00E7F9] text-shadow-[0px_4px_4px_#FC004E]">
                {subHeading}
            </h2>
        </div>
    );
};

export default HeroHeadings;
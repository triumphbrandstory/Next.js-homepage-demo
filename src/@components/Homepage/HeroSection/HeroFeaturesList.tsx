interface HeroFeaturesListProps {
    features: string[];
}

const HeroFeaturesList = ({ features }: HeroFeaturesListProps) => {
    return (
        <div className="space-y-4">
            {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                    <span className="text-yellow-400 text-xl flex-shrink-0">✨</span>
                    <p className="text-gray-200 text-base leading-relaxed">
                        {feature}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default HeroFeaturesList;
import Button from '@/@components/ui/Button';

interface HeroCTASectionProps {
    cta: {
        text: string;
        subText: string;
    };
}

const HeroCTASection = ({ cta }: HeroCTASectionProps) => {
    return (
        <div className="space-y-3 max-w-md">
            <Button
                size="lg"
                className="w-full max-w-md text-xl font-bold tracking-wide"
            >
                {cta.text} ›
            </Button>
            <p className="text-cyan-400 text-sm md:text-base font-medium text-center">
                {cta.subText}
            </p>
        </div>
    );
};

export default HeroCTASection;
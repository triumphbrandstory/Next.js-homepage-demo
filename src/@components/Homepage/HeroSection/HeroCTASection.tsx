import Button from '@/@components/ui/Button';
import { ChevronRight } from 'lucide-react';

interface HeroCTASectionProps {
    cta: {
        text: string;
        subText: string;
    };
}

const HeroCTASection = ({ cta }: HeroCTASectionProps) => {
    return (
        <div className="w-full space-y-3 max-w-[313px] order-2 lg:order-1 lg:mb-8">
            <Button
                size="lg"
                className="w-full max-w-[313px] text-xl font-bold tracking-wide !py-2"
                icon={ChevronRight}
            >
                {cta.text}
            </Button>
            <p className="text-white text-sm font-medium text-center mt-5 md:mt-3">
                {cta.subText}
            </p>
        </div>
    );
};

export default HeroCTASection;
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
        <div className="space-y-3 max-w-md order-2 lg:order-1 lg:mb-8">
            <Button
                size="lg"
                className="w-full max-w-md text-xl font-bold tracking-wide !py-2"
            >
                {cta.text} <ChevronRight />
            </Button>
            <p className="text-white text-sm font-medium text-center">
                {cta.subText}
            </p>
        </div>
    );
};

export default HeroCTASection;
// src/app/components/FeatureCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
    icon: Icon,
    title,
    description,
}) => (
    <Card className="bg-gray-800 h-full">
        <CardHeader>
            <CardTitle className="flex items-center text-blue-400">
                <Icon className="w-6 h-6 mr-2" />
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-gray-300">{description}</p>
        </CardContent>
    </Card>
);

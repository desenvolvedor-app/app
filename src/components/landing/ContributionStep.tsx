// src/app/components/ContributionStep.tsx
interface ContributionStepProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

export const ContributionStep: React.FC<ContributionStepProps> = ({
    icon: Icon,
    title,
    description,
}) => (
    <div className="flex flex-col items-center text-center">
        <Icon className="w-10 h-10 text-green-400 mb-2" />
        <h3 className="text-lg font-semibold text-gray-200 mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

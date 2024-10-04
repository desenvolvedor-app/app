// src/app/components/TechStackVote.tsx
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { registerVote } from '@/lib/vote.service';

interface TechStackVoteProps {
    name: string;
    title: string;
    options: string[];
}

export const TechStackVote: React.FC<TechStackVoteProps> = ({
    name,
    title,
    options,
}) => {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [customOption, setCustomOption] = useState<string>('');
    const [hasVoted, setHasVoted] = useState<boolean>(false);

    const { toast } = useToast();

    const handleVote = async () => {
        const optionToVote =
            selectedOption === 'other' ? customOption : selectedOption;
        if (optionToVote) {
            await registerVote(name, optionToVote);

            toast({
                title: 'Obrigado por participar da votação!',
                description:
                    'Sua participação é muito importante para a construção do desenvolvedor.app. A comunidade agradece!',
                duration: 3000,
            });

            setHasVoted(true);
        }
    };

    return (
        <Card className="w-full max-w-md bg-gray-800">
            <CardHeader>
                <CardTitle className="text-blue-400">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <RadioGroup
                    onValueChange={setSelectedOption}
                    value={selectedOption}
                >
                    {options.map((option) => (
                        <div
                            key={option}
                            className="flex items-center justify-between space-x-2 mb-2"
                        >
                            <div className="flex items-center">
                                <RadioGroupItem
                                    value={option}
                                    id={option}
                                    className={`${
                                        selectedOption === option
                                            ? 'bg-white'
                                            : ''
                                    } focus:ring-2 focus:ring-offset-2 focus:ring-blue-600`}
                                    disabled={hasVoted}
                                />
                                <Label
                                    htmlFor={option}
                                    className="text-gray-300 ml-2"
                                >
                                    {option}
                                </Label>
                            </div>
                        </div>
                    ))}
                    <div className="flex items-center space-x-2 mt-4">
                        <RadioGroupItem
                            value="other"
                            id="other"
                            className={`${
                                selectedOption === 'other' ? 'bg-white' : ''
                            } focus:ring-2 focus:ring-offset-2 focus:ring-blue-600`}
                            disabled={hasVoted}
                        />
                        <Label htmlFor="other" className="text-gray-300">
                            Outro:
                        </Label>
                    </div>
                    <Input
                        type="text"
                        value={customOption}
                        onChange={(e) => setCustomOption(e.target.value)}
                        className="bg-gray-700 border-gray-600 text-gray-100 mt-2"
                        placeholder="Digite sua sugestão"
                        disabled={selectedOption !== 'other' || hasVoted}
                    />
                </RadioGroup>
                <Button
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700"
                    onClick={handleVote}
                    disabled={
                        !selectedOption ||
                        (selectedOption === 'other' && !customOption) ||
                        hasVoted
                    }
                >
                    Enviar Voto
                </Button>
            </CardContent>
        </Card>
    );
};

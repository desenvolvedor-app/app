'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Users,
    Lightbulb,
    GitBranch,
    GitPullRequest,
    MessageSquare,
} from 'lucide-react';

import { FaGithub, FaDiscord } from 'react-icons/fa';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { addEmailFollowUp } from '@/lib/email.service';

const FeatureCard = ({
    icon: Icon,
    title,
    description,
}: {
    icon: React.ElementType;
    title: string;
    description: string;
}) => (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <Icon className="w-10 h-10 text-blue-400 mb-4" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const ContributionStep = ({
    icon: Icon,
    title,
}: {
    icon: React.ElementType;
    title: string;
}) => (
    <div className="flex items-center space-x-2">
        <Icon className="w-6 h-6 text-green-400" />
        <span className="text-gray-300">{title}</span>
    </div>
);

export default function Home() {
    const [email, setEmail] = useState('');
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await addEmailFollowUp(email);

        toast({
            title: 'Inscrição realizada com sucesso!',
            description:
                'Ficamos felizes em ter você na comunidade desenvolvedor.app',
        });

        setEmail('');
    };

    return (
        <TooltipProvider>
            <div className="min-h-screen w-full bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4 md:p-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="text-blue-400">desenvolvedor</span>
                        <span className="text-gray-300">.</span>
                        <span className="text-purple-400">app</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-4">
                        A plataforma colaborativa para desenvolvedores de todo o
                        país
                    </p>
                    <p className="text-lg text-gray-400">
                        Junte-se a nós e participe da construção do futuro da
                        tecnologia
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-md mb-12"
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            type="email"
                            placeholder="Seu e-mail profissional"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-800 border-gray-700 placeholder-gray-500 text-gray-100"
                            required
                        />
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
                        >
                            Participe da nossa comunidade
                        </Button>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl"
                >
                    <FeatureCard
                        icon={Code}
                        title="Desenvolvimento Colaborativo"
                        description="Contribua com código em projetos open source, incluindo esta plataforma."
                    />
                    <FeatureCard
                        icon={Users}
                        title="Networking Profissional"
                        description="Conecte-se com outros desenvolvedores e expanda suas oportunidades."
                    />
                    <FeatureCard
                        icon={Lightbulb}
                        title="Inovação Tecnológica"
                        description="Participe de discussões sobre as mais recentes tendências tecnológicas."
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl font-semibold mb-4">
                        Como Contribuir
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                        <ContributionStep
                            icon={GitBranch}
                            title="Fork o repositório"
                        />
                        <ContributionStep
                            icon={MessageSquare}
                            title="Participe das discussões"
                        />
                        <ContributionStep
                            icon={GitPullRequest}
                            title="Envie um Pull Request"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-gray-400 text-center"
                >
                    <p className="mb-4 text-lg">
                        Estamos juntos, impulsionando o desenvolvimento de
                        software no Brasil.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <Tooltip>
                            <TooltipTrigger>
                                <a
                                    href="https://github.com/desenvolvedor-app/app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    <FaGithub size={28} />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Contribua no GitHub</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                <a
                                    href="https://discord.gg/dty49FVS"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white transition-colors"
                                >
                                    <FaDiscord size={28} />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Junte-se no Discord</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </motion.div>
            </div>
        </TooltipProvider>
    );
}

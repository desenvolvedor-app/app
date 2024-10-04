'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Users,
    Lightbulb,
    Briefcase,
    GraduationCap,
    Star,
    MessageSquare,
    UserPlus,
    Vote,
    Rocket,
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

import { FeatureCard } from '@/components/landing/FeatureCard';
import { ContributionStep } from '@/components/landing/ContributionStep';
import { TechStackVote } from '@/components/landing/TechStackVote';

import { addEmailFollowUp } from '@/lib/email.service';

export default function Home() {
    const [email, setEmail] = useState<string>('');
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await addEmailFollowUp(email);

            toast({
                title: 'Inscrição realizada com sucesso!',
                description:
                    'Você se inscreveu para receber as novidades do desenvolvedor.app. Fique ligado nas atualizações!',
                duration: 3000,
            });

            setEmail('');
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast({
                    title: 'Erro ao se inscrever',
                    description:
                        error.message ||
                        'Por favor, tente novamente mais tarde.',
                    variant: 'destructive',
                });
            } else {
                toast({
                    title: 'Erro ao se inscrever',
                    description:
                        'Erro desconhecido. Por favor, tente novamente mais tarde.',
                    variant: 'destructive',
                });
            }
        }
    };

    return (
        <TooltipProvider>
            <div className="min-h-screen w-full bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4 md:p-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 max-w-4xl"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="text-blue-400">desenvolvedor</span>
                        <span className="text-gray-300">.</span>
                        <span className="text-purple-400">app</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-4">
                        A plataforma colaborativa criada por desenvolvedores,
                        para desenvolvedores de todo o Brasil.
                    </p>
                    <p className="text-lg text-gray-400 mb-6">
                        🚀 Junte-se a nós e participe da construção do futuro da
                        tecnologia!
                    </p>
                    <p className="text-md text-gray-400 mb-6">
                        Somos um projeto novinho em folha e precisamos da sua
                        ajuda para crescer. Mesmo pequenas ações fazem uma
                        grande diferença.
                    </p>
                    <div className="flex justify-center space-x-4 mb-6">
                        <Button
                            variant="outline"
                            className="bg-gray-800 text-gray-100 hover:bg-gray-700"
                            onClick={() =>
                                window.open(
                                    'https://github.com/desenvolvedor-app/app',
                                    '_blank',
                                )
                            }
                        >
                            <FaGithub className="mr-2" /> GitHub
                        </Button>
                        <Button
                            variant="outline"
                            className="bg-gray-800 text-gray-100 hover:bg-gray-700"
                            onClick={() =>
                                window.open(
                                    'https://discord.gg/dty49FVS',
                                    '_blank',
                                )
                            }
                        >
                            <FaDiscord className="mr-2" /> Discord
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-4xl mb-12"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        Participe Ativamente Desde o Início
                    </h2>
                    <p className="text-gray-400 text-center mb-6">
                        Vote nas Tecnologias que Vamos Utilizar! Sua opinião é
                        fundamental para construirmos algo que represente a
                        comunidade.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-stretch md:items-start space-y-6 md:space-y-0 md:space-x-6">
                        <TechStackVote
                            name="frontend"
                            title="Qual stack de Front-end devemos usar?"
                            options={[
                                'React + Vite',
                                'Vue.js + Vite',
                                'Angular',
                                'Svelte + Sapper',
                                'Next.js',
                            ]} // Boilerplate-oriented stacks
                        />

                        <TechStackVote
                            name="backend"
                            title="Qual stack de Back-end devemos usar?"
                            options={[
                                'Node.js + Express',
                                'Django',
                                'Laravel',
                                'Nest.js',
                                'Go + Fiber',
                            ]} // Added Go + Fiber for more variety
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 w-full max-w-4xl"
                >
                    <FeatureCard
                        icon={Code}
                        title="Desenvolvimento Colaborativo"
                        description="Contribua com código em projetos open source, incluindo a construção da própria plataforma."
                    />
                    <FeatureCard
                        icon={Users}
                        title="Networking Profissional"
                        description="Conecte-se com outros desenvolvedores, participe de eventos, discussões e fóruns."
                    />
                    <FeatureCard
                        icon={Lightbulb}
                        title="Inovação Tecnológica"
                        description="Participe de conversas sobre as últimas tendências e inovações tecnológicas."
                    />
                    <FeatureCard
                        icon={Briefcase}
                        title="Postagem de Vagas"
                        description="Confira oportunidades de emprego para devs e aplique diretamente para vagas."
                    />
                    <FeatureCard
                        icon={GraduationCap}
                        title="Mentorias e Apoio"
                        description="Aprenda com devs mais experientes, ofereça mentoria e fortaleça o aprendizado contínuo."
                    />
                    <FeatureCard
                        icon={Rocket}
                        title="Hackathons"
                        description="Participe de desafios de programação e hackathons para testar suas habilidades e criar soluções inovadoras."
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mb-12 w-full max-w-4xl"
                >
                    <h2 className="text-2xl font-semibold mb-6">
                        Como Você Pode Contribuir Agora Mesmo
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ContributionStep
                            icon={Star}
                            title="Dê uma Estrela no GitHub"
                            description="Mostre seu apoio ao projeto e fique por dentro das atualizações."
                        />
                        <ContributionStep
                            icon={MessageSquare}
                            title="Participe das Discussões"
                            description="Compartilhe suas ideias e sugestões no Discord."
                        />
                        <ContributionStep
                            icon={UserPlus}
                            title="Convide Amigos"
                            description="Quanto mais pessoas envolvidas, maior será o impacto da comunidade."
                        />
                        <ContributionStep
                            icon={Vote}
                            title="Vote nas Tecnologias"
                            description="Ajude a decidir quais stacks vamos utilizar no desenvolvimento."
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mb-12 w-full max-w-md"
                >
                    <h2 className="text-2xl font-semibold mb-4">
                        Inscreva-se para Receber Atualizações
                    </h2>
                    <p className="text-gray-400 mb-4">
                        Fique por dentro das novidades e evoluções do projeto.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            type="email"
                            placeholder="Seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-800 border-gray-700 placeholder-gray-500 text-gray-100"
                            required
                        />
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
                        >
                            Inscrever-se
                        </Button>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-gray-400 text-center max-w-4xl"
                >
                    <p className="mb-6 text-lg">
                        Esperamos que você se junte a nós nessa jornada
                        emocionante. Cada contribuição, por menor que seja,
                        ajuda a construir uma plataforma feita por todos e para
                        todos.
                    </p>
                    <p className="text-xl font-semibold text-blue-400 mb-6">
                        💡 Vamos construir o Desenvolvedor.app juntos!
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

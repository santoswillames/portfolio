'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
  CheckCircle,
  Rocket,
  Users,
  ShieldCheck,
  ChevronDownIcon,
} from 'lucide-react'

import Image from 'next/image'
import n8nLogo from '@/public/n8n-logo.png' // Substitua pelo caminho correto
import Particles from '@/components/particles'
import { PulsatingButton } from '@/components/magicui/pulsating-button'
import { BorderBeam } from '@/components/magicui/border-beam'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion'

export default function LandingPage() {
  return (
    <main className="relative bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative text-center py-20 px-6 max-w-4xl mx-auto">
        {/* Particles ocupando o fundo inteiro */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Particles
            particleColors={['#5f00109e', '#72002c8d']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <Image
          src={n8nLogo}
          alt="N8n Logo"
          width={100}
          height={100}
          className="mx-auto my-4 relative z-10"
        />
        {/* Conteúdo da seção */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Domine o <span className="text-blue-400">N8N</span> e Crie Agentes de
          IA Poderosos
        </motion.h1>

        <p className="text-lg text-gray-300 mb-6 relative z-10">
          Aprenda automações avançadas, integração com CRM, Supabase e muito
          mais.
        </p>
        <div className="flex justify-center">
          <a
            href="https://pay.kiwify.com.br/ar7vrIl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PulsatingButton className="text-white bg-blue-500 hover:bg-blue-600 relative z-10">
              Quero Me Inscrever
            </PulsatingButton>
          </a>
        </div>
      </section>

      {/* Para Quem é Esse Curso */}
      <section className="py-16 px-6 bg-gray-800 relative z-10 max-w-[700px] md:m-auto rounded-md mx-3">
        <h2 className="text-center text-3xl font-bold mb-6">
          Para Quem é Esse Curso?
        </h2>
        <ul className="max-w-4xl mx-auto space-y-4 text-lg">
          {targetAudience.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle className="text-blue-400 w-6 h-6" />
              {item}
            </li>
          ))}
        </ul>
        <BorderBeam
          duration={6}
          size={400}
          className="from-transparent via-red-500 to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          className="from-transparent via-blue-500 to-transparent"
        />
      </section>

      {/* O Que Você Vai Aprender */}
      <section className="py-16 px-6 relative z-10">
        <h2 className="text-center text-3xl font-bold mb-6">
          O Que Você Vai Aprender?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {courseModules.map((module, index) => (
            <Card key={index} className="bg-gray-800 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-400">
                  {module.title}
                </h3>
                <p className="text-gray-400 mt-2">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {benefits.map((benefit, index) => (
          <Card key={index} className="bg-gray-800 shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <benefit.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-400 mt-2">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
      {/* Oferta Especial */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">
          Oferta Especial por Tempo Limitado
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Ao se inscrever agora, você recebe acesso a
          <strong> bônus exclusivos</strong> incluindo módulos sobre JavaScript
          e PostgreSQL — ferramentas essenciais para turbinar suas automações no
          n8n.
        </p>
        <div className="flex justify-center items-center gap-10 mb-8">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript Logo"
            width={64}
            height={64}
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL Logo"
            width={64}
            height={64}
          />
        </div>
        <a
          href="https://pay.kiwify.com.br/ar7vrIl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-white text-black font-bold px-6 py-3 text-lg hover:bg-gray-200">
            Garantir Minha Vaga com Bônus
          </Button>
        </a>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-900 text-white relative z-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Perguntas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqList.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`rounded-lg border ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'} shadow-md`}
              >
                <AccordionTrigger className="flex justify-between items-center text-lg font-semibold text-left px-4 py-3 w-full">
                  {faq.question}
                  <ChevronDownIcon className="w-5 h-5 text-blue-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-4 mx-3">
          Pronto para Transformar Seu Trabalho?
        </h2>
        <Image
          src={n8nLogo}
          alt="N8n Logo"
          width={80}
          height={80}
          className="mx-auto my-4"
        />
        <p className="text-lg text-gray-300 mb-6">
          Garanta sua vaga agora e comece a criar automações incríveis.
        </p>
        <a
          href="https://pay.kiwify.com.br/ar7vrIl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600">
            Quero Começar Agora
          </Button>
        </a>
      </section>
    </main>
  )
}

const targetAudience = [
  'Aprender a profissão de Gestor de automações ser bem remunerado.',
  'Quer automatizar tarefas sem depender de programadores.',
  'Deseja criar agentes de IA personalizados.',
  'Trabalha com CRM, planilhas e e-mails e quer ganhar mais produtividade.',
  'Busca uma comunidade para trocar experiências e tirar dúvidas.',
]

const courseModules = [
  {
    title: 'Introdução',
    description:
      'Este módulo inicial tem como objetivo apresentar o curso, esclarecer os objetivos de aprendizagem e contextualizar você sobre a jornada que fará desde os conceitos básicos até as aplicações avançadas com n8n e agentes de IA.',
  },
  {
    title: 'Fundamentos de Agentes de IA',
    description:
      'Neste módulo, você será introduzido aos conceitos fundamentais por trás dos agentes de inteligência artificial. A ideia é construir uma base teórica sólida antes de entrar na parte prática, para que você entenda o que são agentes de IA, como eles funcionam, e por que são essenciais em automações modernas.',
  },
  {
    title: 'Engenharia de prompt',
    description:
      'Neste módulo, você vai aprender a se comunicar de forma eficaz com modelos de linguagem como o ChatGPT, dominando técnicas de engenharia de prompt.',
  },
  {
    title: 'Fundamentos de Automações com IA',
    description:
      'Neste módulo, você vai entender como unir inteligência artificial com automações práticas. Ou seja: como transformar decisões tomadas por modelos de IA em ações reais, dentro de sistemas, ferramentas ou fluxos de trabalho automatizados.',
  },
  {
    title: 'Fundamentos do N8N',
    description:
      'Neste módulo, você será introduzido ao universo do N8N, entendendo desde o que é a ferramenta até como construir seus primeiros workflows.',
  },
  {
    title: 'Infraestrutura e Hospedagem do N8N',
    description:
      'Neste módulo, o foco será mostrar como hospedar, configurar e manter o N8N em produção, seja localmente, na nuvem, ou via serviços gerenciados.',
  },
  {
    title: 'N8N com Banco de Dados e APIs | Tools dos Agentes',
    description:
      'Este módulo ensina como conectar o N8N com bancos de dados e APIs externas, transformando agentes de IA em ferramentas realmente úteis.',
  },
  {
    title: 'WhatsApp e Agentes de IA',
    description:
      'Neste módulo, você aprenderá a integrar o N8N com o WhatsApp e conectar essa automação com agentes de IA que atendem, respondem e tomam decisões automaticamente.',
  },
  {
    title: 'Agentes de IA Humanizados e Vendedores',
    description:
      'Neste módulo, você vão aprender a criar agentes de IA com comportamento natural, tom humano e foco em conversão. Serão explorados recursos multimodais (áudio, imagem), atendimento com empatia e inteligência, uso de filas para escalar, e o poderoso conceito de RAG.',
  },
  {
    title: 'Gerenciando Pagamentos com ASAAS',
    description:
      'Neste módulo, você vai aprender a integrar o N8N com o ASAAS, plataforma brasileira de gestão de cobranças e pagamentos, para criar fluxos de automação financeira: geração de boletos, cobranças por Pix, acompanhamento de status de pagamento e envio de mensagens automáticas no WhatsApp com as informações.',
  },
  {
    title: 'Multi-Agentes e MCP (Model Context Protocol)',
    description:
      'Neste módulo, vamos explorar como usar o Model Context Protocol (MCP) para construir arquiteturas de agentes de IA interconectados e capazes de manter contexto entre as interações.',
  },
  {
    title: 'BÔNUS - JavaScript + PostgreSQL',
    description:
      'Neste módulo bônus, você vai aprender a usar JavaScript no N8N para criar lógicas personalizadas dentro dos workflows, e também a interagir com bancos de dados PostgreSQL para salvar, consultar e manipular dados de forma robusta.',
  },
]

const benefits = [
  {
    title: 'Suporte Completo',
    description: 'Tire suas dúvidas com especialistas.',
    icon: ShieldCheck,
  },
  {
    title: 'Comunidade no Discord',
    description: 'Participe da nossa comunidade exclusiva.',
    icon: Users,
  },
  {
    title: 'Encontros Ao Vivo',
    description: 'Aulas práticas para aprofundar o conhecimento.',
    icon: Rocket,
  },
]

const faqList = [
  {
    question: 'Preciso saber programar para fazer o curso?',
    answer:
      'Não! O curso é feito para iniciantes e não exige experiência prévia com código.',
  },
  {
    question: 'O acesso é vitalício?',
    answer: 'Sim! Mas por tempo determinado, por isso aproveite a promoção',
  },
  {
    question: 'Existe algum grupo para tirar dúvidas?',
    answer:
      'Sim! Temos uma comunidade ativa no Discord para suporte e troca de ideias.',
  },
  {
    question: 'Qual a duração do curso?',
    answer:
      'O curso pode ser feito no seu ritmo, mas lembre-se o acesso vitalício é por pouco tempo, aproveita agora!',
  },
]

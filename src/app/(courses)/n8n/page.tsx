'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { CheckCircle, Rocket, Users, ShieldCheck } from 'lucide-react'

import Image from 'next/image'
import n8nLogo from '@/public/n8n-logo.png' // Substitua pelo caminho correto
import Particles from '@/components/particles'
import { Marquee } from '@/components/magicui/marquee'
import { PulsatingButton } from '@/components/magicui/pulsating-button'
import { BorderBeam } from '@/components/magicui/border-beam'

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
          Domine o <span className="text-blue-400">n8n</span> e Crie Agentes de
          IA Poderosos
        </motion.h1>

        <p className="text-lg text-gray-300 mb-6 relative z-10">
          Aprenda automações avançadas, integração com CRM, Supabase e muito
          mais.
        </p>
        <div className="flex justify-center">
          <PulsatingButton className="text-white bg-blue-500 hover:bg-blue-600 relative z-10">
            Quero Me Inscrever
          </PulsatingButton>
        </div>
      </section>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-8 ">
        <Marquee pauseOnHover className="[--duration:10s]">
          <div>aqui vai um logo</div>
          <div>outro</div>
          <div>outro</div>
          <div>outro</div>
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:10s]">
          <div>aqui vai um logo</div>
          <div>outro</div>
          <div>outro</div>
          <div>outro</div>
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#172B67] "></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#030508]"></div>
      </div>

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
        <Button className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600">
          Quero Começar Agora
        </Button>
      </section>
    </main>
  )
}

const targetAudience = [
  'Quer automatizar tarefas sem depender de programadores.',
  'Deseja criar agentes de IA personalizados.',
  'Trabalha com CRM, planilhas e e-mails e quer ganhar mais produtividade.',
  'Busca uma comunidade para trocar experiências e tirar dúvidas.',
]

const courseModules = [
  {
    title: 'Introdução ao n8n',
    description: 'Primeiros passos na ferramenta.',
  },
  {
    title: 'Criação de Automação',
    description: 'Automatizando processos complexos.',
  },
  {
    title: 'Integração com CRM',
    description: 'Automatize seu funil de vendas.',
  },
  {
    title: 'Criação de Agentes de IA',
    description: 'Personalize IA sem código.',
  },
  {
    title: 'Integração com Supabase',
    description: 'Gerencie dados de forma avançada.',
  },
  {
    title: 'Automação de Pagamentos',
    description: 'Facilite transações automaticamente.',
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

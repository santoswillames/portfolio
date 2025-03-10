import { ToggleTheme } from '@/components/theme/toggle'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Social',
}

export default function Social() {
  return (
    <main className="bg-muted flex flex-col w-full px-2 pb-2">
      <header className="w-full py-4 flex justify-end items-center">
        <ToggleTheme />
      </header>
      <section className="flex flex-col justify-center items-center gap-1 w-full flex-1">
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://github.com/santoswillames.png" />
          <AvatarFallback>
            <div className="bg-muted-foreground w-full h-full" />
          </AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-semibold tracking-tight">
          Willames Santos
        </h1>
        <p className="text-muted-foreground">
          FullStack Developer & Content Creator
        </p>
        <div className="mt-6 justify-center items-center w-full flex flex-col gap-4">
          <Button
            asChild
            className="w-full max-w-[348px] py-6 bg-muted-foreground"
            size="lg"
          >
            <Link
              href="https://api.whatsapp.com/send?phone=+5535998297078&text=Olá, gostaria de fazer um orçamento."
              target="_blank"
            >
              WhatsApp - Orçamentos
            </Link>
          </Button>
          <Button
            asChild
            className="w-full max-w-[348px] py-6 bg-muted-foreground"
            size="lg"
          >
            <Link href="/store" target="_blank">
              Equipamentos - Loja
            </Link>
          </Button>
          <Button
            asChild
            className="w-full max-w-[348px] py-6 bg-muted-foreground"
            size="lg"
          >
            <Link
              href="https://www.youtube.com/@DevWillChannel?sub_confirmation=1"
              target="_blank"
            >
              YouTube
            </Link>
          </Button>
          <Button
            asChild
            className="w-full max-w-[348px] py-6 bg-muted-foreground"
            size="lg"
          >
            <Link
              href="https://www.linkedin.com/in/willames-silva-dos-santos-a26172126/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </Button>
          <Button
            asChild
            className="w-full max-w-[348px] py-6 bg-muted-foreground"
            size="lg"
          >
            <Link href="https://github.com/santoswillames" target="_blank">
              GitHub
            </Link>
          </Button>
          <Button
            asChild
            className="w-full max-w-[348px] py-6 bg-muted-foreground"
            size="lg"
          >
            <Link href="https://twitter.com/dev_willl" target="_blank">
              X- Twitter
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

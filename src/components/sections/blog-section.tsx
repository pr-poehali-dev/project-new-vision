import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Городской турнир по уличному баскетболу",
      description: "Открытый турнир 3x3 на главной площадке парка Горького. Участие бесплатное, призовой фонд 50 000 ₽. Регистрация команд до 29 марта.",
      date: "5 апреля 2026",
      readTime: "Регистрация",
    },
    {
      title: "Открытая тренировка: йога на свежем воздухе",
      description: "Еженедельная бесплатная тренировка для всех уровней подготовки. Берите коврик и приходите на Воробьёвы горы.",
      date: "29 марта 2026",
      readTime: "Бесплатно",
    },
    {
      title: "Мастер-класс по спринту с олимпийским тренером",
      description: "Техника старта, разбор ошибок и индивидуальные рекомендации от мастера спорта по лёгкой атлетике.",
      date: "2 апреля 2026",
      readTime: "Записаться",
    },
  ]

  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">Ближайшие события</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Турниры, мастер-классы и открытые тренировки в вашем городе. Регистрируйтесь прямо здесь.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full glassmorphic-card">
                <CardHeader>
                  <CardTitle className="tracking-tight">{post.title}</CardTitle>
                  <CardDescription className="opacity-70">
                    {post.date} - {post.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground opacity-70">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm text-primary hover:underline transition-colors"
                  >
                    Подробнее и регистрация
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
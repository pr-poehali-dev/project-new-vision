import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GlowingTiltCard } from "@/components/ui/glowing-tilt-card"
import { ParallaxScroll } from "@/components/ui/parallax-scroll"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedBackground } from "@/components/ui/animated-background"
import Icon from "@/components/ui/icon"
import { Link } from "react-router-dom"

export function FeaturesSection() {
  const features = [
    {
      icon: <Icon name="MapPin" className="h-10 w-10 text-red-500" />,
      title: "Интерактивная карта",
      description: "Фильтры по типу спорта, рейтинги и отзывы, фото и панорамы площадок.",
      borderClass: "border-glow-red",
      href: "/map",
    },
    {
      icon: <Icon name="Users" className="h-10 w-10 text-blue-500" />,
      title: "Социальные функции",
      description: "Поиск партнёров для тренировок, создание клубов и групп по интересам.",
      borderClass: "border-glow-blue",
    },
    {
      icon: <Icon name="Calendar" className="h-10 w-10 text-yellow-500" />,
      title: "Календарь событий",
      description: "Турниры, мастер-классы и открытые тренировки. Регистрация прямо на сайте.",
      borderClass: "border-glow-yellow",
    },
    {
      icon: <Icon name="Trophy" className="h-10 w-10 text-green-500" />,
      title: "Геймификация",
      description: "Бейджи, рейтинги и еженедельные челленджи с призами от партнёров.",
      borderClass: "border-glow-green",
    },
    {
      icon: <Icon name="Bot" className="h-10 w-10 text-purple-500" />,
      title: "AI-тренер",
      description: "Персональный план тренировок, советы по питанию и адаптация под погоду.",
      borderClass: "border-glow-purple",
    },
    {
      icon: <Icon name="Accessibility" className="h-10 w-10 text-orange-500" />,
      title: "Доступность и инклюзивность",
      description: "Фильтры для людей с ограниченными возможностями, мультиязычный интерфейс.",
      borderClass: "border-glow-orange",
    },
  ]

  return (
    <section id="features" className="relative w-full py-12 md:py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <AnimatedBackground variant="dots" color="rgba(220, 38, 38, 0.05)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Всё для активного образа жизни"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="SportTech Map объединяет всё необходимое: поиск площадок, спортивное комьюнити, умный тренер и геймификация в одной платформе."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <ParallaxScroll baseVelocity={0.1} direction="up" className="py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlowingTiltCard>
                  {feature.href ? (
                    <Link to={feature.href} className="block h-full">
                      <Card className={`h-full glassmorphic-card border-none overflow-hidden group soft-glow ${feature.borderClass} cursor-pointer`}>
                        <CardHeader>
                          <div className="p-2 rounded-xl w-fit bg-muted/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                            {feature.icon}
                          </div>
                          <CardTitle className="mt-4 tracking-tight relative">
                            {feature.title}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                            {feature.description}
                          </CardDescription>
                          <div className="mt-3 flex items-center gap-1 text-xs text-red-500 font-medium">
                            <span>Открыть карту</span>
                            <Icon name="ArrowRight" size={12} />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ) : (
                    <Card
                      className={`h-full glassmorphic-card border-none overflow-hidden group soft-glow ${feature.borderClass}`}
                    >
                      <CardHeader>
                        <div className="p-2 rounded-xl w-fit bg-muted/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                          {feature.icon}
                        </div>
                        <CardTitle className="mt-4 tracking-tight relative">
                          {feature.title}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  )}
                </GlowingTiltCard>
              </ScrollReveal>
            ))}
          </div>
        </ParallaxScroll>
      </div>
    </section>
  )
}
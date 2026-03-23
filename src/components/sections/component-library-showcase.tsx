import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { ImageCard } from "@/components/ui-library/cards/image-card"
import { CtaCard } from "@/components/ui-library/cards/cta-card"
import { ProgressCard } from "@/components/ui-library/cards/progress-card"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"
import { PrimaryButton, SecondaryButton, OutlineButton } from "@/components/ui-library/buttons/button-variants"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui-library/animations/scroll-animations"
import { ArrowRight, CheckCircle, Rocket, Sparkles, Lightbulb } from "lucide-react"

import Icon from "@/components/ui/icon"

export function ComponentLibraryShowcase() {
  const [activeTab, setActiveTab] = useState("cards")

  return (
    <section id="components" className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
            <div className="space-y-4">
              <AnimatedText
                text="Популярные площадки"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Исследуйте лучшие спортивные объекты города — от футбольных полей до скалодромов"
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8">
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-12">
                <AnimatedGradientBorder
                  colors={["#dc2626", "#4b5563", "#dc2626", "#4b5563"]}
                  borderWidth={1}
                  duration={8}
                  containerClassName="rounded-full"
                >
                  <TabsList className="glassmorphic-tabs border-0">
                    <TabsTrigger value="cards">Площадки</TabsTrigger>
                    <TabsTrigger value="buttons">Присоединиться</TabsTrigger>
                    <TabsTrigger value="progress">Мои достижения</TabsTrigger>
                  </TabsList>
                </AnimatedGradientBorder>
              </div>

              {/* Площадки Tab */}
              <TabsContent value="cards" className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Спортивные площадки рядом с вами</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    Реальные объекты с фото, рейтингами и отзывами пользователей
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <ImageCard
                        imageSrc="/placeholder.svg?height=300&width=500&text=Football"
                        imageAlt="Футбольное поле"
                        title="Стадион «Динамо»"
                        description="Профессиональное футбольное поле с искусственным покрытием. Освещение, раздевалки, трибуны."
                        tags={["Футбол", "★ 4.8"]}
                        variant="default"
                        className="border-glow-red"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <ImageCard
                        imageSrc="/placeholder.svg?height=300&width=500&text=Basketball"
                        imageAlt="Баскетбольная площадка"
                        title="Баскетбольный корт"
                        description="Уличная баскетбольная площадка в парке. Новые кольца, асфальтовое покрытие, доступно 24/7."
                        tags={["Баскетбол", "★ 4.5"]}
                        variant="hover-zoom"
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <ImageCard
                        imageSrc="/placeholder.svg?height=300&width=500&text=Climbing"
                        imageAlt="Скалодром"
                        title="Скалодром «Вершина»"
                        description="Крытый скалодром с трассами для новичков и профи. Прокат снаряжения, инструкторы, кафе."
                        tags={["Скалолазание", "★ 4.9"]}
                        variant="hover-reveal"
                        className="border-glow-purple"
                      />
                    </ScrollAnimation>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Действия с площадками</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    Бронируйте время, оставляйте отзывы и приглашайте друзей
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <CtaCard
                        title="Забронировать время"
                        description="Выберите удобный слот и зарезервируйте площадку для своей команды."
                        primaryAction={{ text: "Забронировать" }}
                        secondaryAction={{ text: "Расписание" }}
                        variant="default"
                        icon={<Rocket className="h-6 w-6" />}
                        className="border-glow-green"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <CtaCard
                        title="Найти соперника"
                        description="Создайте запрос и найдите партнёров для игры уже сегодня."
                        primaryAction={{ text: "Найти команду" }}
                        variant="gradient"
                        alignment="center"
                        buttonVariant="gradient"
                        icon={<Sparkles className="h-6 w-6" />}
                        className="border-glow-yellow"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <CtaCard
                        title="Оставить отзыв"
                        description="Помогите другим спортсменам сделать правильный выбор."
                        primaryAction={{ text: "Написать отзыв" }}
                        variant="glass"
                        alignment="right"
                        buttonVariant="magnetic"
                        icon={<Lightbulb className="h-6 w-6" />}
                        className="border-glow-orange"
                      />
                    </ScrollAnimation>
                  </div>
                </div>
              </TabsContent>

              {/* Присоединиться Tab */}
              <TabsContent value="buttons" className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Найди команду и партнёров</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    Создавайте запросы и вступайте в спортивные клубы по своим интересам
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ScrollAnimation type="slide" direction="left" delay={0.1}>
                      <div className="p-6 rounded-xl border glassmorphic-card border-glow-red">
                        <h4 className="text-lg font-medium mb-6">Поиск партнёра</h4>
                        <div className="flex flex-wrap gap-6">
                          <StaggerContainer>
                            <StaggerItem>
                              <PrimaryButton>Найти партнёра</PrimaryButton>
                            </StaggerItem>
                            <StaggerItem>
                              <PrimaryButton leftIcon={<Icon name="Dumbbell" className="h-4 w-4" />}>Тренировка</PrimaryButton>
                            </StaggerItem>
                            <StaggerItem>
                              <SecondaryButton>Мои запросы</SecondaryButton>
                            </StaggerItem>
                            <StaggerItem>
                              <SecondaryButton rightIcon={<ArrowRight className="h-4 w-4" />}>
                                Все объявления
                              </SecondaryButton>
                            </StaggerItem>
                          </StaggerContainer>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="right" delay={0.1}>
                      <div className="p-6 rounded-xl border glassmorphic-card border-glow-blue">
                        <h4 className="text-lg font-medium mb-6">Клубы и группы</h4>
                        <div className="flex flex-wrap gap-6">
                          <StaggerContainer>
                            <StaggerItem>
                              <OutlineButton>Все клубы</OutlineButton>
                            </StaggerItem>
                            <StaggerItem>
                              <OutlineButton leftIcon={<Icon name="Users" className="h-4 w-4" />}>Создать клуб</OutlineButton>
                            </StaggerItem>
                            <StaggerItem>
                              <GradientButton>Вступить</GradientButton>
                            </StaggerItem>
                            <StaggerItem>
                              <GradientButton gradientFrom="from-blue-500" gradientTo="to-purple-600" glowAmount={4}>
                                Пригласить
                              </GradientButton>
                            </StaggerItem>
                          </StaggerContainer>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <div className="p-6 rounded-xl border glassmorphic-card border-glow-purple">
                        <h4 className="text-lg font-medium mb-6">Быстрые действия</h4>
                        <div className="flex flex-wrap gap-6">
                          <StaggerContainer>
                            <StaggerItem>
                              <MagneticButton className="neumorphic-button-primary">
                                <span className="px-6 py-2.5">Написать в чат</span>
                              </MagneticButton>
                            </StaggerItem>
                            <StaggerItem>
                              <GradientButton borderWidth={2}>Поделиться</GradientButton>
                            </StaggerItem>
                          </StaggerContainer>
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.4}>
                      <div className="p-6 rounded-xl border glassmorphic-card border-glow-green">
                        <h4 className="text-lg font-medium mb-6">Регистрация на событие</h4>
                        <div className="flex flex-wrap gap-6">
                          <StaggerContainer>
                            <StaggerItem>
                              <PrimaryButton isLoading loadingText="Регистрация...">
                                Участвовать
                              </PrimaryButton>
                            </StaggerItem>
                            <StaggerItem>
                              <SecondaryButton disabled>Мест нет</SecondaryButton>
                            </StaggerItem>
                            <StaggerItem>
                              <OutlineButton size="sm">Лист ожидания</OutlineButton>
                            </StaggerItem>
                            <StaggerItem>
                              <PrimaryButton size="lg">Записаться</PrimaryButton>
                            </StaggerItem>
                          </StaggerContainer>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </TabsContent>

              {/* Достижения Tab */}
              <TabsContent value="progress" className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium tracking-tight text-center">Твой прогресс и достижения</h3>
                  <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                    Отслеживай активность, выполняй челленджи и зарабатывай бейджи
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ScrollAnimation type="slide" direction="up" delay={0.1}>
                      <ProgressCard
                        title="Пробежка за месяц"
                        description="Цель: 50 км. Продолжай в том же духе!"
                        progress={65}
                        total={100}
                        status="default"
                        showPercentage
                        variant="default"
                        icon={<Icon name="Footprints" className="h-6 w-6" />}
                        className="border-glow-red"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.2}>
                      <ProgressCard
                        title="Посещено площадок"
                        description="Челлендж: 5 новых площадок за месяц"
                        progress={80}
                        total={100}
                        status="success"
                        showPercentage
                        showFraction
                        variant="gradient"
                        progressColor="bg-gradient-to-r from-red-500 to-red-700"
                        icon={<CheckCircle className="h-6 w-6" />}
                        className="border-glow-blue"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.3}>
                      <ProgressCard
                        title="Часы тренировок"
                        description="Ещё немного до следующего уровня!"
                        progress={85}
                        total={100}
                        status="warning"
                        showPercentage
                        variant="outlined"
                        icon={<Icon name="Timer" className="h-6 w-6" />}
                        className="border-glow-purple"
                      />
                    </ScrollAnimation>

                    <ScrollAnimation type="slide" direction="up" delay={0.4}>
                      <ProgressCard
                        title="План тренировок на неделю"
                        description="Выполнено занятий из запланированных"
                        progress={30}
                        total={100}
                        status="info"
                        showFraction
                        variant="glass"
                        progressColor="bg-blue-500"
                        icon={<Icon name="CalendarCheck" className="h-6 w-6" />}
                        className="border-glow-green"
                      />
                    </ScrollAnimation>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <ScrollAnimation type="fade">
                    <AnimatedGradientBorder
                      colors={["#dc2626", "#4b5563", "#dc2626", "#4b5563"]}
                      borderWidth={1}
                      duration={6}
                    >
                      <PrimaryButton
                        size="lg"
                        className="bg-background border-0 text-foreground hover:text-white px-6 py-2.5"
                      >
                        <span className="flex items-center">
                          Все мои достижения
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </PrimaryButton>
                    </AnimatedGradientBorder>
                  </ScrollAnimation>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
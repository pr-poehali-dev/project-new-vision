import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FaqSection() {
  const faqs = [
    {
      question: "Что такое SportTech Map?",
      answer:
        "SportTech Map — это платформа для поиска спортивных площадок вашего города. Интерактивная карта с фильтрами по типу спорта, рейтингами и отзывами пользователей, социальными функциями, AI-тренером и календарём событий.",
    },
    {
      question: "Как найти площадку для тренировки?",
      answer:
        "Откройте карту, выберите фильтр по виду спорта (футбол, баскетбол, теннис, бассейн и др.) и тип объекта. Нажмите на маркер — увидите фото, рейтинг, отзывы и доступность. Бесплатно и без регистрации.",
    },
    {
      question: "Как найти партнёра для тренировки?",
      answer:
        "В разделе «Комьюнити» выберите вид спорта, уровень подготовки и удобное время. Создайте запрос — например, «ищу соперника для тенниса в эту субботу» — и получите отклики от других пользователей.",
    },
    {
      question: "Как работает AI-тренер?",
      answer:
        "AI-тренер учитывает ваши цели, уровень подготовки, расписание и погоду. Он составляет план тренировок с чередованием активностей, даёт советы по разминке, питанию и предупреждает о рисках (гололёд, UV-индекс, влажность).",
    },
    {
      question: "Есть ли приложение для смартфона?",
      answer:
        "SportTech Map полностью адаптирован для мобильных браузеров. Мобильное приложение с синхронизацией фитнес-трекеров и push-уведомлениями о тренировках и событиях находится в разработке.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Частые вопросы
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Всё, что нужно знать о SportTech Map — платформе для активного образа жизни.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl py-12">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glassmorphic-accordion-item">
                  <AccordionTrigger className="text-left font-medium tracking-tight">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground opacity-70">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
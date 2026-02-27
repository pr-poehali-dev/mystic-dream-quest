import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Играю уже полгода — лучший Radmir-сервер из всех что пробовал. Администрация всегда на связи, баги фиксят быстро. Рекомендую всем!",
    name: "Артём",
    role: "Игрок, 6 месяцев",
  },
  {
    quote:
      "Экономика тут реально продуманная. Открыл свой бизнес, нанял сотрудников — ощущение как в настоящей жизни. Затягивает на часы.",
    name: "Максим",
    role: "Бизнесмен на сервере",
  },
  {
    quote:
      "Пришёл за другом, остался сам. Сервер постоянно растёт, каждую неделю что-то новое. Уже полгода и не надоедает.",
    name: "Дима",
    role: "Постоянный игрок",
  },
  {
    quote:
      "Лучший RP-опыт в SA:MP. Никаких читеров, строгие правила и справедливые администраторы. Давно искал такой сервер.",
    name: "Кирилл",
    role: "Ветеран SA:MP",
  },
  {
    quote:
      "Состою в одной из крупнейших банд на сервере. Криминальная система проработана отлично — не просто пострелушки, а настоящий RP.",
    name: "Влад",
    role: "Лидер группировки",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят игроки
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Тысячи игроков выбрали MANASHKA CRMP как свой основной сервер. Вот что они думают о нас.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

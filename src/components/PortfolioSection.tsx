import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const achievements = [
  {
    title: "Топ-1 среди Radmir-копий",
    category: "Рейтинг серверов",
    image: "/placeholder.jpg",
    description:
      "MANASHKA CRMP занимает лидирующую позицию по онлайну и активности среди всех серверов на базе Radmir. Признан лучшим сообществом игроков.",
    tags: ["#1 Radmir", "Топ онлайн", "Лучший сервер"],
  },
  {
    title: "10 000+ зарегистрированных игроков",
    category: "Рост сообщества",
    image: "/placeholder.jpg",
    description:
      "За короткое время мы собрали огромную базу игроков. Ежедневно регистрируются сотни новых участников, а онлайн стабильно растёт.",
    tags: ["10K+ игроков", "Рост", "Сообщество"],
  },
  {
    title: "Уникальная экономика",
    category: "Игровые механики",
    image: "/placeholder.jpg",
    description:
      "Разработана собственная экономическая система с реальными механиками бизнеса, торговли и инвестиций. Ни один другой сервер так не делает.",
    tags: ["Кастом", "Экономика", "Уникально"],
  },
  {
    title: "Активные ивенты каждую неделю",
    category: "События и турниры",
    image: "/placeholder.jpg",
    description:
      "Регулярные турниры, сезонные события и ивенты с призами. Команда MANASHKA постоянно придумывает новый контент для игроков.",
    tags: ["Ивенты", "Призы", "Турниры"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши достижения</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            MANASHKA CRMP — это не просто сервер. Это история роста, рекордов и живого сообщества, которое строит игровой мир вместе.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <Icon name="Trophy" className="h-16 w-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-primary font-bold text-lg">{item.category}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{item.category}</p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

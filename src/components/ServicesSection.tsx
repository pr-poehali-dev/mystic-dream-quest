import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Briefcase",
    title: "Бизнес и карьера",
    description:
      "Открывай собственный бизнес, устраивайся на работу в госструктуры или частные компании. Экономика сервера максимально приближена к реальной жизни.",
  },
  {
    icon: "Car",
    title: "Транспорт и гонки",
    description:
      "Огромный парк автомобилей, кастомизация, гонки и транспортная система. Катайся по городу или участвуй в нелегальных уличных гонках.",
  },
  {
    icon: "Shield",
    title: "Силовые структуры",
    description:
      "Вступай в полицию, ФСБ или армию. Охраняй порядок, проводи спецоперации и зарабатывай авторитет среди игроков.",
  },
  {
    icon: "Swords",
    title: "Криминальный мир",
    description:
      "Создавай банды, проводи ограбления и контролируй районы. Криминальная ветка развития открывает уникальные возможности.",
  },
  {
    icon: "Home",
    title: "Недвижимость",
    description:
      "Покупай квартиры, дома и бизнесы. Сдавай в аренду и строй свою недвижимую империю в игровом мире.",
  },
  {
    icon: "Users",
    title: "Сообщество",
    description:
      "Активный Discord, регулярные ивенты и турниры. Мы постоянно расширяемся — новые механики и обновления каждую неделю.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Возможности сервера
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Чем живёт <span className="text-primary">MANASHKA</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Сотни механик, реальная экономика и живое сообщество — здесь каждый найдёт своё место и путь к вершине.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

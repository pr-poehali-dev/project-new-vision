import { useEffect } from "react"
import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

export default function MapPage() {
  useEffect(() => {
    document.title = "Интерактивная карта спортивных объектов — Липецк"
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b px-6 py-4 flex items-center gap-4 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <Icon name="ArrowLeft" size={18} />
          <span className="text-sm">Назад</span>
        </Link>
        <div className="h-4 w-px bg-border" />
        <div className="flex items-center gap-2">
          <Icon name="MapPin" size={20} className="text-red-500" />
          <h1 className="font-semibold text-lg">Спортивные объекты Липецка</h1>
        </div>
      </header>

      <main className="flex-1">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae6e3651ce02424c56f3836cf182ba0162280441a450eb6ba8aea6e1e6c227b6d&source=constructor"
          width="100%"
          height="100%"
          style={{ border: "none", minHeight: "calc(100vh - 65px)", display: "block" }}
          frameBorder={0}
          title="Спортивные объекты Липецка"
        />
      </main>
    </div>
  )
}
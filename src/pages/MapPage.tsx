import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Link } from "react-router-dom"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import Icon from "@/components/ui/icon"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

const sportVenues = [
  {
    id: 1,
    name: "Дворец спорта «Юбилейный»",
    type: "Ледовый дворец",
    address: "ул. Советская, 6",
    sports: ["Хоккей", "Фигурное катание"],
    lat: 52.6077,
    lng: 39.5994,
  },
  {
    id: 2,
    name: "Стадион «Металлург»",
    type: "Стадион",
    address: "ул. Неделина, 6",
    sports: ["Футбол", "Лёгкая атлетика"],
    lat: 52.6033,
    lng: 39.5711,
  },
  {
    id: 3,
    name: "Дворец спорта «Сокол»",
    type: "Многофункциональный",
    address: "Площадь Металлургов, 3",
    sports: ["Баскетбол", "Волейбол", "Бокс"],
    lat: 52.5983,
    lng: 39.5742,
  },
  {
    id: 4,
    name: "Ледовый дворец «Липецк»",
    type: "Ледовый дворец",
    address: "ул. Катукова, 28а",
    sports: ["Хоккей", "Фигурное катание"],
    lat: 52.6231,
    lng: 39.5512,
  },
  {
    id: 5,
    name: "СКК «Звёздный»",
    type: "Спортивно-концертный комплекс",
    address: "ул. Неделина, 62",
    sports: ["Единоборства", "Гимнастика", "Теннис"],
    lat: 52.6115,
    lng: 39.5803,
  },
  {
    id: 6,
    name: "Бассейн «Звёздный»",
    type: "Бассейн",
    address: "ул. Неделина, 60",
    sports: ["Плавание", "Водное поло"],
    lat: 52.6108,
    lng: 39.5795,
  },
  {
    id: 7,
    name: "Манеж ЛГТУ",
    type: "Манеж",
    address: "ул. Московская, 30",
    sports: ["Лёгкая атлетика", "Футбол"],
    lat: 52.5962,
    lng: 39.5698,
  },
  {
    id: 8,
    name: "Спортивный комплекс «Янтарь»",
    type: "Многофункциональный",
    address: "ул. Папина, 24",
    sports: ["Волейбол", "Баскетбол", "Борьба"],
    lat: 52.6289,
    lng: 39.6012,
  },
]

const sportTypeColors: Record<string, string> = {
  "Ледовый дворец": "bg-blue-100 text-blue-700",
  "Стадион": "bg-green-100 text-green-700",
  "Многофункциональный": "bg-purple-100 text-purple-700",
  "Спортивно-концертный комплекс": "bg-yellow-100 text-yellow-700",
  "Бассейн": "bg-cyan-100 text-cyan-700",
  "Манеж": "bg-orange-100 text-orange-700",
}

export default function MapPage() {
  useEffect(() => {
    document.title = "Интерактивная карта спортивных объектов — Липецк"
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b px-6 py-4 flex items-center gap-4 bg-background/80 backdrop-blur-sm sticky top-0 z-[1000]">
        <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <Icon name="ArrowLeft" size={18} />
          <span className="text-sm">Назад</span>
        </Link>
        <div className="h-4 w-px bg-border" />
        <div className="flex items-center gap-2">
          <Icon name="MapPin" size={20} className="text-red-500" />
          <h1 className="font-semibold text-lg">Спортивные объекты Липецка</h1>
        </div>
        <span className="ml-auto text-sm text-muted-foreground">{sportVenues.length} объектов</span>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-80 border-r overflow-y-auto bg-background hidden md:block">
          <div className="p-4 space-y-3">
            <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium px-1">Список объектов</p>
            {sportVenues.map((venue) => (
              <div
                key={venue.id}
                className="p-3 rounded-lg border hover:border-red-300 hover:bg-red-50/50 dark:hover:bg-red-950/20 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-sm group-hover:text-red-600 transition-colors">{venue.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{venue.address}</p>
                  </div>
                  <Icon name="MapPin" size={14} className="text-red-400 mt-0.5 shrink-0" />
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${sportTypeColors[venue.type] ?? "bg-gray-100 text-gray-700"}`}>
                    {venue.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {venue.sports.map((sport) => (
                    <span key={sport} className="text-xs text-muted-foreground">
                      {sport}
                    </span>
                  )).reduce((acc: React.ReactNode[], el, i) => {
                    if (i === 0) return [el]
                    return [...acc, <span key={`sep-${i}`} className="text-xs text-muted-foreground">·</span>, el]
                  }, [])}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="flex-1 relative">
          <MapContainer
            center={[52.608, 39.585]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {sportVenues.map((venue) => (
              <Marker key={venue.id} position={[venue.lat, venue.lng]}>
                <Popup>
                  <div className="min-w-[180px]">
                    <p className="font-semibold text-sm">{venue.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{venue.address}</p>
                    <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium mt-1.5 ${sportTypeColors[venue.type] ?? "bg-gray-100 text-gray-700"}`}>
                      {venue.type}
                    </span>
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      {venue.sports.map((sport) => (
                        <span key={sport} className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                          {sport}
                        </span>
                      ))}
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </main>
      </div>
    </div>
  )
}
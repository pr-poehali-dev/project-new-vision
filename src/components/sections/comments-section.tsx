import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"

const COMMENTS_URL = "https://functions.poehali.dev/1ebbf18b-99d9-4cb5-a150-9b846558c6ad"

interface Comment {
  id: number
  author_name: string
  content: string
  created_at: string
}

export function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch(COMMENTS_URL)
      .then((r) => r.json())
      .then((data) => {
        const parsed = typeof data === "string" ? JSON.parse(data) : data
        setComments(parsed.comments || [])
      })
      .catch(() => {})
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (!name.trim() || !text.trim()) {
      setError("Заполните имя и комментарий")
      return
    }
    setLoading(true)
    const res = await fetch(COMMENTS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author_name: name.trim(), content: text.trim() }),
    })
    const raw = await res.json()
    const data = typeof raw === "string" ? JSON.parse(raw) : raw
    setLoading(false)
    if (res.ok) {
      setComments([data, ...comments])
      setName("")
      setText("")
    } else {
      setError(data.error || "Ошибка при отправке")
    }
  }

  const formatDate = (iso: string) => {
    const d = new Date(iso)
    return d.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })
  }

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Отзывы и комментарии</h2>
          <p className="text-muted-foreground">Поделитесь впечатлением о платформе</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border rounded-2xl p-6 mb-10 space-y-4">
          <Input
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
          />
          <Textarea
            placeholder="Ваш комментарий..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            maxLength={1000}
          />
          {error && <p className="text-destructive text-sm">{error}</p>}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Отправка..." : "Оставить комментарий"}
          </Button>
        </form>

        <div className="space-y-4">
          {comments.length === 0 && (
            <p className="text-center text-muted-foreground py-8">Пока нет комментариев. Будьте первым!</p>
          )}
          {comments.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border rounded-xl p-5 flex gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="User" size={18} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm">{c.author_name}</span>
                  <span className="text-xs text-muted-foreground">{formatDate(c.created_at)}</span>
                </div>
                <p className="text-sm text-foreground/90 whitespace-pre-wrap break-words">{c.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

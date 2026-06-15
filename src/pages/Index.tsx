import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO = 'https://cdn.poehali.dev/projects/8d49f96f-2bd7-47bd-979c-3e2e4e90d77c/files/4a5459d0-d1fc-4179-9097-bf6f3e5619f3.jpg';

const NAV = [
  { id: 'home', label: 'Главная' },
  { id: 'events', label: 'События' },
  { id: 'places', label: 'Места' },
  { id: 'afisha', label: 'Афиша' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'about', label: 'О портале' },
  { id: 'contacts', label: 'Контакты' },
];

const EVENTS = [
  { tag: 'Музыка', title: 'Ночь джаза в парке', date: '18 июня', place: 'Городской парк', color: 'bg-accent' },
  { tag: 'Театр', title: 'Премьера «Город снов»', date: '21 июня', place: 'Драмтеатр', color: 'bg-foreground' },
  { tag: 'Маркет', title: 'Фестиваль уличной еды', date: '24 июня', place: 'Набережная', color: 'bg-accent' },
];

const AFISHA = [
  { time: '12:00', title: 'Выставка современного искусства', cat: 'Арт' },
  { time: '15:30', title: 'Лекция: история города', cat: 'Образование' },
  { time: '19:00', title: 'Концерт симфонического оркестра', cat: 'Музыка' },
  { time: '21:00', title: 'Кинопоказ под открытым небом', cat: 'Кино' },
];

const REVIEWS = [
  { name: 'Анна К.', text: 'Нашла все самые интересные события на ближайшие выходные за пару минут. Карта — это магия.', role: 'Любитель искусства' },
  { name: 'Дмитрий В.', text: 'Удобно, что всё в одном месте. Афиша всегда актуальная, ни разу не подвела.', role: 'Меломан' },
  { name: 'Лиза М.', text: 'Минималистичный и чистый интерфейс. Пользоваться одно удовольствие.', role: 'Дизайнер' },
];

const MAP_POINTS = [
  { id: 1, x: 24, y: 32, name: 'Городской парк', type: 'Парк', icon: 'Trees' },
  { id: 2, x: 58, y: 24, name: 'Драмтеатр', type: 'Театр', icon: 'Drama' },
  { id: 3, x: 72, y: 58, name: 'Набережная', type: 'Прогулки', icon: 'Waves' },
  { id: 4, x: 40, y: 64, name: 'Арт-галерея', type: 'Музей', icon: 'Palette' },
  { id: 5, x: 50, y: 44, name: 'Концертный зал', type: 'Музыка', icon: 'Music' },
];

const Index = () => {
  const [active, setActive] = useState('home');
  const [point, setPoint] = useState(MAP_POINTS[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('home')} className="font-display font-bold text-xl tracking-tight">
            ГОРОД<span className="text-accent">.</span>
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`text-sm transition-colors hover:text-accent ${active === n.id ? 'text-accent' : 'text-muted-foreground'}`}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3 animate-fade-in">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left text-sm text-muted-foreground hover:text-accent">
                {n.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="pt-16">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                <span className="w-8 h-px bg-accent" /> Городские развлечения
              </span>
              <h1 className="font-display font-bold text-5xl md:text-7xl leading-[0.95] tracking-tight mb-6">
                Жизнь города<br />в одном <span className="text-accent">месте</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-8">
                События, лучшие места и актуальная афиша. Открывайте город заново — спокойно и без лишнего шума.
              </p>
              <div className="flex gap-3">
                <button onClick={() => scrollTo('events')} className="px-7 py-3.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-accent transition-colors">
                  Смотреть события
                </button>
                <button onClick={() => scrollTo('places')} className="px-7 py-3.5 border border-border rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors">
                  Открыть карту
                </button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img src={HERO} alt="Город" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-background border border-border rounded-xl p-4 shadow-sm">
                <div className="font-display font-bold text-3xl">120+</div>
                <div className="text-xs text-muted-foreground">событий в неделю</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead num="01" title="События" sub="Что происходит в городе прямо сейчас" />
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {EVENTS.map((e, i) => (
              <article key={i} className="group border border-border rounded-2xl p-6 hover:border-accent transition-colors bg-card">
                <div className="flex items-center justify-between mb-10">
                  <span className={`${e.color} text-background text-xs px-3 py-1 rounded-full`}>{e.tag}</span>
                  <span className="text-sm text-muted-foreground">{e.date}</span>
                </div>
                <h3 className="font-display font-semibold text-2xl leading-tight mb-2 group-hover:text-accent transition-colors">{e.title}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <Icon name="MapPin" size={14} /> {e.place}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Places — Interactive Map */}
      <section id="places" className="py-20 border-t border-border bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead num="02" title="Места" sub="Интерактивная карта развлечений города" />
          <div className="grid lg:grid-cols-3 gap-6 mt-12">
            <div className="lg:col-span-2 relative aspect-[16/10] rounded-2xl bg-card border border-border grain overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <line x1="0" y1="40%" x2="100%" y2="55%" stroke="hsl(36 18% 85%)" strokeWidth="2" />
                <line x1="30%" y1="0" x2="45%" y2="100%" stroke="hsl(36 18% 85%)" strokeWidth="2" />
                <line x1="70%" y1="0" x2="60%" y2="100%" stroke="hsl(36 18% 85%)" strokeWidth="2" />
              </svg>
              {MAP_POINTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPoint(p)}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  <span className="relative flex items-center justify-center">
                    {point.id === p.id && <span className="absolute w-10 h-10 rounded-full bg-accent animate-ping-slow" />}
                    <span className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all ${point.id === p.id ? 'bg-accent text-background scale-110' : 'bg-background text-foreground border border-border hover:border-accent'}`}>
                      <Icon name={p.icon} size={18} />
                    </span>
                  </span>
                </button>
              ))}
            </div>
            <div className="rounded-2xl border border-border bg-card p-7 flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-accent mb-4">{point.type}</span>
              <h3 className="font-display font-bold text-3xl leading-tight mb-3">{point.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-auto">
                Одна из ключевых точек на карте городских развлечений. Нажимайте на маркеры, чтобы узнать больше о каждом месте.
              </p>
              <div className="mt-6 pt-6 border-t border-border space-y-2">
                {MAP_POINTS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPoint(p)}
                    className={`flex items-center gap-3 w-full text-left text-sm py-1.5 transition-colors ${point.id === p.id ? 'text-accent' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <Icon name={p.icon} size={16} /> {p.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Afisha */}
      <section id="afisha" className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead num="03" title="Афиша" sub="Расписание на сегодня" />
          <div className="mt-12 divide-y divide-border border-y border-border">
            {AFISHA.map((a, i) => (
              <div key={i} className="group flex items-center gap-6 py-6 hover:bg-secondary/40 transition-colors px-2 -mx-2 rounded-lg">
                <span className="font-display font-semibold text-2xl text-accent w-20">{a.time}</span>
                <span className="flex-1 font-display font-medium text-xl group-hover:translate-x-1 transition-transform">{a.title}</span>
                <span className="hidden sm:block text-xs uppercase tracking-wider text-muted-foreground">{a.cat}</span>
                <Icon name="ArrowUpRight" size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 border-t border-border bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead num="04" title="Отзывы" sub="Что говорят жители города" />
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {REVIEWS.map((r, i) => (
              <article key={i} className="rounded-2xl border border-border bg-card p-7">
                <Icon name="Quote" size={28} className="text-accent mb-5" />
                <p className="text-lg leading-relaxed mb-6">{r.text}</p>
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-display font-semibold text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHead num="05" title="О портале" sub="" />
          </div>
          <div>
            <p className="font-display font-light text-2xl md:text-3xl leading-snug mb-8">
              Мы собираем всё самое интересное в городе и показываем это в чистом, спокойном интерфейсе — без баннеров и шума.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { n: '5 000+', l: 'мест на карте' },
                { n: '120+', l: 'событий в неделю' },
                { n: '50 000', l: 'активных жителей' },
                { n: '24/7', l: 'актуальная афиша' },
              ].map((s, i) => (
                <div key={i} className="border-t border-border pt-4">
                  <div className="font-display font-bold text-3xl">{s.n}</div>
                  <div className="text-sm text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 border-t border-border bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-6">
              Оставайтесь<br />на связи
            </h2>
            <p className="text-background/60 max-w-sm">
              Подпишитесь на рассылку и получайте подборку лучших событий каждую неделю.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="flex gap-3">
              <input
                placeholder="Ваш email"
                className="flex-1 bg-background/10 border border-background/20 rounded-full px-5 py-3.5 text-sm placeholder:text-background/40 focus:outline-none focus:border-accent"
              />
              <button className="px-6 py-3.5 bg-accent text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
                Подписаться
              </button>
            </div>
            <div className="flex flex-wrap gap-6 mt-4 text-sm text-background/60">
              <span className="flex items-center gap-2"><Icon name="Mail" size={16} /> hello@gorod.ru</span>
              <span className="flex items-center gap-2"><Icon name="Phone" size={16} /> +7 900 000-00-00</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background/50 border-t border-background/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <span className="font-display font-bold text-background text-lg">ГОРОД<span className="text-accent">.</span></span>
          <span>© 2026 Портал городских развлечений</span>
        </div>
      </footer>
    </div>
  );
};

const SectionHead = ({ num, title, sub }: { num: string; title: string; sub: string }) => (
  <div>
    <span className="text-xs uppercase tracking-[0.2em] text-accent">{num}</span>
    <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mt-2">{title}</h2>
    {sub && <p className="text-muted-foreground mt-3">{sub}</p>}
  </div>
);

export default Index;

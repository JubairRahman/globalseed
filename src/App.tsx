import type { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Link,
  NavLink,
  useNavigate,
  Route,
  Routes,
  useParams
} from 'react-router-dom'
import { ArrowRight, Sprout, MessageCircle, Menu, X, Search, ChevronLeft, ChevronRight, Leaf, FlaskConical, ShieldCheck, Globe2, Download, Mail, MapPin, Phone, Instagram, Facebook, Linkedin, BookOpen, Sun, Flower2, Quote, ArrowUpRight } from 'lucide-react'
import { categories, seeds } from './data'
import { FaWhatsapp } from 'react-icons/fa'
const photo = {
  hero: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=90',
  field: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1100&q=85',
  research: 'https://images.unsplash.com/photo-1581093458791-9d42e3c7f5b2?auto=format&fit=crop&w=1100&q=85',
  leaves: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85'
}

// header

function Header() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const activeLanguage = i18n.resolvedLanguage || i18n.language

  const changeLanguage = (language: 'en' | 'bn') => {
    void i18n.changeLanguage(language)
    localStorage.setItem('gsc-language', language)
    document.documentElement.lang = language
  }

  useEffect(() => {
    document.documentElement.lang = activeLanguage
  }, [activeLanguage])

  const links = [
    [t('navigation.home'), '/'],
    [t('navigation.about'), '/about'],
    [t('navigation.seeds'), '/seeds'],
    [t('navigation.research'), '/research'],
    [t('navigation.knowledge'), '/knowledge'],
    [t('navigation.contact'), '/contact']
  ]

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const query = search.trim()

    if (query) {
      navigate(`/seeds?search=${encodeURIComponent(query)}`)
      setSearch('')
      setOpen(false)
    }
  }

  return (
    <>
      {/* Top contact bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-spacer" />

          <div className="contact-highlight-strip">
            <a href="tel:+8801XXXXXXXXX" className="contact-highlight-item">
              <Phone size={21} />
              <span>
                <small>CALL US</small>
                <strong>+880 1XXX-XXXXXX</strong>
              </span>
            </a>

            <a href="tel:+8801YYYYYYYYY" className="contact-highlight-item">
              <Phone size={21} />
              <span>
                <small>CALL US</small>
                <strong>+880 1YYY-YYYYYY</strong>
              </span>
            </a>

            <a href="mailto:info@yourcompany.com" className="contact-highlight-item">
              <Mail size={21} />
              <span>
                <small>EMAIL US</small>
                <strong>info@yourcompany.com</strong>
              </span>
            </a>

  <div className="language-switcher topbar-language-switcher" aria-label="Select language">
    <button
      type="button"
      className={activeLanguage === 'en' ? 'active' : ''}
      onClick={() => changeLanguage('en')}
      aria-pressed={activeLanguage === 'en'}
    >
      🇺🇸 EN
    </button>
    <span aria-hidden="true">|</span>
    <button
      type="button"
      className={activeLanguage === 'bn' ? 'active' : ''}
      onClick={() => changeLanguage('bn')}
      aria-pressed={activeLanguage === 'bn'}
    >
      🇧🇩 বাংলা
    </button>
  </div>
</div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="header">
        <div className="container nav-wrap">

          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">
              <Sprout size={27} />
            </span>
            <span className="brand-name">
              GLOBAL<span className="brand-light"> SEED</span>
              <small>COMPANY</small>
            </span>
          </Link>

          <button
            className="mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={open ? 'nav-links show' : 'nav-links'}>
            {links.map(([label, url]) => (
              <NavLink
                key={url}
                to={url}
                end={url === '/'}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <form className="nav-search" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search seeds..."
              aria-label="Search seed catalogue"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" aria-label="Search">
              <Search size={18} />
            </button>
          </form>

        </div>
      </header>
    </>
  )
}




function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div className="footer-brand">
          <Link to="/" className="brand brand-white">
            <span className="brand-mark">
              <Sprout size={27} />
            </span>
            <span>
              GLOBAL<span className="brand-light"> SEED</span>
              <small>COMPANY</small>
            </span>
          </Link>

          <p>
            Growing a greener tomorrow, one seed at a time.
            Discover quality seeds and practical agricultural knowledge
            with Global Seed Company.
          </p>

<div className="socials">
  <a href="#facebook" aria-label="Facebook" className="social-facebook">
    <Facebook size={20} />
  </a>

  <a href="#instagram" aria-label="Instagram" className="social-instagram">
    <Instagram size={20} />
  </a>

  <a href="#linkedin" aria-label="LinkedIn" className="social-linkedin">
    <Linkedin size={20} />
  </a>

  <a href="https://wa.me/8801XXXXXXXXX" aria-label="WhatsApp" className="social-whatsapp">
    <FaWhatsapp size={21} />
  </a>
</div>
        </div>

        <div className="footer-navigation">
          <h4>EXPLORE</h4>
          <Link to="/about">About Us</Link>
          <Link to="/seeds">Our Seeds</Link>
          <Link to="/research">Research & Development</Link>
          <Link to="/knowledge">Knowledge Center</Link>
        </div>

        <div className="footer-contact">
          <h4>GET IN TOUCH</h4>

          <div className="footer-contact-item">
            <Mail size={19} />
            <span>
              <small>EMAIL</small>
              info@globalseed.example
            </span>
          </div>

          <div className="footer-contact-item">
            <Phone size={19} />
            <span>
              <small>PHONE</small>
              +880 1XXX-XXXXXX
            </span>
          </div>

          <div className="footer-contact-item">
            <MapPin size={19} />
            <span>
              <small>OFFICE</small>
              Company address to be added
            </span>
          </div>

          <Link to="/contact" className="footer-contact-link">
            Contact our team <ArrowRight size={16} />
          </Link>
        </div>

      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Global Seed Company.
          All rights reserved.
        </span>
        {/* <span>Growing together with nature.</span> */}
      </div>
    </footer>
  )
}



function SeedCard({ seed }: { seed: typeof seeds[number] }) {
  return (
    <Link to={`/seeds/${seed.id}`} className="seed-card">
      <div className="seed-image">
        <img
          src={seed.image}
          alt={seed.name}
          loading="lazy"
        />

        <span className="seed-category-tag">
          {seed.category}
        </span>

        <span className="seed-card-arrow">
          <ArrowRight size={20} />
        </span>
      </div>

      <div className="seed-info">
        <div className="seed-card-meta">
          <span>{seed.type}</span>
          <span>GSC · COLLECTION</span>
        </div>

        <h3>{seed.name}</h3>

        <p>{seed.description}</p>

        <span className="seed-explore-link">
          Explore variety
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  )
}


// animated Counter
type CountUpProps = {
  value: number
  suffix?: string
  decimals?: number
}

function CountUp({ value, suffix = '', decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    const duration = 2000
    const startTime = performance.now()
    let frameId = 0

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)

      setCount(value * eased)

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      }
    }

    frameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameId)
  }, [started, value])

  return (
    <span ref={ref}>
      {count.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}
function StorySection() {
  const impactStats = [
    { value: 1.5, suffix: 'M+', decimals: 1, label: 'Farmers Reached', number: '01' },
    { value: 64, suffix: '', decimals: 0, label: 'Districts Covered', number: '02' },
    { value: 1500, suffix: '+', decimals: 0, label: 'Distributors', number: '03' },
    { value: 7300, suffix: '+', decimals: 0, label: 'Retailers', number: '04' },
    { value: 17, suffix: '+', decimals: 0, label: 'Projects', number: '05' },
    { value: 7500, suffix: '+', decimals: 0, label: 'Contract Farmers', number: '06' },
    { value: 20, suffix: '+', decimals: 0, label: 'Export Markets', number: '07' },
    { value: 1200, suffix: '+', decimals: 0, label: 'Team Members', number: '08' },
  ]

  return (
    <section className="story-section">

      {/* STORY INTRODUCTION */}
      <div className="container story-container">

        <div className="story-heading">
          <span className="eyebrow">OUR STORY · OUR PURPOSE</span>

          <h2>
            Rooted in Nature.
            <br />
            <em>Growing Beyond Boundaries.</em>
          </h2>
        </div>

        <div className="story-editorial">

          <div className="story-visual">
            <div className="story-main-image">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=90"
                alt="Lush agricultural landscape"
              />

              <span className="story-image-caption">
                CULTIVATING A GREENER TOMORROW
              </span>
            </div>

            <div className="story-small-image">
              <img
                src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=700&q=85"
                alt="Healthy green crops growing in a field"
              />
            </div>

            
          </div>

          <div className="story-content">

            <span className="story-index">01 / WHO WE ARE</span>

            <h3>
              Every great harvest begins with a story.
            </h3>

            <p>
              Agriculture is more than cultivation. It is about people,
              possibilities and the promise of a better tomorrow.
              At Global Seed Company, our story is built around the
              connection between quality seeds, farmers and the future
              of agriculture.
            </p>

            <p>
              We believe that meaningful growth starts with understanding
              the people who grow our food. Our vision is to build lasting
              relationships and contribute to a more sustainable
              agricultural future.
            </p>

            <div className="story-signature">
              <span className="story-signature-line" />
              <span>Growing together, naturally.</span>
            </div>

            <Link to="/about" className="story-link">
              Discover Our Story
              <ArrowUpRight size={18} />
            </Link>

          </div>
        </div>
      </div>

      {/* IMPACT STATISTICS */}
     <div className="story-impact">

  <div className="impact-background-map">
    <img
      src="/images/bangladesh-map.svg"
      alt=""
      aria-hidden="true"
    />
  </div>

  <div className="container impact-container">

    <div className="impact-heading">
      <div>
        <span className="eyebrow">OUR REACH · OUR RESPONSIBILITY</span>

        <h2>
          A growing network.
          <br />
          <em>A lasting impact.</em>
        </h2>
      </div>

      <p>
        Behind every number is a farmer, a partnership
        and a shared ambition to grow a better future.
      </p>
    </div>

    <div className="impact-stats">

      {impactStats.map((stat) => (
        <div className="impact-item" key={stat.number}>

          <span className="impact-number">
            {stat.number}
          </span>

          <strong className="impact-value">
            <CountUp
              value={stat.value}
              suffix={stat.suffix}
              decimals={stat.decimals}
            />
          </strong>

          <span className="impact-label">
            {stat.label}
          </span>

        </div>
      ))}

    </div>

    <div className="impact-footer">
      <span>ROOTED IN BANGLADESH · GROWING TOGETHER</span>
      <span>GLOBAL SEED COMPANY</span>
    </div>

  </div>
</div>

    </section>
  )
}
function Home() {
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const catalog = [seeds[0], seeds[1], seeds[2], seeds[3]]
  const categoryItems = [
  {
    name: 'Vegetable Seeds',
    category: 'Vegetable',
    description: 'Seeds for everyday vegetable growing.',
    image: seeds[0].image
  },
  {
    name: 'Fruit Seeds',
    category: 'Fruit',
    description: 'Discover varieties for fruit cultivation.',
    image: seeds[4].image
  },
  {
    name: 'Grain & Cereal',
    category: 'Grain',
    description: 'Explore grain and cereal crops.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Oilseed',
    category: 'Oilseed',
    description: 'Seeds for oil-producing crops.',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85'
  },
  {
    name: 'Flower Seeds',
    category: 'Flower',
    description: 'Discover seeds for beautiful gardens.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85'
  }
]
  const current = catalog[page]

  const next = () => {
    setDirection('next')
    setPage(p => (p + 1) % catalog.length)
  }

  const prev = () => {
    setDirection('prev')
    setPage(p => (p - 1 + catalog.length) % catalog.length)
  }

  // Keep the rest of your existing Home() JSX below
  return <>

<section
  className="hero"
  style={{
    backgroundImage: `linear-gradient(90deg, rgba(9,43,27,.90), rgba(9,43,27,.62) 60%, rgba(9,43,27,.18)), url(${photo.hero})`
  }}
>
  <div className="container hero-content">
    <span className="eyebrow eyebrow-light">
      <Leaf size={17} /> GROWING WITH NATURE
    </span>

    <h1>
      Better Seeds.<br />
      Stronger Crops.<br />
      <em>Better Harvests.</em>
    </h1>

    <p>
      Explore our seed collection and practical growing information
      to help you make informed choices for your farm.
    </p>

    <div className="hero-actions">
      <Link to="/seeds" className="btn btn-primary">
        Explore Our Seeds <ArrowRight size={19} />
      </Link>

      <Link to="/contact" className="btn btn-outline">
        Contact Our Team
      </Link>
    </div>

    <div className="hero-note">
      <span className="note-line" />
      Growing opportunities for every farmer
    </div>
  </div>

  <div className="hero-stamp">
    <Sprout size={29} />
    <span>GROW<br />WITH NATURE</span>
  </div>
</section>
 


<section className="intro section-pad">
  <div className="container intro-grid">

    <div className="intro-image">
      <img src={photo.field} alt="Healthy green agricultural field" />
      <div className="image-caption">
        <Sprout />
        <span>Growing better crops starts with better choices.</span>
      </div>
    </div>

    <div className="intro-copy">
      <span className="eyebrow">ABOUT GLOBAL SEED COMPANY</span>

      <h2>
        Helping farmers grow
        <br />
        <em>with confidence.</em>
      </h2>

      <p className="lead">
        Every successful harvest begins with the right seed.
        We believe farmers deserve access to quality seed
        information and reliable agricultural knowledge.
      </p>

      <p>
        Global Seed Company aims to connect farmers with seed
        varieties, useful product information and practical
        growing resources. Our goal is to make it easier to
        explore options and make informed farming decisions.
      </p>

      <Link to="/about" className="text-link">
        Learn more about us <ArrowRight size={17} />
      </Link>

      <div className="mini-values">
        <span><ShieldCheck /> Quality focused</span>
        <span><Globe2 /> Growing together</span>
      </div>
    </div>

  </div>
</section>

   <section className="catalog-section section-pad">
  <div className="container">

    {/* Section Heading */}
    <div className="section-heading centered">
      <span className="eyebrow">THE SEED COLLECTION</span>
      <h2>
        Discover our seeds. <em>Grow with confidence.</em>
      </h2>
      <p>
        Explore our collection of vegetable, fruit, grain and flower seeds.
        Find the right varieties for your growing needs.
      </p>
    </div>

    {/* Seed Image Carousel */}
    <div className="seed-carousel">

      {/* Featured Seed Image */}
      <div className="carousel-photo">
        <img
          key={current.id}
          src={current.image}
          alt={current.name}
        />

        <span className="carousel-label">
          {current.category}
        </span>

        <div className="carousel-counter">
          {String(page + 1).padStart(2, '0')} / {String(catalog.length).padStart(2, '0')}
        </div>
      </div>

      {/* Featured Seed Information */}
      <div className="carousel-info">

        <span className="eyebrow">
          FEATURED SEED COLLECTION
        </span>

        <h3>{current.name}</h3>

        <p>{current.description}</p>

        {/* Seed Specifications */}
        <div className="carousel-specs">

          <div>
            <small>SEASON</small>
            <strong>{current.season}</strong>
          </div>

          <div>
            <small>MATURITY</small>
            <strong>{current.maturity}</strong>
          </div>

          <div>
            <small>TYPE</small>
            <strong>{current.type}</strong>
          </div>

        </div>

        {/* Seed Details Link */}
        <Link
          to={`/seeds/${current.id}`}
          className="text-link"
        >
          Explore this seed <ArrowRight size={16} />
        </Link>

        {/* Carousel Navigation */}
        <div className="carousel-navigation">

          <button
            onClick={prev}
            aria-label="Previous seed"
          >
            <ChevronLeft />
          </button>

          <div className="carousel-dots">
            {catalog.map((seed, index) => (
              <button
                key={seed.id}
                className={page === index ? 'active' : ''}
                onClick={() => {
                  setDirection(index > page ? 'next' : 'prev')
                  setPage(index)
                }}
                aria-label={`Show ${seed.name}`}
                aria-current={page === index ? 'true' : undefined}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next seed"
          >
            <ChevronRight />
          </button>

        </div>
      </div>
    </div>
{/* OUR STORY SECTION */}
<StorySection />
    {/* Catalogue Action Buttons */}
    <div className="catalog-actions">

      <Link to="/seeds" className="btn btn-dark">
        Explore All Seeds <ArrowRight size={16} />
      </Link>

 <a
  href="/catalog/seed-catalog.pdf"
  className="btn catalog-download-btn"
  download="Global-Seed-Company-Catalogue.pdf"
>
  <Download size={17} />
  Download Catalogue
</a>

    </div>

  </div>
</section>



<section className="category-section section-pad">
  <div className="container">

    <div className="section-heading split-heading">
      <div>
        <span className="eyebrow">EXPLORE BY CATEGORY</span>
        <h2>
          A world of seeds, <em>full of possibility.</em>
        </h2>
        <p>Explore our seed collections by crop category.</p>
      </div>

      <Link to="/seeds" className="text-link">
        View all seeds <ArrowRight size={16} />
      </Link>
    </div>

    <div className="category-marquee">

      {/* TOP ROW */}
      <div className="category-track category-track-top">
        {categoryItems.concat(categoryItems).map((item, index) => (
          <Link
            to="/seeds"
            className="category-card"
            key={`top-${item.category}-${index}`}
          >
            <img src={item.image} alt={item.name} loading="lazy" />

            <div className="category-overlay">
              <span className="category-subtitle">
                SEED COLLECTION
              </span>

              <h3>{item.name}</h3>
              <p>{item.description}</p>

              <span className="category-explore">
                Explore More <ArrowRight size={17} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* BOTTOM ROW */}
      <div className="category-track category-track-bottom">
        {[...categoryItems].reverse().concat([...categoryItems].reverse()).map((item, index) => (
          <Link
            to="/seeds"
            className="category-card"
            key={`bottom-${item.category}-${index}`}
          >
            <img src={item.image} alt={item.name} loading="lazy" />

            <div className="category-overlay">
              <span className="category-subtitle">
                SEED COLLECTION
              </span>

              <h3>{item.name}</h3>
              <p>{item.description}</p>

              <span className="category-explore">
                Explore More <ArrowRight size={17} />
              </span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  </div>
</section>


    <section className="research-band"><div className="container research-grid"><div className="research-copy"><span className="eyebrow eyebrow-light">KNOWLEDGE & INNOVATION</span><h2>Science behind<br/><em>every seed.</em></h2><p>Better growing begins with curiosity, careful observation, and a commitment to learning. Explore the ideas and practices that shape modern agriculture.</p><Link to="/research" className="btn btn-light">Explore our approach <ArrowRight size={16}/></Link></div><img src={photo.research} alt="Agricultural research and growing"/></div></section>

    <section className="knowledge-section section-pad"><div className="container"><div className="section-heading centered"><span className="eyebrow">GROW YOUR KNOWLEDGE</span><h2>Good information helps <em>good things grow.</em></h2><p>Practical topics for curious growers and agricultural communities.</p></div><div className="knowledge-grid">{[['01','Choosing the right seeds','Understand the factors to consider when selecting seeds for your growing conditions.','🌱'],['02','Preparing for planting','Explore the basics of soil preparation, timing, and thoughtful planning.','🌿'],['03','Growing through the seasons','Learn why seasonal awareness matters for successful crop planning.','☀️']].map(([n,t,d,e])=><article className="knowledge-card" key={n}><div className="knowledge-art">{e}<span>{n}</span></div><div className="knowledge-copy"><small>GROWING GUIDE</small><h3>{t}</h3><p>{d}</p><Link to="/knowledge" className="text-link">Read guide <ArrowRight size={15}/></Link></div></article>)}</div></div></section>

    <section className="cta-section" style={{backgroundImage:`linear-gradient(90deg,rgba(13,58,37,.94),rgba(13,58,37,.78)),url(${photo.leaves})`}}><div className="container cta-inner"><span className="eyebrow eyebrow-light">LET'S GROW TOGETHER</span><h2>Let's grow a better<br/><em>future together.</em></h2><p>Have a question about our seeds or want to connect with our team?</p><Link to="/contact" className="btn btn-light">Get in touch <ArrowRight size={16}/></Link></div></section>
  </>
}

function PageHero({tag,title,description}:{tag:string,title:string,description:string}) {
  return <section className="page-hero"><div className="container"><span className="eyebrow eyebrow-light">{tag}</span><h1>{title}</h1><p>{description}</p></div></section>
}

function SeedsPage() {
  const [query,setQuery] = useState('')
  const [category,setCategory] = useState('All')
  const filtered = useMemo(()=>seeds.filter(s=>(category==='All'||s.category===category)&&`${s.name} ${s.category} ${s.type}`.toLowerCase().includes(query.toLowerCase())),[query,category])
  return <><PageHero tag="EXPLORE THE COLLECTION" title="Seeds for every growing story." description="Browse our sample seed directory. Product information shown here is illustrative and must be verified before publication."/><section className="section-pad"><div className="container">
<div className="directory-tools">
  <div className="directory-search-row">
    <div className="search-box">
      <Search size={19} />
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search by seed name, crop or variety..."
        aria-label="Search seed varieties"
      />
      {query && (
        <button
          type="button"
          className="search-clear"
          onClick={() => setQuery('')}
          aria-label="Clear search"
        >
          <X size={17} />
        </button>
      )}
    </div>
    <span className="directory-total">
      {filtered.length} <small>varieties found</small>
    </span>
  </div>

  <div className="filter-row">
    {categories.map(c => (
      <button
        key={c}
        onClick={() => setCategory(c)}
        className={category === c ? 'filter active' : 'filter'}
        aria-pressed={category === c}
      >
        {c}
      </button>
    ))}
  </div>
</div>
<p className="result-count">{filtered.length} sample varieties</p><div className="seed-grid">{filtered.map(s=><SeedCard key={s.id} seed={s}/>)}</div>{filtered.length===0&&<div className="empty-state"><Sprout size={32}/><h3>No varieties found</h3><p>Try another search or category.</p></div>}<p className="disclaimer">Note: All seed names, characteristics, seasons, and maturity details are here, for more information, please contact our sales team.</p></div></section></>
}

function SeedDetail() {
  const {id}=useParams()
  const seed=seeds.find(s=>s.id===Number(id))
  if(!seed) return <div className="container section-pad"><h2>Seed not found</h2><Link to="/seeds" className="text-link">Back to seeds</Link></div>
  return <><section className="detail-top"><div className="container breadcrumb"><Link to="/">Home</Link> / <Link to="/seeds">Seeds</Link> / {seed.name}</div><div className="container detail-grid"><img src={seed.image} alt={seed.name}/><div><span className="eyebrow">{seed.category} · {seed.type}</span><h1>{seed.name}</h1><p className="lead">{seed.description}</p><div className="detail-facts"><span><b>Growing season</b>{seed.season}</span><span><b>Maturity period</b>{seed.maturity}</span><span><b>Variety type</b>{seed.type}</span></div><Link to="/contact" className="btn btn-dark">Inquire about this seed <ArrowRight size={16}/></Link></div></div></section><section className="section-pad"><div className="container detail-lower"><div><span className="eyebrow">VARIETY OVERVIEW</span><h2>At a glance</h2><p>Use this space for verified product descriptions, growing recommendations, and technical specifications supplied by Global Seed Company.</p></div><div className="highlight-list">{seed.highlights.map(h=><span key={h}><Leaf size={17}/>{h}</span>)}</div></div><p className="container disclaimer">Demonstration content only. Confirm all agricultural data with the product owner before publishing.</p></section></>
}


function AboutPage() {
  return (
    <>
      {/* ABOUT HERO */}
      <section className="about-hero">
        <img
          className="about-hero-image"
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=90"
          alt="Expansive agricultural fields"
        />
        <div className="about-hero-overlay" />

        <div className="about-hero-content">
          <span className="about-kicker">
            GLOBAL SEED COMPANY · OUR STORY
          </span>

          <h1>
            Growing a better future,
            <em> one seed at a time.</em>
          </h1>

          <p>
            Every great harvest begins with a possibility.
            Discover the purpose, people and passion behind
            our journey.
          </p>

          <a href="#about-identity" className="about-hero-link">
            DISCOVER OUR STORY <ArrowRight size={17} />
          </a>
        </div>

        <div className="about-hero-bottom">
          <span>ROOTED IN NATURE</span>
          <span>SCROLL TO EXPLORE ↓</span>
          <span>GROWING WITH PURPOSE</span>
        </div>
      </section>

      {/* OUR IDENTITY */}
      <section className="about-identity section-pad" id="about-identity">
        <div className="container">
          <div className="about-identity-heading">
            <span className="eyebrow">01 / WHO WE ARE</span>
            <h2>
              More than seeds.
              <br />
              <em>A commitment to growth.</em>
            </h2>
          </div>

          <div className="about-identity-grid">
            <div className="about-identity-visual">
              <div className="about-identity-main">
                <img
                  src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1200&q=90"
                  alt="Healthy green agricultural crops"
                  loading="lazy"
                />
              </div>

              <div className="about-identity-small">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=85"
                  alt="Young plants growing in soil"
                  loading="lazy"
                />
              </div>

              <span className="about-visual-caption">
                THE PROMISE OF EVERY NEW BEGINNING
              </span>
            </div>

            <div className="about-identity-copy">
              <span className="about-section-index">
                OUR PURPOSE · OUR PHILOSOPHY
              </span>

              <h3>
                Where nature meets
                <em> possibility.</em>
              </h3>

              <p className="about-lead">
                Agriculture is not simply about what we grow.
                It is about the lives we touch and the future
                we help cultivate.
              </p>

              <p>
                At Global Seed Company, we believe that every
                seed represents an opportunity for growth.
                Our commitment is to build meaningful
                connections between quality seeds, farmers
                and a more promising agricultural future.
              </p>

              <p>
                Our story, experience and achievements will
                be presented here through the verified history
                and information of the company.
              </p>

              <div className="about-values-inline">
                <div>
                  <ShieldCheck size={22} />
                  <span>Quality</span>
                </div>
                <div>
                  <Globe2 size={22} />
                  <span>Responsibility</span>
                </div>
                <div>
                  <Sprout size={22} />
                  <span>Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* VISION, MISSION & VALUES */}
      <section className="about-principles">
        <div className="about-principles-image">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1800&q=90"
            alt="Sunlight falling on green plants"
            loading="lazy"
          />
        </div>

        <div className="about-principles-overlay" />

        <div className="container about-principles-container">
          <div className="about-principles-heading">
            <span className="about-section-index">
              02 / WHAT GUIDES US
            </span>

            <h2>
              A purpose that
              <em> grows beyond today.</em>
            </h2>

            <p>
              Our guiding principles represent the values we
              aspire to bring into every relationship,
              every decision and every growing season.
            </p>
          </div>

          <div className="about-principles-grid">
            <article className="principle-item">
              <span className="principle-number">01</span>
              <div className="principle-icon">
                <Globe2 size={27} strokeWidth={1.3} />
              </div>
              <span className="principle-label">OUR VISION</span>
              <h3>A future full of possibility.</h3>
              <p>
                To be a trusted contributor to a more
                productive, responsible and sustainable
                agricultural future.
              </p>
              <span className="principle-line" />
            </article>

            <article className="principle-item">
              <span className="principle-number">02</span>
              <div className="principle-icon">
                <Sprout size={27} strokeWidth={1.3} />
              </div>
              <span className="principle-label">OUR MISSION</span>
              <h3>Making growth meaningful.</h3>
              <p>
                To connect farmers with quality-focused
                seed solutions, useful knowledge and
                dependable support.
              </p>
              <span className="principle-line" />
            </article>

            <article className="principle-item">
              <span className="principle-number">03</span>
              <div className="principle-icon">
                <ShieldCheck size={27} strokeWidth={1.3} />
              </div>
              <span className="principle-label">OUR VALUES</span>
              <h3>Growing with integrity.</h3>
              <p>
                To uphold quality, responsibility,
                transparency and respect for the people
                behind agriculture.
              </p>
              <span className="principle-line" />
            </article>
          </div>

          <div className="about-principles-footer">
            <span>ROOTED IN PURPOSE</span>
            <span>GUIDED BY PRINCIPLES · INSPIRED BY NATURE</span>
          </div>
        </div>
      </section>
     
{/* OUR JOURNEY */}
<AboutJourney />

{/* FOUNDER'S VOICE */}
<section className="about-founder">
  <div className="container about-founder-container">

    <div className="about-founder-image-wrap">
      <div className="about-founder-image">
        <img
          src="/images/founder.jpg"
          alt="Portrait of the founder of Global Seed Company"
          loading="lazy"
        />
      </div>

      <span className="founder-image-caption">
        THE PERSON BEHIND THE VISION
      </span>
    </div>

    <div className="about-founder-content">
      <span className="about-section-index">
        04 / A WORD FROM OUR FOUNDER
      </span>

      <h2>
        Every great journey
        <em> begins with a belief.</em>
      </h2>

      <div className="founder-quote-mark">“</div>

      <blockquote>
        [Insert the founder's personal message about the
        company's vision, commitment to farmers and future
        of agriculture.]
      </blockquote>

      <div className="founder-signature">
        <span className="founder-name">[Founder Name]</span>
        <span className="founder-designation">
          [Founder / Managing Director]
        </span>
      </div>

      <span className="founder-details-note">
        FOUNDER PROFILE TO BE CONFIRMED
      </span>
    </div>

  </div>
</section>


{/* CLOSING CTA */}
<section className="about-closing-cta">
  <div className="about-closing-image">
    <img
      src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=90"
      alt="Expansive green agricultural landscape"
      loading="lazy"
    />
  </div>

  <div className="about-closing-overlay" />

  <div className="container about-closing-content">
    <span className="about-closing-label">
      05 / LET'S GROW TOGETHER
    </span>

    <h2>
      The future of agriculture
      <em> starts with what we grow today.</em>
    </h2>

    <p>
      Discover our seed solutions and explore how
      Global Seed Company can support your
      agricultural journey.
    </p>

    <div className="about-closing-actions">
      <Link to="/seeds" className="about-cta-primary">
        Explore Our Seeds <ArrowRight size={17} />
      </Link>

      <Link to="/contact" className="about-cta-secondary">
        Get in Touch <ArrowRight size={17} />
      </Link>
    </div>

    <span className="about-closing-footer">
      ROOTED IN NATURE · GROWING TOWARDS TOMORROW
    </span>
  </div>
</section>

    </>
  )
}


function AboutJourney() {
  const chapters = [
    {
      number: '01',
      label: 'THE BEGINNING',
      title: 'Where the story takes root.',
      description:
        'Discover the founding story, original vision and the beginnings of Global Seed Company.',
      image:
        'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1100&q=90',
      alt: 'Green agricultural field'
    },
    {
      number: '02',
      label: 'GROWING TOGETHER',
      title: 'Building relationships that matter.',
      description:
        'Explore the company’s development, its work with farmers and the milestones that shaped its journey.',
      image:
        'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1100&q=90',
      alt: 'Agricultural workers in a field'
    },
    {
      number: '03',
      label: 'THE ROAD AHEAD',
      title: 'A future full of possibilities.',
      description:
        'Look ahead to the company’s ambitions, evolving ideas and commitment to agricultural progress.',
      image:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=90',
      alt: 'Expansive agricultural landscape'
    }
  ]

  return (
    <section className="about-journey-horizontal">
      <div className="container">
        <div className="journey-top">
          <div className="journey-heading">
            <span className="about-section-index">
              03 / OUR JOURNEY
            </span>

            <h2>
              A story still
              <em> growing.</em>
            </h2>

            <p>
              Every chapter marks a step forward.
              Explore the beginnings, progress and
              possibilities that shape our journey.
            </p>
          </div>

          <div className="journey-scroll-note">
            <span>EXPLORE OUR CHAPTERS</span>
            <span className="journey-scroll-arrow">→</span>
            <small>SCROLL TO DISCOVER</small>
          </div>
        </div>

        <div className="journey-horizontal-track">
          <div className="journey-track-line" />

          {chapters.map((chapter) => (
            <article className="journey-panel" key={chapter.number}>
              <div className="journey-panel-marker">
                <span>{chapter.number}</span>
              </div>

              <div className="journey-panel-image">
                <img
                  src={chapter.image}
                  alt={chapter.alt}
                  loading="lazy"
                />
                <span className="journey-panel-number">
                  {chapter.number}
                </span>
              </div>

              <div className="journey-panel-content">
                <span className="journey-label">
                  {chapter.label}
                </span>

                <h3>{chapter.title}</h3>

                <p>{chapter.description}</p>

                <span className="journey-pending">
                  COMPANY DETAILS TO BE CONFIRMED
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="journey-bottom">
          <span>GLOBAL SEED COMPANY</span>
          <span>THE JOURNEY CONTINUES <span>↗</span></span>
        </div>
      </div>
    </section>
  )
}


function ResearchPage(){return <><PageHero tag="RESEARCH & DEVELOPMENT" title="Curiosity is where growth begins." description="Explore the research themes, quality practices, and agricultural ideas that support better growing."/><section className="section-pad"><div className="container feature-grid"><img src={photo.research} alt="Research environment"/><div><span className="eyebrow">OUR APPROACH</span><h2>Knowledge in service of <em>nature.</em></h2><p>Use this page to introduce the company's actual research activities, seed testing processes, crop development work, and quality assurance practices.</p><ul className="check-list"><li><FlaskConical/> Seed research and evaluation</li><li><ShieldCheck/> Quality assessment</li><li><Leaf/> Sustainable growing practices</li></ul></div></div></section></>}
function KnowledgePage(){return <><PageHero tag="KNOWLEDGE CENTER" title="Learn, grow, and share." description="A home for practical growing guides, crop knowledge, and agricultural insights."/><section className="section-pad"><div className="container knowledge-grid">{[['Seed selection basics','A starting point for understanding seed choice.','🌱'],['Soil preparation','Why healthy soil is an important part of growing.','🌿'],['Planning by season','Think ahead with a seasonal growing plan.','☀️']].map(([t,d,e])=><article className="knowledge-card" key={t}><div className="knowledge-art">{e}</div><div className="knowledge-copy"><small>LEARNING RESOURCE</small><h3>{t}</h3><p>{d}</p><span className="text-link">Article coming soon <ArrowRight size={15}/></span></div></article>)}</div></section></>}

function ContactPage() {
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'General inquiry',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setSent(false)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        tag="CONTACT GLOBAL SEED"
        title="Let's grow something meaningful together."
        description="Whether you're exploring seed solutions, building a partnership or simply have a question, we're ready to start a conversation."
      />

      <section className="contact-page-section">
        <div className="container">
          <div className="contact-intro">
            <span className="eyebrow">WE'RE HERE TO CONNECT</span>
            <h2>Good things begin with <em>a conversation.</em></h2>
            <p>
              Tell us what you're looking for. Our team will be glad to
              understand your needs and explore how we can help.
            </p>
          </div>

          <div className="contact-page-grid">
            <aside className="contact-information">
              <span className="contact-side-label">GET IN TOUCH</span>
              <h3>Let's talk about <em>what's next.</em></h3>
              <p>
                Reach out to us for product information, distribution
                opportunities or general inquiries.
              </p>

              <div className="contact-info-item">
                <div className="contact-info-icon"><Mail size={19} /></div>
                <div>
                  <small>EMAIL US</small>
                  <strong>info@globalseed.example</strong>
                  <span>Official email to be confirmed</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon"><Phone size={19} /></div>
                <div>
                  <small>CALL US</small>
                  <strong>+880 1XXX-XXXXXX</strong>
                  <span>Official phone number to be confirmed</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon"><MapPin size={19} /></div>
                <div>
                  <small>VISIT US</small>
                  <strong>Global Seed Company</strong>
                  <span>Office address to be confirmed</span>
                </div>
              </div>

              <div className="contact-side-note">
                <Sprout size={21} />
                <span>ROOTED IN TRUST. GROWING TOGETHER.</span>
              </div>
            </aside>

            <div className="contact-form-panel">
              <div className="contact-form-heading">
                <span className="eyebrow">SEND AN INQUIRY</span>
                <h3>How can we <em>help you?</em></h3>
                <p>Complete the form below and tell us a little about your inquiry.</p>
              </div>

              <form className="premium-contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <label>
                    Full name <span>*</span>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label>
                    Email address <span>*</span>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <div className="contact-form-row">
                  <label>
                    Phone number
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880"
                      autoComplete="tel"
                    />
                  </label>

                  <label>
                    Inquiry type <span>*</span>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                    >
                      <option>General inquiry</option>
                      <option>Seed product information</option>
                      <option>Distribution opportunity</option>
                      <option>Business partnership</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>

                <label>
                  Your message <span>*</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    required
                  />
                </label>

                <button type="submit" className="contact-submit-button">
                  Send your inquiry <ArrowRight size={17} />
                </button>

                {sent && (
                  <p className="contact-demo-message" role="status">
                       Thank you for your interest in Global Seed Company!
    We appreciate you reaching out and look forward to connecting with you.
                  </p>
                )}

                
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ChatAssistant() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null)

  const questions = [
    { id: 'company', link: '/about' },
    { id: 'seeds', link: '/seeds' },
    { id: 'selection', link: '/seeds' },
    { id: 'catalogue', link: '/seeds' },
    { id: 'distribution', link: '/contact' },
    { id: 'contact', link: '/contact' }
  ]

  const selected = questions.find(
    (question) => question.id === activeQuestion
  )

  const handleQuestion = (id: string) => {
    setActiveQuestion(id)
  }

  const showQuestions = () => {
    setActiveQuestion(null)
  }

  return (
    <div className="gs-assistant">
      {isOpen && (
        <section
          className="gs-chat-window"
          aria-label={t('chatbot.title')}
        >
          <header className="gs-chat-header">
            <div className="gs-chat-brand">
              <div className="gs-chat-brand-icon">
                <Sprout size={23} />
              </div>
              <div>
                <strong>{t('chatbot.title')}</strong>
                <span>
                  <i /> {t('chatbot.headerSubtitle')}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="gs-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label={t('chatbot.close')}
            >
              <X size={20} />
            </button>
          </header>

          <div className="gs-chat-body">
            <div className="gs-chat-welcome">
              <div className="gs-chat-avatar">
                <Sprout size={19} />
              </div>
              <div className="gs-chat-bubble">
                {t('chatbot.welcome')}
                <br />
                {t('chatbot.greeting')}
              </div>
            </div>

            {selected ? (
              <>
                <div className="gs-chat-user-message">
                  {t(`chatbot.${selected.id}`)}
                </div>

                <div className="gs-chat-answer">
                  <div className="gs-chat-avatar">
                    <Sprout size={17} />
                  </div>
                  <div className="gs-chat-answer-content">
                    <p>{t(`chatbot.answers.${selected.id}`)}</p>

                    <button
                      type="button"
                      className="gs-chat-link"
                      onClick={() => {
                        setIsOpen(false)
                        navigate(selected.link)
                      }}
                    >
                      {t(`chatbot.links.${selected.id}`)}
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  className="gs-chat-back"
                  onClick={showQuestions}
                >
                  <ArrowRight size={14} />
                  {t('chatbot.anotherQuestion')}
                </button>
              </>
            ) : (
              <div className="gs-chat-question-area">
                <span className="gs-chat-question-label">
                  {t('chatbot.quickQuestions')}
                </span>

                {questions.map((item) => (
                  <button
                    type="button"
                    className="gs-chat-question"
                    key={item.id}
                    onClick={() => handleQuestion(item.id)}
                  >
                    {t(`chatbot.${item.id}`)}
                    <ArrowRight size={15} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <footer className="gs-chat-footer">
            <span>
              <Leaf size={13} />
              {t('chatbot.footerMessage')}
            </span>
            <small>Global Seed Company</small>
          </footer>
        </section>
      )}

      <button
        type="button"
        className={`gs-chat-launcher ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? t('chatbot.closeAssistant') : t('chatbot.openAssistant')}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X size={23} />
        ) : (
          <MessageCircle size={23} strokeWidth={2.2} />
        )}
        {!isOpen && <span>{t('chatbot.launcher')}</span>}
      </button>
    </div>
  )
}
function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/seeds" element={<SeedsPage />} />
          <Route path="/seeds/:id" element={<SeedDetail />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="*"
            element={
              <PageHero
                tag="404"
                title="Page not found"
                description="The page you are looking for does not exist."
              />
            }
          />
        </Routes>
      </main>

      <Footer />
      {/* Floating chatbot on every page */}
      <ChatAssistant />
    </>
  )
}

export default App



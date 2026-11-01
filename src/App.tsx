import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import {
  Link,
  NavLink,
  useNavigate,
  Route,
  Routes,
  useParams
} from 'react-router-dom'
import { ArrowRight, Sprout, Menu, X, Search, ChevronLeft, ChevronRight, Leaf, FlaskConical, ShieldCheck, Globe2, Download, Mail, MapPin, Phone, Instagram, Facebook, Linkedin, BookOpen, Sun, Flower2 } from 'lucide-react'
import { categories, seeds } from './data'

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

  const links = [
    ['Home', '/'],
    ['About Us', '/about'],
    ['Our Seeds', '/seeds'],
    ['Research', '/research'],
    ['Knowledge', '/knowledge'],
    ['Contact', '/contact']
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

         <div className="topbar-contacts flex items-center gap-8">
  <a href="tel:+8801XXXXXXXXX">
    <Phone size={16} />
    +880 1XXX-XXXXXX
  </a>
  <a href="tel:+8801XXXXXXXXX">
    <Phone size={16} />
    +880 1XXX-XXXXXX
  </a>
  <a href="mailto:info@yourcompany.com">
    <Mail size={16} />
    info@yourcompany.com 
  </a>
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
  return <footer className="footer"><div className="container footer-grid">
    <div className="footer-brand"><Link to="/" className="brand brand-white"><span className="brand-mark"><Sprout size={25}/></span><span>GLOBAL<span className="brand-light"> SEED</span><small>COMPANY</small></span></Link><p>Growing a greener tomorrow, one seed at a time. Discover quality seeds and practical agricultural knowledge.</p><div className="socials"><a href="#facebook" aria-label="Facebook"><Facebook/></a><a href="#instagram" aria-label="Instagram"><Instagram/></a><a href="#linkedin" aria-label="LinkedIn"><Linkedin/></a></div></div>
    <div><h4>Explore</h4><Link to="/about">About us</Link><Link to="/seeds">Our seeds</Link><Link to="/research">Research & development</Link><Link to="/knowledge">Knowledge center</Link></div>
    <div><h4>Get in touch</h4><span><Mail size={16}/> info@globalseed.example</span><span><Phone size={16}/> +880 1XXX-XXXXXX</span><span><MapPin size={16}/> Company address to be added</span></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Global Seed Company. All rights reserved.</span><span>Growing together with nature.</span></div></footer>
}

function SeedCard({ seed }: { seed: typeof seeds[number] }) {
  return <Link to={`/seeds/${seed.id}`} className="seed-card"><div className="seed-image"><img src={seed.image} alt={seed.name}/><span>{seed.category}</span></div><div className="seed-info"><small>{seed.type}</small><h3>{seed.name}</h3><p>{seed.description}</p><span className="text-link">Explore variety <ArrowRight size={15}/></span></div></Link>
}

function Home() {
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const catalog = [seeds[0], seeds[1], seeds[2], seeds[3]]
  const current = catalog[page % catalog.length]

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

    <section className="catalog-section section-pad"><div className="container"><div className="section-heading centered"><span className="eyebrow">THE SEED COLLECTION</span><h2>Turn a page. <em>Discover growth.</em></h2><p>Explore our sample seed collection in an interactive catalog experience.</p></div><div className="book-stage"><div className="book-shadow"/><div className="book"><div className="book-cover"><div className="cover-art"><Sprout size={54}/><span>GSC / SEED COLLECTION</span></div><div className="cover-title"><small>GLOBAL SEED COMPANY</small><h3>The Growing<br/>Collection</h3><p>Seeds for a brighter harvest</p></div><div className="cover-footer">BOTANICAL SERIES · VOL. 01</div></div>
<div
  key={page}
  className={`book-page ${direction === 'next' ? 'turn-next' : 'turn-prev'}`}
>      <div className="page-top"><span>FEATURED VARIETY</span><span>0{page+1} / 04</span></div><img src={current.image} alt={current.name}/><div className="page-content"><small>{current.category.toUpperCase()} · {current.type}</small><h3>{current.name}</h3><p>{current.description}</p><div className="page-spec"><span><b>Season</b>{current.season}</span><span><b>Maturity</b>{current.maturity}</span></div><Link to={`/seeds/${current.id}`} className="text-link">View seed details <ArrowRight size={14}/></Link></div><div className="page-number">GSC — {String(page+1).padStart(2,'0')}</div></div></div><div className="book-controls"><button onClick={prev} aria-label="Previous catalog page"><ChevronLeft/></button><span>Browse the collection <b>{page+1} / {catalog.length}</b></span><button onClick={next} aria-label="Next catalog page"><ChevronRight/></button></div></div>
<div className="catalog-actions">
  <Link to="/seeds" className="btn btn-dark">
    Explore all seeds <ArrowRight size={16} />
  </Link>

  <a
    href="/catalog/seed-catalog.pdf"
    className="btn btn-outline"
    download="Global-Seed-Company-Catalogue.pdf"
  >
    <Download size={17} />
    Download Catalogue
  </a>
</div></div></section>

    <section className="category-section section-pad"><div className="container"><div className="section-heading split-heading"><div><span className="eyebrow">EXPLORE BY CATEGORY</span><h2>A world of seeds, <em>full of possibility.</em></h2></div><Link to="/seeds" className="text-link">View all seeds <ArrowRight size={16}/></Link></div><div className="category-grid">{[['Vegetable Seeds','Fresh possibilities for everyday growing','🥬'],['Fruit Seeds','Cultivating color, flavor, and abundance','🍉'],['Grain & Cereal','The foundation of food and farming','🌾'],['Flower Seeds','Bring natural beauty to life','🌼']].map(([name,desc,emoji])=><Link to="/seeds" className="category-card" key={name}><span className="category-emoji">{emoji}</span><div><h3>{name}</h3><p>{desc}</p><span className="round-arrow"><ArrowRight size={17}/></span></div></Link>)}</div></div></section>

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
  return <><PageHero tag="EXPLORE THE COLLECTION" title="Seeds for every growing story." description="Browse our sample seed directory. Product information shown here is illustrative and must be verified before publication."/><section className="section-pad"><div className="container"><div className="directory-tools"><div className="search-box"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search seed varieties..."/></div><div className="filter-row">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={category===c?'filter active':'filter'}>{c}</button>)}</div></div><p className="result-count">{filtered.length} sample varieties</p><div className="seed-grid">{filtered.map(s=><SeedCard key={s.id} seed={s}/>)}</div>{filtered.length===0&&<div className="empty-state"><Sprout size={32}/><h3>No varieties found</h3><p>Try another search or category.</p></div>}<p className="disclaimer">Note: All seed names, characteristics, seasons, and maturity details are sample content for demonstration only. Replace with verified company data.</p></div></section></>
}

function SeedDetail() {
  const {id}=useParams()
  const seed=seeds.find(s=>s.id===Number(id))
  if(!seed) return <div className="container section-pad"><h2>Seed not found</h2><Link to="/seeds" className="text-link">Back to seeds</Link></div>
  return <><section className="detail-top"><div className="container breadcrumb"><Link to="/">Home</Link> / <Link to="/seeds">Seeds</Link> / {seed.name}</div><div className="container detail-grid"><img src={seed.image} alt={seed.name}/><div><span className="eyebrow">{seed.category} · {seed.type}</span><h1>{seed.name}</h1><p className="lead">{seed.description}</p><div className="detail-facts"><span><b>Growing season</b>{seed.season}</span><span><b>Maturity period</b>{seed.maturity}</span><span><b>Variety type</b>{seed.type}</span></div><Link to="/contact" className="btn btn-dark">Inquire about this seed <ArrowRight size={16}/></Link></div></div></section><section className="section-pad"><div className="container detail-lower"><div><span className="eyebrow">VARIETY OVERVIEW</span><h2>At a glance</h2><p>Use this space for verified product descriptions, growing recommendations, and technical specifications supplied by Global Seed Company.</p></div><div className="highlight-list">{seed.highlights.map(h=><span key={h}><Leaf size={17}/>{h}</span>)}</div></div><p className="container disclaimer">Demonstration content only. Confirm all agricultural data with the product owner before publishing.</p></section></>
}

function AboutPage(){return <><PageHero tag="OUR STORY" title="Rooted in nature. Focused on tomorrow." description="A company introduction built around a simple belief: every seed carries the possibility of growth."/><section className="section-pad"><div className="container intro-grid"><div className="intro-image"><img src={photo.field} alt="Agricultural landscape"/></div><div className="intro-copy"><span className="eyebrow">ABOUT GLOBAL SEED COMPANY</span><h2>Growing with <em>purpose.</em></h2><p className="lead">We believe progress in agriculture starts with knowledge, quality, and a respect for nature.</p><p>This website is the beginning of Global Seed Company's digital presence. Add the company's verified history, leadership, mission, vision, certifications, and milestones here.</p><div className="mini-values"><span><ShieldCheck/> Quality</span><span><Globe2/> Responsibility</span><span><Sprout/> Growth</span></div></div></div></section></>}
function ResearchPage(){return <><PageHero tag="RESEARCH & DEVELOPMENT" title="Curiosity is where growth begins." description="Explore the research themes, quality practices, and agricultural ideas that support better growing."/><section className="section-pad"><div className="container feature-grid"><img src={photo.research} alt="Research environment"/><div><span className="eyebrow">OUR APPROACH</span><h2>Knowledge in service of <em>nature.</em></h2><p>Use this page to introduce the company's actual research activities, seed testing processes, crop development work, and quality assurance practices.</p><ul className="check-list"><li><FlaskConical/> Seed research and evaluation</li><li><ShieldCheck/> Quality assessment</li><li><Leaf/> Sustainable growing practices</li></ul></div></div></section></>}
function KnowledgePage(){return <><PageHero tag="KNOWLEDGE CENTER" title="Learn, grow, and share." description="A home for practical growing guides, crop knowledge, and agricultural insights."/><section className="section-pad"><div className="container knowledge-grid">{[['Seed selection basics','A starting point for understanding seed choice.','🌱'],['Soil preparation','Why healthy soil is an important part of growing.','🌿'],['Planning by season','Think ahead with a seasonal growing plan.','☀️']].map(([t,d,e])=><article className="knowledge-card" key={t}><div className="knowledge-art">{e}</div><div className="knowledge-copy"><small>LEARNING RESOURCE</small><h3>{t}</h3><p>{d}</p><span className="text-link">Article coming soon <ArrowRight size={15}/></span></div></article>)}</div></section></>}
function ContactPage(){const [sent,setSent]=useState(false);return <><PageHero tag="CONTACT US" title="Let's start a conversation." description="Have a question, partnership idea, or seed inquiry? We'd be glad to hear from you."/><section className="section-pad"><div className="container contact-grid"><div><span className="eyebrow">GET IN TOUCH</span><h2>We'd love to <em>hear from you.</em></h2><p>Replace the sample contact details with the company's official information.</p><div className="contact-detail"><Mail/> <span><b>Email</b>info@globalseed.example</span></div><div className="contact-detail"><Phone/> <span><b>Phone</b>+880 1XXX-XXXXXX</span></div><div className="contact-detail"><MapPin/> <span><b>Office</b>Company address to be added</span></div></div><form className="contact-form" onSubmit={e=>{e.preventDefault();setSent(true)}}><h3>Send an inquiry</h3><label>Your name<input required placeholder="Full name"/></label><label>Email address<input required type="email" placeholder="you@example.com"/></label><label>Inquiry type<select><option>General inquiry</option><option>Seed information</option><option>Distribution / partnership</option></select></label><label>Message<textarea required rows={5} placeholder="How can we help?"/></label><button className="btn btn-dark" type="submit">Send message <ArrowRight size={16}/></button>{sent&&<p className="form-note">Thank you! This demo form is not connected to an email service yet. Connect a backend before accepting real inquiries.</p>}</form></div></section></>}
function App(){return <><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/seeds" element={<SeedsPage/>}/><Route path="/seeds/:id" element={<SeedDetail/>}/><Route path="/research" element={<ResearchPage/>}/><Route path="/knowledge" element={<KnowledgePage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="*" element={<PageHero tag="404" title="Page not found" description="The page you are looking for does not exist."/>}/></Routes></main><Footer/></>}
export default App
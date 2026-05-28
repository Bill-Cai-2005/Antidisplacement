import "./app.css";

function Nav() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="brand">
          <div className="brand__mark" aria-hidden="true" />
          <span className="brand__name">Antidisplacement</span>
        </div>
        <nav className="nav" aria-label="Primary">
          <a href="#thesis">Thesis</a>
          <a href="#strategy">Strategy</a>
          <a href="#why">Why now</a>
          <a href="#contact" className="button button--small">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">A hedge against AI</p>
          <h1>Protecting people and portfolios from displacement risk.</h1>
          <p className="lede">
            Antidisplacement is a fund built around a simple idea: as AI accelerates, the
            distribution of opportunity shifts. We invest in resilience—real assets, essential
            services, and systems that reduce the downside of disruption.
          </p>
          <div className="hero__cta">
            <a className="button" href="#contact">
              Request the deck
            </a>
            <a className="button button--ghost" href="#strategy">
              Explore the approach
            </a>
          </div>
          <div className="trust">
            <div className="trust__item">
              <span className="trust__label">Focus</span>
              <span className="trust__value">Resilience & real outcomes</span>
            </div>
            <div className="trust__item">
              <span className="trust__label">Goal</span>
              <span className="trust__value">Hedge displacement risk</span>
            </div>
            <div className="trust__item">
              <span className="trust__label">Vehicle</span>
              <span className="trust__value">Long-term capital</span>
            </div>
          </div>
        </div>

        <div className="hero__card" role="presentation">
          <div className="card">
            <div className="card__top">
              <h2 className="card__title">What we mean by “displacement”</h2>
              <p className="card__text">
                Sudden shifts in labor markets, housing affordability, and access to essential
                services—driven by automation, capital concentration, and policy lag.
              </p>
            </div>
            <div className="card__bottom">
              <ul className="checks" aria-label="Key dimensions">
                <li>Housing & local stability</li>
                <li>Workforce transition</li>
                <li>Critical infrastructure</li>
                <li>Community services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Thesis() {
  return (
    <section id="thesis" className="section">
      <div className="container">
        <div className="section__head">
          <h2>Thesis</h2>
          <p>
            AI increases productivity—but it can also increase volatility. We seek assets and
            operators that remain valuable as work and income patterns change.
          </p>
        </div>
        <div className="grid">
          <article className="tile">
            <h3>Resilience is investable</h3>
            <p>
              Demand for essentials persists through cycles. We prefer durable cashflows and
              “must-have” services with long time horizons.
            </p>
          </article>
          <article className="tile">
            <h3>Local stability matters</h3>
            <p>
              Displacement shows up first in cities and regions. We underwrite place-based
              dynamics, regulatory paths, and operating leverage.
            </p>
          </article>
          <article className="tile">
            <h3>Upside with a hedge</h3>
            <p>
              We aim to participate in AI-driven growth while limiting exposure to the social and
              economic tail risks it can amplify.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Strategy() {
  return (
    <section id="strategy" className="section section--alt">
      <div className="container">
        <div className="section__head">
          <h2>Strategy</h2>
          <p>
            A barbell approach: resilient real assets on one side, and selective AI-adjacent
            picks-and-shovels on the other—connected by a single risk lens.
          </p>
        </div>

        <div className="split">
          <div className="panel">
            <h3>Resilience sleeve</h3>
            <ul className="bullets">
              <li>Affordable / workforce housing</li>
              <li>Community infrastructure</li>
              <li>Energy reliability & efficiency</li>
              <li>Healthcare access and services</li>
            </ul>
          </div>
          <div className="panel">
            <h3>AI hedge sleeve</h3>
            <ul className="bullets">
              <li>Security, privacy, compliance</li>
              <li>Compute & energy supply chain</li>
              <li>Verification, provenance, auditability</li>
              <li>Workforce upskilling platforms</li>
            </ul>
          </div>
        </div>

        <div className="callout">
          <h3>How we measure fit</h3>
          <p>
            We evaluate each opportunity on cashflow durability, displacement sensitivity,
            regulatory plausibility, and measurable impact on local stability.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyNow() {
  return (
    <section id="why" className="section">
      <div className="container">
        <div className="section__head">
          <h2>Why now</h2>
          <p>
            The next decade will likely be defined by faster capability diffusion than policy
            adaptation. Hedging is cheaper before dislocation becomes consensus.
          </p>
        </div>

        <div className="timeline" aria-label="Key dynamics">
          <div className="timeline__item">
            <div className="timeline__kicker">Acceleration</div>
            <div className="timeline__body">
              Models improve faster than institutions can adjust training, safety nets, and housing
              supply.
            </div>
          </div>
          <div className="timeline__item">
            <div className="timeline__kicker">Concentration</div>
            <div className="timeline__body">
              Returns to scale can concentrate value—creating regional winners and losers.
            </div>
          </div>
          <div className="timeline__item">
            <div className="timeline__kicker">Second-order effects</div>
            <div className="timeline__body">
              When income volatility rises, demand for essentials and stability-first services
              grows.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="contact">
          <div className="contact__copy">
            <h2>Contact</h2>
            <p>
              For the deck, allocation details, or to share an opportunity, email:{" "}
              <a href="mailto:hello@antidisplacement.fund">hello@antidisplacement.fund</a>
            </p>
            <p className="muted">Replace this address with your real contact before publishing.</p>
          </div>
          <form className="contact__form" action="#" method="post" aria-label="Contact form">
            <label>
              <span>Name</span>
              <input name="name" autoComplete="name" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@domain.com"
                required
              />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows="4" placeholder="What are you looking for?" required />
            </label>
            <button className="button" type="submit" disabled aria-disabled="true">
              Send (demo)
            </button>
            <p className="fineprint">This is a static demo form. Wire it to your email service later.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="fineprint">© {new Date().getFullYear()} Antidisplacement. All rights reserved.</p>
        <p className="fineprint">
          This website is for informational purposes only and does not constitute an offer to sell
          or a solicitation of an offer to buy any securities.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Thesis />
        <Strategy />
        <WhyNow />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


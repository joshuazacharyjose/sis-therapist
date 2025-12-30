import Image from 'next/image'
import { Analytics } from '@vercel/analytics/react'
import { StatsSection } from '@/components/sections/StatsSection'

export default function Home() {
  return (
    <>
      <main>
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-white dark:from-dark-dark dark:to-bg-primary overflow-hidden"
        >
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse"></div>
            <div
              className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse"
              style={{ animationDelay: '1s' }}
            ></div>
            <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-secondary rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float"></div>
          </div>
          <div className="absolute top-10 right-20 w-20 h-20 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute bottom-32 left-10 w-16 h-16 bg-accent/30 rounded-full animate-float-delayed-1"></div>
          <div className="absolute top-1/3 right-10 w-12 h-12 bg-secondary/30 rounded-full animate-float-delayed-2"></div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fadeInUp">
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl font-bold font-display text-dark dark:text-white mb-2">
                Mindsake
              </h1>
              <p className="text-xl text-accent dark:text-accent-light font-light italic">
                ~ the mind&apos;s matters ~
              </p>
            </div>

            <p className="text-xl text-dark-light dark:text-gray-light mb-8 max-w-2xl mx-auto">
              Your journey to emotional wellness starts here
            </p>

            <a
              href="https://forms.gle/a23Fe4UPjVquuAVZA"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-primary inline-block"
            >
              Book an Appointment
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent dark:via-primary/50"></div>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-light dark:bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="section-tag mb-4">Get to Know</p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-dark dark:text-white">
                About Angelin
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/about-image.jpg"
                    alt="Therapist Angelin Thereas Jose"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent"></div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-dark-light dark:text-gray-light leading-relaxed">
                  Angelin Thereas Jose, a licensed therapist and founder of
                  Mindsake, is dedicated to helping individuals navigate
                  life&apos;s transitions with clarity and compassion.
                </p>

                <p className="text-dark-light dark:text-gray-light leading-relaxed">
                  Her approach integrates emotional understanding, practical
                  tools, and a grounded sense of empathy to promote genuine
                  healing. With over a decade of experience, Angelin has helped
                  hundreds of individuals, couples, and families find their path
                  to wellness.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <h4 className="font-semibold text-dark dark:text-white">
                        Licensed Therapist
                      </h4>
                      <p className="text-dark-light dark:text-gray-light">
                        Board Certified Clinical Psychologist
                      </p>
                      </div>
                      </div>
                      <div className="flex gap-4">
                      <span className="text-2xl">💼</span>
                      <div>
                      <h4 className="font-semibold text-dark dark:text-white">
                        Specialized Training
                      </h4>
                      <p className="text-dark-light dark:text-gray-light">
                        CBT, DBT, Trauma-Informed Care
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://forms.gle/a23Fe4UPjVquuAVZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-secondary inline-block"
                >
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent dark:via-primary/50"></div>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white dark:bg-bg-primary">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="section-tag mb-4">What I Offer</p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-dark dark:text-white mb-4">
                Therapy Services
              </h2>
              <p className="text-lg text-dark-light dark:text-gray-light max-w-2xl mx-auto">
                Tailored approaches to support your unique journey toward
                emotional wellness
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                icon="👤"
                title="Individual Therapy"
                description="Personalized sessions designed to help you navigate anxiety, depression, grief, or major life changes with compassionate guidance."
                features={[
                  'One-on-one focused sessions',
                  'Customized treatment plans',
                  'Flexible scheduling',
                ]}
              />

              <ServiceCard
                icon="💕"
                title="Couples Therapy"
                description="Guiding couples toward better communication, understanding, and emotional connection through evidence-based techniques."
                features={[
                  'Relationship strengthening',
                  'Conflict resolution',
                  'Communication tools',
                ]}
                featured
              />

              <ServiceCard
                icon="👥"
                title="Group Support"
                description="Facilitated spaces for shared experiences and growth through supportive community dialogue in a safe environment."
                features={[
                  'Peer support network',
                  'Shared healing journey',
                  'Monthly sessions',
                ]}
              />
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent dark:via-primary/50"></div>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-20 bg-gray-light dark:bg-bg-secondary"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="section-tag mb-4">Client Stories</p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-dark dark:text-white">
                What People Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Working with Angelin has been transformative. Her empathetic approach helped me navigate through my darkest times. I finally feel like myself again."
                author="Sarah M."
                role="Individual Therapy Client"
                initials="S"
              />

              <TestimonialCard
                quote="Angelin saved our marriage. Her insights and techniques gave us the tools to truly understand each other. We're closer than ever before."
                author="Raj & Priya K."
                role="Couples Therapy Clients"
                initials="R"
              />

              <TestimonialCard
                quote="The group sessions provided me with a sense of belonging I'd been missing. Angelin creates such a safe, nurturing space for healing."
                author="Aisha T."
                role="Group Support Member"
                initials="A"
              />
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent dark:via-primary/50"></div>

        {/* Process Section */}
        <section className="py-20 bg-white dark:bg-bg-primary">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="section-tag mb-4">How It Works</p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-dark dark:text-white">
                Your Journey to Wellness
              </h2>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <ProcessStep
                  number={1}
                  title="Initial Consultation"
                  description="Free 15-minute call to discuss your needs and see if we're a good fit"
                />
                <div className="hidden md:flex items-center justify-center">
                  <div className="text-3xl text-primary dark:text-primary-light">
                    →
                  </div>
                </div>
                <ProcessStep
                  number={2}
                  title="Assessment"
                  description="Comprehensive evaluation to create your personalized treatment plan"
                />
                <div className="hidden md:flex items-center justify-center">
                  <div className="text-3xl text-primary dark:text-primary-light">
                    →
                  </div>
                </div>
                <ProcessStep
                  number={3}
                  title="Regular Sessions"
                  description="Weekly or bi-weekly sessions tailored to your schedule and goals"
                />
                <div className="hidden md:flex items-center justify-center">
                  <div className="text-3xl text-primary dark:text-primary-light">
                    →
                  </div>
                </div>
                <ProcessStep
                  number={4}
                  title="Growth & Progress"
                  description="Continuous support as you build resilience and achieve wellness"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent dark:via-primary/50"></div>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-light dark:bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="section-tag mb-4">Let&apos;s Connect</p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-dark dark:text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-dark-light dark:text-gray-light">
                Take the first step toward your healing journey
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ContactCard
                  icon="📧"
                  title="Email"
                  content="angelin.jose00@gmail.com"
                  href="mailto:angelin.jose00@gmail.com"
                  isLink
                />
                <ContactCard
                  icon="📱"
                  title="Phone"
                  content="+91 96455 10183"
                  href="tel:+919645510183"
                  isLink
                />
                <ContactCard
                  icon="📍"
                  title="Location"
                  content="Bangalore, India"
                  subtitle="Online sessions available"
                />
                <ContactCard
                  icon="⏰"
                  title="Hours"
                  content="Mon - Fri: 9AM - 7PM"
                  subtitle="Sat: 10AM - 4PM"
                />
              </div>

              <div className="bg-white dark:bg-bg-secondary rounded-2xl p-8 shadow-lg">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-dark dark:text-white mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-dark dark:text-white mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-dark dark:text-white mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-dark dark:text-white mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="form-input"
                    >
                      <option value="">Select a service</option>
                      <option value="individual">Individual Therapy</option>
                      <option value="couples">Couples Therapy</option>
                      <option value="group">Group Support</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-dark dark:text-white mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me a bit about what brings you here..."
                      required
                      className="form-input"
                    ></textarea>
                  </div>

                  <button type="submit" className="cta-btn cta-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src="/mindsake.png"
                  alt="Mindsake Logo"
                  width={48}
                  height={48}
                  className="rounded"
                />
                <span className="font-semibold">Mindsake</span>
              </div>
              <p className="text-gray-light text-sm">
                Nurturing minds, healing hearts
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-light text-sm">
                <li>
                  <a href="#home" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4 text-2xl">
                <a
                  href="https://www.instagram.com/_mindsake/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:opacity-80 transition"
                >
                  📷
                </a>
                <a
                  href="https://www.linkedin.com/in/angelin-jose"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:opacity-80 transition"
                >
                  💼
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray pt-8">
            <p className="text-center text-gray-light text-sm">
              © 2025 Mindsake | Designed with care for well-being
            </p>
            <p className="text-center text-gray text-xs mt-2">
              Confidential & Professional Therapy Services
            </p>
          </div>
        </div>
      </footer>

      <Analytics />
    </>
  )
}

function ServiceCard({
  icon,
  title,
  description,
  features,
  featured = false,
}: {
  icon: string
  title: string
  description: string
  features: string[]
  featured?: boolean
}) {
  return (
    <div
      className={`service-card group ${
        featured
          ? 'service-card-featured bg-gradient-to-br from-primary to-primary-dark text-white scale-105'
          : 'bg-white dark:bg-bg-secondary text-dark dark:text-white'
      }`}
    >
      {featured && (
        <div className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4 shadow-md">
          Most Popular
        </div>
      )}
      <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
      <p
        className={`${featured ? 'text-white/90' : 'text-dark-light dark:text-gray-light'} mb-6`}
      >
        {description}
      </p>
      <ul className="space-y-2 text-sm">
        {features.map((feature) => (
          <li
            key={feature}
            className={
              featured ? 'text-white/90' : 'text-dark dark:text-gray-light'
            }
          >
            ✓ {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
  initials,
}: {
  quote: string
  author: string
  role: string
  initials: string
}) {
  return (
    <div className="testimonial-card">
      <div className="text-4xl text-accent dark:text-accent-light mb-4 font-serif">
        &quot;
      </div>
      <p className="text-dark-light dark:text-gray-light mb-6 italic">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold shadow-md">
          {initials}
        </div>
        <div>
          <h4 className="font-semibold text-dark dark:text-white">
            {author}
          </h4>
          <p className="text-sm text-dark-light dark:text-gray-light">{role}</p>
        </div>
      </div>
      <div className="mt-4 text-accent">⭐⭐⭐⭐⭐</div>
    </div>
  )
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: number
  title: string
  description: string
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg">
        {number}
      </div>
      <h3 className="font-bold text-dark dark:text-white mb-2 font-display">
        {title}
      </h3>
      <p className="text-dark-light dark:text-gray-light text-sm">
        {description}
      </p>
    </div>
  )
}

function ContactCard({
  icon,
  title,
  content,
  subtitle,
  href,
  isLink = false,
}: {
  icon: string
  title: string
  content: string
  subtitle?: string
  href?: string
  isLink?: boolean
}) {
  const ContentComponent = isLink ? 'a' : 'div'

  return (
   <div className="bg-white dark:bg-bg-secondary rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
     <div className="text-3xl mb-3">{icon}</div>
     <h3 className="font-semibold text-dark dark:text-white mb-1">
       {title}
      </h3>
      {isLink ? (
        <a
          href={href}
          className="text-primary dark:text-primary-light hover:underline text-sm transition-colors"
        >
          {content}
        </a>
      ) : (
        <>
          <p className="text-dark-light dark:text-gray-light text-sm font-medium">
            {content}
          </p>
          {subtitle && (
            <p className="text-dark-light dark:text-gray-light text-xs mt-1">
              {subtitle}
            </p>
          )}
        </>
      )}
    </div>
  )
}

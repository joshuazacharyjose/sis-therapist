import Image from 'next/image'
import { Analytics } from '@vercel/analytics/react'

export default function Home() {
  return (
    <>
      <main>
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 dark:opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl font-bold font-display text-slate-900 dark:text-white mb-2">
                Mindsake
              </h1>
              <p className="text-xl text-amber-700 dark:text-amber-300 font-light italic">
                ~ the mind&apos;s matters ~
              </p>
            </div>

            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
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
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <p className="section-tag text-center mb-12">Qualifications</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-700 dark:text-amber-300 mb-2">
                  600+
                </div>
                <div className="text-slate-600 dark:text-slate-300">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-700 dark:text-amber-300 mb-2">
                  2+
                </div>
                <div className="text-slate-600 dark:text-slate-300">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-2">
                  M.Sc.
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  Counselling Psychology
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent dark:via-amber-800"></div>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="section-tag mb-4">Get to Know</p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  Angelin Thereas Jose, a licensed therapist and founder of
                  Mindsake, is dedicated to helping individuals navigate
                  life&apos;s transitions with clarity and compassion.
                </p>

                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
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
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        Licensed Therapist
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        Board Certified Clinical Psychologist
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-2xl">💼</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        Specialized Training
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
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
        <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent dark:via-amber-800"></div>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="section-tag mb-4">What I Offer</p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Therapy Services
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
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
        <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent dark:via-amber-800"></div>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-20 bg-slate-50 dark:bg-slate-800"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="section-tag mb-4">Client Stories</p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white">
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
        <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent dark:via-amber-800"></div>

        {/* Process Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="section-tag mb-4">How It Works</p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white">
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
                  <div className="text-3xl text-amber-700 dark:text-amber-300">
                    →
                  </div>
                </div>
                <ProcessStep
                  number={2}
                  title="Assessment"
                  description="Comprehensive evaluation to create your personalized treatment plan"
                />
                <div className="hidden md:flex items-center justify-center">
                  <div className="text-3xl text-amber-700 dark:text-amber-300">
                    →
                  </div>
                </div>
                <ProcessStep
                  number={3}
                  title="Regular Sessions"
                  description="Weekly or bi-weekly sessions tailored to your schedule and goals"
                />
                <div className="hidden md:flex items-center justify-center">
                  <div className="text-3xl text-amber-700 dark:text-amber-300">
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
        <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent dark:via-amber-800"></div>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <p className="section-tag mb-4">Let&apos;s Connect</p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
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

              <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-900 dark:text-white mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-900 dark:text-white mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-900 dark:text-white mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-slate-900 dark:text-white mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-600 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-700"
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
                      className="block text-sm font-semibold text-slate-900 dark:text-white mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me a bit about what brings you here..."
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-600 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-700"
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
      <footer className="bg-slate-900 dark:bg-black text-white py-12">
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
              <p className="text-slate-400 text-sm">
                Nurturing minds, healing hearts
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
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

          <div className="border-t border-slate-800 pt-8">
            <p className="text-center text-slate-400 text-sm">
              © 2025 Mindsake | Designed with care for well-being
            </p>
            <p className="text-center text-slate-500 text-xs mt-2">
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
      className={`rounded-2xl p-8 transition-all duration-300 ${
        featured
          ? 'bg-amber-700 text-white shadow-xl scale-105'
          : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:shadow-lg'
      }`}
    >
      {featured && (
        <div className="inline-block bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
          Most Popular
        </div>
      )}
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
      <p
        className={`${featured ? 'text-amber-100' : 'text-slate-600 dark:text-slate-400'} mb-6`}
      >
        {description}
      </p>
      <ul className="space-y-2 text-sm">
        {features.map((feature) => (
          <li
            key={feature}
            className={
              featured ? 'text-amber-100' : 'text-slate-700 dark:text-slate-300'
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
    <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg">
      <div className="text-4xl text-amber-700 dark:text-amber-300 mb-4">
        &quot;
      </div>
      <p className="text-slate-700 dark:text-slate-300 mb-6 italic">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold">
          {initials}
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white">
            {author}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">{role}</p>
        </div>
      </div>
      <div className="mt-4">⭐⭐⭐⭐⭐</div>
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
      <div className="w-12 h-12 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
        {number}
      </div>
      <h3 className="font-bold text-slate-900 dark:text-white mb-2 font-display">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm">
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
    <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 text-center">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
        {title}
      </h3>
      {isLink ? (
        <a
          href={href}
          className="text-amber-700 dark:text-amber-300 hover:underline text-sm"
        >
          {content}
        </a>
      ) : (
        <>
          <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">
            {content}
          </p>
          {subtitle && (
            <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">
              {subtitle}
            </p>
          )}
        </>
      )}
    </div>
  )
}

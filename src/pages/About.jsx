import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import SectionDivider from '../components/ui/SectionDivider'
import AnimatedSection from '../components/ui/AnimatedSection'
import Card from '../components/ui/Card'
import RegistrationCertificate from '../components/about/RegistrationCertificate'
import { legalStatus, crossCutting } from '../data/governance'
import { foundingStory, orgTimeline, orgHighlights, aboutGallery } from '../data/about'
import { Eye, Target, CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <>
      <PageHero
        title="About Aghaz-e-Khidmat Foundation"
        subtitle="Our story, vision, mission, and organizational profile — built for transparent community service in Khyber Pakhtunkhwa"
        image="/images/community.svg"
      />
      <SectionDivider />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
              <div className="w-16 h-1 bg-akf-primary mt-3 rounded-full" />
              <p className="mt-4 text-lg text-gray-700 mb-6">
                A new beginning in service — rooted in Malakand Division
              </p>
              <div className="space-y-4">
                {foundingStory.split('\n\n').map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="grid sm:grid-cols-3 gap-4">
                {aboutGallery.map((item) => (
                  <figure
                    key={item.src}
                    className="rounded-2xl overflow-hidden border border-akf-steampunk shadow-md bg-akf-primary-soft"
                  >
                    <img src={item.src} alt={item.alt} className="w-full h-36 object-cover" />
                    <figcaption className="p-3 text-xs font-medium text-gray-700 text-center">
                      {item.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-akf-primary-soft section-pattern">
        <div className="container mx-auto px-6">
          <SectionHeading title="Vision & Mission" subtitle="The principles that guide every programme we design" />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection>
              <Card className="h-full border-t-4 border-t-akf-primary">
                <div className="w-14 h-14 rounded-full bg-akf-primary flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  A Khyber Pakhtunkhwa in which every community has access to education, health, a safe environment and the means to build a dignified, self-reliant future.
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Card className="h-full border-t-4 border-t-akf-primary-dark">
                <div className="w-14 h-14 rounded-full bg-akf-primary-dark flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To mobilize local and international resources to deliver education, health, disaster response, environmental and community-development programs that are transparent, community-driven and sustainable, with a particular focus on women, youth, children and other vulnerable groups.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading title="Organizational Highlights" subtitle="What sets AKF apart as a partner and community organisation" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {orgHighlights.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <Card className="h-full text-center">
                  <div className="w-10 h-10 rounded-full bg-akf-primary text-white font-bold flex items-center justify-center mx-auto mb-3">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-akf-steampunk-light">
        <div className="container mx-auto px-6">
          <SectionHeading title="Our Journey" subtitle="Key milestones in AKF's establishment and growth" />
          <div className="max-w-3xl mx-auto space-y-6">
            {orgTimeline.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-16 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-akf-primary text-white text-sm font-bold">
                      {item.year}
                    </span>
                  </div>
                  <Card className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-akf-steampunk-light section-pattern">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <RegistrationCertificate />
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <Card>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Legal Status</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <tbody>
                    {legalStatus.map((item) => (
                      <tr key={item.label} className="border-b border-akf-steampunk last:border-0">
                        <td className="py-4 pr-6 font-semibold text-akf-primary-dark whitespace-nowrap">{item.label}</td>
                        <td className="py-4 text-gray-700">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection className="mt-8">
            <Card className="bg-akf-primary-soft border-akf-primary/30">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cross-Cutting Commitments</h3>
              <ul className="space-y-3">
                {crossCutting.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-akf-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

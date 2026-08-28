import Navbar from './Navbar'
import Footer from './Footer'

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[4.75rem] md:pt-[4.75rem]">{children}</main>
      <Footer />
    </div>
  )
}

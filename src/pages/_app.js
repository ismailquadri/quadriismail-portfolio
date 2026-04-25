import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { DM_Sans } from 'next/font/google'
import '../styles/globals.css'
import { pageTransition } from '../components/motion/motionConfig'
import MagneticCursor from '../components/MagneticCursor'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <main className={`${dmSans.variable}`}>
      <MagneticCursor />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.pathname}
          initial={pageTransition.initial}
          animate={pageTransition.animate}
          exit={pageTransition.exit}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </main>
  )
}

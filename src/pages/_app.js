import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import { pageTransition } from '../components/motion/motionConfig'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
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
  )
}

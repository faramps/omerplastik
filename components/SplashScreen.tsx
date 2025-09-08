"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface SplashProps {
  children: React.ReactNode
}

export default function SplashScreen({ children }: SplashProps) {
  const [loading, setLoading] = useState(true)
  const { theme } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // 2 saniye sonra kapanır
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }} // exit animasyonu
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-900"
          >
            <motion.img
              src={theme === "dark" ? "/images/darklogo.png" : "/images/lightlogo.png"}
              alt="Ömer Plastik"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.6 }}
              width={450}
              height={200}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={loading ? "invisible" : "visible"}>{children}</div>
    </>
  )
}

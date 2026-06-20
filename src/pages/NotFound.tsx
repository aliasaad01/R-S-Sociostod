import { motion } from "motion/react";
import { Home, AlertCircle } from "lucide-react";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      {/* خلفية جمالية خفيفة متماشية مع الهوية */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 sm:w-125 sm:h-125 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md w-full flex flex-col items-center">
        {/* أيقونة تحذير متحركة برفق */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-brand-primary mb-6"
        >
          <AlertCircle size={64} strokeWidth={1.5} />
        </motion.div>

        {/* رقم الخطأ الفاخر */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="title-font text-7xl sm:text-8xl font-extrabold tracking-tighter text-brand-primary mb-2 selection:bg-transparent"
        >
          404
        </motion.h1>

        {/* رسالة الخطأ باللغة السويدية الموجهة للعملاء */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="title-font text-xl sm:text-2xl font-bold text-brand-text mb-3"
        >
          Sidan kunde inte hittas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-sans text-sm sm:text-base text-brand-text-secondary mb-8 max-w-sm leading-relaxed"
        >
          Ursäkta, men sidan du letar efter finns inte längre eller har
          flyttats.
        </motion.p>

        {/* زر العودة التفاعلي المطور */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full sm:w-auto"
        >
          <Button
            variant="primary"
            size="md"
            onClick={() => (window.location.href = "/")}
            className="w-full sm:w-auto gap-2 shadow-lg"
          >
            <Home size={18} />
            Tillbaka till startsidan
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

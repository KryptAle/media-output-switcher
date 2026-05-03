import { Smartphone, LayoutGrid, Cpu, Download, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-blue-100">
      <header className="border-b border-neutral-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
              <Smartphone className="h-6 w-6" id="app-icon" />
            </div>
            <h1 className="text-xl font-bold tracking-tight" id="main-title">Media Output Switcher</h1>
          </div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 border border-blue-100">Android 16 Ready</span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Main Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-white p-8 shadow-xl shadow-neutral-200/50 border border-neutral-100"
          >
            <h2 className="mb-4 text-2xl font-bold leading-tight" id="overview-header">
              Una solución sencilla para cambiar de audio. 🎧
            </h2>
            <p className="mb-6 text-neutral-600 leading-relaxed">
              Esta aplicación está diseñada para ser minimalista y funcional. No tiene interfaz de usuario
              porque su único propósito es activar el menú de selección de salida nativo de Android.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-600">
                  <LayoutGrid className="h-5 w-5" id="tile-icon" />
                </div>
                <div>
                  <h3 className="font-semibold" id="tile-title">Tile de Ajustes Rápidos</h3>
                  <p className="text-sm text-neutral-500">Añade el botón directamente a tu panel de notificaciones para un acceso instantáneo.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-600">
                  <ExternalLink className="h-5 w-5" id="shortcut-icon" />
                </div>
                <div>
                  <h3 className="font-semibold" id="shortcut-title">Atajo Personalizable</h3>
                  <p className="text-sm text-neutral-500">Usa apps como Shortcut Maker para llamar a la actividad desde cualquier lugar.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-3xl bg-neutral-900 p-8 text-white shadow-2xl">
              <div className="mb-4 flex items-center gap-2 text-blue-400">
                <Cpu className="h-5 w-5" id="tech-icon" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Especificaciones</span>
              </div>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Target API</span>
                  <span className="text-white">API 35 (Android 15/16)</span>
                </li>
                <li className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Lenguaje</span>
                  <span className="text-white">Kotlin / Gradle</span>
                </li>
                <li className="flex justify-between border-b border-neutral-800 pb-2">
                  <span>Package</span>
                  <span className="text-white">com.aleaguilera.outputswitcher</span>
                </li>
                <li className="flex justify-between">
                  <span>Compatibilidad</span>
                  <span className="text-white">Android 10+ (HyperOS / MIUI)</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-blue-50 p-6 border border-blue-100">
              <h3 className="mb-2 font-bold text-blue-900 flex items-center gap-2">
                <Download className="h-4 w-4" id="download-icon" />
                ¿Cómo obtener el código?
              </h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                He generado todos los archivos necesarios del proyecto Android en el sistema de archivos. 
                Para construirlo, puedes descargar el proyecto completo desde el menú <strong>Configuración (Engranaje) &gt; Exportar como ZIP</strong>.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Instructions */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 rounded-3xl border border-neutral-200 bg-white p-8"
        >
          <h3 className="mb-6 text-xl font-bold" id="build-header">Pasos para compilar el APK:</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { step: "01", title: "Descargar", text: "Exporta este proyecto como un archivo ZIP desde el menú de configuración." },
              { step: "02", title: "Abrir", text: "Abre la carpeta 'android' dentro del ZIP usando Android Studio." },
              { step: "03", title: "Compilar", text: "Ve a 'Build > Build APK' para generar el archivo instalable." },
            ].map((item, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-neutral-50">
                <span className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-xs font-bold shadow-sm border border-neutral-100 leading-none">
                  {item.step}
                </span>
                <h4 className="mb-2 font-bold text-neutral-800">{item.title}</h4>
                <p className="text-sm text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="mx-auto max-w-5xl px-6 py-8 text-center text-xs text-neutral-400">
        &copy; 2026 Media Output Switcher Project • Creado para Ale Aguilera
      </footer>
    </div>
  );
}


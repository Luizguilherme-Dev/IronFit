/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // ---- Paleta de marca IronFit ----
      colors: {
        brand: {
          DEFAULT: '#1E56A0', // Azul Energético / Royal Blue (cor primária)
          dark: '#0B2545', // Azul profundo (fundos de seção)
          deeper: '#071A33', // Azul quase preto (footer / gradientes)
          light: '#3B82F6',
          soft: '#E8F0FB', // Azul bem claro para hovers/blobs
        },
        flame: {
          DEFAULT: '#FF5722', // Laranja Vibrante (ação / CTA)
          light: '#FF6B00',
          dark: '#E64A19',
        },
        ink: '#0F172A',
        mist: '#F8FAFC', // Cinza muito claro
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(15, 23, 42, 0.18)',
        glow: '0 0 0 1px rgba(255,255,255,0.14), 0 25px 50px -12px rgba(30, 86, 160, 0.55)',
        flame: '0 14px 30px -10px rgba(255, 87, 34, 0.65)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        pulseRing: 'pulseRing 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
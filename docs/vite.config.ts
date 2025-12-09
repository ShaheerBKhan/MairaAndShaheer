import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/MairaAndShaheer/',
	build: {
		outDir: '.',
		emptyOutDir: false
	},
	server: {
		port: 5173
	}
})

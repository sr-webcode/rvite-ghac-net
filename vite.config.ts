import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@config': path.resolve(__dirname, 'src/config'),
			'@theme': path.resolve(__dirname, 'src/theme'),
			'@customTypes': path.resolve(__dirname, 'src/customTypes')
		}
	}
});

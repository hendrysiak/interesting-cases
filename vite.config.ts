import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd(), '')};
    
    return defineConfig({
    plugins: [react()],
});
}

import '@/assets/styles/globals.scss'
import Footer from '@/modules/Footer/Footer'
import type { AppProps } from 'next/app'
import MainProvider from 'providers/MainProvider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<Component {...pageProps} />
			<Footer />
		</MainProvider>
	)
}

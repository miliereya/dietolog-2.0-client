import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import LanguageProvider from './LanguageProvider/LanguageProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false
		},
	},
})

interface MainProviderProps {
	children: ReactNode
}

const MainProvider: FC<MainProviderProps> = ({ children }) => {
	return (
		<LanguageProvider>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</LanguageProvider>
	)
}
export default MainProvider

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Airbnb | Vacation rentals, cabins, beach houses, & more',
	description: 'Vacation rentals, cabins, beach houses, & more',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}

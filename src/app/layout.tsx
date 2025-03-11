import type { Metadata, Viewport } from 'next';
import React from 'react';
import { Montserrat } from 'next/font/google';
import '@assets/styles/styles.scss';

export const metadata: Metadata = {
	title: 'Монетикум | Главная',
	description: 'Монетикум - викторина для детей, для заработка реальных денег',
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

const montserrat = Montserrat({
	weight: ['400'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
});

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const { API_URL } = process.env;

	console.log(`${API_URL}/api/user`);

	fetch(`${API_URL}/api/user`, {
		credentials: 'include',
	})
		.then((data) => {
			console.log(data);
			data.json();
		})
		.then(console.log)
		.catch((err) => console.log('catch error: ', err));

	return (
		<html lang="ru">
			<body className={`${montserrat.variable} font-sans`}>{children}</body>
		</html>
	);
}

import { IAdminNavbarItem } from './admin-navbar.interface'

export const adminNavbarData: IAdminNavbarItem[] = [
	{ title: 'Сертификаты', url: '/certificates' },
	{ title: 'Не подтв. отзывы', url: '/reviews/not-applied' },
	{ title: 'Консультации', url: '/consultations' },
	{ title: 'Пакеты', url: '/packages' },
	{ title: 'Подтв. записи', url: '/records/applied' },
	{ title: 'Не подтв. записи', url: '/records/not-applied' },
	{ title: 'Подтв. помощь консул.', url: '/consult-help/applied' },
	{ title: 'Не подтв. помощь консул.', url: '/consult-help/not-applied' },
	{ title: 'Программы', url: '/programs' },
	{ title: 'Заказы подтв.', url: '/orders/applied' },
	{ title: 'Заказы не подтв.', url: '/orders/not-applied' },
]

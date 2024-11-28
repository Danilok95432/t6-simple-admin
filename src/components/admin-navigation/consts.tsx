import { type NavigationItem } from 'src/types/navigation'
import { AdminNewsIconSvg } from 'src/UI/icons/adminNewsIconSVG'
import { AdminSupportIconSvg } from 'src/UI/icons/adminSupportIconSVG'
import { AdminEventsIconSvg } from 'src/UI/icons/adminEventsIconSVG'
import { AdminSettingsIconSvg } from 'src/UI/icons/adminSettingsIconSVG'
import { AdminAboutIconSvg } from 'src/UI/icons/adminFederationIconSVG'
import { AdminLibraryIconSvg } from 'src/UI/icons/adminLibraryIconSVG'
import { AdminDepartmentsIconSvg } from 'src/UI/icons/adminDepartmentsIconSVG'

export const adminMenuItems: NavigationItem[] = [
	{
		title: 'Новости',
		icon: <AdminNewsIconSvg />,
		link: 'news-list',
	},
	{
		title: 'Атманов Угол',
		icon: <AdminAboutIconSvg />,
		link: 'atmans',
	},
	{
		title: 'Объекты',
		icon: <AdminDepartmentsIconSvg />,
		link: 'objects',
	},
	{
		title: 'События',
		icon: <AdminEventsIconSvg />,
		link: 'events-list',
	},
	{
		title: 'Библиотека',
		icon: <AdminLibraryIconSvg />,
		link: 'admin-library',
		disable: true,
	},
	{
		title: 'Поддержка',
		link: 'support',
		icon: <AdminSupportIconSvg />,
	},
	{
		title: 'Настройки сайта',
		link: 'admin-settings',
		icon: <AdminSettingsIconSvg />,
	},
]

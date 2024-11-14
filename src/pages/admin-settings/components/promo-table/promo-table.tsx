import { useGetPromosQuery } from 'src/store/site-settings/site-settings.api'

export const PromoTable = () => {
	const { data: promoItems } = useGetPromosQuery(null)
	console.log(promoItems)
	return <div>Таблица</div>
}

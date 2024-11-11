import { type FC } from 'react'
import { useGetAllCulturesQuery } from 'src/store/cultures/cultures.api'

export const CultureElements: FC = () => {
	const { data: cultures } = useGetAllCulturesQuery({ search: '' })
	return <div></div>
}

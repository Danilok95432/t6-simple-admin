import { useState } from 'react'

export const useSearchObjectHandlers = () => {
	const [searchParams, setSearchParams] = useState({
		title: '',
		type: '',
		relation: '',
	})

	const handleSearch = (key: keyof typeof searchParams, value: string) => {
		setSearchParams((prev) => ({ ...prev, [key]: value }))
	}

	return { searchParams, handleSearch }
}

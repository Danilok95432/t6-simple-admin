import { useState } from 'react'

export const useSearchCultureHandlers = () => {
	const [searchParams, setSearchParams] = useState({
		title: '',
		date: '',
		level: '',
		region: '',
	})

	const handleSearch = (key: keyof typeof searchParams, value: string) => {
		setSearchParams((prev) => ({ ...prev, [key]: value }))
	}

	return { searchParams, handleSearch }
}

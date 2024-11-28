import { useState } from 'react'

export const useSearchObjectNewsHandlers = () => {
	const [searchParams, setSearchParams] = useState({
		title: '',
		tags: '',
		date: '',
	})

	const handleSearch = (key: keyof typeof searchParams, value: string) => {
		setSearchParams((prev) => ({ ...prev, [key]: value }))
	}

	return { searchParams, handleSearch }
}

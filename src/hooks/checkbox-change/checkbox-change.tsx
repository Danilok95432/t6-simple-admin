import { useState } from 'react'

export const useCheckboxChange = () => {
	const [exceptStatus, setExceptStatus] = useState<string[]>([])

	const handleCheckboxChange = (label: string, checked: boolean) => {
		if (checked) {
			setExceptStatus([...exceptStatus, label])
		} else {
			setExceptStatus(exceptStatus.filter((status) => status !== label))
		}
	}

	return { handleCheckboxChange, exceptStatus }
}

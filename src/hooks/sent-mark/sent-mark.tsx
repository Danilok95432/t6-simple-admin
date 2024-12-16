import { useEffect, useState } from 'react'
import { useWatch, type Control, type FieldValues } from 'react-hook-form'

export const useIsSent = <T extends FieldValues>(control: Control<T>) => {
	const [isSent, setIsSent] = useState(false)
	const watchedValues = useWatch({ control })

	useEffect(() => {
		setIsSent(false)
	}, [watchedValues])

	const markAsSent = (mark: boolean) => setIsSent(mark)

	return { isSent, markAsSent }
}

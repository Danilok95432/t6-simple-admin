import { type ReactNode } from 'react'
import { type SelOption } from 'src/types/select'
import { type FieldValues } from 'react-hook-form'
import { type ResponseError } from 'src/types/global'

import { format, isDate } from 'date-fns'
import { ru } from 'date-fns/locale'
import { isRejectedWithValue, type Middleware } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

// утилитарная функция для кастомного селекта
export const getValue = (value: string, options: SelOption[]) => {
	return value ? options.find((option) => option.value === value) : ''
}

export const isNullOrEmpty = (value: ReactNode | ReactNode[]): boolean => {
	if (value == null) {
		return true
	}

	if (typeof value === 'string' && value.trim() === '') {
		return true
	}

	return Array.isArray(value) && value.length === 0
}

// Функция передачи кастомного класса для NavLink

export const setActive = (isActive: boolean, styles: string) => (isActive ? styles : '')

// Функция определения формата файла, принимает имя файла

export const defineFileFormat = (fileName: string) => {
	const formatFileArr = fileName.split('.')
	if (formatFileArr.length < 2) return ''
	return formatFileArr[formatFileArr.length - 1]
}

// перевод байт в килобайты

export const convertBytesToKilobytes = (bytes: number) => {
	return (bytes / 1024).toFixed(1)
}

// перевод численных значений в буквенные

export const numberToWord = (num: number) => {
	const numbersMap: Record<number, string> = {
		1: 'Первая',
		2: 'Вторая',
		3: 'Третья',
		4: 'Четвертая',
		5: 'Пятая',
		6: 'Шестая',
		7: 'Седьмая',
		8: 'Восьмая',
		9: 'Девятая',
		10: 'Десятая',
	}

	return numbersMap[num] ?? num
}

// Кастомный метод валидации для проверки HTML содержимого
export const isEmptyHtml = (value: string) => {
	const strippedValue = value.replace(/<[^>]*>/g, '').trim()
	return strippedValue.length > 0
}

// функция форматирования даты с локализацией
export const mainFormatDate = (
	date: Date | undefined,
	dateFormat = 'dd-MM-yyyy',
): string | null => {
	if (!date) return null
	return format(date, dateFormat, { locale: ru })
}

// функция форматирования даты для отправки на сервер
export const formatDate = (dateString: string): string | null => {
	const date = new Date(dateString)

	const timezoneOffset = date.getTimezoneOffset()
	const timezoneSign = timezoneOffset > 0 ? '-' : '+'
	const timezoneHours = String(Math.abs(Math.floor(timezoneOffset / 60))).padStart(2, '0')
	const timezoneMinutes = String(Math.abs(timezoneOffset % 60)).padStart(2, '0')
	const timezone = `${timezoneSign}${timezoneHours}:${timezoneMinutes}`

	const isoDateString = date.toISOString().slice(0, 19)

	return `${isoDateString}${timezone}`
}

export const formatDateToISOWithTimezone = (
	date: Date | null | undefined,
	timezoneOffset: string = '+03:00',
): string => {
	if (!date || !isDate(date) || isNaN(date.getTime())) {
		return 'Invalid Date' // Return a default string for invalid dates
	}

	try {
		// Format the date into ISO 8601 format with the specified timezone offset.
		const formattedDate = format(date, `yyyy-MM-dd'T'HH:mm:ss${timezoneOffset}`)
		return formattedDate
	} catch (error) {
		console.error('Error formatting date:', error)
		return 'Invalid Date' // Return a default string if formatting fails
	}
}

export const booleanToNumberString = (bool: boolean | undefined): string => {
	return bool ? '1' : '0'
}

// форматирование данных с формы в виде объекта в формат FormData
export const transformToFormData = (data: FieldValues) => {
	const formData = new FormData()

	Object.keys(data).forEach((key) => {
		const value = data[key]
		if (value instanceof File || value instanceof Blob) {
			formData.append(key, value)
		} else {
			formData.append(key, String(value))
		}
	})

	return formData
}

// Преобразует строку в массив строк разделенных запятой
export const splitAndTrimStringToArray = (value: string | undefined): string[] => {
	return value ? value.split(',').map((element) => element.trim()) : []
}

// middleware для перехвата ошибок в rtk query

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
	if (isRejectedWithValue(action)) {
		const errorData = action.payload as ResponseError
		const errorMessage = errorData.data.errortext
		toast.error(errorMessage, {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		})

		if (errorData.status === 401) {
			toast.warn('Необходимо авторизоваться', {
				position: 'top-right',
				autoClose: 5000,
			})
		}
	}

	return next(action)
}

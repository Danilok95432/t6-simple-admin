import { type ReactNode } from 'react'
import { type SelOption } from 'src/types/select'
import { type FieldValues } from 'react-hook-form'

import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

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

export const transformArray = (value: string | undefined): string[] => {
	return value ? value.split(',').map((element) => element.trim()) : []
}

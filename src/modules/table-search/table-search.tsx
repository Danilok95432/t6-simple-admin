import React, { type FC } from 'react'

import cn from 'classnames'

import styles from './index.module.scss'

type TableSearchProps = {
	handleSearch: (e: string) => void
	wrapperClassName?: string
}

export const TableSearch: FC<React.InputHTMLAttributes<HTMLInputElement> & TableSearchProps> = ({
	handleSearch,
	wrapperClassName,
	...props
}) => {
	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleSearch(e.currentTarget.value.toLowerCase())
	}

	return (
		<div className={cn(styles.searchWrapper, wrapperClassName)}>
			<input {...props} type='text' onInput={onChangeSearchInput} />
		</div>
	)
}

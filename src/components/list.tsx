import React from 'react'
import { JsonDataType } from '../types/types'

type ListType = React.FC<{
	list: JsonDataType[]
	hover: number | null
	setHover: React.Dispatch<React.SetStateAction<number | null>>
}>

export const List: ListType = ({ list, hover, setHover }) => {
	const handleMouseEnter = (i: number) => {
		if (hover !== i) {
			setHover(i)
		}
	}
	const handleMouseLeave = (i: number) => {
		if (hover !== null && hover === i) {
			setHover(null)
		}
	}

	return (
		<div className="list">
			{list.map((x, i) => (
				<div
					onMouseEnter={() => handleMouseEnter(i)}
					onMouseLeave={() => handleMouseLeave(i)}
					key={i}
					className="list_block"
				>
					<div>
						{x.starttime} - {x.stoptime}
					</div>
					<div>
						{x['start station name']} - {x['end station name']}
					</div>
					<div>duration {x.tripduration}</div>
				</div>
			))}
		</div>
	)
}

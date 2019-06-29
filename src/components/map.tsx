import React from 'react'
import GoogleMapReact from 'google-map-react'

import { JsonDataType } from '../types/types'

type ListType = React.FC<{ list: JsonDataType[]; hover: number | null }>
type LabelType = React.FC<{
	label: string
	lat: number
	lng: number
	hovered: boolean
	style: any
	tripduration: number
}>

const Label: LabelType = ({ label, hovered, tripduration }) => {
	const size = tripduration / 100

	return (
		<>
			{hovered && <div className="label">{label}</div>}
			<div
				className={`mark ${hovered && `mark-hovered`}`}
				style={{
					width: hovered ? 35 + size : 30,
					height: hovered ? 35 + size : 30,
				}}
			/>
		</>
	)
}

export const Map: ListType = ({ list, hover }) => {
	const center = {
		lat: 40.7162469,
		lng: -74.0334588,
	}

	return (
		<div className="map">
			<div style={{ height: '100vh', width: '100%' }}>
				<GoogleMapReact
					defaultCenter={center}
					defaultZoom={13}
					bootstrapURLKeys={{ key: 'api-key' }}
				>
					{list.map((x, i) => (
						<Label
							key={i}
							lat={x['start station latitude']}
							lng={x['start station longitude']}
							hovered={hover === i}
							label={x['start station name']}
							tripduration={x.tripduration}
							style={{ zIndex: hover === i ? 100 : 0 }}
						/>
					))}
					{list.map((x, i) => (
						<Label
							key={i}
							lat={x['end station latitude']}
							lng={x['end station longitude']}
							hovered={hover === i}
							label={x['end station name']}
							tripduration={x.tripduration}
							style={{ zIndex: hover === i ? 100 : 0 }}
						/>
					))}
				</GoogleMapReact>
			</div>
		</div>
	)
}

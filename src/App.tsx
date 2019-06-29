import React, { useState } from 'react'
import JSONdata from './assets/csvjson.json'
import { List } from './components/list'
import { Map } from './components/map'
import { JsonDataType } from './types/types'

const jsonData: JsonDataType[] = Object.values(JSONdata).slice(0, 100)
	

const App: React.FC = () => {
	const [hover, setHover] = useState<number | null>(null)

	return (
		<div className="app">
			<List hover={hover} setHover={setHover} list={jsonData} />
			<Map hover={hover} list={jsonData} />
		</div>
	)
}

export default App

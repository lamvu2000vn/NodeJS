// Lib
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
// Page
import { ProductPage, LoginPage } from './pages'
// Component
import { Header, Body, Loading } from './components/UI'

const App = () => {
	const [isFetch, setIsFetch] = useState(false)
	const [user, setUser] = useState(null)

	useEffect(() => {
		(async () => {
			try {
				const response = await axios('http://localhost:8080/api/is-auth')
				if (response.isAuth) {
					setUser(response.user)
				}

				setIsFetch(true)
			} catch (error) {
				console.log(error)
			}
		})()
	}, [])

	if (!isFetch) {
		return (
			<div className="absolute left-0 top-0 right-0 bottom-0 w-screen h-screen">
				<Loading />
			</div>
		)
	} else {
		if (!user) {
			return (
				<LoginPage />
			)
		} else {
			return (
				<>
					<Header />
					<Body>
						<div><Loading /></div>
						<Routes>
							<Route path="/" element={<ProductPage />} />
						</Routes>
					</Body>
				</>
			)
		}
	}
}

export default App
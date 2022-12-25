import Quiz from "../img/quiz.svg"

import React from 'react'

const Welcome = () => {
	return (
		<div id="welcome">
			<h2>Sede bem-vindo</h2>
			<p>Clicai no botão abaixo</p>
			<button>Iniciar</button>
			<img src={Quiz} alt="Inicio"/>
		</div>
	)
}

export default Welcome
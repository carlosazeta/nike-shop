import shoeImage from '../assets/nike-shoe-landing.png'

const LandingImage: React.FC = () => {
	return (
		<div className='landing-wrapper'>
			<div className='landing-image-wrapper'>
				<img src={shoeImage} alt='Nike shoe' />
			</div>
			<div className='landing-text-wrapper'>
				<h1>
					This{' '}
					<span className='highlight-container'>
						<span className='highlight'>Highlight</span>
					</span>{' '}
					is in the Heading
				</h1>
				<p>
					Engineered for peak performance, the AlphaFly Next% stands at the
					forefront of running shoe technology. Its cutting-edge design
					emphasizes speed and efficiency, making it a go-to choice for
					competitive athletes. The incorporation of ZoomX foam provides
					exceptional energy return, enhancing each step for a more effective
					run.
				</p>
				<p>
					This model distinguishes itself with Nike's Air Zoom pods in the
					forefoot, offering extra cushioning and a responsive feel. A
					full-length carbon fiber plate complements these features, adding
					rigidity and propelling the runner forward to maximize speed.
				</p>
				<p>
					Attention to aerodynamics is evident in its construction, especially
					with the lightweight and breathable AtomKnit upper that molds to the
					foot, ensuring both a secure and comfortable fit. This blend of
					innovation and functionality positions these shoes as a prime choice
					for athletes striving to surpass their personal records.
				</p>
			</div>
		</div>
	)
}

export default LandingImage

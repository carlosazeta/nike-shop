import shoeImage from '../assets/nike-shoe-landing.png'

const LandingImage: React.FC = () => {
	return (
		<div className='landing-wrapper'>
			<div className='landing-image-wrapper'>
				<img src={shoeImage} alt='Nike shoe' />
			</div>
			<div className='landing-text-wrapper'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
					deserunt est veritatis libero neque nostrum. In, ratione pariatur
					repudiandae laborum quos debitis commodi officia obcaecati eius,
					dolore, incidunt nesciunt facilis?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
					deserunt est veritatis libero neque nostrum. In, ratione pariatur
					repudiandae laborum quos debitis commodi officia obcaecati eius,
					dolore, incidunt nesciunt facilis?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
					deserunt est veritatis libero neque nostrum. In, ratione pariatur
					repudiandae laborum quos debitis commodi officia obcaecati eius,
					dolore, incidunt nesciunt facilis?
				</p>
			</div>
		</div>
	)
}

export default LandingImage

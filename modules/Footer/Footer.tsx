import s from './Footer.module.scss'
import arrowIcon from '@/assets/icons/arrow-footer.png'
import Image from 'next/image'

const Footer = () => {
	const scrollToTopHandler = () => {
		window.scrollTo(scrollY, 0)
	}

	return (
		<footer className={s.footer}>
			<div className={`container ${s.container}`}>
				<p>2022 © All rights reserved</p>
				<Image
					onClick={scrollToTopHandler}
					src={arrowIcon}
					alt="Scroll to top"
				/>
			</div>
		</footer>
	)
}
export default Footer

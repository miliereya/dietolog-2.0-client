import { useLanguage } from '@/hooks/useLanguage'
import Heading from '@/ui/Headings/Heading/Heading'
import Meta from '@/utils/meta/Meta'
import Image from 'next/image'
import { FC } from 'react'
import _404image from '@/assets/images/404.png'

import s from './_404.module.scss'

const _404: FC = () => {
	const { back_to_main, heading, text_bot, text_mid, text_top } =
		useLanguage()._404

	

	return (
		<Meta title="404 - Page is not found">
			<div className={s.section}>
				<div className={`container ${s.container}`}>
					<div>
						<Heading text={heading} className={s.heading} />
						<div className={`description ${s.description}`}></div>
					</div>
					<Image src={_404image} alt="404 error" />
				</div>
			</div>
		</Meta>
	)
}
export default _404

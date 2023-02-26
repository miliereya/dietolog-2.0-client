import { IPackage } from '@/shared/models/package.interface'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import PackageItem from './PackageItem'

import s from './DetailedPrices.module.scss'
import { useLanguage } from '@/hooks/useLanguage'
import ActionLink from '@/ui/Buttons/Action/ActionLink'
import Leaf from '@/ui/Background/Leaf/Leaf'

interface DetailedPricesProps {
	packages: IPackage[]
}

const DetailedPrices: FC<DetailedPricesProps> = ({ packages }) => {
	const { detailed_prices, global } = useLanguage()

	const { remark } = detailed_prices
	const { _return } = global

	return (
		<Meta
			title="Katerina Kirichenko services"
			description="Detailed prices of all packages and consultations"
		>
			<div className={`section ${s.section}`}>
				<div className={`${s.ellipse} ${s.ellipse_1}`}></div>
				<div className={`${s.ellipse} ${s.ellipse_2}`}></div>
				<div className={`${s.ellipse} ${s.ellipse_3}`}></div>
				<div className={`${s.ellipse} ${s.ellipse_4}`}></div>
				<div className={`${s.ellipse} ${s.ellipse_5}`}></div>
				<Leaf className={s.background_1} />
				<Leaf className={s.background_2} />
				<Leaf className={s.background_3} />
				<Leaf className={s.background_4} />
				<div className="container">
					{packages.map((_package, index) => (
						<PackageItem
							_package={_package}
							key={_package.title.en}
							isOdd={index % 2 !== 0}
						/>
					))}
					<p className={`description ${s.remark}`}>* {remark}</p>
					<ActionLink path="/" text={_return} className={s.link} />
				</div>
			</div>
		</Meta>
	)
}
export default DetailedPrices

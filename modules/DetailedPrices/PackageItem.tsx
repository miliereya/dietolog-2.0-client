import { useLanguage } from '@/hooks/useLanguage'
import { IPackage } from '@/shared/models/package.interface'
import Heading from '@/ui/Headings/Heading/Heading'
import { currentLanguage } from '@/utils/language'
import { FC } from 'react'

import cn from 'classnames'
import s from './DetailedPrices.module.scss'
import SmallHeading from '@/ui/Headings/SmallHeading/SmallHeading'

interface PackageItemProps {
	isOdd: boolean
	_package: IPackage
}

const PackageItem: FC<PackageItemProps> = ({ _package, isOdd }) => {
	const { package: packageTitle, service_type } =
		useLanguage().detailed_prices

	const {
		title,
		heading_1,
		heading_2,
		sub_heading_1,
		sub_heading_2,
		description,
		services,
	} = _package

	return (
		<div className={s.package}>
			<div
				className={cn(s.info_wrapper, {
					[s.info_wrapper_right]: isOdd,
				})}
			>
				<div>
					<Heading
						text={`${
							title.ru !== 'Повторные консультации *'
								? packageTitle
								: ''
						} ${currentLanguage(title)}`}
					/>
					<p className={`description ${s.description}`}>
						{currentLanguage(description)}
					</p>
				</div>
			</div>
			<table className={s.table}>
				<thead>
					<tr>
						<th>
							<SmallHeading
								className={s.table_heading}
								text={service_type}
							/>
						</th>
						<th>
							<SmallHeading
								className={s.table_heading}
								text={currentLanguage(heading_1)}
							/>
							{currentLanguage(sub_heading_1) !== '-' && (
								<SmallHeading
									className={s.sub_heading}
									text={currentLanguage(sub_heading_1)}
								/>
							)}
						</th>
						<th>
							<SmallHeading
								className={s.table_heading}
								text={currentLanguage(heading_2)}
							/>
							{currentLanguage(sub_heading_2) !== '-' && (
								<SmallHeading
									className={s.sub_heading}
									text={currentLanguage(sub_heading_2)}
								/>
							)}
						</th>
					</tr>
				</thead>
				<tbody>
					{services.map((service, index) => {
						const { title, price_1, price_2 } = service

						return (
							<tr
								key={title.en}
								className={cn(s.row, {
									[s.row_filled]: index % 2 !== 0,
								})}
							>
								<td>
									<p className={`description ${s.row_title}`}>
										{currentLanguage(title)}
									</p>
								</td>
								<td>
									<p className={s.price}>{price_1} ₴</p>
								</td>
								<td>
									<p className={s.price}>{price_2} ₴</p>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
export default PackageItem

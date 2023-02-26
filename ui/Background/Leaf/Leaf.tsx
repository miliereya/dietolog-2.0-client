import Image from 'next/image'
import leaf from '@/assets/images/leaf.png'
import { FC } from 'react'
import s from './Leaf.module.scss'

interface LeafProps {
	className: string
}

const Leaf: FC<LeafProps> = ({ className }) => {
	return (
		<Image
			alt="background"
			src={leaf}
			className={`${s.leaf} ${className}`}
		/>
	)
}
export default Leaf

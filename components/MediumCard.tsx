import Image from 'next/image'

type TMediumCardProps = {
	img: string
	title: string
}

function MediumCard({ img, title }: TMediumCardProps) {
	return (
		<div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
			<div className='relative h-80 w-80'>
				<Image src={img} fill alt={title} className='rounded-xl' />
			</div>
			<h3 className='text-2xl mt-3'>{title}</h3>
		</div>
	)
}

export default MediumCard

import Banner from '@/components/Banner'
import LargeCard from '@/components/LargeCard'
import MediumCard from '@/components/MediumCard'
import SmallCard from '@/components/SmallCard'

type TExploreData = {
	img: string
	location: string
	distance: string
}

type TCardsData = {
	img: string
	title: string
}

export default async function Home() {
	const exploreData: TExploreData[] = await fetch(
		'https://www.jsonkeeper.com/b/FQRM',
	).then(res => res.json())

	const cardsData: TCardsData[] = await fetch(
		'https://www.jsonkeeper.com/b/VHHT',
	).then(res => res.json())

	return (
		<div>
			<Banner />

			<main className='max-w-7xl mx-auto px-8 sm:px-16'>
				<section className='pt-6'>
					<h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						{exploreData.map(({ img, distance, location }, idx) => (
							<SmallCard
								key={idx}
								img={img}
								distance={distance}
								location={location}
							/>
						))}
					</div>
				</section>

				<section>
					<h2 className='text-4xl font-semibold py-8'>Live anywhere</h2>

					<div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
						{cardsData.map(({ img, title }, idx) => (
							<MediumCard key={idx} img={img} title={title} />
						))}
					</div>
				</section>

				<LargeCard
					img='https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440'
					title='The Greatest Outdoors'
					description='Wishlists curated by Airbnb.'
					buttonText='Get Inspired'
				/>
			</main>
		</div>
	)
}

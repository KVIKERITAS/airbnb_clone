'use client'

import {
	Bars3Icon,
	GlobeAltIcon,
	MagnifyingGlassIcon,
	UserCircleIcon,
	UsersIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useState } from 'react'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import { useRouter } from 'next/navigation'

import { DateRangePicker, RangeKeyDict } from 'react-date-range'

type TSelection = {
	selection: {
		startDate: Date
		endDate: Date
		key: string
	}
}

function Header() {
	const [searchInput, setSearchInput] = useState('')
	const [startDate, setStartDate] = useState<Date | undefined>(new Date())
	const [endDate, setEndDate] = useState<Date | undefined>(new Date())
	const [guestNumber, setGuestNumber] = useState(1)
	const router = useRouter()

	const handleSelect = (rangesByKey: RangeKeyDict) => {
		setStartDate(rangesByKey.selection.startDate)
		setEndDate(rangesByKey.selection.endDate)
	}

	const resetInput = () => {
		setSearchInput('')
	}

	const search = () => {
		router.push('/search')
	}

	const selectionRage = {
		startDate: startDate,
		endDate: endDate,
		key: 'selection',
	}

	return (
		<header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
			<div
				onClick={() => router.push('/')}
				className='relative flex items-center h-10 cursor-pointer my-auto'
			>
				<Image
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png'
					alt='logo'
					fill
					style={{
						objectPosition: 'left',
						objectFit: 'contain',
					}}
				/>
			</div>

			<div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
				<input
					value={searchInput}
					onChange={e => setSearchInput(e.target.value)}
					className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
					type='text'
					placeholder='Start your search'
				/>
				<MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
			</div>

			<div className='flex items-center space-x-4 justify-end text-gray-500'>
				<p className='hidden md:inline cursor-pointer'>Become a host</p>
				<GlobeAltIcon className='h-6 cursor-pointer' />

				<div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
					<Bars3Icon className='h-6' />
					<UserCircleIcon className='h-6' />
				</div>
			</div>

			{searchInput && (
				<div className='flex flex-col col-span-3 mx-auto mt-2'>
					<DateRangePicker
						ranges={[selectionRage]}
						minDate={new Date()}
						rangeColors={['#FD5B61']}
						onChange={handleSelect}
					/>
					<div className='flex items-center border-b mb-4'>
						<h2 className='text-2xl flex-grow font-semibold'>
							Number of Guests
						</h2>

						<UsersIcon className='h-5' />
						<input
							value={guestNumber}
							min={1}
							onChange={e => setGuestNumber(Number(e.target.value))}
							className='w-12 pl-2 text-lg outline-none text-red-400'
							type='number'
						/>
					</div>
					<div className='flex'>
						<button onClick={resetInput} className='flex-grow text-gray-500'>
							Cancel
						</button>
						<button onClick={search} className='flex-grow text-red-400'>
							Search
						</button>
					</div>
				</div>
			)}
		</header>
	)
}

export default Header

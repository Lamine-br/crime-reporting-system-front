import Logo from "../components/logo_herfi/Logo";
import { useNavigate } from "react-router-dom";

export function Login() {
	const location = useNavigate();

	return (
		<div className='bg-light_blue w-screen h-screen justify-center items-center'>
			<div className='flex justify-center items-center'>
				<div className='flex flex-col justify-center items-center'>
					<div>
						<h1 className='font-bold text-base text-white'>
							Democratic people’s republic of Algeria
						</h1>
					</div>
					<div>
						<h1 className='font-bold text-base text-white'>
							Ministry of the interior
						</h1>
					</div>
					<div>
						<h1 className='font-bold text-base text-white'>
							General directorate of national security
						</h1>
					</div>
					<div>
						<h1 className='font-bold text-base text-white'>
							National Police service
						</h1>
					</div>
				</div>
				<div>
					<Logo></Logo>
				</div>
			</div>
			<div className='flex flex-col justify-center items-center mt-10'>
				<div className='text-left flex flex-col w-1/4'>
					<label
						htmlFor='badgeNumber'
						className='text-white font-bold mb-2 flex-initial'
					>
						Badge Number
					</label>
					<input
						id='badgeNumber'
						className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
						type='text'
					/>
				</div>
				<div className='text-left flex flex-col w-1/4 mt-2'>
					<label
						htmlFor='password'
						className='text-white font-bold mb-2 flex-initial'
					>
						Password
					</label>
					<input
						id='password'
						className='px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
						type='text'
					/>
				</div>

				<button
					className='bg-azegza text-white font-bold py-2 px-4 mt-7 rounded w-48'
					onClick={() => {
						location("/");
						console.log("clicked");
					}}
				>
					Login
				</button>

				<p className='text-sm text-azegza font-bold mt-8'>
					Please make sure to connect with your police ID card
				</p>
			</div>
		</div>
	);
}

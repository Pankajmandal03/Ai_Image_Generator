import React from 'react'
import { Link } from 'react-router-dom'

const Nvbar = () => {
  return (
	<>
	<nav className=''>
		<ul className='flex justify-center gap-x-40 py-6'>
			<li className='ho'>
				<Link to={"/"} className='text-xl '>Home</Link>
			</li>
			<li>
			<Link to={"/saved"} className='text-xl '>Saved</Link>
			</li>
			<li>
			<Link to={"/ab"} className='text-xl '>Chatbot</Link>
			</li>

		</ul>
	</nav>
	</>
  )
}

export default Nvbar
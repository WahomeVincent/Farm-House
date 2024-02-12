import React from 'react'
import Categories from '../components/Categories'

function Home() {
  return (
    <div>
        {/* Hero page */}
        <div>
            <img src='https://images.unsplash.com/photo-1518843875459-f738682238a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhcm0lMjBwcm9kdWNlfGVufDB8fDB8fHww' alt=''  className='opacity-60'/>
        </div>
        <Categories />
    </div>
  )
}

export default Home
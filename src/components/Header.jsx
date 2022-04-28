import React from 'react'


export default function Header() {
  return (
    <>
        <header className='header'>
            <div ><h2>Weather App</h2></div>
        </header>
        <div className='search'>
            <input type="text" placeholder='Enter City Name..' /><button>Search</button>
        </div>
    </>
  )
}

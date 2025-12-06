import React from 'react'

const MovieForm = ({ addMovie }) => {
    const [movieData, setMovieData]=React.useState({
title:"",
ott:"",
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(movieData);
        if (!movieData?.title.trim() || !movieData?.ott.trim()) return;
        addMovie(movieData);
        setMovieData({...movieData, title: "", ott: ""})
    }
    const handleChange=(e)=>{
        const key = e.target.name;
        const value = e.target.value;
        console.log(key, value)
        setMovieData({...movieData, [key]: value})
    }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col md:flex-row gap-2 mb-8 w-full'>
        <input 
        type="text" 
        placeholder='Movie Title' 
        name='title'
        value={movieData.title} 
        onChange={handleChange}
        className='flex-1 p-2 border border-b-gray-700 bg-gray-800 rounded text-white'
       />
         <select
                name="ott"
                value={movieData?.ott}
                onChange={handleChange}
                className="border border-gray-300 bg-gray-800 rounded-md"
                >
                <option value="">Select an OTT</option>
                <option value="Netfilx">Netfilx</option>
                <option value="Amazon Prime">Amazon Prime</option>
                <option value="Hotstar">Hotstar</option>
                <option value="SonyLIV">SonyLIV</option>
                <option value="Hoichoi">Hoichoi</option>
                <option value="Others">Others</option>
            </select>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
                Add
            </button>
    </form>
  )
}

export default MovieForm;
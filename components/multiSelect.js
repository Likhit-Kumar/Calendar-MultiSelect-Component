import React, { useState } from 'react'

const MultiSelect = props => {
	const [tags, setTags] = useState(props.tags);
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			props.selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};
	return (
    <div className='h-screen flex items-center justify-center'>
      <div className="tags-input flex w-4/5 min-h-max rounded-md max-w-screen-md max-h-14 px-2 focus:ring-1 border-2 hover:border-blue-500 active: outline-blue-500 box-border overflow-scroll hover:xs"> 
        <ul id="tags" className='flex p-0 mt-2 ml-0 mb-0 mr-0'>
          {tags.map((tag, index) => (
            <li key={index} className="tag w-auto h-8 flex items-center justify-center text-white text-sm rounded-md bg-blue-700 px-2 list-none mr-2 mb-2 mt-0 ml-0	">
              <span className='tag-title'>{tag}</span>
              <span className='tag-close-icon block w-4 h-4 leading-4 text-center text-sm ml-2 text-blue-700 cursor-pointer rounded-full bg-white'
                onClick={() => removeTags(index)}
              >
                X
              </span>
            </li>
          ))}
        </ul>
        <div className='flex-wrap flex'>
          <input
            type="text"
            onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
            // placeholder="Press enter to add tags"
          //   className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 '
          className='h-12 text-sm "border-none w-96 pt-1 focus:outline-none focus: outline-transparent transition duration-200'
          />
          <span className="bg-white text-opacity-80 text-sm absolute text-blue-500 py-2 px-2 transition duration-200 input-text">Register Number</span>
        </div>
      </div>
      <div className='p-2'><button class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"> Add </button>
      </div>
      
    </div>
	);
};
export default MultiSelect;
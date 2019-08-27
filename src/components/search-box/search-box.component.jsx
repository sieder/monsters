import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({ placeholder, searchFieldSetState }) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={searchFieldSetState}
    />
)
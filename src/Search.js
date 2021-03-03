import React, {useState} from 'react'
import './Search.css'
// yarn add react-date-range
// yarn add date-fns
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file
import {DateRangePicker} from 'react-date-range'
import PeopleIcon from '@material-ui/icons/People'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'

//DAte Picker component
function Search() {
    const history = useHistory()
    const[startDate, setStartDate] = useState(new Date())
    const[endDate, setEndDate] = useState(new Date())

    function handleClick() {
        history.push("/search")
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

function handleSelect(ranges){
    // react-date-range functions
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
}

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />

            <h2>Number of guests<PeopleIcon/></h2>
            <input
                type="number"
                min={0}
                defaultValue={2}
            />

            <Button onClick={handleClick}>Search Airbnb</Button>
        </div>
    )
}

export default Search

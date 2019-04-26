

export  const sortBytext=({text= ''})=>({
    type: 'SET_TEXT_FILTER',
    text,
})

export  const sortByDate=()=>({
    type: 'SORT_BY_DATE',
    
})

export  const sortByAmount=()=>({
    type: 'SORT_BY_AMOUNT',
    
})

export const setStartDate=()=>({
    type: 'SET_START_DATE',
})

export const setEndDate=()=>({
    type: 'SET_END_DATE',
})
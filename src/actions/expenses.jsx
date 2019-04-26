import uuid from 'uuid'


export const AddExpense=({description='',note= '',amount= 0,createdAt= 0})=>({
    type:'ADD_EXPENSE',
    expense: {
    id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

export const RemoveExpense=({id})=>({
    type: 'REMOVE_EXPENSE',
    id,
    })

export const EditExpense=(id,update)=>({
    type: 'EDIT_EXPENSE',
    id, 
    update
})
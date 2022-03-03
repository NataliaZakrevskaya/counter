const INCREMENT_COUNT = "INCREMENT_COUNT"
const DECREMENT_COUNT = "DECREMENT_COUNT"
const RESET_COUNT = "RESET_COUNT"


const initialState = {
    value: 0
}


export const counterReducer = (state: InitialStateType = initialState, action: counterReducerType): InitialStateType => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {...state, value: state.value + 1}
        case DECREMENT_COUNT:
            return {...state, value: state.value - 1}
        case RESET_COUNT:
            return {...state, value: 0}
        default:
            return state
    }
}


// ACTIONS
export const incCount = () => {
    return {type: INCREMENT_COUNT} as const
}
export const decCount = () => {
    return {type: DECREMENT_COUNT} as const
}
export const resCount = () => {
    return {type: RESET_COUNT} as const
}

// TYPES
type InitialStateType = typeof initialState
type IncCountType = ReturnType<typeof incCount>
type DecCountType = ReturnType<typeof decCount>
type ResCountType = ReturnType<typeof resCount>
type counterReducerType = IncCountType | DecCountType | ResCountType

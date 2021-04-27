import {INCREASE_CLICKED,DECREASE_CLICKED,INCREASE_COUNTER,DECREASE_COUNTER,RESET_COUNTER,COUNTER_WARNING,REMOVE_WARNING} from './types'

export const increase_clicked = () => {
    return{
        type: INCREASE_CLICKED,
    }
}

export const decrease_clicked = () => {
    return{
        type: DECREASE_CLICKED,
    }
}

export const increase = (data) => {
    return{
        type: INCREASE_COUNTER,
        payload: data
    }
}

export const decrease = (data) => {
    return{
        type: DECREASE_COUNTER,
        payload: data
    }
}

export const reset = () => {
    return{
        type: RESET_COUNTER,
    }
}

export const warning = () => {
    return{
        type: COUNTER_WARNING,
        payload: "WARNING!!! COUNTER SHOULD BE GREATER THAN EQUAL TO 0"
    }
}
import {INCREASE_COUNTER,DECREASE_COUNTER,RESET_COUNTER,COUNTER_WARNING} from '../actions/types'

const initialState = {
    counter : 0,
    warning : null
}

export default function(state=initialState, action){
    switch(action.type){
        case INCREASE_COUNTER:
            return{
                ...state,
                counter: state.counter+1,
                warning: null
            }

        case DECREASE_COUNTER:
            return{
                ...state,
                counter: state.counter-1,
                warning: null
            }

        case RESET_COUNTER:
            return{
                counter: 0,
                warning: null
            }
            
        case COUNTER_WARNING:
            return{
                ...state,
                warning: action.payload
            }

        default:
            return state
    }
}
import stateSchema from './stateSchema';
import tv4 from 'tv4'

export default ({dispatch, getState})=> (next) => (action) => {
    // state schema validation happens aftere reducers created the new state.
    // so we immediatley call the next to pass on the action to next middlware
    next(action)

    if (!tv4.validate(getState(), stateSchema)){
        console.warn("Invalid State Schema detected")
    }

}
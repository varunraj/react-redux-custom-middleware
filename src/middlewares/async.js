// allow to creare async action creators

// a function that return function that return a function
export default ({dispatch}) => {
    // next is also function which is next middleware
    return (next) => {
        // action from action creator
        return (action) => {
            // check to see if action has a promise on payliad
            // if it does, wait to resolve, else pass on to next middleware
            
            //debugger;

            // a promise will have a then property on it
            if(!action.payload || !action.payload.then) {
                return next(action)
            }

            // wait for promise to resolve and create new action
            // and dispatch

            action.payload.then((response)=>{
                const newAction = {...action, payload:response }
                dispatch(newAction)
            });

        }
    }
}


// function return a function return a function can also be written as

// export default({dispatch}) => next => action => {}
// DEPRECATED
// Crafts Rings that are equivalent to a slice/store for Redux
// TODO figure typescript based usage for listeners and actions


const createStore = (reducer:any,initalState:any) => {
    const store = {
        state: undefined,
        listeners: [],
        subscriber: undefined,
        dispatch: undefined,
        getState: undefined
    };

    store.state = initalState;

    // @ts-ignore
    store.subscriber = (listener: any) => store.listeners.push(listener);

    // @ts-ignore
    store.dispatch = (action: any) => {
        validateAction(action);
        store.state = reducer(store.state,action);
        // @ts-ignore
        store.listeners.forEach(listener => listener(action));
    };
    // @ts-ignore
    store.getState = () => store.state;
    // @ts-ignore
    store.dispatch({type: "@@redux/INIT"});

    return store;

}

function validateAction(action:any){
    if(!action || typeof action !== 'object' || Array.isArray(action)) throw new Error('Action must be an object!');

    if(typeof action.type === 'undefined') throw new Error('Action must be a type!');
}

export default createStore;


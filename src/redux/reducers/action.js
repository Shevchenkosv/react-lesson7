

export const getCount = () => {

    return (dispatch, getState) => {
        console.log(getState());
        dispatch({ type: 'plus' })
        dispatch({ type: 'plus' })
        dispatch({ type: 'plus' })
        setTimeout(() => {
            console.log(getState())
        }, 5000)

    }
}
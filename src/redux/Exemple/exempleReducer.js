const initialState = { subtitle: 'Subtitulo' }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SUBTITLE':
            return { ...state, subtitle: action.payload }
        default:
            return state
    }
}
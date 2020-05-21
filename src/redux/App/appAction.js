//O Padrão é utilizar uma function por action mas não é uma regra
//Type é como se fosse um listener inicializado no reducer
export default {
    setText(text) {
        return { type: 'SET_TEXT', payload: text }
    }
}
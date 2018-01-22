const getInitialState = {
  primeiroValorST: 0,
  segundoValorST: 0
}

export default function (state = getInitialState, action) {
  switch (action.type) {
    case 'SETAR-PRIMEIRO-VALOR':
      return {
        ...state,
        primeiroValorST: action.payload,
      }
    case 'SETAR-SEGUNDO-VALOR':
      return {
        ...state, 
        segundoValorST: action.payload
      }
    default: return state  
  }
}

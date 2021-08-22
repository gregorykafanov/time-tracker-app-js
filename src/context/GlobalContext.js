import { createContext, useContext, useReducer } from 'react';

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const initialState = {
  users: [],
  isPopupOpened: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
      };

    case 'SET_IS_POPUP_OPENED':
      return {
        ...state,
        isPopupOpened: action.payload,
      };

    default:
      throw new Error(`No such action type as ${action.type}!`);
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

//  -- hooks block--
export function useSetUsersCTX() {
  const dispatch = useGlobalDispatchCTX();
  const { users } = useContext(GlobalStateContext);

  return [
    users,
    usersArray =>
      dispatch({
        type: 'SET_USERS',
        payload: usersArray,
      }),
  ];
}

export function useIsPopupOpenedCTX() {
  const dispatch = useGlobalDispatchCTX();
  const { isPopupOpened } = useContext(GlobalStateContext);

  return [
    isPopupOpened,
    isOpened =>
      dispatch({
        type: 'SET_IS_POPUP_OPENED',
        payload: isOpened,
      }),
  ];
}

export function useGlobalStateCTX() {
  const state = useContext(GlobalStateContext);

  if (!state) {
    throw Error('useGlobalState must be used within GlobalContextProvider');
  }

  return state;
}

export function useGlobalDispatchCTX() {
  const dispatch = useContext(GlobalDispatchContext);

  if (!dispatch) {
    throw Error('useGlobalDispatch must be used within GlobalContextProvider');
  }

  return dispatch;
}

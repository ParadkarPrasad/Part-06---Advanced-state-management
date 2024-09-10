import {useContext,createContext, useReducer} from 'react'

const NotificationReducer = (state, action) =>{
  switch (action.type) {
    case 'SHOW':
      return state.concat({content: action.payload.content, id: action.payload.id})
    case 'HIDE':
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}
const NotificationContext = createContext()
export const NotificationContextProvider = (props) =>{
  const [notifications, setNotificationsDispatch] = useReducer(NotificationReducer, [])
  return(
    <NotificationContext.Provider value={[notifications, setNotificationsDispatch]}>

      {props.children}
    </NotificationContext.Provider>
  )
}

export const useNotificationValue = ()=> {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[0]
}

export const useNotificationDispatch = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[1]
}
export default NotificationContext
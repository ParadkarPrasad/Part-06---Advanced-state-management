import {useContext,createContext, useReducer} from 'react'

const NotificationReducer = (state, action) =>{
  switch (action.type) {
    case 'SHOW':
      return action.payload; 
    case 'HIDE':
      return '';
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
const initalState = false


export const themeReducer =(state=initalState,action)=>{
   if(action.type == "changeTheme")
     return action.payload
   return state;
}
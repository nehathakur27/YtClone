const initalState = []


export const reducers =(state=initalState,action)=>{
   if(action.type == "add")
     return action.payload
   return state;
}
export const Intial_State = {
  name: "",
  email: "",
  message: "",
};
export const FormReducer = (state, action) => {
  switch (action.type) {
    case "Change_name":
      return{
        ...state,
        [action.payload.name] : action.payload.value
      }
    case "Change_email":
        return{
            ...state,
            [action.payload.name] : action.payload.value
          }
    case "Change_message":
      return{
        ...state,
        [action.payload.name]:action.payload.value
      }

    default:
      return state;
  }
};

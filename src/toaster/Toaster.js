import { toast } from "react-hot-toast";

export const notifySuccess = (message ) =>  toast.success(message,{duration:1000 } ) ; 
export const notifyError = (message) => toast.error(message , {duration:1000}) ; 



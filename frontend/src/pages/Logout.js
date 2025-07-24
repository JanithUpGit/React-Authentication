import { redirect } from "react-router-dom";


export function action({ request }){
    localStorage.removeItem('token');
    return redirect('/');

}
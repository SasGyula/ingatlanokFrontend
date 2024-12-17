import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("")
export const ApiProvider = ({ children }) => {
    const [ingatlanLista, setIngatlanLista] = useState([])
    const [katLista, setKatLista] = useState([])


    const getAdat = async (vegpont, callbackFv) => {
        try {
            const response = await myAxios.get(vegpont);
            callbackFv(response.data)
        } catch (err) {
            console.log("Hiba történt az adat elküldésekor.")
        }
    }
    const postAdat = async (vegpont, adat) => {
        try {
            const response = await myAxios.post(vegpont,adat);
        } catch (err) {
            console.log("Hiba történt az adat elküldésekor.")
        }
    }
    const deleteAdat = async (vegpont, id) => {
        try {
            const response = await myAxios.delete(vegpont + "/" +  id);
        } catch (err) {
            console.log("Hiba történt az adat törlésekor.")
        }
    }
    //useEffect hook segitségével
    useEffect(()=>{
        {getAdat("/api/ingatlanok", setIngatlanLista)};
        {getAdat("/api/kategoriak", setKatLista)};
        },[])
    return <ApiContext.Provider value={{ingatlanLista, katLista, postAdat, deleteAdat}}>
        {children}
    </ApiContext.Provider>;
}
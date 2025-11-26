import {create} from 'zustand'

//Store para guardar valores globales
const URL='https://app.ticketmaster.com/discovery/v2/events.json?countryCode=MX&apikey='

const useEventsResults= create((set)=>({
    data:[],
    error:null,
    isLoading:false,
    fetchEvents:async (params)=>{
        try{
            await set(()=>({isLoading:true}))

            const response  = await fetch(`${URL}${import.meta.env.VITE_TICKETMASTER_APIKEY}${params?.length?params:''}`)
            const data= await response.json()

           await set(()=> ({data,isLoading:false}))

        }catch(error){
            await set(()=> ({error}))
        }
    }
}))

export default useEventsResults
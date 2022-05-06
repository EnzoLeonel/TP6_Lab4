import axios from 'axios'

import { config } from './config'


export const getAllProducts = async()=>{
    return await axios.get(`${config.databaseUrl}/api/instrumentos`,{
        'mode': 'no-cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
    }).then(res=> res.data)
    .catch(err=> {
        console.log(err)
    })
}

export const getProductById = async(id)=>{
    return await axios.get(`${config.databaseUrl}/api/instrumentos/${id}`,{
        'mode': 'no-cors',
        'headers': {
            'Access-Control-Allow-Origin': '*',
        }
    }).then(res=> res.data)
    .catch(err=> {
        console.log(err)
    })
}
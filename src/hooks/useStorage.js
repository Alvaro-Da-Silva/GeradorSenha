import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {

//  buscar itens salvos
const getItem = async (key) => {
    try{
        const senhas = await AsyncStorage.getItem(key)
        return JSON.parse(senhas) || [];

    }catch(err){
        console.log("ERRO AO BUSCAR", err )
        return [];
    }
    
}


// salvar um item 
const saveItem = async (key,value) => {
    try{
        let senhas = await getItem(key);

        senhas.push(value)

        await AsyncStorage.setItem(key,JSON.stringify(senhas))

    }catch(error){
        console.log("ERRO AO SALVAR", error)
    }
}

// remover item 
const removeItem = async (key, item) => {
    try{
        let senhas = await getItem(key);  //busca os itens do banco
        let minhasenhas = senhas.filter((senhas) => {
            return(senhas !== item)
        })

        await AsyncStorage.setItem(key, JSON.stringify(minhasenhas))
        return minhasenhas;  
 
    }catch(error){
        console.log("ERRO AO DELETAR",error)

    }

}

return{
    getItem,
    saveItem,
    removeItem,
}

}

export default useStorage;
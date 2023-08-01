import axios from "axios"

const baseUrl = "https://todoapp-backend-ewnm.onrender.com"

const getAllToDo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data--->',data);
        setToDo(data)
    })
}

const addToDo = (text,setText,setToDo) =>{
    axios
    .post(`${baseUrl}/save`,{text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateToDo = (toDOId,text,setToDo,setText,setisUpdating) =>{
    axios
    .post(`${baseUrl}/update`,{_id:toDOId,text})
    .then((data) => {
        setText("")
        setisUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const deleteToDo = (toDOId,setToDo) =>{
    axios
    .post(`${baseUrl}/delete`,{_id:toDOId})
    .then((data) => {
        
        getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

export {getAllToDo,addToDo,updateToDo,deleteToDo}
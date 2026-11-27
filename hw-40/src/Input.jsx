export const Input = () => {

    const handleChange = (event) =>{
        console.log(event.target.value)
    }
    const handleFocus = (event)=>{
        console.log("focus")
    }


    return <input onFocus={handleFocus} onChange={handleChange} type="text" placeholder="Введіть текст" />
};
 
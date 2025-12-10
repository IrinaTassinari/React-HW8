import { useEffect, useState } from "react"

function ListItems(){

    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        console.log("Компонент ListItems обновлен");
    }, []);

    const addItem = (e) => {
        e.preventDefault();

        if (inputValue.trim() === "") return; // Если пользователь ничего не ввёл — ничего не добавляем
        
        setItems((prevItem) => [...prevItem, inputValue]) //Берём старый список и копируем его ...prevItem и добавляем новое значение в конец
        setInputValue('') //Очищаем поле ввода после добавления
    }

    return(
        <div>
            <form onSubmit={addItem}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button type='submit'>Add</button>
            </form>
            <ul>
                {items.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListItems
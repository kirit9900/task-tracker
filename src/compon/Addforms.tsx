import TaskItem from "./TaskItem"

type AddFormProps = {
 addNewTask: (title: string) => void
}

function AddForm({addNewTask}: AddFormProps) {

    const newTaskHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter'){
            if (event.currentTarget.value.length!==0 && !event.currentTarget.value.includes(' ')){
            addNewTask(event.currentTarget.value)
            event.currentTarget.value = ''  
            }
            else{
                alert('Введите непустой текст без пробелов')
            }
            // Дописать проверку на наличие данных в инпуте
        }
    }

    return (
        <div className="add-form">
            <input onKeyDown={newTaskHandler} placeholder="Введите новую задачу"/>
        </div>
    )
}

export default AddForm
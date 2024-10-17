const container = document.getElementById('input_fields')

function addField(){
    const field = document.createElement("input")
    field.type = "text"
    field.name = "dynamic_field[]"
    container.appendChild(field)
    container.appendChild(document.createElement("br"))
}

//the two field & fields are different but connected with
//same id

function removeField(){
    const fields = container.getElementsByTagName("input")
if (fields.length > 1) {
    container.removeChild(fields[fields.length - 1])
    container.removeChild(container.lastChild)
}
}
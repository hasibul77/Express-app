
//create
export const createTask = async (req, res) =>{
    return res.json({message:'Task Created Successfully'})
}

//read
export const readTask = async (req, res) =>{
    return res.json({message:'Task Read Successfully'})
}

//update
export const updateTask = async (req, res) =>{
    return res.json({message:'Task Updated Successfully'})
}

//delete

export const deleteTask = async (req, res) =>{
    return res.json({message:'Task Deleted Successfully'})
}
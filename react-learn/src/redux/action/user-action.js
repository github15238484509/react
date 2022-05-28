const addUser = Symbol("add-user")
const deleteUser = Symbol("delete-user")
const updateUser = Symbol("upda-user")


function addUserAction(user) {
    return {
        type: addUser,
        payload: user
    }
}

function deleteUserAction(id) {
    return {
        type: deleteUser,
        payload: id
    }
}

function updateUserAction(user) {
    return {
        type: updateUser,
        payload: user
    }
}
export const userActionTypes = {
    addUser,
    deleteUser,
    updateUser
}
const userAction = {
    addUserAction,
    deleteUserAction,
    updateUserAction
}
export default userAction
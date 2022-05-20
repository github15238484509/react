export const user = {
    login: false
}
export function Login() {
    user.login = true
    localStorage.setItem("login", true)

}
export function Logout() {
    user.login = false
    localStorage.setItem("login", false)
}
function whoAmi() {
    if (localStorage.getItem("login") === "true") {
        user.login = true
    } else {
        user.login = false
    }
}
whoAmi()
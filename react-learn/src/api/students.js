export async function GetStudents(page = 1, limit = 10) {
    let datas = await fetch(`http://127.0.0.1:3000/api/students?page=${page}&limit=${limit}`).then(e => e.json())
    return datas
}
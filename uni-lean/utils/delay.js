
export function delay(duration){
    return new Promise(reslove=>{
        setTimeout(reslove,duration)
    })
}

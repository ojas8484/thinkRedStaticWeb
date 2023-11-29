export async get(){
    return new response (JSON.stringify({'Hello this is a test run'}),{
        status :200 ,
        headers : {"content-type" : "application/json"},
    })
}
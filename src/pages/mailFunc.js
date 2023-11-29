export async function get(){
    return new Response (JSON.stringify({message: 'Hello this is a test run'}),{
        status :200 ,
        headers : {"content-type" : "application/json"},
    });
}
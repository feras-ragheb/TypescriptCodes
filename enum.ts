enum StatusCode{
    Success = 200,
    NotFound=404,
    ServerError=500
}

function handelResponse(status:StatusCode){

    switch(status){

        case StatusCode.Success:
          console.log("Success Code:", StatusCode.Success)
          break
        
        case StatusCode.NotFound:
            console.error("Not Found:", StatusCode.NotFound)
            break
        
        case StatusCode.ServerError:
            console.error("Error Server : ",StatusCode.ServerError)
            break
        
        default:
            console.log("Uknown Status Code: ", status)
            break



    }

}


handelResponse(StatusCode.Success)
handelResponse(StatusCode.ServerError)
handelResponse(StatusCode.NotFound)

handelResponse(900)

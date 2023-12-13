
export const ErrorComponent = ({type, message}) => {

    if(type=="text"){
        return(
            <div>
                <p>{message}</p>
            </div>
        )
    }else if(type=="overlay"){
        return(
            <div>
                <div>
                    <p>{message}</p>
                </div>
            </div>
        )
    }
}
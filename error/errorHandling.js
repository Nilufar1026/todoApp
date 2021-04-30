class missingId extends Error{
    constructor(id){
        super()
        this.errorCode=400
        this.errorMessage='Invalid body, missing id'
    }
}


module.exports={missingId}
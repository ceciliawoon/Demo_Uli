const express = require ('express')
const router = express.Router()
const ExpenseTemplateCopy = require ('../models/signupmodels')



router.post('/signup', async(request, response)=>{

   

    const expuser = new ExpenseTemplateCopy({
        Transport:request.body.Transport,
        Shopping:request.body.Shopping,
        Dining:request.body.Dining
     
    })
    expuser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })

})
module.exports = router

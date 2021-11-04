import { Taco } from '../models/taco.js'

function index(req, res){
  //find all the tacos by passing in the empty object
Taco.find({})
//then when we have all the tacos 
.then(tacos =>{
  res.render('tacos/index', {
    //do something with the tacos 
    title: "Taco",
    tacos,
  })
})
  .catch(err => {
    console.log(err)
    res.redirect('/tacos')
  })
}


export {
  index,
}
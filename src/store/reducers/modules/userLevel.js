const userLevel = (state=1) =>{
   let level= sessionStorage.getItem('userLevel')
   if(level){
       return level
   }
   return 1
}
export default {
    userLevel
}
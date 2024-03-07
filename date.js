
module.exports.getData = () =>
{
    let today =new Date()
    let option = { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
    } 
    return today.toLocaleDateString('en-us', option)
}
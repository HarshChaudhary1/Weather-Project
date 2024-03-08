let url="https://api.openweathermap.org/data/2.5/weather?q=&appid=b2ba36bba92af5d3e3ae97c0f1be0b8a"
let temperature=document.getElementById("temperature")
let submitt=document.getElementById("Search")
const weatherapi=async()=>{

    
    // Getting Date and Day
    
    let arr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let date = new Date()
    let day=document.getElementById("day")
    let time=document.getElementById("time")
    day.innerHTML=`${arr[date.getDay()]}`
    time.innerHTML=`${date.getDate()}`
    
    // Fetching Api
    
    let value=document.getElementById("text").value
    let api=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b2ba36bba92af5d3e3ae97c0f1be0b8a`)
    let object=await api.json()

    try{
    if(object.weather[0].main=="Clouds"){
        if((object.main.temp-32)*5/9>100){
            temperature.innerHTML=`${Math.floor(((object.main.temp-32)*(5/9))-100)}<sup>o</sup>C <i class="fa-solid fa-cloud fa-bounce"></i>`    
        }
        else{
        temperature.innerHTML=`${(object.main.temp-32)*(5/9)}<sup>o</sup>C <i class="fa-solid fa-cloud fa-bounce"></i>`
        }
    }


    else if(object.weather[0].main=="Clear"){
        temperature.innerHTML=`${(object.main.temp-32)*(5/9)}<sup>o</sup>C <i class="fa-solid fa-sun fa-bounce"></i>`
    }

    
    else if(object.weather[0].main=="Haze"){
        if((object.main.temp-32)*5/9>100){
            temperature.innerHTML=`${Math.floor(((object.main.temp-32)*(5/9))-100)}<sup>o</sup>C <i class="fa-solid fa-smog fa-bounce"></i>`    
        }
        else{
        temperature.innerHTML=`${(object.main.temp-32)*(5/9)}<sup>o</sup>C <i class="fa-solid fa-smog fa-bounce"></i>`
        }
    }


}
    catch(error){
        temperature.innerHTML=` <div id="temperature" style="font-size:3rem; margin-top:2rem;">
        Sorry,no weather     
        </div>`
    }

    //Displaying the name of city in weather report

    document.getElementById("city").innerHTML=`${value} ,IN`

}
submitt.addEventListener("click",(e)=>{
    e.preventDefault()
    weatherapi()
})
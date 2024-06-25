const app = Vue.createApp({
    data() {
        return {
            all_provinces: [
                {id: 1, name: 'San Jose'},
                {id: 2, name: 'Alajuela'},
                {id: 3, name: 'Cartago'},
                {id: 4, name: 'Heredia'},
                {id: 5, name: 'Guanacaste'},
                {id: 6, name: 'Puntarenas'},
                {id: 7, name: 'Limon'}
            ],
            provinces: [
                {id: 7, color: "warm", name: "Limon", icon:"./imgs/113.png", img: "./imgs/day/1000.png", weather: "Rainny", temperature: "26°c", rain: "98%", wind: "9 kmp", time: "13:12", fl: "FL: 28°", uv: "UV: High"}
            ]
        }
    },

    mounted:function(){
        
        this.provinces = [];

        for(let i = 0; i <= this.all_provinces.length; i++){
            axios({
                method: 'get',
                url: 'https://api.weatherapi.com/v1/current.json?key=69b41f608bfe4843b0323853231505&q='+ this.all_provinces[i].name +', Costa Rica&aqi=no'
            })
            .then(
                (response) => {
                    let data = response.data.current;
                    let location = response.data.location;
                    let color = "";
                    let uv = "";
                    let day_state = "";
                    let hour = "";

                    if(data.temp_c >= 10 && data.temp_c < 16){
                        color = "cold";
                    }else if(data.temp_c >= 16 && data.temp_c < 21){
                        color = "tempered";
                    }else if(data.temp_c >= 21 && data.temp_c < 27){
                        color = "warm"; 
                    }else if(data.temp_c >= 27 && data.temp_c < 32){
                        color = "hot"; 
                    }else if(data.temp_c >= 32 && data.temp_c < 38){
                        color = "boiling"; 
                    }else if(data.temp_c >= 38){
                        color = "infernal"; 
                    }

                    if(data.uv >= 1 && data.uv <= 2){
                        uv = "UV: Low";
                    }else if(data.uv >= 3 && data.uv <= 5){
                        uv = "UV: Moderate";
                    }else if(data.uv >= 6 && data.uv <= 7){
                        uv = "UV: High";
                    }else if(data.uv >= 8 && data.uv <= 10){
                        uv = "UV: Very High";
                    }else if(data.uv >= 11){
                        uv = "UV: Extreme";
                    }

                    if(data.is_day == 0){
                        day_state = "night";
                    }else if(data.is_day == 1){
                        day_state = "day";
                    }

                    for(let i = 10; i <= location.localtime.length-1; i++) {
                        hour += location.localtime[i];
                    }

                    this.provinces.push({
                        id: i+1, 
                        color: color,
                        name: location.name,
                        icon: data.condition.icon,
                        img: "./imgs/"+ day_state +"/"+ String(data.condition.code) +".png",
                        weather: data.condition.text,
                        temperature: String(data.temp_c) + "°c",
                        rain: String(data.humidity) + "%",
                        wind: String(data.wind_kph) + "kmp",
                        time: hour,
                        fl: "FL: "+ String(data.feelslike_c) +"c",
                        uv: uv
                    });

                    console.log(this.provinces[i]);
                }
            )
            .catch(
                error => console.log(error)
            );
        }
    }
})
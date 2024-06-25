app.component('province-card',{
    props: {
        color:{
            type:String
        },
        img:{
            type:String
        },
        icon:{
            type:String
        },
        name:{
            type:String
        },
        weather:{
            type:String
        },
        temperature:{
            type:String
        },
        rain:{
            type:String
        },
        wind:{
            type:String
        },
        time:{
            type:String
        },
        fl:{
            type:String
        },
        uv:{
            type:String
        }
    },

    template:
    /*html*/
    `<div class="card" :class="color">
        <img v-bind:src="img" class="card-deco"  alt="decoration">
        <div class="card-body">
            <div class="top-row">
                <div class="temperature-container">
                    <div class="state-container">
                        <img class="state-icon" v-bind:src="icon" alt="icon">
                        <p class="state">{{ weather }}</p>
                    </div>
                    <p class="temperature">{{ temperature }}</p>
                </div>

                <div class="data-container">
                    <p class="time">{{ time }}</p>
                    <p class="feels-like">{{ fl }}</p>
                    <p class="uv">{{ uv }}</p>
                </div>
            </div>

            <div class="bottom-row">
                <div class="stats-container">
                    <div class="stats-data">
                        <p class="rain-prob-icon fa-solid fa-umbrella"></p>
                        <p class="rain-prob" >{{ rain }}</p>
                    </div>
                    <div class="stats-data">
                        <p class="wind-icon fa-solid fa-wind"></p>
                        <p class="wind">{{ wind }}</p>
                    </div>
                </div>
                <p class="province">{{ name }}</p>
            </div>
        </div>
    </div>`
})
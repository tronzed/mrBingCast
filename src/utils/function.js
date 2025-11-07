export const weatherCodeBox = (value) => {

    let obj_box = { box: '0', img: '0', quote: '0' }

    if (value === 0) {
        obj_box.box = "Mainly clear";
        obj_box.img = "clear-day";
        obj_box.quote = 'Oh look, the sky is trying its best. Mainly clear? So like Joey mainly understanding sarcasm. Still… stay inside. The sun can’t annoy you if you ignore it.';
    } else if (value === 1) {
        obj_box.box = "Mainly clear";
        obj_box.img = "clear-day";
        obj_box.quote = 'Oh look, the sky is trying its best. Mainly clear? So like Joey mainly understanding sarcasm. Still… stay inside. The sun can’t annoy you if you ignore it.';
    } else if (value === 2) {
        obj_box.box = "Overcast";
        obj_box.img = "overcast";
        obj_box.quote = 'Ah yes, the sky’s version of ‘I’m fine.’ Totally fine. Grey, depressing, perfect weather to stay indoors and re-think all your life choices.';
    } else if (value === 3) {
        obj_box.box = "Partly cloudy";
        obj_box.img = "cloudy";
        obj_box.quote = "So the sky couldn’t decide? Classic commitment issues. It's like dating someone who says ‘Let’s see where this goes.’ Spoiler: It goes nowhere. Stay home.";
    } else if (value >= 45 && value <= 48) {
        obj_box.box = "Fog";
        obj_box.img = "fog";
        obj_box.quote = 'Great, now the world looks like it’s buffering. If you go out, you’ll either get lost or run into a lamppost. Stay inside, save your dignity.';
    } else if (value >= 51 && value <= 57) {
        obj_box.box = "Drizzle";
        obj_box.img = "drizzle";
        obj_box.quote = 'Oh good, the sky is crying softly. Probably because it saw your weekend plans. Not heavy rain, just enough to ruin your hair and your will to live. Stay in.';
    } else if (value >= 61 && value <= 67) {
        obj_box.box = "Rain";
        obj_box.img = "rain";
        obj_box.quote = 'Rain: where the sky throws emotional damage at you in liquid form. Go out if you want to smell like a wet umbrella.';
    } else if (value >= 71 && value <= 77) {
        obj_box.box = "Snow";
        obj_box.img = "snow";
        obj_box.quote = "Snow looks cute until you have to walk in it and suddenly you become Bambi on ice. Stay inside unless you’re a penguin or emotionally stable. (You're neither.)";
    } else if (value >= 80 && value <= 82) {
        obj_box.box = "Rain showers";
        obj_box.img = "rain";
        obj_box.quote = 'Showers? Yeah, just like your ex — arrives suddenly, ruins everything, and leaves you cold. Indoor activities highly recommended.';
    } else if (value >= 95 && value <= 99) {
        obj_box.box = "Thunderstorms";
        obj_box.img = "thunderstorms";
        obj_box.quote = 'Oh yeah, let’s mix rain with loud sky rage. If you wanted drama, congratulations. Otherwise, stay in unless you want to reenact a horror movie intro.';
    } else {
        obj_box.box = "Unknown weather code";
    }

    return obj_box;
}



export const getCast = async (city) => {

    const res2 = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const data2 = await res2.json();

    console.log('data2', data2);

    // const latitude = 12.9629;
    // const longitude = 77.5775;

    const latitude = 26.922070;
    const longitude = 75.778885;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
        `&current_weather=true` +
        `&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m` +
        `&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max` +
        `&forecast_days=7&timezone=auto`;

    const res = await fetch(url);
    const data = await res.json();

    return data;

}


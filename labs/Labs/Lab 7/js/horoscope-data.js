
var zodiac_sign = "Pisces";
var month = "March";
var birthday = 6;
var lucky_number = 7;


var horoscope_description = "You will have a great day filled with opportunities!";
var astrology_boolean = false;


var heading = document.querySelector("#sign");
heading.textContent = zodiac_sign;

var birthdayElement = document.getElementsByClassName("birthday")[0];
birthdayElement.textContent += month + " " + birthday;

var luckynumberElement = document.getElementsByClassName("luckyNum")[0];
luckynumberElement.textContent += lucky_number;

document.getElementsByTagName("p")[0].textContent = horoscope_description;
document.getElementsByTagName("p")[1].innerHTML += "<strong>"+astrology_boolean+"<strong>";
document.getElementById("mood").textContent = message;

var zodiac_signs = ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];


var my_sign = zodiac_signs[2];
var mubariz_sign = zodiac_signs[7];
var afria_sign = zodiac_signs[3];




var horoscope_descriptions = [
    "Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.",
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Trust your emotions. They will guide you in making the right choices."
];


var my_horoscope = horoscope_descriptions[4];
var mubariz_horoscope = horoscope_descriptions[2];
var afria_horoscope = horoscope_descriptions[3];


horoscope_descriptions[6] = "Custom message: Stars are perfectly aligned for success!";

document.getElementById("friends").innerHTML =
    "My zodiac sign is: " + my_sign + ". mubariz's zodiac sign is: " + mubariz_sign + ". Afria's zodiac sign is: " + afria_sign +
    "<br><br>" +
    my_sign + " Horoscope: " + my_horoscope + "<br>" +
    mubariz_sign + " Horoscope: " + mubariz_horoscope + "<br>" +
    afria_sign + " Horoscope: " + afria_horoscope;






var button = document.querySelector('button');
var picture = document.getElementById('pic1');
console.log("B");
const fred = ["https://cdn.britannica.com/86/192386-050-D7F3126D/Muhammad-Ali-American.jpg?w=400&h=300&c=crop",
             "https://upload.wikimedia.org/wikipedia/commons/9/97/John_Cena_2024.jpg",
             "https://media.printables.com/media/prints/903364/images/6906916_46ed27fe-2e40-45dc-91fb-3b791e528828_d0e09326-20bd-4a5b-a7ee-474b0b20cea9/thumbs/inside/1280x960/jpg/dwayne-johnson-eyebrow-raise-meme-10.webp",
             "https://hips.hearstapps.com/hmg-prod/images/patrick-mahomes-of-the-kansas-city-chiefs-looks-on-from-the-news-photo-1706735048.jpg?crop=0.657xw:0.985xh;0.148xw,0&resize=640:*"
];

// function fred( num, kjlkj){
//     this.number = num;
// }

let picIndex = 1;

function ChangePicture(){
    console.log("A");
    picIndex = picIndex + 1;
    if (picIndex>fred.length-1){
        picIndex =0;

    }
    picture.src = fred[picIndex];


}

document.getElementById('change').addEventListener('click',function(){
    ChangePicture();
})
let galleryImages = [
    'img/kitty1.jpg',
    'img/kitty2.jpg',
    'img/kitty3.jpg',
    'img/kitty4.jpg'
]


$(document).ready(loadData(prompt("Какие картики загрузить?", "Котики")));

function makeGallery(gallery) {
    let listElem = $('.imgList');
    let slide = $('.gallery .slide');

    slide.append(`<img src='${gallery[0]}'>`);
    let height = $('.gallery .current').height();


    listElem.find('li').each(function(index) {
        $(this).css('background-image', `url(${gallery[index]})`)
    })

    listElem.find('li').on('click', function() {
        let curLi = $(this);
        slide.stop(true).animate({ 'height': '0' }, 300);
        slide.animate({ 'width': '0' }, 300, function() {
            slide.html('');
            slide.append(`<img src='${gallery[curLi.index()]}'>`);
        });
        slide.animate({ 'width': '100%' }, 300);
        slide.animate({ 'height': '500px' }, 300);
    })
}

//https://www.instagram.com/graphql/query/?query_hash=174a5243287c5f3a7de741089750ab3b&variables={"tag_name":"коты","first":4}

function loadData(target) {
    let xhtml = new XMLHttpRequest();
    xhtml.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            makeGallery(makeList(JSON.parse(this.responseText)));
        }
    }
    xhtml.open("GET", `https://www.instagram.com/graphql/query/?query_hash=174a5243287c5f3a7de741089750ab3b&variables={"tag_name":"${target.toLowerCase()}","first":4}`, true);
    xhtml.send();
}
//tmp["data"]["hashtag"]["edge_hashtag_to_media"]["edges"]

function makeList(data) {
    let arrOfImg = [];
    let nodesArr = data["data"]["hashtag"]["edge_hashtag_to_media"]["edges"];
    for (let i = 0; i < nodesArr.length; i++) {
        arrOfImg.push(nodesArr[i]["node"]["display_url"]);
    }
    return arrOfImg;
}
// https://www.instagram.com/graphql/query/?query_hash=f12c9ec5e46a3173b2969c712ad84744&variables={%22tag_name%22:%22%D0%BA%D0%BE%D1%82%D1%8B%22,%22first%22:1000}

var tmpData;

function loadData(target) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            AJAXHandler(this.responseText);
        }
    }
    xhttp.open("GET", `https://www.instagram.com/graphql/query/?query_hash=f12c9ec5e46a3173b2969c712ad84744&variables={"tag_name":"${target.toLowerCase()}","first":1000}`, true);
    xhttp.send();
}

function AJAXHandler(jsonData) {
    var contentElem = document.querySelector('.content');
    contentElem.innerHTML = '';
    var ulElem = document.createElement('ul');
    contentElem.appendChild(ulElem);

    var data = JSON.parse(jsonData);
    console.log(data);
    var dataArr = data["data"]["hashtag"]["edge_hashtag_to_media"]["edges"];
    for (let i = 0; i < dataArr.length; i++) {
        let liElem = document.createElement('li');
        let display_urlElem = document.createElement('div');
        let accessibility_captionElem = document.createElement('p');

        display_urlElem.className = 'image';
        display_urlElem.style.background = `url("${dataArr[i]["node"]["display_url"]}") no-repeat`;
        display_urlElem.style.backgroundSize = 'cover';
        display_urlElem.style.backgroundPosition = 'center';
        accessibility_captionElem.innerHTML = dataArr[i]["node"]["accessibility_caption"];

        liElem.appendChild(display_urlElem);
        liElem.appendChild(accessibility_captionElem);
        ulElem.appendChild(liElem);


        /*         console.log(dataArr[i]["node"]["display_url"]);
                console.log(dataArr[i]["node"]["accessibility_caption"]);
                dataArr[i]["node"]["edge_liked_by"]["count"];
                console.log('________________________________');
                console.log('________________________________');
                console.log('________________________________');
         */
    }
    // [0]["node"];
}

function buttonHandler() {
    var inputData = document.querySelector('.searchBlock input').value;
    loadData(inputData);
}

document.querySelector('.searchBlock .button').addEventListener('click', function() { buttonHandler(); });
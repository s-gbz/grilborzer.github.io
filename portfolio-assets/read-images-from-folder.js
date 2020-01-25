let vue_data = {
    fullSizeImagePaths: [],
    index: null
};
const fullSizeFolderPath = "images/fulls/";

new Vue({
    delimiters: ["((", "))"],
    el: '#gallery',
    data: vue_data,

    components: {
        'gallery': VueGallery
    }
});

/**
$.ajax({
    type: "OPTIONS",
    url: "https://gist.githubusercontent.com/s-gbz/f9e7185dee614ddbd9d665d9e35426bf/raw/e83df34aee27efd23d4957237430b78b2141a713/image-paths-test",
    crossDomain: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST'
    },
    success: function (data) {
        $(data).match(/\.(jpe?g)$/, function (i, thumbnailPath) {
            vue_data.fullSizeImagePaths.push(thumbnailPath.replace("thumbnails", "fulls"));
            console.log(thumbnailPath);
        });
    }
});
*/

let xhr = new XMLHttpRequest();
xhr.open('GET', "https://github.com/s-gbz/grilborzer.github.io/tree/master/portfolio-assets/images/thumbnails", true);
xhr.send();

xhr.onreadystatechange = readImageFileNames;

function readImageFileNames() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let allAnchorTags = $(xhr.responseText).find("a");

        let allImageFileNames = allAnchorTags.map(function(i,el) {
            const anchorElement = $(el).attr('href');
            // RegEx = [AnyNumber].jpg / .jpeg
            const regExForImage = new RegExp("[-0-9]+\.jpe?g$");
            const imagePathSubstring = anchorElement.match(regExForImage);

             if(imagePathSubstring != null) {
                return imagePathSubstring;
             }
            }).get();
        console.log(allImageFileNames);
    }
}
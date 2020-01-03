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

$.ajax({
    url: "",

    success: function (data) {
        $(data).find("img").attr("src", function (i, thumbnailPath) {
            if (thumbnailPath.match(/\.(jpe?g)$/)) {
                vue_data.fullSizeImagePaths.push(thumbnailPath.replace("thumbnails", "fulls"));
            }
        });
    }
});


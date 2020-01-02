let vue_data = {
    fullSizeImagePaths: [],
    thumbnailImagePaths: [],
    index: null
};
const fullSizeFolderPath = "images/fulls/";
const thumbnailFolderPath = "images/thumbnails/";

new Vue({
    delimiters: ["((", "))"],
    el: '#gallery',
    data: vue_data,

    components: {
      'gallery': VueGallery
    }
});

$.ajax({
    url: fullSizeFolderPath,

    success: function (data) {
        $(data).find("a").attr("href", function (i, read_img_path) {
            if (read_img_path.match(/\.(jpe?g)$/)) {
                const fullFullSizeImagePath = fullSizeFolderPath + read_img_path;
                const fullThumbnailImagePath = thumbnailFolderPath + read_img_path;
                vue_data.fullSizeImagePaths.push(fullFullSizeImagePath);
                vue_data.thumbnailImagePaths.push(fullThumbnailImagePath);
            }
        });
    }
});


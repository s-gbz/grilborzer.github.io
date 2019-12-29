let vue_data = {
    fullImagePaths: [],
    index: null
};
const folder_path = "images/thumbs/";

new Vue({
    delimiters: ["((", "))"],
    el: '#gallery',
    data: vue_data,

    components: {
      'gallery': VueGallery
    }
});

$.ajax({
    url: folder_path,

    success: function (data) {
        $(data).find("a").attr("href", function (i, read_img_path) {
            if (read_img_path.match(/\.(jpe?g)$/)) {
                const full_image_path = folder_path + read_img_path;
                vue_data.fullImagePaths.push(full_image_path);
            }
        });
    }
});


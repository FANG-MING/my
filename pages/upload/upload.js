var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../cropper/cropper.js")), o = wx.getSystemInfoSync(), t = o.windowWidth, r = o.windowHeight - 50;

Page({
    data: {
        cropperOpt: {
            id: "cropper",
            width: t,
            height: r,
            scale: 2.5,
            zoom: 8,
            cut: {
                x: (t - 300) / 2,
                y: (r - 300) / 2,
                width: 300,
                height: 300
            }
        }
    },
    touchStart: function(e) {
        this.wecropper.touchStart(e);
    },
    touchMove: function(e) {
        this.wecropper.touchMove(e);
    },
    touchEnd: function(e) {
        this.wecropper.touchEnd(e);
    },
    getCropperImage: function() {
        this.wecropper.getCropperImage(function(e) {
            e ? wx.redirectTo({
                url: "../madeph/madeph?avatar=" + e
            }) : console.log("获取图片失败，请稍后重试");
        });
    },
    uploadTap: function() {
        var e = this;
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(o) {
                var t = o.tempFilePaths[0];
                e.wecropper.pushOrign(t);
            }
        });
    },
    onLoad: function(o) {
        var t = this.data.cropperOpt, r = o.src;
        r && (Object.assign(t, {
            src: r
        }), new e.default(t).on("ready", function(e) {}).on("beforeImageLoad", function(e) {
            console.log("before picture loaded, i can do something"), console.log("current canvas context:", e), 
            wx.showToast({
                title: "上传中",
                icon: "loading",
                duration: 2e4
            });
        }).on("imageLoad", function(e) {
            wx.hideToast();
        }));
    }
});
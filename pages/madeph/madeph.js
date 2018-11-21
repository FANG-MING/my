var a = getApp();

Page({
    data: {
        src: "",
        bgsrc: "",
        bgcss: ""
    },
    upload: function() {
        wx.chooseImage({
            count: 1,
            sizeType: [ "original", "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var t = a.tempFilePaths[0];
                wx.navigateTo({
                    url: "../upload/upload?src=" + t
                });
            }
        });
    },
    generate: function() {
        var a = this, t = wx.createCanvasContext("ahaucanvas");
        t.drawImage(a.data.src, 127, 120),
        t.restore(),
        t.save(),
        t.beginPath(),
        t.drawImage(a.data.bgsrc, 0, 0, 840, 840), 
        t.restore(), 
        t.draw(true, setTimeout(function() {
            wx.canvasToTempFilePath({
                width: 840,
                height: 840,
                destWidth: 840,
                destHeight: 840,
                canvasId: "ahaucanvas",
                success: function(a) {
                    wx.saveImageToPhotosAlbum({
                        filePath: a.tempFilePath,
                        success: function(a) {
                            wx.showToast({
                                title: "保存成功",
                                icon: "success",
                                duration: 2e3
                            });
                        },
                        fail: function(a) {
                            "saveImageToPhotosAlbum:fail auth deny" === a.errMsg && wx.openSetting({
                                success: function(a) {
                                    console.log(a), a.authSetting["scope.writePhotosAlbum"] ? wx.showToast({
                                        title: "请再次保存",
                                        icon: "success",
                                        duration: 2e3
                                    }) : wx.showToast({
                                        title: "获取权限失败，可能导致保存图片无法正常使用",
                                        icon: "none",
                                        duration: 2e3
                                    });
                                }
                            });
                        }
                    });
                }
            }, this);
        }, 100));
    },
    onLoad: function(t) {
        var s = this, e = a.globalData.toubgsrc.substr(14, 2);
        s.setData({
            bgsrc: a.globalData.toubgsrc,
            bgcss: e
        });
        var o = t.avatar;
        o && s.setData({
            src: o
        });
    }
});
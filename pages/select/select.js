var a = getApp(), e = [ {
    name: "类 型 1",
    coverImgUrl: "../../images/ah1.png"
},
 {
    name: "类 型 2",

    coverImgUrl: "../../images/ah2.png"
},
//  {
//     name: "类 型 3",
//     coverImgUrl: "../../images/ah3.png"
// }, {
//     name: "类 型 4",
//     coverImgUrl: "../../images/ah4.png"
// }, {
//     name: "类 型 5",
//     coverImgUrl: "../../images/ah5.png"
// }, {
//     name: "类 型 6",
//     coverImgUrl: "../../images/ah6.png"
// } 
];

Page({
    data: {
        touList: e
    },
    onLoad: function(a) {},
    detail: function(r) {
        switch (r.currentTarget.dataset.tounum) {
          case 0:
            a.globalData.toubgsrc = e[0].coverImgUrl, wx.navigateTo({
                url: "../madeph/madeph"
            });
            break;

          case 1:
            a.globalData.toubgsrc = e[1].coverImgUrl, wx.navigateTo({
                url: "../madeph/madeph"
            });
            break;

          // case 2:
          //   a.globalData.toubgsrc = e[2].coverImgUrl, wx.navigateTo({
          //       url: "../madeph/madeph"
          //   });
          //   break;

          // case 3:
          //   a.globalData.toubgsrc = e[3].coverImgUrl, wx.navigateTo({
          //       url: "../madeph/madeph"
          //   });
          //   break;

          // case 4:
          //   a.globalData.toubgsrc = e[4].coverImgUrl, wx.navigateTo({
          //       url: "../madeph/madeph"
          //   });
          //   break;

          // case 5:
          //   a.globalData.toubgsrc = e[5].coverImgUrl, wx.navigateTo({
          //       url: "../madeph/madeph"
          //   });
        }
    }
});
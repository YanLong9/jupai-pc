<template>
  <div id="index">
    <tab-nav class="tabNav"> </tab-nav>
    <div
      class="col-swipe-container"
      @mousewheel="handleScroll($event)"
      @DOMMouseScroll="handleScroll($event)"
    >
      <div class="col-swipe-wrapper" ref="colSwipeWrapper">
        <div class="floorBox floorBox1" :class="{ active: top == 0 }">
          <div class="bg">
            <img :src="bg1" alt="" id="bg1" @load="replaceImg('bg1')" />
          </div>
          <div class="floorInner">
            <p class="title">为创作者服务</p>
            <p class="brife">致力于构建影视产业链服务生态</p>
          </div>
        </div>
        <div class="floorBox floorBox2">
          <div class="jupaiBox">
            <div class="top">
              <p class="title">
                <img src="../assets/img/index/jupaiLogo.png" alt="" />
                <span>智能合约签约平台</span>
              </p>
              <p class="brife">利用“区块链”技术，保障每一次的合作</p>
            </div>
            <div class="middle">
              <div class="row-swiperBox">
                <el-carousel>
                  <el-carousel-item>
                    <img src="../assets/img/index/swiper1.png" alt="" />
                  </el-carousel-item>
                  <el-carousel-item>
                    <img
                      src="../assets/img/index/swiper2.png"
                      alt=""
                    /> </el-carousel-item
                  ><el-carousel-item>
                    <img src="../assets/img/index/swiper3.png" alt="" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <p class="bottom">
              人脸识别、区块链、司法链等技术服务，由“蚂蚁金服”提供
            </p>
          </div>
        </div>
        <div class="floorBox floorBox3" :class="{ active: top == 2 }">
          <div class="bg">
            <img :src="bg3" alt="" id="bg3" @load="replaceImg('bg3')" />
          </div>
          <div class="jujuBox">
            <div class="top">
              <p class="title">JUJU聚剧——<span>要看剧，来聚剧</span></p>
              <p class="brife">聚拍旗下影视内容分享点评社区</p>
            </div>
            <div class="bottom clearfix">
              <div class="left">
                <img src="../assets/img/index/jujuIphone.png" alt="" />
              </div>
              <div class="right">
                <p class="android" @click="downloadApp">安卓版下载</p>
                <p class="ios" @click="downloadApp">IOS版下载</p>
                <p class="jujuCreator">
                  <a href="http://creator.jupaiaction.com/">聚剧创作者中心</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="floorBox floorBox4">
          <div class="partnersBox">
            <header>合作伙伴</header>
            <dl class="clearfix">
              <dt>制片</dt>
              <dd>
                <img src="../assets/img/index/partnerLogo/1.png" alt="" />
              </dd>
              <dd>
                <img src="../assets/img/index/partnerLogo/2.png" alt="" />
              </dd>
              <dd>
                <img src="../assets/img/index/partnerLogo/3.png" alt="" />
              </dd>
              <dd>
                <img src="../assets/img/index/partnerLogo/4.png" alt="" />
              </dd>
            </dl>
            <dl class="clearfix">
              <dt>宣发</dt>
              <dd>
                <img src="../assets/img/index/partnerLogo/5.png" alt="" />
              </dd>
              <dd>
                <img src="../assets/img/index/partnerLogo/6.png" alt="" />
              </dd>
              <dd>
                <img src="../assets/img/index/partnerLogo/7.png" alt="" />
              </dd>
              <dd>
                <img src="../assets/img/index/partnerLogo/8.png" alt="" />
              </dd>
              <dd>
                <img src="../assets/img/index/partnerLogo/9.png" alt="" />
              </dd>
            </dl>
            <dl class="clearfix">
              <dt>技术</dt>
              <dd>
                <img src="../assets/img/index/partnerLogo/10.png" alt="" />
              </dd>
              <dd>
                <img src="../assets/img/index/partnerLogo/11.png" alt="" />
              </dd>
            </dl>
          </div>
          <div class="footerNav">
            <div class="relatedAgreement">
              <div class="clearfix">
                <router-link to="/serviceAgreement" tag="p"
                  >服务条约</router-link
                >
                <router-link to="/privacPolicy" tag="p">隐私协议</router-link>
                <router-link to="/userServiceAgreement" tag="p"
                  >用户服务协议</router-link
                >
              </div>
            </div>
            <div class="aboutBox">
              <div>
                <p class="title">全国咨询热线：</p>
                <p class="brife">400-801-4680</p>
              </div>
              <div>
                <p class="title">在线时间：</p>
                <p class="brife">周一至周五 北京时间 9:00-18:00</p>
              </div>
              <div>
                <p class="title">邮箱：</p>
                <p class="brife">jupai@jumifinance.com</p>
              </div>
              <div>
                <p class="title">地址：</p>
                <p class="brife">杭州市西湖区下满觉陇路49号</p>
              </div>
            </div>
            <p class="tip">
              Copyright © 2008 - 2020 杭州聚拍科技有限公司 Hangzhou Juaction
              Technology Service Co.，Ltd. | 版权所有
            </p>
            <p class="tip tip2">
              <a href="https://beian.miit.gov.cn/#/Integrated/index"
                >ICP备案号：浙ICP备20000728号</a
              >
              <span>|</span>
              <a
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11040102700068"
                ><img
                  src="../assets/img/index/gongan.png"
                  alt=""
                />网安备案：33019902000273</a
              >
              <span>|</span>
              <a
                :href="require('../assets/img/index/zhengshu.jpg')"
                target="_blank"
                >浙网文（2020）3389-151号</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tabNav from "../components/tabNav";
export default {
  name: "index",
  components: { tabNav },
  data() {
    return {
      top: 0,
      timer: null,
      bg1: require("../assets/img/index/bg1.min.png"),
      bg3: "",
    };
  },
  watch: {
    top: function (newValue, oldValue) {
      if (newValue == 2 && this.bg3 == "") {
        this.bg3 = require("../assets/img/index/bg3.min.png");
      }
    },
  },
  methods: {
    scroll(e) {
      let direction = e.wheelDelta || -e.detail;
      if (direction > 0) {
        if (this.top !== 0) {
          this.top = this.top - 1;
          this.$refs.colSwipeWrapper.style.top = "-" + this.toPercent(this.top);
        }
      } else if (direction < 0) {
        if (this.top !== 3) {
          this.top = this.top + 1;
          this.$refs.colSwipeWrapper.style.top = "-" + this.toPercent(this.top);
        }
      }
    },
    handleScroll(e) {
      if (this.timer) clearTimeout(this.timer);
      let callNow = !this.timer;
      this.timer = setTimeout(() => {
        this.timer = null;
      }, 300);
      if (callNow) this.scroll(e);
    },
    toPercent(point) {
      var str = Number(point * 100).toFixed(0);
      str += "%";
      return str;
    },
    replaceImg(Id) {
      var bg = document.getElementById(Id);
      if (Id == "bg1" && this.bg3 == "") {
        this.bg3 = require("../assets/img/index/bg3.min.png");
      }
      if (bg.src.search("min") !== -1) {
        bg.src = require(`../assets/img/index/${Id}.png`);
      }
    },
    downloadApp() {
      this.$alert("应用正在内测，暂未上架，敬请期待", "温馨提示", {
        confirmButtonText: "确定",
        center:true
      });
    },
  },
};
</script>
<style scoped lang="scss">
#index {
  width: 100%;
  height: 100%;
  min-width: 1150px;
  position: relative;
  .tabNav {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .col-swipe-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .col-swipe-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.5s;
      .floorBox {
        width: 100%;
        height: 100%;
        background-color: transparent;
        overflow: hidden;
        position: relative;
        .bg {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 120%;
          height: 120%;
          z-index: -2;
          img {
            width: 100%;
            height: 100%;
          }
          // background-repeat: no-repeat;
          // background-size: cover;
          // background-position: 50% 50%;
          // transform: scale(1.2, 1.2);
          transition: all 2s linear;
          // background: transparent 50% 50%/120% 120% no-repeat;
          // transition: all 2s linear;
        }
        &.floorBox1 {
          .floorInner {
            width: 100%;
            height: 100%;
            padding: 260px 0 0 150px;
            box-sizing: border-box;
            font-family: HYQiHei-AZEJF, HYQiHei;
            color: #ffffff;
            letter-spacing: 15px;
            cursor: pointer;
            .title {
              font-size: 120px;
              font-weight: bolder;
              line-height: 150px;
              transform: translateY(50px);
              opacity: 0;
              transition: all 0;
            }
            .brife {
              font-size: 48px;
              line-height: 60px;
              transform: translateY(50px);
              opacity: 0;
              transition: all 0;
            }
          }
          // .bg {
          //   background-image: url("../assets/img/index/bg1.png");
          // }
        }
        &.floorBox2 {
          background: white;
          .jupaiBox {
            width: 100%;
            height: 100%;
            .top {
              height: 160px;
              padding: 60px 0 0;
              text-align: center;
              .title {
                height: 90px;
                line-height: 90px;
                font-size: 0;
                img {
                  display: inline-block;
                  width: 200px;
                  height: 48px;
                  padding-right: 20px;
                  border-right: 1px solid #a1a1b9;
                  vertical-align: middle;
                }
                span {
                  display: inline-block;
                  margin-left: 20px;
                  vertical-align: middle;
                  font-size: 48px;
                  font-family: HYQiHei-GEW, HYQiHei;
                  color: #1e1e29;
                }
              }
              .brife {
                line-height: 50px;
                font-family: HYQiHei-FZS, HYQiHei;
                font-size: 18px;
                color: #aaaaaa;
                letter-spacing: 10px;
              }
            }
            .middle {
              width: 1320px;
              height: 500px;
              margin: 0 auto;
              /deep/.row-swiperBox {
                width: 100%;
                height: 100%;
                .el-carousel {
                  width: 100%;
                  height: 100%;
                  .el-carousel__container {
                    width: 100%;
                    height: calc(100% - 40px);
                    .el-carousel__item {
                      width: 100%;
                      height: 100%;
                      img {
                        width: 100%;
                        height: 100%;
                      }
                    }
                  }
                  .el-carousel__indicators {
                    width: 650px;
                    text-align: center;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    z-index: 100;
                    .el-carousel__indicator {
                      button {
                        width: 200px;
                        height: 8px;
                        background: #a1a1b9;
                        border-radius: 5px;
                        opacity: 0.4;
                      }
                      &.is-active {
                        button {
                          background: #fc5e40;
                        }
                      }
                    }
                  }
                }
              }
            }
            .bottom {
              text-align: center;
              line-height: 30px;
              margin-top: 0px;
              font-size: 14px;
              font-family: HYQiHei-FZS, HYQiHei;
              font-weight: normal;
              color: #aaaaaa;
            }
          }
        }
        &.floorBox3 {
          .jujuBox {
            width: 750px;
            height: 100%;
            padding: 60px 0 0;
            box-sizing: border-box;
            margin: 0 auto;
            .top {
              height: 160px;
              text-align: center;
              font-family: HYQiHei-GEW, HYQiHei;
              font-weight: normal;
              color: #ffffff;
              .title {
                font-size: 48px;
                line-height: 90px;
                span {
                  letter-spacing: 9px;
                }
              }
              .brife {
                line-height: 50px;
                font-size: 18px;
                color: rgba(255, 255, 255, 0.5);
                letter-spacing: 10px;
              }
            }
            .bottom {
              .left {
                float: left;
                width: 350px;
                height: 600px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .right {
                float: left;
                padding: 150px 0 0 140px;
                p {
                  width: 240px;
                  height: 50px;
                  text-align: center;
                  line-height: 50px;
                  margin-bottom: 30px;
                  background: #1e1e29;
                  border-radius: 25px;
                  font-size: 18px;
                  font-family: HYQiHei-GZS, HYQiHei;
                  color: #ffffff;
                  letter-spacing: 1px;
                  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
                  cursor: pointer;
                  &.ios {
                    margin-bottom: 60px;
                  }
                  &.jujuCreator {
                    background: linear-gradient(
                      90deg,
                      #fe543a 0%,
                      #f88857 100%
                    );
                    a {
                      color: #ffffff;
                    }
                  }
                }
              }
            }
          }
          // .bg {
          //   background-image: url("../assets/img/index/bg3.png");
          // }
        }
        &.floorBox4 {
          background: #1e1e28;
          position: relative;
          .partnersBox {
            width: 1150px;
            height: 580px;
            padding: 60px 0 0;
            margin: 0 auto;
            header {
              height: 160px;
              text-align: center;
              line-height: 120px;
              font-size: 48px;
              font-family: HYQiHei-GEW, HYQiHei;
              font-weight: normal;
              color: #ffffff;
            }
            dl {
              height: 70px;
              margin-bottom: 30px;
              dt {
                float: left;
                width: 80px;
                height: 70px;
                text-align: center;
                line-height: 70px;
                background: #606071;
                font-size: 24px;
                font-family: HYQiHei-FZS, HYQiHei;
                font-weight: normal;
                color: #a1a1b9;
              }
              dd {
                float: left;
                width: 190px;
                height: 70px;
                margin-left: 20px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
          .footerNav {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 250px;
            .relatedAgreement {
              height: 60px;
              margin: 0 auto;
              border-top: 1px solid rgba(96, 96, 114, 0.5);
              border-bottom: 1px solid rgba(96, 96, 114, 0.5);
              div {
                width: 540px;
                margin: 0 auto;
                p {
                  float: left;
                  width: 180px;
                  height: 60px;
                  text-align: center;
                  line-height: 60px;
                  font-size: 16px;
                  font-family: HYQiHei-GZS, HYQiHei;
                  font-weight: normal;
                  color: #ffffff;
                }
              }
            }
            .aboutBox {
              height: 50px;
              margin-top: 30px;
              text-align: center;
              div {
                display: inline-block;
                height: 50px;
                text-align: left;
                padding: 0 40px;
                border-right: 1px solid #606072;
                color: #a1a1b9;
                font-family: HYQiHei-GZS, HYQiHei;
                font-weight: normal;
                &:last-child {
                  border: none;
                }
                .title {
                  font-size: 14px;
                  line-height: 20px;
                }
                .brife {
                  font-size: 18px;
                  line-height: 30px;
                }
              }
            }
            .tip {
              margin-top: 30px;
              line-height: 18px;
              text-align: center;
              font-size: 12px;
              font-family: HYQiHei-FZS, HYQiHei;
              font-weight: normal;
              color: #606072;
              a {
                color: #606072;
                vertical-align: middle;
              }
              span {
                margin: 0 10px;
              }
              img {
                width: 18px;
                height: 18px;
                margin-right: 10px;
                vertical-align: middle;
              }
              &.tip2 {
                margin: 10px 0 30px;
                cursor: pointer;
              }
            }
          }
        }
        &.active {
          .floorInner {
            .title {
              opacity: 1;
              transform: translateY(0);
              transition: all 1.5s 1s;
            }
            .brife {
              opacity: 1;
              transform: translateY(0);
              transition: all 1.5s 1.5s;
            }
          }
          .bg {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            // transform: scale(1, 1);
            transition: all 10s linear;
          }
          // &.bg {
          //   background-size: 100% 100%;
          //   transition: all 10s linear;
          // }
        }
      }
    }
  }
}
@media (max-height: 568px) {
  #index {
    .col-swipe-container {
      .col-swipe-wrapper {
        .floorBox {
          &.floorBox2 {
            .jupaiBox {
              .top {
                height: 90px;
                .title {
                  height: 60px;
                  line-height: 60px;
                }
                .brife {
                  line-height: 30px;
                }
              }
              .middle {
                width: 990px;
                height: 375px;
              }
              .bottom {
                margin-top: 0px;
              }
            }
          }
          &.floorBox3 {
            .jujuBox {
              .top {
                height: 100px;
                .title {
                  line-height: 70px;
                }
                .brife {
                  line-height: 30px;
                }
              }
              .bottom {
                .left {
                  width: 300px;
                  height: 400px;
                }
                .right {
                  padding: 100px 0 0 120px;
                }
              }
            }
          }
          &.floorBox4 {
            .partnersBox {
              header {
                height: 80px;
                line-height: 80px;
              }
              dl {
                margin-bottom: 10px;
              }
            }
            .footerNav {
              height: 150px;
              opacity: 0;
              transition: all 0.5s;
              .relatedAgreement {
                height: 30px;
                display: inline;
                div {
                  p {
                    height: 30px;
                    line-height: 30px;
                  }
                }
              }
              .aboutBox {
                margin-top: 20px;
              }
              .tip {
                margin-top: 20px;
              }
            }
          }
        }
      }
    }
  }
}
@media (min-height: 568px) {
  #index {
    .col-swipe-container {
      .col-swipe-wrapper {
        .floorBox {
          &.floorBox2 {
            .jupaiBox {
              .top {
                height: 90px;
                .title {
                  height: 60px;
                  line-height: 60px;
                }
                .brife {
                  line-height: 30px;
                }
              }
              .middle {
                width: 990px;
                height: 375px;
              }
              .bottom {
                margin-top: 0px;
              }
            }
          }
          &.floorBox3 {
            .jujuBox {
              .top {
                height: 100px;
                .title {
                  line-height: 70px;
                }
                .brife {
                  line-height: 30px;
                }
              }
              .bottom {
                .left {
                  width: 300px;
                  height: 400px;
                }
                .right {
                  padding: 100px 0 0 120px;
                }
              }
            }
          }
          &.floorBox4 {
            .partnersBox {
              header {
                height: 80px;
                line-height: 80px;
              }
              dl {
                margin-bottom: 10px;
              }
            }
            .footerNav {
              height: 150px;
              opacity: 1;
              transition: all 0.5s;
              .relatedAgreement {
                height: 25px;
                div {
                  p {
                    height: 25px;

                    line-height: 25px;
                  }
                }
              }
              .aboutBox {
                margin-top: 10px;
              }
              .tip {
                margin-top: 10px;
                &.tip2 {
                  margin: 5px 0 10px;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (min-height: 668px) {
  #index {
    .col-swipe-container {
      .col-swipe-wrapper {
        .floorBox {
          &.floorBox2 {
            .jupaiBox {
              .top {
                height: 160px;
                .title {
                  height: 90px;
                  line-height: 90px;
                }
                .brife {
                  line-height: 50px;
                }
              }
              .bottom {
                margin-top: 20px;
              }
            }
          }
          &.floorBox3 {
            .jujuBox {
              .top {
                height: 160px;
                .title {
                  line-height: 90px;
                }
                .brife {
                  line-height: 50px;
                }
              }
            }
          }
          &.floorBox4 {
            .partnersBox {
              header {
                height: 120px;
                line-height: 120px;
              }
              dl {
                margin-bottom: 30px;
              }
            }
            .footerNav {
              height: 190px;
              .relatedAgreement {
                height: 30px;
                div {
                  p {
                    height: 30px;
                    line-height: 30px;
                  }
                }
              }
              .aboutBox {
                margin-top: 20px;
              }
              .tip {
                margin-top: 20px;
                &.tip2 {
                  margin: 10px 0 20px;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (min-height: 768px) {
  #index {
    .col-swipe-container {
      .col-swipe-wrapper {
        .floorBox {
          &.floorBox2 {
            .jupaiBox {
              .middle {
                width: 1320px;
                height: 500px;
              }
              .bottom {
                margin-top: 0px;
              }
            }
          }
          &.floorBox3 {
            .jujuBox {
              .bottom {
                .left {
                  width: 350px;
                  height: 500px;
                }
                .right {
                  padding: 150px 0 0 140px;
                }
              }
            }
          }
          &.floorBox4 {
            .partnersBox {
              header {
                height: 160px;
                line-height: 120px;
              }
            }
            .footerNav {
              height: 250px;
              .relatedAgreement {
                height: 60px;
                div {
                  p {
                    height: 60px;
                    line-height: 60px;
                  }
                }
              }
              .aboutBox {
                margin-top: 30px;
              }
              .tip {
                margin-top: 30px;
                &.tip2 {
                  margin: 10px 0 30px;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (min-height: 868px) {
  #index {
    .col-swipe-container {
      .col-swipe-wrapper {
        .floorBox {
          &.floorBox3 {
            .jujuBox {
              .bottom {
                .left {
                  width: 350px;
                  height: 600px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
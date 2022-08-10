<template>
  <div>
    <div class="main-frame-container">
      <div :class="headerClass" v-show="headerShow">
        <div class="main-frame-header-container">
          <div class="main-frame-header-start">
            <div class="main-frame-header-item">
              <yn-button @click="showNavi" icon="menu-fold"></yn-button>
            </div>
          </div>
          <div class="main-frame-header-center">
            <div class="main-frame-header-item">
              <span class="main-frame-title">{{ pageTitle }}</span>
            </div>
          </div>
          <div class="main-frame-header-end">
            <div class="main-frame-header-item">
              <!-- <yn-button icon="reload" @click="changeTheme"></yn-button> -->
              <!-- <yn-switch
                class="yn-theme-switch"
                @change="handleThemeChange"
                checkedChildren="浅"
                unCheckedChildren="深"
              />-->
            </div>
          </div>
        </div>
      </div>
      <div
        class="main-frame-content"
        :style="{ paddingTop: headerShow ? '64px' : '0px' }"
      >
        <div id="mainContainer" class="main-frame-content-viewport">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <yn-drawer
      :title="sidebar.sliderTitle"
      :placement="sidebar.placement"
      :closable="false"
      @close="onClose"
      :visible="sidebar.visible"
      :wrapClassName="wrapperClass"
    >
      <div class="main-frame-sidebar-wrapper">
        <div class="main-frame-sidebar-content">
          <div class="main-frame-sidebar-header">
            <!-- <UserInfo :info="userInfo" /> -->
          </div>
          <div class="main-frame-sidebar-body">
            <div class="main-frame-sidebar-content-navi">
              <NaviBar />
            </div>
          </div>
        </div>
        <div class="main-frame-sidebar-content-footer">
          <span>
            <yn-icon type="block" />{{ mainTitle }}
            <yn-icon type="copyright" />{{ year }}
          </span>
        </div>
      </div>
    </yn-drawer>
  </div>
</template>

<script>
import NaviBar from "./NaviBar.vue";
// import UserInfo from "./UserInfo.vue";
import { mapGetters, mapActions } from "vuex";
// import { FROM_TEMPLATE } from "../../config/platform/SETUP";
import "yn-p1/libs/components/yn-button/";
import "yn-p1/libs/components/yn-drawer/";
import "yn-p1/libs/components/yn-icon/";

export default {
  name: "MainContent",
  props: {
    title: String
  },
  components: {
    NaviBar
    // UserInfo
  },
  computed: {
    ...mapGetters("routerState", ["pageTitle"]),
    ...mapGetters("themeState", ["currentTheme"]),
    wrapperClass: function() {
      if (this.currentTheme === "light") {
        return "main-frame-sidebar theme-light";
      } else {
        return "main-frame-sidebar";
      }
    },
    headerClass: function() {
      if (this.currentTheme === "light") {
        return ["main-frame-header", "theme-light"];
      } else {
        return ["main-frame-header", "yn-main-frame-header-background-image"];
      }
    }
  },
  data: function() {
    // let userInfo = FROM_TEMPLATE
    //   ? {
    //       userDisplayName: "XX",
    //       title: "XXX"
    //     }
    //   : {
    //       userDisplayName: "刘庆龙",
    //       title: "首席架构师（副总裁）",
    //       profileImg:
    //         "https://a5.fspage.com/FSC/EM/Avatar/GetAvatar?path=N_201909_04_0ccb7a9fee224380ae98caeb8b833bc6.jpg&ea=noahark"
    //     };

    let userInfo = {
      userDisplayName: "P1",
      title: "P1 平台"
    };
    return {
      sidebar: {
        visible: false,
        placement: "left",
        sliderTitle: "Navigation",
        buttonTitle: "Open Navi",
        collapsed: false,
        wrapStyle: {
          padding: 0
        }
      },
      userInfo,
      mainTitle: "元年科技",
      year: new Date().getFullYear(),
      copyRightMsg: "",
      headerShow: true
    };
  },
  methods: {
    ...mapActions("themeState", ["switchTheme"]),
    changeTheme: function() {
      // this.switchTheme();
      // UiUtils.successMessage("Theme change to " + this.currentTheme, 3);
    },
    // eslint-disable-next-line no-unused-vars
    handleThemeChange: function(isDark) {
      this.switchTheme();
    },
    showNavi() {
      this.sidebar.visible = true;
    },
    onClose() {
      this.sidebar.visible = false;
    }
  },
  mounted: function() {
    // console.log(this);
  },
  created() {
    if (this.$route.query.hideHeader === "true") {
      this.headerShow = false;
    }
  }
};
</script>

<style lang="less">
.main-frame-container {
  /* height: calc(100vh - 56px); */
  width: 100%;
  background-color: #ffffff;
}

.main-frame-header {
  position: fixed;
  top: 0;
  width: inherit;
  height: 64px;
  padding-top: 1.1rem;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.3);
  z-index: 1000;
}

.main-frame-title {
  color: #e7ebef;
}

.theme-light.main-frame-header {
  background-color: #f2f2f3;
}

.theme-light .main-frame-title {
  color: #001528;
}

.main-frame-header-container {
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
}

.main-frame-header-start {
  flex: 1 1 auto;
  display: -webkit-flex;
  display: flex;
  justify-content: flex-start;
}

.main-frame-header-center {
  flex: 1 1 auto;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
}

.main-frame-header-end {
  flex: 1 1 auto;
  display: -webkit-flex;
  display: flex;
  justify-content: flex-end;
}

.main-frame-header-item {
  flex: 0 0 auto;
  margin: 0 8px 0 8px;
}

.main-frame-content {
  padding-top: 64px;
  width: inherit;
  max-width: 100%;
}

.main-frame-content:not(:last-child) {
  margin-bottom: 56px;
}

.main-frame-footer {
  width: inherit;
  position: fixed;
  bottom: 0;
  height: 56px;
  padding: 16px 16px 16px 16px;
  background-color: #f0f2f5;
}
.main-frame-sidebar-wrapper {
  height: 100%;
}

.main-frame-sidebar .ant-drawer-content {
  background-image: linear-gradient(
    90deg,
    rgba(10, 57, 85, 1) 0%,
    rgba(3, 29, 47, 1) 100%
  );
  background-color: red;
}

.main-frame-sidebar .ant-drawer-body {
  padding: 0;
  height: 100%;
}

.theme-light.main-frame-sidebar .ant-drawer-content {
  // background-color: #ffffff;
}

.theme-light.main-frame-sidebar .ant-drawer-body {
  // background-color: #ffffff;
  padding: 0;
  height: 100%;
}

.main-frame-sidebar .ant-drawer-header {
  display: none;
}

.main-frame-sidebar-content {
  min-height: 100%;
}

.main-frame-sidebar-body {
  padding-bottom: 35px;
}

.main-frame-sidebar-content-footer {
  height: 35px;
  margin-top: -35px;
  color: white;
  text-align: center;
  font-weight: 100;
  font-size: 0.8rem;
  padding: 10px 0 10px 0;
  background-color: #001528;
}

.yn-theme-switch.ant-switch-checked {
  background-color: #ffffff;
}

.yn-theme-switch.ant-switch-checked .ant-switch-inner {
  color: #595959;
}

.theme-light .main-frame-sidebar-content-footer {
  color: #595959;
  background-color: #ffffff;
}
.mr5 {
  margin-right: 5px;
}
</style>

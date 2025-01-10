<template>
  <div class="index">
    <HeadNav class="header-fixed"></HeadNav>
    <div class="main-container">
      <LeftMenu class="menu-fixed"></LeftMenu>
      <div class="rightContainer">
        <div class="content-wrapper">
          <div class="content-main">
            <router-view></router-view>
          </div>
          <div class="content-footer">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadNav from "../components/HeadNav";
import LeftMenu from "../components/LeftMenu";
import Footer from "../components/Footer";

export default {
  name: "IndexPage",
  components: {
    HeadNav,
    LeftMenu,
    Footer
  }
};
</script>

<style scoped>
.index {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f6f8fa;
}

.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.main-container {
  margin-top: 70px;
  flex: 1;
  display: flex;
  position: relative;
  height: calc(100vh - 70px);
}

.menu-fixed {
  position: fixed;
  left: 0;
  top: 71px;
  bottom: 0;
  z-index: 900;
}

.rightContainer {
  flex: 1;
  margin-left: 200px;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.content-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px 8px;
}

.content-main {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.content-main > :deep(*) {
  flex: 1;
  min-height: 0;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.content-main :deep(.el-card) {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content-main :deep(.el-card__body) {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-track {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.06);
  }
}

.content-main :deep(.el-table__body-wrapper) {
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-track {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.06);
  }
}

.content-main :deep(.el-calendar) {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.content-main :deep(.el-calendar__body) {
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-track {
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.06);
  }
}

.content-footer {
  flex-shrink: 0;
  margin-top: 8px;
}
</style>


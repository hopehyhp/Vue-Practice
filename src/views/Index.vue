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

<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--color-bg);
  transition: background-color var(--theme-transition), color var(--theme-transition);
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
  background-color: var(--color-bg);
}

.content-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px 8px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(15, 23, 42, 0.05));
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
  color: var(--color-text);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: background-color var(--theme-transition), color var(--theme-transition), border-color var(--theme-transition), box-shadow var(--theme-transition);
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


<template>
  <div class="entertainment">
    <el-tabs v-model="activeTab" type="card" class="ent-tabs">
      <el-tab-pane label="猜数字游戏" name="guess">
        <GuessNumberGame/>
      </el-tab-pane>
      <el-tab-pane label="更多玩法·敬请期待" name="coming" disabled>
        <div class="coming-soon">
          <p>新的娱乐玩法正在打磨中～</p>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import GuessNumberGame from './GuessNumberGame.vue';

export default {
  name: 'EntertainmentPage',
  components: {GuessNumberGame},
  data() {
    return {
      activeTab: 'guess'
    };
  }
};
</script>

<style scoped>
.entertainment {
  padding: 24px 28px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(15, 23, 42, 0.12) 60%);
  min-height: calc(100vh - 120px);
  transition: background var(--theme-transition);
}

.page-head {
  background: var(--color-surface);
  border-radius: 24px;
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 25px 40px rgba(15, 23, 42, 0.25);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  transition: background-color var(--theme-transition), border-color var(--theme-transition), box-shadow var(--theme-transition), color var(--theme-transition);
}

.title-label {
  font-size: 14px;
  letter-spacing: 4px;
  color: var(--color-accent);
  margin: 0 0 6px;
  text-transform: uppercase;
}

.page-head h1 {
  margin: 0;
  font-size: 30px;
  color: var(--color-heading);
}

.intro {
  margin-top: 8px;
  color: var(--color-text-muted);
  max-width: 520px;
}

.hero-img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  opacity: 0.85;
  filter: drop-shadow(0 10px 20px rgba(15, 23, 42, 0.25));
}

.ent-tabs {
  margin-top: 24px;
  color: var(--color-text);
}

.coming-soon {
  text-align: center;
  padding: 40px 0;
  color: var(--color-text-muted);
  font-size: 14px;
}
</style>


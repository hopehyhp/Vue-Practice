<template>
  <div class="guess-game">
    <section class="hero">
      <div>
        <p class="tag">娱乐模块 · 游戏 01</p>
        <h2>猜数字游戏</h2>
        <p class="subtitle">系统随机生成 1-100 的数字，你能在 7 次以内猜中吗？</p>
      </div>
      <el-button type="primary" plain @click="startNewGame">
        重新开始
      </el-button>
    </section>

    <el-card class="game-card" shadow="hover">
      <div class="input-zone">
        <el-input-number
          v-model="currentGuess"
          :min="1"
          :max="100"
          :disabled="gameState === 'success'"
          controls-position="right"
          @keyup.enter.native="handleGuess"
        />
        <el-button
          type="success"
          :disabled="gameState === 'success'"
          @click="handleGuess"
        >
          立即猜测
        </el-button>
      </div>

      <transition name="fade">
        <p v-if="statusMessage" class="status" :class="statusClass">
          {{ statusMessage }}
        </p>
      </transition>

      <div class="stats">
        <div class="stat">
          <span class="label">已用次数</span>
          <span class="value">{{ attempts }}</span>
        </div>
        <div class="stat">
          <span class="label">最佳成绩</span>
          <span class="value">{{ bestRecord || '—' }}</span>
        </div>
        <div class="stat">
          <span class="label">状态</span>
          <span class="value" :class="gameStateClass">
            {{ gameState === 'success' ? '达成' : '挑战中' }}
          </span>
        </div>
      </div>
    </el-card>

    <el-card class="history-card" shadow="never">
      <template #header>
        <div class="card-header">
          <span>猜测记录</span>
          <small>越靠近答案颜色越接近绿色</small>
        </div>
      </template>
      <div class="history-scroll" v-if="history.length">
        <el-timeline class="history-timeline">
          <el-timeline-item
            v-for="(item, index) in history"
            :key="item.id"
            :color="item.color"
            :timestamp="`第 ${index + 1} 次`"
          >
            <div class="history-item">
              <span class="number">猜 {{ item.value }}</span>
              <span class="result">{{ item.result }}</span>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
      <div v-else class="empty">暂无记录，快开始挑战吧！</div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'GuessNumberGame',
  data() {
    return {
      targetNumber: null,
      currentGuess: 50,
      attempts: 0,
      statusMessage: '',
      history: [],
      bestRecord: localStorage.getItem('guess-best')
        ? Number(localStorage.getItem('guess-best'))
        : null,
      gameState: 'playing'
    };
  },
  computed: {
    statusClass() {
      if (!this.statusMessage) return '';
      return this.gameState === 'success' ? 'status-success' : 'status-info';
    },
    gameStateClass() {
      return this.gameState === 'success' ? 'text-success' : '';
    }
  },
  created() {
    this.startNewGame();
  },
  methods: {
    startNewGame() {
      this.targetNumber = Math.floor(Math.random() * 100) + 1;
      this.currentGuess = 50;
      this.attempts = 0;
      this.statusMessage = '系统已准备好，请开始猜测～';
      this.history = [];
      this.gameState = 'playing';
    },
    handleGuess() {
      if (this.gameState === 'success') return;
      if (typeof this.currentGuess !== 'number') {
        this.statusMessage = '请输入有效数字';
        return;
      }

      this.attempts += 1;
      let result = '';

      if (this.currentGuess === this.targetNumber) {
        result = '恭喜！猜中啦';
        this.statusMessage = `✔ 正确答案就是 ${this.targetNumber}，用时 ${this.attempts} 次`;
        this.gameState = 'success';
        if (!this.bestRecord || this.attempts < this.bestRecord) {
          this.bestRecord = this.attempts;
          localStorage.setItem('guess-best', String(this.attempts));
        }
      } else if (this.currentGuess > this.targetNumber) {
        result = '偏大了';
        this.statusMessage = '提示：再小一点';
      } else {
        result = '偏小了';
        this.statusMessage = '提示：再大一点';
      }

      this.history.unshift({
        id: `${Date.now()}-${this.attempts}`,
        value: this.currentGuess,
        result,
        color: this.getColorByDistance(Math.abs(this.currentGuess - this.targetNumber))
      });
    },
    getColorByDistance(distance) {
      if (distance === 0) return '#13ce66';
      if (distance <= 3) return '#2ecc71';
      if (distance <= 10) return '#f7ba2a';
      return '#ff4949';
    }
  }
};
</script>

<style scoped>
.guess-game {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  color: var(--color-text);
  transition: background-color var(--theme-transition), border-color var(--theme-transition), color var(--theme-transition);
  max-height: calc(100vh - 300px);
  overflow-y: auto;
}

.guess-game::-webkit-scrollbar {
  width: 6px;
}

.guess-game::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.4);
  border-radius: 3px;
}

.hero {
  padding: 24px 28px;
  background: linear-gradient(135deg, var(--color-hero-start), var(--color-hero-end));
  border-radius: 20px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: background var(--theme-transition), border-color var(--theme-transition), box-shadow var(--theme-transition);
}

.tag {
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.85;
  margin-bottom: 6px;
}

.hero h2 {
  margin: 0;
  font-size: 28px;
}

.subtitle {
  margin: 6px 0 0;
  font-size: 15px;
  opacity: 0.9;
}

.game-card {
  border-radius: 18px;
  border: 1px solid var(--color-border);
  background: transparent;
  box-shadow: none;
  transition: border-color var(--theme-transition);
}

.input-zone {
  display: flex;
  gap: 12px;
  align-items: center;
}

.status {
  margin-top: 18px;
  font-size: 16px;
  font-weight: 600;
}

.status-success {
  color: #13ce66;
}

.status-info {
  color: var(--color-accent);
}

.stats {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
}

.stat {
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 14px 16px;
  transition: border-color var(--theme-transition);
}

.label {
  font-size: 13px;
  color: var(--color-text-muted);
}

.value {
  display: block;
  font-size: 24px;
  font-weight: 700;
}

.text-success {
  color: #13ce66;
}

.history-card {
  border-radius: 16px;
  border: 1px solid var(--color-border);
  background: transparent;
  transition: border-color var(--theme-transition);
  display: flex;
  flex-direction: column;
}

.history-scroll {
  flex: 1;
  max-height: 320px;
  min-height: 200px;
  overflow-y: auto;
  padding-right: 8px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: var(--color-heading);
}

.card-header small {
  font-size: 12px;
  color: var(--color-text-muted);
}

.history-timeline {
  margin-top: 12px;
}

.history-item {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: var(--color-text);
}

.history-item .number {
  font-weight: 600;
}

.history-item .result {
  color: var(--color-text-muted);
}

.empty {
  text-align: center;
  padding: 30px 0;
  color: var(--color-text-muted);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


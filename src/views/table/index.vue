<template>
  <el-card>
    <div slot="header" class="card-header header-pd-20">
      <span class="titleClass">目标管理</span>
    </div>
    <best-table :column-options="displayOptions"  :table-data="tableData"></best-table>
  </el-card>
</template>

<script>
import BestTable from "@/components/element-ui-components/BestTable.vue";

export default {
  name: 'Table',
  // 使用的组件
  components: {BestTable},
  // 过滤器
  filters: {},
  // 数据
  data() {
    return {
      tableData: require('../../resources/json/tableData.json'),
      displayOptions: [
        {
          key: 'username',
          value: true,
          frozen: true,
          label: '用户名'
        },
        {
          key: 'email',
          value: true,
          frozen: false,
          label: '邮箱'
        },
        {
          key: 'name',
          value: true,
          frozen: false,
          label: '名字'
        },
        {
          key: 'age',
          value: true,
          frozen: false,
          label: '年龄'
        },
        {
          key: 'gender',
          value: false,
          frozen: false,
          label: '性别'
        },
        {
          key: 'role',
          value: false,
          frozen: false,
          label: '角色'
        },
        {
          key: 'status',
          value: true,
          frozen: true,
          label: '状态',
          func: (value) => {
            return value === '启用' ? '正常' : '关机'
          }
        },
        {
          key: 'action',
          value: true,
          frozen: true,
          label: '操作',
          children: ['view', 'edit']
        }
      ]
    };
  },
  // 计算属性
  computed: {},
  // 监听
  watch: {},
  // 初始化-页面还没渲染
  created() {

  },
  // 初始化-页面已经渲染完毕
  mounted() {
  },
  // 方法
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import '../../styles/mixins.scss';


// 如果有特殊的样式可以在这里添加
</style>

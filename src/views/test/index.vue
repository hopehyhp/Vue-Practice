<template>
  <div class="upload-container">


    <el-upload
        v-if="!isFileUploaded"
        class="upload-demo"
        drag
        action="http://127.0.0.1:10086/initSign"
        :on-success="handleSuccess"
        :before-upload="beforeUpload"
        multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传xlsx/csv文件，且不超过500kb</div>
    </el-upload>

    <div class="search-container">
      <el-input v-model="searchCode" placeholder="请输入code"></el-input>
      <el-button @click="searchByCode">搜索</el-button>
      <el-button @click="doView({content: 'test'})">预览</el-button>
    </div>

    <!--    <el-table-->
    <!--        v-if="tableData.length > 0"-->
    <!--        :data="tableData"-->
    <!--        style="width: 100%; margin-top: 20px;"-->
    <!--        :row-class-name="tableRowClassName"-->
    <!--        border>-->
    <!--      <el-table-column prop="id" label="ID" width="50"></el-table-column>-->
    <!--      <el-table-column prop="name" label="姓名" width="100"></el-table-column>-->
    <!--      <el-table-column prop="majorName" label="专业名称" width="150"></el-table-column>-->
    <!--      <el-table-column prop="grade" label="年级" width="100"></el-table-column>-->
    <!--      <el-table-column prop="className" label="班级" width="100"></el-table-column>-->
    <!--      <el-table-column prop="studentNumber" label="学号" width="120"></el-table-column>-->

    <!--      <el-table-column prop="gender" label="性别" width="80"></el-table-column>-->
    <!--      <el-table-column prop="code" label="编码" width="120"></el-table-column>-->
    <!--      <el-table-column prop="isChecked" label="是否签到" width="120" :formatter="formatIsChecked"></el-table-column>-->
    <!--      <el-table-column prop="ip" label="签到ip" width="120"></el-table-column>-->
    <!--      <el-table-column prop="result" label="执行结果" width="120"></el-table-column>-->
    <!--      <el-table-column label="文件预览" width="120">-->
    <!--        <template slot-scope="scope">-->
    <!--          <el-button @click="doView(scope.row)">预览</el-button>-->
    <!--        </template>-->
    <!--      </el-table-column>-->

    <!--    </el-table>-->
    <!-- 文件预览弹窗 -->
    <el-dialog :visible.sync="dialogVisible" title="详情" @open="_open">
      {{expectedValue}}
      <el-Card>
        <div>
          <pre >
            <code class="language-python">
              {{ expectedValue }}
            </code>
          </pre>
        </div>
      </el-Card>
    </el-dialog>
  </div>


</template>

<script>
import axios from 'axios';
export default {
  name: "UploadFile",
  data() {
    return {
      code2:'',
      dialogVisible: false,
      tableData: [],
      isFileUploaded: false,
      searchCode: '',
      code: ``
    };
  },
  computed: {
    expectedValue() {
      return this.code;
    }
  },
  methods: {
    beforeUpload(file) {
      const isXlsxOrCsv = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'text/csv';
      const isLt500K = file.size / 1024 < 500;

      if (!isLt500K) {
        this.$message.error('文件大小不能超过 500KB!');
      }
      return  isLt500K;
    },
    handleSuccess(response) {
      if (response.code === 200) {
        this.tableData = response.data;
        this.isFileUploaded = true;
      } else {
        this.$message.error(response.message);
      }
    },
    searchByCode() {
      console.log(this.searchCode)
      if (this.searchCode) {
        axios.get('http://127.0.0.1:10086/getSignInfo?code=' + this.searchCode)
            .then(response => {
              if (response.data.code === 200) {
                this.tableData = response.data.data;
              } else {
                this.$message.error(response.data.message);
              }
            })
            .catch(error => {
              this.$message.error('请求失败');
            });
      } else {
        this.$message.warning('请输入code');
      }
    },
    formatIsChecked(row, column, cellValue) {
      return cellValue === '1' ? '是' : '否';
    },
    tableRowClassName({ row, rowIndex }) {
      console.log(row)
      if (row.isChecked === '1') {
        return 'success-row';
      }
      return '';
    },
    doView(row){
      this.dialogVisible = true;
      // console.log('之前', JSON.parse(JSON.stringify(this.code)));
      this.code2 = row.content;
      // console.log('之后', JSON.parse(JSON.stringify(this.code)));
      // this.dialogVisible = true;
    },
    _close(){
      console.log('我走了')
      this.code = null;
    },
    _open(){
      console.log('我来了')
      this.$forceUpdate();
      this.code = this.code2;
    }

  }
};
</script>

<style scoped>
.upload-container {
  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: center;
  padding: 20px;
}

.upload-demo {
  width: 300px;
}

.el-table .green-row {
  background-color: #d4edda !important;
}
::v-deep .el-table .success-row {
  background-color: #f0fff0 !important; /* 浅绿色 */
}

.search-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
}
</style>

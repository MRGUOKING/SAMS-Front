<template>
<!--  筛选框-->
  <div style="margin-top: 40px">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="日期">
          <el-date-picker
              v-model="formInline.dateRange"
              type="daterange"
              unlink-panels
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              :shortcuts="shortcuts"
              :size="size"
          />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="formInline.region" placeholder="Activity zone">
            <el-option label="未开始" value="shanghai" />
            <el-option label="已结束" value="beijing" />
            <el-option label="已退款" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>

  </div>

  <div>
    <div style="float: right; margin-right: 50px; margin-bottom: 10px; margin-top: 20px">
    </div>


    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="创建时间" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="state" label="描述" />
      <el-table-column prop="city" label="价格"/>
      <el-table-column prop="city" label="状态"/>
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="media" placeholder="搜索" />
        </template>
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleClick">同意</el-button>
          <el-button link type="danger" size="small" @click="deleteTicket">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
    <el-pagination
        style="float: right"
        layout="prev, pager, next"
        :total="total"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
    ></el-pagination>


  </div>

  <!--  新增门票-->
  <div>
    <el-dialog v-model="dialogFormVisible" title="修改门票" size="small" :rules="rules">
      <el-form :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth" required>
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth"  required>
          <el-input v-model="form.description" autocomplete="off"  type="textarea" />
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth"  required>
          <el-input v-model="form.price" @input="handlePriceInput" />
        </el-form-item>

      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addTicket">
          修改
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>

</template>

<script>
import {reactive, ref} from "@vue/reactivity";
import {ElMessage, ElMessageBox} from "element-plus";

export default {
name: "UserManager",

  setup() {
    const handleClick = () => {
      console.log('click')
    }
    const handlePriceInput = (target) => {
      let amount = target.trim();

      // 只允许输入数字和小数点，且小数点只能出现一次
      amount = amount.replace(/[^\d.]/g, '');
      amount = amount.replace(/^\./g, '');
      amount = amount.replace(/\.{2,}/g, '.');
      amount = amount.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
      amount = amount.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); // 只保留小数点后两位
      form.price = amount;
    };
    const addTicket = () => {
      console.log('新增门票');
    }
    const tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
      },
    ]
    const shortcuts = [
      {
        text: 'Last week',
        value: () => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
          return [start, end]
        },
      },
      {
        text: 'Last month',
        value: () => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
          return [start, end]
        },
      },
      {
        text: 'Last 3 months',
        value: () => {
          const end = new Date()
          const start = new Date()
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
          return [start, end]
        },
      }];
    const formInline = reactive({
      dateRange: [],
      user: '',
      region: '',
    })

    const onSubmit = () => {
      console.log('submit!')
    }
    const total = 400;
    const currentPage = 1;
    const pageSize = 10;
    const dialogFormVisible = ref(false)
    const deleteVisible = ref(false)
    const formLabelWidth = '140px'
    const form = reactive({
      name: '',
      description: '',
      price: '',
    })
    const deleteTicket = () => {
      ElMessageBox.confirm(
          '确定要删除该门票吗?',
          '警告',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          }
      )
          .then(() => {
            ElMessage({
              type: 'success',
              message: 'Delete completed',
            })
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: 'Delete canceled',
            })
          })
    }
    const gridData = [
      {
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
      },
      {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
      },
      {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
      },
      {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District',
      },
    ]
    return {
      handleClick,
      addTicket,
      tableData,
      total,
      currentPage,
      pageSize,
      form,
      gridData,
      dialogFormVisible,
      formLabelWidth,
      formInline,
      shortcuts,
      onSubmit,
      deleteTicket,
      handlePriceInput,
    }
  }
}
</script>

<style scoped>

</style>

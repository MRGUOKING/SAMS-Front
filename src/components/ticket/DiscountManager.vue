<template>
  <h1>折扣</h1>
  <div>
    <div style="float: right; margin-right: 50px; margin-bottom: 10px; margin-top: 20px">
      <el-button type="primary" @click="dialogFormVisible=true">新增</el-button>
    </div>


    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="创建时间" />
      <el-table-column prop="name" label="折扣分类" />
      <el-table-column prop="state" label="折扣名称" />
      <el-table-column prop="city" label="折扣量"/>
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="media" placeholder="搜索" />
        </template>
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleClick">编辑</el-button>
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

  <!--  新增折扣-->
  <div>
    <el-dialog v-model="dialogFormVisible" title="新增折扣" size="small" :rules="rules">
      <el-form :model="form">
        <el-form-item label="折扣分类" :label-width="formLabelWidth" required>
          <el-select v-model="value" class="m-2" placeholder="选择分类">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="折扣名称" :label-width="formLabelWidth"  required>
          <el-input v-model="form.description" autocomplete="off"  type="textarea" />
        </el-form-item>
        <el-form-item label="折扣量" :label-width="formLabelWidth"  required>
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
name: "DiscountManager",
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
    const options = [
      {
        value: 'Option1',
        label: 'Option1',
      },
      {
        value: 'Option2',
        label: 'Option2',
      },
      {
        value: 'Option3',
        label: 'Option3',
      },
      {
        value: 'Option4',
        label: 'Option4',
      },
      {
        value: 'Option5',
        label: 'Option5',
      },
    ]
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
      options,
      deleteTicket,
      handlePriceInput,
    }
  }
}
</script>

<style scoped>

</style>

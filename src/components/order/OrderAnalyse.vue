<template>
<div>
  <h1>用户分析</h1>
<!--筛选框-->
  <div style="margin-top: 40px; margin-bottom: 20px">
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

  <section style="display: flex; justify-content: space-between;">

    <div id="countChart" style="width: 400px; height: 400px"></div>
    <div id="progress" style="width: 800px; height: 400px"></div>
<!--    男女占比-->
  </section>
<!--  近三个月用户增张情况-->

  <!--    用户种类占比-->
  <section  style="display: flex; justify-content: space-between;">
    <div id="typeChart" style="width: 400px; height: 400px;"></div>
    <div id="moneyChart" style="width: 800px; height: 400px"></div>
  </section>

  <section>
  </section>
</div>
</template>

<script>
import * as echarts from 'echarts'
import '../../../public/china'
import {reactive} from "@vue/reactivity";
export default {
name: "UserAnalyse",
  setup() {
    const formInline = reactive({
      dateRange: [],
      user: '',
      region: '',
    })

    const onSubmit = () => {
      console.log('submit!')
    }

    return {
      formInline,
      onSubmit
    }
  },
  mounted() {
    this.initTypeChart();
    this.initCountChart();
    this.initMoneyChart();
    this.initProgressChart();
  },
  methods: {
    initCountChart() {
      let chartDom = document.getElementById('countChart');
      let myChart = echarts.init(chartDom);
      let option = {
        title: {
          text: '各门票出售数量情况',
          left: 'center'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '门票1' },
              { value: 735, name: '门票2' },
              { value: 310, name: '门票3' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    initTypeChart() {
      let chartDom = document.getElementById('typeChart');
      let myChart = echarts.init(chartDom);
      let option = {
        title: {
          text: '用户种类占比',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '普通管理员' },
              { value: 735, name: '超级管理员' },
              { value: 310, name: '游客' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    initMoneyChart() {
      let chartDom = document.getElementById('moneyChart');
      let myChart = echarts.init(chartDom);
      let option = {
        title: {
          text: '门票金额出售情况'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    initProgressChart() {
      let chartDom = document.getElementById('progress');
      let myChart = echarts.init(chartDom);
      let option = {
        title: {
          text: '门票数量出售情况'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>

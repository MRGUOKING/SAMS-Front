<template>
<div>
  <h1>用户分析</h1>
  <section style="display: flex; justify-content: space-between;">

    <div ref="chartone" style="width: 800px; height: 600px"></div>
<!--    男女占比-->
    <div id="maleChart" style="width: 400px; height: 400px">
    </div>
  </section>
<!--  近三个月用户增张情况-->

  <!--    用户种类占比-->

  <section  style="display: flex; justify-content: space-between;">
    <div id="progress" style="width: 800px; height: 400px"></div>
    <div id="typeChart" style="width: 400px; height: 400px;"></div>
  </section>

  <section>
  </section>
</div>
</template>

<script>
import * as echarts from 'echarts'
import '../../../public/china'
export default {
name: "UserAnalyse",
  mounted() {
    this.initTypeChart();
    this.initMaleChart();
    this.initChinaChart();
    this.initProgressChart();
  },
  methods: {
    initMaleChart() {
      let chartDom = document.getElementById('maleChart');
      let myChart = echarts.init(chartDom);
      let option = {
        title: {
          text: '游客性别占比',
          left: 'center'
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
              { value: 1048, name: '男性' },
              { value: 735, name: '女性' },
              { value: 310, name: '未知' },
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
    initChinaChart() {
      function randomData() {
        return Math.round(Math.random()*500);
      }
      let mydata = [
        {name: '北京',value: '100' },{name: '天津',value: randomData() },
        {name: '上海',value: randomData() },{name: '重庆',value: randomData() },
        {name: '河北',value: randomData() },{name: '河南',value: randomData() },
        {name: '云南',value: randomData() },{name: '辽宁',value: randomData() },
        {name: '黑龙江',value: randomData() },{name: '湖南',value: randomData() },
        {name: '安徽',value: randomData() },{name: '山东',value: randomData() },
        {name: '新疆',value: randomData() },{name: '江苏',value: randomData() },
        {name: '浙江',value: randomData() },{name: '江西',value: randomData() },
        {name: '湖北',value: randomData() },{name: '广西',value: randomData() },
        {name: '甘肃',value: randomData() },{name: '山西',value: randomData() },
        {name: '内蒙古',value: randomData() },{name: '陕西',value: randomData() },
        {name: '吉林',value: randomData() },{name: '福建',value: randomData() },
        {name: '贵州',value: randomData() },{name: '广东',value: randomData() },
        {name: '青海',value: randomData() },{name: '西藏',value: randomData() },
        {name: '四川',value: randomData() },{name: '宁夏',value: randomData() },
        {name: '海南',value: randomData() },{name: '台湾',value: randomData() },
        {name: '香港',value: randomData() },{name: '澳门',value: randomData() }
      ];
      var optionMap = {
        backgroundColor: '#FFFFFF',
        title: {
          text: '游客地区分布情况',
          subtext: '',
          y: '5%',
          x:'center'
        },
        tooltip : {
          trigger: 'item'
        },

        //左侧小导航图标
        visualMap: {
          show : true,
          x: 'right',
          y: 'center',
          splitList: [
            {start: 500, end:600},{start: 400, end: 500},
            {start: 300, end: 400},{start: 200, end: 300},
            {start: 100, end: 200},{start: 0, end: 100},
          ],
          color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']
        },

        //配置属性
        series: [{
          name: '数据',
          type: 'map',
          mapType: 'china',
          roam: false,
          label: {
            normal: {
              show: true  //省份名称
            },
            emphasis: {
              show: false
            }
          },
          data:mydata  //数据
        }]
      };
      //初始化echarts实例
      var myChart = echarts.init(this.$refs.chartone);

      //使用制定的配置项和数据显示图表
      myChart.setOption(optionMap);

    },
    initProgressChart() {
      let chartDom = document.getElementById('progress');
      let myChart = echarts.init(chartDom);
      let option = {
        title: {
          text: '近三个月游客增张情况',
          left: 'center'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
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

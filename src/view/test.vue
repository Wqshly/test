<template>
    <div class="fill-container scroll-style">
      <el-row>
        <el-col :span="12">
          <div class="table-container-style">
            <div id="test1" style="width: 600px;height:400px;"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="table-container-style">
            <div id="test2" style="width: 700px;height:400px;"></div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="table-container-style">
            <div id="test3" style="width: 600px;height:400px;"></div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="table-container-style">
            <div id="test4" style="width: 700px;height:400px;"></div>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    let data = []

    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI
      let r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }
    return {
      option1: {
        title: {
          text: '极坐标分布数值'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      },
      option2: {
        title: {
          text: '成本统计',
          subtext: '动态数据',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          show: true,
          orient: 'vertical',
          left: 'left',
          data: ['物料成本', '工资成本', '运输成本', '沟通成本', '设备维护成本']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: '物料成本'},
              {value: 1548, name: '工资成本'},
              {value: 234, name: '运输成本'},
              {value: 135, name: '沟通成本'},
              {value: 310, name: '设备维护成本'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      option3: {
        title: {
          text: '工资分布图'
        },
        tooltip: {},
        legend: {
          data: ['人数占比']
        },
        xAxis: {
          data: ['0-4999', '5000-5999', '6000-6999', '7000-7999', '8000-8999', '9000+']
        },
        yAxis: {},
        series: [{
          name: '人数占比',
          type: 'bar',
          data: [5, 25, 40, 15, 5, 10]
        }]
      },
      option4: {
        title: {
          text: '收入-成本折线图'
        },
        tooltip: { // 设置tip提示
          trigger: 'axis'
        },

        legend: { // 设置区分（哪条线属于什么）
          data: ['当月收入', '当月开销']
        },
        color: ['#8AE09F', '#FA6F53'], // 设置区分（每条线是什么颜色，和 legend 一一对应）
        xAxis: { // 设置x轴
          type: 'category',
          boundaryGap: false, // 坐标轴两边不留白
          data: ['2020-1', '2020-2', '2020-3', '2020-4', '2020-5', '2020-6', '2020-7'],
          name: '日期', // X轴 name
          nameTextStyle: { // 坐标轴名称的文字样式
            color: '#FA6F53',
            fontSize: 16,
            padding: [0, 0, 0, 20]
          },
          axisLine: { // 坐标轴轴线相关设置。
            lineStyle: {
              color: '#FA6F53'
            }
          }
        },
        yAxis: {
          nameTextStyle: {
            color: '#FA6F53',
            fontSize: 16,
            padding: [0, 0, 10, 0]
          },
          axisLine: {
            lineStyle: {
              color: '#FA6F53'
            }
          },
          type: 'value'
        },
        series: [
          {
            name: '平均成绩',
            data: [220, 232, 201, 234, 290, 230, 220],
            type: 'line', // 类型为折线图
            lineStyle: { // 线条样式 => 必须使用normal属性
              normal: {
                color: '#8AE09F'
              }
            }
          },
          {
            name: '学生成绩',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
            lineStyle: {
              normal: {
                color: '#FA6F53'
              }
            }
          }
        ]

      }
    }
  },
  methods: {
    test1 () {
      var myChart = this.$echarts.init(document.getElementById('test1'))
      myChart.setOption(this.option1)
    },
    test2 () {
      var myChart = this.$echarts.init(document.getElementById('test2'))
      myChart.setOption(this.option2)
    },
    test3 () {
      var myChart = this.$echarts.init(document.getElementById('test3'))
      myChart.setOption(this.option3)
    },
    test4 () {
      var myChart = this.$echarts.init(document.getElementById('test4'))
      myChart.setOption(this.option4)
    }
  },
  mounted () {
    this.test1()
    this.test2()
    this.test3()
    this.test4()
  }
}
</script>

<style scoped>
  .table-container-style {
    margin: 15px;
    padding: 15px;
    background-color: #ffffff;
    min-height: 300px;
    border-radius: 10px;
  }
</style>

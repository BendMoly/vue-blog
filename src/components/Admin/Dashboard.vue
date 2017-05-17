<template>
    <div class="dashboard-container">
        <div class="msg-alert">
            <el-alert class="alert" title="自定义 close-text" type="info" close-text="知道了"></el-alert>
        </div>
        <div class="clear">
            <div class="info-window info-blue">
              <div>
                <img src="../../assets/comment.png" alt="">
                <span class="info-result">18</span>
              </div>
              <p class="info-title">新评论</p>
            </div>
            <div class="info-window info-green">
              <div>
                <img src="../../assets/articlelib.png" alt="">
                <span class="info-result">18</span>
              </div>
              <p class="info-title">文章总数</p>
            </div>
            <div class="info-window info-red">
              <div>
                <img src="../../assets/rrs.png" alt="">
                <span class="info-result">0</span>
              </div>
              
              <p class="info-title">订阅数</p>
            </div>
        </div>
        <!-- <div>
            <el-badge :value="12" class="item">
              <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="12" class="item">
              <el-button size="small">文章数</el-button>
            </el-badge>
        </div> -->
        <div class="chart clear">
            <div id="articlelib"></div>
            <div id="tagChart"></div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
  export default {
    data() {
      return {
        chart: null,
        opinion: ['学习氛围差', '学习氛围一般', '学习氛围很好'],
        opinionData: [
          {value:26, name:'学习氛围差'},
          {value:31, name:'学习氛围一般'},
          {value:8, name:'学习氛围很好'}
        ]
      }
    },
    methods: {
      drawPie (id) {
        this.chart = echarts.init(document.getElementById(id))
        var piePatternImg = new Image();
        piePatternImg.src = this.imgData.piePatternSrc;
        var bgPatternImg = new Image();
        bgPatternImg.src = this.imgData.bgPatternSrc;

        var itemStyle = {
            normal: {
                opacity: 0.7,
                color: {
                    image: piePatternImg,
                    repeat: 'repeat'
                },
                borderWidth: 3,
                borderColor: '#235894'
            }
        };

        this.chart.setOption({
            backgroundColor: {
                image: bgPatternImg,
                repeat: 'repeat'
            },
            title: {
                text: '文章阅读量',
                subtext: '数据来自数据库',
                textStyle: {
                    color: '#235894'
                }
            },
            tooltip: {},
            series: [{
                name: 'pie',
                type: 'pie',
                selectedMode: 'single',
                selectedOffset: 30,
                clockwise: true,
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 18,
                            color: '#235894'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#235894'
                        }
                    }
                },
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ],
                itemStyle: itemStyle
            }]
        })
      },
      drawBar (id) {
        this.chart = echarts.init(document.getElementById(id))
        var piePatternImg = new Image();
        piePatternImg.src = this.imgData.piePatternSrc;
        var bgPatternImg = new Image();
        bgPatternImg.src = this.imgData.bgPatternSrc;

        var itemStyle = {
            normal: {
                opacity: 0.7,
                color: {
                    image: piePatternImg,
                    repeat: 'repeat'
                },
                borderWidth: 3,
                borderColor: '#235894'
            }
        };

        this.chart.setOption({
            backgroundColor: {
                image: bgPatternImg,
                repeat: 'repeat'
            },
            title: {
                text: '热门标签统计',
                subtext: '数据来自数据库'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['2017年']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 1]
            },
            yAxis: {
                type: 'category',
                data: ['阿富汗','巴西','印尼','美国','印度','中国','世界人口(万)']
            },
            series: [
                {
                    name: '2017年',
                    type: 'bar',
                    data: [666, 19, 2, 31, 12, 134, 68]
                }
            ]
        })
      }
    },
    mounted() {
      this.$nextTick(function() {
        this.drawPie('articlelib');
        this.drawBar('tagChart')
      })
    }
  }
</script>

<style scoped>
.dashboard-container{
    padding: 0 50px 50px 50px;
}
.msg-alert{
    margin-top: 20px;
}
.item{
    margin-left: 30px;
}
.alert{
    margin-top: 10px;
}
.info-window{
  float: left;
  width: 30%;
  padding-left: 20px;
  margin-top: 15px;
  margin-right: 1%;
  text-align: center;
}
.info-blue{
  background: #1296db;
}
.info-green{
  background: #6bb5c1;
}
.info-red{
  background: #c95b5b;
}
.info-window > div{
  height: 128px;
}
.info-window img{
  vertical-align: bottom;
}
.info-result{
  font-size: 80px;
  line-height: 128px;
  color: #fff;
}
.info-title{
  font-size: 24px;
  margin: 0;
  color: #fff;
  margin-bottom: 5px;
}
.chart {
  margin-top: 20px;
}
#articlelib {
  float: left;
  width: 68%;
  max-width: 800px;
  height: 600px;
}
#tagChart{
  float: left;
  width: 30%;
  /*min-width: 390px;*/
  height: 600px;
  margin-left: 20px;
}
</style>
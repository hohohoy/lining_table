<template>
  <div class="detailabout">
    <div class="popBlock">
      <van-action-sheet v-model="isShow" :title="this_title" @close="closeDetail">
        <div class="content">
          <div class="header_item">
            <span class="moneyLogo">￥</span><span>报价类型：拉链/拉头类报价单</span>
          </div>
          <div class="detail_item">
            <table border="0" cellspacing="0">
              <thead>
                <th>名称</th>
                <th>数值</th>
              </thead>
              <tbody>
                <tr v-for="(item,id) in detailList" :key="id">
                  <td>{{item.name}}</td>
                  <td>{{item.val}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </van-action-sheet>
    </div>
  </div>
</template>
<script>
export default {
  name:'detailabout',
  props: {
    show: Boolean
  },
  data(){
    return{
      this_title:'辅料样品信息',
      isShow:this.show,
      detailList:[{name:'颜色',val:'哑黑'},
                  {name:'材料/成分',val:'尼龙'},
                  {name:'规格',val:'3#'},
                  {name:'工艺说明',val:'塑料米高温成型-电镀-组装'},
                  {name:'水洗方式',val:'普洗'},
                  {name:'汽烫缩率(%)',val:'-0.8'},
                  {name:'税率(%)',val:'13'},
                  {name:'含税价(元)',val:'0.934'},
                  {name:'价格单位',val:'条'},
                  {name:'拉链长度+1cm/in差价(元)',val:'0.004'},
                  {name:'拉链长度-1cm/in差价(元)',val:'0.003'},
                  {name:'起订量',val:'100'},
                  {name:'供货周期(天)',val:'20'},
                  {name:'产品特性及注意事项说明',val:'金属氧化、避免与化学品接触'},
                  ]
    }
  },
  watch:{
    show:function(newVal,old){
      this.isShow=newVal
    }
  },
  methods:{
    closeDetail(){
      this.$emit('closePop')
    }
  }
  
}
</script>
<style lang="less" scoped>
  /deep/ .van-overlay{
    background-color: rgba(0,0,0,.4)
  }
  /deep/.van-action-sheet{
    max-height: 90%;
  }
  /deep/ .van-action-sheet__header{
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    padding-left: 20px;
    margin-bottom: 13px;
    text-align: left;
    border-bottom: 1px solid rgb(243,243,243);
    color: rgb(58,62,66);
  }
  /deep/ .van-action-sheet__content{
    height: 600px;
  }
  .detailabout{
    .popBlock{
      .content{
        .header_item{
          text-align: left;
          margin:0 20px;
          background: rgb(243,247,251);
          border: 1px solid rgb(162,207,255);
          border-radius: 4px;
          height: 30px;
          line-height: 30px;
          padding: 0 13px;
          color: rgb(51, 110, 173);
          font-size: 13px;
          .moneyLogo{
            color: #fff;
            padding: 0 5px;
            background: rgb(46,142,247);
            border-radius: 3px;
            margin-right: 13px;
          }
        }
        .detail_item{
          margin-top: 12px;
          table{
            font-size: 13px;
            width: 100vw;
            text-align: left;
            thead{
              background: rgb(239,243,247);
              th{
                padding-left: 20px;
                color: rgb(90,102,113);
                height: 30px;
              }
            }
            tr{
              td{
                height: 30px;
                border-bottom: 1px solid rgb(241,244,246);
                padding-left: 20px;
              }
            }
            
            
          }
        }
      }
    }
  }
</style>

<template>
  <div class="Ttable">
    <div class="wrapper" style="position:relative;overflow: hidden;height:100%">
      <div class="thBlcok" style="height:41px"></div>
      <div style="display:flex;position:absolute;top:0;left:0;overflow:hidden;width:100%;height:100%">
        <div style="height:100%;display:inline-block;padding-left:177px"></div>
        <div class="tableBox">
                <div class="showTD">
                    <table>
                    <thead>
                        <th>
                          <div class="ALL">
                            <i class="defaultBorder van-icon van-icon-success" @click="selectAll($event)"></i>
                          </div>
                          <div class="TD_title"><span>{{title[0]}}</span></div>
                          </th>
                    </thead>
                    </table>
                </div>
                <div class="showTH">
                    <table cellspacing="0">
                    <thead>
                        <th v-for="item in title" :key="item">{{item}}</th>
                    </thead>
                    </table>
                </div>
          <div class="showCol">
            <table cellspacing="0">
              <van-checkbox-group v-model="checkList">
              <thead>
                <th v-for="item in title" :key="item">{{item}}</th>
              </thead>
              <tbody>
                <tr v-for="(item,id) in no" :key="id">
                  <td>
                    <van-checkbox style="display:inline-block" shape="square" :name=item></van-checkbox>
                    <div>
                      <input type="tel" style="border:none;width:115px;height:40px;line-height:40px;padding:0"  v-model="no[id]" @blur="cons"/>
                      <!-- <span>{{item}}</span> -->
                      <span class="edit"></span>
                    </div>
                  </td>
                </tr>
              </tbody>
    </van-checkbox-group>
            </table>
          </div>
          <div style="display:flex;flex-direction:column;">
          <!-- <table>
              <thead>
              <th v-for="item in title_two" :key="item">{{item}}</th>
            </thead>
          </table> -->
          <table id="tab" cellspacing="0">
            <thead>
              <th v-for="item in title_two" :key="item"> </th>
            </thead>
            <tbody>
              <tr v-for="item in 16" :key="item">
                <td v-for="item in 6" :key="item">{{item}}</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Ttable",
  data() {
    return {
      title: [
        "材料编号",
        "厂家编号",
        "报价类别",
        "年龄",
        "电话号码",
        "电子邮箱",
        "家庭住址"
      ],
      title_two: [
        "厂家编号",
        "报价类别",
        "年龄",
        "电话号码",
        "电子邮箱",
        "家庭住址"
      ],
      checkList:[],
      radio:'',
      no:['1254568948451',
      '1254568948452',
      '1254568948453',
      '1254568948454',
      '1254568948455',
      '1254568948456',
      '1254568948457',
      '1254568948458',
      '1254568948459',
      '1254568948460',
      '1254568948461',
      '1254568948462',
      '1254568948463',
      '1254568948464',
      '1254568948465',
      '1254568948466',
      ]
    };
  },
  mounted() {
    document.querySelector(".tableBox").addEventListener("scroll", function() {
      if (this.scrollLeft > 0) {
        document.querySelector(".showCol").classList.add("addShadow"); //添加阴影样式
      } else {
        document.querySelector(".showCol").classList.remove("addShadow");
        // this.scrollTo(0, this.scrollTop);
      }
      if (this.scrollTop < 0) {
        // this.scrollTo(this.scrollLeft, 0);
      }
      document.querySelector(".showCol").scrollTo(0, this.scrollTop);
      document.querySelector(".showTH").scrollTo(this.scrollLeft, 0);
    });
  },
  created(){

  },
  methods:{
    cons(){
      console.log(this.no)
    },
    selectAll(e){
      let all=[]
      if(e.target.classList.value.indexOf('selectAll')>0){ //不选中
        e.target.classList.remove('selectAll')
        this.checkList=[]
      }else{//全选中
        e.target.classList.add('selectAll')
        this.no.map((it,i)=>{
          all.push(it)
        })
        this.checkList=all
      }
      
    }
  }
};
</script>
<style lang="less" scoped>
.Ttable {
  box-sizing: border-box;
  padding-bottom: env(safe-area-inset-bottom);
  position: relative;
  box-shadow: 0px 0px 18px rgb(219, 219, 219);
  height: 100%;
  /deep/.van-checkbox__icon{
    height: 100%;
    margin: auto 0;
    display: flex;
    align-items: center;
    i{
      margin-left: 8px;
      border-radius: 3px;
      height: 17px;
      width: 17px;
      &::before{
        vertical-align: 3px;
        height: 17px;
      }
    }
  }
  
  th{
    color: rgb(102, 114, 123);
    font-weight: 550;
    font-size: 17px;
  }
  .tableBox {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: auto;
    background: #fff;
    &::-webkit-scrollbar-track-piece {
      background-color: rgba(0, 0, 0, 0);
    }
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.5);
      background-clip: padding-box;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
      min-height: 28px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(0, 0, 0, 0.5);
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }
    .showTD {
      background: rgb(239, 243, 247);
      width: 177px;
      height: 41px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      overflow: hidden;
      table{
         width:177px;
         th{
           width: 177px;
            line-height: 42px;
            height: 42px;
            padding:0;
            display: flex;
            justify-content:start;
            margin-left: 10px;
            .ALL{
              display: flex;
              justify-content: start;
              align-items: center;
              width: 30px;
               .defaultBorder{
                  color: transparent;
                  font-size: .8em;
                  // line-height: inherit;
                  text-align: center;
                  border: 1px solid #c8c9cc;
                  height: 17px;
                  width: 16px;
                  border-radius: 3px;
                  box-sizing: content-box;
                  background: #fff;
            }
            .van-icon-success::before {
                vertical-align: -6px;
                width: 16px;
                font-size: 1.2em;
            }
            .selectAll{
                color: #fff;
                background: #1989fa;
                border-radius: 3px;
                height: 17px;
                border: none;
              }
            }
            .TD_title{
              flex: 1;
              display: flex;
              justify-content: center;
              align-content: center;
            }
          }
      }
      
    }
    .showCol {
      background: #fff;
      height: 100%;
      width: 177px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 995;
      overflow: hidden;
      tbody{
        td{
            width: 177px;
            height: 40px;
            line-height: 40px;
            margin: 0 3px;
            display: flex;
            justify-content: space-between;
            div{
            display: flex;
            margin-right: 8px;
              .edit{
                margin-top: 11px;
                width: 16px;
                background:url('~@static/edit.png') no-repeat;
                background-size: 100%;
              }
          }
          }
      }
    }
    .showTH {
      background: rgb(239, 243, 247);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 900;
      width: 100%;
      height: 41px;
      overflow: hidden;
      table{
        width: 990px;
        th{
          width: 165px;
          &:first-of-type{
            width: 177px;
          }
        }
      }
    }
    table {
      table-layout: fixed;
      border: 0;
      width: 1000px;
      th {
        height: 42px;
      }
      tr {
        td {
          width: 165px;
          height: 40px;
          border-bottom: 1px solid rgb(240, 244, 248);
        }
      }
    }
  }
  .addShadow {
    box-shadow: 0 0 0 #fff, 3px 3px 10px rgba(204, 204, 204, 0.3), 0 0 0 #fff,
      0 0 0 #fff;
  }
}
</style>

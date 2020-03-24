<template>
  <div class="home">
    <div class="inputWrapper">
      <div class="dateItem">
        <!-- <van-field style="border-bottom:1px solid #ccc" v-model="value" placeholder="请输入用户名" />
        <br> -->
        <input class="dateInput" type="text" :value="startTime">
        <span></span>
        <input class="dateInput" type="text" :value="endTime">
      </div>
      <div class="selectItem">
        <select :value=sizeItem>
          <option v-for="item in 3" :key="item">{{item}}</option>
        </select>
        <i></i>
      </div>
      <div class="btnItem">
        <input type="button" value="查询" @click=showPop>
        <input type="button" value="保存">
        <div class="round" v-for="item in 2" :key="item"></div>
      </div>
      <!-- <van-datetime-picker
       title="请选择开始时间"
        v-model="currentDate"
        type="date"
      /> -->
    </div>
    
    <!-- <i class="van-icon van-icon-success" style="width:15px;background:#1989fa;color:#fff"></i>  -->
    <!-- <div class="wrapper" style="position:relative">
    <div class="tableBox" >
      <div class="showTD">
        <table style="width:80px">
          <thead><th>{{title[0]}}</th></thead>
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
        <thead>
          <th v-for="item in title" :key="item">{{item}}</th>
        </thead>
        <tbody>
            <tr v-for="item in 30" :key="item">
              <td v-for="item in 7" :key="item">{{item}}</td>
            </tr>
        </tbody>
        </table>
      </div>
      <table id="tab" cellspacing="0" >
        <thead>
          <th v-for="item in title" :key="item">{{item}}</th>
        </thead>
        <tbody>
            <tr v-for="item in 30" :key="item">
              <td v-for="item in 7" :key="item">{{item}}</td>
            </tr>
        </tbody>
      </table>
    </div>
    </div> -->
    <div style="height:72vh;">
      <Ttable></Ttable>
    </div>
    <Detail :show.sync="showDetail" @closePop='toClosePop'></Detail>
  </div>
</template>

<script>
// @ is an alias to /src
import Ttable from '@/views/table.vue'
import Detail from '@/views/detailAbout.vue'
export default {
  name: 'Home',
  components: {
    Ttable,Detail
  },
  data(){
    return{
      startTime:this.dateFormat(new Date()),
      endTime:this.dateFormat(new Date()),
      currentDate:new Date(),
      sizeItem:2,
      radio:['1','2'],
      showDetail:true,
      // isReady:false
    }
  },
  mounted(){
    this.isReady=true
  },
  created(){

  },
  methods:{
    dateFormat(val){
      return `${val.getFullYear()}-${val.getMonth()+1}-${val.getDate()}`
    },
    toClosePop(){
      this.showDetail=false
      console.log(123)
      console.log(this.showDetail)
    },
    showPop(){
        this.showDetail=true
        console.log(234)
        console.log(this.showDetail)
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  height: 100vh;
  display: flex;
  flex-direction: column;
  .inputWrapper{
    height: 28vh;
    margin: 20px 4vw;
    box-shadow:0 0 18px #e1e6ec ;
    border-radius: 18px;
    overflow: hidden;
    .dateItem,.selectItem{
      margin: 10px 7vw;  
      border-bottom:2px solid rgb(242,242,242);
      display: flex;
      span{
        background: url('~@static/calendar.png') no-repeat;
        background-size:100%;
        width: 28px;
      }
      .dateInput{
        width: 40%;
        height:35px;
        border: none;
        font-weight: bold;
        &:first-child{
          padding-left: 20px;
        }
        &:last-of-type{
          text-align: right;
          padding-right: 20px;
        }
      }
      select{
        outline: none;
        user-select: none;
        height: 30px;
        width: 100%;
        border: none;
        padding:0 20px;
        appearance: none;
        font-weight: bold;

      }
      i{
        width: 10px;
        height: 10px;
        border: 1px solid #ccc;
        border-left: none;
        border-top: none;
        transform: rotate(45deg);
        margin-right: 20px;
      }
    }
    .btnItem{
      margin: 0 7vw;  
      position: relative;
      input[type='button']{
        appearance: none;
        display: inline-block;
        flex: 1;
        background:rgb(46,142,247);
        border:none;
        color:#fff;
        height: 40px;
        width: 50%;
        margin: 10px 0;
        border-radius: 5px;
        &:first-child{
          border-right: 1px dashed rgba(248, 249, 250,.3);
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        &:last-of-type{
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;

        }
      }
      .round{
        border-radius: 50%;
        height: 8px;
        width: 8px;
        position: absolute;
        &:first-of-type{
          top: 5px;
          left:50%;
          background: #fff;
        }
        &:last-of-type{
          bottom: 5px;
          left:50%;
          background: #fff;
        }
      }
    }
  }
  Ttable{
    flex: 1;
  }
}  
 
</style>

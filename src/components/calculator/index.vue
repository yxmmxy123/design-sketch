<template>
  <div class="calculator">
        <div class="c_screen">
            <p v-model="content">{{content}}</p>
        </div>
        <div class="c_btn_wrapper">
            <div class="c_row" @click="btn_wrapper()">
                <button @click="click_Content('(')" class="c_func_btn">(</button>
                <button @click="click_Content(')')" class="c_func_btn">)</button>
                <button @click="click_Content('CE')" class="c_func_btn">CE</button>
                <button @click="click_Content('AC')" class="c_func_btn">AC</button>
            </div>
            <div class="c_row">
                <button @click="click_Content('7')">7</button>
                <button @click="click_Content('8')">8</button>
                <button @click="click_Content('9')">9</button>
                <button @click="click_Content('/')" class="c_func_btn">/</button>
            </div>
            <div class="c_row">
                <button @click="click_Content('4')">4</button>
                <button @click="click_Content('5')">5</button>
                <button @click="click_Content('6')">6</button>
                <button @click="click_Content('x')" class="c_func_btn">x</button>
            </div>
            <div class="c_row">
                <button @click="click_Content('1')">1</button>
                <button @click="click_Content('2')">2</button>
                <button @click="click_Content('3')">3</button>
                <button @click="click_Content('-')" class="c_func_btn">-</button>
            </div>
            <div class="c_row">
                <button @click="click_Content('0')">0</button>
                <button @click="click_Content('.')">.</button>
                <button @click="click_Content('=')" class="c_func_btn">=</button>
                <button @click="click_Content('+')" class="c_func_btn">+</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        content: '',
        count: 0,
        bOneDec: false,
        clickContent: ''
    //   msg: '欢迎来到白雪效果展'
    }
  },
  methods: {
      click_Content(text) {
          console.log(text)
          this.clickContent = text;
      },
    //   var btn_wrap = document.getElementsByClassName('c_btn_wrapper')[0], // 按钮容器
        // content = document.getElementsByTagName('p')[0], // 显示器内容
    //     count = 0, //记录显示屏上字符及数字个数
    //     bOneDec = false; //表示显示屏一个数字中是否已经有一个小数点的状态
        btn_wrapper() {
            // var target = e.target;
            // if(target.nodeName.toLowerCase() === 'button'){
                var btnType = this.clickContent;
                if(this.content == 'Math Error' && btnType != 'AC'){
                    console.log('=====000')
                    return;
                }
                if(btnType == 'AC'){
                    console.log('=====111')
                    this.bOneDec = false;
                    this.content = '0';
                    this.count = 1;
                }else if(btnType == 'CE'){
                    console.log('=====222')
                    if(this.content != ''){
                        if(this.content.length === 1){
                            this.content = '0';
                        }else{
                            this.content = this.content.slice(0,-1);
                        }
                        this.count--;
                    }
                }else if(btnType == '='){
                    console.log('=====333')
                    var text = this.content;
                    if(!text){
                        return;
                    }else{
                        text = text.replace(/x/g,'*');
                        var result;
                        try{
                            result = eval(text) + '';
                            if(result.search(/\./) > 0){
                                this.bOneDec = true;
                                if(result.split('.')[1].length > 5){
                                    result = (+result).toFixed(5);
                                }
                            }
                            this.content = result;
                            this.count = result.length;
                        }catch(e){
                            this.content = 'Math Error';
                        }
                    }
                }else if(btnType == '(' || btnType == ')'){
                    console.log('=====444')
                    if(isNaN(+btnType) && btnType != '.'){
                        this.bOneDec = false;
                    }
                    if(btnType == '.'){
                        if(this.bOneDec){
                            return;
                        }
                        this.bOneDec = true;
                    }
                    if(this.content == '0' && (!isNaN(+btnType) ||
                    btnType == '(' || btnType == ')')){
                        content.innerText = '';
                    }
                    this.content += btnType;
                    if(this.count++ >= 44){
                        alert('输入的字符过多');
                    }
                } else {
                    
                } 
            // }
        }
    
  }
}
</script>

<style scoped>
    .calculator {
        width: 326px;
        height: 460px;
        margin: 250px auto;
        background-color: #368590;
        border-radius: 5px;
        box-shadow: 0 2px 15px black;
        overflow: hidden;
    }
    .calculator .c_screen {
        position: relative;
        width: 326px;
        height: 110px;
        background-color: #96a4c2;
        border-radius: 5px;
        box-shadow: inherit;
    }
    .calculator .c_screen>p {
        position: absolute;
        top: 50%;
        margin-top: -28px;
        width: 236px;
        text-align: center;
        word-break: break-all;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        padding: 10px 45px;
    }
    .calculator .c_row {
        margin: 0 23px;
    }
    button {
        cursor: pointer;
        width: 60px;
        height: 45px;
        margin: 20px 2px 0;
        border: 0px;
        border-radius: 5px;
        color: #fff;
        background-color: #2b2f5b;
        outline: none;
    }
    button::selection {
        color: #fff;
    }
    button:active {
        box-shadow: 0 0 5px 5px dodgerblue;
    }
    .c_func_btn {
        background: linear-gradient(to bottom, rgba(252,156,23,1) 0%, rgba(247,126,27,1) 100%);
    }
</style>

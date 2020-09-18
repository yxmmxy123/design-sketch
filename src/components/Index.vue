<template>
  <div class="layer">
      <div class="layer-left">
          <div class="layer-left-top">
              <ul>
                  
              </ul>
          </div>
          <div class="layer-left-bottom">
          
          </div>
      </div>
      <div class="layer-center">
          <div class="layer-center-top">
              
          </div>
          <div class="layer-center-bottom">
          
          </div>
      </div>
      <div class="layer-right">
          <div class="layer-right-top">
              
          </div>
          <div class="layer-right-bottom">
          
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
    .layer {
        width: 100%;
        height: 100%;
        display: flex;
    }
    .layer-left, .layer-center, .layer-right {
        width: 33.33%;
    }
    .layer-left div, .layer-center div, .layer-right div {
        min-height: 50vh;
        max-height: 50vh;
        overflow-y: scroll;
        
    }
    .layer-left-top {
        border-right: 10px solid #006400;
        border-bottom: 10px solid #006400;
    }
    .layer-left-bottom {
        border-top: 10px solid #006400;
        border-right: 10px solid #006400;
    }
    .layer-center-top {
        border-left: 10px solid #006400;
        border-right: 10px solid #006400;
        border-bottom: 10px solid #006400;
    }
    .layer-center-bottom {
        border-left: 10px solid #006400;
        border-right: 10px solid #006400;
        border-top: 10px solid #006400;
    }
    .layer-right-top {
        border-left: 10px solid #006400;
        border-bottom: 10px solid #006400;
    }
    .layer-right-bottom {
        border-top: 10px solid #006400;
        border-left: 10px solid #006400;
    }
</style>

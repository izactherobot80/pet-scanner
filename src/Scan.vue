<template>
  <div>
    <h1 class="scan">Scan {{ petname }}</h1>
    <a class="start btn" @click="showProgress" >START</a>
    
    <div class="ko-progress-circle" data-progress="0">
      <div class="ko-circle">
          <div class="full ko-progress-circle__slice">
              <div class="ko-progress-circle__fill"></div>
          </div>
          <div class="ko-progress-circle__slice">
              <div class="ko-progress-circle__fill"></div>
              <div class="ko-progress-circle__fill ko-progress-circle__bar"></div>
          </div>
      </div>
      <div class="ko-progress-circle__overlay"><span></span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scan',
  props:['petname','ailment'],
  methods : {
    showProgress () {
      let vm = this.$router;
      $('.start').fadeOut(function(){
        $('.ko-progress-circle').fadeIn(function(){
          $('.scan').text($('.scan').text().replace('Scan', 'Scanning'));
          for(var i = 0; i <= 100; i++){
            (function(i) {
                setTimeout(function(){
                  $('.ko-progress-circle').attr('data-progress',i);
                  $('.ko-progress-circle__overlay span').text(i + '%');
                  if(i == 100){setTimeout(function(){vm.push('/diagnosis');},1000);}
                }, 100 * i);
            })(i);
          }
        });
      });    
    }  
  }
}
</script>
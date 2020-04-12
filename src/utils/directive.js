import Vue from 'vue'
import Swiper from 'swiper'
// ��װ���Զ���ָ�� v-swiper
Vue.directive('swiper', {
  inserted (el, binding, vnode) {
    // �������һ��Ԫ�ز�������ˣ��ٽ�����һ��ʵ���������Ϳ�����
    if (binding.value.current === binding.value.length - 1) {
      new Swiper('.' + binding.value.swipe, { // Ĭ��swiperִ��3�Σ���Ϊ������3��swiper-slide����ʵdom
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
})

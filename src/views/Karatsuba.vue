<template>
  <div class="opening">
    <div class="title">
      <h1>Karatsuba</h1>
      <p>
        Karatsuba multiplication algorithm is used to improve efficiency in
        multiplying numbers. Implementing this algorithm reduces the time
        complexity of the naive multiplication algorithm from O(n<sup>2</sup>)
        to O(n<sup>1.585</sup>). This is major improvement especially when
        multiplying to very large numbers.
      </p>
    </div>
    <div class="visualizer">
      <KaratsubaVisualizer />
    </div>
    <div class="explanation">
      <KaratsubaExplanation />
    </div>
    <div class="source-code">
      <KaratsubaCode />
    </div>
  </div>
</template>

<script>
import KaratsubaCode from '@/components/KaratsubaCode.vue';
import KaratsubaVisualizer from '@/components/KaratsubaVisualizer.vue';
import KaratsubaExplanation from '@/components/KaratsubaExplanation.vue';

export default {
  name: 'Karatsuba',
  components: { KaratsubaCode, KaratsubaVisualizer, KaratsubaExplanation }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <pre><code class="language-python">print("HELLO")</code></pre>
    <pre><code class="language-css">p { color: red }</code></pre>
  </div>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-python';

export default {
  name: 'KaratsubaCode',
  mounted() {
    Prism.highlightAll();
  }
};
</script>

<style lang="scss" scoped></style>

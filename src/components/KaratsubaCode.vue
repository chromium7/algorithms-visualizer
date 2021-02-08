<template>
  <div class="source-code">
    <h2>Source Code</h2>
    <div class="container">
      <h4>Python</h4>
      <div class="code-box">
        <pre><code class="language-python">def karatsuba(x, y):
      # Recursion base case
      if len(str(x)) == 1 or len(str(y)) == 1:
        return x*y
      else:
        # Find mid index
        m = max(len(str(x)), len(str(y)))
        m2 = 10 * (m // 2)

        a = x // m2
        b = x % m2
        c = y // m2
        d = y % m2
        ab = a + b
        cd = c + d
        
        # Recursive calls
        z0 = karatsuba(b, d)
        z1 = karatsuba(ab, cd)
        z2 = karatsuba(a, c)
        return (10**(2*m2) * z2) + (10**(m2) * (z1-z2-z0)) + z0</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';

export default {
  name: 'KaratsubaCode',
  mounted() {
    Prism.highlightAll();
  }
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
.code-box {
  margin: auto;
  width: max-content;
}
</style>

<template>
  <div class="library">
    <div class="title">
      <h1>Library</h1>
      <p>
        Here are the collections of available algorithm visualizers. To learn
        more than what is posted here, head to the resources page.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Library'
};
</script>

<style lang="scss" scoped>
.library {
  margin: 4em 5%;
  .title {
    color: v('dark-black');
    max-width: 500px;

    h1 {
      font-size: 2.6rem;
      letter-spacing: 0.15rem;
    }
  }
}
</style>

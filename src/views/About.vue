<template>
  <div class="about">
    <div class="title">
      <h1>About Algorithms Visualizer</h1>
      <p>
        Some story that you might want to hear about this site.
      </p>
    </div>
    <section>
      <h2>The Story behind Algorithms Visualizer</h2>
      <div class="content">
        <img src="@/assets/about-logo.png" alt="" />
        <p>
          I enjoy learning algorithms. I think it keeps my brain sharp and
          prepare me for future technical interviews. However, learning a new
          concept can be challenging and I had to go through a lot of books and
          youtube videos to really understand some algorithms. I noticed that
          following the algorithm step by step is a big help towards
          understanding them. Therefore I really appreciate the visualization of
          algorithms.
          <br />
          There are a lot of algorithms visualizer out there. However a lot of
          them looked really intimidating with a lot of buttons and inputs and
          stuffs. I find them not quite user friendly especially for beginners
          who want to touch that specific concept. Thus, I created this project
          with a simple and minimalistic design, so that user don’t need to
          learn how to use the site before jumping into the algorithms.
          <br />
          Furthermore, this project also force me to learn more and practice my
          front-end development skills.
        </p>
      </div>
    </section>
    <section>
      <h2>Development Process</h2>
      <div class="content reverse">
        <img src="#" alt="#" />
        <p>
          The development of this project begin with prototyping followed by
          design, which both are done using Figma. These two components can be
          seen in the picture shown in this section.
          <br />
          The framework used for this website is Vue.js mainly because of my
          preference of it over React or Angular.
          <br />
          This web app will be deployed in Heroku using Express.js.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
};
</script>

<style lang="scss" scoped>
.about {
  margin: 4em 5%;
  section {
    h2 {
      text-align: center;
      margin-bottom: 1.6em;
    }

    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      &.reverse {
        flex-direction: row-reverse;
      }

      img {
        width: 40vw;
      }

      p {
        padding-top: 1em;
        width: 40vw;
      }
    }
  }
}
</style>

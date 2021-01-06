<template>
  <footer>
    <div class="left">
      <h1>Got a feedback?</h1>
      <h3>Send me an email.</h3>
      <p>
        <a href="mailto:christofersaputra29@gmail.com">
          <font-awesome-icon :icon="['fas', 'envelope']" /> :
          christofersaputra29@gmail.com
        </a>
      </p>
    </div>
    <div class="right">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/">About</router-link></li>
        <li><router-link to="/">Library</router-link></li>
        <li><router-link to="/">Resources</router-link></li>
        <li><router-link to="/">Source code</router-link></li>
      </ul>
    </div>
    <div class="contact">
      <ul>
        <li>
          <a href="https://github.com/chromium7">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/chromium_se/">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/christofer-saputra-722b1b186/">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li>
          <a href="https://chromium7.github.io/chromium7/">
            <font-awesome-icon :icon="['fas', 'link']" />
          </a>
        </li>
      </ul>
      <p>@Chromium7 2021 - Algorithms Visualizer</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss" scoped>
footer {
  height: 400px;
  background: v(dark-tertiary);
  color: v(light-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 40px 5%;

  .left {
    h1,
    h3 {
      font-weight: 500;
    }
    p {
      margin-top: 1.2em;
      margin-bottom: 60px;
    }
  }

  .right {
    text-align: right;

    ul {
      list-style-type: none;

      li {
        margin-bottom: 0.4em;
      }
    }
  }

  .contact {
    clear: both;
    width: 50%;
    margin: auto;
    text-align: center;
    border-top: 1px solid v(light-primary);

    ul {
      display: flex;
      list-style-type: none;
      justify-content: space-evenly;
      margin: 2em;

      li {
        color: v(light-primary);
        font-size: 2em;
      }
    }
  }
}
</style>

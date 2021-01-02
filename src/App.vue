<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="body">
      <router-view/>
      <div class="push"></div>
    </div>
    <footer>
      <div class="left">
        <h1>Got a feedback?</h1>
        <h3>Send me an email.</h3>
        <p>
          <a href="mailto:christofersaputra29@gmail.com">
            <font-awesome-icon :icon="['fas', 'envelope']"/> : christofersaputra29@gmail.com
          </a>
        </p>
      </div>
      <div class="right">
        <ul>
          <li>About</li>
          <li>Library</li>
          <li>Source code</li>
          <li>Resources</li>
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
  </div>
</template>

<style lang="scss">
#nav {

}

.body {
  min-height: 100%;
  padding: 0 5%;

  /* Equal to height of footer */
  margin-bottom: -400px;
}

.push, footer {
  height: 400px;
}

footer {
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

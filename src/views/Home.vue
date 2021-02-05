<template>
  <div class="home">
    <div class="landing">
      <div class="bg">
        <img src="@/assets/bg-code-1.png" />
        <img src="@/assets/bg-code-2.png" />
        <img src="@/assets/bg-code-3.png" />
        <div class="shade-black"></div>
      </div>
      <div class="text">
        <div class="title">Algorithms Visualizer</div>
        <div class="subtitle">
          <div class="first">Ace your exams or interviews</div>
          <div class="second">Algorithms made fun and easy</div>
        </div>
        <router-link to="#" class="button"
          >Browse the Library &#187;</router-link
        >
      </div>
    </div>
    <div class="description">
      <section>
        <h2>Algorithms</h2>
        <div>
          Understanding and learning algorithms will help you build more
          efficient programs by understanding the big O notation and running
          time of your code. Furthermore, you will be enhance your intelligence
          and open up to higher creativity.
        </div>
      </section>
      <section>
        <h2>Clear Visualization</h2>
        <div>
          Some algorithms are more complex than others. I understand that seeing
          is a big part of learning. Thus, by creating an interactive
          visualization of how algorithms worked, I hope that people will see
          learning algorithms as an enjoyable activity rather than a hassle.
        </div>
      </section>
      <section>
        <h2>Sample Code</h2>
        <div>
          There would be pseudocode for each algorithm in this website. It is
          recommended that you build your own implementation of the algorithm in
          your favourite programming language, but I also give example source
          code that you can reveal when you need a reference.
        </div>
      </section>
    </div>
    <div class="explore">
      <div class="line"></div>
      <h2 class="title">
        Explore
        <router-link to="#" class="button">More &#187;</router-link>
      </h2>
      <div class="examples">
        <section>
          <img src="@/assets/karatsuba.png" alt="" />
          <h2>Karatsuba</h2>
          <div>
            The Karatsuba algorithm is a fast multiplication algorithm that uses
            a divide and conquer approach to multiply two numbers. Karatsuba
            reduces the time complexity of the naive multiplication algorithm
            from O(n<sup>2</sup>) to O(n<sup>1.585</sup>).
          </div>
        </section>
        <section>
          <img src="@/assets/merge_sort.png" alt="" />
          <h2>Merge Sort</h2>
          <div>
            Merge sort is a classic divide and conquer algorithm with a running
            time of O(<i>n</i> Log <i>n</i>). It has been around for a long time
            and it is a good start on you algorithm learning journey.
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
};
</script>

<style lang="scss" scoped>
.landing {
  position: relative;
  height: 75vh;

  .bg {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
      width: 33.333%;
    }

    .shade-black {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba($color: #000000, $alpha: 0.7);
    }
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .title {
      font-size: 2.6rem;
      letter-spacing: 0.15rem;
      color: v(light-primary);
    }

    .subtitle {
      margin-top: 1rem;
      font-size: 1.4rem;
      color: v(green-secondary);
    }

    .button {
      display: block;
      width: fit-content;
      margin: 1em auto;
      padding: 0.6em 2em;
      background: v(green-primary);
      color: v(dark-primary);
      transition: color 0.4s ease-in-out;

      &:hover {
        background: v(dark-secondary);
        color: v(light-tertiary);
      }
    }
  }
}

.description {
  margin: 4em 5%;
  display: flex;
  justify-content: space-between;

  section {
    width: 30%;

    div {
      margin-top: 1.6rem;
    }
  }
}

.explore {
  margin: 0 5% 3em;

  .line {
    margin: 0 auto 3em;
    width: 60%;
    border: 1px solid v(light-primary);
  }

  .title {
    text-align: center;
    color: v(dark-black);
    max-width: none;

    .button {
      font-size: 0.8rem;
      padding: 0.3rem 1rem;
      background: v(dark-primary);
      color: v(light-primary);
      border-radius: 10px;
      font-weight: normal;
    }
  }

  .examples {
    display: flex;
    justify-content: space-between;

    section {
      width: 45%;

      img {
        display: block;
        width: 60%;
        margin: 2rem auto;
      }

      h2 {
        text-align: center;
      }

      div {
        margin-top: 1rem;
      }
    }
  }
}
</style>

<template>
  <div class="library">
    <div class="title">
      <h1>Library</h1>
      <p>
        Here are the collections of available algorithm visualizers. To learn
        more than what is posted here, head to the resources page.
      </p>
    </div>
    <section>
      <h2>Divide and Conquer</h2>
      <div class="explanation">
        <p>
          Divide and conquer algorithms break down the problems into smaller
          subproblems. You can think of divide and conquer of having 3 parts:
        </p>
        <ol>
          <li>
            <strong>Divide</strong> the problem into a number of subproblems
            that are smaller instances of the same problem.
          </li>
          <li>
            <strong>Conquer</strong> the subproblems by solving them
            recursively. If they are small enough solve the subproblems as base
            cases.
          </li>
          <li>
            <strong>Combine</strong> the solution to subproblems into the
            solution for the original problem.
          </li>
        </ol>
      </div>
      <div class="entries">
        <div class="entry" v-for="(entry, index) in divandconq" :key="index">
          <img :src="entry.thumbnail" :alt="entry.name" />
          <p>{{ entry.name }}</p>
        </div>
      </div>
    </section>
    <section>
      <h2>Dynamic Programming</h2>
      <div class="explanation">
        <p>
          Much like Divide and Conquer, Dynamic Programming (DP) is an
          algorithmic technique for solving an optimization problem by breaking
          it down into simpler subproblems and utilizing the fact that the
          optimal solution to the overall problem depends upon the optimal
          solution to its subproblems.
          <br />
          Many also describe DP as a careful brute force strategy, which try
          every possible choice while keeping in mind to not repeat the same
          operation. This technique of storing the results of already solved
          subproblems is called Memoization.
        </p>
      </div>
      <div class="entries">
        <div class="entry" v-for="(entry, index) in dynprog" :key="index">
          <img :src="entry.thumbnail" :alt="entry.name" />
          <p>{{ entry.name }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Library',
  data: function() {
    return {
      divandconq: [
        { name: 'Merge Sort', thumbnail: '#', link: 'merge_sort' },
        { name: 'Karatsuba', thumbnail: '#', link: 'karatsuba' },
        { name: 'Minimax', thumbnail: '#', link: 'minimax' }
      ],
      dynprog: [
        { name: 'Merge Sort', thumbnail: '#', link: 'merge_sort' },
        { name: 'Karatsuba', thumbnail: '#', link: 'merge_sort' },
        { name: 'Minimax', thumbnail: '#', link: 'merge_sort' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.library {
  margin: 4em 5%;

  section {
    h2 {
      border-bottom: 1px solid v(dark-secondary);
      width: fit-content;
      padding-bottom: 0.6em;
      padding-right: 2.6em;
      margin-bottom: 1em;
    }
    .explanation {
      max-width: 600px;

      ol {
        margin-top: 1em;

        li {
          margin-left: 2em;
          padding-left: 0.8em;
        }
      }
    }

    .entries {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .entry {
        width: 400px;

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>

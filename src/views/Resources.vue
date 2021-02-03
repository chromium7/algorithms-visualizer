<template>
  <div class="resources">
    <div class="title">
      <h1>Resources</h1>
      <p>
        The following resources provide the inspirations for this site. They are
        also the bases on which most of the algorithms source code here are
        implemented.
      </p>
    </div>
    <section>
      <h2>Books</h2>
      <div class="book-container">
        <div class="entry">
          <img src="@/assets/part1.jpg" alt="Algorithms Illuminated Part 1" />
          <p>Algorithms Illuminated: The Basics</p>
        </div>
        <div class="entry">
          <img src="@/assets/part2.jpg" alt="Algorithms Illuminated Part 2" />
          <p>Algorithms Illuminated: Graph Algorithms and Data Structure</p>
        </div>
        <div class="entry">
          <img src="@/assets/part3.jpg" alt="Algorithms Illuminated Part 3" />
          <p>
            Algorithms Illuminated: Greedy Algorithms and Dynamic Programming
          </p>
        </div>
        <div class="entry">
          <img src="@/assets/part4.jpg" alt="Algorithms Illuminated Part 4" />
          <p>Algorithms Illuminated: Algorithms for NP-Hard Problems</p>
        </div>
        <div class="entry">
          <img
            src="@/assets/cracking.jpg"
            alt="Cracking the coding interview"
          />
          <p>Cracking the Coding Interview</p>
        </div>
      </div>
    </section>
    <section>
      <h2>Youtube</h2>
      <div class="channel-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/playlist?list=PLhQjrBD2T382_R182iC2gNZI9HzWFMC_8"
          frameborder="0"
          allow="encrypted-media"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/playlist?list=PLhQjrBD2T382Nz7z1AEXmioc27axa19Kv"
          frameborder="0"
          allow="encrypted-media"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/playlist?list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb"
          frameborder="0"
          allow="encrypted-media"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/playlist?list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp"
          frameborder="0"
          allow="encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Resources'
};
</script>

<style lang="scss" scoped>
.resources {
  margin: 4em 5%;

  .title {
    color: v('dark-black');
    max-width: 500px;

    h1 {
      font-size: 2.6rem;
      letter-spacing: 0.15rem;
    }
  }

  section {
    margin: 3.6em 0 0;
  }

  .book-container,
  .channel-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .entry,
    iframe {
      margin: 2em 0 0;
    }

    .entry {
      flex: 1;

      img {
        max-width: 250px;
        transition: transform 0.2s ease;

        &:hover {
          transform: scale(1.07);
        }
      }
    }
  }
}
</style>

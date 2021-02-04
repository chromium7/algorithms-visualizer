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
        <div class="entry" v-for="(book, index) in books" :key="index">
          <img :src="book.image" :alt="book.name" />
          <p>{{ book.name }}</p>
        </div>
      </div>
    </section>
    <section>
      <h2>Youtube</h2>
      <div class="channel-container">
        <div class="entry" v-for="(playlist, index) in playlists" :key="index">
          <iframe
            width="560"
            height="315"
            :src="playlist.link"
            frameborder="0"
            allow="encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Resources',
  data: function() {
    return {
      books: [
        {
          name: 'Algorithms Illuminated: The Basics',
          image: require('../assets/part1.jpg')
        },
        {
          name: 'Algorithms Illuminated: Graph Algorithms and Data Structure',
          image: require('../assets/part2.jpg')
        },
        {
          name:
            'Algorithms Illuminated: Greedy Algorithms and Dynamic Programming',
          image: require('../assets/part3.jpg')
        },
        {
          name: 'Algorithms Illuminated: Algorithms for NP-Hard Problems',
          image: require('../assets/part4.jpg')
        },
        {
          name: 'Cracking the Coding Interview',
          image: require('../assets/cracking.jpg')
        }
      ],
      playlists: [
        {
          name: 'Harvard CS50 Introduction to Computer Science',
          link:
            'https://www.youtube.com/embed/playlist?list=PLhQjrBD2T382_R182iC2gNZI9HzWFMC_8'
        },
        {
          name: 'Harvard CS50 AI Introduction to Artificial Intelligence',
          link:
            'https://www.youtube.com/embed/playlist?list=PLhQjrBD2T382Nz7z1AEXmioc27axa19Kv'
        },
        {
          name: 'MIT 6.006 Introduction to Algorithms',
          link:
            'https://www.youtube.com/embed/playlist?list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb'
        },
        {
          name: 'MIT 6.046J Design and Analysis of Algorithms',
          link:
            'https://www.youtube.com/embed/playlist?list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp'
        }
      ]
    };
  }
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

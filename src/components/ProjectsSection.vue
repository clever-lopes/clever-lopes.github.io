<script setup lang="ts"></script>
<template>
  <section>
    <h1>Main Projects</h1>
    <h2>Pinned Projects on github</h2>
    <li class="projects_list">
      <ol>
        <div>
          <div class="card loading">
            <span>Project 1</span>
          </div>
          <p>Title</p>
          <p>Description</p>
        </div>
      </ol>
      <ol>
        <div>
          <div class="card loading">
            <span>Project 2</span>
          </div>
          <p>Title</p>
          <p>Description</p>
        </div>
      </ol>
      <ol>
        <div>
          <div class="card loading">
            <span>Project 3</span>
          </div>
          <p>Title</p>
          <p>Description</p>
        </div>
      </ol>
    </li>
  </section>
</template>
<style scoped>
.loading {
  background-color: lightgray;
}

.card {
  width: 4rem;
  height: 4rem;
}

.projects_list {
  text-decoration: none;
  display: flex;
}
</style>

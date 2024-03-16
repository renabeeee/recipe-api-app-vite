<template>
  <div>
    <div class="header">
      <div class="logo-container">
        <img class="logo" src="https://cookable-api.s3.us-west-1.amazonaws.com/Cookable.svg" alt="Logo">
      </div>
      <div class="user-info">
        <p>Welcome back, Leah!</p>
        <img src="https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg" alt="User Avatar">
      </div>
    </div>

    <div class="key">
      <p>
        <div class="key-red-box">
          <img src="https://cookable-api.s3.us-west-1.amazonaws.com/blue-box.svg" alt="Blue Box" width="14" height="14" style="margin-right: 5px;">
          Add ingredient
        </div>
        <img src="https://cookable-api.s3.us-west-1.amazonaws.com/red-box.svg" alt="Red Box" width="14" height="14" style="margin-right: 5px; font-size: 10px;">
        Remove ingredient
      </p>
    </div>

    <h1>Here's what's in your pantry: </h1>
    
    <div class="container">
      <div class="pantry-column" v-for="category in pantryCategories" :key="category.title">
        <h2>{{ category.title }}</h2>
        <ul class="pantry-list">
          <li class="pantry-item" v-for="item in category.items" :key="item.id">
            <label class="checkbox-label" :for="item.id">
              <span class="fill-in-box" :class="{ 'blue': item.checked, 'red': !item.checked }"></span>
              <input type="checkbox" class="checkbox-input" :id="item.id" v-model="item.checked">
              {{ item.name }}
            </label>
          </li>
        </ul>
      </div>
    </div>

    <div class="update-pantry-button">
      <button id="update-pantry" @click="updatePantry">Update pantry</button>
    </div>

    <div class="generate-recipes-button">
      <button id="generate-recipes" @click="generateRecipes">
        <img src="https://cookable-api.s3.us-west-1.amazonaws.com/Generate-button-stars.png" alt="Generate Icon">
        <div class="text">Generate recipes</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pantryCategories: [
        {
          title: 'Baking and Spices',
          items: [
            { id: 'baking-powder', name: 'Baking powder', checked: false },
            { id: 'baking-soda', name: 'Baking soda', checked: false },
            // Add more items here...
          ]
        },
        {
          title: 'Proteins',
          items: [
            { id: 'eggs', name: 'Eggs', checked: false },
            { id: 'ground-beef', name: 'Ground beef', checked: false },
          ]
        },
      ]
    };
  },
  methods: {
    updatePantry() {
      // Implement update pantry functionality
    },
    generateRecipes() {
      // Implement generate recipes functionality
    }
  }
};
</script>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
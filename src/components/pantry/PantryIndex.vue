<template>
  <div>
    <Header />
  </div>
  <div class="index">
    <br />
    <p>Here is a list of all the ingredients you have in your pantry:</p>
  </div>

  <div class="container">
    <div class="pantry-column">
      <h5>Baking and Spices</h5>
      <ul class="pantry-list" id="baking-list">
        <li class="pantry-item">
          <label class="checkbox-label" for="baking-powder">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="baking-powder" />
            Baking powder
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="baking-soda">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="baking-soda" />
            Baking soda
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="brown-sugar">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="brown-sugar" />
            Brown sugar
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="cocoa-powder">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="cocoa-powder" />
            Cocoa powder
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="granulated-sugar">
            <span class="fill-in-box"></span>
            <input
              type="checkbox"
              class="checkbox-input"
              id="granulated-sugar"
            />
            Granulated sugar
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="italian-seasoning">
            <span class="fill-in-box"></span>
            <input
              type="checkbox"
              class="checkbox-input"
              id="italian-seasoning"
            />
            Italian seasoning
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="ketchup">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="ketchup" />
            Ketchup
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="pepper">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="pepper" />
            Pepper
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="salt">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="salt" />
            Salt
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="tomato-sauce">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="tomato-sauce" />
            Tomato sauce
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="tumeric">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="tumeric" />
            Tumeric
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="vanilla-extract">
            <span class="fill-in-box"></span>
            <input
              type="checkbox"
              class="checkbox-input"
              id="vanilla-extract"
            />
            Vanilla extract
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="vinegar">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="vinegar" />
            Vinegar
          </label>
        </li>
      </ul>
    </div>
    <div class="pantry-column">
      <h5>Proteins</h5>
      <ul>
        <li class="pantry-item">
          <label class="checkbox-label" for="eggs">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="eggs" />
            Eggs
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="ground-beef">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="ground-beef" />
            Ground beef
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="milk">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="milk" />
            Milk
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="cheese">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="cheese" />
            Cheese
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="collagen-powder">
            <span class="fill-in-box"></span>
            <input
              type="checkbox"
              class="checkbox-input"
              id="collagen-powder"
            />
            Collagen powder
          </label>
        </li>
      </ul>
      <h5>Fruits</h5>
      <ul class="pantry-list" id="fruits-list">
        <li class="pantry-item">
          <label class="checkbox-label" for="blueberries">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="blueberries" />
            Blueberries
          </label>
        </li>
      </ul>
      <h5>Fats and Oils</h5>
      <ul class="pantry-list" id="fats-oils-list">
        <li class="pantry-item">
          <label class="checkbox-label" for="butter">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="butter" />
            Butter (salted or unsalted)
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="olive-oil">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="olive-oil" />
            Olive oil
          </label>
        </li>
      </ul>
    </div>
    <div class="pantry-column">
      <h5>Vegetables</h5>
      <ul>
        <li class="pantry-item">
          <label class="checkbox-label" for="bell-peppers">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="bell-peppers" />
            Bell peppers
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="brown-rice">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="brown-rice" />
            Brown rice
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="carrot">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="carrot" />
            Carrot
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="garlic">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="garlic" />
            Garlic
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="green-beans">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="green-beans" />
            Green beans
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="kale">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="kale" />
            Kale
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="mixed-greens">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="mixed-greens" />
            Mixed greens
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="onion">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="onion" />
            Onion
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="peas">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="peas" />
            Peas
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="russet-potato">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="russet-potato" />
            Russet potato
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="sweet-potato">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="sweet-potato" />
            Sweet potato
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="wild-rice">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="wild-rice" />
            Wild rice
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="zucchini">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="zucchini" />
            Zucchini
          </label>
        </li>
      </ul>
    </div>
    <div class="pantry-column">
      <h5>Grains and Starches</h5>
      <ul>
        <li class="pantry-item">
          <label class="checkbox-label" for="all-purpose-flour">
            <span class="fill-in-box"></span>
            <input
              type="checkbox"
              class="checkbox-input"
              id="all-purpose-flour"
            />
            All-purpose flour
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="bread-crumbs">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="bread-crumbs" />
            Bread crumbs
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="corn">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="corn" />
            Corn
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="jasmine-rice">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="jasmine-rice" />
            Jasmine rice
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="noodles">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="noodles" />
            Noodles
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label" for="rice-flour">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" id="rice-flour" />
            Rice flour
          </label>
        </li>
      </ul>
    </div>
    <div style="clear: both"></div>
  </div>
  <div class="update-pantry-button">
    <button id="update-pantry">
      <img
        src="https://cookable-api.s3.us-west-1.amazonaws.com/Generate-button-stars.png"
        alt="Generate Icon"
      />
      Update pantry
    </button>
  </div>
  <div class="generate-recipes-button">
    <button id="generate-recipes">
      <img
        src="https://cookable-api.s3.us-west-1.amazonaws.com/Generate-button-stars.png"
        alt="Generate Icon"
      />
      <div class="text">Generate recipes</div>
    </button>
  </div>
</template>

<script>
import Header from "/Users/serenagreen/recipe-api-app-vite/src/components/header/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
.container {
  background-color: #fafafa;
  border-radius: 5px;
  padding: 30px;
  overflow: hidden;
  margin-bottom: 20px;
}

.pantry-column {
  width: calc(25% - 20px);
  float: left;
  margin-bottom: 40px;
}

h1 {
  font-size: 22px;
  margin-left: 40px;
  margin-bottom: 40px;
}

h5 {
  margin-left: 20px;
  font-weight: bolder;
}
.pantry-item {
  list-style: none;
  margin-bottom: 10px;
  margin-top: 16px;
  margin-left: -60px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  margin-left: 40px;
  cursor: pointer;
}

.fill-in-box {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  border: 1px solid #d6d6d6;
  padding: 4px;
  background-color: transparent;
  margin-right: 8px;
}

.fill-in-box.blue {
  background-color: #4383ff;
}

.fill-in-box.red {
  background-color: #ec3e48;
}

.checkbox-input {
  display: none; /* Hide the default checkbox input */
}

.update-pantry-button,
.generate-recipes-button {
  text-align: center;
  margin: 0 auto 20px;
}

.update-pantry-button button,
.generate-recipes-button button {
  display: inline-block;
  font-family: Inter, sans-serif;
  font-weight: bold;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #4383ff;
  cursor: pointer;
  position: relative;
}

.update-pantry-button button img,
.generate-recipes-button button img {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
}
.generate-recipes-button button {
  background-color: #8000a0;
}

.key {
  margin-left: auto;
  margin-right: 40px;
  margin-top: 50px;
  text-align: left;
  float: right;
}

.index {
  max-width: 1280px;
  padding: 2rem;
}

p {
  color: #333;
  text-decoration: none;
  font-weight: bold;
}
</style>

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
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[2] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[3] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[4] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[5] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[6] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[7] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[8] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[0] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[1] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[9] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[10] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[11] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[12] }}
          </label>
        </li>
      </ul>
    </div>

    <div class="pantry-column">
      <h5>Proteins</h5>
      <ul>
        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[16] }}
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[17] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[13] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[14] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[15] }}
          </label>
        </li>
      </ul>

      <h5>Fruits</h5>
      <ul class="pantry-list" id="fruits-list">
        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[18] }}
          </label>
        </li>
      </ul>

      <h5>Fats and Oils</h5>
      <ul class="pantry-list" id="fats-oils-list">
        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[38] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[39] }}
          </label>
        </li>
      </ul>
    </div>

    <div class="pantry-column">
      <h5>Vegetables</h5>
      <ul>
        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[23] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[22] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[21] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[20] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[19] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[24] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[25] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[26] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[27] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[28] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[29] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[30] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[31] }}
          </label>
        </li>
      </ul>
    </div>
    <div class="pantry-column">
      <h5>Grains and Starches</h5>
      <ul>
        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[32] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[33] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[34] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[35] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[36] }}
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            {{ ingredientName[37] }}
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
      <div class="button-text">Update pantry</div>
    </button>
  </div>
  <div class="generate-recipes-button">
    <button id="generate-recipes">
      <img
        src="https://cookable-api.s3.us-west-1.amazonaws.com/Generate-button-stars.png"
        alt="Generate Icon"
      />
      <div class="button-text">Generate recipes</div>
    </button>
  </div>
</template>

<script>
import axios from "axios";

import Header from "/Users/serenagreen/recipe-api-app-vite/src/components/header/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },

  data() {
    return {
      ingredientName: [],
    };
  },

  mounted() {
    this.fetchIngredientInfo();
  },

  methods: {
    fetchIngredientInfo() {
      axios
        .get("http://localhost:3000/ingredients.json", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((response) => {
          if (Array.isArray(response.data) && response.data.length >= 6) {
            this.ingredientName = response.data.map(
              (ingredient) => ingredient.name
            );
          } else {
            console.error("Invalid response data format or insufficient data.");
          }
        })

        .catch((error) => {
          console.error("Error fetching ingredient info:", error);
        });
    },
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

.button-text {
  margin-left: 15px;
}

p {
  color: #333;
  text-decoration: none;
  font-weight: bold;
}
</style>

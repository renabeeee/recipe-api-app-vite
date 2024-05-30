<template>
  <div>
    <Header />
  </div>
  <div>
    <div class="card mb-4">
      <div class="card-header">
        <h2 class="card-title">Welcome to Your Pantry</h2>
      </div>
      <div class="card-body">
        <p class="card-text">
          Easily manage your ingredients and generate recipes based on what you
          have in stock. Check the boxes for the ingredients you currently have,
          and update your pantry or generate new recipes with a single click.
        </p>
      </div>
    </div>
  </div>
  <div class="index">
    <br />
    <!-- <div class="key">
      <div class="key-red-box">
        <img
          src="https://cookable-api.s3.us-west-1.amazonaws.com/blue-box.svg"
          alt="Blue Box"
          width="14"
          height="14"
          style="margin-right: 5px"
        />
        Add ingredient
      </div>
      <img
        src="https://cookable-api.s3.us-west-1.amazonaws.com/red-box.svg"
        alt="Red Box"
        width="14"
        height="14"
        style="margin-right: 5px"
      />
      Remove ingredient
    </div> -->
    <!-- <p>Here is a list of all the ingredients you have in your pantry:</p> -->
  </div>

  <div class="container">
    <div class="pantry-column">
      <h5>Baking and Spices</h5>

      <ul class="pantry-list" id="baking-list">
        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[2] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[3] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[4] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[5] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[6] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[7] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[8] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[0] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[1] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[9] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[10] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[11] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[12] }}
            </div>
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
            <div class="ingredient">
              {{ ingredientName[16] }}
            </div>
          </label>
        </li>
        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[17] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[13] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[14] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[15] }}
            </div>
          </label>
        </li>
      </ul>

      <div class="fruits-category">
        <h5>Fruits</h5>
      </div>
      <ul class="pantry-list" id="fruits-list">
        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[18] }}
            </div>
          </label>
        </li>
      </ul>

      <div class="fats-and-oils-category">
        <h5>Fats and Oils</h5>
      </div>
      <ul class="pantry-list" id="fats-oils-list">
        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[38] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[39] }}
            </div>
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
            <div class="ingredient">
              {{ ingredientName[23] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[22] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[21] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[20] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[19] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[24] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[25] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[26] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[27] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[28] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[29] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[30] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[31] }}
            </div>
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
            <div class="ingredient">
              {{ ingredientName[32] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[33] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[34] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[35] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[36] }}
            </div>
          </label>
        </li>

        <li class="pantry-item">
          <label class="checkbox-label">
            <span class="fill-in-box"></span>
            <input type="checkbox" class="checkbox-input" />
            <div class="ingredient">
              {{ ingredientName[37] }}
            </div>
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

.ingredient {
  margin-left: 8px;
}
.pantry-column {
  width: calc(25% - 20px);
  float: left;
  margin-bottom: 40px;
}

.fruits-category {
  margin-top: 30px;
}

.fats-and-oils-category {
  margin-top: 30px;
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

.checkbox-input:checked + .fill-in-box::before {
  content: "\2713";
  color: #fff;
  margin-left: 20px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  margin-left: 40px;
  cursor: pointer;
}

/* .fill-in-box {
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
  display: none;
} */

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
  margin-right: 50px;
  margin-top: 50px;
  text-align: left;
  float: right;
}

.index {
  max-width: 1280px;
  padding: 1rem;
}

.button-text {
  margin-left: 15px;
}

p {
  color: #333;
  text-decoration: none;
  font-weight: bold;
}
.card {
  border-radius: 0.75rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
}

.card-header {
  background-color: #4285f4;
  color: #fff;
  padding: 1rem;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}

.card-title {
  margin: 0;
  font-size: 1.25rem;
}

.card-body {
  padding: 1rem;
}
</style>

<script>
import categoriesApi from '../libs/apis/category'
import productsApi from '../libs/apis/product'
export default {
  data() {
    return {
      categories: [],
      products: []
    }
  },
  async mounted() {
    this.categories = await categoriesApi.categorizedItem();
    this.products = await productsApi.all();
    console.log(this.products);
    // this.prices = await pricesApi.findByPid("");

  },
  methods: {
    async onClick(categoryId, itemId){
      this.products = await productsApi.productByCatAndItem(categoryId, itemId)
    },
    toDashboard() {
      this.$router.push('/dashboard')
    }
  },
}
</script>

<template>
  <div>
    <div class="h-[70px] border border-black">
      <div class="flex flex-col text-center">
        <p class="text-2xl font-bold pt-3">លេខមួយ.com</p>
        <button class="text-blue-500 text-xl font-semibold" @click="toDashboard()">Dashboard</button>
      </div>
    </div>
    <div class="flex">
      <div class="w-[20%] border border-black pl-16 pt-6 flex justify-start text-xl">
        <ul class="w-[60%]">
          <li class="category list-disc" v-for="category in categories" :key="category?._id">
            <a href="#" @click="onClick(category._id, '')">
              <b>{{ category.name }}</b>
            </a>
            <ul>
              <li class="item list-disc list-inside" v-for="item in category?.items" :key="item._id">
                <a href="#" @click="onClick(category._id, item._id)">{{ item?.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="listing">
        <div v-for="product in products" :key="product._id">
          <div class="product">
            <div class="w-auto h-auto flex items-center justify-center">
              <img class="w-fit h-fit mt-3" :src="'http://localhost:3001/upload/'+product.imageUrl" alt="prodctImage">
            </div>
            <p class="w-full text-xl font-bold text-center">{{ product.title }}</p>
            <div class="price" v-for="price in product.prices" :key="price._id">
              <div class="shop">{{ price.source }}</div>
              <div class="value">$ <span class="text-blue-600">{{ price.price }}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sideBar {
  width: 30%;
  border: 1px solid black;
}

.listing {
  height: fit-content;
  padding: 12px;
  row-gap: 3px;
  column-gap: 3px;
  display: grid;
  border: 1px solid black;
  width: 80%;
  grid-template-columns: 25% 25% 25% 25%;
}

.category {
  text-align: left;
  padding-bottom: 10px;
}

.item {
  padding-top: 5px;
}

img {
  width: 100px;
}

.product {
  height: fit-content;
  padding: 10px;
  padding-bottom: 20px;
  border: 1px solid black;
}

.price {
  display: flex;
  width: inherit;
  margin-top: 10px;
}

.shop {
  width: 80%;
  text-align: left;
  padding-left: 10px;
  font-size: 13px;
}

.value {
  width: 50%;
  text-align: right;
  padding-right: 20px;
}

button {
  position: absolute;
  right: 20px;
  top: 14px;
  width: 120px;
  height: 40px;
  border: none;

}
</style>
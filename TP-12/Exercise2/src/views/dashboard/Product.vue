<script >
import categoryApi from "@/libs/apis/category";
import itemApi from "@/libs/apis/item";
import productApi from "@/libs/apis/product";
import priceApi from "@/libs/apis/price";
// import Button from "../../../../../../../TP08/vuejs-sample/src/components/Button.vue";

export default {
  // components: { Button },
  data() {
    return {
      categories: [],
      items: [],
      products: [],
      title: "",
      imageUrl: "",
      desc: "",
      categoryId: "",
      itemId: "",
      priceModalShown: false,
      selectedProduct: null,
      price: "",
      source: "",
    };
  },
  methods: {
    async onCreateProduct(e) {
      e.preventDefault();
      const { title, desc, itemId, categoryId, imageUrl,price } = this;
      const result = await productApi.create({
        title,
        desc,
        item: itemId,
        category: categoryId,
        imageUrl,
        price
      });
      if (!result) {
        alert(result.error);
        return;
      }

      this.products = await productApi.all();
      this.title =
        this.desc =
        this.categoryId =
        this.itemId =
        this.imageUrl = this.price="";
    },
    onSelectProduct(product) {
      this.priceModalShown = true;
      this.selectedProduct = product;
    },
    async onAddPrice(e) {
      e.preventDefault();
      const { price, source, selectedProduct } = this;
      const result = await priceApi.add({
        price,
        source,
        product: selectedProduct?._id,
      });
      
      console.log(result);
      if (result.error) {
        alert(result.error);
        return;
      }

      this.products = await productApi.all();
      this.price = this.source = this.selectedProduct = "";
    },
  },
  async mounted() {
    this.categories = await categoryApi.getCategoryItem();
    this.items = await itemApi.all();
    this.products = await productApi.all();
    console.log(this.products);
  },
};
</script>


<template >
  <main class="relative">
    <div class="bg-gray-500 text-white py-2 text-lg text-center">
      <h1>Products</h1>
    </div>
    <div class="py-2">
      <form @submit="onCreateProduct" method="post">
        <div class="flex flex-row py-2 px-2 space-x-1 bg-gray-100">
          <div>
            <input required v-model="title" type="text" placeholder="Title" />
          </div>
          <div>
            <label for="category">Choose a category:</label>
            <select
              required
              v-model="categoryId"
              name="category"
              class="px-2 mx-2 rounded-sm bg-green-100"
            >
              <option
                v-for="category in categories"
                :key="category.name"
                :value="category._id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
          <div>
            <label for="item">Choose an item:</label>
            <select
              required
              v-model="itemId"
              name="item"
              class="px-2 mx-2 rounded-sm bg-green-100"
            >
              <option v-for="item in items" :key="item.name" :value="item._id">
                {{ item.name }}
              </option>
            </select>
          </div>
          <div>
            <input
              required
              v-model="imageUrl"
              type="text"
              placeholder="ImageURL"
            />
          </div>
          <div>
            <input
              required
              v-model="desc"
              type="text"
              placeholder="Description"
            />
          </div>
          <div>
            <input
              required
              v-model="price"
              type="text"
              placeholder="price"
            />
          </div>
          <div>
            <button
              type="submit"
              class="bg-blue-500 text-white p-1 px-2 rounded-md"
            >
              Add new
            </button>
          </div>
        </div>
      </form>
    </div>
    <div>
      <table id="customers">
        <tr class="bg-gray-200">
          <th>Title</th>
          <th>Prices</th>
          <th>Category</th>
          <th>Item</th>
          <th>ImageURL</th>
          <th>Description</th>
          <th>Action</th>
        </tr>

        <tr v-for="product in products" :key="product.name">
          <td>{{ product.title }}</td>
          <td>
            <!-- <ul>
              <li v-for="price in product?.prices" :key="price._id">
                <span>{{ price.price }}$</span>
                <span>({{ price.source }})</span>
              </li>
            </ul> -->
            {{ product.price }}
          </td>
          <td>{{ product.category?.name }}</td>
          <td>{{ product.item?.name }}</td>
          <td>{{ product.imageUrl }}</td>
          <td>{{ product.desc }}</td>
          <td>
            <div class="flex flex-col space-y-2">
              <button class="hover:text-green-600 hover:font-bold">Edit</button>
              <button class="hover:text-green-600 hover:font-bold">
                Delete
              </button>
              <button
                v-on:click="onSelectProduct(product)"
                class="hover:text-green-600 hover:font-bold"
              >
                Add price
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div
      v-if="priceModalShown && selectedProduct"
      class="
        flex
        justify-center
        items-center
        absolute
        top-0
        left-0
        bottom-0
        right-0
      "
    >
      <div class="w-72 h-96 bg-white rounded-lg shadow-md">
        <form @submit="onAddPrice" method="post">
          <div class="h-full w-full flex flex-col">
            <div class="flex flex-grow-0 relative p-2 py-3">
              <div class="font-bold text-center w-full">
                {{ selectedProduct?.title }}
              </div>
            </div>
            <div class="w-full flex flex-grow p-2">
              <div class="w-full flex flex-col space-y-3">
                <div class="border">
                  <input
                    required
                    v-model="price"
                    class="w-full h-10 px-1"
                    type="number"
                    placeholder="Price"
                  />
                </div>
                <div class="border">
                  <input
                    required
                    v-model="source"
                    class="w-full h-10 px-1"
                    type="text"
                    placeholder="Source"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-grow-0 py-1 justify-center space-x-2">
              <button
                v-on:click="priceModalShown = false"
                class="
                  p-2
                  px-3
                  text-gray-500
                  rounded-md
                  cursor-pointer
                  border border-gray-100
                "
              >
                Cancel
              </button>
              <button
                type="submit"
                class="
                  bg-blue-500
                  p-2
                  px-3
                  text-white
                  rounded-md
                  cursor-pointer
                "
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}
</style>
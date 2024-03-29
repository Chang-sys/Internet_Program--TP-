var product = {
  async create(FormData) {
    const res = await fetch("http://localhost:3001/product/create", {
      method: "POST ",
      credentials: "include",
      // headers: {
      //   "Content-type": "multipart/form-data",
      // },
      body: FormData,z
    });

    const result = await res.json();
    return result;
  },
  async update(id, newProduct) {
    const res = await fetch(`http://localhost:3001/product/update/${id}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title: newProduct.title, category: newProduct.category, item: newProduct.item, imageUrl: newProduct.imageUrl, desc: newProduct.desc }),
    });

    const result = await res.json();
    return result;
  },
  async remove(id) {
    const res = await fetch(`http://localhost:3001/product/delete/${id}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
    });

    const result = await res.json();
    return result;
  },
  async all() {
    const res = await fetch("http://localhost:3001/product/all", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        Origin: "http://localhost:3000",
      },
    });

    const result = await res.json();
    if (!result?.length) return [];

    return result;
  },

  async findById(id) {
    const res = await fetch(`http://localhost:3001/product/id/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        Origin: "http://localhost:3000",
      },
    });

    const result = await res.json();
    if (!result) return "Check Your Req again";

    return result;
  },

  async productByCatAndItem(category, item) {
    const res = await fetch(`http://localhost:3001/product/all/${category}/${item}`, {

      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        Origin: "http://localhost:3000",
      },
    });

    const result = await res.json();
    if (!result?.length) return [];

    return result;
  }
}

export default product

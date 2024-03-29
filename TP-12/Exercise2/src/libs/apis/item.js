var item = {
    async create({ name, description, category }) {
      const res = await fetch("http://localhost:3001/item/create", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, description, category }),
      });
  
      const result = await res.json();
      return result;
    },
    async all() {
      const res = await fetch("http://localhost:3001/item/all", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });
  
      const result = await res.json();
  
      return result['data'];
    }
  }
  
export default item
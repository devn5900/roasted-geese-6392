import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const GetData = () => {
  useEffect(() => {
    // Do not uncomment these function
    // fetchData();
    // addDesc();
  }, []);
  const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/books");
    console.log(res.data);
    addTodb(res.data.books);
    findDesc(res.data);
  };
  const storeDataLocal = async (data) => {
    const res = await axios.post("http://localhost:3000/books", data);
    console.log(res);
  };

  const addTodb = (data) => {
    data.forEach((el) => {
      storeDataLocal(el);
    });
  };
  const [desc, setDesc] = useState([]);
  const findDesc = (data) => {
    data.forEach((el) => {
      axios
        .get(`https://api.itbook.store/1.0/books/${el.isbn13}`)
        .then((res) => {
          setDesc((prev) => [...prev, res.data]);
        });
    });
  };

  const addDesc = () => {
    desc.forEach((el, i) => {
      setInterval(() => {
        axios
          .patch(`http://localhost:3000/books/${i + 1}`, {
            desc: el.desc,
            lang: el.language,
            pages: el.pages,
            publisher: el.publisher,
            rating: el.rating,
            year: el.year,
          })
          .then((res) => {
            console.log(res);
          });
      }, 15000);
    });
  };
  return <div>GetData</div>;
};

export default GetData;

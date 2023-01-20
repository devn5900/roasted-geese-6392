import {
  Box,
  Flex,
  Heading,
  Input,
  ListItem,
  Select,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCards from "./BookCards";
import { useSearchParams } from "react-router-dom";
import BookSkeleton from "./BookSkeleton";
const BookHead = ({ head }) => {
  const [publisher, setPub] = useState([]);
  const [language, setLang] = useState([]);
  const [year, setYear] = useState([]);
  const [showBook, setShowBook] = useState([]);
  const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/books");
    publish(res.data);
    lang(res.data);
    getYear(res.data);
  };
  const getYear = (data) => {
    let p = data.reduce((acc, el) => {
      acc.push(el.year);
      return acc;
    }, []);
    const myset = new Set(p);
    setYear([...myset]);
  };
  const lang = (data) => {
    let p = data.reduce((acc, el) => {
      acc.push(el.lang);
      return acc;
    }, []);
    const myset = new Set(p);
    setLang([...myset]);
  };
  const publish = (data) => {
    let p = data.reduce((acc, el) => {
      acc.push(el.publisher);
      return acc;
    }, []);
    const myset = new Set(p);
    setPub([...myset]);
  };
  const [searchParam, setSearchParam] = useSearchParams();
  const [page, setPage] = useState(searchParam.get("_page") || 1);
  const [search, setSearch] = useState(searchParam.get("q") || undefined);
  const [load, setLoad] = useState(false);
  const [sort, setSort] = useState({
    by: searchParam.get("_sort") || "",
    order: searchParam.get("_order") || "",
  });
  const [filter, setFilter] = useState({
    publisher: searchParam.get("publisher") || "",
    year: searchParam.get("year") || "",
    lang: searchParam.get("lang") || "",
  });
  const [pagination, setPagination] = useState(0);
  useEffect(() => {
    fetchData();
    fetchShowBook(page, search, sort, filter);
  }, [page, search, sort, filter]);
  const baseUrl = (page, search, sort, filter) => {
    if (search) {
      return `http://localhost:3000/books?_page=${page}&_limit=12&q=${search}`;
    } else if (filter.publisher) {
      return `http://localhost:3000/books?_page=${page}&_limit=12&publisher=${filter.publisher}`;
    } else if (filter.year) {
      return `http://localhost:3000/books?_page=${page}&_limit=12&publisher=${filter.year}`;
    } else if (filter.lang) {
      return `http://localhost:3000/books?_page=${page}&_limit=12&publisher=${filter.lang}`;
    } else if (filter.publisher && filter.year && filter.lang) {
      return `http://localhost:3000/books?_page=${page}&_limit=12&publisher=${filter.lang}&year=${filter.year}&lang=${filter.lang}`;
    } else if (sort.by && sort.order) {
      return `http://localhost:3000/books?_page=${page}&_limit=12&_sort=${sort.by}&_order=${sort.order}`;
    } else {
      return `http://localhost:3000/books?_page=${page}&_limit=12`;
    }
  };
  const fetchShowBook = (page, search, sort, filter) => {
    setLoad(true);
    axios
      .get(baseUrl(page, search, sort, filter))
      .then((res) => {
        setPagination(res.headers.get("x-total-count"));
        setShowBook(res.data);
        setLoad(false);
      })
      .catch((err) => {
        setLoad(false);
      });
  };

  const updatePage = (val) => {
    setPage((prev) => {
      let inc = Number(prev) + val;
      setSearchParam({
        _page: inc,
      });

      return inc;
    });
  };

  const searchBook = (e) => {
    setSearch(e.target.value);
    setSearchParam({ _page: page, q: e.target.value });
  };

  const sortByPrice = (e) => {
    // setSearchParam({ _sort: "", _order: "" });
    searchParam.delete("q");
    setSort({ by: e.target.name, order: e.target.value });
    setSearchParam({
      _page: page,
      _sort: e.target.name,
      _order: e.target.value,
    });
  };

  const filterBy = (e) => {
    searchParam.delete("q");
    setFilter((prev) => {
      let f = { ...prev, [e.target.name]: e.target.value };
      let obj = {};
      for (let key in prev) {
        if (prev[key]) {
          obj[key] = prev[key];
        }
      }
      setSearchParam({ _page: page, ...obj, [e.target.name]: e.target.value });
      return f;
    });
  };
  let obj1 = searchParam.entries();
  return (
    <Box mt="1rem">
      <Box>
        {" "}
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Heading>{head}</Heading>
          <Text size="sm">
            Browse a Front-end with React including Redux,TypeScript and many
            more.
          </Text>
        </Flex>
      </Box>
      <Box>
        <Flex justifyContent="space-around">
          <Box
            borderRight="1px solid lightgray"
            w="20%"
            pt="3rem"
            pl="2rem"
            pr="2rem"
          >
            <Box>
              <UnorderedList listStyleType="none" spacing="0.7rem">
                <Heading size="md" mb="0.7rem">
                  Search Book
                </Heading>
                <ListItem>
                  <Box>
                    <Input
                      type="search"
                      htmlSize={100}
                      onChange={searchBook}
                      value={search}
                      borderRadius="none"
                      placeholder="Search by Title, Author, Keyword or ISBN"
                    />
                  </Box>
                </ListItem>
              </UnorderedList>
              <UnorderedList listStyleType="none" mt="0.7rem" spacing="0.7rem">
                <Heading size="md" mb="0.7rem">
                  Sort By{" "}
                </Heading>
                <ListItem>
                  <Select onChange={sortByPrice} name="price">
                    <option value="">Price</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                  </Select>
                </ListItem>
                <ListItem>
                  {" "}
                  <Select name="rating" onChange={sortByPrice}>
                    <option value="">Rating</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                  </Select>
                </ListItem>
              </UnorderedList>
              <UnorderedList listStyleType="none" mt="0.7rem" spacing="0.7rem">
                <Heading size="md" mb="0.7rem">
                  Fliter By
                </Heading>
                <ListItem>
                  <Select
                    placeholder="Publisher"
                    onChange={filterBy}
                    name="publisher"
                  >
                    {publisher &&
                      publisher?.map((el, i) => {
                        return (
                          <option key={i + 1} value={el}>
                            {el}
                          </option>
                        );
                      })}
                  </Select>
                </ListItem>
                <ListItem>
                  {" "}
                  <Select
                    placeholder="Language"
                    onChange={filterBy}
                    name="lang"
                  >
                    {language &&
                      language?.map((el, i) => {
                        return (
                          <option key={i + 1} value={el}>
                            {el}
                          </option>
                        );
                      })}
                  </Select>
                </ListItem>
                <ListItem>
                  {" "}
                  <Select placeholder="Year" onChange={filterBy} name="year">
                    {year &&
                      year?.map((el, i) => {
                        return (
                          <option key={i + 1} value={el}>
                            {el}
                          </option>
                        );
                      })}
                  </Select>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
          <Box>
            <Flex alignItems="center">
              {!load ? (
                <BookCards
                  data={showBook}
                  pagination={pagination}
                  updatePage={updatePage}
                  page={page}
                />
              ) : (
                <BookSkeleton />
              )}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default BookHead;

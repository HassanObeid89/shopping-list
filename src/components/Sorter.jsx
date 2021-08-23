const [sortByName, setSortByName] = useState(false);
const [sortByPrice, setSortByPrice] = useState(false);

/**
 * Sort should be in a separate component -1
 * if the entire codebase would fit in 50 or less lines of code it would be ok,
 * but a 100+ lines of code project gives a clear signal that
 * we need to stop the project and not continue until it is refactored.
 */
const handleSortByName = () => {
  items.sort((a, b) => {
    if (a.Name.toLowerCase() < b.Name.toLowerCase()) {
      return -1;
    } else if (a.Name.toLowerCase() > b.Name.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
  setSortByName(!sortByName);
};

<div className='flex justify-center mt-8'>
  <button className={"btn"} onClick={handleSortByName}>
    Sort by name
  </button>
  <button className={"btn"} onClick={handleSortByPrice}>
    Sort by price
  </button>
</div>;

const categoriesList = document.querySelector('ul#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log('Number of categories:', categoryItems.length);

categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  const subItemCount = categoryItem.querySelectorAll('li').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${subItemCount}`);
});
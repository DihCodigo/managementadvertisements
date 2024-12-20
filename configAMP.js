document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    
    const category = path.includes("sports") ? "sports" :
                     path.includes("technology") ? "technology" :
                     "default";
    
    const pageCategoryElement = document.getElementById('pageCategory');
    const pageCategoryData = pageCategoryElement.querySelector('script[type="application/json"]');
    const categoryData = JSON.parse(pageCategoryData.textContent);
    categoryData.category = category;
    
    pageCategoryData.textContent = JSON.stringify(categoryData);
  });
  
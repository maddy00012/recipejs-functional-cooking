// Wrap entire app in IIFE for encapsulation
const RecipeApp = (() => {
    
    // ============================================
    // RECIPE DATA
    // ============================================
    const recipes = [
        {
            id: 1,
            title: "Classic Spaghetti Carbonara",
            time: 25,
            difficulty: "easy",
            description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
            category: "pasta",
            ingredients: [
                "400g spaghetti",
                "200g pancetta or guanciale",
                "4 large eggs",
                "100g Pecorino Romano cheese",
                "Black pepper",
                "Salt"
            ],
            steps: [
                "Bring a large pot of salted water to boil",
                "Cook spaghetti according to package directions",
                {
                    text: "Prepare the sauce",
                    substeps: [
                        "Beat eggs in a bowl",
                        "Grate cheese and add to eggs",
                        "Add generous black pepper",
                        "Mix well"
                    ]
                },
                "Cook pancetta in a large pan until crispy",
                "Drain pasta, reserve 1 cup pasta water",
                "Add hot pasta to pancetta pan (off heat)",
                "Quickly mix in egg mixture, adding pasta water to create creamy sauce",
                "Serve immediately with extra cheese"
            ]
        },
        {
            id: 2,
            title: "Chicken Tikka Masala",
            time: 45,
            difficulty: "medium",
            description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
            category: "curry",
            ingredients: [
                "800g chicken breast",
                "1 cup plain yogurt",
                "2 tbsp tikka paste",
                "400g canned tomatoes",
                "1 cup heavy cream",
                "2 cloves garlic",
                "1 onion",
                "3 tbsp oil",
                "Salt and pepper"
            ],
            steps: [
                "Marinate chicken in yogurt and tikka paste for 30 minutes",
                "Heat oil and cook chicken until golden, remove and set aside",
                "Sauté onions and garlic until soft",
                "Add canned tomatoes and bring to simmer",
                "Stir in cream and return chicken to pan",
                "Simmer for 15 minutes until sauce thickens",
                "Season with salt and pepper to taste",
                "Serve with rice or naan bread"
            ]
        },
        {
            id: 3,
            title: "Homemade Croissants",
            time: 180,
            difficulty: "hard",
            description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
            category: "baking",
            ingredients: [
                "500g all-purpose flour",
                "300g butter, cold",
                "10g salt",
                "50g sugar",
                "10g instant yeast",
                "300ml warm water",
                "1 egg yolk (for egg wash)"
            ],
            steps: [
                "Mix flour, salt, sugar, yeast, and water to form dough",
                "Knead for 10 minutes until smooth",
                "First rise for 1 hour at room temperature",
                "Pound cold butter between plastic wrap into a square",
                "Wrap dough around butter and perform 4 business letter folds",
                "Rest dough for 30 minutes between each turn",
                "After final fold, refrigerate for 2 hours",
                "Roll out dough and cut triangles",
                "Shape into crescents and place on baking sheet",
                "Final proof for 2 hours",
                "Brush with egg wash and bake at 400°F for 20 minutes until golden"
            ]
        },
        {
            id: 4,
            title: "Greek Salad",
            time: 15,
            difficulty: "easy",
            description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
            category: "salad",
            ingredients: [
                "4 large tomatoes",
                "1 cucumber",
                "1 red onion",
                "200g feta cheese",
                "1 cup Kalamata olives",
                "1/4 cup olive oil",
                "2 tbsp red wine vinegar",
                "1 tsp dried oregano",
                "Salt and pepper"
            ],
            steps: [
                "Chop tomatoes into chunks",
                "Dice cucumber and slice red onion",
                "Combine vegetables in a large bowl",
                "Add Kalamata olives to the salad",
                "Crumble feta cheese over the mixture",
                "In a small bowl, whisk olive oil and red wine vinegar",
                "Add oregano, salt, and pepper to dressing",
                "Pour dressing over salad",
                "Toss gently and serve immediately"
            ]
        },
        {
            id: 5,
            title: "Beef Wellington",
            time: 120,
            difficulty: "hard",
            description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
            category: "meat",
            ingredients: [
                "1.5 kg beef fillet",
                "500g mushrooms",
                "200g pâté",
                "2 sheets puff pastry",
                "2 cloves garlic",
                "2 tbsp olive oil",
                "2 tbsp Dijon mustard",
                "1 egg yolk (for egg wash)",
                "Salt and pepper"
            ],
            steps: [
                "Sear beef fillet on all sides until browned, season with salt and pepper",
                "Brush with Dijon mustard and let cool",
                "Finely chop mushrooms and garlic",
                "Sauté mushrooms and garlic until liquid evaporates (duxelles)",
                "Wrap beef with pâté then mushroom mixture",
                "Wrap mushroom-covered beef in prosciutto",
                "Wrap entire package in puff pastry",
                "Seal pastry edges and brush with egg wash",
                "Bake at 400°F for 30-35 minutes until pastry is golden",
                "Rest for 10 minutes before slicing"
            ]
        },
        {
            id: 6,
            title: "Vegetable Stir Fry",
            time: 20,
            difficulty: "easy",
            description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
            category: "vegetarian",
            ingredients: [
                "2 cups broccoli florets",
                "1 bell pepper",
                "1 cup snap peas",
                "1 cup carrots, sliced",
                "3 cloves garlic",
                "3 tbsp soy sauce",
                "1 tbsp sesame oil",
                "1 tbsp cornstarch",
                "1/2 cup vegetable broth",
                "2 tbsp peanut oil"
            ],
            steps: [
                "Cut all vegetables into uniform sizes",
                "Mix cornstarch with vegetable broth",
                "Heat peanut oil in a wok or large pan over high heat",
                "Stir fry broccoli and carrots for 3 minutes",
                "Add bell pepper and snap peas, stir fry for 2 minutes",
                "Add minced garlic and cook for 30 seconds",
                "Pour in soy sauce and broth mixture",
                "Toss everything together for 1 minute until sauce thickens",
                "Drizzle with sesame oil",
                "Serve immediately with rice or noodles"
            ]
        },
        {
            id: 7,
            title: "Pad Thai",
            time: 30,
            difficulty: "medium",
            description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
            category: "noodles",
            ingredients: [
                "400g rice noodles",
                "400g large shrimp",
                "3 cloves garlic",
                "3 tbsp tamarind paste",
                "2 tbsp fish sauce",
                "1 tbsp palm sugar",
                "2 eggs",
                "1 cup bean sprouts",
                "1/2 cup roasted peanuts",
                "3 tbsp oil",
                "Lime and chili for garnish"
            ],
            steps: [
                "Soak rice noodles in warm water for 30 minutes until soft",
                "Mix tamarind paste, fish sauce, and palm sugar in a bowl",
                "Heat oil in a wok over high heat",
                "Stir fry minced garlic for 30 seconds",
                "Add shrimp and cook until pink, about 3 minutes",
                "Push shrimp to the side and scramble eggs in the wok",
                "Add drained noodles and sauce mixture",
                "Toss everything for 2-3 minutes",
                "Add bean sprouts and half the peanuts",
                "Toss once more and transfer to a plate",
                "Top with remaining peanuts and serve with lime wedges"
            ]
        },
        {
            id: 8,
            title: "Margherita Pizza",
            time: 60,
            difficulty: "medium",
            description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
            category: "pizza",
            ingredients: [
                "500g pizza dough",
                "200ml tomato sauce",
                "250g fresh mozzarella",
                "300g canned tomatoes",
                "1/4 cup olive oil",
                "4 cloves garlic",
                "Fresh basil leaves",
                "Salt and pepper",
                "Cornmeal for dusting"
            ],
            steps: [
                "Preheat oven to 475°F",
                "Divide pizza dough into portions and let rest for 10 minutes",
                "Stretch or roll out dough to desired thickness",
                "Place dough on a parchment paper",
                "Lightly brush with olive oil",
                "Mix canned tomatoes with minced garlic, salt, and pepper",
                "Spread tomato mixture evenly on dough, leaving a border",
                "Tear mozzarella into pieces and distribute over sauce",
                "Drizzle with olive oil",
                "Bake for 12-15 minutes until crust is golden",
                "Remove from oven and top with fresh basil",
                "Serve hot"
            ]
        }
    ];

    // ============================================
    // STATE MANAGEMENT
    // ============================================
    let currentFilter = 'all';
    let currentSort = 'none';

    // ============================================
    // DOM REFERENCES
    // ============================================
    const recipeContainer = document.querySelector('#recipe-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortButtons = document.querySelectorAll('.sort-btn');

    // ============================================
    // RECURSIVE FUNCTION FOR STEPS
    // ============================================
    const renderSteps = (steps, level = 0) => {
        const listClass = level === 0 ? 'steps-list' : 'substeps-list';
        let html = `<ol class="${listClass}">`;
        
        steps.forEach(step => {
            if (typeof step === 'string') {
                html += `<li>${step}</li>`;
            } else {
                html += `<li>`;
                html += step.text;
                
                if (step.substeps && step.substeps.length > 0) {
                    html += renderSteps(step.substeps, level + 1);
                }
                
                html += `</li>`;
            }
        });
        
        html += `</ol>`;
        return html;
    };

    // ============================================
    // CREATE RECIPE CARD HTML
    // ============================================
    const createRecipeCard = (recipe) => {
        return `
            <div class="recipe-card" data-id="${recipe.id}">
                <h3>${recipe.title}</h3>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time} min</span>
                    <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
                </div>
                <p>${recipe.description}</p>
                
                <div class="card-actions">
                    <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="steps">
                        📋 Show Steps
                    </button>
                    <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="ingredients">
                        🥗 Show Ingredients
                    </button>
                </div>
                
                <div class="ingredients-container" data-recipe-id="${recipe.id}">
                    <h4>Ingredients:</h4>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="steps-container" data-recipe-id="${recipe.id}">
                    <h4>Cooking Steps:</h4>
                    ${renderSteps(recipe.steps)}
                </div>
            </div>
        `;
    };

    // ============================================
    // FILTER FUNCTIONS
    // ============================================
    const filterByDifficulty = (recipes, difficulty) => {
        return recipes.filter(recipe => recipe.difficulty === difficulty);
    };

    const filterByTime = (recipes, maxTime) => {
        return recipes.filter(recipe => recipe.time <= maxTime);
    };

    const applyFilter = (recipes, filterType) => {
        switch(filterType) {
            case 'easy':
                return filterByDifficulty(recipes, 'easy');
            case 'medium':
                return filterByDifficulty(recipes, 'medium');
            case 'hard':
                return filterByDifficulty(recipes, 'hard');
            case 'quick':
                return filterByTime(recipes, 30);
            case 'all':
            default:
                return recipes;
        }
    };

    // ============================================
    // SORT FUNCTIONS
    // ============================================
    const sortByName = (recipes) => {
        return [...recipes].sort((a, b) => a.title.localeCompare(b.title));
    };

    const sortByTime = (recipes) => {
        return [...recipes].sort((a, b) => a.time - b.time);
    };

    const applySort = (recipes, sortType) => {
        switch(sortType) {
            case 'name':
                return sortByName(recipes);
            case 'time':
                return sortByTime(recipes);
            case 'none':
            default:
                return recipes;
        }
    };

    // ============================================
    // RENDER AND DISPLAY
    // ============================================
    const renderRecipes = (recipesToRender) => {
        const recipeCardsHTML = recipesToRender.map(createRecipeCard);
        const allCardsHTML = recipeCardsHTML.join('');
        recipeContainer.innerHTML = allCardsHTML;
    };

    const updateDisplay = () => {
        let recipesToDisplay = recipes;
        recipesToDisplay = applyFilter(recipesToDisplay, currentFilter);
        recipesToDisplay = applySort(recipesToDisplay, currentSort);
        renderRecipes(recipesToDisplay);
        console.log(`Displaying ${recipesToDisplay.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort})`);
    };

    // ============================================
    // UI HELPER FUNCTIONS
    // ============================================
    const updateActiveButtons = () => {
        filterButtons.forEach(btn => {
            const filterType = btn.dataset.filter;
            if (filterType === currentFilter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        sortButtons.forEach(btn => {
            const sortType = btn.dataset.sort;
            if (sortType === currentSort) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    // ============================================
    // EVENT HANDLERS
    // ============================================
    const handleFilterClick = (event) => {
        const filterType = event.target.dataset.filter;
        currentFilter = filterType;
        updateActiveButtons();
        updateDisplay();
    };

    const handleSortClick = (event) => {
        const sortType = event.target.dataset.sort;
        currentSort = sortType;
        updateActiveButtons();
        updateDisplay();
    };

    const handleToggleClick = (event) => {
        const toggleBtn = event.target.closest('.toggle-btn');
        if (!toggleBtn) return;
        
        const recipeId = toggleBtn.dataset.recipeId;
        const toggleType = toggleBtn.dataset.toggle;
        
        const containerSelector = toggleType === 'steps' ? '.steps-container' : '.ingredients-container';
        const container = document.querySelector(`${containerSelector}[data-recipe-id="${recipeId}"]`);
        
        if (container) {
            container.classList.toggle('active');
            
            const isActive = container.classList.contains('active');
            if (toggleType === 'steps') {
                toggleBtn.textContent = isActive ? '📋 Hide Steps' : '📋 Show Steps';
            } else {
                toggleBtn.textContent = isActive ? '🥗 Hide Ingredients' : '🥗 Show Ingredients';
            }
        }
    };

    // ============================================
    // EVENT LISTENER SETUP
    // ============================================
    const setupEventListeners = () => {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', handleFilterClick);
        });
        
        sortButtons.forEach(btn => {
            btn.addEventListener('click', handleSortClick);
        });
        
        recipeContainer.addEventListener('click', handleToggleClick);
        
        console.log('Event listeners attached!');
    };

    // ============================================
    // INITIALIZATION
    // ============================================
    const init = () => {
        console.log('RecipeApp initializing...');
        setupEventListeners();
        updateDisplay();
        console.log('RecipeApp ready!');
    };

    // ============================================
    // PUBLIC API
    // ============================================
    return {
        init: init,
        updateDisplay: updateDisplay
    };

})();

// ============================================
// START THE APP
// ============================================
RecipeApp.init();

const handleFilterClick = (event) => {
    const filterType = event.target.dataset.filter;
    currentFilter = filterType;
    updateActiveButtons();
    
    // Still works because updateDisplay is in the return object
    updateDisplay();
};
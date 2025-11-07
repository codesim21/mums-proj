// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('.section, .hero');
const navLinksArray = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth Scrolling for Navigation Links
navLinksArray.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animation (AOS - Animate On Scroll)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// Recipe Data
const recipes = {
    'turmeric-latte': {
        title: 'Golden Turmeric Latte',
        category: 'Wellness Drink',
        description: 'A warming, anti-inflammatory drink perfect for morning or evening',
        ingredients: [
            '1 cup of plant-based milk (almond, coconut, or oat)',
            '1 teaspoon of ground turmeric',
            '1/2 teaspoon of ground ginger',
            '1/4 teaspoon of ground cinnamon',
            'Pinch of black pepper (enhances turmeric absorption)',
            '1 teaspoon of raw honey or maple syrup',
            '1/2 teaspoon of coconut oil (optional)'
        ],
        instructions: [
            'Heat the milk in a small saucepan over medium heat until warm (not boiling)',
            'Add turmeric, ginger, cinnamon, and black pepper',
            'Whisk until well combined and frothy',
            'Stir in honey or maple syrup to taste',
            'Add coconut oil if desired for extra creaminess',
            'Pour into a mug and enjoy while warm',
            'Optional: Top with a sprinkle of cinnamon or nutmeg'
        ],
        benefits: 'This golden latte helps reduce inflammation, boosts immunity, and provides a calming evening ritual.'
    },
    'immune-tea': {
        title: 'Immune-Boosting Tea',
        category: 'Herbal Tea',
        description: 'Echinacea, ginger, and lemon combine for powerful immune support',
        ingredients: [
            '2 cups of filtered water',
            '1 tablespoon of dried echinacea (or 2 echinacea tea bags)',
            '1 inch fresh ginger, sliced',
            '1/2 lemon, juiced',
            '1-2 tablespoons of raw honey',
            'Optional: 1/2 teaspoon of ground cinnamon'
        ],
        instructions: [
            'Bring water to a boil in a saucepan',
            'Add echinacea and ginger slices',
            'Reduce heat and simmer for 10-15 minutes',
            'Remove from heat and let steep for 5 minutes',
            'Strain the tea into a cup',
            'Add lemon juice and honey while warm',
            'Stir in cinnamon if desired',
            'Drink 1-2 cups daily during cold season or when feeling under the weather'
        ],
        benefits: 'This tea combination supports immune function, reduces inflammation, and provides natural antioxidants.'
    },
    'power-bowl': {
        title: 'Energy Power Bowl',
        category: 'Superfood Bowl',
        description: 'Nutrient-dense bowl with quinoa, greens, and natural superfoods',
        ingredients: [
            '1 cup cooked quinoa',
            '2 cups mixed greens (spinach, kale, arugula)',
            '1/2 avocado, sliced',
            '1/2 cup chickpeas, roasted',
            '1/4 cup pumpkin seeds',
            '1/4 cup dried cranberries',
            '1/4 cup crumbled feta or goat cheese (optional)',
            'Dressing: 2 tbsp olive oil, 1 tbsp lemon juice, 1 tsp honey, salt & pepper'
        ],
        instructions: [
            'Cook quinoa according to package instructions and let cool',
            'Prepare the dressing by whisking together olive oil, lemon juice, honey, and seasonings',
            'Arrange mixed greens in a large bowl',
            'Top with cooled quinoa',
            'Add avocado slices, roasted chickpeas, and pumpkin seeds',
            'Sprinkle with dried cranberries and cheese if using',
            'Drizzle with dressing and toss gently',
            'Enjoy immediately for maximum freshness'
        ],
        benefits: 'This power bowl provides complete protein, healthy fats, fiber, and a wide range of vitamins and minerals for sustained energy.'
    },
    'honey-lemon': {
        title: 'Honey & Lemon Remedy',
        category: 'Healing Remedy',
        description: 'Natural cough and cold relief with raw honey and fresh lemon',
        ingredients: [
            '2 tablespoons of raw, unfiltered honey',
            '1/2 fresh lemon, juiced',
            '1 cup of warm water (not boiling)',
            'Optional: 1/4 teaspoon of grated fresh ginger',
            'Optional: Pinch of cayenne pepper for extra kick'
        ],
        instructions: [
            'Squeeze the fresh lemon juice into a mug',
            'Add warm water (should be warm, not hot, to preserve honey\'s enzymes)',
            'Stir in raw honey until dissolved',
            'Add ginger and cayenne if desired',
            'Stir well and drink while warm',
            'Take 2-3 times daily as needed',
            'For cough relief, take a spoonful of honey mixture before bed'
        ],
        benefits: 'This classic remedy soothes sore throats, reduces cough frequency, and provides natural antibacterial and antioxidant properties.'
    },
    'detox-smoothie': {
        title: 'Green Detox Smoothie',
        category: 'Detox Drink',
        description: 'Cleansing smoothie with leafy greens, ginger, and citrus',
        ingredients: [
            '1 large handful of fresh spinach or kale',
            '1/2 cucumber, peeled and chopped',
            '1 green apple, cored and chopped',
            '1 inch fresh ginger, peeled',
            '1/2 lemon, juiced',
            '1/2 cup of cold water or coconut water',
            '1 tablespoon of fresh mint leaves',
            'Optional: 1/4 avocado for creaminess'
        ],
        instructions: [
            'Wash all fresh ingredients thoroughly',
            'Add all ingredients to a high-speed blender',
            'Blend on high until smooth and creamy (1-2 minutes)',
            'If too thick, add more water or coconut water',
            'Pour into a glass and enjoy immediately',
            'Best consumed on an empty stomach in the morning'
        ],
        benefits: 'This green smoothie helps alkalize the body, provides essential nutrients, supports digestion, and promotes natural detoxification.'
    },
    'chamomile-blend': {
        title: 'Calming Chamomile Blend',
        category: 'Bedtime Remedy',
        description: 'Soothing nighttime blend for restful sleep and relaxation',
        ingredients: [
            '2 tablespoons of dried chamomile flowers',
            '1 tablespoon of dried lavender buds',
            '1 tablespoon of dried lemon balm',
            '1 teaspoon of dried passionflower (optional)',
            '2 cups of boiling water',
            '1-2 teaspoons of raw honey',
            'Optional: 1/4 teaspoon of vanilla extract'
        ],
        instructions: [
            'Combine all dried herbs in a tea infuser or teapot',
            'Pour boiling water over the herbs',
            'Cover and let steep for 10-15 minutes',
            'Strain the tea into a cup',
            'Stir in honey while warm',
            'Add vanilla extract if desired',
            'Drink 30-60 minutes before bedtime',
            'Take deep breaths and enjoy the calming aroma'
        ],
        benefits: 'This calming blend promotes relaxation, reduces anxiety, improves sleep quality, and helps with stress relief.'
    }
};

// Show Recipe Modal
function showRecipe(recipeId) {
    const recipe = recipes[recipeId];
    if (!recipe) return;

    const modal = document.getElementById('recipeModal');
    const modalContent = document.getElementById('modalRecipeContent');
    
    modalContent.innerHTML = `
        <div class="recipe-detail">
            <h2>${recipe.title}</h2>
            <p class="recipe-category" style="margin-bottom: 1rem;">${recipe.category}</p>
            <p>${recipe.description}</p>
            
            <h3>Ingredients</h3>
            <ul>
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            
            <h3>Instructions</h3>
            <ol>
                ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
            </ol>
            
            <h3>Health Benefits</h3>
            <p>${recipe.benefits}</p>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Recipe Modal
function closeRecipeModal() {
    const modal = document.getElementById('recipeModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('recipeModal');
    if (e.target === modal) {
        closeRecipeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeRecipeModal();
    }
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Initialize animations on page load
window.addEventListener('load', () => {
    // Animate elements that are already in viewport
    document.querySelectorAll('[data-aos]').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('aos-animate');
        }
    });
});

// Add smooth fade-in for page content
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});



import { v4 } from 'node-uuid';
import moment from 'moment';

const generateUnixTimestamp = () => moment().unix() - Math.floor(Math.random() * 10 * 60);

const fakeRecipes = [{
	id: v4(),
	title: 'Spinach Quiche',
	description: 'A classic quiche made fragrant by the nutty, warm flavor of the Kerrygold Dubliner cheese. Buttery caramelized shallots, garlic, and oregano round out the flavor.',
	photo: 'http://assets.epicurious.com/photos/5820e0231303f5b965361d44/6:4/w_620%2Ch_413/16_Kerrygold_Quiche_Header.jpg',
	video: 'http://dp8hsntg6do36.cloudfront.net/582b525dfd2e61100600000f/2239793f-76ad-40b8-97b6-6d15d54379dahigh.webm',
	ingredients: [
		'Homemade pastry dough or frozen 9-inch pie shell',
		'2 tablespoons Kerrygold salted butter',
		'2 whole shallots, minced',
		'2 cloves garlic, minced',
		'1 (10-ounce) bag frozen spinach, thawed and squeezed to remove excess liquid',
		'2 tablespoons dried oregano',
		'½ teaspoon grated nutmeg',
		'4 eggs',
		'1 cup milk',
		'½ cup heavy cream',
		'4 ½ ounces grated Kerrygold Dubliner cheese, about 1 ½ cups',
		'Salt and pepper'
	],
	directions: [
		'If using homemade dough, roll out dough on a lightly floured surface with a lightly floured rolling pin into a 13-inch round. Fit dough into pie plate, letting excess hang over edge. Fold overhang inward and press against side of pie plate to reinforce edge. Prick bottom all over with a fork. Chill until firm, about 30 minutes.',
		'Place from scratch or frozen pie shell in the pie pan. Line with foil and fill with pie weights. Bake until the shell is firm and the edges are just starting to get color, about 20 minutes. Carefully remove the weights and foil, and continue baking until the crust is golden all over, about 15 minutes. Set the crust aside and leave the oven on.',
		'Heat the Kerrygold salted butter in a large skillet over medium heat. Add the shallots and stir often until caramelized, about 10 minutes. Add the garlic and cook for 1 minute. Add the spinach, oregano, and nutmeg, and cook until the spices are fragrant and the spinach is wilted and its tannic flavor has mellowed, about 5 minutes. Season with salt and pepper and set aside.',
		'Beat the eggs in a large bowl, then whisk in the milk and heavy cream. Fold in 1 cup (3 ounces) of the grated Kerrygold Dubliner cheese, and the spinach. Pour into the prepared pie shell, and sprinkle the top with the remaining ½ cup cheese. Place on a baking sheet and bake for 45 minutes, or until the center of the quiche is just set and the top is lightly browned.'
	],
	tags: [
		'quiche',
		'spinach',
		'garlic',
		'bake'
	],
	cooked: false,
	favorite: true,
	timestamp: generateUnixTimestamp(),
	versions: []
}, {
	id: v4(),
	title: 'Shepherd’s Pie',
	description: 'Buttery shepherd’s pie brimming with meat, vegetables, and herbs. Tomato paste and Worcestershire sauce give the filling a bright, tangy finish.',
	photo: 'http://assets.epicurious.com/photos/5820e0fc9de3520d2eb00201/6:4/w_620%2Ch_413/16_Kerrygold_ShepherdsPie_Header.jpg',
	video: 'http://dp8hsntg6do36.cloudfront.net/582b5595fd2e61100600001d/36e6038b-9ebb-422d-a808-c78954c73f8bhigh.webm',
	ingredients: [
		'10 tablespoons Kerrygold salted butter, (1¼ sticks)',
		'1 large onion, diced',
		'1 pound ground lamb or beef',
		'1 large carrot (equal to about 1 cup), diced',
		'1 cup beef or chicken stock',
		'1 tablespoon dried thyme',
		'1 tablespoon dried rosemary',
		'2 tablespoons tomato paste',
		'2 tablespoons Worcestershire sauce',
		'1 cup frozen peas',
		'1 cup frozen corn',
		'2 pounds Yukon Gold potatoes, peeled and cut into large dice',
		'½ cup milk or heavy cream',
		'Salt and pepper to taste'
	],
	directions: [
		'Heat 4 tablespoons of the Kerrygold® salted butter in a large skillet over medium heat. Add the onions, ground meat, and carrots, and sauté until the meat is no longer pink, about 10 minutes.',
		'Add the stock, thyme, rosemary, tomato paste, and Worcestershire. Bring the broth to a simmer, and cook until slightly thickened, about 10 minutes. Add the peas and corn and cook for 2 minutes, or until just tender. Season with salt and pepper to taste, and remove from the heat.',
		'While the filling cooks, make the mashed potatoes. Bring the potatoes to a boil in lightly salted water. Cook until tender, about 20 minutes, and drain. Mash with the remaining 6 tablespoons of Kerrygold® salted butter and the milk or cream. Salt to taste.',
		'Transfer the filling into a baking dish or pie pan, or leave it in the skillet if it’s ovenproof, and place it on a baking sheet. Spread the mashed potatoes evenly over the filling. Gently swirl the potatoes or crosshatch with a fork to make peaks that will brown as the pie cooks. Cook until the filling bubbles up around the sides, and the top is lightly browned, about 30 minutes. If the top isn’t brown enough, finish for 3-4 minutes under the broiler to get more color.'
	],
	tags: [
		'meat',
		'vegetables',
		'herbs',
		'tomatopaste'
	],
	cooked: true,
	favorite: false,
	timestamp: generateUnixTimestamp(),
	versions: []
}, {
	id: v4(),
	title: 'Bosc Pear Salad',
	description: 'A satisfying salad that’s rich and crunchy. The bitter radicchio and walnuts are balanced by the delicate sweetness of pears and cranberries and the full-flavored Kerrygold Dubliner cheese.',
	photo: 'http://assets.epicurious.com/photos/5820cc9b1303f5b965361d41/6:4/w_620%2Ch_413/16_Kerrygold_Salad_Header.jpg',
	video: undefined,
	ingredients: [
		'1½ tablespoons dijon mustard',
		'1½ tablespoons white wine vingegar',
		'2 tablespoons olive oil',
		'½ head radicchio',
		'2 scallions, thinly sliced',
		'1 (7-ounce) package Kerrygold Dubliner cheese, cut in ½-inch dice',
		'3 cups mixed baby greens',
		'1 cup toasted walnuts, chopped',
		'¼ cup dried cranberries',
		'2 Bosc pears',
		'Salt & pepper to taste'
	],
	directions: [
		'Whisk together Dijon mustard, white wine vinegar, olive oil, and a dash of salt in a small bowl.',
		'Cut out the core of the radicchio and discard. Coarsely chop the radicchio and combine it in a large bowl with the scallions, Kerrygold Dubliner cheese, baby greens, walnuts, and cranberries.',
		'Quarter and core the Bosc pears, then slice thinly and toss with the rest of the salad. Pour the dressing over the top, season with salt and pepper, and toss well. Serve immediately.'
	],
	tags: [
		'salad',
		'radicchio',
		'walnuts'
	],
	cooked: true,
	favorite: true,
	timestamp: generateUnixTimestamp(),
	versions: []
}, {
	id: v4(),
	title: 'Arugula And Roasted Pear Salad',
	description: 'Arugula and pears flourish during the cooler late-autumn weather. Put them together for a great balance of sweet and piquant. The arugula is lightly dressed with a maple-sweetened vinaigrette to accentuate the natural flavor of the pears.',
	photo: 'http://assets.epicurious.com/photos/57ced51d3c3d8c346d0ada38/6:4/w_620%2Ch_413/arugula-and-roasted-pear-salad.jpg',
	video: undefined,
	ingredients: [
		'4 firm, almost-ripe pears (Bartlett or Bosc), peeled, cored, and cut lengthwise',
		'2 tablespoons sugar',
		'1 tablespoon butter, melted',
		'2 tablespoons pine nuts',
		'3 tablespoons olive oil',
		'1 tablespoon balsamic vinegar',
		'1 clove garlic, minced',
		'Salt and pepper, to taste',
		'½ teaspoon Dijon mustard',
		'½ teaspoon maple syrup',
		'6 cups arugula or mixed salad greens',
		'2 tablespoons dried cranberries',
		'¼ cup fresh Parmigiano-Reggiano cheese',
		'12 calendula blossoms'
	],
	directions: [
		'Preheat the oven to 400°F.',
		'In a medium bowl, toss the pears, sugar, and butter. Arrange the pears in a single layer in a baking sheet. Bake, turning once, until the pears are barely tender, 10—15 minutes.',
		'Dry roast the pine nuts in a skillet for 5 minutes, until toasty brown. Remove from the heat and set aside.',
		'In a large salad bowl, prepare the dressing by whisking together the oil, vinegar, garlic, salt, pepper, mustard, and maple syrup. Add the arugula or salad greens and toss to coat.',
		'Divide the salad onto four chilled plates. Arrange the roasted pears in a fan around the center, and sprinkle with the cranberries, Parmesan cheese, and pine nuts. Scatter with petals from the calendula blossoms.'
	],
	tags: [
		'oliveoil',
		'mustard',
		'pears'
	],
	cooked: false,
	favorite: false,
	timestamp: generateUnixTimestamp(),
	versions: []
}, {
	id: v4(),
	title: 'Salted Black Licorice Caramels',
	description: 'People who love black licorice will flip for these assertively flavored candies. They’ll be not-quite-black without the food coloring but still very cool looking.',
	photo: 'http://assets.epicurious.com/photos/58486ca5c57348020906be40/6:4/w_620%2Ch_413/salted-black-licorice-caramels-120716.jpg',
	video: undefined,
	ingredients: [
		'Nonstick vegetable oil spray',
		'⅓ cup sugar',
		'⅓ cup sweetened condensed milk',
		'¼ cup blackstrap (robust) molasses',
		'4 tablespoons unsalted butter',
		'1 teaspoon kosher salt',
		'¾ teaspoon anise (licorice) extract',
		'10 drops black food coloring (optional)',
		'Flaky sea salt',
		'A candy thermometer'
	],
	directions: [
		'Lightly coat an 8½" x 4½" loaf pan with nonstick spray and line with parchment paper, leaving a 2" overhang on long sides. Lightly coat parchment with nonstick spray. Cook sugar, sweetened condensed milk, molasses, butter, salt, and 3 Tbsp. water in a medium saucepan over medium heat, stirring with a heatproof rubber spatula, until sugar is dissolved, butter is melted, and mixture is smooth. Fit saucepan with thermometer and bring mixture to a boil, stirring constantly and scraping bottom with spatula to keep mixture from burning, until thermometer registers 246°F. Remove pan from heat and stir in anise extract and food coloring, if using, then immediately pour into prepared pan and sprinkle with sea salt. Loosely cover pan with plastic wrap and let sit until caramel is cool and set, at least 2 hours.',
		'Lift caramel out of pan using parchment overhang. Peel away parchment and cut caramel into a 6x4 grid to make 24 pieces total. Wrap individually in waxed paper or parchment paper.',
		'Caramels can be made 2 days ahead. Store at room temperature in an airtight container.'
	],
	tags: [
		'caramel',
		'sugar'
	],
	cooked: false,
	favorite: false,
	timestamp: generateUnixTimestamp(),
	versions: []
}, {
	id: v4(),
	title: 'Nutella–Brown Butter Crispies',
	description: 'For a smaller batch and an easier time mixing the cereal, divide the recipe in half (but use an 8x8" pan).',
	photo: 'http://assets.epicurious.com/photos/58515d8c5113f6cc02f59c1c/6:4/w_620%2Ch_413/nutella-brown-butter-crispies-120716.jpg',
	video: undefined,
	ingredients: [
		'¾ cup (1½ sticks) unsalted butter, plus more for pan',
		'2 (10.5-ounce) bags mini marshmallows',
		'1 teaspoon kosher salt',
		'1 ¾ cups Nutella',
		'12 cups puffed rice cereal, divided (from one 12-ounce box)',
		'1 (1.2-ounce) bag freeze-dried strawberries or raspberries (optional)',
		'1 teaspoon red luster dust (optional)',
		'½ cup powdered sugar'
	],
	directions: [
		'Lightly butter a 13x9" baking dish, then line with parchment paper, leaving a 2" overhang on long sides. Lightly butter parchment. Cook ¾ cup butter in a large pot over medium heat, swirling, until butter foams, then browns (be careful not to let it burn), 5–7 minutes. Add marshmallows and salt. Reduce heat to low and cook, stirring constantly, until marshmallows are melted and mixture is smooth, about 3 minutes. Add Nutella and stir until completely incorporated into marshmallow mixture, about 2 minutes.',
		'Remove pot from heat and add half of puffed rice to marshmallow mixture; stir with a nonflexible heatproof spatula or wooden spoon, scraping bottom of pot and folding, until cereal is coated. Add remaining cereal and fold until mixture is homogenous. (It’s a lot of cereal, so you’ll need to exert some effort.) If mixture is too stiff, heat over low while continuing to fold in cereal. Scrape into prepared pan; let cool slightly, then cover with a sheet of parchment paper. Press down firmly to make an even, compact layer (you want the top to be as flat as possible; a smaller pan, like a loaf or an 8x8" pan, works great for this). Cover crispies loosely with plastic and let sit until cool, about 2 hours.',
		'Just before serving, using parchment paper overhang, lift crispies out of pan and place upside down on a cutting board; remove parchment. Using a serrated knife, trim about ½" from all sides to make a squared-off rectangle, then cut into a 6x4 grid to make 24 squares. Place crispies on a wire rack, spacing at least 1" apart.',
		'To make half the crispies red, if desired, pulse freeze-dried strawberries in a food processor until finely ground; add luster dust and pulse just to combine. Using a fine-mesh sieve, dust 12 squares with strawberry powder, then, using a dry, clean sieve, dust remaining 12 squares with powdered sugar. Or feel free to dust all 24 squares with powdered sugar instead.',
		'Crispies can be made 1 day ahead. Leave in pan. Store tightly wrapped at room temperature. Cut into squares and coat just before serving.'
	],
	tags: [
		'crispies',
		'nutella',
		'sugar'
	],
	cooked: true,
	favorite: false,
	timestamp: generateUnixTimestamp(),
	versions: []
}, {
	id: v4(),
	title: 'Golden Potato Cake',
	description: 'It’s not about the potatoes—it’s what you do to the potatoes. In this recipe, precook them until they’re tender, then dispatch clarified butter (which is less likely to burn), heat, and time to help them become their best selves.',
	photo: 'http://assets.epicurious.com/photos/58486ca0bbf20a4f3a3e5606/6:4/w_620%2Ch_413/golden-potato-cake-120716.jpg',
	video: undefined,
	ingredients: [
		'8 tablespoons unsalted butter or 6 tablespoons ghee',
		'2 pounds small russet potatoes, peeled, very thinly sliced',
		'Flaky sea salt',
		'Freshly ground white or black pepper'
	],
	directions: [
		'Preheat oven to 400°F. If using unsalted butter, heat in a small saucepan over medium, skimming off white foam that rises to the surface, until butter is melted and milk solids have settled to the bottom of the pan. Spoon clear (clarified) butter into a small bowl. Discard milk solids.',
		'Heat 1 Tbsp. clarified butter (or ghee) in a medium skillet, preferably ovenproof nonstick or cast iron (you will need to cover it; use a baking sheet if you don’t have a lid), over medium-high and add half of potatoes, tossing to separate slices and coat in butter. Cook, tossing often, until some of the slices are browned around the edges, about 5 minutes. Transfer to a large bowl. Repeat with another 1 Tbsp. butter and remaining potatoes; transfer to same bowl. Let cool slightly.',
		'Arrange some potato slices in an overlapping pattern in a single layer in bottom of skillet. Season with salt and pepper and drizzle with some of the remaining clarified butter. Repeat with remaining potatoes, building a layer at a time, seasoning with salt and pepper and drizzling with clarified butter as you go. When you are finished layering the potatoes, pour any remaining clarified butter over top and cover skillet.',
		'Cook potatoes over low heat until barely tender, 10–15 minutes. Uncover skillet and transfer to oven. Bake until potatoes are very tender in the middle (if you have a cake tester, that’s a good way to check, or use the tip of a paring knife) and browned and crisp around the edges, 25–30 minutes. Let cool slightly.',
		'Slide a rubber spatula underneath potato cake to loosen, then invert onto a platter. Season with more salt.',
		'Potato cake can be made 3 hours ahead. Leave in skillet at room temperature. Reheat at 350°F for 10 minutes before serving.'
	],
	tags: [
		'potato',
		'salt',
		'butter'
	],
	cooked: true,
	favorite: false,
	timestamp: generateUnixTimestamp(),
	versions: []
}, {
	id: v4(),
	title: 'Shallot Tarte Tatin',
	description: 'To make this recipe ahead, let the tart cool in pan, then reheat over medium to soften glaze before inverting.',
	photo: 'http://assets.epicurious.com/photos/58486ca5c57348020906be41/6:4/w_620%2Ch_413/shallot-tarte-tatin-120716.jpg',
	video: undefined,
	ingredients: [
		'1 tablespoon pine nuts or chopped almonds',
		'6 large shallots, peeled, halved lengthwise',
		'2 teaspoons vegetable oil',
		'Kosher salt, freshly ground pepper',
		'¼ cup balsamic vinegar',
		'1 teaspoon sugar',
		'3 tablespoons unsalted butter, divided',
		'1 package frozen puff pastry, thawed',
		'All-purpose flour (for surface)',
		'8 ounces mixed mushrooms (such as maitake, oyster, and/or shiitake), torn into bite-size pieces',
		'1 garlic clove, smashed',
		'3 ounces burrata, torn, or ricotta',
		'1 cup baby arugula',
		'½ ounce Parmesan, shaved',
		'Olive oil and lemon wedge (for serving)'
	],
	directions: [
		'Preheat oven to 400°F. Toast nuts on a rimmed baking sheet until golden brown, about 4 minutes. Transfer to a small bowl. Toss shallots and vegetable oil on same baking sheet; season with salt and pepper. Roast until tender and browned in spots, 20–25 minutes. Let cool. Remove any leathery outer layers.',
		'Meanwhile, bring vinegar and sugar to a simmer in a small skillet over medium-low, swirling occasionally, until syrupy, about 5 minutes. Stir in 1 Tbsp. butter; remove from heat. Arrange shallots, cut side up, in skillet, overlapping slightly if needed and filling in any gaps.',
		'Roll out puff pastry on a lightly floured surface just to smooth any creases (if box has 2 sheets of pastry, stack and gently roll out to adhere). Cut out a circle that’s about 1" larger than the bottom of the skillet; prick in several places with a fork. Drape pastry over shallots, tucking edges inside skillet. Bake until pastry is golden brown and puffed, 25–30 minutes.',
		'Meanwhile, heat remaining 2 Tbsp. butter in a medium skillet over medium-high. Cook mushrooms and garlic, tossing often, until mushrooms are tender and browned, 5–8 minutes. Season with salt and pepper; set aside.',
		'Let tart sit until pastry is cooled slightly, 5–10 minutes. Carefully invert onto a plate. Top with burrata, mushrooms, arugula, Parmesan, and nuts. Drizzle with olive oil and lemon juice and season with salt.'
	],
	tags: [
		'vinegar',
		'sugar',
		'almonds',
		'garlic'
	],
	cooked: false,
	favorite: true,
	timestamp: generateUnixTimestamp(),
	versions: []
}, {
	id: v4(),
	title: 'Broiled Cod With Fennel And Orange',
	description: 'A zesty-flavored mayonnaise spread is the secret to this super-tender flavorful fish, and the glue that holds the almond crust in place. Add white beans, broccolini, fennel, and slices of orange for a quick sheet-pan dinner that cooks under the broiler in just 6 minutes.',
	photo: 'http://assets.epicurious.com/photos/58471ec8874f18911e1de0c5/6:4/w_620%2Ch_413/Broiled-Cod-With-Fennel-and-Orange-05122016.jpg',
	video: undefined,
	ingredients: [
		'¼ cup mayonnaise',
		'¼ teaspoon crushed red pepper flakes (optional)',
		'2 garlic cloves, finely grated, divided',
		'2 teaspoons finely grated orange zest, divided',
		'1 teaspoon kosher salt, divided',
		'4 (6-ounce) skinless cod fillets',
		'1 fennel bulb, very thinly sliced (about 12 ounces)',
		'1 bunch broccolini, trimmed, halved (about 8 ounces)',
		'1 small orange, preferably blood, thinly sliced',
		'1 (15.5-ounce) can white beans, drained, rinsed',
		'2 tablespoons mayonnaise',
		'1 tablespoon rosemary leaves',
		'¼ cup sliced almonds, chopped (about 1 ounce)'
	],
	directions: [
		'Heat broiler to high. Mix mayonnaise, red pepper flakes, 1 tsp. garlic, 1 tsp. orange zest, and ½ tsp. salt in a small bowl.',
		'Arrange cod fillets on a rimmed baking sheet. Spread mayonnaise mixture over each fillet.',
		'Toss fennel, broccolini, orange, beans, oil, rosemary, and remaining garlic, 1 tsp. orange zest, and ½ tsp. salt in a large bowl. Arrange around fish on baking sheet, placing orange slices on top of beans and vegetables.',
		'Place baking sheet under broiler and broil until fish is golden-brown on top, about 5 minutes. Remove from oven, top each fillet with almonds, then continue to broil until almonds are toasted and crisp and fish is completely cooked through, about 1 minute more.'
	],
	tags: [
		'mayonnaise',
		'oliveoil',
		'orange',
		'cod'
	],
	cooked: false,
	favorite: true,
	timestamp: generateUnixTimestamp(),
	versions: []
}, {
	id: v4(),
	title: 'Cider-Brined, Mustard-Glazed Pork Loin',
	description: 'Try this fresh alternative to holiday ham for your next festive gathering or Sunday supper. With an apple cider brine and maple-mustard glaze, this pork loin has all the flavors of a classic ham wrapped in more a tender and juicy package. Start early—the brine takes 8–24 hours.',
	photo: 'http://assets.epicurious.com/photos/56d85a0bb4756f7440ec691c/6:4/w_620%2Ch_413/PORK_LOIN_128.jpg',
	video: undefined,
	ingredients: [
		'1 cup kosher salt',
		'½ cup (packed) light brown sugar',
		'2 tablespoons black peppercorns',
		'2 tablespoons coriander seeds, lightly crushed',
		'2 tablespoons mustard seeds',
		'12 thyme sprigs',
		'2 bay leaves',
		'4 cups apple cider, divided',
		'1 (5-pound) boneless pork loin (tied if desired)',
		'1 teaspoon kosher salt',
		'½ teaspoon freshly ground black pepper',
		'2 tablespoons vegetable oil',
		'½ cup country Dijon mustard',
		'⅓ cup (packed) light brown sugar',
		'2 tablespoons maple syrup',
		'2 tablespoons thyme leaves',
		'2 cups apple cider'
	],
	directions: [
		'Bring salt, brown sugar, peppercorns, coriander seeds, mustard seeds, thyme, bay leaves, 2 cups apple cider, and 2 cups water to a low boil in a medium saucepan over medium heat. Cook, whisking, until sugar and salt dissolve, about 4 minutes. Transfer brine to a large bowl and add remaining 2 cups apple cider and 2 cups ice. Let cool to room temperature.',
		'Place pork and brine in a large resealable plastic bag; turn to coat. Seal and chill at least 8 hours.',
		'Remove pork from brine and pat dry with paper towels. Let sit at room temperature 1 hour.',
		'Place rack in lower third of oven; preheat to 400°F.',
		'Season pork all over with salt and pepper. Heat oil in a large skillet over medium-high. Sear pork, turning occasionally, until browned on all sides (including ends), 10–12 minutes.',
		'Meanwhile, combine mustard, brown sugar, syrup, and thyme in a medium bowl.',
		'Pour apple cider into a large roasting pan or glass baking dish. Transfer pork, fat side up, to pan. Brush all over with mustard mixture. Roast pork, basting every 15 minutes, until an instant-read thermometer inserted into the center registers 140°F, 50–70 minutes.',
		'Transfer to a cutting board and let rest at least 15 minutes before slicing.',
		'Pork can be brined up to 24 hours ahead. Keep chilled in plastic bag.'
	],
	tags: [
		'pork',
		'brine',
		'mustard',
		'brine',
		'cider'
	],
	cooked: true,
	favorite: false,
	timestamp: generateUnixTimestamp(),
	versions: []
}, {
	id: v4(),
	title: 'Grain Bowl With Spiced Squash, Mushrooms, And Curried Yogurt',
	description: 'No squash? No problem. This rice bowl—which was developed for our #cook90 initiative—can handle all sorts of roasted vegetables (and, for that matter, can be made with all kinds of grains). But the curried yogurt? That\'s crucial.',
	photo: 'http://assets.epicurious.com/photos/58518af58105d5fb5ca89ca4/6:4/w_620%2Ch_413/cook-90-Grain-Bowl-with-Spiced-Squash-Mushrooms-and-Curried-Yogurt-recipe-08121016.jpg',
	video: undefined,
	ingredients: [
		'½ cup red, white, or brown rice, quinoa, or barley',
		'Kosher salt',
		'3 tablespoons olive oil',
		'¼ teaspoon freshly ground black pepper',
		'¼ teaspoon ground cinnamon',
		'1 medium delicata squash (about 1 pound), halved lengthwise, or ½ acorn squash (about 1 pound), quartered, seeded, cut crosswise into ½"-thick slices',
		'8 ounces cremini or button mushrooms, trimmed, sliced',
		'1 small red onion, sliced ½" thick',
		'½ cup Greek-style plain full or low-fat yogurt',
		'1½ teaspoons fresh lemon juice',
		'¼ teaspoon curry powder',
		'2 cups baby greens, such as watercress or arugula',
		'Lemon wedges and cilantro leaves (for serving; optional)'
	],
	directions: [
		'Preheat oven to 400°F. Cook grains with ½ tsp. salt according to package directions.',
		'Meanwhile, whisk oil, pepper, cinnamon, and ¾ tsp. salt with a fork in a large bowl. Add squash, mushrooms, and onion and toss to coat. Spread on a rimmed baking sheet and roast, tossing once halfway through, until vegetables are lightly browned and fork-tender, 25–30 minutes.',
		'Mix yogurt, lemon juice, curry powder, and ⅛ tsp. salt in a medium bowl. Divide yogurt mixture between 2 bowls, swooshing it along the side of the bowl if desired. Top with rice, then vegetables and greens. Squeeze with lemon and top with cilantro, if desired.'
	],
	tags: [
		'yogurt',
		'rice',
		'oliveoil',
		'cinnamon',
		'mushrooms'
	],
	cooked: false,
	favorite: false,
	timestamp: generateUnixTimestamp(),
	versions: []
}, {
	id: v4(),
	title: 'Mexican-Style Spicy Sweet Potato And Chicken Bowl',
	description: 'A one-pot evening meal with minimum fuss and maximum taste.',
	photo: 'http://assets.epicurious.com/photos/584abfa7024ba92504957ccd/6:4/w_620%2Ch_413/mexican-style-sweet-potato-chicken-bowl-hc-120816.jpg',
	video: undefined,
	ingredients: [
		'2 sweet potatoes, peeled and chopped into chunks',
		'Coconut oil, for greasing and frying',
		'1 garlic clove, crushed',
		'1 red onion, finely diced',
		'200g skinless chicken breast, cut into chunks',
		'1 teaspoons paprika, plus extra for sprinkling',
		'200g canned chopped tomatoes',
		'1 ripe avocado, pit removed and flesh cut into chunks',
		'2 tablespoons sour cream',
		'1 small handful of fresh cilantro',
		'Sea salt and freshly ground black pepper'
	],
	directions: [
		'Preheat the oven to 200°C/400°F/Gas Mark 6.',
		'Massage the sweet potato chunks with a little coconut oil, season well and then place onto a foil-lined tray. Bake in the oven for about 35 minutes.',
		'Meanwhile, heat a small amount of coconut oil in a frying pan, add the garlic and red onion and fry gently until slightly softened. Add the chicken breast chunks, lightly season with paprika and a pinch of salt and pepper and brown the chicken for a few minutes.',
		'Add the chopped tomatoes, then leave to simmer for 20 minutes until thickened.',
		'Once the sweet potato is cooked, add to the pan and stir through.',
		'Plate up, add the avocado, sour cream and sprinkle with fresh cilantro and paprika and serve.'
	],
	tags: [
		'potato',
		'onion',
		'paprika',
		'tomatoes',
		'pepper'
	],
	cooked: false,
	favorite: false,
	timestamp: generateUnixTimestamp(),
	versions: []
}, {
	id: v4(),
	title: 'Poached Cod With Potatoes And Leeks',
	description: 'Gently poaching fillets of delicate white fish in milk is the secret to an elegant yet effortless dinner.',
	photo: 'http://assets.epicurious.com/photos/580549d79bb3c66e1f64bc44/6:4/w_620%2Ch_413/poached-cod-potatoes-and-leeks-BA-101416.jpg',
	video: undefined,
	ingredients: [
		'1½ pounds small Yukon Gold potatoes',
		'Kosher salt',
		'2 tablespoons olive oil, plus more for drizzling',
		'2 medium leeks, white and pale-greens parts only, halved lengthwise, with some root attached',
		'4 sprigs thyme',
		'2 garlic cloves, smashed',
		'3 cups whole milk',
		'4 (6-ounce) skinless cod fillets',
		'Freshly ground black pepper'
	],
	directions: [
		'Place potatoes in a medium pot and add cold water to cover by 1"; season with salt and bring to a boil. Reduce heat and simmer until fork-tender, 15–20 minutes. Drain, reserving ¼ cup cooking liquid. Return potatoes to pot; add 2 Tbsp. cooking liquid and 2 Tbsp. oil and lightly mash. Season with salt. Keep potatoes warm over low heat until ready to serve.',
		'Combine leeks, thyme, garlic, and milk in a medium wide saucepan. Season generously with salt and bring to a simmer over medium heat. Cook until leeks are just beginning to soften, 6–8 minutes. Gently slide cod into infused milk and poach until flesh is cooked through and beginning to flake, 7–9 minutes (adjust heat as needed to maintain a low simmer; thicker pieces of fish will take longer to cook).',
		'Divide warm potatoes, leeks, and cod among shallow bowls. Spoon some poaching liquid over each. Drizzle with oil; season with pepper.'
	],
	tags: [
		'potato',
		'oliveoil',
		'leeks',
		'pepper'
	],
	cooked: true,
	favorite: false,
	timestamp: generateUnixTimestamp(),
	versions: []
}, {
	id: v4(),
	title: 'Millet "Burrito" Bowl',
	description: 'The millet is hearty and filling, and the beans provide a good amount of protein and fiber. Arugula and radishes in this mix lighten it up a bit and give good crunch. The dressing is bright and tangy, with lots of lime and toasted cumin.',
	photo: 'http://assets.epicurious.com/photos/57ed6cda157db2af0703b188/6:4/w_620%2Ch_413/Millet-Burrito-Bowl092916.jpg',
	video: undefined,
	ingredients: [
		'Kosher salt',
		'1½ cups millet',
		'4 tablespoons extra-virgin olive oil',
		'2 teaspoons whole cumin seeds',
		'¼ cup fresh lime juice (3 to 4 limes), plus 1 lime cut into wedges for serving',
		'¾ teaspoon ground coriander',
		'Freshly cracked black pepper',
		'1 (15-ounce) can pinto or black beans, drained and rinsed',
		'4 radishes, halved and thinly sliced',
		'4 scallions, finely chopped',
		'4 cups baby arugula or torn arugula',
		'¾ cup crumbled Cotija, feta, or goat cheese',
		'¼ cup roasted and salted pumpkin seeds (pepitas)',
		'Salsa and sour cream for serving (optional)'
	],
	directions: [
		'Bring a large pot of salted water to a boil over high heat. Add the millet and cook until the millet is tender, about 20 minutes. Drain and rinse under cool water, shaking out as much water as possible. Transfer the millet to a large bowl and toss with 1 tablespoon of the olive oil.',
		'Add the cumin seeds to a small dry skillet set over medium heat. Toast 3 to 5 minutes, shaking the pan regularly, until you smell a nutty aroma and hear some gratifying crackling and popping. Remove from skillet quickly to avoid burning. Transfer to a spice grinder or mortar and pestle to gently crush, or tip out onto a cutting board and use a heavy-bottomed pot to do the same.',
		'In a small bowl, combine the cumin, lime juice, coriander, 1 teaspoon salt, and pepper to taste. Whisk in the remaining 3 tablespoons olive oil.',
		'Add the pinto beans, radishes, scallions, and arugula to the bowl with the millet. Drizzle in the dressing and toss with a fork to combine. Sprinkle with the cheese and pumpkin seeds and serve with a lime wedge, plus salsa and sour cream on the side, if desired.',
		'Tip: Add even more protein by stirring in shredded cooked chicken or salmon, or a dose of healthy fat with chopped avocado.'
	],
	tags: [
		'millet',
		'coriander',
		'arugula',
		'pepper',
		'beans'
	],
	cooked: false,
	favorite: true,
	timestamp: generateUnixTimestamp(),
	versions: []
}, {
	id: v4(),
	title: 'Shaved Cauliflower Salad',
	description: 'Thinly sliced raw cauliflower takes center stage in this salad, tossed in a bright, limey dressing and dusted with nutritional yeast.',
	photo: 'http://assets.epicurious.com/photos/57d1f0b2b96ba7195757bfab/6:4/w_620%2Ch_413/shaved-cauliflower-salad-BA-090816.jpg',
	video: undefined,
	ingredients: [
		'1 teaspoon finely grated lime zest',
		'¼ cup fresh lime juice',
		'1 teaspoon Dijon mustard',
		'1 teaspoon honey',
		'¼ cup olive oil',
		'Kosher salt, freshly ground pepper',
		'10 ounces cauliflower florets (from about ½ of a small head), very thinly sliced lengthwise on a mandoline',
		'1 tablespoon plus 1 teaspoon nutritional yeast',
		'2 cups (1-inch-wide strips) lollo rosso lettuce or romaine',
		'2 cups torn frisée',
		'2 ounces Parmesan, finely grated, divided'
	],
	directions: [
		'Whisk lime zest, lime juice, mustard, and honey in a large bowl. Whisking constantly, gradually add oil; whisk until emulsified. Season with salt and pepper.',
		'Add cauliflower and 1 Tbsp. nutritional yeast to dressing; toss to combine. Add lettuce, frisée, and half of Parmesan and toss again; season with salt and pepper.',
		'Transfer salad to a platter and top with remaining Parmesan and remaining 1 tsp. nutritional yeast.'
	],
	tags: [
		'oliveoil',
		'mustard',
		'honey',
		'pepper',
		'parmesan'
	],
	cooked: false,
	favorite: false,
	timestamp: generateUnixTimestamp(),
	versions: []
}];

export default fakeRecipes;
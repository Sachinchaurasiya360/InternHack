import type { TopicTheory } from "./types";

export const aptitudeTheoryGeometryMensuration: TopicTheory[] = [
  {
    slug: "area",
    categorySlug: "aptitude",
    introduction:
      "Area is the measure of the space enclosed within a two-dimensional shape. Problems on area require knowledge of formulas for common geometric shapes like rectangles, squares, triangles, circles, parallelograms, trapeziums, and rhombuses.\n\nArea calculations are essential in real-world applications such as flooring, painting, farming, and construction. In competitive exams, questions often involve finding the area of composite shapes (combinations of basic shapes), calculating the area of a path or border around a shape, or relating area to perimeter.\n\nUnderstanding the relationship between dimensions and area is key. For example, if each side of a square is doubled, the area becomes four times the original. These scaling relationships are commonly tested. Also, many problems require converting units (e.g., cm² to m²) so unit awareness is critical.",
    concepts: [
      "Area is measured in square units (cm², m², km²).",
      "Perimeter is the total boundary length of a shape.",
      "For similar shapes, if dimensions scale by k, area scales by k².",
      "Area of a path = Area of outer shape - Area of inner shape.",
    ],
    formulas: [
      { name: "Rectangle", formula: "Area = length x breadth; Perimeter = 2(l + b)" },
      { name: "Square", formula: "Area = side²; Perimeter = 4 x side" },
      { name: "Triangle", formula: "Area = 1/2 x base x height" },
      {
        name: "Triangle (Heron's formula)",
        formula: "Area = √[s(s-a)(s-b)(s-c)], where s = (a+b+c)/2",
      },
      { name: "Equilateral Triangle", formula: "Area = (√3/4) x side²" },
      { name: "Circle", formula: "Area = πr²; Circumference = 2πr" },
      { name: "Semicircle", formula: "Area = πr²/2; Perimeter = πr + 2r" },
      { name: "Parallelogram", formula: "Area = base x height" },
      { name: "Trapezium", formula: "Area = 1/2 x (sum of parallel sides) x height" },
      { name: "Rhombus", formula: "Area = 1/2 x d1 x d2 (product of diagonals / 2)" },
    ],
    methods: [
      {
        name: "Direct Formula Application",
        steps: [
          "Identify the shape from the problem.",
          "Note the given dimensions.",
          "Apply the appropriate area formula.",
          "Convert units if needed.",
        ],
      },
      {
        name: "Composite Shape Problems",
        steps: [
          "Break the figure into basic shapes.",
          "Calculate the area of each basic shape.",
          "Add or subtract areas as needed.",
        ],
      },
      {
        name: "Path/Border Problems",
        steps: [
          "Find the outer dimensions (original + 2 x path width on each side).",
          "Area of path = Area of outer shape - Area of inner shape.",
        ],
      },
    ],
    quickTricks: [
      "Area of a square = diagonal²/2.",
      "If the radius of a circle doubles, area becomes 4 times.",
      "Area of an equilateral triangle with side a = (√3/4)a² ≈ 0.433a².",
      "For a rectangle with given perimeter, the square has the maximum area.",
      "1 hectare = 10,000 m². 1 km² = 100 hectares.",
    ],
    solvedExamples: [
      {
        problem:
          "Find the area of a triangle with sides 13, 14, and 15 cm.",
        solution:
          "Step 1: s = (13 + 14 + 15) / 2 = 21.\nStep 2: Area = √[s(s-a)(s-b)(s-c)] = √[21 x 8 x 7 x 6].\nStep 3: = √[21 x 8 x 7 x 6] = √7056 = 84 cm².",
        answer: "84 cm²",
      },
      {
        problem:
          "A rectangular garden 60 m x 40 m has a path of width 5 m around it. Find the area of the path.",
        solution:
          "Step 1: Outer dimensions = (60 + 10) x (40 + 10) = 70 x 50 = 3500 m².\nStep 2: Inner area = 60 x 40 = 2400 m².\nStep 3: Area of path = 3500 - 2400 = 1100 m².",
        answer: "1100 m²",
      },
      {
        problem:
          "The circumference of a circle is 44 cm. Find its area.",
        solution:
          "Step 1: 2πr = 44, so r = 44/(2 x 22/7) = 44 x 7/44 = 7 cm.\nStep 2: Area = πr² = 22/7 x 49 = 154 cm².",
        answer: "154 cm²",
      },
    ],
    commonMistakes: [
      "Confusing area (square units) with perimeter (linear units).",
      "In path problems, forgetting to add path width to BOTH sides, so outer length = l + 2w, not l + w.",
      "Using diameter instead of radius in circle area formula.",
    ],
    keyTakeaways: [
      "Memorize area formulas for all standard shapes.",
      "For composite shapes, decompose into basic shapes and add/subtract.",
      "Scaling: if dimensions multiply by k, area multiplies by k².",
      "Path area = Outer area - Inner area.",
      "Always check that your units are consistent and your final answer is in square units.",
    ],
  },
  {
    slug: "volume-and-surface-area",
    categorySlug: "aptitude",
    introduction:
      "Volume and Surface Area deal with three-dimensional objects such as cubes, cuboids, cylinders, cones, spheres, and hemispheres. Volume measures the space occupied by a solid, while surface area measures the total area of its outer surface.\n\nThese concepts have practical applications in packaging, construction, storage, and manufacturing. Competitive exams test your ability to compute volumes and surface areas quickly, and often present problems involving water filling containers, melting and recasting solids, or painting surfaces.\n\nA key concept is the relationship between scaling and volume/surface area. If all linear dimensions of a solid are multiplied by k, the surface area scales by k² and the volume scales by k³. This scaling principle is frequently used in problems involving similar solids.",
    concepts: [
      "Volume is measured in cubic units (cm³, m³, litres).",
      "Surface area is measured in square units.",
      "1 litre = 1000 cm³. 1 m³ = 1000 litres.",
      "Lateral surface area excludes the top and bottom faces.",
      "Total surface area includes all faces.",
    ],
    formulas: [
      { name: "Cube volume", formula: "V = a³; TSA = 6a²; LSA = 4a²" },
      { name: "Cuboid volume", formula: "V = lbh; TSA = 2(lb + bh + lh); LSA = 2h(l + b)" },
      { name: "Cylinder volume", formula: "V = πr²h; TSA = 2πr(r + h); CSA = 2πrh" },
      { name: "Cone volume", formula: "V = (1/3)πr²h; TSA = πr(r + l); CSA = πrl, where l = √(r² + h²)" },
      { name: "Sphere volume", formula: "V = (4/3)πr³; SA = 4πr²" },
      { name: "Hemisphere volume", formula: "V = (2/3)πr³; TSA = 3πr²; CSA = 2πr²" },
    ],
    methods: [
      {
        name: "Direct Calculation",
        steps: [
          "Identify the 3D shape from the problem.",
          "Note the given dimensions.",
          "Apply the appropriate formula for volume or surface area.",
          "Convert units if necessary (especially cm³ to litres).",
        ],
      },
      {
        name: "Melting and Recasting",
        steps: [
          "Calculate the volume of the original solid.",
          "Volume of the new solid = Volume of the original (material is conserved).",
          "Use the new shape's formula to find the missing dimension.",
        ],
      },
    ],
    quickTricks: [
      "Diagonal of a cuboid = √(l² + b² + h²). Diagonal of a cube = a√3.",
      "If a sphere is melted into a cylinder of the same radius, height = 4r/3.",
      "Volume of a cone is exactly 1/3 of the cylinder with the same base and height.",
      "For water filling problems, 1 litre = 1000 cm³ = 1000 ml.",
      "If dimensions scale by k: volume scales by k³, surface area scales by k².",
    ],
    solvedExamples: [
      {
        problem:
          "Find the volume and total surface area of a cylinder with radius 7 cm and height 10 cm. (Use π = 22/7)",
        solution:
          "Step 1: Volume = πr²h = (22/7) x 7² x 10 = (22/7) x 49 x 10 = 1540 cm³.\nStep 2: TSA = 2πr(r + h) = 2 x (22/7) x 7 x (7 + 10) = 2 x 22 x 17 = 748 cm².",
        answer: "Volume = 1540 cm³, TSA = 748 cm²",
      },
      {
        problem:
          "A metallic sphere of radius 6 cm is melted and recast into a cone of radius 6 cm. Find the height of the cone.",
        solution:
          "Step 1: Volume of sphere = (4/3)πr³ = (4/3)π(6)³ = (4/3)π(216) = 288π.\nStep 2: Volume of cone = (1/3)πr²h = (1/3)π(36)h = 12πh.\nStep 3: 288π = 12πh, so h = 24 cm.",
        answer: "24 cm",
      },
      {
        problem:
          "A cube has a total surface area of 150 cm². Find its volume.",
        solution:
          "Step 1: TSA of cube = 6a² = 150.\nStep 2: a² = 25, so a = 5 cm.\nStep 3: Volume = a³ = 125 cm³.",
        answer: "125 cm³",
      },
    ],
    commonMistakes: [
      "Confusing lateral/curved surface area with total surface area.",
      "Forgetting to use the slant height (l) for cone surface area instead of the vertical height (h).",
      "Not converting units properly, especially cm³ to litres (divide by 1000).",
    ],
    keyTakeaways: [
      "Memorize volume and surface area formulas for all standard 3D shapes.",
      "Volume is conserved in melting/recasting problems.",
      "Cone volume = 1/3 of cylinder volume with same base and height.",
      "Scaling by factor k: surface area x k², volume x k³.",
      "Always verify units, volume in cubic, surface area in square units.",
    ],
  },
  {
    slug: "height-and-distance",
    categorySlug: "aptitude",
    introduction:
      "Height and Distance problems use trigonometric ratios to find unknown heights, distances, and angles. These problems involve angles of elevation (looking upward from horizontal) and angles of depression (looking downward from horizontal).\n\nThe core trigonometric ratios are: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent. For most competitive exam problems, you only need the values of sin, cos, and tan for standard angles: 30°, 45°, and 60°.\n\nTypical problems involve finding the height of a tower, building, or tree given the angle of elevation from a certain distance, or finding the distance between two points given an angle of depression from a height. Some problems involve two observation points or objects moving toward/away from the base, requiring the setup of two right triangles that share a common side.",
    concepts: [
      "Angle of elevation: angle from horizontal looking UP at an object.",
      "Angle of depression: angle from horizontal looking DOWN at an object.",
      "Angle of depression from A to B = Angle of elevation from B to A (alternate angles).",
      "All height-distance problems are solved using right triangle trigonometry.",
    ],
    formulas: [
      { name: "tan θ", formula: "tan θ = Perpendicular / Base = Height / Distance" },
      { name: "sin θ", formula: "sin θ = Perpendicular / Hypotenuse" },
      { name: "cos θ", formula: "cos θ = Base / Hypotenuse" },
      { name: "Standard values", formula: "tan 30° = 1/√3, tan 45° = 1, tan 60° = √3" },
      { name: "More values", formula: "sin 30° = 1/2, sin 45° = 1/√2, sin 60° = √3/2" },
    ],
    methods: [
      {
        name: "Single Right Triangle",
        steps: [
          "Draw the figure with the right angle, height, and base.",
          "Identify the angle (elevation or depression).",
          "Use tan θ = height/distance (most common) to find the unknown.",
        ],
      },
      {
        name: "Two Triangle Problems",
        steps: [
          "Draw the figure with both observation points.",
          "Set up tan equations for each angle.",
          "Use the common side (usually the height) to link the two equations.",
          "Solve simultaneously.",
        ],
      },
    ],
    quickTricks: [
      "tan 45° = 1 means height = distance. If angle is 45°, it is an isosceles right triangle.",
      "tan 30° = 1/√3 ≈ 0.577. tan 60° = √3 ≈ 1.732.",
      "If angle of elevation increases, you are moving closer to the base.",
      "The shadow length of an object = height / tan(angle of elevation of the sun).",
      "For most exam problems, tan is the only ratio you need.",
    ],
    solvedExamples: [
      {
        problem:
          "A tower is 50 m high. Find the angle of elevation of the top from a point 50 m away from the base.",
        solution:
          "Step 1: tan θ = height / distance = 50/50 = 1.\nStep 2: θ = tan⁻¹(1) = 45°.",
        answer: "45°",
      },
      {
        problem:
          "From the top of a 60 m building, the angle of depression to a car on the ground is 30°. How far is the car from the building?",
        solution:
          "Step 1: Angle of depression = 30°, so angle of elevation from the car = 30°.\nStep 2: tan 30° = height/distance = 60/d.\nStep 3: 1/√3 = 60/d, so d = 60√3 ≈ 103.92 m.",
        answer: "60√3 m ≈ 103.92 m",
      },
      {
        problem:
          "The angle of elevation of the top of a tower from a point changes from 60° to 30° when the observer moves 40 m away from the tower. Find the height of the tower.",
        solution:
          "Step 1: Let height = h, initial distance = d.\nStep 2: From first point: tan 60° = h/d → √3 = h/d → d = h/√3.\nStep 3: From second point: tan 30° = h/(d+40) → 1/√3 = h/(d+40) → d + 40 = h√3.\nStep 4: Substitute d = h/√3: h/√3 + 40 = h√3.\nStep 5: 40 = h√3 - h/√3 = h(√3 - 1/√3) = h(3-1)/√3 = 2h/√3.\nStep 6: h = 40√3/2 = 20√3 ≈ 34.64 m.",
        answer: "20√3 m ≈ 34.64 m",
      },
    ],
    commonMistakes: [
      "Confusing angle of elevation with angle of depression, draw the figure first.",
      "Using sin or cos when tan is the appropriate ratio (height and distance are perpendicular and base).",
      "Forgetting standard trigonometric values for 30°, 45°, 60°.",
    ],
    keyTakeaways: [
      "Always draw the figure and mark the right angle, known sides, and angles.",
      "tan θ = opposite/adjacent = height/distance is the most used formula.",
      "Memorize tan values: tan 30° = 1/√3, tan 45° = 1, tan 60° = √3.",
      "Angle of depression from top = Angle of elevation from bottom.",
      "Two-triangle problems share a common side, use it to connect equations.",
    ],
  },
  {
    slug: "geometry",
    categorySlug: "aptitude",
    introduction:
      "Geometry deals with the properties and relationships of points, lines, angles, and shapes. For competitive exams, the focus is on properties of triangles, circles, quadrilaterals, and the relationships between angles formed by parallel lines and transversals.\n\nKey triangle properties include: the angle sum property (angles add up to 180°), the exterior angle theorem (exterior angle = sum of opposite interior angles), and special properties of isosceles, equilateral, and right triangles. The Pythagorean theorem (a² + b² = c² for right triangles) is one of the most frequently used results.\n\nCircle geometry involves understanding chords, tangents, arcs, sectors, and the relationships between angles subtended by arcs. Important results include: the angle in a semicircle is 90°, tangent is perpendicular to the radius at the point of contact, and the lengths of tangents from an external point are equal. Quadrilateral properties (parallelogram, rectangle, square, rhombus, trapezium) complete the essential toolkit.",
    concepts: [
      "Sum of angles in a triangle = 180°.",
      "Exterior angle = sum of opposite interior angles.",
      "Pythagorean theorem: In a right triangle, hypotenuse² = base² + perpendicular².",
      "Sum of angles in a quadrilateral = 360°.",
      "Tangent to a circle is perpendicular to the radius at the point of contact.",
    ],
    formulas: [
      { name: "Pythagorean theorem", formula: "c² = a² + b² (right triangle)" },
      {
        name: "Basic Proportionality Theorem",
        formula: "If a line is parallel to one side of a triangle, it divides the other two sides proportionally",
      },
      { name: "Mid-point theorem", formula: "Line joining midpoints of two sides is parallel to the third side and half its length" },
      {
        name: "Angle at center",
        formula: "Angle at center = 2 x angle at circumference (for same arc)",
      },
      { name: "Tangent-secant", formula: "Tangent² = External segment x Whole secant" },
      {
        name: "Sum of interior angles of polygon",
        formula: "(n - 2) x 180° for an n-sided polygon",
      },
    ],
    methods: [
      {
        name: "Triangle Problem Solving",
        steps: [
          "Identify the type of triangle (right, isosceles, equilateral, scalene).",
          "Apply the angle sum property to find missing angles.",
          "Use the Pythagorean theorem for right triangles.",
          "Apply similarity or congruence criteria as needed.",
        ],
      },
      {
        name: "Circle Problem Solving",
        steps: [
          "Identify the relevant elements (chord, tangent, secant, arc).",
          "Apply the appropriate circle theorem.",
          "Use angle properties (inscribed angle, central angle, etc.).",
        ],
      },
    ],
    quickTricks: [
      "Common Pythagorean triplets: (3,4,5), (5,12,13), (8,15,17), (7,24,25). Multiples also work.",
      "In an equilateral triangle, height = (√3/2) x side.",
      "Angle in a semicircle is always 90°.",
      "Tangent lengths from an external point are equal.",
      "For similar triangles, ratio of areas = square of ratio of corresponding sides.",
    ],
    solvedExamples: [
      {
        problem:
          "In a triangle, if two angles are 65° and 75°, find the third angle.",
        solution:
          "Step 1: Sum of angles = 180°.\nStep 2: Third angle = 180° - 65° - 75° = 40°.",
        answer: "40°",
      },
      {
        problem:
          "A ladder 13 m long leans against a wall. The foot of the ladder is 5 m from the wall. How high does the ladder reach on the wall?",
        solution:
          "Step 1: This forms a right triangle: ladder = hypotenuse = 13, base = 5.\nStep 2: Height² = 13² - 5² = 169 - 25 = 144.\nStep 3: Height = √144 = 12 m.",
        answer: "12 m",
      },
      {
        problem:
          "Two tangents are drawn from a point 15 cm from the center of a circle with radius 9 cm. Find the length of each tangent.",
        solution:
          "Step 1: Tangent is perpendicular to radius. So we have a right triangle with hypotenuse = 15 and one side = 9.\nStep 2: Tangent² = 15² - 9² = 225 - 81 = 144.\nStep 3: Tangent = 12 cm.",
        answer: "12 cm",
      },
    ],
    commonMistakes: [
      "Applying the Pythagorean theorem to non-right triangles.",
      "Confusing the angle at center (2x) with the inscribed angle (x) for the same arc.",
      "Forgetting that the tangent-radius angle is always 90°.",
    ],
    keyTakeaways: [
      "Triangle angle sum = 180°. Quadrilateral angle sum = 360°.",
      "Pythagorean theorem only applies to right triangles.",
      "Similar triangles: sides are proportional, areas are in ratio of squares of sides.",
      "Circle theorems are essential, angle in semicircle = 90°, tangent perpendicular to radius.",
      "Memorize common Pythagorean triplets for quick recognition.",
    ],
  },
  {
    slug: "trigonometry",
    categorySlug: "aptitude",
    introduction:
      "Trigonometry is the study of relationships between the sides and angles of triangles. The six trigonometric ratios, sine, cosine, tangent, cosecant, secant, and cotangent, are defined for an acute angle in a right triangle as ratios of different pairs of sides.\n\nFor a right triangle with angle θ: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent. The reciprocal ratios are: csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ. The fundamental identity sin²θ + cos²θ = 1 connects sine and cosine.\n\nFor competitive exams, you need to memorize the values of trigonometric ratios for standard angles (0°, 30°, 45°, 60°, 90°), know the important identities, and be able to simplify trigonometric expressions. Most aptitude problems involve simplification using identities rather than complex trigonometric equations.",
    concepts: [
      "sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent.",
      "csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ.",
      "tan θ = sin θ / cos θ, cot θ = cos θ / sin θ.",
      "Complementary angles: sin(90°-θ) = cos θ, cos(90°-θ) = sin θ.",
    ],
    formulas: [
      { name: "Pythagorean identity", formula: "sin²θ + cos²θ = 1" },
      { name: "Second identity", formula: "1 + tan²θ = sec²θ" },
      { name: "Third identity", formula: "1 + cot²θ = csc²θ" },
      {
        name: "Standard values table",
        formula: "sin: 0,1/2,1/√2,√3/2,1 for 0°,30°,45°,60°,90°. cos is reverse.",
      },
      {
        name: "tan values",
        formula: "tan: 0, 1/√3, 1, √3, ∞ for 0°,30°,45°,60°,90°",
      },
    ],
    methods: [
      {
        name: "Simplifying Trigonometric Expressions",
        steps: [
          "Convert all ratios to sin and cos.",
          "Apply identities (sin²+cos²=1, etc.) to simplify.",
          "Factor and cancel common terms.",
        ],
      },
      {
        name: "Evaluating at Standard Angles",
        steps: [
          "Substitute the standard angle value.",
          "Use the memorized values of sin, cos, tan.",
          "Simplify the arithmetic.",
        ],
      },
    ],
    quickTricks: [
      "To remember sin values for 0°-90°: √0/2, √1/2, √2/2, √3/2, √4/2 = 0, 1/2, 1/√2, √3/2, 1.",
      "cos values are sin values in reverse order.",
      "sin(90°-θ) = cos θ. This converts between complementary angles instantly.",
      "sec²θ - tan²θ = 1 and csc²θ - cot²θ = 1. Useful for factoring: (sec θ + tan θ)(sec θ - tan θ) = 1.",
      "tan 45° = 1 is the most commonly used value in height and distance problems.",
    ],
    solvedExamples: [
      {
        problem: "Find the value of sin²45° + cos²45°.",
        solution:
          "Step 1: sin 45° = 1/√2, cos 45° = 1/√2.\nStep 2: sin²45° + cos²45° = 1/2 + 1/2 = 1.\nNote: This is just the identity sin²θ + cos²θ = 1.",
        answer: "1",
      },
      {
        problem: "If sin θ = 3/5, find cos θ and tan θ (θ is acute).",
        solution:
          "Step 1: sin²θ + cos²θ = 1 → (3/5)² + cos²θ = 1 → 9/25 + cos²θ = 1.\nStep 2: cos²θ = 16/25 → cos θ = 4/5 (positive, since θ is acute).\nStep 3: tan θ = sin θ / cos θ = (3/5)/(4/5) = 3/4.",
        answer: "cos θ = 4/5, tan θ = 3/4",
      },
      {
        problem: "Simplify: (sec θ + tan θ)(sec θ - tan θ).",
        solution:
          "Step 1: This is of the form (a+b)(a-b) = a² - b².\nStep 2: = sec²θ - tan²θ = 1 (by identity).",
        answer: "1",
      },
    ],
    commonMistakes: [
      "Confusing sin and cos for complementary angles, sin 60° = cos 30°, not sin 30°.",
      "Forgetting that tan 90° and sec 90° are undefined.",
      "Applying Pythagorean identity incorrectly, it is sin²+cos²=1, not sin+cos=1.",
    ],
    keyTakeaways: [
      "Memorize sin/cos/tan for 0°, 30°, 45°, 60°, 90°.",
      "sin²θ + cos²θ = 1 is the fundamental identity.",
      "Convert everything to sin and cos for simplification.",
      "Complementary angle property: sin(90°-θ) = cos θ.",
      "sec²-tan² = 1 and csc²-cot² = 1 are quick factoring tools.",
    ],
  },
];

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Idea from '../models/Idea.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Database connected for Ultimate Seeding..."))
  .catch(err => console.log("❌ Connection error:", err));

const generateDetail = (capex, opex, roi, runRate, advantage, risk, sec) => ({
  budget: {
    totalCapexAmount: capex, monthlyBurnRate: opex, yearOneRoi: roi, totalGrossRunRate: runRate,
    allocations: [
      { category: "Setup & Infra", percentage: 50, description: "Core equipment and space setup." },
      { category: "Marketing & Ops", percentage: 30, description: "Initial boost and running capital." },
      { category: "Buffer", percentage: 20, description: "Contingency funds." }
    ],
    revenueStreams: [{ streamName: "Primary Sales/Services", margin: "High", estMonthly: runRate }]
  },
  roadmap: {
    phases: [{ phaseName: "Launch", monthRange: "Month 1-2", tasks: ["Setup", "Hiring", "Marketing"] }],
    detailedTasks: [{ description: "Initial Marketing Push", department: "Growth", duration: "2 Weeks", status: "In Progress" }]
  },
  growth: {
    customerRetention: 70, grossMargin: 45, marketPenetration: 15, yoyGrowth: "2x",
    scalingTimeline: [{ year: "Year 1", title: "Survival & Break-even", description: "Establish local presence." }]
  },
  location: {
    targetZones: [{ zoneName: "Core City", description: "High footfall/demand areas." }],
    demographics: [{ ageGroup: "18-35", percentage: 60 }, { ageGroup: "36+", percentage: 40 }],
    secTarget: sec,
    competitorAnalysis: [{ region: "Local", saturationLevel: "Medium", opportunity: advantage }],
    keyAdvantage: advantage, majorRisk: risk
  }
});

const ultimateSeedIdeas = [
  // ==========================================
  // BUCKET 1: 1 Lakh to 5 Lakh (Micro Level)
  // ==========================================
  {
    isTemplate: true, minBudget: 100000, maxBudget: 500000,
    title: "Niche Social Media Agency", category: "Digital Services",
    description: "Managing Instagram/TikTok for local cafes and salons.",
    estRoi: "45%", riskLevel: "Low", timeToLaunch: "1 Week", status: "suggested",
    brief: {
      roadmapSteps: [{ stepName: "Client Hunt", description: "Offer free trials." }],
      capexPercentage: 20, opexPercentage: 80, profitMargin: "60%", breakEvenPoint: "2 Months",
      targetAreas: ["DHA", "Tariq Road"], spaceRequirements: ["Remote"]
    },
    detail: generateDetail("PKR 100K", "PKR 50K", "45%", "PKR 150K", "Zero rent, high margins.", "High competition.", "SEC A & B")
  },
  {
    isTemplate: true, minBudget: 100000, maxBudget: 500000,
    title: "Home-based Catering (Baking)", category: "Food",
    description: "Specialized cakes and corporate lunch boxes from home kitchen.",
    estRoi: "40%", riskLevel: "Low", timeToLaunch: "2 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [{ stepName: "Menu & Testing", description: "Finalize packaging." }],
      capexPercentage: 40, opexPercentage: 60, profitMargin: "50%", breakEvenPoint: "3 Months",
      targetAreas: ["Gulshan", "Clifton"], spaceRequirements: ["Home Kitchen"]
    },
    detail: generateDetail("PKR 200K", "PKR 80K", "40%", "PKR 250K", "Low overhead, word of mouth.", "Delivery logistics.", "SEC A, B, C")
  },
  {
    isTemplate: true, minBudget: 100000, maxBudget: 500000,
    title: "Tech Skill Tutoring", category: "Education",
    description: "Online/Home tutoring for Python, Web Dev, or Graphic Design.",
    estRoi: "50%", riskLevel: "Low", timeToLaunch: "1 Week", status: "suggested",
    brief: {
      roadmapSteps: [{ stepName: "Course Outline", description: "Design 2-month bootcamps." }],
      capexPercentage: 30, opexPercentage: 70, profitMargin: "80%", breakEvenPoint: "1 Month",
      targetAreas: ["Pan-Karachi"], spaceRequirements: ["Laptop & Zoom"]
    },
    detail: generateDetail("PKR 150K", "PKR 30K", "50%", "PKR 200K", "Highly scalable online.", "Finding initial students.", "Students")
  },

  // ==========================================
  // BUCKET 2: 5 Lakh to 15 Lakh (Small Level)
  // ==========================================
  {
    isTemplate: true, minBudget: 500001, maxBudget: 1500000,
    title: "Cloud Kitchen (Fast Food)", category: "Food Tech",
    description: "Delivery-only burger & loaded fries brand via Foodpanda.",
    estRoi: "35%", riskLevel: "Medium", timeToLaunch: "4 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [{ stepName: "Setup", description: "Commercial kitchen equipment." }],
      capexPercentage: 60, opexPercentage: 40, profitMargin: "30%", breakEvenPoint: "6 Months",
      targetAreas: ["Johar", "Nazimabad"], spaceRequirements: ["300 sq ft Commercial"]
    },
    detail: generateDetail("PKR 900K", "PKR 200K", "35%", "PKR 600K", "No dining area costs.", "High delivery app commissions.", "SEC B & C")
  },
  {
    isTemplate: true, minBudget: 500001, maxBudget: 1500000,
    title: "Mobile Car Detailing", category: "Services",
    description: "Premium car wash and detailing at the customer's doorstep.",
    estRoi: "40%", riskLevel: "Low", timeToLaunch: "3 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [{ stepName: "Procurement", description: "Buy van, pressure washers, chemicals." }],
      capexPercentage: 70, opexPercentage: 30, profitMargin: "45%", breakEvenPoint: "5 Months",
      targetAreas: ["DHA", "PECHS"], spaceRequirements: ["Mini Van/Loader"]
    },
    detail: generateDetail("PKR 1M", "PKR 150K", "40%", "PKR 400K", "High convenience premium.", "Vehicle maintenance issues.", "SEC A & B+")
  },
  {
    isTemplate: true, minBudget: 500001, maxBudget: 1500000,
    title: "E-Com Dropshipping", category: "Retail/Tech",
    description: "Local dropshipping of trendy gadgets using Shopify & TikTok Ads.",
    estRoi: "45%", riskLevel: "High", timeToLaunch: "2 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [{ stepName: "Store & Ads", description: "Setup Shopify and connect local suppliers." }],
      capexPercentage: 30, opexPercentage: 70, profitMargin: "25%", breakEvenPoint: "3 Months",
      targetAreas: ["Nationwide"], spaceRequirements: ["Remote"]
    },
    detail: generateDetail("PKR 300K", "PKR 400K (Ads)", "45%", "PKR 1M", "No inventory risk.", "High ad spend burn.", "Youth")
  },

  // ==========================================
  // BUCKET 3: 15 Lakh to 30 Lakh (Mid Level)
  // ==========================================
  {
    isTemplate: true, minBudget: 1500001, maxBudget: 3000000,
    title: "Micro BPO & Chat Support", category: "Tech Services",
    description: "Outsourced customer service team for US/UK e-commerce stores.",
    estRoi: "30%", riskLevel: "Medium", timeToLaunch: "5 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [{ stepName: "Office Setup", description: "Rent space, setup 10 PCs, backup power." }],
      capexPercentage: 50, opexPercentage: 50, profitMargin: "40%", breakEvenPoint: "7 Months",
      targetAreas: ["Shahrah-e-Faisal"], spaceRequirements: ["800 sq ft Office"]
    },
    detail: generateDetail("PKR 1.2M", "PKR 500K", "30%", "PKR 1.5M", "Dollar earnings.", "Employee retention.", "B2B")
  },
  {
    isTemplate: true, minBudget: 1500001, maxBudget: 3000000,
    title: "Specialty Coffee Cart", category: "F&B",
    description: "Aesthetically pleasing, high-end mobile coffee cart for events/malls.",
    estRoi: "35%", riskLevel: "Medium", timeToLaunch: "6 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [{ stepName: "Machines & Beans", description: "Import espresso machines." }],
      capexPercentage: 70, opexPercentage: 30, profitMargin: "50%", breakEvenPoint: "8 Months",
      targetAreas: ["Clifton", "DHA Malls"], spaceRequirements: ["Cart/Kiosk Space"]
    },
    detail: generateDetail("PKR 1.8M", "PKR 300K", "35%", "PKR 800K", "High profit on beverages.", "Mall rental costs.", "SEC A")
  },
  {
    isTemplate: true, minBudget: 1500001, maxBudget: 3000000,
    title: "Boutique Fitness Studio", category: "Health & Fitness",
    description: "Small group training studio (Yoga, Pilates, HIIT).",
    estRoi: "25%", riskLevel: "Low", timeToLaunch: "8 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [{ stepName: "Lease & Equip", description: "Mirrors, mats, basic weights." }],
      capexPercentage: 60, opexPercentage: 40, profitMargin: "35%", breakEvenPoint: "10 Months",
      targetAreas: ["KDA", "Bahadurabad"], spaceRequirements: ["1000 sq ft Hall"]
    },
    detail: generateDetail("PKR 1.5M", "PKR 400K", "25%", "PKR 900K", "Subscription revenue model.", "Slow initial growth.", "SEC A & B")
  },

  // ==========================================
  // BUCKET 4: 30 Lakh to 60 Lakh (Premium)
  // ==========================================
  {
    isTemplate: true, minBudget: 3000001, maxBudget: 6000000,
    title: "Software Development House", category: "Tech",
    description: "Building custom apps and websites for international clients.",
    estRoi: "40%", riskLevel: "High", timeToLaunch: "4 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [{ stepName: "Core Team Hiring", description: "Hire Senior Devs and QA." }],
      capexPercentage: 40, opexPercentage: 60, profitMargin: "50%", breakEvenPoint: "6 Months",
      targetAreas: ["I.I Chundrigar", "Clifton"], spaceRequirements: ["1500 sq ft Office"]
    },
    detail: generateDetail("PKR 2M", "PKR 1M", "40%", "PKR 3M", "Massive global scale.", "Finding reliable developers.", "B2B")
  },
  {
    isTemplate: true, minBudget: 3000001, maxBudget: 6000000,
    title: "Modern Co-Working Space", category: "Real Estate/Services",
    description: "Aesthetically pleasing shared office space with internet & coffee.",
    estRoi: "20%", riskLevel: "Medium", timeToLaunch: "10 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [{ stepName: "Interior & Network", description: "Furnishings and enterprise fiber." }],
      capexPercentage: 80, opexPercentage: 20, profitMargin: "30%", breakEvenPoint: "12 Months",
      targetAreas: ["Shahrah-e-Faisal"], spaceRequirements: ["3000 sq ft Commercial Floor"]
    },
    detail: generateDetail("PKR 4M", "PKR 600K", "20%", "PKR 1.5M", "Recurring passive income.", "High electricity/generator costs.", "Freelancers/Startups")
  },
  {
    isTemplate: true, minBudget: 3000001, maxBudget: 6000000,
    title: "Wholesale Apparel Brand", category: "Retail",
    description: "Manufacturing basic tees/hoodies and supplying to local brands.",
    estRoi: "35%", riskLevel: "Medium", timeToLaunch: "8 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [{ stepName: "Machinery Setup", description: "Stitching units and fabric sourcing." }],
      capexPercentage: 60, opexPercentage: 40, profitMargin: "25%", breakEvenPoint: "9 Months",
      targetAreas: ["S.I.T.E Area", "Korangi"], spaceRequirements: ["Small Factory Unit"]
    },
    detail: generateDetail("PKR 3.5M", "PKR 800K", "35%", "PKR 2.5M", "B2B bulk orders.", "Supply chain delays.", "B2B")
  },

  // ==========================================
  // BUCKET 5: 60 Lakh to 1 Crore (Enterprise Level)
  // ==========================================
  {
    isTemplate: true, minBudget: 6000001, maxBudget: 10000000,
    title: "Solar Panel Installation Firm", category: "Energy / Tech",
    description: "Residential and commercial solar grid setups.",
    estRoi: "45%", riskLevel: "Low", timeToLaunch: "6 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [{ stepName: "Licensing & Import", description: "AEDB registration and vendor tie-ups." }],
      capexPercentage: 30, opexPercentage: 70, profitMargin: "20%", breakEvenPoint: "4 Months",
      targetAreas: ["DHA", "Malir Cantt", "Industrial"], spaceRequirements: ["Office & Warehouse"]
    },
    detail: generateDetail("PKR 3M", "PKR 4M (Inventory)", "45%", "PKR 10M", "High current market demand.", "Import restrictions/taxes.", "Homeowners & Factories")
  },
  {
    isTemplate: true, minBudget: 6000001, maxBudget: 10000000,
    title: "Mini-Supermarket / Mart", category: "Retail",
    description: "Modern, air-conditioned neighborhood grocery mart.",
    estRoi: "15%", riskLevel: "Low", timeToLaunch: "12 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [{ stepName: "Inventory & POS", description: "Racks, chillers, and stocking." }],
      capexPercentage: 70, opexPercentage: 30, profitMargin: "12%", breakEvenPoint: "14 Months",
      targetAreas: ["Newly built societies", "Scheme 33"], spaceRequirements: ["2000+ sq ft Ground Floor"]
    },
    detail: generateDetail("PKR 6M", "PKR 1.5M", "15%", "PKR 5M", "Consistent daily cash flow.", "Theft and expiry of goods.", "General Public")
  },
  {
    isTemplate: true, minBudget: 6000001, maxBudget: 10000000,
    title: "Diagnostic Lab / Collection Center", category: "Healthcare",
    description: "Medical testing lab franchise or independent setup.",
    estRoi: "25%", riskLevel: "Low", timeToLaunch: "10 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [{ stepName: "Medical Equipment", description: "Analyzers, licensing, and staff." }],
      capexPercentage: 80, opexPercentage: 20, profitMargin: "35%", breakEvenPoint: "12 Months",
      targetAreas: ["Near major hospitals"], spaceRequirements: ["1000 sq ft Commercial"]
    },
    detail: generateDetail("PKR 7M", "PKR 800K", "25%", "PKR 2.5M", "Recession-proof industry.", "Strict regulatory compliance.", "Patients/Doctors")
  }
];

const seedDB = async () => {
  try {
    await Idea.deleteMany({ isTemplate: true }); 
    await Idea.insertMany(ultimateSeedIdeas); 
    console.log(`🚀 Successfully Seeded ${ultimateSeedIdeas.length} Ideas across 5 Budget Buckets!`);
    process.exit();
  } catch (err) {
    console.log("❌ Seeding error:", err);
    process.exit(1);
  }
};

seedDB();
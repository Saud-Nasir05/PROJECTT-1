/*import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Idea from '../models/Idea.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Database connected for Ultimate Seeding..."))
  .catch(err => console.log("❌ Connection error:", err));

// Dynamic detail generator (ab 'zones' bhi accept karega 3 locations ke liye)
const generateDetail = ({
  capex, opex, roi, runRate, advantage, risk, sec,
  allocations, revenueStreams, phases, tasks, scaling, competitors, zones
}) => ({
  budget: {
    totalCapexAmount: capex, monthlyBurnRate: opex, yearOneRoi: roi, totalGrossRunRate: runRate,
    allocations: allocations,
    revenueStreams: revenueStreams
  },
  roadmap: {
    phases: phases,
    detailedTasks: tasks
  },
  growth: {
    customerRetention: 75, grossMargin: 50, marketPenetration: 20, yoyGrowth: "2.5x",
    scalingTimeline: scaling
  },
  location: {
    targetZones: zones,
    demographics: [{ ageGroup: "18-25", percentage: 45 }, { ageGroup: "26-40", percentage: 55 }],
    secTarget: sec,
    competitorAnalysis: competitors,
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
      roadmapSteps: [
        { stepName: "Setup Profile", description: "Create agency pages on Insta/TikTok." },
        { stepName: "Client Hunt", description: "Offer free trials to local cafes." },
        { stepName: "Content Strategy", description: "Plan 1-month content calendar." },
        { stepName: "Scale", description: "Run ads to get paid retainers." }
      ],
      capexPercentage: 20, opexPercentage: 80, profitMargin: "60%", breakEvenPoint: "2 Months",
      targetAreas: ["DHA", "Tariq Road", "Clifton"], spaceRequirements: ["Remote"]
    },
    detail: generateDetail({
      capex: "PKR 100K", opex: "PKR 50K", roi: "45%", runRate: "PKR 150K", advantage: "Zero rent, high margins.", risk: "Client churn.", sec: "SEC A & B",
      allocations: [{ category: "Software Subs", percentage: 40, description: "Canva, Hootsuite" }, { category: "Ad Spend", percentage: 60, description: "Self-promo ads" }],
      revenueStreams: [{ streamName: "Monthly Retainers", margin: "70%", estMonthly: "PKR 120K" }, { streamName: "One-off Audits", margin: "90%", estMonthly: "PKR 30K" }],
      phases: [{ phaseName: "Launch", monthRange: "Month 1", tasks: ["Setup Profiles", "Cold Outreach"] }, { phaseName: "Scale", monthRange: "Month 2", tasks: ["Hire Freelancers", "Run Ads"] }],
      tasks: [{ description: "Pitch 50 Local Cafes", department: "Sales", duration: "1 Week", status: "In Progress" }],
      scaling: [{ year: "Year 1", title: "Local Domination", description: "10 active retainers." }, { year: "Year 2", title: "International", description: "Upwork clients." }],
      competitors: [{ region: "Local", saturationLevel: "High", opportunity: "Most lack TikTok skills." }],
      zones: [
        { zoneName: "DHA Phase 6", description: "High concentration of premium cafes." },
        { zoneName: "Clifton Block 4", description: "Boutique salons and eateries." },
        { zoneName: "Tariq Road", description: "High volume retail shops." }
      ]
    })
  },
  {
    isTemplate: true, minBudget: 100000, maxBudget: 500000,
    title: "Home-based Catering (Baking)", category: "Food",
    description: "Specialized cakes and corporate lunch boxes from home kitchen.",
    estRoi: "40%", riskLevel: "Low", timeToLaunch: "2 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Menu & Testing", description: "Finalize recipes and packaging." },
        { stepName: "Legal & Hygiene", description: "Basic food safety setup." },
        { stepName: "Marketing Push", description: "Send samples to local influencers." },
        { stepName: "Launch Delivery", description: "Start accepting online orders." }
      ],
      capexPercentage: 40, opexPercentage: 60, profitMargin: "50%", breakEvenPoint: "3 Months",
      targetAreas: ["Gulshan", "Clifton", "PECHS"], spaceRequirements: ["Home Kitchen"]
    },
    detail: generateDetail({
      capex: "PKR 200K", opex: "PKR 80K", roi: "40%", runRate: "PKR 250K", advantage: "Home hygiene trust.", risk: "Delivery logistics.", sec: "SEC A & B",
      allocations: [{ category: "Baking Equipment", percentage: 70, description: "Ovens, pans" }, { category: "Packaging", percentage: 30, description: "Custom boxes" }],
      revenueStreams: [{ streamName: "Custom Cakes", margin: "60%", estMonthly: "PKR 150K" }, { streamName: "Lunch Boxes", margin: "40%", estMonthly: "PKR 100K" }],
      phases: [{ phaseName: "Testing", monthRange: "Month 1", tasks: ["Finalize Recipes", "Buy Oven"] }, { phaseName: "Launch", monthRange: "Month 2", tasks: ["Insta Ads", "First Orders"] }],
      tasks: [{ description: "Food Packaging Sourcing", department: "Procurement", duration: "2 Weeks", status: "To Do" }],
      scaling: [{ year: "Year 1", title: "Break-even", description: "Daily 10 orders." }, { year: "Year 2", title: "Commercial Kitchen", description: "Move out of home." }],
      competitors: [{ region: "Online", saturationLevel: "Medium", opportunity: "Corporate B2B lunches." }],
      zones: [
        { zoneName: "Gulshan-e-Iqbal", description: "High density family residential." },
        { zoneName: "PECHS", description: "Mix of corporate and residential." },
        { zoneName: "Clifton", description: "Premium customized cake orders." }
      ]
    })
  },
  {
    isTemplate: true, minBudget: 100000, maxBudget: 500000,
    title: "Tech Skill Tutoring", category: "Education",
    description: "Online/Home tutoring for Python, Web Dev, or Graphic Design.",
    estRoi: "50%", riskLevel: "Low", timeToLaunch: "1 Week", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Course Outline", description: "Design 2-month bootcamps." },
        { stepName: "Setup Tools", description: "Zoom, Google Classroom, and drawing pad." },
        { stepName: "Marketing", description: "Facebook ads targeting students." },
        { stepName: "First Batch", description: "Onboard first 5-10 students." }
      ],
      capexPercentage: 30, opexPercentage: 70, profitMargin: "80%", breakEvenPoint: "1 Month",
      targetAreas: ["Pan-Karachi", "Remote", "DHA"], spaceRequirements: ["Laptop & Zoom"]
    },
    detail: generateDetail({
      capex: "PKR 150K", opex: "PKR 30K", roi: "50%", runRate: "PKR 200K", advantage: "Highly scalable online.", risk: "Finding initial students.", sec: "Students",
      allocations: [{ category: "Digital Setup", percentage: 50, description: "Zoom Pro, Mic, Pen Tab" }, { category: "Marketing", percentage: 50, description: "FB/Insta Ads" }],
      revenueStreams: [{ streamName: "Online Bootcamps", margin: "90%", estMonthly: "PKR 150K" }, { streamName: "1-on-1 Mentorship", margin: "100%", estMonthly: "PKR 50K" }],
      phases: [{ phaseName: "Curriculum", monthRange: "Week 1", tasks: ["Record Intro Videos", "Setup Ads"] }, { phaseName: "Enrollment", monthRange: "Week 2", tasks: ["Free Webinars", "Start Classes"] }],
      tasks: [{ description: "Create Course Syllabus", department: "Academic", duration: "1 Week", status: "Done" }],
      scaling: [{ year: "Year 1", title: "Batch Model", description: "3 parallel batches." }, { year: "Year 2", title: "Recorded Courses", description: "Passive income via Udemy." }],
      competitors: [{ region: "Global Platforms", saturationLevel: "High", opportunity: "Urdu/Hindi localized teaching." }],
      zones: [
        { zoneName: "Pan-Karachi", description: "Online students across city." },
        { zoneName: "DHA/Clifton", description: "Premium 1-on-1 home tutoring." },
        { zoneName: "University Hubs", description: "Targeting CS undergrads." }
      ]
    })
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
      roadmapSteps: [
        { stepName: "Location & Setup", description: "Rent cheap space and buy equipment." },
        { stepName: "Menu Testing", description: "Finalize taste and packaging." },
        { stepName: "App Integration", description: "Register on Foodpanda." },
        { stepName: "Digital Marketing", description: "Run geo-targeted Instagram ads." }
      ],
      capexPercentage: 60, opexPercentage: 40, profitMargin: "30%", breakEvenPoint: "6 Months",
      targetAreas: ["Johar", "Nazimabad", "Gulshan"], spaceRequirements: ["300 sq ft Commercial"]
    },
    detail: generateDetail({
      capex: "PKR 900K", opex: "PKR 200K", roi: "35%", runRate: "PKR 600K", advantage: "No dine-in cost.", risk: "App commissions.", sec: "SEC B & C",
      allocations: [{ category: "Commercial Setup", percentage: 80, description: "Fryers, Exhaust" }, { category: "Licensing", percentage: 20, description: "Food Auth." }],
      revenueStreams: [{ streamName: "Foodpanda/InDrive", margin: "25%", estMonthly: "PKR 500K" }, { streamName: "Direct WhatsApp", margin: "45%", estMonthly: "PKR 100K" }],
      phases: [{ phaseName: "Build", monthRange: "Month 1", tasks: ["Kitchen Setup", "Hire Chef"] }, { phaseName: "Live", monthRange: "Month 2", tasks: ["App Registration", "Influencer PR"] }],
      tasks: [{ description: "Health Dept Approval", department: "Legal", duration: "3 Weeks", status: "In Progress" }],
      scaling: [{ year: "Year 1", title: "Brand Setup", description: "100 orders/day." }, { year: "Year 2", title: "Multiple Brands", description: "Launch pizza from same kitchen." }],
      competitors: [{ region: "Foodpanda", saturationLevel: "High", opportunity: "Late night delivery gap." }],
      zones: [
        { zoneName: "Gulistan-e-Johar", description: "High volume, late night foodies." },
        { zoneName: "Nazimabad", description: "Dense population, affordable fast food." },
        { zoneName: "Gulshan-e-Iqbal", description: "Student and family mix." }
      ]
    })
  },
  {
    isTemplate: true, minBudget: 500001, maxBudget: 1500000,
    title: "Mobile Car Detailing", category: "Services",
    description: "Premium car wash and detailing at the customer's doorstep.",
    estRoi: "40%", riskLevel: "Low", timeToLaunch: "3 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Procurement", description: "Buy van, pressure washers, chemicals." },
        { stepName: "Branding", description: "Wrap the van and create social media pages." },
        { stepName: "Booking System", description: "Set up WhatsApp Business API." },
        { stepName: "First Job", description: "Offer discounted first wash in target areas." }
      ],
      capexPercentage: 70, opexPercentage: 30, profitMargin: "45%", breakEvenPoint: "5 Months",
      targetAreas: ["DHA", "PECHS", "KDA"], spaceRequirements: ["Mini Van/Loader"]
    },
    detail: generateDetail({
      capex: "PKR 1M", opex: "PKR 150K", roi: "40%", runRate: "PKR 400K", advantage: "High convenience premium.", risk: "Vehicle breakdown.", sec: "SEC A & B+",
      allocations: [{ category: "Equipment Van", percentage: 70, description: "Loader van & water tank" }, { category: "Chemicals & Tools", percentage: 30, description: "Polish, vacuums" }],
      revenueStreams: [{ streamName: "Basic Wash", margin: "50%", estMonthly: "PKR 150K" }, { streamName: "Ceramic Coating", margin: "70%", estMonthly: "PKR 250K" }],
      phases: [{ phaseName: "Procurement", monthRange: "Week 1-2", tasks: ["Buy Van", "Get Equipment"] }, { phaseName: "Launch", monthRange: "Week 3", tasks: ["FB Ads", "First Client"] }],
      tasks: [{ description: "Van Branding Wrap", department: "Marketing", duration: "1 Week", status: "To Do" }],
      scaling: [{ year: "Year 1", title: "Full Calendar", description: "5 cars a day." }, { year: "Year 2", title: "Fleet Expansion", description: "Add 2nd van." }],
      competitors: [{ region: "Local Service Stations", saturationLevel: "High", opportunity: "Time-saving doorstep service." }],
      zones: [
        { zoneName: "DHA / Clifton", description: "Luxury cars needing ceramic coating." },
        { zoneName: "PECHS / KDA", description: "Busy professionals wanting doorstep service." },
        { zoneName: "Bahadurabad", description: "Family cars weekend detailing." }
      ]
    })
  },
  {
    isTemplate: true, minBudget: 500001, maxBudget: 1500000,
    title: "E-Com Dropshipping", category: "Retail/Tech",
    description: "Local dropshipping of trendy gadgets using Shopify & TikTok Ads.",
    estRoi: "45%", riskLevel: "High", timeToLaunch: "2 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Niche Selection", description: "Find winning products from local suppliers." },
        { stepName: "Store Setup", description: "Create Shopify store and add products." },
        { stepName: "Creative Testing", description: "Launch TikTok and FB ad campaigns." },
        { stepName: "Scaling", description: "Increase budget on winning ads." }
      ],
      capexPercentage: 30, opexPercentage: 70, profitMargin: "25%", breakEvenPoint: "3 Months",
      targetAreas: ["Nationwide", "Karachi", "Lahore"], spaceRequirements: ["Remote"]
    },
    detail: generateDetail({
      capex: "PKR 300K", opex: "PKR 400K", roi: "45%", runRate: "PKR 1M", advantage: "No inventory.", risk: "Ad costs.", sec: "Youth",
      allocations: [{ category: "Ad Budget", percentage: 80, description: "FB/TikTok Ads" }, { category: "Store Dev", percentage: 20, description: "Themes & Apps" }],
      revenueStreams: [{ streamName: "Gadget Sales", margin: "30%", estMonthly: "PKR 1M" }],
      phases: [{ phaseName: "Sourcing", monthRange: "Week 1", tasks: ["Find Supplier", "Build Store"] }, { phaseName: "Scaling", monthRange: "Week 2", tasks: ["Testing Ads", "Fulfillment"] }],
      tasks: [{ description: "Record TikTok Ad Creatives", department: "Marketing", duration: "1 Week", status: "To Do" }],
      scaling: [{ year: "Year 1", title: "Winning Product", description: "Find 1 winner." }, { year: "Year 2", title: "White Label", description: "Import own inventory." }],
      competitors: [{ region: "Social Media", saturationLevel: "High", opportunity: "Better video creatives." }],
      zones: [
        { zoneName: "Karachi", description: "Fastest delivery, main cash flow." },
        { zoneName: "Lahore", description: "High purchasing power for gadgets." },
        { zoneName: "Islamabad", description: "Premium accessory buyers." }
      ]
    })
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
      roadmapSteps: [
        { stepName: "Office Setup", description: "Rent space, setup 10 PCs, backup power." },
        { stepName: "Hiring", description: "Recruit fluent English speakers." },
        { stepName: "Training", description: "Train staff on Shopify and CRM tools." },
        { stepName: "Client Onboarding", description: "Start operations for first 2 international clients." }
      ],
      capexPercentage: 50, opexPercentage: 50, profitMargin: "40%", breakEvenPoint: "7 Months",
      targetAreas: ["Shahrah-e-Faisal", "Tariq Road", "I.I Chundrigar"], spaceRequirements: ["800 sq ft Office"]
    },
    detail: generateDetail({
      capex: "PKR 1.2M", opex: "PKR 500K", roi: "30%", runRate: "PKR 1.5M", advantage: "Dollar income.", risk: "Power outages.", sec: "B2B",
      allocations: [{ category: "Hardware", percentage: 60, description: "10 PCs, UPS" }, { category: "Deposit", percentage: 40, description: "Office Advance" }],
      revenueStreams: [{ streamName: "US E-com Support", margin: "50%", estMonthly: "PKR 1M" }, { streamName: "Data Entry Tasks", margin: "40%", estMonthly: "PKR 500K" }],
      phases: [{ phaseName: "Infrastructure", monthRange: "Month 1", tasks: ["Internet", "Systems"] }, { phaseName: "Ops", monthRange: "Month 2", tasks: ["Training", "Go Live"] }],
      tasks: [{ description: "Setup Backup Generator", department: "IT", duration: "1 Week", status: "Blocker" }],
      scaling: [{ year: "Year 1", title: "10 Seats", description: "Fill current capacity." }, { year: "Year 2", title: "24/7 Operations", description: "Add night shifts." }],
      competitors: [{ region: "Global", saturationLevel: "Medium", opportunity: "Lower rates than Philippines." }],
      zones: [
        { zoneName: "Shahrah-e-Faisal", description: "Accessible for night shift employees." },
        { zoneName: "I.I Chundrigar", description: "Corporate fiber internet stability." },
        { zoneName: "Tariq Road Area", description: "Centralized location for hiring." }
      ]
    })
  },
  {
    isTemplate: true, minBudget: 1500001, maxBudget: 3000000,
    title: "Specialty Coffee Cart", category: "F&B",
    description: "Aesthetically pleasing, high-end mobile coffee cart for events/malls.",
    estRoi: "35%", riskLevel: "Medium", timeToLaunch: "6 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Cart Design", description: "Fabricate a highly aesthetic mobile cart." },
        { stepName: "Procurement", description: "Import espresso machines and quality beans." },
        { stepName: "Location Tie-ups", description: "Secure spots in malls or corporate buildings." },
        { stepName: "Launch", description: "Soft opening with influencer tasting." }
      ],
      capexPercentage: 70, opexPercentage: 30, profitMargin: "50%", breakEvenPoint: "8 Months",
      targetAreas: ["Clifton", "DHA Malls", "SMCHS"], spaceRequirements: ["Cart/Kiosk Space"]
    },
    detail: generateDetail({
      capex: "PKR 1.8M", opex: "PKR 300K", roi: "35%", runRate: "PKR 800K", advantage: "High profit on beverages.", risk: "Mall rental costs.", sec: "SEC A",
      allocations: [{ category: "Espresso Machine", percentage: 60, description: "Dual boiler import" }, { category: "Cart Fabrication", percentage: 40, description: "Aesthetic wooden cart" }],
      revenueStreams: [{ streamName: "Coffee Sales", margin: "75%", estMonthly: "PKR 600K" }, { streamName: "Event Catering", margin: "60%", estMonthly: "PKR 200K" }],
      phases: [{ phaseName: "Build", monthRange: "Month 1", tasks: ["Cart Design", "Buy Machine"] }, { phaseName: "Deploy", monthRange: "Month 2", tasks: ["Secure Location", "Launch"] }],
      tasks: [{ description: "Negotiate Mall Kiosk Space", department: "Admin", duration: "2 Weeks", status: "In Progress" }],
      scaling: [{ year: "Year 1", title: "Mall Presence", description: "Establish daily walk-ins." }, { year: "Year 2", title: "Events Fleet", description: "Build 2 more carts for weddings." }],
      competitors: [{ region: "Local Cafes", saturationLevel: "High", opportunity: "Mobile and aesthetic appeal." }],
      zones: [
        { zoneName: "DHA Malls", description: "High SEC A footfall, impulse buying." },
        { zoneName: "Clifton Corporate", description: "Morning office crowd coffee runs." },
        { zoneName: "SMCHS", description: "Evening youth hangout spots." }
      ]
    })
  },
  {
    isTemplate: true, minBudget: 1500001, maxBudget: 3000000,
    title: "Boutique Fitness Studio", category: "Health & Fitness",
    description: "Small group training studio (Yoga, Pilates, HIIT).",
    estRoi: "25%", riskLevel: "Low", timeToLaunch: "8 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Lease & Interior", description: "Setup mirrors, mats, and sound system." },
        { stepName: "Equipment", description: "Purchase basic weights and specialized gear." },
        { stepName: "Trainer Hiring", description: "Onboard certified fitness instructors." },
        { stepName: "Pre-sales", description: "Sell discounted early-bird memberships." }
      ],
      capexPercentage: 60, opexPercentage: 40, profitMargin: "35%", breakEvenPoint: "10 Months",
      targetAreas: ["KDA", "Bahadurabad", "Clifton"], spaceRequirements: ["1000 sq ft Hall"]
    },
    detail: generateDetail({
      capex: "PKR 1.5M", opex: "PKR 400K", roi: "25%", runRate: "PKR 900K", advantage: "Recurring subs.", risk: "Slow start.", sec: "SEC A & B",
      allocations: [{ category: "Renovation", percentage: 70, description: "Flooring, Mirrors" }, { category: "Equipment", percentage: 30, description: "Weights, Mats" }],
      revenueStreams: [{ streamName: "Monthly Subs", margin: "80%", estMonthly: "PKR 600K" }, { streamName: "Personal Training", margin: "50%", estMonthly: "PKR 300K" }],
      phases: [{ phaseName: "Build", monthRange: "Month 1-2", tasks: ["Interior", "Hire Trainers"] }, { phaseName: "Launch", monthRange: "Month 3", tasks: ["Pre-sales", "Opening"] }],
      tasks: [{ description: "Trainer Certification Checks", department: "HR", duration: "2 Weeks", status: "In Progress" }],
      scaling: [{ year: "Year 1", title: "100 Members", description: "Reach capacity." }, { year: "Year 2", title: "Apparel Line", description: "Sell gym wear." }],
      competitors: [{ region: "Local Gyms", saturationLevel: "High", opportunity: "Focus on females/Pilates." }],
      zones: [
        { zoneName: "Bahadurabad", description: "High demand for female-only studios." },
        { zoneName: "KDA Scheme 1", description: "Premium clientele for personal training." },
        { zoneName: "Clifton", description: "Trendy yoga and pilates crowd." }
      ]
    })
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
      roadmapSteps: [
        { stepName: "Legal & Setup", description: "Register company and setup bank accounts." },
        { stepName: "Core Team Hiring", description: "Hire Senior Devs, QA, and PM." },
        { stepName: "Portfolio Building", description: "Develop 2-3 strong internal case studies." },
        { stepName: "Client Outreach", description: "Start Upwork and direct LinkedIn outreach." }
      ],
      capexPercentage: 40, opexPercentage: 60, profitMargin: "50%", breakEvenPoint: "6 Months",
      targetAreas: ["I.I Chundrigar", "Clifton", "Shahrah-e-Faisal"], spaceRequirements: ["1500 sq ft Office"]
    },
    detail: generateDetail({
      capex: "PKR 2M", opex: "PKR 1M", roi: "40%", runRate: "PKR 3M", advantage: "Dollar exports.", risk: "Dev retention.", sec: "B2B",
      allocations: [{ category: "Laptops & Tech", percentage: 60, description: "MacBooks, Servers" }, { category: "Legal & Setup", percentage: 40, description: "PSEB Reg, Office" }],
      revenueStreams: [{ streamName: "App Dev Projects", margin: "40%", estMonthly: "PKR 2M" }, { streamName: "Dedicated Teams", margin: "60%", estMonthly: "PKR 1M" }],
      phases: [{ phaseName: "Foundation", monthRange: "Month 1", tasks: ["Company Reg", "Hire Seniors"] }, { phaseName: "Operations", monthRange: "Month 2", tasks: ["Upwork Bidding", "LinkedIn Sales"] }],
      tasks: [{ description: "Register with PSEB", department: "Legal", duration: "4 Weeks", status: "In Progress" }],
      scaling: [{ year: "Year 1", title: "Break-even", description: "Secure 5 long-term clients." }, { year: "Year 3", title: "Own Product", description: "Build an internal SaaS." }],
      competitors: [{ region: "Global", saturationLevel: "High", opportunity: "Specialized AI/Web3 skills." }],
      zones: [
        { zoneName: "I.I Chundrigar", description: "Financial hub, easy to hire devs." },
        { zoneName: "Shahrah-e-Faisal", description: "Central transport links for team." },
        { zoneName: "Clifton", description: "Premium office spaces to impress local B2B." }
      ]
    })
  },
  {
    isTemplate: true, minBudget: 3000001, maxBudget: 6000000,
    title: "Modern Co-Working Space", category: "Real Estate/Services",
    description: "Aesthetically pleasing shared office space with internet & coffee.",
    estRoi: "20%", riskLevel: "Medium", timeToLaunch: "10 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Lease Agreement", description: "Secure a prime commercial floor." },
        { stepName: "Interior & Network", description: "Furnishings and enterprise fiber installation." },
        { stepName: "Marketing Push", description: "Target freelancers and small agencies." },
        { stepName: "Grand Opening", description: "Host a networking event for launch." }
      ],
      capexPercentage: 80, opexPercentage: 20, profitMargin: "30%", breakEvenPoint: "12 Months",
      targetAreas: ["Shahrah-e-Faisal", "DHA Phase 6", "Gulshan"], spaceRequirements: ["3000 sq ft Commercial Floor"]
    },
    detail: generateDetail({
      capex: "PKR 4M", opex: "PKR 600K", roi: "20%", runRate: "PKR 1.5M", advantage: "Passive rent.", risk: "Electricity cost.", sec: "Freelancers",
      allocations: [{ category: "Furniture", percentage: 50, description: "Ergo chairs, desks" }, { category: "HVAC & Network", percentage: 50, description: "ACs, Fiber internet" }],
      revenueStreams: [{ streamName: "Dedicated Desks", margin: "40%", estMonthly: "PKR 1M" }, { streamName: "Private Offices", margin: "60%", estMonthly: "PKR 500K" }],
      phases: [{ phaseName: "Construction", monthRange: "Month 1-2", tasks: ["Partitions", "Networking"] }, { phaseName: "Launch", monthRange: "Month 3", tasks: ["Pre-booking", "Events"] }],
      tasks: [{ description: "Install Biometric Access", department: "IT", duration: "1 Week", status: "To Do" }],
      scaling: [{ year: "Year 1", title: "80% Occupancy", description: "Fill the space." }, { year: "Year 3", title: "Branch 2", description: "Open in DHA." }],
      competitors: [{ region: "Local", saturationLevel: "Medium", opportunity: "Better community events." }],
      zones: [
        { zoneName: "Shahrah-e-Faisal", description: "Central access for commuters." },
        { zoneName: "Gulshan-e-Iqbal", description: "Huge student and freelancer base." },
        { zoneName: "DHA Phase 6", description: "Premium tech startup zone." }
      ]
    })
  },
  {
    isTemplate: true, minBudget: 3000001, maxBudget: 6000000,
    title: "Wholesale Apparel Brand", category: "Retail",
    description: "Manufacturing basic tees/hoodies and supplying to local brands.",
    estRoi: "35%", riskLevel: "Medium", timeToLaunch: "8 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Machinery Setup", description: "Procure stitching units and equipment." },
        { stepName: "Fabric Sourcing", description: "Establish supply chain with textile mills." },
        { stepName: "Sample Production", description: "Create high-quality base samples." },
        { stepName: "B2B Outreach", description: "Pitch to local e-commerce clothing brands." }
      ],
      capexPercentage: 60, opexPercentage: 40, profitMargin: "25%", breakEvenPoint: "9 Months",
      targetAreas: ["S.I.T.E Area", "Korangi", "Landhi"], spaceRequirements: ["Small Factory Unit"]
    },
    detail: generateDetail({
      capex: "PKR 3.5M", opex: "PKR 800K", roi: "35%", runRate: "PKR 2.5M", advantage: "B2B bulk orders.", risk: "Supply chain delays.", sec: "B2B",
      allocations: [{ category: "Stitching Units", percentage: 60, description: "Juki machines" }, { category: "Raw Material", percentage: 40, description: "Fabric rolls" }],
      revenueStreams: [{ streamName: "B2B Wholesale", margin: "25%", estMonthly: "PKR 2M" }, { streamName: "Custom Merch", margin: "35%", estMonthly: "PKR 500K" }],
      phases: [{ phaseName: "Factory Setup", monthRange: "Month 1-2", tasks: ["Machines", "Hire Tailors"] }, { phaseName: "Production", monthRange: "Month 3", tasks: ["Sample Batch", "B2B Sales"] }],
      tasks: [{ description: "Fabric Mill Contracts", department: "Procurement", duration: "2 Weeks", status: "Blocker" }],
      scaling: [{ year: "Year 1", title: "Local B2B", description: "Supply 10 local Insta brands." }, { year: "Year 3", title: "Direct to Consumer", description: "Launch own retail front." }],
      competitors: [{ region: "S.I.T.E", saturationLevel: "High", opportunity: "Reliable sizing and timeline." }],
      zones: [
        { zoneName: "S.I.T.E Area", description: "Textile hub, easy access to fabric." },
        { zoneName: "Korangi Industrial", description: "Export processing advantages." },
        { zoneName: "Landhi", description: "Cheaper labor availability." }
      ]
    })
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
      roadmapSteps: [
        { stepName: "Licensing", description: "AEDB registration and legal compliance." },
        { stepName: "Vendor Tie-ups", description: "Secure import deals for Tier-1 panels." },
        { stepName: "Team Hiring", description: "Hire certified electrical engineers and labor." },
        { stepName: "First Project", description: "Execute a pilot installation successfully." }
      ],
      capexPercentage: 30, opexPercentage: 70, profitMargin: "20%", breakEvenPoint: "4 Months",
      targetAreas: ["DHA", "Malir Cantt", "Industrial Zones"], spaceRequirements: ["Office & Warehouse"]
    },
    detail: generateDetail({
      capex: "PKR 3M", opex: "PKR 4M", roi: "45%", runRate: "PKR 10M", advantage: "High demand.", risk: "Import bans.", sec: "Homeowners",
      allocations: [{ category: "Initial Inventory", percentage: 80, description: "Tier 1 Panels" }, { category: "Tools & Vehicles", percentage: 20, description: "Testing tools, truck" }],
      revenueStreams: [{ streamName: "Residential Installs", margin: "15%", estMonthly: "PKR 6M" }, { streamName: "Commercial Projects", margin: "25%", estMonthly: "PKR 4M" }],
      phases: [{ phaseName: "Setup", monthRange: "Month 1", tasks: ["AEDB License", "Vendor Deals"] }, { phaseName: "Execution", monthRange: "Month 2", tasks: ["Hire Engineers", "First Install"] }],
      tasks: [{ description: "Clear Customs for Inverters", department: "Supply Chain", duration: "2 Weeks", status: "Blocker" }],
      scaling: [{ year: "Year 1", title: "100kW Monthly", description: "Stable projects." }, { year: "Year 3", title: "Solar Financing", description: "Partner with banks." }],
      competitors: [{ region: "Nationwide", saturationLevel: "High", opportunity: "Better after-sales service." }],
      zones: [
        { zoneName: "DHA Karachi", description: "High electricity bills, strong purchasing power." },
        { zoneName: "Malir Cantt", description: "Large residential roofs." },
        { zoneName: "Industrial Zones", description: "Massive commercial megawatt projects." }
      ]
    })
  },
  {
    isTemplate: true, minBudget: 6000001, maxBudget: 10000000,
    title: "Mini-Supermarket / Mart", category: "Retail",
    description: "Modern, air-conditioned neighborhood grocery mart.",
    estRoi: "15%", riskLevel: "Low", timeToLaunch: "12 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Location Prep", description: "Secure a 2000+ sq ft space and design layout." },
        { stepName: "Inventory & POS", description: "Install racks, chillers, and billing software." },
        { stepName: "Vendor Agreements", description: "Stock up via FMCG distributors." },
        { stepName: "Grand Opening", description: "Launch with discount campaigns for neighbors." }
      ],
      capexPercentage: 70, opexPercentage: 30, profitMargin: "12%", breakEvenPoint: "14 Months",
      targetAreas: ["Scheme 33", "Bahria Town", "Gadap"], spaceRequirements: ["2000+ sq ft Ground Floor"]
    },
    detail: generateDetail({
      capex: "PKR 6M", opex: "PKR 1.5M", roi: "15%", runRate: "PKR 5M", advantage: "Consistent daily cash flow.", risk: "Theft and expiry.", sec: "General Public",
      allocations: [{ category: "Interior & Cooling", percentage: 60, description: "Racks, Chillers, ACs" }, { category: "Initial Stock", percentage: 40, description: "FMCG Inventory" }],
      revenueStreams: [{ streamName: "Retail Sales", margin: "12%", estMonthly: "PKR 4.5M" }, { streamName: "Shelf Rental", margin: "100%", estMonthly: "PKR 500K" }],
      phases: [{ phaseName: "Buildout", monthRange: "Month 1-2", tasks: ["Lease", "Interior Fittings"] }, { phaseName: "Stocking", monthRange: "Month 3", tasks: ["POS Setup", "Stock Goods"] }],
      tasks: [{ description: "Setup Barcode POS", department: "IT", duration: "1 Week", status: "In Progress" }],
      scaling: [{ year: "Year 1", title: "Neighborhood Go-to", description: "Daily 500 walk-ins." }, { year: "Year 3", title: "App Delivery", description: "Launch WhatsApp/App delivery." }],
      competitors: [{ region: "Local Kiryana", saturationLevel: "High", opportunity: "Better shopping experience." }],
      zones: [
        { zoneName: "Scheme 33", description: "Rapidly growing apartment culture." },
        { zoneName: "Bahria Town", description: "Premium mart gap in new precincts." },
        { zoneName: "Gadap Town", description: "Untapped developing residential." }
      ]
    })
  },
  {
    isTemplate: true, minBudget: 6000001, maxBudget: 10000000,
    title: "Diagnostic Lab / Collection Center", category: "Healthcare",
    description: "Medical testing lab franchise or independent setup.",
    estRoi: "25%", riskLevel: "Low", timeToLaunch: "10 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Licensing & Approvals", description: "Clear health commission requirements." },
        { stepName: "Medical Equipment", description: "Procure analyzers and cold chain storage." },
        { stepName: "Staffing", description: "Hire qualified pathologists and phlebotomists." },
        { stepName: "Operations Launch", description: "Start sample collection and marketing to clinics." }
      ],
      capexPercentage: 80, opexPercentage: 20, profitMargin: "35%", breakEvenPoint: "12 Months",
      targetAreas: ["Near Hospitals", "Gulshan", "Nazimabad"], spaceRequirements: ["1000 sq ft Commercial"]
    },
    detail: generateDetail({
      capex: "PKR 7M", opex: "PKR 800K", roi: "25%", runRate: "PKR 2.5M", advantage: "Recession-proof.", risk: "Regulations.", sec: "Patients",
      allocations: [{ category: "Medical Machines", percentage: 70, description: "Blood analyzers, cold chain" }, { category: "Interior & IT", percentage: 30, description: "Waiting area, LIMS software" }],
      revenueStreams: [{ streamName: "Walk-in Tests", margin: "40%", estMonthly: "PKR 1.5M" }, { streamName: "Clinic Partnerships", margin: "25%", estMonthly: "PKR 1M" }],
      phases: [{ phaseName: "Compliance", monthRange: "Month 1-2", tasks: ["Licensing", "Import Machines"] }, { phaseName: "Operations", monthRange: "Month 3", tasks: ["Hire Pathologists", "Launch"] }],
      tasks: [{ description: "Calibration of Analyzers", department: "Tech", duration: "1 Week", status: "To Do" }],
      scaling: [{ year: "Year 1", title: "Trust Building", description: "Tie-ups with 50 doctors." }, { year: "Year 3", title: "Collection Points", description: "Open 5 small branches." }],
      competitors: [{ region: "Local Labs", saturationLevel: "Medium", opportunity: "Faster online reporting." }],
      zones: [
        { zoneName: "Hospital Hubs", description: "Direct referrals from OPDs." },
        { zoneName: "Nazimabad", description: "Dense residential demanding home sampling." },
        { zoneName: "Gulshan-e-Iqbal", description: "Central access for walk-in patients." }
      ]
    })
  }
];

const seedDB = async () => {
  try {
    await Idea.deleteMany({ isTemplate: true }); 
    await Idea.insertMany(ultimateSeedIdeas); 
    console.log(`🚀 Successfully Seeded ${ultimateSeedIdeas.length} Fully Dynamic Ideas!`);
    process.exit();
  } catch (err) {
    console.log("❌ Seeding error:", err);
    process.exit(1);
  }
};

seedDB();

--------------------------------------
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
      roadmapSteps: [
        { stepName: "Setup Profile", description: "Create agency pages on Insta/TikTok." },
        { stepName: "Client Hunt", description: "Offer free trials to local cafes." },
        { stepName: "Content Strategy", description: "Plan 1-month content calendar." },
        { stepName: "Scale", description: "Run ads to get paid retainers." }
      ],
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
      roadmapSteps: [
        { stepName: "Menu & Testing", description: "Finalize recipes and packaging." },
        { stepName: "Legal & Hygiene", description: "Basic food safety setup." },
        { stepName: "Marketing Push", description: "Send samples to local influencers." },
        { stepName: "Launch Delivery", description: "Start accepting online orders." }
      ],
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
      roadmapSteps: [
        { stepName: "Course Outline", description: "Design 2-month bootcamps." },
        { stepName: "Setup Tools", description: "Zoom, Google Classroom, and drawing pad." },
        { stepName: "Marketing", description: "Facebook ads targeting students." },
        { stepName: "First Batch", description: "Onboard first 5-10 students." }
      ],
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
      roadmapSteps: [
        { stepName: "Location & Setup", description: "Rent cheap space and buy equipment." },
        { stepName: "Menu Testing", description: "Finalize taste and packaging." },
        { stepName: "App Integration", description: "Register on Foodpanda." },
        { stepName: "Digital Marketing", description: "Run geo-targeted Instagram ads." }
      ],
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
      roadmapSteps: [
        { stepName: "Procurement", description: "Buy van, pressure washers, chemicals." },
        { stepName: "Branding", description: "Wrap the van and create social media pages." },
        { stepName: "Booking System", description: "Set up WhatsApp Business API." },
        { stepName: "First Job", description: "Offer discounted first wash in target areas." }
      ],
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
      roadmapSteps: [
        { stepName: "Niche Selection", description: "Find winning products from local suppliers." },
        { stepName: "Store Setup", description: "Create Shopify store and add products." },
        { stepName: "Creative Testing", description: "Launch TikTok and FB ad campaigns." },
        { stepName: "Scaling", description: "Increase budget on winning ads." }
      ],
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
      roadmapSteps: [
        { stepName: "Office Setup", description: "Rent space, setup 10 PCs, backup power." },
        { stepName: "Hiring", description: "Recruit fluent English speakers." },
        { stepName: "Training", description: "Train staff on Shopify and CRM tools." },
        { stepName: "Client Onboarding", description: "Start operations for first 2 international clients." }
      ],
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
      roadmapSteps: [
        { stepName: "Cart Design", description: "Fabricate a highly aesthetic mobile cart." },
        { stepName: "Procurement", description: "Import espresso machines and quality beans." },
        { stepName: "Location Tie-ups", description: "Secure spots in malls or corporate buildings." },
        { stepName: "Launch", description: "Soft opening with influencer tasting." }
      ],
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
      roadmapSteps: [
        { stepName: "Lease & Interior", description: "Setup mirrors, mats, and sound system." },
        { stepName: "Equipment", description: "Purchase basic weights and specialized gear." },
        { stepName: "Trainer Hiring", description: "Onboard certified fitness instructors." },
        { stepName: "Pre-sales", description: "Sell discounted early-bird memberships." }
      ],
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
      roadmapSteps: [
        { stepName: "Legal & Setup", description: "Register company and setup bank accounts." },
        { stepName: "Core Team Hiring", description: "Hire Senior Devs, QA, and PM." },
        { stepName: "Portfolio Building", description: "Develop 2-3 strong internal case studies." },
        { stepName: "Client Outreach", description: "Start Upwork and direct LinkedIn outreach." }
      ],
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
      roadmapSteps: [
        { stepName: "Lease Agreement", description: "Secure a prime commercial floor." },
        { stepName: "Interior & Network", description: "Furnishings and enterprise fiber installation." },
        { stepName: "Marketing Push", description: "Target freelancers and small agencies." },
        { stepName: "Grand Opening", description: "Host a networking event for launch." }
      ],
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
      roadmapSteps: [
        { stepName: "Machinery Setup", description: "Procure stitching units and equipment." },
        { stepName: "Fabric Sourcing", description: "Establish supply chain with textile mills." },
        { stepName: "Sample Production", description: "Create high-quality base samples." },
        { stepName: "B2B Outreach", description: "Pitch to local e-commerce clothing brands." }
      ],
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
      roadmapSteps: [
        { stepName: "Licensing", description: "AEDB registration and legal compliance." },
        { stepName: "Vendor Tie-ups", description: "Secure import deals for Tier-1 panels." },
        { stepName: "Team Hiring", description: "Hire certified electrical engineers and labor." },
        { stepName: "First Project", description: "Execute a pilot installation successfully." }
      ],
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
      roadmapSteps: [
        { stepName: "Location Prep", description: "Secure a 2000+ sq ft space and design layout." },
        { stepName: "Inventory & POS", description: "Install racks, chillers, and billing software." },
        { stepName: "Vendor Agreements", description: "Stock up via FMCG distributors." },
        { stepName: "Grand Opening", description: "Launch with discount campaigns for neighbors." }
      ],
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
      roadmapSteps: [
        { stepName: "Licensing & Approvals", description: "Clear health commission requirements." },
        { stepName: "Medical Equipment", description: "Procure analyzers and cold chain storage." },
        { stepName: "Staffing", description: "Hire qualified pathologists and phlebotomists." },
        { stepName: "Operations Launch", description: "Start sample collection and marketing to clinics." }
      ],
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

seedDB();*/


















































import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Idea from '../models/Idea.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Database connected for Ultimate Seeding..."))
  .catch(err => console.log("❌ Connection error:", err));

// YAHAN FIX KIYA: demographics aur growthKPIs ko dynamic banaya
const generateDetail = ({
  capex, opex, roi, runRate, advantage, risk, sec,
  allocations, revenueStreams, phases, tasks, scaling, competitors, zones, demographics, growthKPIs
}) => ({
  budget: {
    totalCapexAmount: capex, monthlyBurnRate: opex, yearOneRoi: roi, totalGrossRunRate: runRate,
    allocations: allocations,
    revenueStreams: revenueStreams
  },
  roadmap: {
    phases: phases,
    detailedTasks: tasks
  },
  growth: {
    customerRetention: growthKPIs.retention,
    grossMargin: growthKPIs.margin,
    marketPenetration: growthKPIs.penetration,
    yoyGrowth: growthKPIs.yoy,
    scalingTimeline: scaling
  },
  location: {
    targetZones: zones,
    demographics: demographics,
    secTarget: sec,
    competitorAnalysis: competitors,
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
      roadmapSteps: [
        { stepName: "Setup Profile", description: "Create agency pages on Insta/TikTok." },
        { stepName: "Client Hunt", description: "Offer free trials to local cafes." },
        { stepName: "Content Strategy", description: "Plan 1-month content calendar." },
        { stepName: "Scale", description: "Run ads to get paid retainers." }
      ],
      capexPercentage: 20, opexPercentage: 80, profitMargin: "60%", breakEvenPoint: "2 Months",
      targetAreas: ["DHA", "Tariq Road", "Clifton"], spaceRequirements: ["Remote"]
    },
    detail: generateDetail({
      capex: "PKR 100K", opex: "PKR 50K", roi: "45%", runRate: "PKR 150K", advantage: "Zero rent, high margins.", risk: "Client churn.", sec: "SEC A & B",
      allocations: [{ category: "Software Subs", percentage: 40, description: "Canva, Hootsuite" }, { category: "Ad Spend", percentage: 60, description: "Self-promo ads" }],
      revenueStreams: [{ streamName: "Monthly Retainers", margin: "70%", estMonthly: "PKR 120K" }, { streamName: "One-off Audits", margin: "90%", estMonthly: "PKR 30K" }],
      phases: [{ phaseName: "Launch", monthRange: "Month 1", tasks: ["Setup Profiles", "Cold Outreach"] }, { phaseName: "Scale", monthRange: "Month 2", tasks: ["Hire Freelancers", "Run Ads"] }],
      tasks: [{ description: "Pitch 50 Local Cafes", department: "Sales", duration: "1 Week", status: "In Progress" }],
      scaling: [{ year: "Year 1", title: "Local Domination", description: "10 active retainers." }, { year: "Year 2", title: "International", description: "Upwork clients." }],
      competitors: [{ region: "Local", saturationLevel: "High", opportunity: "Most lack TikTok skills." }],
      zones: [{ zoneName: "DHA Phase 6", description: "High concentration of premium cafes." }, { zoneName: "Clifton Block 4", description: "Boutique salons and eateries." }, { zoneName: "Tariq Road", description: "High volume retail shops." }],
      // YAHAN SE DYNAMIC DATA SHURU
      growthKPIs: { retention: 80, margin: 60, penetration: 15, yoy: "2x" },
      demographics: [{ ageGroup: "18-24", percentage: 60 }, { ageGroup: "25-35", percentage: 40 }]
    })
  },
  {
    isTemplate: true, minBudget: 100000, maxBudget: 500000,
    title: "Home-based Catering (Baking)", category: "Food",
    description: "Specialized cakes and corporate lunch boxes from home kitchen.",
    estRoi: "40%", riskLevel: "Low", timeToLaunch: "2 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Menu & Testing", description: "Finalize recipes and packaging." },
        { stepName: "Legal & Hygiene", description: "Basic food safety setup." },
        { stepName: "Marketing Push", description: "Send samples to local influencers." },
        { stepName: "Launch Delivery", description: "Start accepting online orders." }
      ],
      capexPercentage: 40, opexPercentage: 60, profitMargin: "50%", breakEvenPoint: "3 Months",
      targetAreas: ["Gulshan", "Clifton", "PECHS"], spaceRequirements: ["Home Kitchen"]
    },
    detail: generateDetail({
      capex: "PKR 200K", opex: "PKR 80K", roi: "40%", runRate: "PKR 250K", advantage: "Home hygiene trust.", risk: "Delivery logistics.", sec: "SEC A & B",
      allocations: [{ category: "Baking Equipment", percentage: 70, description: "Ovens, pans" }, { category: "Packaging", percentage: 30, description: "Custom boxes" }],
      revenueStreams: [{ streamName: "Custom Cakes", margin: "60%", estMonthly: "PKR 150K" }, { streamName: "Lunch Boxes", margin: "40%", estMonthly: "PKR 100K" }],
      phases: [{ phaseName: "Testing", monthRange: "Month 1", tasks: ["Finalize Recipes", "Buy Oven"] }, { phaseName: "Launch", monthRange: "Month 2", tasks: ["Insta Ads", "First Orders"] }],
      tasks: [{ description: "Food Packaging Sourcing", department: "Procurement", duration: "2 Weeks", status: "To Do" }],
      scaling: [{ year: "Year 1", title: "Break-even", description: "Daily 10 orders." }, { year: "Year 2", title: "Commercial Kitchen", description: "Move out of home." }],
      competitors: [{ region: "Online", saturationLevel: "Medium", opportunity: "Corporate B2B lunches." }],
      zones: [{ zoneName: "Gulshan-e-Iqbal", description: "High density family residential." }, { zoneName: "PECHS", description: "Mix of corporate and residential." }, { zoneName: "Clifton", description: "Premium customized cake orders." }],
      growthKPIs: { retention: 70, margin: 50, penetration: 10, yoy: "1.5x" },
      demographics: [{ ageGroup: "25-35", percentage: 50 }, { ageGroup: "36-50", percentage: 50 }]
    })
  },
  {
    isTemplate: true, minBudget: 100000, maxBudget: 500000,
    title: "Tech Skill Tutoring", category: "Education",
    description: "Online/Home tutoring for Python, Web Dev, or Graphic Design.",
    estRoi: "50%", riskLevel: "Low", timeToLaunch: "1 Week", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Course Outline", description: "Design 2-month bootcamps." },
        { stepName: "Setup Tools", description: "Zoom, Google Classroom, and drawing pad." },
        { stepName: "Marketing", description: "Facebook ads targeting students." },
        { stepName: "First Batch", description: "Onboard first 5-10 students." }
      ],
      capexPercentage: 30, opexPercentage: 70, profitMargin: "80%", breakEvenPoint: "1 Month",
      targetAreas: ["Pan-Karachi", "Remote", "DHA"], spaceRequirements: ["Laptop & Zoom"]
    },
    detail: generateDetail({
      capex: "PKR 150K", opex: "PKR 30K", roi: "50%", runRate: "PKR 200K", advantage: "Highly scalable online.", risk: "Finding initial students.", sec: "Students",
      allocations: [{ category: "Digital Setup", percentage: 50, description: "Zoom Pro, Mic, Pen Tab" }, { category: "Marketing", percentage: 50, description: "FB/Insta Ads" }],
      revenueStreams: [{ streamName: "Online Bootcamps", margin: "90%", estMonthly: "PKR 150K" }, { streamName: "1-on-1 Mentorship", margin: "100%", estMonthly: "PKR 50K" }],
      phases: [{ phaseName: "Curriculum", monthRange: "Week 1", tasks: ["Record Intro Videos", "Setup Ads"] }, { phaseName: "Enrollment", monthRange: "Week 2", tasks: ["Free Webinars", "Start Classes"] }],
      tasks: [{ description: "Create Course Syllabus", department: "Academic", duration: "1 Week", status: "Done" }],
      scaling: [{ year: "Year 1", title: "Batch Model", description: "3 parallel batches." }, { year: "Year 2", title: "Recorded Courses", description: "Passive income via Udemy." }],
      competitors: [{ region: "Global Platforms", saturationLevel: "High", opportunity: "Urdu/Hindi localized teaching." }],
      zones: [{ zoneName: "Pan-Karachi", description: "Online students across city." }, { zoneName: "DHA/Clifton", description: "Premium 1-on-1 home tutoring." }, { zoneName: "University Hubs", description: "Targeting CS undergrads." }],
      growthKPIs: { retention: 85, margin: 80, penetration: 25, yoy: "3x" },
      demographics: [{ ageGroup: "15-22", percentage: 70 }, { ageGroup: "23-30", percentage: 30 }]
    })
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
      roadmapSteps: [
        { stepName: "Location & Setup", description: "Rent cheap space and buy equipment." },
        { stepName: "Menu Testing", description: "Finalize taste and packaging." },
        { stepName: "App Integration", description: "Register on Foodpanda." },
        { stepName: "Digital Marketing", description: "Run geo-targeted Instagram ads." }
      ],
      capexPercentage: 60, opexPercentage: 40, profitMargin: "30%", breakEvenPoint: "6 Months",
      targetAreas: ["Johar", "Nazimabad", "Gulshan"], spaceRequirements: ["300 sq ft Commercial"]
    },
    detail: generateDetail({
      capex: "PKR 900K", opex: "PKR 200K", roi: "35%", runRate: "PKR 600K", advantage: "No dine-in cost.", risk: "App commissions.", sec: "SEC B & C",
      allocations: [{ category: "Commercial Setup", percentage: 80, description: "Fryers, Exhaust" }, { category: "Licensing", percentage: 20, description: "Food Auth." }],
      revenueStreams: [{ streamName: "Foodpanda/InDrive", margin: "25%", estMonthly: "PKR 500K" }, { streamName: "Direct WhatsApp", margin: "45%", estMonthly: "PKR 100K" }],
      phases: [{ phaseName: "Build", monthRange: "Month 1", tasks: ["Kitchen Setup", "Hire Chef"] }, { phaseName: "Live", monthRange: "Month 2", tasks: ["App Registration", "Influencer PR"] }],
      tasks: [{ description: "Health Dept Approval", department: "Legal", duration: "3 Weeks", status: "In Progress" }],
      scaling: [{ year: "Year 1", title: "Brand Setup", description: "100 orders/day." }, { year: "Year 2", title: "Multiple Brands", description: "Launch pizza from same kitchen." }],
      competitors: [{ region: "Foodpanda", saturationLevel: "High", opportunity: "Late night delivery gap." }],
      zones: [{ zoneName: "Gulistan-e-Johar", description: "High volume, late night foodies." }, { zoneName: "Nazimabad", description: "Dense population, affordable fast food." }, { zoneName: "Gulshan-e-Iqbal", description: "Student and family mix." }],
      growthKPIs: { retention: 60, margin: 40, penetration: 30, yoy: "2.5x" },
      demographics: [{ ageGroup: "16-25", percentage: 65 }, { ageGroup: "26-40", percentage: 35 }]
    })
  },
  {
    isTemplate: true, minBudget: 500001, maxBudget: 1500000,
    title: "Mobile Car Detailing", category: "Services",
    description: "Premium car wash and detailing at the customer's doorstep.",
    estRoi: "40%", riskLevel: "Low", timeToLaunch: "3 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Procurement", description: "Buy van, pressure washers, chemicals." },
        { stepName: "Branding", description: "Wrap the van and create social media pages." },
        { stepName: "Booking System", description: "Set up WhatsApp Business API." },
        { stepName: "First Job", description: "Offer discounted first wash in target areas." }
      ],
      capexPercentage: 70, opexPercentage: 30, profitMargin: "45%", breakEvenPoint: "5 Months",
      targetAreas: ["DHA", "PECHS", "KDA"], spaceRequirements: ["Mini Van/Loader"]
    },
    detail: generateDetail({
      capex: "PKR 1M", opex: "PKR 150K", roi: "40%", runRate: "PKR 400K", advantage: "High convenience premium.", risk: "Vehicle breakdown.", sec: "SEC A & B+",
      allocations: [{ category: "Equipment Van", percentage: 70, description: "Loader van & water tank" }, { category: "Chemicals & Tools", percentage: 30, description: "Polish, vacuums" }],
      revenueStreams: [{ streamName: "Basic Wash", margin: "50%", estMonthly: "PKR 150K" }, { streamName: "Ceramic Coating", margin: "70%", estMonthly: "PKR 250K" }],
      phases: [{ phaseName: "Procurement", monthRange: "Week 1-2", tasks: ["Buy Van", "Get Equipment"] }, { phaseName: "Launch", monthRange: "Week 3", tasks: ["FB Ads", "First Client"] }],
      tasks: [{ description: "Van Branding Wrap", department: "Marketing", duration: "1 Week", status: "To Do" }],
      scaling: [{ year: "Year 1", title: "Full Calendar", description: "5 cars a day." }, { year: "Year 2", title: "Fleet Expansion", description: "Add 2nd van." }],
      competitors: [{ region: "Local Service Stations", saturationLevel: "High", opportunity: "Time-saving doorstep service." }],
      zones: [{ zoneName: "DHA / Clifton", description: "Luxury cars needing ceramic coating." }, { zoneName: "PECHS / KDA", description: "Busy professionals wanting doorstep service." }, { zoneName: "Bahadurabad", description: "Family cars weekend detailing." }],
      growthKPIs: { retention: 75, margin: 45, penetration: 12, yoy: "2x" },
      demographics: [{ ageGroup: "25-40", percentage: 60 }, { ageGroup: "41-60", percentage: 40 }]
    })
  },
  {
    isTemplate: true, minBudget: 500001, maxBudget: 1500000,
    title: "E-Com Dropshipping", category: "Retail/Tech",
    description: "Local dropshipping of trendy gadgets using Shopify & TikTok Ads.",
    estRoi: "45%", riskLevel: "High", timeToLaunch: "2 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Niche Selection", description: "Find winning products from local suppliers." },
        { stepName: "Store Setup", description: "Create Shopify store and add products." },
        { stepName: "Creative Testing", description: "Launch TikTok and FB ad campaigns." },
        { stepName: "Scaling", description: "Increase budget on winning ads." }
      ],
      capexPercentage: 30, opexPercentage: 70, profitMargin: "25%", breakEvenPoint: "3 Months",
      targetAreas: ["Nationwide", "Karachi", "Lahore"], spaceRequirements: ["Remote"]
    },
    detail: generateDetail({
      capex: "PKR 300K", opex: "PKR 400K", roi: "45%", runRate: "PKR 1M", advantage: "No inventory.", risk: "Ad costs.", sec: "Youth",
      allocations: [{ category: "Ad Budget", percentage: 80, description: "FB/TikTok Ads" }, { category: "Store Dev", percentage: 20, description: "Themes & Apps" }],
      revenueStreams: [{ streamName: "Gadget Sales", margin: "30%", estMonthly: "PKR 1M" }],
      phases: [{ phaseName: "Sourcing", monthRange: "Week 1", tasks: ["Find Supplier", "Build Store"] }, { phaseName: "Scaling", monthRange: "Week 2", tasks: ["Testing Ads", "Fulfillment"] }],
      tasks: [{ description: "Record TikTok Ad Creatives", department: "Marketing", duration: "1 Week", status: "To Do" }],
      scaling: [{ year: "Year 1", title: "Winning Product", description: "Find 1 winner." }, { year: "Year 2", title: "White Label", description: "Import own inventory." }],
      competitors: [{ region: "Social Media", saturationLevel: "High", opportunity: "Better video creatives." }],
      zones: [{ zoneName: "Karachi", description: "Fastest delivery, main cash flow." }, { zoneName: "Lahore", description: "High purchasing power for gadgets." }, { zoneName: "Islamabad", description: "Premium accessory buyers." }],
      growthKPIs: { retention: 20, margin: 25, penetration: 40, yoy: "4x" },
      demographics: [{ ageGroup: "14-24", percentage: 80 }, { ageGroup: "25-35", percentage: 20 }]
    })
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
      roadmapSteps: [
        { stepName: "Office Setup", description: "Rent space, setup 10 PCs, backup power." },
        { stepName: "Hiring", description: "Recruit fluent English speakers." },
        { stepName: "Training", description: "Train staff on Shopify and CRM tools." },
        { stepName: "Client Onboarding", description: "Start operations for first 2 international clients." }
      ],
      capexPercentage: 50, opexPercentage: 50, profitMargin: "40%", breakEvenPoint: "7 Months",
      targetAreas: ["Shahrah-e-Faisal", "Tariq Road", "I.I Chundrigar"], spaceRequirements: ["800 sq ft Office"]
    },
    detail: generateDetail({
      capex: "PKR 1.2M", opex: "PKR 500K", roi: "30%", runRate: "PKR 1.5M", advantage: "Dollar income.", risk: "Power outages.", sec: "B2B",
      allocations: [{ category: "Hardware", percentage: 60, description: "10 PCs, UPS" }, { category: "Deposit", percentage: 40, description: "Office Advance" }],
      revenueStreams: [{ streamName: "US E-com Support", margin: "50%", estMonthly: "PKR 1M" }, { streamName: "Data Entry Tasks", margin: "40%", estMonthly: "PKR 500K" }],
      phases: [{ phaseName: "Infrastructure", monthRange: "Month 1", tasks: ["Internet", "Systems"] }, { phaseName: "Ops", monthRange: "Month 2", tasks: ["Training", "Go Live"] }],
      tasks: [{ description: "Setup Backup Generator", department: "IT", duration: "1 Week", status: "Blocker" }],
      scaling: [{ year: "Year 1", title: "10 Seats", description: "Fill current capacity." }, { year: "Year 2", title: "24/7 Operations", description: "Add night shifts." }],
      competitors: [{ region: "Global", saturationLevel: "Medium", opportunity: "Lower rates than Philippines." }],
      zones: [{ zoneName: "Shahrah-e-Faisal", description: "Accessible for night shift employees." }, { zoneName: "I.I Chundrigar", description: "Corporate fiber internet stability." }, { zoneName: "Tariq Road Area", description: "Centralized location for hiring." }],
      growthKPIs: { retention: 90, margin: 40, penetration: 5, yoy: "1.8x" },
      demographics: [{ ageGroup: "B2B Startups", percentage: 70 }, { ageGroup: "SMEs", percentage: 30 }]
    })
  },
  {
    isTemplate: true, minBudget: 1500001, maxBudget: 3000000,
    title: "Specialty Coffee Cart", category: "F&B",
    description: "Aesthetically pleasing, high-end mobile coffee cart for events/malls.",
    estRoi: "35%", riskLevel: "Medium", timeToLaunch: "6 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Cart Design", description: "Fabricate a highly aesthetic mobile cart." },
        { stepName: "Procurement", description: "Import espresso machines and quality beans." },
        { stepName: "Location Tie-ups", description: "Secure spots in malls or corporate buildings." },
        { stepName: "Launch", description: "Soft opening with influencer tasting." }
      ],
      capexPercentage: 70, opexPercentage: 30, profitMargin: "50%", breakEvenPoint: "8 Months",
      targetAreas: ["Clifton", "DHA Malls", "SMCHS"], spaceRequirements: ["Cart/Kiosk Space"]
    },
    detail: generateDetail({
      capex: "PKR 1.8M", opex: "PKR 300K", roi: "35%", runRate: "PKR 800K", advantage: "High profit on beverages.", risk: "Mall rental costs.", sec: "SEC A",
      allocations: [{ category: "Espresso Machine", percentage: 60, description: "Dual boiler import" }, { category: "Cart Fabrication", percentage: 40, description: "Aesthetic wooden cart" }],
      revenueStreams: [{ streamName: "Coffee Sales", margin: "75%", estMonthly: "PKR 600K" }, { streamName: "Event Catering", margin: "60%", estMonthly: "PKR 200K" }],
      phases: [{ phaseName: "Build", monthRange: "Month 1", tasks: ["Cart Design", "Buy Machine"] }, { phaseName: "Deploy", monthRange: "Month 2", tasks: ["Secure Location", "Launch"] }],
      tasks: [{ description: "Negotiate Mall Kiosk Space", department: "Admin", duration: "2 Weeks", status: "In Progress" }],
      scaling: [{ year: "Year 1", title: "Mall Presence", description: "Establish daily walk-ins." }, { year: "Year 2", title: "Events Fleet", description: "Build 2 more carts for weddings." }],
      competitors: [{ region: "Local Cafes", saturationLevel: "High", opportunity: "Mobile and aesthetic appeal." }],
      zones: [{ zoneName: "DHA Malls", description: "High SEC A footfall, impulse buying." }, { zoneName: "Clifton Corporate", description: "Morning office crowd coffee runs." }, { zoneName: "SMCHS", description: "Evening youth hangout spots." }],
      growthKPIs: { retention: 65, margin: 70, penetration: 20, yoy: "2x" },
      demographics: [{ ageGroup: "18-28", percentage: 55 }, { ageGroup: "29-45", percentage: 45 }]
    })
  },
  {
    isTemplate: true, minBudget: 1500001, maxBudget: 3000000,
    title: "Boutique Fitness Studio", category: "Health & Fitness",
    description: "Small group training studio (Yoga, Pilates, HIIT).",
    estRoi: "25%", riskLevel: "Low", timeToLaunch: "8 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Lease & Interior", description: "Setup mirrors, mats, and sound system." },
        { stepName: "Equipment", description: "Purchase basic weights and specialized gear." },
        { stepName: "Trainer Hiring", description: "Onboard certified fitness instructors." },
        { stepName: "Pre-sales", description: "Sell discounted early-bird memberships." }
      ],
      capexPercentage: 60, opexPercentage: 40, profitMargin: "35%", breakEvenPoint: "10 Months",
      targetAreas: ["KDA", "Bahadurabad", "Clifton"], spaceRequirements: ["1000 sq ft Hall"]
    },
    detail: generateDetail({
      capex: "PKR 1.5M", opex: "PKR 400K", roi: "25%", runRate: "PKR 900K", advantage: "Recurring subs.", risk: "Slow start.", sec: "SEC A & B",
      allocations: [{ category: "Renovation", percentage: 70, description: "Flooring, Mirrors" }, { category: "Equipment", percentage: 30, description: "Weights, Mats" }],
      revenueStreams: [{ streamName: "Monthly Subs", margin: "80%", estMonthly: "PKR 600K" }, { streamName: "Personal Training", margin: "50%", estMonthly: "PKR 300K" }],
      phases: [{ phaseName: "Build", monthRange: "Month 1-2", tasks: ["Interior", "Hire Trainers"] }, { phaseName: "Launch", monthRange: "Month 3", tasks: ["Pre-sales", "Opening"] }],
      tasks: [{ description: "Trainer Certification Checks", department: "HR", duration: "2 Weeks", status: "In Progress" }],
      scaling: [{ year: "Year 1", title: "100 Members", description: "Reach capacity." }, { year: "Year 2", title: "Apparel Line", description: "Sell gym wear." }],
      competitors: [{ region: "Local Gyms", saturationLevel: "High", opportunity: "Focus on females/Pilates." }],
      zones: [{ zoneName: "Bahadurabad", description: "High demand for female-only studios." }, { zoneName: "KDA Scheme 1", description: "Premium clientele for personal training." }, { zoneName: "Clifton", description: "Trendy yoga and pilates crowd." }],
      growthKPIs: { retention: 85, margin: 35, penetration: 15, yoy: "1.5x" },
      demographics: [{ ageGroup: "20-30", percentage: 40 }, { ageGroup: "31-45", percentage: 60 }]
    })
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
      roadmapSteps: [
        { stepName: "Legal & Setup", description: "Register company and setup bank accounts." },
        { stepName: "Core Team Hiring", description: "Hire Senior Devs, QA, and PM." },
        { stepName: "Portfolio Building", description: "Develop 2-3 strong internal case studies." },
        { stepName: "Client Outreach", description: "Start Upwork and direct LinkedIn outreach." }
      ],
      capexPercentage: 40, opexPercentage: 60, profitMargin: "50%", breakEvenPoint: "6 Months",
      targetAreas: ["I.I Chundrigar", "Clifton", "Shahrah-e-Faisal"], spaceRequirements: ["1500 sq ft Office"]
    },
    detail: generateDetail({
      capex: "PKR 2M", opex: "PKR 1M", roi: "40%", runRate: "PKR 3M", advantage: "Dollar exports.", risk: "Dev retention.", sec: "B2B",
      allocations: [{ category: "Laptops & Tech", percentage: 60, description: "MacBooks, Servers" }, { category: "Legal & Setup", percentage: 40, description: "PSEB Reg, Office" }],
      revenueStreams: [{ streamName: "App Dev Projects", margin: "40%", estMonthly: "PKR 2M" }, { streamName: "Dedicated Teams", margin: "60%", estMonthly: "PKR 1M" }],
      phases: [{ phaseName: "Foundation", monthRange: "Month 1", tasks: ["Company Reg", "Hire Seniors"] }, { phaseName: "Operations", monthRange: "Month 2", tasks: ["Upwork Bidding", "LinkedIn Sales"] }],
      tasks: [{ description: "Register with PSEB", department: "Legal", duration: "4 Weeks", status: "In Progress" }],
      scaling: [{ year: "Year 1", title: "Break-even", description: "Secure 5 long-term clients." }, { year: "Year 3", title: "Own Product", description: "Build an internal SaaS." }],
      competitors: [{ region: "Global", saturationLevel: "High", opportunity: "Specialized AI/Web3 skills." }],
      zones: [{ zoneName: "I.I Chundrigar", description: "Financial hub, easy to hire devs." }, { zoneName: "Shahrah-e-Faisal", description: "Central transport links for team." }, { zoneName: "Clifton", description: "Premium office spaces to impress local B2B." }],
      growthKPIs: { retention: 95, margin: 50, penetration: 8, yoy: "2.2x" },
      demographics: [{ ageGroup: "US/UK Clients", percentage: 80 }, { ageGroup: "Local Enterprise", percentage: 20 }]
    })
  },
  {
    isTemplate: true, minBudget: 3000001, maxBudget: 6000000,
    title: "Modern Co-Working Space", category: "Real Estate/Services",
    description: "Aesthetically pleasing shared office space with internet & coffee.",
    estRoi: "20%", riskLevel: "Medium", timeToLaunch: "10 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Lease Agreement", description: "Secure a prime commercial floor." },
        { stepName: "Interior & Network", description: "Furnishings and enterprise fiber installation." },
        { stepName: "Marketing Push", description: "Target freelancers and small agencies." },
        { stepName: "Grand Opening", description: "Host a networking event for launch." }
      ],
      capexPercentage: 80, opexPercentage: 20, profitMargin: "30%", breakEvenPoint: "12 Months",
      targetAreas: ["Shahrah-e-Faisal", "DHA Phase 6", "Gulshan"], spaceRequirements: ["3000 sq ft Commercial Floor"]
    },
    detail: generateDetail({
      capex: "PKR 4M", opex: "PKR 600K", roi: "20%", runRate: "PKR 1.5M", advantage: "Passive rent.", risk: "Electricity cost.", sec: "Freelancers",
      allocations: [{ category: "Furniture", percentage: 50, description: "Ergo chairs, desks" }, { category: "HVAC & Network", percentage: 50, description: "ACs, Fiber internet" }],
      revenueStreams: [{ streamName: "Dedicated Desks", margin: "40%", estMonthly: "PKR 1M" }, { streamName: "Private Offices", margin: "60%", estMonthly: "PKR 500K" }],
      phases: [{ phaseName: "Construction", monthRange: "Month 1-2", tasks: ["Partitions", "Networking"] }, { phaseName: "Launch", monthRange: "Month 3", tasks: ["Pre-booking", "Events"] }],
      tasks: [{ description: "Install Biometric Access", department: "IT", duration: "1 Week", status: "To Do" }],
      scaling: [{ year: "Year 1", title: "80% Occupancy", description: "Fill the space." }, { year: "Year 3", title: "Branch 2", description: "Open in DHA." }],
      competitors: [{ region: "Local", saturationLevel: "Medium", opportunity: "Better community events." }],
      zones: [{ zoneName: "Shahrah-e-Faisal", description: "Central access for commuters." }, { zoneName: "Gulshan-e-Iqbal", description: "Huge student and freelancer base." }, { zoneName: "DHA Phase 6", description: "Premium tech startup zone." }],
      growthKPIs: { retention: 80, margin: 30, penetration: 18, yoy: "1.4x" },
      demographics: [{ ageGroup: "Freelancers", percentage: 65 }, { ageGroup: "Small Teams", percentage: 35 }]
    })
  },
  {
    isTemplate: true, minBudget: 3000001, maxBudget: 6000000,
    title: "Wholesale Apparel Brand", category: "Retail",
    description: "Manufacturing basic tees/hoodies and supplying to local brands.",
    estRoi: "35%", riskLevel: "Medium", timeToLaunch: "8 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Machinery Setup", description: "Procure stitching units and equipment." },
        { stepName: "Fabric Sourcing", description: "Establish supply chain with textile mills." },
        { stepName: "Sample Production", description: "Create high-quality base samples." },
        { stepName: "B2B Outreach", description: "Pitch to local e-commerce clothing brands." }
      ],
      capexPercentage: 60, opexPercentage: 40, profitMargin: "25%", breakEvenPoint: "9 Months",
      targetAreas: ["S.I.T.E Area", "Korangi", "Landhi"], spaceRequirements: ["Small Factory Unit"]
    },
    detail: generateDetail({
      capex: "PKR 3.5M", opex: "PKR 800K", roi: "35%", runRate: "PKR 2.5M", advantage: "B2B bulk orders.", risk: "Supply chain delays.", sec: "B2B",
      allocations: [{ category: "Stitching Units", percentage: 60, description: "Juki machines" }, { category: "Raw Material", percentage: 40, description: "Fabric rolls" }],
      revenueStreams: [{ streamName: "B2B Wholesale", margin: "25%", estMonthly: "PKR 2M" }, { streamName: "Custom Merch", margin: "35%", estMonthly: "PKR 500K" }],
      phases: [{ phaseName: "Factory Setup", monthRange: "Month 1-2", tasks: ["Machines", "Hire Tailors"] }, { phaseName: "Production", monthRange: "Month 3", tasks: ["Sample Batch", "B2B Sales"] }],
      tasks: [{ description: "Fabric Mill Contracts", department: "Procurement", duration: "2 Weeks", status: "Blocker" }],
      scaling: [{ year: "Year 1", title: "Local B2B", description: "Supply 10 local Insta brands." }, { year: "Year 3", title: "Direct to Consumer", description: "Launch own retail front." }],
      competitors: [{ region: "S.I.T.E", saturationLevel: "High", opportunity: "Reliable sizing and timeline." }],
      zones: [{ zoneName: "S.I.T.E Area", description: "Textile hub, easy access to fabric." }, { zoneName: "Korangi Industrial", description: "Export processing advantages." }, { zoneName: "Landhi", description: "Cheaper labor availability." }],
      growthKPIs: { retention: 70, margin: 25, penetration: 25, yoy: "2.8x" },
      demographics: [{ ageGroup: "Local Brands", percentage: 75 }, { ageGroup: "Corporate", percentage: 25 }]
    })
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
      roadmapSteps: [
        { stepName: "Licensing", description: "AEDB registration and legal compliance." },
        { stepName: "Vendor Tie-ups", description: "Secure import deals for Tier-1 panels." },
        { stepName: "Team Hiring", description: "Hire certified electrical engineers and labor." },
        { stepName: "First Project", description: "Execute a pilot installation successfully." }
      ],
      capexPercentage: 30, opexPercentage: 70, profitMargin: "20%", breakEvenPoint: "4 Months",
      targetAreas: ["DHA", "Malir Cantt", "Industrial Zones"], spaceRequirements: ["Office & Warehouse"]
    },
    detail: generateDetail({
      capex: "PKR 3M", opex: "PKR 4M", roi: "45%", runRate: "PKR 10M", advantage: "High demand.", risk: "Import bans.", sec: "Homeowners",
      allocations: [{ category: "Initial Inventory", percentage: 80, description: "Tier 1 Panels" }, { category: "Tools & Vehicles", percentage: 20, description: "Testing tools, truck" }],
      revenueStreams: [{ streamName: "Residential Installs", margin: "15%", estMonthly: "PKR 6M" }, { streamName: "Commercial Projects", margin: "25%", estMonthly: "PKR 4M" }],
      phases: [{ phaseName: "Setup", monthRange: "Month 1", tasks: ["AEDB License", "Vendor Deals"] }, { phaseName: "Execution", monthRange: "Month 2", tasks: ["Hire Engineers", "First Install"] }],
      tasks: [{ description: "Clear Customs for Inverters", department: "Supply Chain", duration: "2 Weeks", status: "Blocker" }],
      scaling: [{ year: "Year 1", title: "100kW Monthly", description: "Stable projects." }, { year: "Year 3", title: "Solar Financing", description: "Partner with banks." }],
      competitors: [{ region: "Nationwide", saturationLevel: "High", opportunity: "Better after-sales service." }],
      zones: [{ zoneName: "DHA Karachi", description: "High electricity bills, strong purchasing power." }, { zoneName: "Malir Cantt", description: "Large residential roofs." }, { zoneName: "Industrial Zones", description: "Massive commercial megawatt projects." }],
      growthKPIs: { retention: 40, margin: 20, penetration: 35, yoy: "3.5x" },
      demographics: [{ ageGroup: "Homeowners 35+", percentage: 60 }, { ageGroup: "Commercial", percentage: 40 }]
    })
  },
  {
    isTemplate: true, minBudget: 6000001, maxBudget: 10000000,
    title: "Mini-Supermarket / Mart", category: "Retail",
    description: "Modern, air-conditioned neighborhood grocery mart.",
    estRoi: "15%", riskLevel: "Low", timeToLaunch: "12 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Location Prep", description: "Secure a 2000+ sq ft space and design layout." },
        { stepName: "Inventory & POS", description: "Install racks, chillers, and billing software." },
        { stepName: "Vendor Agreements", description: "Stock up via FMCG distributors." },
        { stepName: "Grand Opening", description: "Launch with discount campaigns for neighbors." }
      ],
      capexPercentage: 70, opexPercentage: 30, profitMargin: "12%", breakEvenPoint: "14 Months",
      targetAreas: ["Scheme 33", "Bahria Town", "Gadap"], spaceRequirements: ["2000+ sq ft Ground Floor"]
    },
    detail: generateDetail({
      capex: "PKR 6M", opex: "PKR 1.5M", roi: "15%", runRate: "PKR 5M", advantage: "Consistent daily cash flow.", risk: "Theft and expiry.", sec: "General Public",
      allocations: [{ category: "Interior & Cooling", percentage: 60, description: "Racks, Chillers, ACs" }, { category: "Initial Stock", percentage: 40, description: "FMCG Inventory" }],
      revenueStreams: [{ streamName: "Retail Sales", margin: "12%", estMonthly: "PKR 4.5M" }, { streamName: "Shelf Rental", margin: "100%", estMonthly: "PKR 500K" }],
      phases: [{ phaseName: "Buildout", monthRange: "Month 1-2", tasks: ["Lease", "Interior Fittings"] }, { phaseName: "Stocking", monthRange: "Month 3", tasks: ["POS Setup", "Stock Goods"] }],
      tasks: [{ description: "Setup Barcode POS", department: "IT", duration: "1 Week", status: "In Progress" }],
      scaling: [{ year: "Year 1", title: "Neighborhood Go-to", description: "Daily 500 walk-ins." }, { year: "Year 3", title: "App Delivery", description: "Launch WhatsApp/App delivery." }],
      competitors: [{ region: "Local Kiryana", saturationLevel: "High", opportunity: "Better shopping experience." }],
      zones: [{ zoneName: "Scheme 33", description: "Rapidly growing apartment culture." }, { zoneName: "Bahria Town", description: "Premium mart gap in new precincts." }, { zoneName: "Gadap Town", description: "Untapped developing residential." }],
      growthKPIs: { retention: 85, margin: 12, penetration: 50, yoy: "1.3x" },
      demographics: [{ ageGroup: "Families", percentage: 80 }, { ageGroup: "Youth/Students", percentage: 20 }]
    })
  },
  {
    isTemplate: true, minBudget: 6000001, maxBudget: 10000000,
    title: "Diagnostic Lab / Collection Center", category: "Healthcare",
    description: "Medical testing lab franchise or independent setup.",
    estRoi: "25%", riskLevel: "Low", timeToLaunch: "10 Weeks", status: "suggested",
    brief: {
      roadmapSteps: [
        { stepName: "Licensing & Approvals", description: "Clear health commission requirements." },
        { stepName: "Medical Equipment", description: "Procure analyzers and cold chain storage." },
        { stepName: "Staffing", description: "Hire qualified pathologists and phlebotomists." },
        { stepName: "Operations Launch", description: "Start sample collection and marketing to clinics." }
      ],
      capexPercentage: 80, opexPercentage: 20, profitMargin: "35%", breakEvenPoint: "12 Months",
      targetAreas: ["Near Hospitals", "Gulshan", "Nazimabad"], spaceRequirements: ["1000 sq ft Commercial"]
    },
    detail: generateDetail({
      capex: "PKR 7M", opex: "PKR 800K", roi: "25%", runRate: "PKR 2.5M", advantage: "Recession-proof.", risk: "Regulations.", sec: "Patients",
      allocations: [{ category: "Medical Machines", percentage: 70, description: "Blood analyzers, cold chain" }, { category: "Interior & IT", percentage: 30, description: "Waiting area, LIMS software" }],
      revenueStreams: [{ streamName: "Walk-in Tests", margin: "40%", estMonthly: "PKR 1.5M" }, { streamName: "Clinic Partnerships", margin: "25%", estMonthly: "PKR 1M" }],
      phases: [{ phaseName: "Compliance", monthRange: "Month 1-2", tasks: ["Licensing", "Import Machines"] }, { phaseName: "Operations", monthRange: "Month 3", tasks: ["Hire Pathologists", "Launch"] }],
      tasks: [{ description: "Calibration of Analyzers", department: "Tech", duration: "1 Week", status: "To Do" }],
      scaling: [{ year: "Year 1", title: "Trust Building", description: "Tie-ups with 50 doctors." }, { year: "Year 3", title: "Collection Points", description: "Open 5 small branches." }],
      competitors: [{ region: "Local Labs", saturationLevel: "Medium", opportunity: "Faster online reporting." }],
      zones: [{ zoneName: "Hospital Hubs", description: "Direct referrals from OPDs." }, { zoneName: "Nazimabad", description: "Dense residential demanding home sampling." }, { zoneName: "Gulshan-e-Iqbal", description: "Central access for walk-in patients." }],
      growthKPIs: { retention: 75, margin: 35, penetration: 22, yoy: "1.6x" },
      demographics: [{ ageGroup: "Patients 40+", percentage: 65 }, { ageGroup: "Routine Checks", percentage: 35 }]
    })
  }
];

const seedDB = async () => {
  try {
    await Idea.deleteMany({ isTemplate: true }); 
    await Idea.insertMany(ultimateSeedIdeas); 
    console.log(`🚀 Successfully Seeded ${ultimateSeedIdeas.length} Fully Dynamic Ideas (With KPIs & Demographics)!`);
    process.exit();
  } catch (err) {
    console.log("❌ Seeding error:", err);
    process.exit(1);
  }
};

seedDB();
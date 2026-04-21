import mongoose from 'mongoose';

const IdeaSchema = new mongoose.Schema({
  // ----------------------------------------------------
  // CORE ENGINE LOGIC (Budget Buckets & Tracking)
  // ----------------------------------------------------
  isTemplate: { type: Boolean, default: false }, // True = Humne backend se dala hai, False = User ne save kiya hai
  minBudget: { type: Number }, // e.g., 500000 (5 Lakh)
  maxBudget: { type: Number }, // e.g., 1500000 (15 Lakh)
  
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Template ke liye zaroori nahi, user ke saved ideas ke liye zaroori hai
  userBudgetInput: { type: Number }, // User ne strictly kya amount type kiya tha
  
  status: { 
    type: String, 
    enum: ['suggested', 'saved', 'detailed'], 
    default: 'suggested' 
  },

  // ----------------------------------------------------
  // STEP 1: Basic Idea Info (3 Cards Page)
  // ----------------------------------------------------
  title: { type: String, required: true },
  category: { type: String },         // e.g., "Tech/B2B", "E-Com"
  description: { type: String },
  estRoi: { type: String },           // e.g., "35%"
  riskLevel: { type: String },        // e.g., "Medium", "Low"
  timeToLaunch: { type: String },     // e.g., "4 Weeks"

  // ----------------------------------------------------
  // STEP 2: Brief Data (View Brief Page)
  // ----------------------------------------------------
  brief: {
    roadmapSteps: [
      { stepName: String, description: String } // e.g., { stepName: "Legal", description: "Register LLC" }
    ], 
    capexPercentage: { type: Number },
    opexPercentage: { type: Number },
    profitMargin: { type: String },
    breakEvenPoint: { type: String },
    targetAreas: [{ type: String }],
    spaceRequirements: [{ type: String }] // e.g., ["500 sq ft", "Commercial zone"]
  },

  // ----------------------------------------------------
  // STEP 3: Deep Details (Check Details Pages)
  // ----------------------------------------------------
  detail: {
    budget: {
      totalCapexAmount: { type: String },
      monthlyBurnRate: { type: String },
      yearOneRoi: { type: String },
      totalGrossRunRate: { type: String },
      allocations: [
        { category: String, percentage: Number, description: String } 
      ],
      revenueStreams: [
        { streamName: String, margin: String, estMonthly: String }
      ]
    },
    roadmap: {
      phases: [
        { phaseName: String, monthRange: String, tasks: [{ type: String }] }
      ],
      detailedTasks: [
        { description: String, department: String, duration: String, status: String }
      ]
    },
    growth: {
      customerRetention: { type: Number },
      grossMargin: { type: Number },
      marketPenetration: { type: Number }, 
      yoyGrowth: { type: String },         
      scalingTimeline: [
        { year: String, title: String, description: String }
      ]
    },
    location: {
      targetZones: [
        { zoneName: String, description: String } 
      ],
      demographics: [
        { ageGroup: String, percentage: Number }
      ],
      secTarget: { type: String },         
      competitorAnalysis: [
        { region: String, saturationLevel: String, opportunity: String }
      ],
      keyAdvantage: { type: String },
      majorRisk: { type: String }
    }
  }
}, { timestamps: true }); 

export default mongoose.model('Idea', IdeaSchema);
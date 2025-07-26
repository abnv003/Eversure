export type Product = {
  id: number;
  product_name: string;
  sizes: string;
  product_code: string;
  category: string;
  sub_category: string;
  description: string;
  image: string;
  product_features: {
    title: string;
    description: string;
  }[];
  options?: string[];
};

export const products: Product[] = [
    // {
    //   "id": 1,
    //   "product_name": "MODCANN WI+",
    //   "sizes": "14G to 26G",
    //   "product_code": "1001",
    //   "category": "infusion-transfusion-therapy",
    //   "sub_category": "IV Cannula",
    //   "description": "For infusion of intravenous fluids and medicines.",
    //   "image": "http://eversuremedical.com/assets/images/product/iv-infusion-iv-cannula-modcann-wi.webp",
    //   "product_features": [
    //   {
    //     "title": "Ultra-Sharp Needle",
    //     "description": "Back-cut siliconised stainless steel needle for smooth insertion."
    //   },
    //   {
    //     "title": "Smooth & Flexible Insertion",
    //     "description": "Tapered tip and soft wings reduce friction."
    //   },
    //   {
    //     "title": "Radiopaque & Translucent Catheter",
    //     "description": "Three / four striped FEP catheter visible under X-ray."
    //   },
    //   {
    //     "title": "Biocompatible, Safe Material",
    //     "description": "Latex-free, PVC-free for extended safe use."
    //   },
    //   {
    //     "title": "Optional  PUR Catheter",
    //     "description": "Polyurethane option enhances kink resistance and comfort."
    //   },
    //   {
    //     "title": "Flashback Chamber with Vent Filter",
    //     "description": "Transparent chamber and filter ensure quick flashback."
    //   },
    //   {
    //     "title": "Durable Component Materials",
    //     "description": "Polypropylene body and polycarbonate chamber for strength."
    //   },
    //   {
    //     "title": "Secure Injection Port",
    //     "description": "Non-return silicon valve with color-coded cap."
    //   },
    //   {
    //     "title": "Sterile & Certified",
    //     "description": "ETO sterilized, CE certified, single-use device."
    //   }
    // ]
    // },
    {
      "id": 2,
      "product_name": "ECOCANN",
      "sizes": "14G to 26G",
      "product_code": "1002",
      "category": "infusion-transfusion-therapy",
      "sub_category": "IV Cannula",
      "description": "For infusion of intravenous fluids and medicines.",
      "image": "/images/IV Cannula.png",
      "product_features": [
      {
        "title": "Ultra-Sharp Needle Design",
        "description": "Siliconised stainless steel, back-cut needle for pain-free insertion."
      },
      {
        "title": "Flexible Fixation Wings",
        "description": "Wide, soft wings ensure easy and proper placement."
      },
      {
        "title": "Radiopaque Frictionless Catheter",
        "description": "Three-striped FEP catheter with tapered tip and smooth surfaces."
      },
      {
        "title": "Transparent Flashback Chamber",
        "description": "Allows quick visual confirmation during venipuncture."
      },
      {
        "title": "Injection Port with Valve",
        "description": "Non-return silicon valve and color-coded cap for additional medication."
      },
      {
        "title": "Biocompatible Material",
        "description": " Designed for patient comfort and longer indwelling duration."
      },
      {
        "title": "Latex and PVC-Free",
        "description": "Hypoallergenic design ensures broader patient safety."
      },
      {
        "title": "Sterile & Certified",
        "description": "ETO sterilized, single-use, CE marked, non-pyrogenic."
      }
    ],
    "options": []
    },
    {
      "id": 3,
      "product_name": "ECOCANN W",
      "sizes": "14G to 26G",
      "product_code": "1003",
      "category": "infusion-transfusion-therapy",
      "sub_category": "IV Cannula",
      "description": "For infusion of intravenous fluids and medicines.",
      "image": "/images/Ecocann W.png",
      "product_features": [
      {
        "title": "Ultra-Sharp Needle Design",
        "description": "Siliconised stainless steel, back-cut needle for pain-free insertion."
      },
      {
        "title": "Flexible Fixation Wings",
        "description": "Wide, soft wings ensure easy and proper placement."
      },
      {
        "title": "Radiopaque Frictionless Catheter",
        "description": "Three-striped FEP catheter with tapered tip and smooth surfaces."
      },
      {
        "title": "Transparent Flashback Chamber",
        "description": "Allows quick visual confirmation during venipuncture."
      },
      {
        "title": "Injection Port with Valve",
        "description": "Non-return silicon valve and color-coded cap for additional medication."
      },
      {
        "title": "Biocompatible Material",
        "description": " Designed for patient comfort and longer indwelling duration."
      },
      {
        "title": "Latex and PVC-Free",
        "description": "Hypoallergenic design ensures broader patient safety."
      },
      {
        "title": "Sterile & Certified",
        "description": "ETO sterilized, single-use, CE marked, non-pyrogenic."
      }
    ],
    "options": []
    },
    {
      "id": 4,
      "product_name": "ECOCANN N",
      "sizes": "24G to 26G",
      "product_code": "1004",
      "category": "infusion-transfusion-therapy",
      "sub_category": "IV Cannula",
      "description": "For infusion of intravenous fluids and medicines.",
      "image": "/images/Ecocann N.png",
      "product_features": [
      {
        "title": "Ultra-Sharp Needle Design",
        "description": "Siliconised stainless steel, back-cut needle for pain-free insertion."
      },
      {
        "title": "Flexible Fixation Wings",
        "description": "Wide, soft wings ensure easy and proper placement."
      },
      {
        "title": "Radiopaque Frictionless Catheter",
        "description": "Three-striped FEP catheter with tapered tip and smooth surfaces."
      },
      {
        "title": "Transparent Flashback Chamber",
        "description": "Allows quick visual confirmation during venipuncture."
      },
      {
        "title": "Injection Port with Valve",
        "description": "Non-return silicon valve and color-coded cap for additional medication."
      },
      {
        "title": "Biocompatible Material",
        "description": " Designed for patient comfort and longer indwelling duration."
      },
      {
        "title": "Latex and PVC-Free",
        "description": "Hypoallergenic design ensures broader patient safety."
      },
      {
        "title": "Sterile & Certified",
        "description": "ETO sterilized, single-use, CE marked, non-pyrogenic."
      }
    ],
    "options": []
    },
    {
      "id": 5,
      "product_name": "ECOWIN",
      "sizes": "14G to 26G",
      "product_code": "1005",
      "category": "infusion-transfusion-therapy",
      "sub_category": "IV Cannula",
      "description": "For infusion of intravenous fluids and medicines.",
      "image": "/images/ecowin.jpg",
      "product_features": [
      {
        "title": "Ultra-Sharp Needle Design",
        "description": "Siliconised stainless steel needle ensures smooth, pain-free insertion."
      },
      {
        "title": "Transparent Needle Hub with Flashback Chamber",
        "description": "Provides easy visualization after needle insertion."
      },
      {
        "title": "Radiopaque Frictionless Catheter",
        "description": "Three-striped FEP catheter with tapered, smooth surface for reduced friction."
      },
      {
        "title": "Biocompatible Material",
        "description": "Supports longer indwelling time and patient safety."
      },
      {
        "title": "Latex and PVC-Free",
        "description": "Safe for allergy-prone and sensitive patients."
      },
      {
        "title": "Sterile and Certified",
        "description": "ETO Sterilized, CE Certified, Single Use, Non-Pyrogenic."
      }
    ],
    "options": []
    },
    // {
    //   "id": 6,
    //   "product_name": "ECOCANN S",
    //   "sizes": "14G to 26G",
    //   "product_code": "1010",
    //   "category": "infusion-transfusion-therapy",
    //   "sub_category": "IV Cannula",
    //   "description": "For infusion of intravenous fluids and medicines.",
    //   "image": "http://eversuremedical.com/assets/images/product/infusion/iv-infusion-products-iv-cannula-ecocann-s.webp",
    //   "product_features": [
    //   {
    //     "title": "Ultra-Sharp Needle Design",
    //     "description": "Siliconised stainless steel needle ensures smooth, pain-free insertion."
    //   },
    //   {
    //     "title": "Transparent Needle Hub with Flashback Chamber",
    //     "description": "Provides easy visualization after needle insertion."
    //   },
    //   {
    //     "title": "Radiopaque Frictionless Catheter",
    //     "description": "Three-striped FEP catheter with tapered, smooth surface for reduced friction."
    //   },
    //   {
    //     "title": "Biocompatible Material",
    //     "description": "Supports longer indwelling time and patient safety."
    //   },
    //   {
    //     "title": "Latex and PVC-Free",
    //     "description": "Safe for allergy-prone and sensitive patients."
    //   },
    //   {
    //     "title": "Sterile and Certified",
    //     "description": "ETO Sterilized, CE Certified, Single Use, Non-Pyrogenic."
    //   }
    // ]
    // },
    {
      "id": 7,
      "product_name": "MODWAY",
      "sizes": "Size information not available",
      "product_code": "1401",
      "category": "infusion-transfusion-therapy",
      "sub_category": "Three Way Stop Cock",
      "description": "For simultaneous and continuous infusion of two fluids to connect the luer device and control flow direction.",
      "image": "/images/three way stop cock.png",
      "product_features": [
      {
        "title": "360° Smooth Rotation",
        "description": "Enables unrestricted and precise fluid direction control."
      },
      {
        "title": "Universal 6% Luer Taper",
        "description": "Ensures leak-proof fitment with standard connections."
      },
      {
        "title": "Connection Ports",
        "description": "1 Male luer lock: For secure connection with other devices, 2 Female luer connectors: For compatibility with multiple setups."
      },
      {
        "title": "Clear Polycarbonate Body",
        "description": "Transparent channel allows easy visual monitoring of fluid passage."
      },
      {
        "title": "Minimal Priming Volume",
        "description": "Ensures accurate drug dosing and administration."
      },
      {
        "title": "Rigid Structure",
        "description": "Designed to minimize air entrapment with a circular flow channel."
      },
      {
        "title": "Rotating Handle with Directional Arrow",
        "description": "For clear flow path indication."
      },
      {
        "title": "Sterility & Safety",
        "description": "ETO Sterilized, Single Use, Non-pyrogenic, CE Certified"
      }
    ],
    "options": [
      "Available in Colours : Red, Blue and White",
      "Non Lipid Resistant / Lipid Resistant",
      "Without Rotator"
    ]
    },
    {
      "id": 8,
      "product_name": "MODEXWAY",
      "sizes": "Size information not available",
      "product_code": "1302",
      "category": "infusion-transfusion-therapy",
      "sub_category": "Three Way Stop Cock",
      "description": "For simultaneous and continuous infusion of two fluids to connect the luer device and control flow direction away from the venipuncture site.",
      "image": "/images/Three way stop cock with ext tube.png",
      "product_features": [
      {
        "title": "DEHP-Free PVC Tube",
        "description": "Ensures safety and minimizes patient exposure to harmful plasticizers."
      },
      {
        "title": "Dual-End Connectivity",
        "description": "One end: Integrated Three Way Stopcock, Other end: Male luer lock connector for secure attachment."
      },
      {
        "title": "360° Smooth Rotation",
        "description": "Allows easy control of fluid direction."
      },
      {
        "title": "Kink-Resistant Extension Tube",
        "description": "Designed with a smooth internal surface for consistent fluid flow."
      },
      {
        "title": "Extension Tube Dimensions",
        "description": "Inner Diameter (I Ø): 3.0 mm, Outer Diameter (O Ø): 4.1 mm"
      },
      {
        "title": "Available Tube Lengths (in cm)",
        "description": "10, 25, 50, 100, 150, 200"
      },
      {
        "title": "Sterility & Certification",
        "description": "ETO Sterilized, Single Use, Non-pyrogenic, CE Certified"
      }
    ],
    "options": [
      "Lipid Resistant Three way stop cock",
      "Rotating luer lock"
    ]
    },
    {
      "id": 9,
      "product_name": "ECOVENN NV",
      "sizes": "Size information not available",
      "product_code": "1102",
      "category": "infusion-transfusion-therapy",
      "sub_category": "I. V. Infusion Set",
      "description": "For infusion of intravenous fluids and medicines into human circulating system by using intravenous catheter or cannula.",
      "image": "/images/Ecovenn NV.png",
      "product_features": [
      {
        "title": "Sharp Spike",
        "description": "Strong, durable spike ensures easy and precise piercing of fluid containers."
      },
      {
        "title": "Transparent Drip Chamber",
        "description": "Facilitates visual monitoring of flow rate and effective priming."
      },
      {
        "title": "15 Micron Fluid Filter",
        "description": "Integrated in chamber for filtration of particulates."
      },
      {
        "title": "Kink-Resistant PVC Tube",
        "description": "Ensures uninterrupted, uniform fluid flow."
      },
      {
        "title": "Smooth Roller Clamp",
        "description": "Allows accurate flow rate adjustment."
      },
      {
        "title": "Self-Sealing Latex Bulb",
        "description": "Prevents leakage during infusion."
      },
      {
        "title": "Drop Rate",
        "description": "20 drops/ml for standard dosing precision."
      },
      {
        "title": "Tube Size",
        "description": "Length: 1.5 meters and Diameter: I Ø 2.8 mm, O Ø 4.0 mm"
      },
      {
        "title": "Sterility & Safety",
        "description": "ETO Sterilized, Single Use, Non-pyrogenic, CE Certified"
      }
    ],
    "options": [
      "With Y injection port",
      "With/without needle",
      "Luer lock or rotating luer lock",
      "Flow regulator & needle-free Y injection port"
    ]
    },
    {
      "id": 10,
      "product_name": "ECOVENN V",
      "sizes": "Size information not available",
      "product_code": "1106",
      "category": "infusion-transfusion-therapy",
      "sub_category": "I. V. Infusion Set",
      "description": "For infusion of intravenous fluids and medicines into human circulating system by using intravenous catheter or cannula.",
      "image": "/images/infusion.png",
      "product_features": [
      {
        "title": "Sharp Spike",
        "description": "Ensures smooth and easy piercing."
      },
      {
        "title": "Air Vent",
        "description": "Integrated with bacteria retentive filter to prevent contamination."
      },
      {
        "title": "Transparent Drip Chamber",
        "description": "Facilitates clear visibility for flow rate monitoring and priming."
      },
      {
        "title": "15 Micron Fluid Filter",
        "description": "Filters out particulate matter for clean infusion."
      },
      {
        "title": "Kink-Resistant PVC Tube",
        "description": "Promotes uninterrupted fluid flow."
      },
      {
        "title": "Smooth Roller Clamp",
        "description": "Allows precise flow rate adjustments."
      },
      {
        "title": "Self-Sealing Latex Bulb",
        "description": "Prevents backflow and leakage."
      },
      {
        "title": "Drop Rate",
        "description": "Standard 20 drops/ml."
      },
      {
        "title": "Tube Specifications",
        "description": "Length: 1.5 meters and Diameter: I Ø 2.8 mm, O Ø 4.0 mm"
      },
      {
        "title": "Sterility & Compliance",
        "description": "ETO Sterilized, Single Use, Non-Pyrogenic, CE Certified"
      }
    ],
    "options": [
      "With Y injection port",
      "With/without needle",
      "Luer lock or rotating luer lock",
      "With Flow regulator & needle-free Y injection port"
    ]
    },
    // {
    //   "id": 11,
    //   "product_name": "ECOVENN M NV",
    //   "sizes": "Size information not available",
    //   "product_code": "1108",
    //   "category": "infusion-transfusion-therapy",
    //   "sub_category": "I. V. Infusion Set",
    //   "description": "For infusion of intravenous fluids and medicines for children and infants or to infuse sensitive medications where precision in the flow rate is essential.",
    //   "image": "http://eversuremedical.com/assets/images/product/infusion/best-iv-infusion-set-manufacturing-companies-ecovenn-m-nv.webp",
    //   "product_features": [
    //   {
    //     "title": "Ultra-Sharp Needle Design",
    //     "description": "Siliconised stainless steel needle ensures smooth, pain-free insertion."
    //   },
    //   {
    //     "title": "Transparent Needle Hub with Flashback Chamber",
    //     "description": "Provides easy visualization after needle insertion."
    //   },
    //   {
    //     "title": "Radiopaque Frictionless Catheter",
    //     "description": "Three-striped FEP catheter with tapered, smooth surface for reduced friction."
    //   },
    //   {
    //     "title": "Biocompatible Material",
    //     "description": "Supports longer indwelling time and patient safety."
    //   },
    //   {
    //     "title": "Latex and PVC-Free",
    //     "description": "Safe for allergy-prone and sensitive patients."
    //   },
    //   {
    //     "title": "Sterile and Certified",
    //     "description": "ETO Sterilized, CE Certified, Single Use, Non-Pyrogenic."
    //   }
    // ]
    // },
    // {
    //   "id": 12,
    //   "product_name": "ECOVENN M V",
    //   "sizes": "Size information not available",
    //   "product_code": "1109",
    //   "category": "infusion-transfusion-therapy",
    //   "sub_category": "I. V. Infusion Set",
    //   "description": "For infusion of intravenous fluids and medicines for children and infants or to infuse sensitive medications where precision in the flow rate is essential.",
    //   "image": "http://eversuremedical.com/assets/images/product/infusion/best-iv-infusion-set-manufacturing-companies-ecovenn-m-v.webp",
    //   "product_features": [
    //   {
    //     "title": "Ultra-Sharp Needle Design",
    //     "description": "Siliconised stainless steel needle ensures smooth, pain-free insertion."
    //   },
    //   {
    //     "title": "Transparent Needle Hub with Flashback Chamber",
    //     "description": "Provides easy visualization after needle insertion."
    //   },
    //   {
    //     "title": "Radiopaque Frictionless Catheter",
    //     "description": "Three-striped FEP catheter with tapered, smooth surface for reduced friction."
    //   },
    //   {
    //     "title": "Biocompatible Material",
    //     "description": "Supports longer indwelling time and patient safety."
    //   },
    //   {
    //     "title": "Latex and PVC-Free",
    //     "description": "Safe for allergy-prone and sensitive patients."
    //   },
    //   {
    //     "title": "Sterile and Certified",
    //     "description": "ETO Sterilized, CE Certified, Single Use, Non-Pyrogenic."
    //   }
    // ]
    // },
    {
      "id": 13,
      "product_name": "MODVENN V",
      "sizes": "Size information not available",
      "product_code": "1107",
      "category": "infusion-transfusion-therapy",
      "sub_category": "I. V. Infusion Set",
      "description": "For infusion of intravenous fluids and medicines into human circulating system by using intravenous catheter or cannula.",
      "image": "/images/modvenn v.png",
      "product_features": [
      {
        "title": "DEHP Free",
        "description": "Safer for patients, especially in long-term use."
      },
      {
        "title": "Gravity Feed Only",
        "description": "No external pressure needed."
      },
      {
        "title": "Sharp Spike",
        "description": "Ensures easy and smooth penetration into fluid containers."
      },
      {
        "title": "Transparent Drip Chamber",
        "description": "Allows visual monitoring of flow rate and priming."
      },
      {
        "title": "15 Micron Filter",
        "description": "Filters out particulate matter from fluid."
      },
      {
        "title": "Kink-Resistant PVC Tube",
        "description": "Ensures smooth and uninterrupted fluid flow."
      },
      {
        "title": "Smooth Roller Clamp",
        "description": "Easy control of flow rate."
      },
      {
        "title": "Self-Sealing Latex-Free Bulb with Luer Lock",
        "description": "Includes latex-free Y-connector."
      },
      {
        "title": "Drop Rate",
        "description": "20 drops/ml"
      },
      {
        "title": "Tube Specifications",
        "description": "Length: 1.5 meters and Diameter: Inner Ø 2.8 mm, Outer Ø 4.0 mm"
      },
      {
        "title": "Sterility & Safety",
        "description": "ETO Sterilized, Single Use, Non-Pyrogenic, CE Certified"
      }
    ],
    "options": [
      "Needle free Y connector",
      "With Flow regulator"
    ]
    },
    {
      "id": 14,
      "product_name": "MODVENN V+",
      "sizes": "Size information not available",
      "product_code": "1105",
      "category": "infusion-transfusion-therapy",
      "sub_category": "I. V. Infusion Set",
      "description": "For infusion of intravenous fluids and medicines into human circulating system by using intravenous catheter or cannula.",
      "image": "/images/Modvenn V+.png",
      "product_features": [
      {
        "title": "DEHP Free",
        "description": "Ensures patient safety during long-term use."
      },
      {
        "title": "Dual Functionality",
        "description": "Suitable for both gravity feed and pump/pressure infusion."
      },
      {
        "title": "Strong Beveled Piercing Spike",
        "description": "Facilitates easy and effective container penetration."
      },
      {
        "title": "Air Vent with Filter",
        "description": "Prevents air contamination, reduces Healthcare Associated Infections (HIM)."
      },
      {
        "title": "Flexible Double Drip Chamber",
        "description": "Improves visual access and allows faster fluid level adjustment."
      },
      {
        "title": "15 Micron Filter",
        "description": "Filters foreign particles from fluid."
      },
      {
        "title": "Auto Air Stop with Priming Filter",
        "description": "Prevents air embolism during infusion."
      },
      {
        "title": "Kink Resistant PVC Tube",
        "description": "Maintains steady flow."
      },
      {
        "title": "Smooth Roller Clamp",
        "description": "Allows easy control of flow rate."
      },
      {
        "title": "Latex-Free Self-Sealing Bulb",
        "description": "Includes Y-connector for administering additional medication."
      },
      {
        "title": "Drop Rate",
        "description": "20 drops/ml"
      },
      {
        "title": "Tube Size",
        "description": "Length: 1.5 meters and Diameter: Inner Ø 2.8 mm, Outer Ø 4.0 mm"
      },
      {
        "title": "Safety Standards",
        "description": "ETO Sterilized, Single Use, Non-Pyrogenic, CE Certified"
      }
    ],
    "options": [
      "With Y injection port",
      "With Flow regulator & needle-free Y injection port"
    ]
    },
    {
      "id": 15,
      "product_name": "MODVENN SV",
      "sizes": "Size information not available",
      "product_code": "1111",
      "category": "infusion-transfusion-therapy",
      "sub_category": "I. V. Infusion Set",
      "description": "For infusion of intravenous fluids and medicines into human circulating system preventing contamination by retaining bacteria, particles of size up to 0.2 micron.",
      "image": "/images/modvenn sv low.png",
      "product_features": [
      {
        "title": "0.2 Micron Inline Filter",
        "description": "Retains bacteria and fine particles, preventing infections and ensuring sterile infusion."
      },
      {
        "title": "DEHP-Free",
        "description": "Enhances patient safety, especially for long-term or sensitive infusions."
      },
      {
        "title": "Dual Mode Functionality",
        "description": "Suitable for both gravity feed and pump/pressure infusion systems."
      },
      {
        "title": "Strong Beveled Piercing Spike",
        "description": "Facilitates easy, sharp penetration into fluid containers."
      },
      {
        "title": "Air Vent with Filter",
        "description": "Prevents air contamination, reducing the risk of Healthcare Associated Infections (HIM)"
      },
      {
        "title": "Transparent Drip Chamber",
        "description": "Allows clear visibility for monitoring flow rate and priming."
      },
      {
        "title": "15 Micron Fluid Filter (Inside Drip Chamber)",
        "description": "Filters visible foreign particles from the fluid."
      },
      {
        "title": "Kink Resistant, DEHP-Free PVC Tubing",
        "description": "Maintains smooth and uninterrupted fluid flow."
      },
      {
        "title": "Smooth Roller Clamp",
        "description": "Offers precise and easy adjustment of the flow rate."
      },
      {
        "title": "Latex-Free Self-Sealing Bulb with Y-Connector",
        "description": "Enables safe administration of additional medications via the Y port."
      },
      {
        "title": "Drop Rate: 20 drops/ml",
        "description": "Standardized drop factor for consistent dosage control."
      },
      {
        "title": "Tube Length: 2.0 meters",
        "description": "Provides flexibility for different clinical setups."
      }
    ],
    "options": [
      "PVC-Free Components",
      "Priming Filter Cap",
      "With or Without Needle",
      "Y-Injection Port (Needle / Latex-Free Options)",
      "Check Valve"
    ]
    },
    {
      "id": 16,
      "product_name": "MODVENN SV+",
      "sizes": "Size information not available",
      "product_code": "1112",
      "category": "infusion-transfusion-therapy",
      "sub_category": "I. V. Infusion Set",
      "description": "For infusion of intravenous fluids and medicines into human circulating system preventing contamination by retaining bacteria, particles of size up to 0.2 micron.",
      "image": "/images/modvenn sv.png",
      "product_features": [
      {
        "title": "0.2 micron inline filter",
        "description": "Retains bacteria and fine particles and compatible with gravity & pressure infusion systems."
      },
      {
        "title": "Double drip chamber",
        "description": "Ensures visibility and fluid control."
      },
      {
        "title": "Air vent with filter",
        "description": "Prevents air contamination; reduces HAIs has 15-micron fluid filter inside the chamber."
      },
      {
        "title": "Auto air stop with priming filter",
        "description": "Prevents air embolism."
      },
      {
        "title": "Strong spike",
        "description": "Easy and secure piercing."
      },
      {
        "title": "Kink-resistant tubing",
        "description": "Made from DEHP-free PVC."
      },
      {
        "title": "Smooth roller clamp",
        "description": "Includes safety features for flow control."
      },
      {
        "title": "Latex-free Y-connector",
        "description": "With secure luer lock."
      },
      {
        "title": "Drop rate",
        "description": "20 drops/ml"
      },
      {
        "title": "Tube length",
        "description": "2.0 m"
      }
    ],
    "options": [
      "PVC Free",
      "Priming filter cap",
      "Needle Free",
      "Latex-free or needle-type Y injection ports"
    ]
    },
    {
      "id": 17,
      "product_name": "ECOBUVENN",
      "sizes": "110 ml & 150 ml",
      "product_code": "1501",
      "category": "infusion-transfusion-therapy",
      "sub_category": "Burette Set",
      "description": "For delivering a fixed volume of IV fluid at a fixed rate.",
      "image": "/images/burette 5.png",
      "product_features": [
      {
        "title": "Graduated Transparent Burette Chamber",
        "description": "Capacity 110 ml & 150 ml and allows accurate volume control"
      },
      {
        "title": "Bacteria-retentive Air Inlet",
        "description": "Prevents contamination from external air"
      },
      {
        "title": "Injection Port",
        "description": "Enables addition of extra medication"
      },
      {
        "title": "Smooth Roller Clamp",
        "description": "For precise adjustment of flow rate"
      },
      {
        "title": "Floating Auto Shut-off Valve",
        "description": "Prevents air embolism and also Indicates empty chamber status"
      },
      {
        "title": "15-Micron Fluid Filter",
        "description": "Removes foreign particles and debris"
      },
      {
        "title": "Drop Rate",
        "description": "60 drops/ml for controlled infusion"
      },
      {
        "title": "Soft PVC Tubing",
        "description": "Transparent and kink-resistant , Length: 150 cm and  Diameter: I.D. 2.8 mm, O.D. 4.0 mm"
      }
    ],
    "options": [
      "With/without Y injection port",
      "With/without needle",
      "Luer lock or rotating luer lock",
      "Flow regulator & needle-free Y injection port options"
    ]
    },
    {
      "id": 18,
      "product_name": "ECOEXTT",
      "sizes": "Size information not available",
      "product_code": "1201 - ECOEXTT,1202 - ECOEXTT-HP",
      "category": "infusion-transfusion-therapy",
      "sub_category": "Extension Tube",
      "description": "For easy and safe connection of the source of infusion and the patient during infusion therapy without any length restrictions.",
      "image": "/images/ecoextt.png",
      "product_features": [
      {
        "title": "Ultra-Sharp Needle Design",
        "description": "Siliconised stainless steel needle ensures smooth, pain-free insertion."
      },
      {
        "title": "Transparent Needle Hub with Flashback Chamber",
        "description": "Provides easy visualization after needle insertion."
      },
      {
        "title": "Radiopaque Frictionless Catheter",
        "description": "Three-striped FEP catheter with tapered, smooth surface for reduced friction."
      },
      {
        "title": "Biocompatible Material",
        "description": "Supports longer indwelling time and patient safety."
      },
      {
        "title": "Latex and PVC-Free",
        "description": "Safe for allergy-prone and sensitive patients."
      },
      {
        "title": "Sterile and Certified",
        "description": "ETO Sterilized, CE Certified, Single Use, Non-Pyrogenic."
      }
    ],
    "options": [
      "With/without Y injection port",
      "With/without needle",
      "Luer lock or rotating luer lock",
      "Flow regulator & needle-free Y injection port options"
    ]
    },
    {
      "id": 19,
      "product_name": "MODEXTT",
      "sizes": "Single, Double, Triple Lumen",
      "product_code": "Single 1204, Double 1205, Triple 1206",
      "category": "infusion-transfusion-therapy",
      "sub_category": "Multiway",
      "description": "For connecting to the end of vascular catheters and enable catheter access for infusion and aspiration avoiding bacterial contamination in fluid path way.",
      "image": "/images/triple ext tube.png",
      "product_features": [
      {
        "title": "Ultra-Sharp Needle Design",
        "description": "Siliconised stainless steel needle ensures smooth, pain-free insertion."
      },
      {
        "title": "Transparent Needle Hub with Flashback Chamber",
        "description": "Provides easy visualization after needle insertion."
      },
      {
        "title": "Radiopaque Frictionless Catheter",
        "description": "Three-striped FEP catheter with tapered, smooth surface for reduced friction."
      },
      {
        "title": "Biocompatible Material",
        "description": "Supports longer indwelling time and patient safety."
      },
      {
        "title": "Latex and PVC-Free",
        "description": "Safe for allergy-prone and sensitive patients."
      },
      {
        "title": "Sterile and Certified",
        "description": "ETO Sterilized, CE Certified, Single Use, Non-Pyrogenic."
      }
    ],
    "options": [
      "With/without Y injection port",
      "With/without needle",
      "Luer lock or rotating luer lock",
      "Flow regulator & needle-free Y injection port options"
    ]
    },
    {
      "id": 20,
      "product_name": "ECOTRAN",
      "sizes": "Adult, Child, Neonatal",
      "product_code": "ECOTRAN NV - 2401, ECOTRAN V - 2402",
      "category": "infusion-transfusion-therapy",
      "sub_category": "Blood Transfusion Set",
      "description": "For administration of blood / blood components into human circulating system.",
      "image": "/images/ecotran.png",
      "product_features": [
      {
        "title": "Ultra-Sharp Needle Design",
        "description": "Siliconised stainless steel needle ensures smooth, pain-free insertion."
      },
      {
        "title": "Transparent Needle Hub with Flashback Chamber",
        "description": "Provides easy visualization after needle insertion."
      },
      {
        "title": "Radiopaque Frictionless Catheter",
        "description": "Three-striped FEP catheter with tapered, smooth surface for reduced friction."
      },
      {
        "title": "Biocompatible Material",
        "description": "Supports longer indwelling time and patient safety."
      },
      {
        "title": "Latex and PVC-Free",
        "description": "Safe for allergy-prone and sensitive patients."
      },
      {
        "title": "Sterile and Certified",
        "description": "ETO Sterilized, CE Certified, Single Use, Non-Pyrogenic."
      }
    ],
    "options": [
      "With/without Y injection port",
      "With/without needle",
      "Luer lock or rotating luer lock",
      "Flow regulator & needle-free Y injection port options"
    ]
    },
    // {
    //   "id": 21,
    //   "product_name": "ECOCATH",
    //   "sizes": "5FG to 24FG",
    //   "product_code": "1701",
    //   "category": "Anesthesia",
    //   "sub_category": "Suction Catheter",
    //   "description": "To extract bodily secretions, such as mucus or saliva from the upper airway with maximum comfort to the patient. The purpose of suctioning is to keep the airway clear of secretions and to prevent plugging.",
    //   "image": "https://eversuremedical.com/assets/images/product/infusion/suction-catheter-ecocath.webp",
    //   "product_features": [
    //   {
    //     "title": "Ultra-Sharp Needle Design",
    //     "description": "Siliconised stainless steel needle ensures smooth, pain-free insertion."
    //   },
    //   {
    //     "title": "Transparent Needle Hub with Flashback Chamber",
    //     "description": "Provides easy visualization after needle insertion."
    //   },
    //   {
    //     "title": "Radiopaque Frictionless Catheter",
    //     "description": "Three-striped FEP catheter with tapered, smooth surface for reduced friction."
    //   },
    //   {
    //     "title": "Biocompatible Material",
    //     "description": "Supports longer indwelling time and patient safety."
    //   },
    //   {
    //     "title": "Latex and PVC-Free",
    //     "description": "Safe for allergy-prone and sensitive patients."
    //   },
    //   {
    //     "title": "Sterile and Certified",
    //     "description": "ETO Sterilized, CE Certified, Single Use, Non-Pyrogenic."
    //   }
    // ]
    // },
    // {
    //   "id": 22,
    //   "product_name": "ECOMASK",
    //   "sizes": "Adult, Child",
    //   "product_code": "Adult – 3301, Child – 3302",
    //   "category": "Anesthesia",
    //   "sub_category": "Oxygen Mask",
    //   "description": "For oxygen therapy.",
    //   "image": "https://eversuremedical.com/assets/images/product/infusion/oxygen-mask-manufacturer-ecomask.webp",
    //   "product_features": [
    //   {
    //     "title": "Ultra-Sharp Needle Design",
    //     "description": "Siliconised stainless steel needle ensures smooth, pain-free insertion."
    //   },
    //   {
    //     "title": "Transparent Needle Hub with Flashback Chamber",
    //     "description": "Provides easy visualization after needle insertion."
    //   },
    //   {
    //     "title": "Radiopaque Frictionless Catheter",
    //     "description": "Three-striped FEP catheter with tapered, smooth surface for reduced friction."
    //   },
    //   {
    //     "title": "Biocompatible Material",
    //     "description": "Supports longer indwelling time and patient safety."
    //   },
    //   {
    //     "title": "Latex and PVC-Free",
    //     "description": "Safe for allergy-prone and sensitive patients."
    //   },
    //   {
    //     "title": "Sterile and Certified",
    //     "description": "ETO Sterilized, CE Certified, Single Use, Non-Pyrogenic."
    //   }
    // ]
    // },
    // {
    //   "id": 23,
    //   "product_name": "ECONEB",
    //   "sizes": "Adult, Child",
    //   "product_code": "Adult – 3201, Child – 3202",
    //   "category": "Anesthesia",
    //   "sub_category": "Nebulizer Mask",
    //   "description": "For administering medication in mist form inhaled into lungs.",
    //   "image": "https://eversuremedical.com/assets/images/product/infusion/nubulizer-mask-manufacturers-econeb.webp",
    //   "product_features": [
    //   {
    //     "title": "Ultra-Sharp Needle Design",
    //     "description": "Siliconised stainless steel needle ensures smooth, pain-free insertion."
    //   },
    //   {
    //     "title": "Transparent Needle Hub with Flashback Chamber",
    //     "description": "Provides easy visualization after needle insertion."
    //   },
    //   {
    //     "title": "Radiopaque Frictionless Catheter",
    //     "description": "Three-striped FEP catheter with tapered, smooth surface for reduced friction."
    //   },
    //   {
    //     "title": "Biocompatible Material",
    //     "description": "Supports longer indwelling time and patient safety."
    //   },
    //   {
    //     "title": "Latex and PVC-Free",
    //     "description": "Safe for allergy-prone and sensitive patients."
    //   },
    //   {
    //     "title": "Sterile and Certified",
    //     "description": "ETO Sterilized, CE Certified, Single Use, Non-Pyrogenic."
    //   }
    // ]
    // },
    // {
    //   "id": 24,
    //   "product_name": "ECONAS",
    //   "sizes": "Adult, Child, Neonatal",
    //   "product_code": " Adult – 3401, Child – 3402",
    //   "category": "Anesthesia",
    //   "sub_category": "Nasal Oxygen Cannula",
    //   "description": "For easy and efficient administration of oxygen.",
    //   "image": "http://eversuremedical.com/assets/images/product/econas.webp",
    //   "product_features": [
    //   {
    //     "title": "Ultra-Sharp Needle Design",
    //     "description": "Siliconised stainless steel needle ensures smooth, pain-free insertion."
    //   },
    //   {
    //     "title": "Transparent Needle Hub with Flashback Chamber",
    //     "description": "Provides easy visualization after needle insertion."
    //   },
    //   {
    //     "title": "Radiopaque Frictionless Catheter",
    //     "description": "Three-striped FEP catheter with tapered, smooth surface for reduced friction."
    //   },
    //   {
    //     "title": "Biocompatible Material",
    //     "description": "Supports longer indwelling time and patient safety."
    //   },
    //   {
    //     "title": "Latex and PVC-Free",
    //     "description": "Safe for allergy-prone and sensitive patients."
    //   },
    //   {
    //     "title": "Sterile and Certified",
    //     "description": "ETO Sterilized, CE Certified, Single Use, Non-Pyrogenic."
    //   }
    // ]
    // },
    // {
    //   "id": 25,
    //   "product_name": "ECOCATH",
    //   "sizes": "6FG to 24FG",
    //   "product_code": "1801",
    //   "category": "Gastroenterology",
    //   "sub_category": "Ryles Tube",
    //   "description": "For nasogastirc intubation – short term feeding and administration of drugs & food and aspiration of gastro- intestinal secretion.",
    //   "image": "https://eversuremedical.com/assets/images/product/top-iv-catheter-manufacturers-in-india-ryles-tube-ecocath.webp",
    //   "product_features": [
    //   {
    //     "title": "Ultra-Sharp Needle Design",
    //     "description": "Siliconised stainless steel needle ensures smooth, pain-free insertion."
    //   },
    //   {
    //     "title": "Transparent Needle Hub with Flashback Chamber",
    //     "description": "Provides easy visualization after needle insertion."
    //   },
    //   {
    //     "title": "Radiopaque Frictionless Catheter",
    //     "description": "Three-striped FEP catheter with tapered, smooth surface for reduced friction."
    //   },
    //   {
    //     "title": "Biocompatible Material",
    //     "description": "Supports longer indwelling time and patient safety."
    //   },
    //   {
    //     "title": "Latex and PVC-Free",
    //     "description": "Safe for allergy-prone and sensitive patients."
    //   },
    //   {
    //     "title": "Sterile and Certified",
    //     "description": "ETO Sterilized, CE Certified, Single Use, Non-Pyrogenic."
    //   }
    // ]
    // },
    // {
    //   "id": 26,
    //   "product_name": "ECOCATH",
    //   "sizes": "4FG to 10FG",
    //   "product_code": "1901",
    //   "category": "Gastroenterology",
    //   "sub_category": "Infant Feeding Tube",
    //   "description": "For providing feedings and medications into the stomach until the baby can take food by mouth.",
    //   "image": "https://eversuremedical.com/assets/images/product/top-iv-catheter-manufacturer-infant-feeding-tube-ecocath.webp",
    //   "product_features": [
    //   {
    //     "title": "Ultra-Sharp Needle Design",
    //     "description": "Siliconised stainless steel needle ensures smooth, pain-free insertion."
    //   },
    //   {
    //     "title": "Transparent Needle Hub with Flashback Chamber",
    //     "description": "Provides easy visualization after needle insertion."
    //   },
    //   {
    //     "title": "Radiopaque Frictionless Catheter",
    //     "description": "Three-striped FEP catheter with tapered, smooth surface for reduced friction."
    //   },
    //   {
    //     "title": "Biocompatible Material",
    //     "description": "Supports longer indwelling time and patient safety."
    //   },
    //   {
    //     "title": "Latex and PVC-Free",
    //     "description": "Safe for allergy-prone and sensitive patients."
    //   },
    //   {
    //     "title": "Sterile and Certified",
    //     "description": "ETO Sterilized, CE Certified, Single Use, Non-Pyrogenic."
    //   }
    // ]
    // },
    {
      "id": 27,
      "product_name": "FOLEY CATHETER",
      "sizes": "6FG to 24FG",
      "product_code": "1601",
      "category": "Urology",
      "sub_category": "Nelaton Catheter",
      "description": "For short term bladder catheterisation through urethra in case of urinary retention, having radio opaque line throughout the length for x-ray visualization.",
      "image": "/images/Foley catheter.png",
      "product_features": [
      {
        "title": "Ultra-Sharp Needle Design",
        "description": "Siliconised stainless steel needle ensures smooth, pain-free insertion."
      },
      {
        "title": "Transparent Needle Hub with Flashback Chamber",
        "description": "Provides easy visualization after needle insertion."
      },
      {
        "title": "Radiopaque Frictionless Catheter",
        "description": "Three-striped FEP catheter with tapered, smooth surface for reduced friction."
      },
      {
        "title": "Biocompatible Material",
        "description": "Supports longer indwelling time and patient safety."
      },
      {
        "title": "Latex and PVC-Free",
        "description": "Safe for allergy-prone and sensitive patients."
      },
      {
        "title": "Sterile and Certified",
        "description": "ETO Sterilized, CE Certified, Single Use, Non-Pyrogenic."
      }
    ],
    "options": [
      "With/without Y injection port",
      "With/without needle",
      "Luer lock or rotating luer lock",
      "Flow regulator & needle-free Y injection port options"
    ]
    },
    {
      "id": 28,
      "product_name": "ECOSUC",
      "sizes": "Size information not available",
      "product_code": "2301,2302",
      "category": "surgery-wound-drainage",
      "sub_category": "Yankaur Suction Set",
      "description": "For short term bladder catheterisation through urethra in case of urinary retention, having radio opaque line throughout the length for x-ray visualization.",
      "image": "/images/ecosuc.png",
      "product_features": [
      {
        "title": "Durable PVC Tubing",
        "description": "Flexible, kink-resistant medical-grade PVC for smooth suction and pressure resistance."
      },
      {
        "title": "Easy Connection",
        "description": "Soft connectors at both ends for easy attachment to suction tips and apparatus."
      },
      {
        "title": "Complete Set",
        "description": "Includes Yankauer Suction Tip on ribbed tube with universal connectors."
      },
      {
        "title": "Tube Specifications",
        "description": " I.D. 6.3 mm & O.D. 9.3 mm."
      },
      {
        "title": "Length Options",
        "description": "Available tube lengths: 210, 250, and 300 cm."
      },
      {
        "title": "Safety Standard",
        "description": "ETO Sterilized, Single Use, Non-Pyrogenic, CE Certified."
      }
    ],
    "options": []
    },
    {
      "id": 29,
      "product_name": "ECOCWS",
      "sizes": "10, 12, 14, 16 & 18 FG",
      "product_code": "2901",
      "category": "surgery-wound-drainage",
      "sub_category": "Closed Wound Suction Unit",
      "description": "For postoperative treatment to drain away undesirable secretion and blood under negative pressure with an alternative of operating one or two catheters simultaneously.",
      "image": "/images/CWS.png",
      "product_features": [
      {
        "title": "Pressure Control",
        "description": "Large clamp to manage negative pressure effectively."
      },
      {
        "title": "Smooth Insertion",
        "description": "Flexible suction catheter ensures frictionless wound entry."
      },
      {
        "title": "Durability",
        "description": "Kink-resistant tube built to endure suction pressure."
      },
      {
        "title": "Spare Catheter",
        "description": "Includes perforated Redon drain (radio-opaque)."
      }
    ],
    "options": [
      "Bellow unit with connector",
      "Connecting tube with clamp & Y connector",
      "Trocar needle with matching catheter",
      "Spare perforated catheter",
      "Bellow chamber capacity: 600 ml & 800 ml"
    ]
    },
    {
      "id": 30,
      "product_name": "ECOCATH THOR – S",
      "sizes": "8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36 & 40 FG",
      "product_code": "2601",
      "category": "surgery-wound-drainage",
      "sub_category": "Thoracic Catheter",
      "description": "For removal of air, fluid or pus from the intrathoracic space following cardiothoracic or thoracic surgery.",
      "image": "/images/ecocath thor s.png",
      "product_features": [
      {
        "title": "Atraumatic Tip",
        "description": "Smooth, rounded distal end with large finish eyes for efficient drainage and minimal tissue damage."
      },
      {
        "title": "Depth Marking",
        "description": "Graduated every 2 cm for accurate placement during insertion."
      },
      {
        "title": "Easy Handling",
        "description": "Pull-through tapered tongue at the proximal end improves grip and non-traumatic insertion."
      },
      {
        "title": "Secure Fit",
        "description": "Comes with size-matched connector for leak-proof connection to the drainage system."
      },
      {
        "title": "Radiopaque",
        "description": "Full-length radiopaque line ensures visibility under X-ray."
      },
      {
        "title": "Safety",
        "description": "Cross-side eyes reduce the risk of tissue aspiration."
      },
      {
        "title": "Standard Length",
        "description": "45 cm catheter length supports common clinical use."
      }
    ],
    "options": []
    },
    {
      "id": 31,
      "product_name": "ECOCATH THOR – T",
      "sizes": "10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 40 FG",
      "product_code": "2801",
      "category": "surgery-wound-drainage",
      "sub_category": "Thoracic Catheter",
      "description": "For removal of air, fluid or pus from the intrathoracic space following cardiothoracic or thoracic surgery.",
      "image": "/images/ecocath thor t side.png",
      "product_features": [
      {
        "title": "Trocar Tip",
        "description": "Includes blunt, smooth-tipped trocar for accurate and controlled insertion."
      },
      {
        "title": "Graduated Markings",
        "description": "Marked at 5, 10, 15 & 20 cm intervals for accurate depth placement."
      },
      {
        "title": "Ease of Use",
        "description": "Proximal end has a tapered connector for secure drainage bottle connection."
      },
      {
        "title": "Efficient Drainage",
        "description": "Large, polished eyes at the distal end for maximum fluid evacuation."
      },
      {
        "title": "X-Ray Visible",
        "description": "Radiopaque line extends through the catheter length for imaging verification."
      }
    ],
    "options": []
    },
    {
      "id": 32,
      "product_name": "MODCVC",
      "sizes": "Single, Double, Triple Lumen",
      "product_code": "SL-2001 to 2004, DL-2101 to 2103, TL-2201 to 2202",
      "category": "central-venous-access-catheters",
      "sub_category": "Central Venous Catheter",
      "description": "This product is used for catheterization of vena cava with Seldinger method. It is also used to administer fluid and medication.",
      "image": "/images/cvc.png",
      "product_features": [
      {
        "title": "Soft Tip Polyurethane Catheter",
        "description": "Made of biocompatible PU (Polyurethane) for body safety, Soft, tapered tip reduces trauma to vessel walls, Thermo-sensitive – softens at body temperature."
      },
      {
        "title": "J-Tip Guide Wire",
        "description": "Flexible and kink-resistant for smooth insertion, Soft tip J-end prevents vessel injury, Stainless steel with torque control for maneuverability, Rounded ends increase safety."
      },
      {
        "title": "Y-Shaped Introducer Needle",
        "description": "Bio-compatible, sharp, stainless steel, Y-valve reduces blood spillage and allows guide wire insertion without leakage, Easy to grip and operate."
      },
      {
        "title": "Tissue Dilator",
        "description": "Smooth surface and sturdy design for dilating tissue during insertion, Sized to catheter and guide wire for compatibility."
      }
    ],
    "options": [
      "Clamp – prevents air embolism when the catheter is not in use.",
      "Scalpel – for skin incision.",
      "5 ml Syringe – for aspiration/flush.",
      "5 ml Syringe – for aspiration/flush."
    ]
    }
];
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
};

export const products: Product[] = [
    {
      "id": 1,
      "product_name": "MODCANN WI+",
      "sizes": "14G to 26G",
      "product_code": "1001",
      "category": "infusion-transfusion-therapy",
      "sub_category": "IV Cannula",
      "description": "For infusion of intravenous fluids and medicines.",
      "image": "http://eversuremedical.com/assets/images/product/iv-infusion-iv-cannula-modcann-wi.webp",
      "product_features": [
      {
        "title": "Ultra-Sharp Needle",
        "description": "Back-cut siliconised stainless steel needle for smooth insertion."
      },
      {
        "title": "Smooth & Flexible Insertion",
        "description": "Tapered tip and soft wings reduce friction."
      },
      {
        "title": "Radiopaque & Translucent Catheter",
        "description": "Three / four striped FEP catheter visible under X-ray."
      },
      {
        "title": "Biocompatible, Safe Material",
        "description": "Latex-free, PVC-free for extended safe use."
      },
      {
        "title": "Optional  PUR Catheter",
        "description": "Polyurethane option enhances kink resistance and comfort."
      },
      {
        "title": "Flashback Chamber with Vent Filter",
        "description": "Transparent chamber and filter ensure quick flashback."
      },
      {
        "title": "Durable Component Materials",
        "description": "Polypropylene body and polycarbonate chamber for strength."
      },
      {
        "title": "Secure Injection Port",
        "description": "Non-return silicon valve with color-coded cap."
      },
      {
        "title": "Sterile & Certified",
        "description": "ETO sterilized, CE certified, single-use device."
      }
    ]
    },
    {
      "id": 2,
      "product_name": "ECOCANN",
      "sizes": "14G to 26G",
      "product_code": "1002",
      "category": "infusion-transfusion-therapy",
      "sub_category": "IV Cannula",
      "description": "For infusion of intravenous fluids and medicines.",
      "image": "http://eversuremedical.com/assets/images/product/iv-infusion-iv-cannula-ecocann.webp",
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
    ]
    },
    {
      "id": 3,
      "product_name": "ECOCANN W",
      "sizes": "14G to 26G",
      "product_code": "1003",
      "category": "infusion-transfusion-therapy",
      "sub_category": "IV Cannula",
      "description": "For infusion of intravenous fluids and medicines.",
      "image": "http://eversuremedical.com/assets/images/product/iv-infusion-iv-cannula-ecocann-w.webp",
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
    ]
    },
    {
      "id": 4,
      "product_name": "ECOCANN N",
      "sizes": "24G to 26G",
      "product_code": "1004",
      "category": "infusion-transfusion-therapy",
      "sub_category": "IV Cannula",
      "description": "For infusion of intravenous fluids and medicines.",
      "image": "http://eversuremedical.com/assets/images/product/iv-infusion-iv-cannula-ecocann-n.webp",
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
    ]
    },
    {
      "id": 5,
      "product_name": "ECOWIN",
      "sizes": "14G to 26G",
      "product_code": "1005",
      "category": "infusion-transfusion-therapy",
      "sub_category": "IV Cannula",
      "description": "For infusion of intravenous fluids and medicines.",
      "image": "http://eversuremedical.com/assets/images/product/iv-infusion-iv-cannula-ecowin.webp",
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
    ]
    },
    {
      "id": 6,
      "product_name": "ECOCANN S",
      "sizes": "14G to 26G",
      "product_code": "1010",
      "category": "infusion-transfusion-therapy",
      "sub_category": "IV Cannula",
      "description": "For infusion of intravenous fluids and medicines.",
      "image": "http://eversuremedical.com/assets/images/product/infusion/iv-infusion-products-iv-cannula-ecocann-s.webp",
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
    ]
    },
    {
      "id": 7,
      "product_name": "MODWAY",
      "sizes": "Size information not available",
      "product_code": "1401",
      "category": "infusion-transfusion-therapy",
      "sub_category": "Three Way Stop Cock",
      "description": "For simultaneous and continuous infusion of two fluids to connect the luer device and control flow direction.",
      "image": "http://eversuremedical.com/assets/images/product/infusion-transfusion-modway.webp",
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
      "image": "http://eversuremedical.com/assets/images/product/infusion-transfusion-modexway.webp",
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
      "image": "http://eversuremedical.com/assets/images/product/infusion/best-iv-infusion-set-manufacturing-companies-ecovenn-nv.webp",
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
      "image": "http://eversuremedical.com/assets/images/product/infusion/best-iv-infusion-set-manufacturing-companies-ecovenn-v.webp",
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
    ]
    },
    {
      "id": 11,
      "product_name": "ECOVENN M NV",
      "sizes": "Size information not available",
      "product_code": "1108",
      "category": "infusion-transfusion-therapy",
      "sub_category": "I. V. Infusion Set",
      "description": "For infusion of intravenous fluids and medicines for children and infants or to infuse sensitive medications where precision in the flow rate is essential.",
      "image": "http://eversuremedical.com/assets/images/product/infusion/best-iv-infusion-set-manufacturing-companies-ecovenn-m-nv.webp",
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
    ]
    },
    {
      "id": 12,
      "product_name": "ECOVENN M V",
      "sizes": "Size information not available",
      "product_code": "1109",
      "category": "infusion-transfusion-therapy",
      "sub_category": "I. V. Infusion Set",
      "description": "For infusion of intravenous fluids and medicines for children and infants or to infuse sensitive medications where precision in the flow rate is essential.",
      "image": "http://eversuremedical.com/assets/images/product/infusion/best-iv-infusion-set-manufacturing-companies-ecovenn-m-v.webp",
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
    ]
    },
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
    ]
    },
    {
      "id": 14,
      "product_name": "MODVENN V +",
      "sizes": "Size information not available",
      "product_code": "1105",
      "category": "infusion-transfusion-therapy",
      "sub_category": "I. V. Infusion Set",
      "description": "For infusion of intravenous fluids and medicines into human circulating system by using intravenous catheter or cannula.",
      "image": "/images/Modvenn V+.png",
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
      "image": "https://eversuremedical.com/assets/images/product/best-burette-set-manufacturing-companies-ecobuvenn.webp",
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
    ]
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
    ]
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
    ]
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
    ]
    }
];
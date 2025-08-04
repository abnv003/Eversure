export type Product = {
  id: number;
  product_name: string;
  sizes: string;
  product_code: string;
  category: string;
  sub_category: string;
  description: string;
  sub_desc: string;
  image: string;
  product_features: {
    title: string;
    description: string;
  }[];
  options?: string[];
  unit_consists?: string[];
  variant_pdf: string;
};

export const products: Product[] = [
  {
    "id": 1,
    "product_name": "ECOCANN",
    "sizes": "14G to 26G",
    "product_code": "1002",
    "category": "infusion-transfusion",
    "sub_category": "IV Cannula",
    "description": "Intravenous (IV) Cannula / Catheter is used to deliver intravenous fluid in to human circulating system. Injection Port provided for extra medication and wings for proper fixation.",
    "sub_desc": "IV Cannula with wings & injection port",
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
        "description": "Three/Four-striped FEP catheter with tapered tip and smooth surfaces."
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
    "options": [
      "FEP/PUR Catheter",
      "Coloured Wings",
      "Hydrophobic Bacteria Retention Filter",
      "Packing in Coloured Paper/Medical Grape Paper / Tyvek"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/ivcannula/ecocann.pdf"
  },
  {
    "id": 2,
    "product_name": "ECOCANN W",
    "sizes": "14G to 26G",
    "product_code": "1003",
    "category": "infusion-transfusion",
    "sub_category": "IV Cannula",
    "description": "Intravenous (IV) Cannula / Catheter is used to deliver intravenous fluid in to human circulating system. Without Port IV Cannula reduce the chance of contamination & microorganism.",
    "sub_desc": "IV Cannula with wings & w/o injection port",
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
        "description": "Three/Four-striped FEP catheter with tapered tip and smooth surfaces."
      },
      {
        "title": "Transparent Flashback Chamber",
        "description": "Allows quick visual confirmation during venipuncture."
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
    "options": [
      "FEP/PUR Catheter",
      "Hydrophobic Bacteria Retention Filter",
      "Packaging in Coloured Paper/Medical Grade Paper/Tyvek"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/ivcannula/ecocann w.pdf"
  },
  {
    "id": 3,
    "product_name": "ECOCANN N",
    "sizes": "24G to 26G",
    "product_code": "1004",
    "category": "infusion-transfusion",
    "sub_category": "IV Cannula",
    "description": "Intravenous (IV) Cannula / Catheter is used to deliver intravenous fluid in to human circulating system. Without Port IV Cannula reduce the chance of contamination & microorganism.",
    "sub_desc": "IV Cannula with small wings & w/o injection port",
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
        "description": "Four-striped FEP catheter with tapered tip and smooth surfaces."
      },
      {
        "title": "Transparent Flashback Chamber",
        "description": "Allows quick visual confirmation during venipuncture."
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
    "options": [
      "FEP/PUR Catheter",
      "Hydrophobic Bacteria Retention Filter",
      "Packing in Coloured Paper / Medical Grade Paper / Tyvek"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/ivcannula/ecocann n.pdf"
  },
  {
    "id": 4,
    "product_name": "ECOWIN",
    "sizes": "14G to 26G",
    "product_code": "1005",
    "category": "infusion-transfusion",
    "sub_category": "IV Cannula",
    "description": "Intravenous (IV) Cannula / Catheter is used to deliver intravenous fluid in to human circulating system. Fever place for  contamination for both (Internal / External) Ideal for small & superficial vein. Less bulky lies, flat against the skin for better pateint comfort.",
    "sub_desc": "IV Cannula w/o wings & w/o injection port",
    "image": "/images/ecowin.png",
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
        "description": "Three/Four-striped FEP catheter with tapered, smooth surface for reduced friction."
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
      "FEP/PUR Catheter",
      "Hydrophobic Bacteria Retention Filter",
      "Packing in Coloured Paper / Medical Grade Paper / Tyvek"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/ivcannula/ecowin.pdf"
  },
  {
    "id": 5,
    "product_name": "EVERCATH",
    "sizes": "18G to 24G",
    "product_code": "1035",
    "category": "infusion-transfusion",
    "sub_category": "IV Cannula",
    "description": "Intravenous (IV) Cannula / Catheter is used to deliver intravenous fluid in to human circulating system. Integrated three-way stopcock, allowing for simultaneous administration of multiple fluids or medications through a single access point. This design simplifies the process, reduces the number of punctures needed, and enhances patient comfort.",
    "sub_desc": "IV Cannula with integrated three way stop cock",
    "image": "/images/Evercath.png",
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
        "description": "Three/Four-striped FEP catheter with tapered tip and smooth surfaces."
      },
      {
        "title": "Transparent Flashback Chamber",
        "description": "Allows quick visual confirmation during venipuncture."
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
    "options": [
      "FEP/PUR Catheter",
      "Hydrophobic Bacteria Retention Filter",
      "Coloured Wings",
      "Packing in Coloured Paper / Medical Grape Paper / Tyvek"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/ivcannula/evercath.pdf"
  },
  {
    "id": 6,
    "product_name": "ECOCANN SF",
    "sizes": "14G to 26G",
    "product_code": "1036",
    "category": "infusion-transfusion",
    "sub_category": "IV Cannula",
    "description": "Intravenous (IV) Cannula / Catheter is used to deliver intravenous fluid in to human circulating system. Suturable wing allows suture to pass through the perforation & helps to stablize the cannula during pateint movement when inconsious.",
    "sub_desc": "IV Cannula with Suturable wings and with snap fit port cap",
    "image": "/images/Suturabl IV Cannula with snap fit cap.png",
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
        "description": "Three/Four-striped FEP catheter with tapered tip and smooth surfaces."
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
      },
      {
        "title": "Perforated Wings & Snap-Fit",
        "description": "Includes Perforated Wings and Snap-Fit."
      }
    ],
    "options": [
      "FEP/PUR Catheter",
      "Hydrophobic Bacteria Retention Filter",
      "Coloured Wings",
      "Packing in Coloured Paper / Medical Grape Paper / Tyvek"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/ivcannula/ecocann sf.pdf"
  },
  {
    "id": 7,
    "product_name": "ECOCANN S+",
    "sizes": "14G to 24G",
    "product_code": "1047",
    "category": "infusion-transfusion",
    "sub_category": "Safety IV Cannula",
    "description": "Intravenous (IV) Cannula / Catheter is used to deliver intravenous fluid in to human circulating system. circulating system. Safety cage/clip automatically covers the needle’s bevel after withdrawal of needle from the hub,   minimizing the risk of needle stick injuries.",
    "sub_desc": "Safety IV Cannula with wings & injection port",
    "image": "/images/EcocannS+.png",
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
        "description": "Three/Four-striped FEP catheter with tapered tip and smooth surfaces."
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
      },
      {
        "title": ""
      }
    ],
    "options": [
      "FEP/PUR Catheter",
      "Coloured Wings",
      "Hydrophobic Bacteria Retention Filter",
      "Packing in Coloured Paper/Medical Grape Paper / Tyvek"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/safetyivcannula/ecocann s+.pdf"
  },
  {
    "id": 8,
    "product_name": "ECOCANN S",
    "sizes": "14G to 26G",
    "product_code": "1010",
    "category": "infusion-transfusion",
    "sub_category": "Safety IV Cannula",
    "description": "For infusion of intravenous fluids and medicines.",
    "sub_desc": "Safety IV Cannula with wings & injection port",
    "image": "/images/Ecocann S.png",
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
        "description": "Three/Four-striped FEP catheter with tapered tip and smooth surfaces."
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
    "options": [
      "FEP/PUR Catheter",
      "Coloured Wings",
      "Packing in Coloured Paper/Medical Grape Paper / Tyvek"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/safetyivcannula/ecocann s.pdf"
  },
  {
    "id": 9,
    "product_name": "ECOCANN WS+",
    "sizes": "14G to 26G",
    "product_code": "1048",
    "category": "infusion-transfusion",
    "sub_category": "Safety IV Cannula",
    "description": "Intravenous (IV) Cannula / Catheter is used to deliver intravenous fluid in to human circulating system. Safety cage/clip automatically covers the needle’s bevel after withdrawal of needle from the hub, minimizing the risk of needle stick injuries. Without Port IV Cannula reduce the chance of contamination & microorganism.",
    "sub_desc": "Safety IV Cannula with wings & w/o injection port",
    "image": "/images/Ecowannws+copy.png",
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
        "description": "Three/Four-striped FEP catheter with tapered tip and smooth surfaces."
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
    "options": [
      "FEP/PUR Catheter",
      "Coloured Wings",
      "Hydrophobic Bacteria Retention Filter",
      "Packing in Coloured Paper/Medical Grape Paper / Tyvek"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/safetyivcannula/ecocann ws+.pdf"
  },
  {
    "id": 10,
    "product_name": "ECOCANN W-S",
    "sizes": "14G to 26G",
    "product_code": "1007",
    "category": "infusion-transfusion",
    "sub_category": "Safety IV Cannula",
    "description": "For infusion of intravenous fluids and medicines.",
    "sub_desc": "Safety IV Cannula with wings & w/o injection port",
    "image": "/images/Ecocann WS copy.png",
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
        "description": "Three/Four-striped FEP catheter with tapered tip and smooth surfaces."
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
    "options": [
      "FEP/PUR Catheter",
      "Packing in Coloured Paper / Medical Grape Paper / Tyvek"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/safetyivcannula/ecocann ws.pdf"
  },
  {
    "id": 11,
    "product_name": "ECOWIN S+",
    "sizes": "14G to 26G",
    "product_code": "1049",
    "category": "infusion-transfusion",
    "sub_category": "Safety IV Cannula",
    "description": "Intravenous (IV) Cannula / Catheter is used to deliver intravenous fluid in to human circulating system.   Safety cage/clip automatically covers the needle’s bevel after withdrawal of needle from the hub, minimizing the risk of needle stick injuries.Fever place for  contamination for both (Internal / External) Ideal for small & superficial vein. Less bulky lies, flat against the skin for skin better pateint comfort.",
    "sub_desc": "Safety IV Cannula w/o wings & w/o injection port",
    "image": "/images/EcowinS+copy.png",
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
        "description": "Three/Four-striped FEP catheter with tapered tip and smooth surfaces."
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
    "options": [
      "FEP/PUR Catheter",
      "Packing in Coloured Paper / Medical Grape Paper / Tyvek"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/safetyivcannula/ecowin s+.pdf"
  },
  {
    "id": 12,
    "product_name": "ECOWIN S",
    "sizes": "14G to 26G",
    "product_code": "1008",
    "category": "infusion-transfusion",
    "sub_category": "Safety IV Cannula",
    "description": "For infusion of intravenous fluids and medicines.",
    "sub_desc": "Safety IV Cannula w/o wings & w/o injection port",
    "image": "/images/Ecowin S.jpg",
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
        "description": "Three/Four-striped FEP catheter with tapered tip and smooth surfaces."
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
    "options": [
      "FEP/PUR Catheter",
      "Packing in Coloured Paper / Medical Grape Paper / Tyvek"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/safetyivcannula/ecowin s.pdf"
  },
  {
    "id": 13,
    "product_name": "MODWAY",
    "sizes": "",
    "product_code": "1401 - 1402",
    "category": "infusion-transfusion",
    "sub_category": "Three Way Stop Cock",
    "description": "The product is used to deliver intravenous fluid into human circulating system. Lipid resistant three way stop cock available for Lipid resistant medication.",
    "sub_desc": "Three Way Stop Cock",
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
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/threewaystopcock/modway.pdf"
  },
  {
    "id": 14,
    "product_name": "MODEXWAY",
    "sizes": "Tube Length (cms): 10, 25, 50, 100, 150, 200",
    "product_code": "1302",
    "category": "infusion-transfusion",
    "sub_category": "Three Way Stop Cock",
    "description": "The product is used to deliver intravenous fluid into human circulating system. Extension Tube is used to extend the length of IV lines, catheters, and other infusion sets, providing greater access to patients while minimizing movement of the primary access point.",
    "sub_desc": "Three way stop cock with Extension Tube (DEHP Free)",
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
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/threewaystopcock/modexway.pdf"
  },
  {
    "id": 15,
    "product_name": "ECOVENN NV",
    "sizes": "",
    "product_code": "1102",
    "category": "infusion-transfusion",
    "sub_category": "I. V. Infusion Set",
    "description": "For infusion of intravenous fluids and medicines into human circulating system by using intravenous catheter or cannula.",
    "sub_desc": "IV Infusion Set Non Vented",
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
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/ivinfusionset/ecovenn nv.pdf"
  },
  {
    "id": 16,
    "product_name": "ECOVENN V",
    "sizes": "",
    "product_code": "1106",
    "category": "infusion-transfusion",
    "sub_category": "I. V. Infusion Set",
    "description": "The Infusion sets are used to administer intravenous fluid in to human circulating system by using intravenous catheter or cannula. In built air vent that allows air to enter the IV fluid container (usually a glass bottle or rigid plastic container) as fluid flows out",
    "sub_desc": "IV Infusion Set Vented",
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
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/ivinfusionset/ecovenn v.pdf"
  },
  {
    "id": 17,
    "product_name": "MODVENN V",
    "sizes": "",
    "product_code": "1107",
    "category": "infusion-transfusion",
    "sub_category": "I. V. Infusion Set",
    "description": "For infusion of intravenous fluids and medicines into human circulating system by using intravenous catheter or cannula.",
    "sub_desc": "IV Infusion Set Vented with Y Connector (DEHP Free)",
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
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/ivinfusionset/modvenn v.pdf"
  },
  {
    "id": 18,
    "product_name": "MODVENN V+",
    "sizes": "",
    "product_code": "1105",
    "category": "infusion-transfusion",
    "sub_category": "I. V. Infusion Set",
    "description": "For infusion of intravenous fluids and medicines into human circulating system by using intravenous catheter or cannula.",
    "sub_desc": "IV Infusion Set Vented with PVC Free Double Chamber",
    "image": "/images/modvennv+.png",
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
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/ivinfusionset/modvenn v+.pdf"
  },
  {
    "id": 19,
    "product_name": "MODVENN SV",
    "sizes": "",
    "product_code": "1111",
    "category": "infusion-transfusion",
    "sub_category": "I. V. Infusion Set",
    "description": "For infusion of intravenous fluids and medicines into human circulating system preventing contamination by retaining bacteria, particles of size up to 0.2 micron.",
    "sub_desc": "IV Infusion Set Vented with 0.2 Micron Inline Filter (DEHP Free)",
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
      "PVC-Free",
      "Needle Free Y Connector"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/ivinfusionset/modvenn sv.pdf"
  },
  {
    "id": 20,
    "product_name": "MODVENN SV+",
    "sizes": "",
    "product_code": "1112",
    "category": "infusion-transfusion",
    "sub_category": "I. V. Infusion Set",
    "description": "For infusion of intravenous fluids and medicines into human circulating system preventing contamination by retaining bacteria, particles of size up to 0.2 micron.",
    "sub_desc": "IV Infusion Set Vented with 0.2 Micron Inline Filter & Double Chamber (PVC Free)",
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
        "description": "Made from PVC Free material."
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
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/ivinfusionset/modvenn sv+.pdf"
  },
  {
    "id": 21,
    "product_name": "ECOVENN",
    "sizes": "",
    "product_code": "Vented 1117, Non Vented 1118",
    "category": "infusion-transfusion",
    "sub_category": "I. V. Infusion Set",
    "description": "The Infusion sets are used to administer intravenous fluid in to human circulating system by using intravenous catheter or cannula.",
    "sub_desc": "IV Infusion Set with Three way Stop Cock",
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
      "Rotating luer lock",
      "With Flow regulator & needle-free Y injection port"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/ivinfusionset/ecovenn.pdf"
  },
  {
    "id": 22,
    "product_name": "ECOBUVENN",
    "sizes": "110 ml & 150 ml",
    "product_code": "1501",
    "category": "infusion-transfusion",
    "sub_category": "Burette Set",
    "description": "The Burette Type Infusion Set is used to administer Intravenous fluid into human circulating system by using intravenous catheter or cannula, for pediatric use.",
    "sub_desc": "Burette type Infusion Set",
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
      "With Y injection port",
      "DEHP Free",
      "PVC Free",
      "With/without needle",
      "Luer lock or rotating luer lock",
      "With Flow regulator & needle-free Y injection port"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/safetyivcannula/pdf.pdf"
  },
  {
    "id": 23,
    "product_name": "ECOBUVENN Y",
    "sizes": "110 ml & 150 ml",
    "product_code": "1503",
    "category": "infusion-transfusion",
    "sub_category": "Burette Set",
    "description": "The Burette Type Infusion Set is used to administer Intravenous fluid into human circulating system by using intravenous catheter or cannula, for pediatric use.",
    "sub_desc": "Burette Set with Vented spike, Y-Site, Luer lock",
    "image": "/images/Burette set Ecobuvenn Y.png",
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
      "DEHP Free",
      "With needle",
      "Rotating luer lock",
      "With Flow regulator & needle-free Y-Site"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/safetyivcannula/pdf.pdf"
  },
  {
    "id": 24,
    "product_name": "ECOEXTT HP",
    "sizes": "Tube Length(cms): 10, 25, 50, 100, 150 & 200",
    "product_code": "1202",
    "category": "infusion-transfusion",
    "sub_category": "Extension Tube",
    "description": "Extension tube are designed to connect the infusion site and the source of infusion, (i.e. to connect the I.V. Cannula or Three Way Stopcock and I.V. Set) to extend the path between infusion site and source of infusion with 6% luer connection to minimize mechanical irritation and infection. Pressure Sustainability for Low pressure Extension Tube is 600 PSI (41 bar)",
    "sub_desc": "Extension Tube : High Pressure (DEHP Free)",
    "image": "/images/ecoextt hp.png",
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
        "description": "Three/Four-striped FEP catheter with tapered, smooth surface for reduced friction."
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
      "With Slide Clamp"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/extensiontube/ecoextt hp.pdf"
  },
  {
    "id": 25,
    "product_name": "ECOCATH",
    "sizes": "6FG to 24FG",
    "product_code": "Two way 3601, Three way 3602",
    "category": "Urology",
    "sub_category": "Foley Catheter",
    "description": "Foley Catheter for single use is a thin, sterile tube inserted into bladder to drain urine.",
    "sub_desc": "Foley Balloon Catheter",
    "image": "/images/Foley catheter.png",
    "product_features": [
      {
        "title": "Optimal eyes",
        "description": "Smooth, optimal eyes ensuring atraumatic introduction ana effective drainage."
      },
      {
        "title": "Pressure resistant balloon",
        "description": "Easily inflated or deflated for maximum patient safety."
      },
      {
        "title": "Inflation valve",
        "description": "Choice of hard or soft valve. Ensures balloon is inflated when in use."
      },
      {
        "title": "Reinforced catheter shaft",
        "description": "Prevents collapse and for effective suctioning."
      },
      {
        "title": "Strang drainage funnel",
        "description": "Kink resistant and provides best connection to drainage bag."
      },
      {
        "title": "Large drainage lumen",
        "description": "For fast and effective drainage. Round channel that minimizes encrustation and clogging."
      },
      {
        "title": "Siliconized Catheters",
        "description": "Silicone fluid surface results in smooth finish for easy passage through the urethral meatus. Ideal for short-term use."
      }
    ],
    "options": [],
    "unit_consists": [],
    "variant_pdf": "/variants/urology/foleycatheter.pdf"
  },
  {
    "id": 26,
    "product_name": "ECOSUC",
    "sizes": "Tube Length: 210cms, 250cms & 300cms",
    "product_code": "2301,2302",
    "category": "surgery-wound-drainage",
    "sub_category": "Yankaur Suction Set",
    "description": "Yankauer suction set is used for removal of blood and fluid during surgery.",
    "sub_desc": "Yankaur Suction Set",
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
    "options": [],
    "unit_consists": [],
    "variant_pdf": "/variants/yankaursuctionset/ecosuc.pdf"
  },
  {
    "id": 27,
    "product_name": "ECOCWS",
    "sizes": "10, 12, 14, 16 & 18 FG",
    "product_code": "2901",
    "category": "surgery-wound-drainage",
    "sub_category": "Closed Wound Suction Unit",
    "description": "The device Closed wound suction unit is a vacuum based suction device for draining harmful fluids, such as blood, pus, and tissue secretions, from surgical wounds.",
    "sub_desc": "Closed Wound Suction Unit",
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
    "options": [],
    "unit_consists": [
      "Bellow Unit with connector",
      "Connecting Tube with clamp and Y connector",
      "Trocar Needle with matching catheter",
      "Spare performed catheter",
      "Sizes of Bellow Chamber 400ml, 600ml & 800ml"
    ],
    "variant_pdf": "/variants/closedwoundsuctionunit/ecocws.pdf"
  },
  {
    "id": 28,
    "product_name": "ECOCATH THOR – S",
    "sizes": "8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36 & 40 FG",
    "product_code": "2601",
    "category": "surgery-wound-drainage",
    "sub_category": "Thoracic Catheter",
    "description": "Thoracic Drainage catheter is used to remove air ( Pnemothorax), fluid ( pleural effusion , blood), or pus ( empyema) from the in thoracic space. Thoracic Drainage Catheter is a flexible plastic tube that is inserted through the chest wall and into the pleural space.",
    "sub_desc": "Thoracic Drainage Catheter Straight",
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
    "options": [],
    "unit_consists": [],
    "variant_pdf": "/variants/thoraciccatheter/ecothors.pdf"
  },
  {
    "id": 29,
    "product_name": "ECOCATH THOR – T",
    "sizes": "10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 40 FG",
    "product_code": "2801",
    "category": "surgery-wound-drainage",
    "sub_category": "Thoracic Catheter",
    "description": "Thoracic Drainage catheter is used to remove air ( Pnemothorax), fluid ( pleural effusion , blood), or pus ( empyema) from the in thoracic space. Thoracic Drainage Catheter is a flexible plastic tube that is inserted through the chest wall and into the pleural space.",
    "sub_desc": "Thoracic Drainage Catheter Trocar",
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
    "options": [],
    "unit_consists": [],
    "variant_pdf": "/variants/thoraciccatheter/ecothort.pdf"
  },
  {
    "id": 30,
    "product_name": "MODCVC",
    "sizes": "Single, Double, Triple Lumen",
    "product_code": "Single Lumen-2001 to 2004, Double Lumen-2101 to 2103, Triple Lumen-2201 to 2202",
    "category": "central-venous-access-catheters",
    "sub_category": "Central Venous Catheter",
    "description": "The central venous catheter is designed for treatment of critically ill patients and is suggested for Continuous or intermittent drug infusions. - Central venous blood pressure monitoring (CVP). - Acute hyperalimentation - Blood sampling. - Delivery of whole blood or blood products. - Simultaneous, separate infusion of drug",
    "sub_desc": "Central Venous Access Catheter",
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
    "options": [],
    "unit_consists": [
      "Soft tip PU indwelling catheter",
      "'J' tip Guide Wire with Dispenser based upon Seldinger Technique",
      "'Y' Shaped Introducer Needle",
      "Tissue Dilator",
      "Scalpel",
      "Syringe 5ml",
      "Entension Line Clamp",
      "Clamp Fastener"
    ],
    "variant_pdf": "/variants/cvc/cvc.pdf"
  },

  {
    "id": 31,
    "product_name": "ECOEXTT FLOW",
    "sizes": "",
    "product_code": "1207",
    "category": "infusion-transfusion",
    "sub_category": "Extension Tube",
    "description": "Extension tube are designed to connect the infusion site and the source of infusion, (i.e. to connect the I.V. Cannula or Three Way Stopcock and I.V. Set) to extend the path between   infusion site and source of infusion with 6% luer connection to minimize mechanical irritation and infection. Flow regulator ensure the accurate and safe delivery of fluids and medications during infusion therapy.",
    "sub_desc": "Extension Tube with Flow Regulator (DEHP Free)",
    "image": "/images/ecoextt extention tube with flow regulator.png",
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
        "description": "Three/Four-striped FEP catheter with tapered, smooth surface for reduced friction."
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
      "With Slide Clamp"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/extensiontube/ecoextt flow.pdf"
  },
  {
    "id": 32,
    "product_name": "ECOEXTT",
    "sizes": "Tube Length(cms): 10, 25, 50, 100, 150 & 200",
    "product_code": "1201",
    "category": "infusion-transfusion",
    "sub_category": "Extension Tube",
    "description": "Extension tube are designed to connect the infusion site and the source of infusion, (i.e. to connect the I.V. Cannula or Three Way Stopcock and I.V. Set) to extend the path between infusion site and source of infusion with 6% luer connection to minimize mechanical irritation and infection. Pressure Sustainability for Low pressure Extension Tube is 79 PSI (5.5 bar)",
    "sub_desc": "Extension Tube - Low Pressure (DEHP Free)",
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
        "description": "Three/Four-striped FEP catheter with tapered, smooth surface for reduced friction."
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
      "With Y Injection Port for extra medication",
      "With Slide Clamp"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/extensiontube/ecoextt lp.pdf"
  },
  {
    "id": 33,
    "product_name": "ECOEXTT DUO",
    "sizes": "Tube Length(cms): 18",
    "product_code": "1209",
    "category": "infusion-transfusion",
    "sub_category": "Extension Tube",
    "description": "Extension tube are designed to connect the infusion site and the source of infusion,  (i.e. to connect the I.V. Cannula or Three Way Stopcock and I.V. Set) to extend the path between infusion site and source of infusion with 6% luer connection to minimize mechanical irritation and infection. Extension Tube is used to extend the length of IV lines, catheters, and other infusion sets, providing greater access to patients while minimizing movement of the primary access point.",
    "sub_desc": "Two Way Extension Tube",
    "image": "/images/Extension tube two way.png",
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
        "description": "Three/Four-striped FEP catheter with tapered, smooth surface for reduced friction."
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
      "PVC Free / DEHP Free Tube",
      "Single, Trio",
      "With Luer Lock"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/extensiontube/ecoextt duo.pdf"
  },
  {
    "id": 34,
    "product_name": "MODEXTT",
    "sizes": "",
    "product_code": "Single 1204, Double 1205, Triple 1206",
    "category": "infusion-transfusion",
    "sub_category": "Multiway",
    "description": "Extension tube are designed to connect the infusion site and the source of infusion,   (i.e. to connect the I.V. Cannula or Three Way Stopcock and I.V. Set) to extend the path between infusion site and source of infusion with 6% luer connection to minimize mechanical irritation and infection. It enables for multiple infusions simultaneously, eliminates the need for needles, reduces the risk of needlestick injuries and contamination, and simplifies medication administration.",
    "sub_desc": "Multiline Extension Tube with Needle Free Connectors (DEHP Free)",
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
        "description": "Three/Four-striped FEP catheter with tapered, smooth surface for reduced friction."
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
      "PVC Free",
      "Large Bore / Micro Bore Tube",
      "Without Needle Free Connector"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/multiway/modextt.pdf"
  },
  {
    "id": 35,
    "product_name": "ECOTRAN",
    "sizes": "",
    "product_code": "ECOTRAN NV - 2401, ECOTRAN V - 2402",
    "category": "infusion-transfusion",
    "sub_category": "Blood Transfusion Set",
    "description": "Blood Transfusion set are used to administer blood in to human circulating system by using intravenous catheter and cannula. ",
    "sub_desc": "Blood Transfusion Set Vented",
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
        "description": "Three/Four-striped FEP catheter with tapered, smooth surface for reduced friction."
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
      "Without Airvent",
      "DEHP Free",
      "Luer lock"
    ],
    "unit_consists": [],
    "variant_pdf": "/variants/bloodtransfusionset/ecotran.pdf"
  },
];
const products = [
  {
    sku: "42011",
    name: "A.N.B. LACTATED RINGER'S INJECTION 1000ML g2",
  },
  {
    sku: "44067",
    name: "A.N.B. LACTATED RINGER'S INJECTION 500ML",
  },
  {
    sku: "44067",
    name: "AA -MINOCYCLINE 100MG CAPSULES 100'S ### <:> 100MG CAPSULES",
  },
  {
    sku: "44068",
    name: "AA -MINOCYCLINE 100MG CAPSULES 1'S ### 100MG CAPSULES",
  },
  {
    sku: "16827",
    name: "AA-ISDN 10MG 100'S (APO-ISDN) 10MG",
  },
  {
    sku: "16828",
    name: "AA-ISDN 10MG 1'S (APO-ISDN) 10MG",
  },
  {
    sku: "16869",
    name: "AA-LOVASTATIN 20MG",
  },
  {
    sku: "32792",
    name: "ABILIFY MAINTENA XR INJECTION 400 MG",
  },
  {
    sku: "35228",
    name: "ABIRATRED 250MG",
  },
  {
    sku: "29815",
    name: "ACARIZAX 12 SQ-HDM",
  },
  {
    sku: "41969",
    name: "ACCENTRIX INJECTION 10MG/ML",
  },
  {
    sku: "41968",
    name: "ACCORD CLAVIX 75MG",
  },
  {
    sku: "41964",
    name: "ACCORD EZETIMIBE 10MG",
  },
  {
    sku: "46038",
    name: "ACCORD SITACORD 100MG",
  },
  {
    sku: "46981",
    name: "ACCORD SITACORD 50MG",
  },
  {
    sku: "41966",
    name: "ACCORD TADACCORD 20MG",
  },
  {
    sku: "41689",
    name: "ACETAN 100MG",
  },
  {
    sku: "22311",
    name: "ACETAN 50MG",
  },
  {
    sku: "37498",
    name: "Acetan HCT Tablet 100mg/25mg",
  },
  {
    sku: "16687",
    name: "Acetan HCT Tablet 50/12.5mg",
  },
  {
    sku: "16688",
    name: "ACETEC 20MG",
  },
  {
    sku: "21584",
    name: "ACICLOVIR 200MG",
  },
  {
    sku: "21582",
    name: "ACIPAN INJECTION 1MG/ML AMP",
  },
  {
    sku: "47286",
    name: "ACNOTIN 10MG",
  },
  {
    sku: "22347",
    name: "ACNOTIN 20MG",
  },
  {
    sku: "21825",
    name: "ACTAPIN 10MG",
  },
  {
    sku: "35057",
    name: "ACTAPIN 5MG",
  },
  {
    sku: "35058",
    name: "ACTAVIS BIFEN SYRUP 100MG/5ML 100ML",
  },
  {
    sku: "35056",
    name: "ACTEMRA 162MG/0.9ML SOLUTION FOR INJECTION",
  },
  {
    sku: "35054",
    name: "ACTIHIST 10'S XX",
  },
  {
    sku: "35055",
    name: "ACTOS 30MG",
  },
  {
    sku: "45608",
    name: "ACUGESIC TABLET 50MG",
  },
  {
    sku: "16816",
    name: "ACUGESIC CAPSULE 50MG",
  },
  {
    sku: "16817",
    name: "ACUGESIC INJECTION 100MG",
  },
  {
    sku: "16815",
    name: "ACUGESIC INJECTION 50MG",
  },
  {
    sku: "21258",
    name: "ACUGRAIN 0.5MG",
  },
  {
    sku: "21259",
    name: "ACULAR OPHTHALMIC SOLUTION STERILE 5ML",
  },
  {
    sku: "41761",
    name: "ACUSTOP CATAPLASMA",
  },
  {
    sku: "35289",
    name: "ACYCLOVIR STADA CREAM 5G",
  },
  {
    sku: "17933",
    name: "ACYLETE CREAM",
  },
  {
    sku: "3437",
    name: "ADDAVEN CONCENTRATE FOR SOLUTION FOR INFUSION 10ML",
  },
  {
    sku: "16066",
    name: "ADEZIO FC 10MG",
  },
  {
    sku: "38287",
    name: "ADEZIO ORAL SOLUTION 1MG/ML 60ML",
  },
  {
    sku: "35981",
    name: "ADEZIO ORAL SOLUTION 1MG/ML 60ML X",
  },
  {
    sku: "41850",
    name: "ADIPEX RETARD",
  },
  {
    sku: "18055",
    name: "ADROTEN 5MG",
  },
  {
    sku: "14075",
    name: "AERIUS 5MG",
  },
  {
    sku: "29573",
    name: "AERIUS D-12",
  },
  {
    sku: "41901",
    name: "AERIUS SYRUP 60ML",
  },
  {
    sku: "40012",
    name: "AEROCORT HFA INHALER 200DS",
  },
  {
    sku: "16111",
    name: "AEVA MUROZIN OINTMENT 15G",
  },
  {
    sku: "16110",
    name: "AFINITOR 10MG",
  },
  {
    sku: "21269",
    name: "AFINITOR 5MG",
  },
  {
    sku: "16860",
    name: "AGRYLIN CAPSULE 0.5MG",
  },
  {
    sku: "26661",
    name: "AIN MEDICARE SODIUM CHLORIDE INFUSION 0.009 250ML",
  },
  {
    sku: "20423",
    name: "AIRLUKAST 10MG",
  },
  {
    sku: "30076",
    name: "AJALOPRAM 10MG",
  },
  {
    sku: "30075",
    name: "AJENAFIL 100MG",
  },
  {
    sku: "17816",
    name: "AKILEN 40MG 10",
  },
  {
    sku: "17817",
    name: "AKILEN 40MG",
  },
  {
    sku: "36342",
    name: "AKURIT-4 1'S",
  },
  {
    sku: "36341",
    name: "AKURIT-4 6'S",
  },
  {
    sku: "37500",
    name: "AKURIT-4 90'S",
  },
  {
    sku: "17466",
    name: "AKYNZEO 300MG/0.5MG HARD CAPSULES",
  },
  {
    sku: "25628",
    name: "ALATROL 10MG",
  },
  {
    sku: "25922",
    name: "ALATROL SYRUP 60ML",
  },
  {
    sku: "19747",
    name: "ALCON ATROPINE SULFATE 0.01 EYE DROP 5ML",
  },
  {
    sku: "45593",
    name: "ALCON MYDFRIN EYE DROP 5ML",
  },
  {
    sku: "17252",
    name: "ALCON MYDRIACYL 0.01 15ML",
  },
  {
    sku: "17253",
    name: "ALCON SIMBRINZA 5ML",
  },
  {
    sku: "37760",
    name: "ALDARA CREAM",
  },
  {
    sku: "33492",
    name: "ALDARA PUMP 0.05 CREAM 2G",
  },
  {
    sku: "22180",
    name: "ALEMBIC ERICOX 120MG",
  },
  {
    sku: "9409",
    name: "ALEMBIC ERICOX 90MG",
  },
  {
    sku: "41231",
    name: "ALENDRONATE SANDOZ 70MG",
  },
  {
    sku: "41232",
    name: "ALFACIP 1MCG",
  },
  {
    sku: "41227",
    name: "ALLAVIN EXPECTORANT 90ML",
  },
  {
    sku: "41228",
    name: "ALLERCROM EYE DROPS 5ML",
  },
  {
    sku: "41229",
    name: "ALLERGAN FML EYE DROP 5ML",
  },
  {
    sku: "21239",
    name: "ALLERGO-COMOD EYE DROPS 10ML",
  },
  {
    sku: "47257",
    name: "ALLERGOCROM 10ML",
  },
  {
    sku: "47559",
    name: "ALLERPID",
  },
  {
    sku: "19070",
    name: "ALLERSINE EYE DROP 5ML",
  },
  {
    sku: "3436",
    name: "ALLOPURINOL 100MG",
  },
  {
    sku: "21084",
    name: "ALLOPURINOL 300MG",
  },
  {
    sku: "1318",
    name: "ALMIRAL 50MG",
  },
  {
    sku: "17671",
    name: "ALOVASC 5MG",
  },
  {
    sku: "44433",
    name: "ALPHAGAN P 0.1 % EYE DROPS 5ML",
  },
  {
    sku: "43912",
    name: "ALTIVA-D 10'S XX",
  },
  {
    sku: "43913",
    name: "ALTRA 10MG",
  },
  {
    sku: "23521",
    name: "ALTRA 4MG",
  },
  {
    sku: "27901",
    name: "ALTRA 5MG",
  },
  {
    sku: "47408",
    name: "ALVESCO 160 INHALER 60 DOSES",
  },
  {
    sku: "47407",
    name: "AMARYL 2MG",
  },
  {
    sku: "19944",
    name: "AMARYL 3MG",
  },
  {
    sku: "36735",
    name: "AMCARDIA TABLET 10MG",
  },
  {
    sku: "36737",
    name: "AMCARDIA TABLET 10MG 10",
  },
  {
    sku: "36738",
    name: "AMCARDIA TABLET 5MG",
  },
  {
    sku: "36739",
    name: "AMCARDIA TABLET 5MG 10",
  },
  {
    sku: "36740",
    name: "AMDEPIN 10MG",
  },
  {
    sku: "15849",
    name: "AMDEPIN 5MG",
  },
  {
    sku: "15848",
    name: "AMILOZIDE 50/5MG",
  },
  {
    sku: "47514",
    name: "AMLIBON 10MG",
  },
  {
    sku: "47515",
    name: "AMLIBON 5MG",
  },
  {
    sku: "21229",
    name: "AMLOPRES-10 100'S",
  },
  {
    sku: "21230",
    name: "AMLOPRES-10 10'S+++",
  },
  {
    sku: "21227",
    name: "AMNOZ TABLET 10MG",
  },
  {
    sku: "30681",
    name: "AMNOZ TABLET 5MG",
  },
  {
    sku: "30682",
    name: "AMOPRIL 10/4MG",
  },
  {
    sku: "40060",
    name: "AMOPRIL 10/8MG",
  },
  {
    sku: "40059",
    name: "AMOPRIL 5/4MG",
  },
  {
    sku: "22950",
    name: "AMOPRIL 5/8MG",
  },
  {
    sku: "43431",
    name: "AMTAS 5MG",
  },
  {
    sku: "47687",
    name: "ANADOL 50MG",
  },
  {
    sku: "47688",
    name: "ANAFRANIL 25MG",
  },
  {
    sku: "45396",
    name: "ANALPAN INJECTION 75MG/3ML AMPOULE",
  },
  {
    sku: "45395",
    name: "ANAREX 1000'S",
  },
  {
    sku: "45184",
    name: "ANAREX 10'S",
  },
  {
    sku: "45183",
    name: "ANAREX 10'S X 10",
  },
  {
    sku: "45182",
    name: "ANARGIL 100MG",
  },
  {
    sku: "45181",
    name: "ANARGIL 200MG",
  },
  {
    sku: "45397",
    name: "ANAST-1MG TAB",
  },
  {
    sku: "42731",
    name: "ANDROGEL 50MG",
  },
  {
    sku: "27884",
    name: "ANGELIQ",
  },
  {
    sku: "17914",
    name: "ANLODIN 10MG",
  },
  {
    sku: "18580",
    name: "ANLODIN 5MG",
  },
  {
    sku: "37505",
    name: "ANORO ELLIPTA",
  },
  {
    sku: "46917",
    name: "ANSONIDE NASAL SPRAY 27.5MCG/DOSE 120DOSE",
  },
  {
    sku: "24067",
    name: "ANTAMIN 4MG",
  },
  {
    sku: "17852",
    name: "ANTANAZOL CREAM 10G",
  },
  {
    sku: "18874",
    name: "ANTIFUNGAL CREAM 10G",
  },
  {
    sku: "21276",
    name: "APIDRA SOLOSTAR 300IU/3ML",
  },
  {
    sku: "32482",
    name: "APO-ACETAZOLAMIDE 250MG",
  },
  {
    sku: "23722",
    name: "APO-ALENDRONATE 70MG",
  },
  {
    sku: "47634",
    name: "APO-ALLOPURINOL 100MG",
  },
  {
    sku: "35780",
    name: "APO-ALLOPURINOL 300MG",
  },
  {
    sku: "17678",
    name: "APO-AMITRIPTYLINE 10MG",
  },
  {
    sku: "16702",
    name: "APO-AMITRIPTYLINE 25MG",
  },
  {
    sku: "16081",
    name: "APO-ATENIDONE 100MG/25MG",
  },
  {
    sku: "16082",
    name: "APO-ATENOL 50MG",
  },
  {
    sku: "37506",
    name: "APO-ATORVASTATIN 20MG",
  },
  {
    sku: "16336",
    name: "APO-ATORVASTATIN 40MG",
  },
  {
    sku: "6421",
    name: "APO-ATORVASTATIN 80MG",
  },
  {
    sku: "16623",
    name: "APO-AZATHIOPRINE 50MG",
  },
  {
    sku: "44362",
    name: "APO-BECLOMETHASONE NASAL SPRAY 50MCG 200 METERED DOSES",
  },
  {
    sku: "44361",
    name: "APO-CITALOPRAM 20MG FCT",
  },
  {
    sku: "31823",
    name: "APO-CLOMIPRAMINE 25MG",
  },
  {
    sku: "32948",
    name: "APO-CLOPIDOGREL 75MG",
  },
  {
    sku: "24319",
    name: "APO-FENO SP 160MG",
  },
  {
    sku: "20567",
    name: "APO-FLUCONAZOLE 100MG",
  },
  {
    sku: "17651",
    name: "APO-GABAPENTIN 300MG",
  },
  {
    sku: "17863",
    name: "APO-GLICLAZIDE MR 30MG",
  },
  {
    sku: "17282",
    name: "APO-GLICLAZIDE MR 60MG",
  },
  {
    sku: "29489",
    name: "APO-HYDRO 25MG",
  },
  {
    sku: "6424",
    name: "APO-HYDRO 50MG",
  },
  {
    sku: "17131",
    name: "APO-INDAPAMIDE 2.5MG",
  },
  {
    sku: "17133",
    name: "APO-ISDN 5MG",
  },
  {
    sku: "28738",
    name: "APO-LAMOTRIGINE 100MG",
  },
  {
    sku: "41983",
    name: "APO-LEVOCARB 100/25MG",
  },
  {
    sku: "16712",
    name: "APO-LEVOCARB 250/25",
  },
  {
    sku: "16541",
    name: "APO-MEGESTROL 160MG",
  },
  {
    sku: "22580",
    name: "APO-MELOXICAM 7.5MG",
  },
  {
    sku: "26327",
    name: "APO-METOPROLOL 100MG",
  },
  {
    sku: "32730",
    name: "APO-NAPRO NA 275MG",
  },
  {
    sku: "22537",
    name: "APO-NAPRO NA 550MG",
  },
  {
    sku: "16553",
    name: "APO-NITROFURANTOIN 100MG",
  },
  {
    sku: "16552",
    name: "APO-OLANZAPINE 5MG",
  },
  {
    sku: "37509",
    name: "APO-ONDANSETRON 4MG",
  },
  {
    sku: "37786",
    name: "APO-PERPHENAZINE 4MG",
  },
  {
    sku: "17287",
    name: "APO-PRAVASTATIN 20MG",
  },
  {
    sku: "37787",
    name: "APO-PROPRANOLOL 10MG",
  },
  {
    sku: "19058",
    name: "APO-PROPRANOLOL 40MG",
  },
  {
    sku: "33674",
    name: "APO-QUETIAPINE 100MG",
  },
  {
    sku: "16897",
    name: "APO-QUETIAPINE 200MG",
  },
  {
    sku: "17036",
    name: "APO-QUETIAPINE 25MG",
  },
  {
    sku: "17338",
    name: "APO-RISPERIDONE 1MG",
  },
  {
    sku: "17339",
    name: "APO-RISPERIDONE 2MG",
  },
  {
    sku: "16942",
    name: "APO-ROSUVASTATIN 10MG",
  },
  {
    sku: "16944",
    name: "APO-ROSUVASTATIN 20MG",
  },
  {
    sku: "18135",
    name: "APO-SERTRALINE 50MG",
  },
  {
    sku: "17886",
    name: "APO-SUMATRIPTAN 100MG",
  },
  {
    sku: "22128",
    name: "APO-SUMATRIPTAN 50MG",
  },
  {
    sku: "19300",
    name: "APO-TERBINAFINE 250MG",
  },
  {
    sku: "6420",
    name: "APO-TRIFLUOPERAZINE 5MG",
  },
  {
    sku: "17805",
    name: "APO-TRIHEX 2MG",
  },
  {
    sku: "32480",
    name: "APO-WARFARIN 1MG",
  },
  {
    sku: "33370",
    name: "APO-WARFARIN 2MG",
  },
  {
    sku: "44984",
    name: "APO-WARFARIN 5MG",
  },
  {
    sku: "28758",
    name: "APREZO 30MG",
  },
  {
    sku: "19535",
    name: "APREZO STARTER PACK",
  },
  {
    sku: "19536",
    name: "APROVASC 150/10MG",
  },
  {
    sku: "1479",
    name: "APROVASC 150/5MG",
  },
  {
    sku: "20104",
    name: "APROVASC 300/10MG",
  },
  {
    sku: "20105",
    name: "APROVASC 300/5MG",
  },
  {
    sku: "46742",
    name: "APROVEL 150MG",
  },
  {
    sku: "31601",
    name: "APROVEL 300MG",
  },
  {
    sku: "31598",
    name: "ARABITRO TABLETS 250MG",
  },
  {
    sku: "31608",
    name: "ARAVA 10MG",
  },
  {
    sku: "31609",
    name: "ARAVA 20MG",
  },
  {
    sku: "31607",
    name: "ARCOXIA 120MG",
  },
  {
    sku: "31606",
    name: "ARCOXIA 90MG",
  },
  {
    sku: "16408",
    name: "ARIAN 10MG",
  },
  {
    sku: "16406",
    name: "ARICEPT EVESS 10MG",
  },
  {
    sku: "16428",
    name: "ARICEPT EVESS 5MG",
  },
  {
    sku: "47690",
    name: "ARILIFT 10MG",
  },
  {
    sku: "24175",
    name: "ARIMIDEX 1MG",
  },
  {
    sku: "2077",
    name: "ARIPTOR TABLET 10MG",
  },
  {
    sku: "40636",
    name: "ARIPTOR TABLET 15MG",
  },
  {
    sku: "40663",
    name: "ARIXTRA 2.5MG/0.5ML SOLUTION FOR INJECTION",
  },
  {
    sku: "40635",
    name: "AROMASIN 25MG",
  },
  {
    sku: "16036",
    name: "ARROX 7.5MG",
  },
  {
    sku: "31326",
    name: "ARTRODAR 50MG",
  },
  {
    sku: "17475",
    name: "ASLENE 120MG",
  },
  {
    sku: "47287",
    name: "ASOLAN 0.5MG",
  },
  {
    sku: "31841",
    name: "ASTATIN 10MG",
  },
  {
    sku: "18332",
    name: "ASTATIN 20MG",
  },
  {
    sku: "918",
    name: "ASTATIN 40MG",
  },
  {
    sku: "917",
    name: "ASTHALIN INHALER MDI 200 METERED DOSES",
  },
  {
    sku: "18333",
    name: "ASTHALIN RESPULES 2.5MG",
  },
  {
    sku: "38113",
    name: "ASTHATOR 10MG",
  },
  {
    sku: "38112",
    name: "ASTHATOR 4MG",
  },
  {
    sku: "28417",
    name: "ASTHATOR 5MG",
  },
  {
    sku: "42482",
    name: "ASU MINOXIDIL 0.05 TOPICAL SOLUTION 60ML",
  },
  {
    sku: "40208",
    name: "ASUMED LEVOCET SYRUP 0.5MG/ML 60ML",
  },
  {
    sku: "40213",
    name: "ATACAND 16MG",
  },
  {
    sku: "16532",
    name: "ATACAND 8MG",
  },
  {
    sku: "17677",
    name: "ATACAND PLUS 16/12.5MG",
  },
  {
    sku: "17674",
    name: "ATC VITAMIN B12 INJECTION 1000MCG/ML 10ML",
  },
  {
    sku: "17673",
    name: "ATECTURA BREEZHALER 150/160",
  },
  {
    sku: "17672",
    name: "ATECTURA BREEZHALER 150/320",
  },
  {
    sku: "41970",
    name: "ATEHEXAL 100MG",
  },
  {
    sku: "16491",
    name: "ATEHEXAL 50MG",
  },
  {
    sku: "17841",
    name: "ATENOL 100MG",
  },
  {
    sku: "16493",
    name: "ATENOL 50MG",
  },
  {
    sku: "16492",
    name: "ATENOLOL 100MG",
  },
  {
    sku: "45393",
    name: "ATORIS 20MG",
  },
  {
    sku: "16989",
    name: "ATORIS 40MG",
  },
  {
    sku: "16861",
    name: "ATORVAS TABLET 20MG",
  },
  {
    sku: "16863",
    name: "ATOZET 10MG/20MG",
  },
  {
    sku: "40620",
    name: "ATOZET 10MG/40MG",
  },
  {
    sku: "32420",
    name: "ATROVENT 0.00025 SOLUTION 20ML",
  },
  {
    sku: "38520",
    name: "ATROVENT N INHALER 10ML",
  },
  {
    sku: "38521",
    name: "AUGMENTIN 625MG TAB",
  },
  {
    sku: "35111",
    name: "AUGMENTIN SYRUP 228MG/5ML 70ML",
  },
  {
    sku: "35112",
    name: "AURASERT 50MG",
  },
  {
    sku: "35114",
    name: "AUROBINDO ONCHOFIN 250MG",
  },
  {
    sku: "35115",
    name: "AUROBINDO ONCHOFIN 250MG 2",
  },
  {
    sku: "35113",
    name: "AURORIX 150MG",
  },
  {
    sku: "46100",
    name: "AUROXETIL 250MG",
  },
  {
    sku: "27544",
    name: "AVADOL SUSPENSION 250MG/5ML STRAWBERRY 90ML",
  },
  {
    sku: "34387",
    name: "AVAMYS NASAL SPRAY 120 DOSES",
  },
  {
    sku: "27065",
    name: "AVAMYS NASAL SPRAY 60 DOSES",
  },
  {
    sku: "17199",
    name: "AVASTIN INJECTION 100MG/4ML",
  },
  {
    sku: "17007",
    name: "AVAXIM VACCINE SUSP FOR INJ",
  },
  {
    sku: "40199",
    name: "AVELOX",
  },
  {
    sku: "40200",
    name: "AVETEN 50MG",
  },
  {
    sku: "23346",
    name: "AVEX AVEGESIC TABLET 15MG",
  },
  {
    sku: "44791",
    name: "AVEX AVEZOL CAPSULE 150MG",
  },
  {
    sku: "43835",
    name: "AVEXUS 500MG",
  },
  {
    sku: "23532",
    name: "AVODART",
  },
  {
    sku: "4845",
    name: "AVOGRA TABLET 100MG",
  },
  {
    sku: "46151",
    name: "AVONAC SR 100MG",
  },
  {
    sku: "16999",
    name: "AVORIUS 5MG",
  },
  {
    sku: "46355",
    name: "AVORIX 0.5MG",
  },
  {
    sku: "47618",
    name: "AVOTYNE 10MG",
  },
  {
    sku: "18716",
    name: "AVOZINE 5MG",
  },
  {
    sku: "18715",
    name: "AXCEL BETAMETHASONE CREAM 15G",
  },
  {
    sku: "16371",
    name: "AXCEL CEFUROXIME 250MG",
  },
  {
    sku: "16372",
    name: "AXCEL CEPHALEXIN 500MG 100S",
  },
  {
    sku: "16370",
    name: "AXCEL CEPHALEXIN 500MG 10S",
  },
  {
    sku: "45876",
    name: "AXCEL CEPHALEXIN 500MG 1S",
  },
  {
    sku: "45943",
    name: "AXCEL CETIRIZINE SYRUP 100ML",
  },
  {
    sku: "23085",
    name: "AXCEL CIMETIDINE 200MG",
  },
  {
    sku: "38715",
    name: "AXCEL CIMETIDINE 400MG",
  },
  {
    sku: "45623",
    name: "AXCEL CLINDAMYCIN 0.01 SOLUTION 30ML",
  },
  {
    sku: "45621",
    name: "AXCEL DICYCLOMINE-S SYRUP 100ML",
  },
  {
    sku: "36466",
    name: "AXCEL GLIMEPIRIDE 2MG",
  },
  {
    sku: "29451",
    name: "AXCEL IBUPROFEN PAEDIATRIC SYRUP 100ML",
  },
  {
    sku: "29452",
    name: "AXCEL LIGNOCAINE GEL 20G",
  },
  {
    sku: "30184",
    name: "AXCEL OXYMETAZOLINE 0.00025 NASAL DROP 10ML",
  },
  {
    sku: "45941",
    name: "AXCEL OXYMETAZOLINE 0.0005 NASAL SPRAY 10ML",
  },
  {
    sku: "42267",
    name: "AXCEL PHENTERMINE 30MG",
  },
  {
    sku: "42358",
    name: "AXCEL SALBUTAMOL SYRUP 100ML",
  },
  {
    sku: "36254",
    name: "AXCEL VALACYCLOVIR-500",
  },
  {
    sku: "38538",
    name: "AXINOL 20MG",
  },
  {
    sku: "43072",
    name: "AZALIA 0.075MG",
  },
  {
    sku: "14116",
    name: "AZAMUN AZATHIOPRINE 50MG",
  },
  {
    sku: "42617",
    name: "AZARGA EYE DROPS 5ML",
  },
  {
    sku: "35799",
    name: "AZITH 15ML",
  },
  {
    sku: "35800",
    name: "AZITHRAL 500MG",
  },
  {
    sku: "16909",
    name: "AZITHRO 250MG",
  },
  {
    sku: "43355",
    name: "AZOPT 0.01 OPTH SUSPENSION EYE DROP 5ML",
  },
  {
    sku: "43356",
    name: "AZOREN 20MG/5MG",
  },
  {
    sku: "41999",
    name: "AZOREN 40MG/10MG",
  },
  {
    sku: "18081",
    name: "AZOREN 40MG/5MG",
  },
  {
    sku: "36439",
    name: "B CREAM 15G",
  },
  {
    sku: "41881",
    name: "BACITRACIN-N OINTMENT 10G",
  },
  {
    sku: "5013",
    name: "BACTAFUZ-B CREAM 15G",
  },
  {
    sku: "44811",
    name: "BACTIGEN EYE DROPS 5ML",
  },
  {
    sku: "36585",
    name: "BACTOPIC MUPIROCIN OINTMENT 0.02 15G",
  },
  {
    sku: "17746",
    name: "BAPID 100MG",
  },
  {
    sku: "1500",
    name: "BARACLUDE 0.5MG",
  },
  {
    sku: "18088",
    name: "BEAFEMIC 250MG",
  },
  {
    sku: "17782",
    name: "BEAGENTA EYE/EAR DROP",
  },
  {
    sku: "18086",
    name: "BEATACYCLINE",
  },
  {
    sku: "17783",
    name: "BEATAFED 10'S",
  },
  {
    sku: "18085",
    name: "BEATAFED 500'S XX",
  },
  {
    sku: "18083",
    name: "BECLATE-100 INHALER 200 METERED DOSES",
  },
  {
    sku: "17781",
    name: "BECLOMET NASAL AQUA 50MG",
  },
  {
    sku: "18082",
    name: "BECONASE AQUEOUS NASAL SPRAY 200 METERED ACTUATIONS",
  },
  {
    sku: "44716",
    name: "BENA EXPECTORANT 120ML",
  },
  {
    sku: "15681",
    name: "BENCODYL LINCTUS 100ML",
  },
  {
    sku: "41910",
    name: "BENCOVEE CREAM 15G",
  },
  {
    sku: "16884",
    name: "BENZAC AC 0.05 GEL 60G",
  },
  {
    sku: "36576",
    name: "BENZAC AC GEL 0.05 15G",
  },
  {
    sku: "44914",
    name: "BENZAPEN 2.4MIU INJ",
  },
  {
    sku: "44915",
    name: "BERODUAL I.S. 20ML",
  },
  {
    sku: "16968",
    name: "BERODUAL N METERED DOSE INHALER 200 METERED",
  },
  {
    sku: "16023",
    name: "BEROTEC N 100MCG/PUFF METERED DOSE INHALER",
  },
  {
    sku: "29290",
    name: "BESONIN AQUA NASAL SPRAY 100MCG/DOSE",
  },
  {
    sku: "29291",
    name: "BETAC 20MG",
  },
  {
    sku: "22944",
    name: "BETACIN EAR/EYE DROP 5ML",
  },
  {
    sku: "24733",
    name: "BETACLOB CREAM 15GM",
  },
  {
    sku: "21761",
    name: "BETACLOB CREAM 15GM 12",
  },
  {
    sku: "21760",
    name: "BETACREAM 0.0472222222222222 CREAM",
  },
  {
    sku: "21265",
    name: "BETAGEN EYE/EAR DROPS 5ML",
  },
  {
    sku: "5157",
    name: "BETALOC 100MG",
  },
  {
    sku: "14062",
    name: "BETALOC 50MG",
  },
  {
    sku: "17030",
    name: "BETAMOX 250MG GRANULE 60ML",
  },
  {
    sku: "2022",
    name: "BETAMOX 250MG TAB",
  },
  {
    sku: "46565",
    name: "BETANOR 24MG",
  },
  {
    sku: "16659",
    name: "BETASERC 24MG",
  },
  {
    sku: "46457",
    name: "BETASOLVE 0.001 CREAM 20G",
  },
  {
    sku: "30281",
    name: "BETAVAL-N CREAM 15G",
  },
  {
    sku: "37831",
    name: "BETAVAL-N CREAM 15G 12",
  },
  {
    sku: "47649",
    name: "BETMIGA 25MG",
  },
  {
    sku: "16620",
    name: "BETMIGA 50MG",
  },
  {
    sku: "16615",
    name: "BETNESONE-G CREAM 15G",
  },
  {
    sku: "16617",
    name: "BETNOVATE CREAM 15G",
  },
  {
    sku: "16616",
    name: "BETNOVATE-N CREAM 15G",
  },
  {
    sku: "36570",
    name: "BEZARTAN IRBESARTAN 150MG",
  },
  {
    sku: "22928",
    name: "BEZARTAN IRBESARTAN 150MG 3 X",
  },
  {
    sku: "22929",
    name: "BEZARTAN IRBESARTAN 300MG",
  },
  {
    sku: "19149",
    name: "BEZARTAN IRBESARTAN 300MG 3 X",
  },
  {
    sku: "17312",
    name: "BICAL-50 BICALUTAMIDE TAB 50MG",
  },
  {
    sku: "17311",
    name: "BICALOX 50MG",
  },
  {
    sku: "44640",
    name: "BIDOL",
  },
  {
    sku: "17351",
    name: "BILAXTEN 20MG",
  },
  {
    sku: "28668",
    name: "BILAXTEN ODT 10MG",
  },
  {
    sku: "22324",
    name: "BILAXTEN ODT 10MG 3",
  },
  {
    sku: "30602",
    name: "BINOCRIT 10000IU/ 1ML INJECTION 1ML X",
  },
  {
    sku: "22574",
    name: "BINOCRIT 2000IU/1ML INJECTION 1ML X",
  },
  {
    sku: "20950",
    name: "BINOCRIT 4000IU/0.4ML INJECTION 1ML X",
  },
  {
    sku: "16169",
    name: "BINOZYT F/C 500MG",
  },
  {
    sku: "16170",
    name: "BIOCON BASALOG ONE 3ML",
  },
  {
    sku: "31562",
    name: "BIOMOL INHALERS MDI 200 METERED DOSE 100MCG",
  },
  {
    sku: "31563",
    name: "BIOSONE 100MCG/DOSE INHALER",
  },
  {
    sku: "31561",
    name: "BIOXITIDE 25/125MCG 120 DOSE",
  },
  {
    sku: "31565",
    name: "BIOXITIDE 25/250MCG",
  },
  {
    sku: "31566",
    name: "BISOCOR 2.5MG",
  },
  {
    sku: "32203",
    name: "BISOHEXAL 2.5MG",
  },
  {
    sku: "40057",
    name: "BISOHEXAL 5MG",
  },
  {
    sku: "20779",
    name: "BISOL F.C 5MG",
  },
  {
    sku: "35322",
    name: "B-MYCIN CREAM 15G",
  },
  {
    sku: "29846",
    name: "BONVIVA 150MG",
  },
  {
    sku: "29847",
    name: "BOOSTRIX VACCINE",
  },
  {
    sku: "37567",
    name: "BOTOX",
  },
  {
    sku: "34329",
    name: "BRAUN G-50% 20ML",
  },
  {
    sku: "37276",
    name: "BRAUN GLUCOSE INTRAVENOUS INFUSION G-5% 500ML",
  },
  {
    sku: "43615",
    name: "BRAUN SODIUM CHLORIDE 0.009 100ML",
  },
  {
    sku: "44039",
    name: "BRAUN SODIUM CHLORIDE 0.009 20ML",
  },
  {
    sku: "34587",
    name: "BRAUN SODIUM CHLORIDE 0.009 250ML",
  },
  {
    sku: "34588",
    name: "BRAUN SODIUM CHLORIDE 0.009 G-5% INFUSION 500ML",
  },
  {
    sku: "32984",
    name: "BRAUN SODIUM CHLORIDE 0.03 500ML",
  },
  {
    sku: "32986",
    name: "BRAUN SODIUM CHLORIDE INFUSION 0.009 1L",
  },
  {
    sku: "32985",
    name: "BRAUN SODIUM CHLORIDE INFUSION 0.009 500ML",
  },
  {
    sku: "32981",
    name: "BRAUN SODIUM CHLORIDE INJ.B.P NACL 0.009 10ML",
  },
  {
    sku: "32982",
    name: "BRAUN WATER FOR INJECTION 10ML",
  },
  {
    sku: "17053",
    name: "BRAUN WATER FOR INJECTION 500ML",
  },
  {
    sku: "17054",
    name: "BREXIN 20MG",
  },
  {
    sku: "17055",
    name: "BREZTRI AEROSPHERE 160/7.2/5 MCG 120 DOSE",
  },
  {
    sku: "17068",
    name: "BRILINTA 60MG",
  },
  {
    sku: "17548",
    name: "BRILINTA 90MG",
  },
  {
    sku: "20012",
    name: "BRINTELLIX 10MG",
  },
  {
    sku: "32001",
    name: "BRITALINE 2.5MG",
  },
  {
    sku: "26993",
    name: "BRITALINE 2.5MG 3",
  },
  {
    sku: "34917",
    name: "BRONKINE TAB 2.5MG",
  },
  {
    sku: "29530",
    name: "BROZIL 300MG",
  },
  {
    sku: "42074",
    name: "BRUFEN SUSPENSION SYRUP 100MG/5ML 90ML",
  },
  {
    sku: "22281",
    name: "BS TAB",
  },
  {
    sku: "17208",
    name: "BUFENCON INJ 5ML/ VIAL X",
  },
  {
    sku: "47337",
    name: "BUMET 1MG",
  },
  {
    sku: "32174",
    name: "BURINEX 1MG",
  },
  {
    sku: "41745",
    name: "BUSCOPAN 10MG",
  },
  {
    sku: "17528",
    name: "BUTAVENT RESPIRATOR SOLUTION 10ML",
  },
  {
    sku: "38367",
    name: "CABAMINE INJECTION 1000MCG/ML",
  },
  {
    sku: "23279",
    name: "CABOMETYX 40MG",
  },
  {
    sku: "36085",
    name: "CADUET 10MG/10MG",
  },
  {
    sku: "37512",
    name: "CADUET 10MG/20MG",
  },
  {
    sku: "18751",
    name: "CADUET 10MG/40MG",
  },
  {
    sku: "43929",
    name: "CADUET 5MG/10MG",
  },
  {
    sku: "20000",
    name: "CADUET 5MG/20MG",
  },
  {
    sku: "16839",
    name: "CADUET 5MG/40MG",
  },
  {
    sku: "45041",
    name: "CAFERGOT 1'S",
  },
  {
    sku: "45040",
    name: "CAFERGOT 20'S",
  },
  {
    sku: "36077",
    name: "CAFFOX 10'S !!!",
  },
  {
    sku: "43331",
    name: "CAFFOX 10'S X 10",
  },
  {
    sku: "17020",
    name: "CALCIBET OINTMENT 30G",
  },
  {
    sku: "17021",
    name: "CALCIGARD RETARD 20MG",
  },
  {
    sku: "17202",
    name: "CALIBERI 20MG",
  },
  {
    sku: "17201",
    name: "CALIBERI 5MG",
  },
  {
    sku: "16730",
    name: "CALQUENCE HARD CAPSULE 100MG",
  },
  {
    sku: "16728",
    name: "CAMAZOL 5MG",
  },
  {
    sku: "17206",
    name: "CAMLODIN 10MG",
  },
  {
    sku: "17205",
    name: "CAMLODIN 5MG",
  },
  {
    sku: "16726",
    name: "CANDID CREAM 1%W/W 60G",
  },
  {
    sku: "16727",
    name: "CANDID EAR DROPS 15ML",
  },
  {
    sku: "16725",
    name: "CANDID V1",
  },
  {
    sku: "16055",
    name: "CANDID V3",
  },
  {
    sku: "16054",
    name: "CANDID-B CREAM 15G",
  },
  {
    sku: "34599",
    name: "CANDID-B CREAM 60G",
  },
  {
    sku: "37790",
    name: "CANDID-B LOTION 15ML",
  },
  {
    sku: "43593",
    name: "CANDID-V GEL 30G",
  },
  {
    sku: "32024",
    name: "CANDIGO VAGINAL PESSARY WITH APPLICATOR",
  },
  {
    sku: "32025",
    name: "CANESPRO BIFONAZOLE ANTI-FUNGAL CREAM 0.01 W/W 15G",
  },
  {
    sku: "38155",
    name: "CANESTEN V CREAM 0.01 10G",
  },
  {
    sku: "38154",
    name: "CAPTOHEXAL 25MG",
  },
  {
    sku: "43428",
    name: "CARDIL 120MG",
  },
  {
    sku: "18719",
    name: "CARDIVIX 75MG FILM COATED TABLET",
  },
  {
    sku: "37623",
    name: "CARDURA 2MG",
  },
  {
    sku: "35124",
    name: "CARDURA XL 4MG",
  },
  {
    sku: "8250",
    name: "CARIDINE SYRUP 60ML",
  },
  {
    sku: "8248",
    name: "CARIN 10MG",
  },
  {
    sku: "8446",
    name: "CARINOX",
  },
  {
    sku: "34992",
    name: "CARVEDILOL HEXAL 25MG",
  },
  {
    sku: "21577",
    name: "CARVEDILOL HEXAL 25MG 10",
  },
  {
    sku: "29889",
    name: "CASODEX 50MG",
  },
  {
    sku: "36577",
    name: "CATAFLAM 50MG",
  },
  {
    sku: "22080",
    name: "CAVERJECT INJECTION 20MCG",
  },
  {
    sku: "17335",
    name: "CAVERTA 100MG",
  },
  {
    sku: "17337",
    name: "CAVSAMIR TABLETS 800MG",
  },
  {
    sku: "32596",
    name: "CCM BEMETHA 0.5MG",
  },
  {
    sku: "37746",
    name: "CCM DEXALONE 0.5MG",
  },
  {
    sku: "16364",
    name: "CCM DEXALONE 0.75MG",
  },
  {
    sku: "16121",
    name: "CCM DEXCHLORAMINE 2MG",
  },
  {
    sku: "21765",
    name: "CCM- TROVITE IV INJECTION",
  },
  {
    sku: "41546",
    name: "CEBROTONIN 1'S",
  },
  {
    sku: "41545",
    name: "CEBROTONIN 30'S",
  },
  {
    sku: "4550",
    name: "CEF-3 INJECTION IM 500MG",
  },
  {
    sku: "16027",
    name: "CELEBREX 200MG",
  },
  {
    sku: "20419",
    name: "CELEBREX 400MG",
  },
  {
    sku: "40137",
    name: "CELLCEPT 250MG",
  },
  {
    sku: "37624",
    name: "CELLCEPT 500MG",
  },
  {
    sku: "16099",
    name: "CELOVAN POWDER FOR INJECTION 500MG 10 VIALS",
  },
  {
    sku: "20775",
    name: "CEPHALEXIN 500MG",
  },
  {
    sku: "19240",
    name: "CEPHALEXIN TABLETS MPI 500MG",
  },
  {
    sku: "17113",
    name: "CERATOR EXTENDED - RELEASE TABLET 400MG 10",
  },
  {
    sku: "20776",
    name: "CERATOR EXTENDED - RELEASE TABLET 400MG",
  },
  {
    sku: "37626",
    name: "CERAZETTE 28'S",
  },
  {
    sku: "19241",
    name: "CERETAM SOLUTION",
  },
  {
    sku: "16102",
    name: "CERETAM TABLET 1200MG",
  },
  {
    sku: "20602",
    name: "CERETAM TABLET 1200MG 3",
  },
  {
    sku: "37800",
    name: "CERETAM TABLET 800MG",
  },
  {
    sku: "16311",
    name: "CERITEC F.C. 10MG",
  },
  {
    sku: "16310",
    name: "CERUVIN 75MG",
  },
  {
    sku: "16045",
    name: "CETIRIZINE 10MG",
  },
  {
    sku: "16044",
    name: "CETRAXAL PLUS EAR DROPS SOLUTION 10ML",
  },
  {
    sku: "17320",
    name: "CETRIZET D",
  },
  {
    sku: "17321",
    name: "CETYROL 10MG",
  },
  {
    sku: "16870",
    name: "CEZTI 10MG",
  },
  {
    sku: "17044",
    name: "CHAMPIX 0.5MG",
  },
  {
    sku: "17045",
    name: "CHAMPIX 1MG",
  },
  {
    sku: "45893",
    name: "CHLOPRPHENIRAMINE MALEATE BP 100MG/10ML",
  },
  {
    sku: "34035",
    name: "CHLORITON 4MG",
  },
  {
    sku: "17935",
    name: "CHLOROP EYE OINTMENT 5G",
  },
  {
    sku: "17836",
    name: "CHLORPHENIRAMINE MALEATE BP 10MG/1ML AMPOULE",
  },
  {
    sku: "37554",
    name: "CHOLIB 145MG/20MG",
  },
  {
    sku: "25120",
    name: "CIALIS 20MG",
  },
  {
    sku: "16915",
    name: "CIALIS 5MG",
  },
  {
    sku: "17154",
    name: "CINNA 100'S",
  },
  {
    sku: "37793",
    name: "CINNA 10'S",
  },
  {
    sku: "20773",
    name: "CIPMAX EYE DROPS 5ML",
  },
  {
    sku: "20772",
    name: "CIPRAM 20MG",
  },
  {
    sku: "41168",
    name: "CIPROBAY 500MG",
  },
  {
    sku: "21812",
    name: "CIPROBAY IV 200MG 100ML",
  },
  {
    sku: "21813",
    name: "CIPRODAC 500MG",
  },
  {
    sku: "17397",
    name: "CLAMENTIN INJECTION 1.2G",
  },
  {
    sku: "17143",
    name: "CLARICLEAR NASAL 0.0005 SPRAY 15ML",
  },
  {
    sku: "20112",
    name: "CLARINASE 24HR",
  },
  {
    sku: "20111",
    name: "CLARINASE REPETAB",
  },
  {
    sku: "40354",
    name: "CLARITYNE 10MG",
  },
  {
    sku: "27981",
    name: "CLARITYNE SYRUP GRAPE 5MG 60ML",
  },
  {
    sku: "28161",
    name: "CLAVOMAX 625MG TABLET",
  },
  {
    sku: "26033",
    name: "CLAVOMAX 625MG TABLET 10",
  },
  {
    sku: "43659",
    name: "CLEXANE 2000UI INJECTION",
  },
  {
    sku: "43658",
    name: "CLEXANE 4000UI/0.4ML INJECTION",
  },
  {
    sku: "16383",
    name: "CLEXANE 6000UI/0.6ML INJECTION",
  },
  {
    sku: "16382",
    name: "CLOBET CREAM 10G",
  },
  {
    sku: "16381",
    name: "CLOBEX SHAMPOO 0.0005 60ML",
  },
  {
    sku: "20249",
    name: "CLOPIDOGREL CLOPISTAD 75MG",
  },
  {
    sku: "20248",
    name: "CLOVIX TAB 75MG",
  },
  {
    sku: "41616",
    name: "CLOZARIL 25MG",
  },
  {
    sku: "16325",
    name: "CO-AMOXICLAV 625MG",
  },
  {
    sku: "16324",
    name: "CO-APROVEL 150/12.5MG",
  },
  {
    sku: "43527",
    name: "CO-APROVEL 300/12.5MG",
  },
  {
    sku: "16272",
    name: "CO-DIOVAN 160/12.5MG",
  },
  {
    sku: "16126",
    name: "CO-DIOVAN 160/25MG",
  },
  {
    sku: "16118",
    name: "CO-DIOVAN 80/12.5MG",
  },
  {
    sku: "43516",
    name: "#NAME?",
  },
  {
    sku: "27662",
    name: "COLDTACT CAP",
  },
  {
    sku: "31264",
    name: "COLIMIX SYRUP 90ML",
  },
  {
    sku: "7571",
    name: "COMAZOLE N TABLET",
  },
  {
    sku: "2024",
    name: "COMAZOLE N TABLET 100",
  },
  {
    sku: "36379",
    name: "COMBIGAN EYE DROPS 5ML",
  },
  {
    sku: "17931",
    name: "COMBINEB NEBULISER SOLUTION UNIT DOSE VIAL",
  },
  {
    sku: "19285",
    name: "COMBIVENT UNIT DOSE VIALS",
  },
  {
    sku: "47412",
    name: "COMBIWAVE FB 200",
  },
  {
    sku: "17279",
    name: "COMBIWAVE SF125 150 METERED DOSES",
  },
  {
    sku: "19212",
    name: "COMTAN 200MG",
  },
  {
    sku: "16433",
    name: "CONCERTA 18MG XX",
  },
  {
    sku: "16431",
    name: "CONCERTA 36MG",
  },
  {
    sku: "16435",
    name: "CONCOR 10MG",
  },
  {
    sku: "16447",
    name: "CONCOR 2.5MG",
  },
  {
    sku: "16882",
    name: "CONCOR 5MG",
  },
  {
    sku: "16444",
    name: "CONCOR 5MG + AMLODIPINE 10MG",
  },
  {
    sku: "44613",
    name: "CONCOR 5MG + AMLODIPINE 5MG",
  },
  {
    sku: "14078",
    name: "CONPANZOLE 20MG",
  },
  {
    sku: "3448",
    name: "CONPANZOLE 40MG",
  },
  {
    sku: "18418",
    name: "CONTRAVE 8MG/90MG TABLET",
  },
  {
    sku: "16665",
    name: "CONTROLOC 20MG",
  },
  {
    sku: "28759",
    name: "CONTROLOC 40MG",
  },
  {
    sku: "24229",
    name: "COPAN INJECTION",
  },
  {
    sku: "24201",
    name: "COPASTIN 10MG",
  },
  {
    sku: "17779",
    name: "COPLAVIX 75/100MG",
  },
  {
    sku: "16467",
    name: "CORALAN 5MG",
  },
  {
    sku: "16470",
    name: "CORALAN 7.5MG",
  },
  {
    sku: "29880",
    name: "CORDARONE 200MG",
  },
  {
    sku: "29877",
    name: "CORDIPIN XL 40MG",
  },
  {
    sku: "37024",
    name: "CORIFED TAB",
  },
  {
    sku: "17915",
    name: "CORTIMENT 9MG",
  },
  {
    sku: "37659",
    name: "COSMOFER INJECTION 50MG/ML 2ML X",
  },
  {
    sku: "37076",
    name: "COSOPT OWI EYE DROP 2/0.5% 5ML",
  },
  {
    sku: "45217",
    name: "COSOPT-S 0.2ML X",
  },
  {
    sku: "16916",
    name: "COSYREL 10/10MG",
  },
  {
    sku: "16917",
    name: "COSYREL 5/10MG",
  },
  {
    sku: "15966",
    name: "COSYREL 5/5MG",
  },
  {
    sku: "15965",
    name: "COTREN VAGINAL 500MG TABLETS",
  },
  {
    sku: "41212",
    name: "COUGH-EN LINCTUS 120ML",
  },
  {
    sku: "28691",
    name: "COVAPRIL 10'S",
  },
  {
    sku: "1385",
    name: "COVAPRIL 10'S X 10",
  },
  {
    sku: "40220",
    name: "COVASC 10MG",
  },
  {
    sku: "17669",
    name: "COVASC 5MG",
  },
  {
    sku: "2082",
    name: "COVASTIN 20MG",
  },
  {
    sku: "2086",
    name: "COVERAM 10/10MG",
  },
  {
    sku: "2085",
    name: "COVERAM 10/5MG",
  },
  {
    sku: "16609",
    name: "COVERAM 5/10MG",
  },
  {
    sku: "16610",
    name: "COVERAM 5/5MG",
  },
  {
    sku: "16608",
    name: "COVERSYL 10MG",
  },
  {
    sku: "16503",
    name: "COVERSYL 5MG",
  },
  {
    sku: "22554",
    name: "COVERSYL PLUS 10MG/ 2.5MG",
  },
  {
    sku: "22556",
    name: "COVERSYL PLUS 5MG/1.25MG",
  },
  {
    sku: "28150",
    name: "COVINACE 4MG",
  },
  {
    sku: "9528",
    name: "COVINACE 8MG",
  },
  {
    sku: "45887",
    name: "COVINACE 8MG 3",
  },
  {
    sku: "31800",
    name: "COZAAR 100MG",
  },
  {
    sku: "16709",
    name: "COZAAR 50MG",
  },
  {
    sku: "46729",
    name: "COZAAR XQ 5/100MG",
  },
  {
    sku: "16979",
    name: "COZAAR XQ 5/50MG",
  },
  {
    sku: "36162",
    name: "CRAVIT 0.005 EYE DROP 5ML",
  },
  {
    sku: "4997",
    name: "CRAVIT 0.015 EYE DROP 5ML",
  },
  {
    sku: "4996",
    name: "CRAVIT 250MG",
  },
  {
    sku: "17682",
    name: "CRAVIT 500MG",
  },
  {
    sku: "16391",
    name: "CRESEMBA 100MG CAPSULE",
  },
  {
    sku: "16390",
    name: "CRESTOR 10MG",
  },
  {
    sku: "16392",
    name: "CRESTOR 20MG",
  },
  {
    sku: "35185",
    name: "CRESTOR 5MG",
  },
  {
    sku: "16460",
    name: "CRINONE 0.08 PROGESTERONE VAGINAL GEL",
  },
  {
    sku: "16458",
    name: "CRUSIA 2000IU SOLUTION FOR INJECTION",
  },
  {
    sku: "16456",
    name: "CRYSTORVAS 20MG",
  },
  {
    sku: "16455",
    name: "CRYSTORVAS 40MG",
  },
  {
    sku: "17871",
    name: "CURAM 625MG",
  },
  {
    sku: "17873",
    name: "CUTIVATE CREAM 15G",
  },
  {
    sku: "17874",
    name: "CYBELLE 21'S",
  },
  {
    sku: "17872",
    name: "CYCLOGEST 400MG",
  },
  {
    sku: "47581",
    name: "CYMBALTA 30MG",
  },
  {
    sku: "40167",
    name: "CYMBALTA 60MG",
  },
  {
    sku: "17457",
    name: "CYRAMZA INJECTION 100MG/10ML VIAL",
  },
  {
    sku: "17451",
    name: "CYRAMZA INJECTION 500MG/50ML VIAL",
  },
  {
    sku: "17452",
    name: "D LL AVASTIN VIAL 100MG/4ML",
  },
  {
    sku: "40676",
    name: "DAIVOBET OINTMENT 30G",
  },
  {
    sku: "16573",
    name: "DAIVONEX OINTMENT 30G",
  },
  {
    sku: "16574",
    name: "DAKTARIN CREAM 0.02 15G",
  },
  {
    sku: "16572",
    name: "DAKTARIN ORAL GEL 0.02 15G",
  },
  {
    sku: "38677",
    name: "DALACIN C 300MG CAPSULE",
  },
  {
    sku: "17040",
    name: "DAONIL 5MG",
  },
  {
    sku: "27640",
    name: "DAPRIL 10MG",
  },
  {
    sku: "34194",
    name: "DAPRIL 20MG",
  },
  {
    sku: "40824",
    name: "DAYLINA 3MG/ 0.02MG",
  },
  {
    sku: "40823",
    name: "DAYVIGO 5MG",
  },
  {
    sku: "17107",
    name: "D-CURE 25000IU ORAL SOLUTION",
  },
  {
    sku: "17109",
    name: "DECAN 0.75MG",
  },
  {
    sku: "21883",
    name: "DECOLGEN 100'S",
  },
  {
    sku: "41624",
    name: "DECOLGEN 10'S",
  },
  {
    sku: "17663",
    name: "DECONDINE TAB",
  },
  {
    sku: "19215",
    name: "DEFUZIN CREAM 15G",
  },
  {
    sku: "17008",
    name: "DEFUZIN OINTMENT 15G",
  },
  {
    sku: "19214",
    name: "DEFUZIN-B CREAM 15G",
  },
  {
    sku: "46231",
    name: "DEFUZIN-B CREAM 15G 20",
  },
  {
    sku: "46230",
    name: "DEPLATT 75MG",
  },
  {
    sku: "47007",
    name: "DEPROPIN 25MG",
  },
  {
    sku: "23549",
    name: "DERIVA AQUEOUS GEL ADAPALENE GEL MICROSHERES 0.001",
  },
  {
    sku: "16776",
    name: "DERMAID 0.005 CREAM 15G",
  },
  {
    sku: "16516",
    name: "DERMAL SA OINTMENT 15G",
  },
  {
    sku: "42043",
    name: "DERMAZOL PLUS GEL 10G",
  },
  {
    sku: "42044",
    name: "DERMOSOL CREAM 15G",
  },
  {
    sku: "15857",
    name: "DERMOSONE CREAM 10G",
  },
  {
    sku: "20868",
    name: "DERMOVATE CREAM 100G",
  },
  {
    sku: "23772",
    name: "DERMOVATE CREAM 15G",
  },
  {
    sku: "43351",
    name: "DERMOVATE OINTMENT 100G",
  },
  {
    sku: "43350",
    name: "DERMOVATE OINTMENT 15G",
  },
  {
    sku: "37277",
    name: "DESTIQ ER TABLET 100MG",
  },
  {
    sku: "41854",
    name: "DESTIQ ER TABLET 50 MG",
  },
  {
    sku: "31857",
    name: "DETRUSITOL 2MG",
  },
  {
    sku: "37660",
    name: "DETRUSITOL SR 4MG",
  },
  {
    sku: "20837",
    name: "DEXA-GENTAMICIN EYE DROPS 5ML",
  },
  {
    sku: "17017",
    name: "DEXALTIN ORAL PASTE 2G",
  },
  {
    sku: "22540",
    name: "DEXALTIN ORAL PASTE 2G X 10",
  },
  {
    sku: "14094",
    name: "DEXCHLORMINE TAB",
  },
  {
    sku: "35108",
    name: "DEXILANT 30MG",
  },
  {
    sku: "31232",
    name: "DEXILANT 60MG",
  },
  {
    sku: "44761",
    name: "DEZAL TABLET 5MG",
  },
  {
    sku: "15670",
    name: "DHNP HYDROXYUREA",
  },
  {
    sku: "37807",
    name: "DIAMICRON 80MG",
  },
  {
    sku: "16767",
    name: "DIAMICRON MR 60MG",
  },
  {
    sku: "16172",
    name: "DIAMIDE 2.5MG/500MG",
  },
  {
    sku: "41872",
    name: "DIAMITEX 80MG",
  },
  {
    sku: "16894",
    name: "DIANE 35",
  },
  {
    sku: "16895",
    name: "DICETEL 100MG",
  },
  {
    sku: "16893",
    name: "DICLORAN 50MG",
  },
  {
    sku: "17501",
    name: "DICLOTROY EC 50MG",
  },
  {
    sku: "38684",
    name: "DICODONE",
  },
  {
    sku: "47639",
    name: "DIENILLE 21'S",
  },
  {
    sku: "47637",
    name: "DIFFERIN GEL 0.001 30G",
  },
  {
    sku: "47636",
    name: "DIFFLAM FORTE THROAT SPRAY 15ML",
  },
  {
    sku: "47640",
    name: "DIFFLAM LOZENGES GREEN MINT FRESH",
  },
  {
    sku: "17922",
    name: "DIFFLAM LOZENGES YELLOW HONEY LEMON",
  },
  {
    sku: "17917",
    name: "DIFFLAM MOUTH GEL 10G",
  },
  {
    sku: "17919",
    name: "DIFFLAM RASP ABACT LOZENGES RED SUGAR",
  },
  {
    sku: "47550",
    name: "DIFFLAM SOLUTION 100ML",
  },
  {
    sku: "17188",
    name: "DIFFLAM-C SOLUTION 100ML",
  },
  {
    sku: "36292",
    name: "DIFLUCAN 150MG",
  },
  {
    sku: "15866",
    name: "DIFLUCAN 50MG",
  },
  {
    sku: "15864",
    name: "DIFNAL-K",
  },
  {
    sku: "17772",
    name: "DILANTIN 100MG",
  },
  {
    sku: "45713",
    name: "DILANTIN 30MG",
  },
  {
    sku: "17254",
    name: "DILATREND 25MG",
  },
  {
    sku: "43530",
    name: "DILATREND 6.25MG",
  },
  {
    sku: "46682",
    name: "DIOVAN 160MG",
  },
  {
    sku: "15916",
    name: "DIOVAN 80MG",
  },
  {
    sku: "16415",
    name: "DIPHERELINE P.R. 3.75MG POWDER FOR INJ",
  },
  {
    sku: "23162",
    name: "DIPHERELINE P.R. POWDER AND SOLVENT FOR SUSPENSION",
  },
  {
    sku: "23163",
    name: "DIPROCEL OINT 100G",
  },
  {
    sku: "9405",
    name: "DIPROGENTA CREAM 15G",
  },
  {
    sku: "16412",
    name: "DIQUAS OPHTHALMIC SOLUTION 0.03",
  },
  {
    sku: "16413",
    name: "DIQUAS-S OPTHALMIC SOLUTION 0.03",
  },
  {
    sku: "9403",
    name: "DIVIGEL 1G",
  },
  {
    sku: "9404",
    name: "DOMPER 10MG",
  },
  {
    sku: "18006",
    name: "DORMICUM 7.5MG",
  },
  {
    sku: "16018",
    name: "DOSANAC EMULSION GEL 25GM",
  },
  {
    sku: "16019",
    name: "DOSTINEX 0.5MG",
  },
  {
    sku: "16286",
    name: "DOXIUM 10'S",
  },
  {
    sku: "17899",
    name: "DOXIUM 30'S",
  },
  {
    sku: "19816",
    name: "DOXYCILLIN",
  },
  {
    sku: "16452",
    name: "DOXYCYCLINE 100MG",
  },
  {
    sku: "16453",
    name: "DUCRESSA EYE DROP 5ML",
  },
  {
    sku: "16454",
    name: "DUODART 0.5MG/0.4MG",
  },
  {
    sku: "16450",
    name: "DUOLIN RESPULES 2.5ML",
  },
  {
    sku: "16451",
    name: "DUOLIN RESPULES 2.5ML",
  },
  {
    sku: "16441",
    name: "DUOPHARMA ACTIMIN TAB",
  },
  {
    sku: "16442",
    name: "DUOPHARMA ACTIMIN TAB 100",
  },
  {
    sku: "16440",
    name: "DUOPHARMA BEAMOTIL TABLET",
  },
  {
    sku: "38686",
    name: "DUOPHARMA BEAMOTIL TABLET 10",
  },
  {
    sku: "16438",
    name: "DUOPHARMA BEAMOTIL TABLET 100",
  },
  {
    sku: "16439",
    name: "DUOPHARMA CHLORAMINE 4MG",
  },
  {
    sku: "16437",
    name: "DUOPHARMA CHLORAMINE 4MG 100",
  },
  {
    sku: "43586",
    name: "DUOPHARMA CHLORAMINE SYRUP 2.5MG/5ML 90ML",
  },
  {
    sku: "43018",
    name: "DUOPHARMA CHLORAMINE SYRUP 4MG/5ML 90ML",
  },
  {
    sku: "23409",
    name: "DUOPHARMA DEXCHLORAMINE SYRUP 2MG/5ML 90ML",
  },
  {
    sku: "41927",
    name: "DUOPHARMA DUOCOXIB 90MG",
  },
  {
    sku: "5153",
    name: "DUOPHARMA HYDRINATE TABLET 50MG",
  },
  {
    sku: "17268",
    name: "DUOPHARMA PROEZINE TABLET 25MG",
  },
  {
    sku: "44064",
    name: "DUOPHARMA TACARLINE INJECTION 1MG/ML X",
  },
  {
    sku: "44065",
    name: "DUOTRAV BAK-FREE 2.5ML",
  },
  {
    sku: "45056",
    name: "DUOTRIC 400MG",
  },
  {
    sku: "17167",
    name: "DUOVENT UNIT DOSE VIALS",
  },
  {
    sku: "15907",
    name: "DUPHASTON",
  },
  {
    sku: "36546",
    name: "DUROMINE 30MG XX",
  },
  {
    sku: "26201",
    name: "DUROMINE 30MG",
  },
  {
    sku: "16254",
    name: "DUSPATALIN 135MG",
  },
  {
    sku: "47713",
    name: "DUTABIT 0.5MG",
  },
  {
    sku: "19632",
    name: "DYCOSIC TABLET",
  },
  {
    sku: "18458",
    name: "DYFENAMIC 250MG",
  },
  {
    sku: "38365",
    name: "DYFENAMIC 500MG",
  },
  {
    sku: "44677",
    name: "DYMENATE 1000'S",
  },
  {
    sku: "47184",
    name: "DYMENATE 10'S",
  },
  {
    sku: "44676",
    name: "DYMISTA NASAL SPRAY",
  },
  {
    sku: "44133",
    name: "DYNA AMOXYCILLIN 250MG/5ML",
  },
  {
    sku: "44132",
    name: "DYNA AMPICILLIN CAPSULE 250MG",
  },
  {
    sku: "45880",
    name: "DYNA BETA FUSIDIC CREAM 15G",
  },
  {
    sku: "44618",
    name: "DYNA CLOXACILLIN CAPSULE 500MG",
  },
  {
    sku: "44681",
    name: "DYNA COLCHICINE 0.5MG",
  },
  {
    sku: "44683",
    name: "DYNA COLCHICINE 0.5MG 10",
  },
  {
    sku: "41500",
    name: "DYNA FUSIDIC CREAM 15G",
  },
  {
    sku: "41498",
    name: "DYNA TICLOPIDINE TAB 250MG",
  },
  {
    sku: "5014",
    name: "DYNADRYL SYRUP 100ML",
  },
  {
    sku: "35159",
    name: "DYNAMET 200MG",
  },
  {
    sku: "45458",
    name: "DYNAPHARM DYFENAC 50MG",
  },
  {
    sku: "17562",
    name: "DYNAPHARM DYFENAC 50MG 10",
  },
  {
    sku: "6744",
    name: "DYNAPHARM DYFENAC 50MG 100",
  },
  {
    sku: "6743",
    name: "DYNAPHARM DYNIDAZOL TABLET 400MG",
  },
  {
    sku: "15980",
    name: "DYNAPHARM MEXOMIDE 10MG 10",
  },
  {
    sku: "36863",
    name: "DYNAPHARM MEXOMIDE 10MG",
  },
  {
    sku: "29666",
    name: "DYNAVATE-N CREAM 15G",
  },
  {
    sku: "19299",
    name: "DYRITON 1000'S !!!",
  },
  {
    sku: "19134",
    name: "DYRITON 100'S !!!",
  },
  {
    sku: "25503",
    name: "DYRITON 10'S !!!",
  },
  {
    sku: "809",
    name: "DYRITON 1'S !!!",
  },
  {
    sku: "17627",
    name: "EBIXA 10MG",
  },
  {
    sku: "47320",
    name: "EBIXA 20MG",
  },
  {
    sku: "41871",
    name: "ECONAZINE CREAM 10G",
  },
  {
    sku: "43410",
    name: "ECONAZINE CREAM 20G",
  },
  {
    sku: "38591",
    name: "ECONAZINE CREAM 40X20G",
  },
  {
    sku: "38061",
    name: "ECONAZINE CREAM 50X10G",
  },
  {
    sku: "45123",
    name: "ECORT CREAM 15G",
  },
  {
    sku: "37819",
    name: "EFAMAT 600MG",
  },
  {
    sku: "37818",
    name: "EFEXOR XR 150MG",
  },
  {
    sku: "45185",
    name: "EFEXOR XR 37.5MG",
  },
  {
    sku: "45054",
    name: "EFEXOR XR 75MG",
  },
  {
    sku: "45053",
    name: "EFFEXIN 0.003 EAR DROPS 5ML",
  },
  {
    sku: "45055",
    name: "EGO AZCLEAR MEDICATED LOTION 25G",
  },
  {
    sku: "16745",
    name: "ELASTA 60MG",
  },
  {
    sku: "34027",
    name: "ELIDEL CREAM 0.01 15G",
  },
  {
    sku: "34028",
    name: "ELIPIX 120MG",
  },
  {
    sku: "38449",
    name: "ELIPIX 90MG",
  },
  {
    sku: "41655",
    name: "ELIQUIS 2.5MG",
  },
  {
    sku: "46820",
    name: "ELIQUIS 5MG",
  },
  {
    sku: "36427",
    name: "ELLA 30MG",
  },
  {
    sku: "19573",
    name: "ELOMET CREAM 15G",
  },
  {
    sku: "37810",
    name: "ELOMET OINTMENT 15G",
  },
  {
    sku: "19574",
    name: "ELONZA 100MG TABLET 2",
  },
  {
    sku: "16866",
    name: "EMANERA 40MG",
  },
  {
    sku: "5053",
    name: "EMEND 125/80MG",
  },
  {
    sku: "5051",
    name: "EMLA 0.05 CREAM 5G",
  },
  {
    sku: "16231",
    name: "ENABLEX 7.5MG",
  },
  {
    sku: "16230",
    name: "ENAHEXAL 20MG",
  },
  {
    sku: "35223",
    name: "ENDIX CREAM 10G",
  },
  {
    sku: "33196",
    name: "ENERZAIR BREEZHALER 150/50/160MCG",
  },
  {
    sku: "22382",
    name: "ENGERIX B 20MCG",
  },
  {
    sku: "35026",
    name: "ENSTILAR FOAM 50+500 MCG / G 60G",
  },
  {
    sku: "17236",
    name: "ENTECA TAB 0.5MG",
  },
  {
    sku: "32704",
    name: "ENTECAVIR SANDOZ 0.5MG",
  },
  {
    sku: "17474",
    name: "ENTECAVIR STELLA 0.5MG 3 X",
  },
  {
    sku: "45619",
    name: "ENTRESTO 100MG",
  },
  {
    sku: "45610",
    name: "ENTRESTO 200MG",
  },
  {
    sku: "45612",
    name: "ENTRESTO 50MG",
  },
  {
    sku: "17847",
    name: "EPIDUO GEL 15G",
  },
  {
    sku: "17845",
    name: "EPILIM 200MG",
  },
  {
    sku: "40156",
    name: "EPILIM CHRONO 500MG",
  },
  {
    sku: "40158",
    name: "EPILIM SYRUP 200MG/5ML 300ML",
  },
  {
    sku: "17759",
    name: "EPIMATE 100MG",
  },
  {
    sku: "16183",
    name: "EPIMATE 50",
  },
  {
    sku: "32779",
    name: "EPREX PROTECS 2000IU 6 X 0.5ML",
  },
  {
    sku: "32780",
    name: "EPREX PROTECS 4000IU",
  },
  {
    sku: "16902",
    name: "EPREX PROTECS PFS 10000IU 6X1ML",
  },
  {
    sku: "16073",
    name: "EQOVEX 120MG",
  },
  {
    sku: "16072",
    name: "EQUFINA 50MG",
  },
  {
    sku: "20389",
    name: "ERDOMED 300MG CAP",
  },
  {
    sku: "20388",
    name: "ERLEADA 60MG",
  },
  {
    sku: "37230",
    name: "ERYTHROMYCIN ES 400MG",
  },
  {
    sku: "27666",
    name: "ESCAPELLE 1.5MG",
  },
  {
    sku: "34740",
    name: "ESCIPRA 10MG",
  },
  {
    sku: "28403",
    name: "ESLO",
  },
  {
    sku: "41909",
    name: "E-SOL GEL 10G",
  },
  {
    sku: "37148",
    name: "ESOMAC 40MG",
  },
  {
    sku: "24469",
    name: "ESOZ 40MG",
  },
  {
    sku: "25292",
    name: "ESPRAN 10MG",
  },
  {
    sku: "24132",
    name: "ESTELLE-35 21'S",
  },
  {
    sku: "2025",
    name: "ET CREAM 10G",
  },
  {
    sku: "16288",
    name: "ET CREAM 10G 50",
  },
  {
    sku: "16289",
    name: "ETIMICOL - EZITIMIBE 10MG",
  },
  {
    sku: "17161",
    name: "ETROBAX 60MG",
  },
  {
    sku: "34656",
    name: "EURYTHMIC 200MG",
  },
  {
    sku: "21884",
    name: "EUTHYROX 100MCG",
  },
  {
    sku: "46910",
    name: "EUTHYROX 25MCG",
  },
  {
    sku: "43932",
    name: "EUTHYROX 50MCG",
  },
  {
    sku: "17712",
    name: "EVRA TRANSDERMAL PATCHES",
  },
  {
    sku: "17713",
    name: "EXELON 1.5MG",
  },
  {
    sku: "17714",
    name: "EXELON 3MG",
  },
  {
    sku: "5074",
    name: "EXELON 4.5MG",
  },
  {
    sku: "38501",
    name: "EXELON PATCH 10CM",
  },
  {
    sku: "36308",
    name: "EXELON PATCH 15CM",
  },
  {
    sku: "36307",
    name: "EXELON PATCH 5CM",
  },
  {
    sku: "35073",
    name: "EXFORGE 10/160MG",
  },
  {
    sku: "46245",
    name: "EXFORGE 5/160MG",
  },
  {
    sku: "17819",
    name: "EXFORGE 5/80MG",
  },
  {
    sku: "46089",
    name: "EXFORGE HCT 10MG/160MG/12.5MG",
  },
  {
    sku: "37008",
    name: "EXFORGE HCT 10MG/160MG/25MG",
  },
  {
    sku: "33308",
    name: "EXFORGE HCT 5MG/160MG/12.5MG",
  },
  {
    sku: "17218",
    name: "EXTEMENT 100MG CHEWABLE TAB",
  },
  {
    sku: "21855",
    name: "EYLEA 40MG/ML INJECTION",
  },
  {
    sku: "21857",
    name: "EZ CREAM 15G",
  },
  {
    sku: "21856",
    name: "EZEDE 10MG",
  },
  {
    sku: "17574",
    name: "EZENOL 160MG",
  },
  {
    sku: "17576",
    name: "EZETROL 10MG",
  },
  {
    sku: "24954",
    name: "FAMODINE TABLET",
  },
  {
    sku: "25127",
    name: "FASTUM GEL 30G",
  },
  {
    sku: "27712",
    name: "FASTUM GEL 50G",
  },
  {
    sku: "17685",
    name: "FDC IOBRIM 0.0015 EYEDROPS 5ML",
  },
  {
    sku: "26433",
    name: "FEBRICOL 10'S XX",
  },
  {
    sku: "17554",
    name: "FEBRICOL RX",
  },
  {
    sku: "17239",
    name: "FEBURIC 80MG",
  },
  {
    sku: "17237",
    name: "FEBUTON 80MG",
  },
  {
    sku: "38683",
    name: "FEDAC",
  },
  {
    sku: "17716",
    name: "FEDAC SYRUP 60ML",
  },
  {
    sku: "17717",
    name: "FELOCOR 10MG",
  },
  {
    sku: "17049",
    name: "FELOCOR 5MG",
  },
  {
    sku: "17597",
    name: "FEMARA 2.5MG",
  },
  {
    sku: "17595",
    name: "FEMOSTON 45931",
  },
  {
    sku: "17596",
    name: "FEMOSTON 45932",
  },
  {
    sku: "17600",
    name: "FEMOSTON CONTI 45778",
  },
  {
    sku: "17598",
    name: "FENAC INJECTION AMPOULES 25MG/ML",
  },
  {
    sku: "17599",
    name: "FENAMON 10MG",
  },
  {
    sku: "45085",
    name: "FENO TAB",
  },
  {
    sku: "17524",
    name: "FENO TG 160MG",
  },
  {
    sku: "22840",
    name: "FENOLIP M 200MG",
  },
  {
    sku: "22839",
    name: "FENOSUP LIDOSE 160MG CAPSULE",
  },
  {
    sku: "16584",
    name: "FINAINTAS 5MG",
  },
  {
    sku: "16583",
    name: "FINAPECIA 1MG",
  },
  {
    sku: "16849",
    name: "FINASTIR 5MG",
  },
  {
    sku: "16074",
    name: "FINCAR 5MG 10",
  },
  {
    sku: "16831",
    name: "FINCAR 5MG",
  },
  {
    sku: "44994",
    name: "FIRIALTA 10MG",
  },
  {
    sku: "16141",
    name: "FIRIALTA 20MG",
  },
  {
    sku: "44823",
    name: "FIRMAGON POWDER AND SOLVENT FOR SOLUTION FOR",
  },
  {
    sku: "32732",
    name: "FLEGESIC GEL 0.05 50G",
  },
  {
    sku: "17326",
    name: "FLEXIN 20",
  },
  {
    sku: "46208",
    name: "FLIXONASE AQUEOUS NASAL SPRAY 50MCG 150 DOSES",
  },
  {
    sku: "17648",
    name: "FLIXOTIDE 125MCG EVOHALER 120 DOSES",
  },
  {
    sku: "17649",
    name: "FLIXOTIDE EVOHALER 50MCG 120D",
  },
  {
    sku: "17650",
    name: "FLUANXOL 0.5MG",
  },
  {
    sku: "17636",
    name: "FLUANXOL DEPOT INJECTION 20MG/ML",
  },
  {
    sku: "24051",
    name: "FLUARIX TETRA NORTH",
  },
  {
    sku: "17398",
    name: "FLUCOR DAY - ALCOHOL FREE XX",
  },
  {
    sku: "15947",
    name: "FLUCOR DAY PE XX",
  },
  {
    sku: "16890",
    name: "FLUCOR DAY PE",
  },
  {
    sku: "33921",
    name: "FLUCOR NIGHT",
  },
  {
    sku: "20761",
    name: "FLUCOZOL 150MG",
  },
  {
    sku: "19287",
    name: "FLUDAN CAPS 5MG",
  },
  {
    sku: "17661",
    name: "FLUHALT CAP 75MG",
  },
  {
    sku: "18344",
    name: "FLUHALT FOR ORAL SUSPENSION 60MG/5ML",
  },
  {
    sku: "42101",
    name: "FLUOVEX CAP 20MG",
  },
  {
    sku: "42100",
    name: "FLUTIFORM 250MCG/10MCG",
  },
  {
    sku: "46253",
    name: "FLUTIFORM 50MCG/5MCG",
  },
  {
    sku: "46255",
    name: "FLUTIFORM INHALER 125/5 120 PUFFS",
  },
  {
    sku: "46266",
    name: "FLUTIMATE NASAL SPRAY 50MCG 120 SPRAYS",
  },
  {
    sku: "21082",
    name: "FORKNOW 100'S",
  },
  {
    sku: "21081",
    name: "FORKNOW 10'S",
  },
  {
    sku: "33666",
    name: "FORTZAAR 100/25MG",
  },
  {
    sku: "33050",
    name: "FORXIGA 10MG",
  },
  {
    sku: "46716",
    name: "FOSAMAX PLUS 5600IU",
  },
  {
    sku: "38529",
    name: "FOSRENOL 1000MG",
  },
  {
    sku: "34938",
    name: "FOSRENOL 500MG",
  },
  {
    sku: "36259",
    name: "FOSTER NEXTHALER/DRY POWDER INHALER 100/6MCG",
  },
  {
    sku: "35939",
    name: "FRAIZERON",
  },
  {
    sku: "9283",
    name: "FRAXIPARINE INJECTION 0.3ML",
  },
  {
    sku: "17701",
    name: "FRISIUM 10MG",
  },
  {
    sku: "16333",
    name: "FUCICORT CREAM 15G",
  },
  {
    sku: "16334",
    name: "FUCICORT CREAM 5G",
  },
  {
    sku: "29099",
    name: "FUCID CREAM 15G",
  },
  {
    sku: "27213",
    name: "FUCID CREAM 15G 12",
  },
  {
    sku: "12975",
    name: "FUCID OINTMENT 15G",
  },
  {
    sku: "37730",
    name: "FUCID OINTMENT 15G 12",
  },
  {
    sku: "47011",
    name: "FUCIDIN CREAM 15G",
  },
  {
    sku: "12989",
    name: "FUCIDIN CREAM 5G",
  },
  {
    sku: "17826",
    name: "FUCIDIN H CREAM 15G",
  },
  {
    sku: "16312",
    name: "FUCIDIN H CREAM 5G",
  },
  {
    sku: "16313",
    name: "FUCIDIN OINTMENT 15G",
  },
  {
    sku: "16314",
    name: "FUCIDIN TABLETS",
  },
  {
    sku: "28689",
    name: "FUCITHALMIC VISC EYE DROPS 5G",
  },
  {
    sku: "29634",
    name: "FUSIDASOL CREAM 15G",
  },
  {
    sku: "25524",
    name: "FUSIX 40MG",
  },
  {
    sku: "33101",
    name: "FYCOMPA 2MG",
  },
  {
    sku: "26652",
    name: "FYCOMPA 4MG",
  },
  {
    sku: "35897",
    name: "GABAPIN 600MG",
  },
  {
    sku: "44234",
    name: "GALVUS 50MG",
  },
  {
    sku: "16464",
    name: "GALVUS MET 50/1000MG",
  },
  {
    sku: "17923",
    name: "GALVUS MET 50/500MG",
  },
  {
    sku: "21745",
    name: "GALVUS MET 50/850MG",
  },
  {
    sku: "43950",
    name: "GANATON 50MG",
  },
  {
    sku: "24079",
    name: "GANFORT EYE DROPS 3ML",
  },
  {
    sku: "16201",
    name: "GANFORT PF 0.3/5 EYE DROPS 30 X 0.4ML",
  },
  {
    sku: "16200",
    name: "GARASENT 80MG INJ",
  },
  {
    sku: "17352",
    name: "GARBOSE 100MG",
  },
  {
    sku: "37811",
    name: "GARBOSE 50MG",
  },
  {
    sku: "16202",
    name: "GEFITINIB INTEGA 250MG",
  },
  {
    sku: "16207",
    name: "GEFITINIB SANDOZ 250MG",
  },
  {
    sku: "16206",
    name: "GENESSA 250MG",
  },
  {
    sku: "16205",
    name: "GENEXIBAN 2.5MG",
  },
  {
    sku: "47151",
    name: "GENOTROPIN GQ 120MG",
  },
  {
    sku: "16899",
    name: "GENOTROPIN GQ 12MG",
  },
  {
    sku: "27674",
    name: "GENTA-DEX 5ML",
  },
  {
    sku: "17416",
    name: "GENTA-DEX 5ML X 10",
  },
  {
    sku: "38490",
    name: "GENTAMICIN-POS 5ML",
  },
  {
    sku: "17415",
    name: "GENTAMICIN-POS EYE OINTMENT 2.5G",
  },
  {
    sku: "23842",
    name: "GIOTRIF 30MG",
  },
  {
    sku: "29532",
    name: "GIOTRIF 40MG",
  },
  {
    sku: "41906",
    name: "GLANATEC OPHTHALMIC SOLUTION 0.004 5ML",
  },
  {
    sku: "41905",
    name: "GLENCET 5MG",
  },
  {
    sku: "17374",
    name: "GLENCET 5MG 5",
  },
  {
    sku: "17375",
    name: "GLENCET M FILM-COATED TABLET",
  },
  {
    sku: "17380",
    name: "GLENMARK BUDESMA",
  },
  {
    sku: "17381",
    name: "GLENMARK KETO PLUS SHAMPOO 60ML",
  },
  {
    sku: "17379",
    name: "GLENMARK RYALTRIS 120MD",
  },
  {
    sku: "17764",
    name: "GLICLADA MR 30MG",
  },
  {
    sku: "17763",
    name: "GLICLAZIDE 80MG",
  },
  {
    sku: "17378",
    name: "GLIMETOR 2MG TABLETS",
  },
  {
    sku: "17376",
    name: "GLIVEC 400MG",
  },
  {
    sku: "15976",
    name: "GLIX 5MG",
  },
  {
    sku: "31295",
    name: "GLUCOMIN G 500/5",
  },
  {
    sku: "46129",
    name: "GLUCOMIN G 500/5 12",
  },
  {
    sku: "30291",
    name: "GLUCOPHAGE 1000MG",
  },
  {
    sku: "22898",
    name: "GLUCOPHAGE 500MG",
  },
  {
    sku: "46680",
    name: "GLUCOPHAGE 850MG",
  },
  {
    sku: "47006",
    name: "GLUCOPHAGE XR 1000MG",
  },
  {
    sku: "40756",
    name: "GLUCOPHAGE XR 500MG",
  },
  {
    sku: "33582",
    name: "GLUCOPHAGE XR 750MG",
  },
  {
    sku: "36090",
    name: "GLUCOVANCE 500/2.5",
  },
  {
    sku: "47135",
    name: "GLUCOVANCE 500/5",
  },
  {
    sku: "41749",
    name: "GLUCOXIT 500MG",
  },
  {
    sku: "21226",
    name: "GLUMET DC",
  },
  {
    sku: "21225",
    name: "GLUMET XR 500MG",
  },
  {
    sku: "17443",
    name: "GLUMET XR 750MG",
  },
  {
    sku: "17726",
    name: "GLUMET-FORTE 100'S",
  },
  {
    sku: "37812",
    name: "GLUMET-FORTE 1'S",
  },
  {
    sku: "15673",
    name: "GLUMET-FORTE 20'S",
  },
  {
    sku: "18758",
    name: "GLUVECRON MR 30MG",
  },
  {
    sku: "40477",
    name: "GLYMET 5/500MG",
  },
  {
    sku: "32287",
    name: "GLYXAMBI 10MG+5MG",
  },
  {
    sku: "40482",
    name: "GLYXAMBI 25MG+5MG",
  },
  {
    sku: "15876",
    name: "GOUTNOR 0.5MG",
  },
  {
    sku: "17025",
    name: "GOUTNOR 0.6MG",
  },
  {
    sku: "16724",
    name: "GRACURE DESTACURE SYRUP 2.5MG/5ML 60ML",
  },
  {
    sku: "16722",
    name: "GRACURE GELOXIB 200MG",
  },
  {
    sku: "15880",
    name: "GUADEX LINCTUS 90ML",
  },
  {
    sku: "15882",
    name: "GUADEX LINCTUS 90ML 48",
  },
  {
    sku: "15884",
    name: "HADOL 5MG",
  },
  {
    sku: "15883",
    name: "HARNAL 0.4MG OCAS",
  },
  {
    sku: "15885",
    name: "HARTMANN SOLUTION 1L",
  },
  {
    sku: "18974",
    name: "HARTMANN'S SOLUTION COMPOUND SODIUM LACTATE 500ML",
  },
  {
    sku: "40311",
    name: "HCQS TAB 200MG",
  },
  {
    sku: "29426",
    name: "HEAMIC-T",
  },
  {
    sku: "29427",
    name: "HEAMOFER IV",
  },
  {
    sku: "22713",
    name: "HEPURI F.C TABLET 0.5MG",
  },
  {
    sku: "22714",
    name: "HERBESSER 30MG",
  },
  {
    sku: "18889",
    name: "HERBESSER 60MG",
  },
  {
    sku: "20974",
    name: "HERBESSER R 100MG",
  },
  {
    sku: "20985",
    name: "HERBESSER R 200MG",
  },
  {
    sku: "28528",
    name: "HERBESSER S.R. 90MG",
  },
  {
    sku: "28531",
    name: "HERPESAN GEL 5G",
  },
  {
    sku: "17409",
    name: "HETERO ALZER 10MG",
  },
  {
    sku: "37829",
    name: "HETERO OLMESAR 20MG",
  },
  {
    sku: "19569",
    name: "HETERO OLMESAR 40MG",
  },
  {
    sku: "37874",
    name: "HEXAXIM SUSPENSION FOR INJECTION 0.5ML",
  },
  {
    sku: "20322",
    name: "HIDRASEC 100MG",
  },
  {
    sku: "38046",
    name: "HIDRASEC 10MG INFANT SAC",
  },
  {
    sku: "38531",
    name: "HIDRASEC 30MG CHILDREN SAC",
  },
  {
    sku: "36706",
    name: "HIPROGIN INJ 250MG/ ML AMP",
  },
  {
    sku: "17401",
    name: "HIRAPINE 200MG",
  },
  {
    sku: "17402",
    name: "HIRSUTIN 5MG",
  },
  {
    sku: "17400",
    name: "HOE BENOSONE CREAM 15G",
  },
  {
    sku: "24981",
    name: "HOE BENOSONE OINTMENT 15G",
  },
  {
    sku: "32828",
    name: "HOE BEPROGEL TOPICAL SOLUTION 30ML",
  },
  {
    sku: "25248",
    name: "HOE BEPROGENT CREAM 15G",
  },
  {
    sku: "25247",
    name: "HOE BEPROGENT OINTMENT 15G",
  },
  {
    sku: "43152",
    name: "HOE BEPROSALIC LOTION 30ML",
  },
  {
    sku: "37017",
    name: "HOE BEPROSALIC OINTMENT 15G",
  },
  {
    sku: "33138",
    name: "HOE BEPROSALIC OINTMENT 15G X 12",
  },
  {
    sku: "17695",
    name: "HOE BEPROSONE CREAM 15G",
  },
  {
    sku: "17696",
    name: "HOE BEPROSONE OINTMENT 15G",
  },
  {
    sku: "17697",
    name: "HOE CANDACORT CREAM 15G",
  },
  {
    sku: "17426",
    name: "HOE CLODERM CREAM 15G",
  },
  {
    sku: "17427",
    name: "HOE CLODERM OINTMENT 15G",
  },
  {
    sku: "17428",
    name: "HOE CLODERM SCALP APPLICATION 0.0005 30ML",
  },
  {
    sku: "16504",
    name: "HOE CLODERM SHAMPOO 0.0005 60ML",
  },
  {
    sku: "16505",
    name: "HOE DECOCORT CREAM 15G",
  },
  {
    sku: "16506",
    name: "HOE DECOZOL CREAM 15G",
  },
  {
    sku: "16507",
    name: "HOE DECOZOL ORAL GEL 15G",
  },
  {
    sku: "16508",
    name: "HOE DEZOR PLUS SHAMPOO 120ML",
  },
  {
    sku: "16509",
    name: "HOE DEZOR PLUS SHAMPOO 60ML",
  },
  {
    sku: "16749",
    name: "HOE ECOCORT CREAM 15G",
  },
  {
    sku: "16750",
    name: "HOE ECOCORT CREAM 15G X 12",
  },
  {
    sku: "16751",
    name: "HOE ELONIDE SPRAY 140DOSE",
  },
  {
    sku: "17301",
    name: "HOE ELONIDE SPRAY 60 DOSE",
  },
  {
    sku: "41462",
    name: "HOE ELOSONE CREAM 15G",
  },
  {
    sku: "40379",
    name: "HOE ELOSONE LOTION 30ML",
  },
  {
    sku: "40380",
    name: "HOE ELOSONE OINTMENT 15G",
  },
  {
    sku: "40364",
    name: "HOE EZENIDE LOTION 30ML",
  },
  {
    sku: "40365",
    name: "HOE FLUTINIDE NASAL SPRAY 50MCG 120DOSES",
  },
  {
    sku: "47005",
    name: "HOE FOBAN CREAM 15G",
  },
  {
    sku: "26415",
    name: "HOE FOBAN CREAM 5G",
  },
  {
    sku: "17704",
    name: "HOE FOBAN HYDRO CREAM 15G",
  },
  {
    sku: "17708",
    name: "HOE FOBAN HYDRO OINTMENT 15G",
  },
  {
    sku: "17709",
    name: "HOE FOBAN OINTMENT 15G",
  },
  {
    sku: "17710",
    name: "HOE FOBAN OINTMENT 5G",
  },
  {
    sku: "17705",
    name: "HOE FOBANCORT CREAM 15G",
  },
  {
    sku: "17706",
    name: "HOE FOBANCORT CREAM 5G",
  },
  {
    sku: "17707",
    name: "HOE FOBANCORT OINTMENT 15G",
  },
  {
    sku: "35679",
    name: "HOE GENTAMICIN CREAM 15G",
  },
  {
    sku: "33621",
    name: "HOE H-CORT CREAM 15G",
  },
  {
    sku: "25800",
    name: "HOE H-CORT OINTMENT 15G",
  },
  {
    sku: "32797",
    name: "HOE ORREPASTE 0.001 5G",
  },
  {
    sku: "13873",
    name: "HOE OXY-NASE 0.00025 PAEDIATRIC NASAL DROPS 10ML",
  },
  {
    sku: "13875",
    name: "HOE OXY-NASE 0.00025 PAEDIATRIC NASAL SPRAY 15ML",
  },
  {
    sku: "16190",
    name: "HOE OXY-NASE 0.0005 NASAL DROPS 10ML",
  },
  {
    sku: "16199",
    name: "HOE OXY-NASE 0.0005 NASAL SPRAY 15ML",
  },
  {
    sku: "16233",
    name: "HOE T3 ADA GEL 25G",
  },
  {
    sku: "16234",
    name: "HOE T3 MYCIN GEL 25G",
  },
  {
    sku: "37832",
    name: "HOE T3 MYCIN LOTION 30ML",
  },
  {
    sku: "17317",
    name: "HOE U-CLOSONE CREAM 15G",
  },
  {
    sku: "17316",
    name: "HOE U-CLOSONE OINTMENT 15G",
  },
  {
    sku: "16225",
    name: "HORF LOZENGES",
  },
  {
    sku: "16179",
    name: "HOVID ACTIHIST SYRUP 120ML",
  },
  {
    sku: "16191",
    name: "HOVID ALLOPURINOL 100MG TABLET",
  },
  {
    sku: "16226",
    name: "HOVID AMOXICAP 500MG",
  },
  {
    sku: "22532",
    name: "HOVID AMOXIGRAN 125MG GRANULES 60ML",
  },
  {
    sku: "34291",
    name: "HOVID AMOXIGRAN GRANULES 125MG/5ML",
  },
  {
    sku: "16232",
    name: "HOVID BECLOVID-C CREAM 15G",
  },
  {
    sku: "37833",
    name: "HOVID BETASONE CREAM 15G",
  },
  {
    sku: "30257",
    name: "HOVID BUTYLIN 1.5MG/5ML SYRUP",
  },
  {
    sku: "47474",
    name: "HOVID CARZEPIN 200MG",
  },
  {
    sku: "13877",
    name: "HOVID CELECOXIB 200MG",
  },
  {
    sku: "13819",
    name: "HOVID CLAMIDE 5MG",
  },
  {
    sku: "16194",
    name: "HOVID CLOFENAC 50MG",
  },
  {
    sku: "16945",
    name: "HOVID CLOFENAC SR 100MG",
  },
  {
    sku: "16987",
    name: "HOVID CLOPIVID 75MG",
  },
  {
    sku: "16955",
    name: "HOVID CLOXACAP 500MG",
  },
  {
    sku: "16185",
    name: "HOVID COLODIUM 2MG",
  },
  {
    sku: "16518",
    name: "HOVID DAPAVID 10MG",
  },
  {
    sku: "16823",
    name: "HOVID DAPAVID 10MG 4",
  },
  {
    sku: "17100",
    name: "HOVID DIABETMIN 500MG",
  },
  {
    sku: "37834",
    name: "HOVID DIABETMIN 850MG",
  },
  {
    sku: "13816",
    name: "HOVID DIABETMIN 850MG 10",
  },
  {
    sku: "15913",
    name: "HOVID DIABETMIN RETARD",
  },
  {
    sku: "16189",
    name: "HOVID DIABETMIN XR 500MG",
  },
  {
    sku: "47662",
    name: "HOVID DIABETMIN XR 750MG",
  },
  {
    sku: "15828",
    name: "HOVID DIAMIDE 5/500",
  },
  {
    sku: "44679",
    name: "HOVID DIFLUVID 150MG CAP",
  },
  {
    sku: "16258",
    name: "HOVID DISUF-B CREAM 15G",
  },
  {
    sku: "18539",
    name: "HOVID DOPATAB M250",
  },
  {
    sku: "47475",
    name: "HOVID ERETAF ORODISPERSIBLE FILMS 20MG",
  },
  {
    sku: "17614",
    name: "HOVID ESCITALOPRAM TAB 10MG",
  },
  {
    sku: "19199",
    name: "HOVID FAMOTIDINE 20MG",
  },
  {
    sku: "18020",
    name: "HOVID FAMOTIDINE 40MG",
  },
  {
    sku: "15854",
    name: "HOVID FELXICAM 20MG",
  },
  {
    sku: "18611",
    name: "HOVID FLOVID OFLOXACIN 200MG",
  },
  {
    sku: "17960",
    name: "HOVID GENTAMICIN 0.001 CREAM 15G",
  },
  {
    sku: "47693",
    name: "HOVID GLIMARYL 2MG",
  },
  {
    sku: "17096",
    name: "HOVID GLIMICRON 80MG",
  },
  {
    sku: "17095",
    name: "HOVID GRISEOFULVIN 500MG FILM-COATED",
  },
  {
    sku: "15953",
    name: "HOVID HORAMINE TABLET 4MG",
  },
  {
    sku: "46516",
    name: "HOVID HORGESIC",
  },
  {
    sku: "46515",
    name: "HOVID HOSEDYL DM 120ML",
  },
  {
    sku: "15859",
    name: "HOVID HOSOLVON DM ELIXIR 120ML",
  },
  {
    sku: "15860",
    name: "HOVID HOSOLVON TAB",
  },
  {
    sku: "40469",
    name: "HOVID HOSOLVON TAB 10X",
  },
  {
    sku: "40468",
    name: "HOVID HOVA EXPECTORANT",
  },
  {
    sku: "15861",
    name: "HOVID HOVASC 10MG",
  },
  {
    sku: "17720",
    name: "HOVID HOVASC 5MG",
  },
  {
    sku: "18023",
    name: "HOVID INOX",
  },
  {
    sku: "34583",
    name: "HOVID LIPIDUCE 20MG",
  },
  {
    sku: "20518",
    name: "HOVID MOFECON 500MG",
  },
  {
    sku: "20519",
    name: "HOVID MONTELAIR 10MG F/C",
  },
  {
    sku: "47285",
    name: "HOVID MONTELAIR 5MG",
  },
  {
    sku: "32598",
    name: "HOVID NEO-BETASONE CREAM 15G",
  },
  {
    sku: "37477",
    name: "HOVID NEOMYCIN CREAM 0.005 15G",
  },
  {
    sku: "15998",
    name: "HOVID OMEZOLE 20MG",
  },
  {
    sku: "16000",
    name: "HOVID PENGESIC 50MG",
  },
  {
    sku: "17115",
    name: "HOVID ROSUVASTATIN 20MG",
  },
  {
    sku: "32991",
    name: "HOVID ROSUVASTATIN 20MG 3",
  },
  {
    sku: "32993",
    name: "HOVID SETROF 50MG",
  },
  {
    sku: "17225",
    name: "HOVID SMOOD 10MG",
  },
  {
    sku: "15867",
    name: "HOVID STAVID 20MG",
  },
  {
    sku: "17094",
    name: "HOVID TERNOLOL 100MG FILM-COATED",
  },
  {
    sku: "16086",
    name: "HOVID TERNOLOL 50MG FILM-COATED",
  },
  {
    sku: "16950",
    name: "HOVID VENTAMOL EXPECTORANT 100ML",
  },
  {
    sku: "16949",
    name: "HOVID VIREST 0.05 CREAM 5G",
  },
  {
    sku: "21530",
    name: "HUMALOG 100 U/ML KWIKPEN 3ML",
  },
  {
    sku: "18027",
    name: "HUMALOG MIX25 100 U/ML KWIKPEN",
  },
  {
    sku: "18028",
    name: "HUMALOG MIX50 100 U/ML KWIKPEN",
  },
  {
    sku: "18029",
    name: "HYDROCHLORZIDE 50MG",
  },
  {
    sku: "18026",
    name: "HYDROCORTISON ORION TAB 10MG",
  },
  {
    sku: "24443",
    name: "HYDROCORTISONE 100MG INJECTION",
  },
  {
    sku: "24445",
    name: "HYOMIDE TABLET 10MG",
  },
  {
    sku: "43102",
    name: "HYRIMOZ 40MG/0.8ML SOLUTION FOR INJECTION IN PRE-FILLED PEN",
  },
  {
    sku: "47122",
    name: "HYTRIN 2MG",
  },
  {
    sku: "47554",
    name: "HYTRIN 5MG",
  },
  {
    sku: "17344",
    name: "HYZAAR 100/12.5MG",
  },
  {
    sku: "16800",
    name: "HYZAAR 50/12.5MG",
  },
  {
    sku: "43034",
    name: "IBRANCE 100MG",
  },
  {
    sku: "43036",
    name: "IBRANCE 75MG",
  },
  {
    sku: "22069",
    name: "IBRANCE CAP 125MG",
  },
  {
    sku: "22070",
    name: "IBRELYN 100MG",
  },
  {
    sku: "22068",
    name: "IBUPROFEN 400MG",
  },
  {
    sku: "21005",
    name: "IFIMOL IV PARACETAMOL SOLUTION FOR IV INFUSION 10MG/ML",
  },
  {
    sku: "21006",
    name: "IKERVIS 1MG/ML",
  },
  {
    sku: "17346",
    name: "ILIADIN NASAL DROPS FOR ADULTS AND SCHOOL CHILDREN",
  },
  {
    sku: "17347",
    name: "ILIADIN NASAL DROPS FOR INFANTS 0.0001 5ML",
  },
  {
    sku: "17348",
    name: "ILIADIN NASAL DROPS FOR SMALL CHILDREN 0.00025 10ML",
  },
  {
    sku: "16634",
    name: "IMDEX 60MG CR",
  },
  {
    sku: "16631",
    name: "IMDUR 30MG",
  },
  {
    sku: "15833",
    name: "IMDUR 60MG",
  },
  {
    sku: "17838",
    name: "IMEKS DOPROCT RECTAL OINTMENT 10GM",
  },
  {
    sku: "17882",
    name: "IMEXA POWDER FOR ORAL SUSPENSION 200MG/5ML",
  },
  {
    sku: "18721",
    name: "IMIGRAN 50MG",
  },
  {
    sku: "18722",
    name: "IMIPENEM/CILASTATIN KABI 500MG/500MG POWDER FOR INFUSION",
  },
  {
    sku: "17240",
    name: "IMODIUM 2MG",
  },
  {
    sku: "28153",
    name: "IMOVANE 7.5MG",
  },
  {
    sku: "26487",
    name: "IMPLANON NXT 68MG",
  },
  {
    sku: "45060",
    name: "IMURAN 50MG",
  },
  {
    sku: "16374",
    name: "INDECIN CAPSULE 25MG",
  },
  {
    sku: "17545",
    name: "INDERAL 10MG",
  },
  {
    sku: "17544",
    name: "INDERAL 40MG",
  },
  {
    sku: "16463",
    name: "INFUSOL D50",
  },
  {
    sku: "16461",
    name: "INFUSOL HSD5",
  },
  {
    sku: "31370",
    name: "INFUSOL NS",
  },
  {
    sku: "31988",
    name: "INFUSOL NS SODIUM CHLORIDE 0.009 1000ML",
  },
  {
    sku: "31080",
    name: "INFUSOL NSD5",
  },
  {
    sku: "47145",
    name: "INFUSOL W WATER FOR INJECTIONS BP 10ML",
  },
  {
    sku: "40424",
    name: "INFUSOL W WATER FOR INJECTIONS BP 10ML X",
  },
  {
    sku: "40425",
    name: "INJECSOL MAGNESIUM SULPHATE INJECTION 5ML X",
  },
  {
    sku: "18759",
    name: "INNOHEP INJ 3500/0.35ML",
  },
  {
    sku: "37835",
    name: "INOVELON 60'S",
  },
  {
    sku: "18760",
    name: "INSPRA 50MG",
  },
  {
    sku: "17405",
    name: "INTACAPE 500MG 12",
  },
  {
    sku: "43183",
    name: "INTASZORYL 3MG",
  },
  {
    sku: "449",
    name: "INTRIL SR 1.5MG",
  },
  {
    sku: "35",
    name: "INVANZ INJECTION / INFUSION",
  },
  {
    sku: "448",
    name: "INVEGA 6MG",
  },
  {
    sku: "16644",
    name: "INVOKANA 100MG",
  },
  {
    sku: "16645",
    name: "INVOKANA 300MG",
  },
  {
    sku: "16643",
    name: "INVORIL 10MG",
  },
  {
    sku: "16639",
    name: "INVORIL 5MG",
  },
  {
    sku: "16640",
    name: "IOTIM EYE DROP 0.005",
  },
  {
    sku: "16641",
    name: "IPOLIPID 300 CAP",
  },
  {
    sku: "46077",
    name: "IQNYDE 100MG",
  },
  {
    sku: "16053",
    name: "IRBEMAC 150MG",
  },
  {
    sku: "15955",
    name: "IRBEMAC 300MG",
  },
  {
    sku: "15956",
    name: "IRBEMAC H 300/12.5MG",
  },
  {
    sku: "24081",
    name: "IRESSA 250MG",
  },
  {
    sku: "24080",
    name: "ISOMONIT 60 RETARD",
  },
  {
    sku: "33014",
    name: "ISOPTO CARPINE 0.02 STERILE OPHTHALMIC SOLUTION 15ML",
  },
  {
    sku: "5093",
    name: "ISORADIN CREAM 10G",
  },
  {
    sku: "5095",
    name: "IVASWIFT 5MG",
  },
  {
    sku: "37838",
    name: "IXIME TAB 400MG",
  },
  {
    sku: "17147",
    name: "IZBA EYE DROP",
  },
  {
    sku: "16536",
    name: "JANACIN 100'S",
  },
  {
    sku: "16537",
    name: "JANACIN 1'S***",
  },
  {
    sku: "16538",
    name: "JANACIN 4'S***",
  },
  {
    sku: "16539",
    name: "JANUMET 50/1000MG",
  },
  {
    sku: "45083",
    name: "JANUMET 50/500MG",
  },
  {
    sku: "45594",
    name: "JANUMET 50/850MG",
  },
  {
    sku: "45306",
    name: "JANUMET XR 100/1000MG",
  },
  {
    sku: "31262",
    name: "JANUMET XR 50/1000MG",
  },
  {
    sku: "31582",
    name: "JANUMET XR 50/500MG",
  },
  {
    sku: "21794",
    name: "JANUVIA 100MG",
  },
  {
    sku: "33126",
    name: "JANUVIA 25MG",
  },
  {
    sku: "25576",
    name: "JANUVIA 50MG",
  },
  {
    sku: "25602",
    name: "JARDIANCE 10MG",
  },
  {
    sku: "44266",
    name: "JARDIANCE 25MG",
  },
  {
    sku: "38609",
    name: "JARDIANCE DUO 12.5/1000",
  },
  {
    sku: "21232",
    name: "JARDIANCE DUO 12.5/500",
  },
  {
    sku: "44624",
    name: "JARDIANCE DUO 12.5/850",
  },
  {
    sku: "17727",
    name: "JARDIANCE DUO 5/500",
  },
  {
    sku: "16216",
    name: "KALIMATE 5G",
  },
  {
    sku: "37139",
    name: "KAMAGRA 100MG",
  },
  {
    sku: "40061",
    name: "KAMIREN XL 4MG",
  },
  {
    sku: "28615",
    name: "KANARB 120MG",
  },
  {
    sku: "16275",
    name: "KANOLONE ORAL BASE 5G",
  },
  {
    sku: "16277",
    name: "KANOLONE ORAL BASE 5G X 12",
  },
  {
    sku: "16276",
    name: "KCK MICO CREAM 15G",
  },
  {
    sku: "6174",
    name: "KCK MICO CREAM 20G",
  },
  {
    sku: "6172",
    name: "KCK REXOLONE SYRUP 100ML 3MG/5ML",
  },
  {
    sku: "6173",
    name: "KCK REXOM HYDROCORTISONE CREAM 0.01 15G",
  },
  {
    sku: "6168",
    name: "KEFENTECH ANALGESIC PLASTER",
  },
  {
    sku: "6166",
    name: "KEFENTECH ANALGESIC PLASTER 20",
  },
  {
    sku: "6167",
    name: "KENHANCER PLASTER",
  },
  {
    sku: "6169",
    name: "KENO ORAL PASTE 3G",
  },
  {
    sku: "6170",
    name: "KENO ORAL PASTE 3G X 12",
  },
  {
    sku: "19897",
    name: "KEPPRA 250MG",
  },
  {
    sku: "19931",
    name: "KEPPRA 500MG",
  },
  {
    sku: "17012",
    name: "KEPPRA ORAL SOLUTION 100MG 300ML CASH ONLY",
  },
  {
    sku: "17013",
    name: "KETESSE 10'S",
  },
  {
    sku: "17011",
    name: "KETESSE 1'S",
  },
  {
    sku: "44366",
    name: "KETESSE 20'S",
  },
  {
    sku: "44367",
    name: "KETOSTERIL 100'S",
  },
  {
    sku: "25903",
    name: "KETOSTERIL 1'S",
  },
  {
    sku: "25904",
    name: "KETOSTERIL 20'S",
  },
  {
    sku: "23106",
    name: "KETOTOP PLASTER 30MG",
  },
  {
    sku: "25901",
    name: "KETOTOP PLASTER 30MG 20",
  },
  {
    sku: "25902",
    name: "KIDIMAC 15ML",
  },
  {
    sku: "22912",
    name: "KLACID FC 500MG",
  },
  {
    sku: "29188",
    name: "KLACID GRANULES 250MG/5ML 60ML",
  },
  {
    sku: "29183",
    name: "KLACID HP7",
  },
  {
    sku: "29184",
    name: "KLACID MR",
  },
  {
    sku: "29186",
    name: "KLORAXIN EYE OINT",
  },
  {
    sku: "29187",
    name: "KNOWFUL 800MG",
  },
  {
    sku: "29181",
    name: "KNOWFUL INJECTION 200MG/ML 10AMPOULES",
  },
  {
    sku: "29179",
    name: "KOGREL 75MG",
  },
  {
    sku: "27731",
    name: "KOMBIGLYZE XR 5/1000MG",
  },
  {
    sku: "21815",
    name: "KOMBIGLYZE XR 5/500MG",
  },
  {
    sku: "21814",
    name: "KONZERT CREAM 20G",
  },
  {
    sku: "30665",
    name: "KOP 0.025 GEL 20MG",
  },
  {
    sku: "17552",
    name: "KOTRA MINOX 0.05 60ML",
  },
  {
    sku: "37839",
    name: "KRISOVIN 500MG",
  },
  {
    sku: "37916",
    name: "KRKA DASSELTA 5MG",
  },
  {
    sku: "46088",
    name: "KRKA DASSELTA 5MG 10",
  },
  {
    sku: "6777",
    name: "KRKA GLICLADA 60MG MODIFIED RELEASE",
  },
  {
    sku: "16070",
    name: "KRKA MARIXINO 10MG",
  },
  {
    sku: "16069",
    name: "KRKA MARIXINO 10MG 4",
  },
  {
    sku: "37841",
    name: "KRYXANA",
  },
  {
    sku: "27344",
    name: "KYTRIL 1MG",
  },
  {
    sku: "27345",
    name: "KYTRON",
  },
  {
    sku: "27346",
    name: "LAKAN INJECTION 0.01 10ML",
  },
  {
    sku: "17139",
    name: "LAMICTAL 100MG",
  },
  {
    sku: "17140",
    name: "LAMICTAL 25MG",
  },
  {
    sku: "25151",
    name: "LAMICTAL 50MG",
  },
  {
    sku: "20993",
    name: "LAMICTAL DISPERSIBLE TABLET 5MG",
  },
  {
    sku: "17876",
    name: "LAMITOR 100MG",
  },
  {
    sku: "16302",
    name: "LAMITOR 50MG",
  },
  {
    sku: "16304",
    name: "LAMIVUDINE 150MG & ZIDOVUDINE 300MG",
  },
  {
    sku: "32626",
    name: "LANOLONE 100'S",
  },
  {
    sku: "32625",
    name: "LANOLONE 10'S",
  },
  {
    sku: "44810",
    name: "LANOXIN 0.0625MG",
  },
  {
    sku: "23835",
    name: "LANOXIN 0.25MG",
  },
  {
    sku: "16280",
    name: "LANPRO 30MG",
  },
  {
    sku: "16279",
    name: "LANZOTRED CAP 40MG",
  },
  {
    sku: "25606",
    name: "LASIX 40MG",
  },
  {
    sku: "19852",
    name: "LATUDA 20MG",
  },
  {
    sku: "16931",
    name: "LATUDA 40MG",
  },
  {
    sku: "47235",
    name: "LATUDA 80MG",
  },
  {
    sku: "17227",
    name: "LENANGIO 5",
  },
  {
    sku: "19254",
    name: "LENANGION 15MG",
  },
  {
    sku: "19631",
    name: "LENVIMA 10MG",
  },
  {
    sku: "17643",
    name: "LENVIMA 4MG",
  },
  {
    sku: "22447",
    name: "LENZETTO 1.53MG/SPRAY TRANSDERMAL SPRAY, SOLUTION",
  },
  {
    sku: "22446",
    name: "LETARA 2.5 MG TABLETS",
  },
  {
    sku: "22479",
    name: "LETRONAT 2.5MG",
  },
  {
    sku: "36593",
    name: "LEVEMIR FLEXPEN 100IU/ML 3ML",
  },
  {
    sku: "45911",
    name: "LEVET 500MG",
  },
  {
    sku: "28940",
    name: "LEVOMED 250/25",
  },
  {
    sku: "28938",
    name: "LEVOZIN",
  },
  {
    sku: "46310",
    name: "LEXAPRO 10MG",
  },
  {
    sku: "37917",
    name: "LEXOTAN 1.5MG",
  },
  {
    sku: "42310",
    name: "LIDONOSTRUM 0.1 W/V TOPICAL SPRAY 80G",
  },
  {
    sku: "29250",
    name: "LIGNOPAD 0.05 MEDICAL PLASTER",
  },
  {
    sku: "17699",
    name: "LINCOSA INJECTION 300MG/ML VIAL",
  },
  {
    sku: "37492",
    name: "LIOBAC 10MG",
  },
  {
    sku: "25834",
    name: "LIORESAL TABS 10MG",
  },
  {
    sku: "9279",
    name: "LIPANTHYL PENTA 145MG",
  },
  {
    sku: "41847",
    name: "LIPISTAD 10MG",
  },
  {
    sku: "19291",
    name: "LIPITOR 10MG",
  },
  {
    sku: "26951",
    name: "LIPITOR 20MG",
  },
  {
    sku: "16983",
    name: "LIPITOR 40MG",
  },
  {
    sku: "18908",
    name: "LIPITOR 80MG",
  },
  {
    sku: "18906",
    name: "LIPOTHIN 200",
  },
  {
    sku: "18911",
    name: "LISINOPRIL STADA 20MG",
  },
  {
    sku: "45191",
    name: "LIVALO 2MG",
  },
  {
    sku: "37881",
    name: "LIVALO 4MG",
  },
  {
    sku: "34340",
    name: "LIVIAL 2.5MG",
  },
  {
    sku: "40668",
    name: "LIXIANA 30MG",
  },
  {
    sku: "30307",
    name: "LIXIANA 60MG",
  },
  {
    sku: "46757",
    name: "LIZ 28'S",
  },
  {
    sku: "46758",
    name: "LIZA 21'",
  },
  {
    sku: "34727",
    name: "LOCANA INJECTION 0.02 50ML X",
  },
  {
    sku: "17538",
    name: "LOCOA 40MG TRANSDERMAL PATCH 10 X",
  },
  {
    sku: "18925",
    name: "LOCOA 40MG TRANSDERMAL PATCH",
  },
  {
    sku: "17001",
    name: "LODOZ 2.5MG/6.25MG",
  },
  {
    sku: "17066",
    name: "LODOZ 5MG/6.25MG",
  },
  {
    sku: "3277",
    name: "LOETTE 21'S",
  },
  {
    sku: "42127",
    name: "LOFRAL 10MG",
  },
  {
    sku: "7073",
    name: "LOFRAL 5MG",
  },
  {
    sku: "26307",
    name: "LOKELMA POWDER FOR ORAL SUSPENSION 5G X 30",
  },
  {
    sku: "18929",
    name: "LOMODIUM 1000'S",
  },
  {
    sku: "17557",
    name: "LOMODIUM 10'S",
  },
  {
    sku: "18928",
    name: "LONSURF TABLET 15MG/6.14MG",
  },
  {
    sku: "30050",
    name: "LONSURF TABLET 20MG/8.19MG",
  },
  {
    sku: "16575",
    name: "LORAMIDE 10'S",
  },
  {
    sku: "16576",
    name: "LORAMIDE 10'S X 50",
  },
  {
    sku: "16577",
    name: "LORASTAD TABLET 10MG",
  },
  {
    sku: "16579",
    name: "LORAZIN10MG 10 X",
  },
  {
    sku: "18930",
    name: "LORAZIN10MG 10'S",
  },
  {
    sku: "18932",
    name: "LORISTA H 50MG/12.5MG",
  },
  {
    sku: "16580",
    name: "LORISTA HD 100MG/25MG",
  },
  {
    sku: "18934",
    name: "LORVIQUA 100MG",
  },
  {
    sku: "16581",
    name: "LORVIQUA 25MG",
  },
  {
    sku: "18933",
    name: "LOTEMAX EYE DROP 5ML",
  },
  {
    sku: "18938",
    name: "LOVASTIN 20MG",
  },
  {
    sku: "17615",
    name: "LOXOTOP PAP 100MG PATCH",
  },
  {
    sku: "18937",
    name: "LUMIGAN 0.0001 3ML",
  },
  {
    sku: "18939",
    name: "LURATA 40MG TABLET",
  },
  {
    sku: "18940",
    name: "LUSEFI 2.5MG",
  },
  {
    sku: "41956",
    name: "LUSEFI 5MG",
  },
  {
    sku: "41959",
    name: "LUVOX 100MG",
  },
  {
    sku: "15950",
    name: "LUVOX 50MG",
  },
  {
    sku: "36151",
    name: "LYGABA CAPSULE 75MG",
  },
  {
    sku: "43819",
    name: "LYNPARZA 150MG",
  },
  {
    sku: "6521",
    name: "LYRICA 150MG",
  },
  {
    sku: "36178",
    name: "LYRICA 50MG",
  },
  {
    sku: "17243",
    name: "LYRICA 75MG",
  },
  {
    sku: "17242",
    name: "MACMENTA 20MG",
  },
  {
    sku: "18307",
    name: "MADOPAR 250MG",
  },
  {
    sku: "18944",
    name: "MADOPAR HBS 125MG",
  },
  {
    sku: "18943",
    name: "MAGRILAN 20MG",
  },
  {
    sku: "18946",
    name: "MALARONE 12'S",
  },
  {
    sku: "6299",
    name: "MALON 10MG INJECTION 2ML/AMP",
  },
  {
    sku: "45174",
    name: "MANACE INJECTION 5MG/1ML",
  },
  {
    sku: "15996",
    name: "MAPIN INJECTION",
  },
  {
    sku: "43042",
    name: "MARCAIN INJECTION 0.005 PDF 5 X 10ML",
  },
  {
    sku: "40462",
    name: "MARVELON 0.03 + 0.15MG",
  },
  {
    sku: "44616",
    name: "MAVILEX TAB 0.02MG",
  },
  {
    sku: "29210",
    name: "MAXIDEX STERILE OPHTHALMIC PREPARATION 5ML",
  },
  {
    sku: "34240",
    name: "MAXIGESIC 100'S",
  },
  {
    sku: "21631",
    name: "MAXIGESIC 10'S",
  },
  {
    sku: "21632",
    name: "MAXITROL EYE DROP 5ML",
  },
  {
    sku: "44992",
    name: "MAXITROL EYE OINTMENT 3.5G",
  },
  {
    sku: "45325",
    name: "MEDISPEC CETIZAL TABLET 5MG",
  },
  {
    sku: "19289",
    name: "MEDIXON 4MG",
  },
  {
    sku: "24494",
    name: "MEDOCHEMIE BROT 500MG TABLET",
  },
  {
    sku: "31681",
    name: "MEDOCHEMIE CONVERIUM 300MG TABLET",
  },
  {
    sku: "31677",
    name: "MEDOCHEMIE MEDOFLUCON 150MG",
  },
  {
    sku: "31678",
    name: "MEDOCHEMIE MEDOLIN 4MG",
  },
  {
    sku: "16318",
    name: "MEDOCHEMIE PRIACIN 20MG",
  },
  {
    sku: "16317",
    name: "MEDOCHEMIE ULCERAN TABLET 40MG X 50",
  },
  {
    sku: "18950",
    name: "MEDOCHEMIE ULCERAN TABLET 40MG",
  },
  {
    sku: "18949",
    name: "MEDOCRIPTINE 10'S",
  },
  {
    sku: "44987",
    name: "MEDOCRIPTINE 10'S X 10",
  },
  {
    sku: "34414",
    name: "MEDOCRIPTINE 1'S",
  },
  {
    sku: "18956",
    name: "MEDOSTATIN TABLET 20MG",
  },
  {
    sku: "17181",
    name: "MEDOSTATIN TABLET 20MG 10",
  },
  {
    sku: "18955",
    name: "MEFUROSAN CREAM 10G",
  },
  {
    sku: "18958",
    name: "MEFUROSAN CREAM 10G 10",
  },
  {
    sku: "17901",
    name: "MEGA AVARIN",
  },
  {
    sku: "18960",
    name: "MEGA TAMSIN FORTE 0.4MG",
  },
  {
    sku: "46448",
    name: "MEGEX-I SUSPENSION 800MG/20MG 20SAC",
  },
  {
    sku: "18953",
    name: "MELAQUIN CREAM 20G",
  },
  {
    sku: "16785",
    name: "MELASHINE CREAM 20G",
  },
  {
    sku: "18954",
    name: "MELICRON 10'S",
  },
  {
    sku: "17497",
    name: "MELICRON 1'S",
  },
  {
    sku: "26174",
    name: "MELICRON 60'S",
  },
  {
    sku: "26175",
    name: "MELOMET LOTION 0.001 W/W 30ML",
  },
  {
    sku: "17711",
    name: "MELOXIM 15MG",
  },
  {
    sku: "26872",
    name: "MEMENTOR 10MG",
  },
  {
    sku: "25939",
    name: "MEMXA 10 ANTI-DEMENTIA",
  },
  {
    sku: "15928",
    name: "MENELAT 30MG",
  },
  {
    sku: "18595",
    name: "MEQSEL 0.5MG",
  },
  {
    sku: "19742",
    name: "MERCILON 0.15/0.02MG",
  },
  {
    sku: "19744",
    name: "MERISLON 1000'S !!!",
  },
  {
    sku: "5007",
    name: "MERISLON 100'S !!!",
  },
  {
    sku: "28391",
    name: "MERISLON 10'S !!!",
  },
  {
    sku: "28392",
    name: "MERISLON 1'S !!!",
  },
  {
    sku: "5008",
    name: "MESTINON 60MG",
  },
  {
    sku: "5009",
    name: "METASONE CREAM 15G",
  },
  {
    sku: "44628",
    name: "METASONE CREAM 15G 12",
  },
  {
    sku: "44629",
    name: "METASONE OINTMENT 15G",
  },
  {
    sku: "26212",
    name: "METASONE OINTMENT 15G 12",
  },
  {
    sku: "26213",
    name: "METAZINE 20MG",
  },
  {
    sku: "38621",
    name: "METEOSPASMYL 10'S",
  },
  {
    sku: "37903",
    name: "METEOSPASMYL 1'S",
  },
  {
    sku: "37904",
    name: "METEOSPASMYL 30'S",
  },
  {
    sku: "37905",
    name: "METFORMIN STELLA 850MG",
  },
  {
    sku: "43219",
    name: "METHOTREXATE 2.5MG",
  },
  {
    sku: "38204",
    name: "METHYCOBAL INJECTION 1ML 10",
  },
  {
    sku: "41632",
    name: "METROGYL 200MG",
  },
  {
    sku: "44205",
    name: "METROGYL 400MG",
  },
  {
    sku: "36303",
    name: "METROGYL GEL 30G",
  },
  {
    sku: "36302",
    name: "METROGYL INJECTION 5MG/ML 100ML",
  },
  {
    sku: "41195",
    name: "METROGYL SUSPENSION 200MG/5ML 100ML",
  },
  {
    sku: "41196",
    name: "METTA SR 500MG",
  },
  {
    sku: "32813",
    name: "METTA SR 750MG",
  },
  {
    sku: "32740",
    name: "MEZAVANT XL 1200MG",
  },
  {
    sku: "40729",
    name: "MIACALCIC LIAM 50IU/1ML",
  },
  {
    sku: "40730",
    name: "MIACALCIC N/SPRAY 200IU 14DOSE",
  },
  {
    sku: "40728",
    name: "MIANSERIN 30MG",
  },
  {
    sku: "30679",
    name: "MIANSERIN FILM COATED TABLETS 10MG",
  },
  {
    sku: "15682",
    name: "MICARDIS 40MG",
  },
  {
    sku: "18726",
    name: "MICARDIS 80MG",
  },
  {
    sku: "18966",
    name: "MICARDIS PLUS 40/12.5MG",
  },
  {
    sku: "23331",
    name: "MICARDIS PLUS 80/12.5MG",
  },
  {
    sku: "33045",
    name: "MICORT CREAM 15G",
  },
  {
    sku: "33044",
    name: "MICORT CREAM 15G 10",
  },
  {
    sku: "30488",
    name: "MICROGYNON 30",
  },
  {
    sku: "46912",
    name: "MICTONORM 56'S",
  },
  {
    sku: "15927",
    name: "MICTONORM 7'S",
  },
  {
    sku: "18594",
    name: "MILOSEC 20MG",
  },
  {
    sku: "18970",
    name: "MINACORT CREAM 15G",
  },
  {
    sku: "16736",
    name: "MINIPRESS 2MG",
  },
  {
    sku: "16187",
    name: "MINIRIN 120MCG",
  },
  {
    sku: "37843",
    name: "MINIRIN 60MCG",
  },
  {
    sku: "16188",
    name: "MINISON 1MG",
  },
  {
    sku: "18352",
    name: "MINULET 21'S",
  },
  {
    sku: "16079",
    name: "MIRON 5MG",
  },
  {
    sku: "18351",
    name: "MOBIC 100'S",
  },
  {
    sku: "34547",
    name: "MOBIC 10'S",
  },
  {
    sku: "34548",
    name: "MOBIC 1'S",
  },
  {
    sku: "34546",
    name: "MODURIDE 50/5MG",
  },
  {
    sku: "30786",
    name: "MOMATE CREAM 15G",
  },
  {
    sku: "30787",
    name: "MOMATE NASAL SPRAY 140 DOSES",
  },
  {
    sku: "17412",
    name: "MONAST 10MG",
  },
  {
    sku: "46789",
    name: "MONKASTA TAB 10MG",
  },
  {
    sku: "18984",
    name: "MONOCLOX INJECTION 500MG",
  },
  {
    sku: "18985",
    name: "MONTELUKAST SANDOZ 10MG",
  },
  {
    sku: "38524",
    name: "MONTELUKAST SANDOZ 5MG",
  },
  {
    sku: "27159",
    name: "MONTEXIN 4MG",
  },
  {
    sku: "36965",
    name: "MONTULAR 10MG",
  },
  {
    sku: "46888",
    name: "MONUROL 3G",
  },
  {
    sku: "17686",
    name: "MOTIDOM 10'S",
  },
  {
    sku: "47225",
    name: "MOTIDOM 1'S",
  },
  {
    sku: "45387",
    name: "MOTIDOM 500'S",
  },
  {
    sku: "18472",
    name: "MOTIDONE 10MG 10",
  },
  {
    sku: "16384",
    name: "MOTIDONE 10MG",
  },
  {
    sku: "18474",
    name: "MOTIGUT 60ML",
  },
  {
    sku: "16385",
    name: "MOTILIUM 10MG",
  },
  {
    sku: "18477",
    name: "MOTILIUM 1MG/ML 100ML",
  },
  {
    sku: "16386",
    name: "MOXI 400MG",
  },
  {
    sku: "18479",
    name: "MPI CARBIMIN TABLETS 4MG",
  },
  {
    sku: "18478",
    name: "MUCOLEX INJECTION 4MG/2ML",
  },
  {
    sku: "17276",
    name: "MUCOPAIN GEL 15G",
  },
  {
    sku: "38648",
    name: "MUCOPROM SYRUP 120ML",
  },
  {
    sku: "15930",
    name: "MUCORID-P SYRUP 120ML",
  },
  {
    sku: "21596",
    name: "MUCOSTA 100MG",
  },
  {
    sku: "17479",
    name: "MUPOSTEN OINTMENT 15G",
  },
  {
    sku: "18987",
    name: "MUSAFEN 10MG",
  },
  {
    sku: "16549",
    name: "MVASI CONCENTRATE FOR SOLUTION FOR INFUSION 100MG/4ML",
  },
  {
    sku: "18991",
    name: "MYCLAV 625 TABLET",
  },
  {
    sku: "23859",
    name: "MYCODERM-C POWDER 75G",
  },
  {
    sku: "37663",
    name: "MYCOFIT 250MG",
  },
  {
    sku: "23860",
    name: "MYCOFIT 500MG",
  },
  {
    sku: "23858",
    name: "MYLAN MYHEP ALL 400MG/100MG",
  },
  {
    sku: "15926",
    name: "MYLERAN TAB 2MG",
  },
  {
    sku: "47266",
    name: "MYONAL 50MG",
  },
  {
    sku: "16042",
    name: "MYONIT INSTA 0.5MG",
  },
  {
    sku: "33888",
    name: "MYONIT INSTA 0.5MG 5",
  },
  {
    sku: "34623",
    name: "MYTAFF 25MG",
  },
  {
    sku: "32241",
    name: "NAPHCON-A EYE DROP 15ML",
  },
  {
    sku: "44271",
    name: "NASEHALER NASAL SPRAY 50MCG 18G",
  },
  {
    sku: "44268",
    name: "NASONEX AQUEOUS NASAL SPRAY 0.0005 140DS",
  },
  {
    sku: "35323",
    name: "NASONEX AQUEOUS NASAL SPRAY 0.0005 60DS",
  },
  {
    sku: "43618",
    name: "NATRILIX SR 1.5MG",
  },
  {
    sku: "23921",
    name: "NATRIXAM 1.5/10MG",
  },
  {
    sku: "23924",
    name: "NATRIXAM 1.5/5MG",
  },
  {
    sku: "37463",
    name: "NAVELBINE 30MG",
  },
  {
    sku: "16281",
    name: "NAVELBINE SOFT CAPSULE 20MG",
  },
  {
    sku: "15992",
    name: "N-BAC CREAM 15G",
  },
  {
    sku: "19003",
    name: "NEBICARD 5MG",
  },
  {
    sku: "37664",
    name: "NEBIDO INJECTION 1000MG 4ML",
  },
  {
    sku: "15993",
    name: "NEBILET 5MG",
  },
  {
    sku: "40717",
    name: "NEGATIL 200MG",
  },
  {
    sku: "46687",
    name: "NEGATIL 50MG",
  },
  {
    sku: "43818",
    name: "NEO DECA EYE/EAR DROPS 5ML",
  },
  {
    sku: "23281",
    name: "NEO-MERCAZOLE 5MG",
  },
  {
    sku: "17355",
    name: "NEO-PENOTRAN 14'S",
  },
  {
    sku: "19010",
    name: "NEO-PENOTRAN 7'S",
  },
  {
    sku: "19011",
    name: "NESP 40MG INJECTION SYRINGE",
  },
  {
    sku: "17865",
    name: "NEULASTIM 0.6ML 6MG 1PFS",
  },
  {
    sku: "22359",
    name: "NEURONTIN 100MG",
  },
  {
    sku: "47430",
    name: "NEURONTIN 300MG",
  },
  {
    sku: "38221",
    name: "NEURONTIN 600MG",
  },
  {
    sku: "22344",
    name: "NEVANAC 0.001 OPHTHALMIC SUS. EYE DROP 5ML",
  },
  {
    sku: "37994",
    name: "NEXAVAR 200MG",
  },
  {
    sku: "41315",
    name: "NEXIUM 20MG",
  },
  {
    sku: "16051",
    name: "NEXIUM 40MG",
  },
  {
    sku: "40279",
    name: "NEXIUM IV INFUSION 40MG/5ML",
  },
  {
    sku: "33918",
    name: "NEXPRO 40MG",
  },
  {
    sku: "16674",
    name: "NICOL EYE DROPS 5ML",
  },
  {
    sku: "16672",
    name: "NICORETTE GUMS 2MG",
  },
  {
    sku: "18965",
    name: "NICORETTE GUMS 4MG",
  },
  {
    sku: "16394",
    name: "NICORETTE INVISIPATCH 10MG/16HR",
  },
  {
    sku: "18964",
    name: "NICORETTE INVISIPATCH 15MG/16HR",
  },
  {
    sku: "23781",
    name: "NICORETTE INVISIPATCH 25MG/16HR",
  },
  {
    sku: "23779",
    name: "NICORETTE QUICKMIST 1MG/SPR 150SPR",
  },
  {
    sku: "23780",
    name: "NIFERIN SR NIFEDIPINE",
  },
  {
    sku: "23784",
    name: "NIFERIN SR NIFEDIPINE 3",
  },
  {
    sku: "23782",
    name: "NIMENRIX SFDPO 1X0.5ML GVL+SYR MY",
  },
  {
    sku: "23783",
    name: "NINLARO HARD CAPSULE 4MG",
  },
  {
    sku: "30055",
    name: "NITRODERM TTS 10MG",
  },
  {
    sku: "41899",
    name: "NITRODERM TTS 5MG",
  },
  {
    sku: "17407",
    name: "NITROGLYCERIN 0.5MG TAB",
  },
  {
    sku: "38462",
    name: "NITROSOL AEROSOL SPRAY 400MCG",
  },
  {
    sku: "25260",
    name: "NIZORAL SHAMPOO 0.02 100ML",
  },
  {
    sku: "22638",
    name: "NOCDURNA ORAL LYOPHILISATE FOR SUBLINGUAL 25MCG",
  },
  {
    sku: "19022",
    name: "NODON 5MG",
  },
  {
    sku: "40472",
    name: "NOLPAZA 40MG",
  },
  {
    sku: "40474",
    name: "NOLPAZA 40MG 2",
  },
  {
    sku: "40473",
    name: "NOLVADEX D 20MG",
  },
  {
    sku: "46783",
    name: "NORCOLUT 1S",
  },
  {
    sku: "16525",
    name: "NORCOLUT 20'S",
  },
  {
    sku: "18415",
    name: "NORCUTIN 10'S",
  },
  {
    sku: "19024",
    name: "NORDETTE 21'S X 5",
  },
  {
    sku: "16355",
    name: "NORDETTE 21'S",
  },
  {
    sku: "17537",
    name: "NORDIPINE 10MG",
  },
  {
    sku: "44821",
    name: "NORDIPINE 5MG",
  },
  {
    sku: "19029",
    name: "NORFLEX 100'S",
  },
  {
    sku: "19031",
    name: "NORFLEX 1'S",
  },
  {
    sku: "19032",
    name: "NORFLEX 20'S",
  },
  {
    sku: "16297",
    name: "NORFOX 400MG 10S",
  },
  {
    sku: "19033",
    name: "NORFOX 400MG",
  },
  {
    sku: "19034",
    name: "NORGESIC 12'S",
  },
  {
    sku: "16298",
    name: "NORIDAY 28'S",
  },
  {
    sku: "1495",
    name: "NORIDAY 28'SX3",
  },
  {
    sku: "22717",
    name: "NORIPHARMA CORIFED SYRUP 120ML",
  },
  {
    sku: "19042",
    name: "NORIPHARMA DEXFEN SYRUP 120ML",
  },
  {
    sku: "17756",
    name: "NORIPHARMA FUSATE-H CREAM 15G",
  },
  {
    sku: "19043",
    name: "NORMATEN 100MG",
  },
  {
    sku: "19045",
    name: "NORMATEN 50MG",
  },
  {
    sku: "25128",
    name: "NORMENS 5MG",
  },
  {
    sku: "17083",
    name: "NORVASC 10MG",
  },
  {
    sku: "20072",
    name: "NORVASC 5MG",
  },
  {
    sku: "44273",
    name: "NORVIR 100MG",
  },
  {
    sku: "44124",
    name: "NOVARTIS MYFORTIC 360MG",
  },
  {
    sku: "31214",
    name: "NOVOGEN NOVUGAB 50MG",
  },
  {
    sku: "41289",
    name: "NOVOGEN TADIGRA 20MG",
  },
  {
    sku: "16605",
    name: "NOVOMIN 50MG",
  },
  {
    sku: "15918",
    name: "NOVOMIN SYRUP 60ML",
  },
  {
    sku: "47432",
    name: "NOVOMIX 30 FLEXPEN 3ML",
  },
  {
    sku: "40563",
    name: "NOVONORM 0.5MG",
  },
  {
    sku: "37999",
    name: "NOVONORM 1MG",
  },
  {
    sku: "19055",
    name: "NOVONORM 2MG",
  },
  {
    sku: "45666",
    name: "NOVUGEN AMVAL 10/160MG",
  },
  {
    sku: "15932",
    name: "NOVUGEN AMVAL 5/160MG",
  },
  {
    sku: "20733",
    name: "NOVUGEN AMVAL 5/80MG",
  },
  {
    sku: "20966",
    name: "NOVUGEN APEXIB 2.5MG",
  },
  {
    sku: "18639",
    name: "NOVUGEN APEXIB 5MG",
  },
  {
    sku: "46185",
    name: "NOVUGEN AVAZET 10/20MG",
  },
  {
    sku: "40326",
    name: "NOVUGEN AVAZET 10/40MG",
  },
  {
    sku: "18728",
    name: "NOVUGEN DAPIGA 10MG",
  },
  {
    sku: "18727",
    name: "NOVUGEN DAPIGA 10MG 3",
  },
  {
    sku: "16629",
    name: "NOVUGEN DIAGLYCON MR 30MG",
  },
  {
    sku: "31843",
    name: "NOVUGEN DIAGLYCON MR 60MG",
  },
  {
    sku: "19122",
    name: "NOVUGEN DUORIDE - T 0.5MG/0.4MG CAPS",
  },
  {
    sku: "19124",
    name: "NOVUGEN GOUTRIC 80MG",
  },
  {
    sku: "31077",
    name: "NOVUGEN NOVAMTEL 10/40MG",
  },
  {
    sku: "38002",
    name: "NOVUGEN NOVAMTEL 10/80MG",
  },
  {
    sku: "38004",
    name: "NOVUGEN NOVAMTEL 5/40MG",
  },
  {
    sku: "14077",
    name: "NOVUGEN NOVAMTEL 5/80MG",
  },
  {
    sku: "17262",
    name: "NOVUGEN NOVTOR 10MG",
  },
  {
    sku: "18627",
    name: "NOVUGEN NOVTOR 10MG 3",
  },
  {
    sku: "18630",
    name: "NOVUGEN NOVTOR 20MG",
  },
  {
    sku: "17160",
    name: "NOVUGEN NOVTOR 20MG 3",
  },
  {
    sku: "18629",
    name: "NOVUGEN NOVUGAB 75MG",
  },
  {
    sku: "17283",
    name: "NOVUGEN RENAXIN 5MG",
  },
  {
    sku: "18632",
    name: "NOVUGEN RIVAX 10MG",
  },
  {
    sku: "40244",
    name: "NOVUGEN RIVAX 15MG",
  },
  {
    sku: "40238",
    name: "NOVUGEN RIVAX 20MG",
  },
  {
    sku: "40241",
    name: "NOVUGEN TADIGRA 5MG",
  },
  {
    sku: "40242",
    name: "NOVUGEN TADIGRA 5MG 3",
  },
  {
    sku: "46133",
    name: "NOVUGEN VOZAN 10MG",
  },
  {
    sku: "47377",
    name: "NOVUGEN VOZAN 20MG",
  },
  {
    sku: "46805",
    name: "NOVYNETTE 21'S",
  },
  {
    sku: "46806",
    name: "NOXAFIL 100MG",
  },
  {
    sku: "46804",
    name: "NP GENTAMICIN CREAM 0.003 W/W 15G",
  },
  {
    sku: "46808",
    name: "NUELIN SR BLISTER 125MG",
  },
  {
    sku: "42635",
    name: "NUELIN SR BLISTER 250MG",
  },
  {
    sku: "43973",
    name: "NUROFEN EXPRESS 342MG",
  },
  {
    sku: "43972",
    name: "NUROFEN EXPRESS 684MG",
  },
  {
    sku: "43974",
    name: "NUROFEN SYRUP FOR CHILDREN 60ML",
  },
  {
    sku: "44923",
    name: "NURTEC 75MG ODT",
  },
  {
    sku: "44924",
    name: "OCUDOR DORZOLAMIDE EYE DROP 5ML",
  },
  {
    sku: "44922",
    name: "OESTROGEL 80G",
  },
  {
    sku: "41897",
    name: "OFEV 100MG",
  },
  {
    sku: "41895",
    name: "OFEV 150MG",
  },
  {
    sku: "41896",
    name: "OFLO 200MG",
  },
  {
    sku: "41224",
    name: "OFLO 400MG",
  },
  {
    sku: "44307",
    name: "OLENZA 10MG TABLET",
  },
  {
    sku: "44305",
    name: "OLENZA 5MG TABLET",
  },
  {
    sku: "44312",
    name: "OLFEN-100 SR",
  },
  {
    sku: "44311",
    name: "OLFEN-50 10'S !!!",
  },
  {
    sku: "44303",
    name: "OLFEN-50 10'S X 10",
  },
  {
    sku: "44304",
    name: "OLFEN-50 1'S !!!",
  },
  {
    sku: "44302",
    name: "OLFEN-50 500'S !!!",
  },
  {
    sku: "44309",
    name: "OLMETEC 20MG",
  },
  {
    sku: "46732",
    name: "OLMETEC 40MG",
  },
  {
    sku: "46733",
    name: "OLODIN 0.001 5ML",
  },
  {
    sku: "40283",
    name: "OLTAD 20MG",
  },
  {
    sku: "41225",
    name: "OMELON 20MG",
  },
  {
    sku: "47527",
    name: "OMESEC 20MG",
  },
  {
    sku: "47526",
    name: "OMETAC 14'S",
  },
  {
    sku: "47530",
    name: "OMETAC 7'S",
  },
  {
    sku: "47531",
    name: "OMIFLU 75MG",
  },
  {
    sku: "47529",
    name: "OMILOCK 20MG",
  },
  {
    sku: "41226",
    name: "ONDANSETRON KABI INJ 4MG/2ML",
  },
  {
    sku: "41626",
    name: "ONE-ALPHA 0.5MCG",
  },
  {
    sku: "43540",
    name: "ONE-ALPHA 1MCG",
  },
  {
    sku: "43541",
    name: "ONEGABA 300MG",
  },
  {
    sku: "43539",
    name: "ONGLYZA 5MG",
  },
  {
    sku: "43545",
    name: "OPDIVO SOLUTION INJECTION 100MG",
  },
  {
    sku: "43546",
    name: "OPDIVO SOLUTION INJECTION 40MG",
  },
  {
    sku: "43544",
    name: "OPTIHIST EYE DROP 0.0005 W/V",
  },
  {
    sku: "17031",
    name: "OPTIMOL 0.005 EYE DROPS 5ML",
  },
  {
    sku: "29475",
    name: "OPTIMOL 0.005 EYE DROPS 5ML X",
  },
  {
    sku: "47219",
    name: "ORAL AID LOTION 6ML",
  },
  {
    sku: "18623",
    name: "ORAL AID LOTION",
  },
  {
    sku: "16342",
    name: "ORALCON 21'S",
  },
  {
    sku: "18624",
    name: "ORALCON 21'S X 3",
  },
  {
    sku: "18625",
    name: "ORALIS PAIN RELIEF GEL ORANGE FLAVOUR 8G",
  },
  {
    sku: "16850",
    name: "ORFARIN 3MG",
  },
  {
    sku: "25266",
    name: "ORFARIN 5MG",
  },
  {
    sku: "16746",
    name: "OROPLUS GEL",
  },
  {
    sku: "45892",
    name: "OROXINE 100MCG",
  },
  {
    sku: "17079",
    name: "OROXINE 50MCG",
  },
  {
    sku: "35126",
    name: "ORPHENAMOL 1000'S !!!",
  },
  {
    sku: "19277",
    name: "ORPHENAMOL 10'S !!!",
  },
  {
    sku: "16282",
    name: "ORPHENAMOL 10'S X 10",
  },
  {
    sku: "19281",
    name: "OSPAMOX 1000MG",
  },
  {
    sku: "32236",
    name: "OSPAMOX 500MG",
  },
  {
    sku: "16047",
    name: "OTEK-P EAR DROPS 5ML",
  },
  {
    sku: "38625",
    name: "OVA-MIT TABLET 50MG",
  },
  {
    sku: "19155",
    name: "OVIDREL 250 MICROGRAMS/0.5ML",
  },
  {
    sku: "19179",
    name: "OVULET 50MG",
  },
  {
    sku: "19178",
    name: "OZICLIDE MR",
  },
  {
    sku: "19180",
    name: "PALVORED 100MG",
  },
  {
    sku: "38496",
    name: "PALVORED 125MG",
  },
  {
    sku: "43179",
    name: "PANACID 500MG",
  },
  {
    sku: "16819",
    name: "PANADEINE",
  },
  {
    sku: "41182",
    name: "PANTAZ 10'S",
  },
  {
    sku: "41181",
    name: "PANTAZ 40MG",
  },
  {
    sku: "19253",
    name: "PANTIUM-40 10'S",
  },
  {
    sku: "15987",
    name: "PANTOCID INJECTION 40MG VIAL",
  },
  {
    sku: "17655",
    name: "PANTOMAC 40MG",
  },
  {
    sku: "28032",
    name: "PANTOPRAZOLE BEXIMCO 20MG",
  },
  {
    sku: "926",
    name: "PANTOPRAZOLE SANDOZ 40MG",
  },
  {
    sku: "45671",
    name: "PANTOR 40MG",
  },
  {
    sku: "19203",
    name: "PARALGIN 100 X",
  },
  {
    sku: "19204",
    name: "PARALGIN 10'S",
  },
  {
    sku: "43592",
    name: "PARALGIN FORTE",
  },
  {
    sku: "43591",
    name: "PARALGIN FORTE 60",
  },
  {
    sku: "34306",
    name: "PARAS TAB",
  },
  {
    sku: "37890",
    name: "PARIET 10MG",
  },
  {
    sku: "19206",
    name: "PARIET 20MG",
  },
  {
    sku: "44604",
    name: "PARMODIA 0.1MG",
  },
  {
    sku: "16919",
    name: "PASURTA 70MG/1ML INJECTION",
  },
  {
    sku: "19189",
    name: "PATADAY EYE DROP 2.5ML",
  },
  {
    sku: "5154",
    name: "PATANOL STERILE OPHTHALMIC SOLUTION 0.001 5ML",
  },
  {
    sku: "34762",
    name: "PAXLOVID 150/100MG",
  },
  {
    sku: "19171",
    name: "PEACE SYRUP 60ML",
  },
  {
    sku: "16353",
    name: "PEACE SYRUP 60ML 30",
  },
  {
    sku: "19172",
    name: "PEDIAIR 4MG GRANULES",
  },
  {
    sku: "21429",
    name: "PENATONE INJ 8MG/2NL AMP",
  },
  {
    sku: "17395",
    name: "PENCOR 4",
  },
  {
    sku: "37667",
    name: "PENICILLIN V TABLET 125MG",
  },
  {
    sku: "16911",
    name: "PENTASA 500MG",
  },
  {
    sku: "19166",
    name: "PENTASA SACHET PROLONGED RELEASE GRANULES 2G X 60",
  },
  {
    sku: "19164",
    name: "PENTASA SUPPOSITORIES 1G",
  },
  {
    sku: "19165",
    name: "PERINACE 4MG",
  },
  {
    sku: "44807",
    name: "PERINDOSYL 4MG",
  },
  {
    sku: "32301",
    name: "PERJETA 420MG CONCENTRATE FOR SOLUTION FOR INFUSION",
  },
  {
    sku: "32345",
    name: "PHARMANIAGA CEPHALEXIN 500MG",
  },
  {
    sku: "29767",
    name: "PHARMANIAGA CO-AMOXICLAV 228MG/5ML 70ML",
  },
  {
    sku: "29768",
    name: "PHARMANIAGA CRUZOR 300MG",
  },
  {
    sku: "47394",
    name: "PHARMANIAGA DIPHENHYDRAMINE SYRUP 120ML",
  },
  {
    sku: "28927",
    name: "PHARMANIAGA EUVAX B",
  },
  {
    sku: "28928",
    name: "PHARMANIAGA FLUCONAZOLE 150MG",
  },
  {
    sku: "36124",
    name: "PHARMANIAGA LORATADINE TABLET 10MG",
  },
  {
    sku: "20590",
    name: "PHARMANIAGA MEFENAMIC 500MG",
  },
  {
    sku: "31457",
    name: "PHARMANIAGA MEFENAMIC 500MG 10",
  },
  {
    sku: "40286",
    name: "PHARMANIAGA MELOXICAM 7.5MG",
  },
  {
    sku: "36386",
    name: "PHARMANIAGA METOPROLOL 100MG",
  },
  {
    sku: "43616",
    name: "PHARMANIAGA ROXATIN 10MG",
  },
  {
    sku: "17641",
    name: "PHARMANIAGA ROXATIN 20MG",
  },
  {
    sku: "40076",
    name: "PHARMANIAGA SALBUTAMOL EXPECTORANT 90ML",
  },
  {
    sku: "40074",
    name: "PHARMANIAGA XYNOZ 5MG",
  },
  {
    sku: "40072",
    name: "PHENOBARBITONE 30MG",
  },
  {
    sku: "15680",
    name: "PHYSIOTENS 0.2MG",
  },
  {
    sku: "15969",
    name: "PHYSIOTENS 0.4MG",
  },
  {
    sku: "45399",
    name: "PIOLET 15MG",
  },
  {
    sku: "47293",
    name: "PIOLET 30MG",
  },
  {
    sku: "1498",
    name: "PIZOGRAN 0.5MG",
  },
  {
    sku: "44073",
    name: "PK-MERZ 100'S",
  },
  {
    sku: "44074",
    name: "PK-MERZ 1'S",
  },
  {
    sku: "45729",
    name: "PK-MERZ 20'S",
  },
  {
    sku: "45047",
    name: "PLACTA 75MG",
  },
  {
    sku: "34450",
    name: "PLAQUENIL 15'S",
  },
  {
    sku: "36369",
    name: "PLAQUENIL 1'S",
  },
  {
    sku: "36368",
    name: "PLAQUENIL 60'S",
  },
  {
    sku: "17086",
    name: "PLAVIX 75MG",
  },
  {
    sku: "40674",
    name: "PLECAZ MR 60MG",
  },
  {
    sku: "17507",
    name: "PLECAZ MR 60MG 3",
  },
  {
    sku: "17506",
    name: "PLENDIL 10MG",
  },
  {
    sku: "21817",
    name: "PLENDIL 2.5MG",
  },
  {
    sku: "37982",
    name: "PLENDIL 5MG",
  },
  {
    sku: "46760",
    name: "PLETAAL 100MG",
  },
  {
    sku: "40583",
    name: "POCIN-H EAR DROPS 5ML",
  },
  {
    sku: "40584",
    name: "POLARINE 10'S",
  },
  {
    sku: "44633",
    name: "POLARINE 10'S X 100",
  },
  {
    sku: "44634",
    name: "POLYBAMYCIN OINTMENT 10G",
  },
  {
    sku: "40421",
    name: "POLYTET EYE OINTMENT TUBE",
  },
  {
    sku: "44669",
    name: "PONSTAN 500MG",
  },
  {
    sku: "40733",
    name: "PONTALON 500MG",
  },
  {
    sku: "40734",
    name: "PONTEVIA AUTOINJ 120MG",
  },
  {
    sku: "40732",
    name: "POSTINOR 10'S",
  },
  {
    sku: "40657",
    name: "POSTINOR 2'S",
  },
  {
    sku: "40658",
    name: "PP METOCLOPRAMIDE 10",
  },
  {
    sku: "40656",
    name: "PP METOCLOPRAMIDE 100",
  },
  {
    sku: "37991",
    name: "PP METOCLOPRAMIDE",
  },
  {
    sku: "17056",
    name: "PP NAPROXEN 275MG",
  },
  {
    sku: "33678",
    name: "PP NAPROXEN 275MG 10",
  },
  {
    sku: "33248",
    name: "PP NAPROXEN 275MG 50",
  },
  {
    sku: "33247",
    name: "PP NAPROXEN 550MG",
  },
  {
    sku: "32997",
    name: "PRADAXA 110MG",
  },
  {
    sku: "32998",
    name: "PRADAXA 150MG",
  },
  {
    sku: "32996",
    name: "PRADAXA 75MG",
  },
  {
    sku: "20947",
    name: "PRAVATAS 20 20MG",
  },
  {
    sku: "20946",
    name: "PRAZOSIN 1MG",
  },
  {
    sku: "30809",
    name: "PRAZOSIN 2MG",
  },
  {
    sku: "36459",
    name: "PRAZOVEX 0.25MG",
  },
  {
    sku: "35052",
    name: "PRAZOVEX 0.5MG",
  },
  {
    sku: "16927",
    name: "PRED FORTE OPHTHALMIC SOLUTION STERILE EYE DROPS 5ML",
  },
  {
    sku: "16925",
    name: "PREDNISOLONE 5MG",
  },
  {
    sku: "16592",
    name: "PREDNISYN 5MG",
  },
  {
    sku: "16593",
    name: "PREDSONE SYRUP 120ML",
  },
  {
    sku: "41777",
    name: "PREGEB 75MG",
  },
  {
    sku: "41778",
    name: "PREGNYL 5000IU",
  },
  {
    sku: "16404",
    name: "PRELICA 150MG",
  },
  {
    sku: "16398",
    name: "PRELICA 75MG",
  },
  {
    sku: "16401",
    name: "PREMARIN 0.625MG",
  },
  {
    sku: "16402",
    name: "PREMARIN VAGINAL CREAM 14G",
  },
  {
    sku: "16400",
    name: "PRETENOL C 100MG",
  },
  {
    sku: "6784",
    name: "PRETENOL C 50MG",
  },
  {
    sku: "16522",
    name: "PREVACID 14'S",
  },
  {
    sku: "42535",
    name: "PREVACID 1'S",
  },
  {
    sku: "42534",
    name: "PREVACID 28'S",
  },
  {
    sku: "40475",
    name: "PREVENAR 13V 0.5ML",
  },
  {
    sku: "32866",
    name: "PREZEL 75MG",
  },
  {
    sku: "32859",
    name: "PRIDRINATE 50MG SUPP",
  },
  {
    sku: "37845",
    name: "PRILIGY 30MG",
  },
  {
    sku: "16030",
    name: "PRILIGY 60MG",
  },
  {
    sku: "16095",
    name: "PRIME ASMIN 2MG",
  },
  {
    sku: "15942",
    name: "PRIME ASMIN 4MG",
  },
  {
    sku: "46517",
    name: "PRIME ASMIN EXPECTORANT 90ML",
  },
  {
    sku: "46519",
    name: "PRIME ATEBLOC 100MG",
  },
  {
    sku: "16091",
    name: "PRIME ATEBLOC 100MG 10",
  },
  {
    sku: "25001",
    name: "PRIME ATEBLOC 50MG",
  },
  {
    sku: "37846",
    name: "PRIME ATEBLOC 50MG 10",
  },
  {
    sku: "17178",
    name: "PRIME CLOMAZOL-B CREAM 15G",
  },
  {
    sku: "17523",
    name: "PRIME DUZEN CREAM 5GM",
  },
  {
    sku: "16967",
    name: "PRIME DUZEN-B CREAM 5GM",
  },
  {
    sku: "21235",
    name: "PRIME GENTASONE CREAM 15G",
  },
  {
    sku: "21234",
    name: "PRIME MELGESIC 250MG",
  },
  {
    sku: "24634",
    name: "PRIME MORIDONE 10MG",
  },
  {
    sku: "38071",
    name: "PRIME MORIDONE 10MG 10",
  },
  {
    sku: "38072",
    name: "PRIME MYOFLEX",
  },
  {
    sku: "38081",
    name: "PRIME PRIDRINATE 50MG TAB",
  },
  {
    sku: "36241",
    name: "PRIME PRIMETIL 5MG",
  },
  {
    sku: "18767",
    name: "PRIME PRIMETIL 5MG 10",
  },
  {
    sku: "37668",
    name: "PRIME PRINAZIN TABLET 25MG",
  },
  {
    sku: "16101",
    name: "PRIME PRISOLONE 5MG",
  },
  {
    sku: "17354",
    name: "PRIME PRITAREN TAB 50MG",
  },
  {
    sku: "30610",
    name: "PRIME RASITIN TAB",
  },
  {
    sku: "28136",
    name: "PRIME RE-LIV ORAL LOTION 5ML",
  },
  {
    sku: "28134",
    name: "PRIME ROXIM 10MG",
  },
  {
    sku: "28132",
    name: "PRIME ROXIM 20MG 100 X",
  },
  {
    sku: "28133",
    name: "PRIME ROXIM 20MG",
  },
  {
    sku: "15941",
    name: "PRIME SALOSONE OINTMENT 15GM",
  },
  {
    sku: "8438",
    name: "PRIME ZADIMIN SYRUP 120ML",
  },
  {
    sku: "16771",
    name: "PRIME ZIRAX CREAM 5G",
  },
  {
    sku: "19310",
    name: "PRIME'S CIMETIDINE 200MG",
  },
  {
    sku: "16551",
    name: "PRIME'S CIMETIDINE 400MG",
  },
  {
    sku: "16550",
    name: "PRIME'S HYDROCORTISONE CREAM 0.01 W/W 100G",
  },
  {
    sku: "15973",
    name: "PRIMOVIST 10ML",
  },
  {
    sku: "15974",
    name: "PRISTINE SHAMPOO 120ML",
  },
  {
    sku: "15972",
    name: "PRISTINEX CREAM 15G",
  },
  {
    sku: "24870",
    name: "PRISTIQ 100MG",
  },
  {
    sku: "36306",
    name: "PRISTIQ 50MG",
  },
  {
    sku: "16331",
    name: "PROBITOR 20MG OMEPRAZOLE CAPSULES",
  },
  {
    sku: "17854",
    name: "PROCHLOR 5MG",
  },
  {
    sku: "17571",
    name: "PROCTOSEDYL OINT 15G",
  },
  {
    sku: "37847",
    name: "PROGIT 50MG",
  },
  {
    sku: "37848",
    name: "PROGLUTROL 500MG",
  },
  {
    sku: "47558",
    name: "PROGLUTROL G2",
  },
  {
    sku: "19224",
    name: "PROGRAF 0.5MG",
  },
  {
    sku: "37670",
    name: "PROGRAF 1MG",
  },
  {
    sku: "16834",
    name: "PROGRAF 5MG",
  },
  {
    sku: "19221",
    name: "PROGYLUTON 21'S",
  },
  {
    sku: "19222",
    name: "PROGYNOVA 1MG",
  },
  {
    sku: "37671",
    name: "PROGYNOVA 2MG",
  },
  {
    sku: "16833",
    name: "PROMEDYL DM LINCTUS 90ML",
  },
  {
    sku: "16694",
    name: "PROMESEC 20MG 2",
  },
  {
    sku: "16693",
    name: "PROMESEC 20MG",
  },
  {
    sku: "16695",
    name: "PROMETHAZINE 25MG",
  },
  {
    sku: "16698",
    name: "PROPECIA 1MG",
  },
  {
    sku: "17245",
    name: "PROPYL 50MG",
  },
  {
    sku: "22589",
    name: "PROSCAR 5MG",
  },
  {
    sku: "37672",
    name: "PROTOPIC 0.0003 OINTMENT 10G",
  },
  {
    sku: "16088",
    name: "PROTOPIC 0.001 OINTMENT 10G",
  },
  {
    sku: "16089",
    name: "PROVERA 10MG",
  },
  {
    sku: "16090",
    name: "PROVINACE 4MG",
  },
  {
    sku: "16299",
    name: "PROZAC 20MG",
  },
  {
    sku: "16301",
    name: "PUBERGEN INJECTION 5000 IU",
  },
  {
    sku: "16691",
    name: "PULIN 10MG",
  },
  {
    sku: "16692",
    name: "PULMICORT 0.25MG/ML RESPULE",
  },
  {
    sku: "16104",
    name: "PULMICORT 0.5MG/ML RESPULES",
  },
  {
    sku: "16106",
    name: "PUROXAN 400MG",
  },
  {
    sku: "37856",
    name: "PYCIP 500MG",
  },
  {
    sku: "20114",
    name: "PYRIMINE 60MG",
  },
  {
    sku: "16690",
    name: "QTERN 1'S",
  },
  {
    sku: "18321",
    name: "QTERN 28'S",
  },
  {
    sku: "44605",
    name: "QUEMED 5MG",
  },
  {
    sku: "47556",
    name: "RABEPRAZOLE SANDOZ 20MG",
  },
  {
    sku: "40150",
    name: "RABEPRAZOLE SANDOZ 20MG 4",
  },
  {
    sku: "40165",
    name: "RABOTIDE 20",
  },
  {
    sku: "16963",
    name: "RACSER CREAM 0.05 5G",
  },
  {
    sku: "27864",
    name: "RACSER CREAM 0.05 5G X",
  },
  {
    sku: "44637",
    name: "RAFINLAR 75MG",
  },
  {
    sku: "45879",
    name: "RAHIKA 200MG",
  },
  {
    sku: "47549",
    name: "RALSIN 2MG",
  },
  {
    sku: "31166",
    name: "RALSIN 5MG",
  },
  {
    sku: "31363",
    name: "RAMTACE 5MG",
  },
  {
    sku: "41623",
    name: "RANBAXY ENHANCIN 625MG",
  },
  {
    sku: "7129",
    name: "RANBAXY MELARTIN 15MG",
  },
  {
    sku: "19188",
    name: "RANBAXY SOBRIUM 10MG",
  },
  {
    sku: "21428",
    name: "RANEXA 375MG",
  },
  {
    sku: "17495",
    name: "RANEXA 500MG",
  },
  {
    sku: "37675",
    name: "RANEXA 750MG",
  },
  {
    sku: "15897",
    name: "RANFUZOSIN 10MG",
  },
  {
    sku: "45549",
    name: "RANOFER 5X5ML",
  },
  {
    sku: "47261",
    name: "RAPAMUNE TAB 1MG",
  },
  {
    sku: "36228",
    name: "RASITOL 40MG",
  },
  {
    sku: "33441",
    name: "RAVIMED 5MG 10",
  },
  {
    sku: "17144",
    name: "REGPARA 25MG",
  },
  {
    sku: "34044",
    name: "REGRO TOPICAL SOLUTION 0.05 80ML",
  },
  {
    sku: "16818",
    name: "REGULON 21'S",
  },
  {
    sku: "17399",
    name: "RELESTAT 0.5MG/ML EYE DROP 5ML",
  },
  {
    sku: "15948",
    name: "RELVAR ELLIPTA 100/25MCG",
  },
  {
    sku: "36906",
    name: "RELVAR ELLIPTA 200/25MCG",
  },
  {
    sku: "34271",
    name: "REMAFEN 50MG",
  },
  {
    sku: "16134",
    name: "REMERON SOLTAB 15MG",
  },
  {
    sku: "37656",
    name: "REMERON SOLTAB 30MG",
  },
  {
    sku: "16373",
    name: "REMETHAN 50MG",
  },
  {
    sku: "16920",
    name: "REMICRON MR 30MG",
  },
  {
    sku: "18732",
    name: "RENATE DESOLON",
  },
  {
    sku: "14079",
    name: "RENITEC 10MG",
  },
  {
    sku: "18093",
    name: "RENITEC 20MG",
  },
  {
    sku: "44177",
    name: "RENSON 10MG",
  },
  {
    sku: "15674",
    name: "RENVELA 800MG",
  },
  {
    sku: "18770",
    name: "REQUIP 0.25MG",
  },
  {
    sku: "47460",
    name: "REQUIP 1MG",
  },
  {
    sku: "9547",
    name: "REQUIP PD 24HR 2MG",
  },
  {
    sku: "41579",
    name: "REQUIP PD 24HR 4MG TAB",
  },
  {
    sku: "21163",
    name: "RESOLOR 1MG",
  },
  {
    sku: "21164",
    name: "RESOLOR 2MG",
  },
  {
    sku: "35748",
    name: "RESOLVE TINEA CREAM 25G",
  },
  {
    sku: "30942",
    name: "RESTASIS EYE DROP",
  },
  {
    sku: "45711",
    name: "RETAFYLLIN 200MG",
  },
  {
    sku: "42284",
    name: "RETEN FIVE SOLUTION 5G/100ML",
  },
  {
    sku: "42283",
    name: "REVCOX 200MG",
  },
  {
    sku: "21130",
    name: "REVOKE 1.5MG",
  },
  {
    sku: "21131",
    name: "REVOLADE 25MG",
  },
  {
    sku: "45685",
    name: "REVOLADE 50MG",
  },
  {
    sku: "45684",
    name: "REXOM HYDROCORTISONE NEOMYCIN CREAM 15G",
  },
  {
    sku: "46911",
    name: "REXOM NEOMYCIN CREAM 0.005 15G",
  },
  {
    sku: "47647",
    name: "REXULTI 1MG",
  },
  {
    sku: "41692",
    name: "REXULTI 2MG",
  },
  {
    sku: "40449",
    name: "REXULTI 4MG",
  },
  {
    sku: "33752",
    name: "RHINATHIOL ADULT SYRUP 125ML",
  },
  {
    sku: "33753",
    name: "RHINATHIOL CHILDREN-INFANTS SYRUP 125ML",
  },
  {
    sku: "33754",
    name: "RHINITIN SYRUP 120ML",
  },
  {
    sku: "47149",
    name: "RHINITIN TAB 10MG",
  },
  {
    sku: "47552",
    name: "RHINITIN TAB 10MG 50 X",
  },
  {
    sku: "46852",
    name: "RHINOCORT AQUA NASAL SPRAY 64MCG 120DS",
  },
  {
    sku: "46853",
    name: "RICOVIR 300MG",
  },
  {
    sku: "24775",
    name: "RIFASYNT 300MG",
  },
  {
    sku: "31586",
    name: "RIGEVIDON SUGAR COATED",
  },
  {
    sku: "41759",
    name: "RINALIX 2.5MG",
  },
  {
    sku: "37954",
    name: "RINVOQ 15MG",
  },
  {
    sku: "18771",
    name: "RISPERDAL 1MG",
  },
  {
    sku: "17081",
    name: "RISPERDAL 1MG/ML SOLUTION 30ML",
  },
  {
    sku: "32978",
    name: "RISPERDAL 2MG",
  },
  {
    sku: "5071",
    name: "RISTOR ORAL SOLUTION 1MG/ML",
  },
  {
    sku: "3449",
    name: "RITALIN 10MG",
  },
  {
    sku: "22132",
    name: "RITALIN 30MG",
  },
  {
    sku: "18736",
    name: "RITALIN LA MODIFIED-RELEASE CAPSULE 20MG",
  },
  {
    sku: "16049",
    name: "RITALIN LA MODIFIED-RELEASE CAPSULE 30MG",
  },
  {
    sku: "17752",
    name: "RIVADEM 1.5MG",
  },
  {
    sku: "18098",
    name: "RIVADEM 3MG",
  },
  {
    sku: "18099",
    name: "RIVAMENSA PATCH 10",
  },
  {
    sku: "16859",
    name: "RIVAXORED 15MG",
  },
  {
    sku: "18100",
    name: "RIVOPAM 2MG",
  },
  {
    sku: "37859",
    name: "RIVOTRIL 0.5MG",
  },
  {
    sku: "16035",
    name: "RIVOTRIL 2MG",
  },
  {
    sku: "18109",
    name: "ROSART 100MG",
  },
  {
    sku: "17304",
    name: "ROSIDEN GEL 100G",
  },
  {
    sku: "37981",
    name: "ROSUCOR 10MG",
  },
  {
    sku: "16481",
    name: "ROSUCOR 20MG",
  },
  {
    sku: "16482",
    name: "ROSUVASTATIN SANDOZ 10MG",
  },
  {
    sku: "20807",
    name: "ROSUVASTATIN SANDOZ 20MG",
  },
  {
    sku: "18119",
    name: "ROSUVASTATIN STAREZ 10MG STELLA 10MG",
  },
  {
    sku: "18120",
    name: "ROSUVASTATIN STAREZ 10MG /ROSUVASTATIN STELLA 10MG",
  },
  {
    sku: "43789",
    name: "ROSUVOR 20MG",
  },
  {
    sku: "47625",
    name: "ROSUZET 10/10MG",
  },
  {
    sku: "17769",
    name: "ROSUZET 10/20MG",
  },
  {
    sku: "31837",
    name: "ROTAQOR 10MG",
  },
  {
    sku: "24007",
    name: "ROTAQOR 20MG",
  },
  {
    sku: "31613",
    name: "ROWATANAL CREAM 26G",
  },
  {
    sku: "29574",
    name: "ROXY 10'S",
  },
  {
    sku: "24050",
    name: "ROXY 150MG",
  },
  {
    sku: "46434",
    name: "ROXY 1'S",
  },
  {
    sku: "45163",
    name: "ROZEX GEL 0.0075 15G",
  },
  {
    sku: "43883",
    name: "RYBELSUS 14MG",
  },
  {
    sku: "36418",
    name: "RYBELSUS 3MG",
  },
  {
    sku: "38714",
    name: "RYBELSUS 7MG",
  },
  {
    sku: "34594",
    name: "SAFROSYN 275MG",
  },
  {
    sku: "22564",
    name: "SAFROSYN 550MG",
  },
  {
    sku: "22361",
    name: "SALAZOPYRIN TAB 500MG",
  },
  {
    sku: "26523",
    name: "SALBUNEB NEBULISER SOLUTION 2.5MG/2.5ML 10 X",
  },
  {
    sku: "32289",
    name: "SALBUNEB NEBULISER SOLUTION 2.5MG/2.5ML",
  },
  {
    sku: "15931",
    name: "SALMAX CR 4MG",
  },
  {
    sku: "18737",
    name: "SALMODEX SYRUP 100ML",
  },
  {
    sku: "45162",
    name: "SALOFALK 500MG",
  },
  {
    sku: "18121",
    name: "SALOFALK ENEMA",
  },
  {
    sku: "17102",
    name: "SALOFALK SUPP 500MG",
  },
  {
    sku: "18124",
    name: "SAMSCA TOLVAPTAN TABLET 15MG",
  },
  {
    sku: "16321",
    name: "SANBEFLAM GEL 0.025",
  },
  {
    sku: "18123",
    name: "SANDIMMUN NEORAL 100MG",
  },
  {
    sku: "45129",
    name: "SANDIMMUN NEORAL 25MG",
  },
  {
    sku: "43979",
    name: "SANDOZ CANDESARTAN 16MG",
  },
  {
    sku: "45180",
    name: "SANDOZ CANDESARTAN 8MG",
  },
  {
    sku: "47601",
    name: "SANDOZ CANDESARTAN HCT 16MG/ 12.5MG",
  },
  {
    sku: "47602",
    name: "SANDOZ DESLORATADINE 5MG",
  },
  {
    sku: "17861",
    name: "SANDOZ HEMAPIX TAB 5MG",
  },
  {
    sku: "47673",
    name: "SANDOZ LETIMBLE 10MG 30S",
  },
  {
    sku: "38068",
    name: "SANDOZ PREGABALIN 150MG",
  },
  {
    sku: "38069",
    name: "SANDOZ PREGABALIN 75MG",
  },
  {
    sku: "17032",
    name: "SAPHRIS SL 10MG",
  },
  {
    sku: "17327",
    name: "SEDILIX LINCTUS",
  },
  {
    sku: "19752",
    name: "SEDNO SYRUP 60ML BLACKCURRANT",
  },
  {
    sku: "19753",
    name: "SEEBRI BREEZHALER 50MCG",
  },
  {
    sku: "29586",
    name: "SELEGOS 5MG",
  },
  {
    sku: "34239",
    name: "SELFIDE LOTION 120ML",
  },
  {
    sku: "34238",
    name: "SERENATA 50MG",
  },
  {
    sku: "23881",
    name: "SERETIDE ACCUHALER 50/100 60 DOSES",
  },
  {
    sku: "23775",
    name: "SERETIDE ACCUHALER 50/250 60 INHALATIONS",
  },
  {
    sku: "23880",
    name: "SERETIDE ACCUHALER 50/500 60 INHALATIONS",
  },
  {
    sku: "30061",
    name: "SERETIDE EVOHALER 25/125 120 METERED ACTUATIONS",
  },
  {
    sku: "30062",
    name: "SERETIDE EVOHALER 25/250 120 DOSES",
  },
  {
    sku: "20288",
    name: "SERETIDE EVOHALER 25/50 120 METERED ACTUATIONS",
  },
  {
    sku: "30089",
    name: "SERLIFT 50MG",
  },
  {
    sku: "17911",
    name: "SEROFLO 25MCG/125MCG INHALER",
  },
  {
    sku: "21435",
    name: "SEROFLO 25MCG/250MCG INHALER",
  },
  {
    sku: "21434",
    name: "SEROFLO 50/250 CIPHALER",
  },
  {
    sku: "47323",
    name: "SEROQUEL 100MG",
  },
  {
    sku: "45782",
    name: "SEROQUEL 200MG",
  },
  {
    sku: "21822",
    name: "SEROQUEL 25MG",
  },
  {
    sku: "1480",
    name: "SEROQUEL XR 200MG",
  },
  {
    sku: "18127",
    name: "SEROQUEL XR 400MG",
  },
  {
    sku: "4993",
    name: "SEROQUEL XR 50MG",
  },
  {
    sku: "22872",
    name: "SEROXAT CR 12.5MG",
  },
  {
    sku: "22871",
    name: "SEROXAT CR 25MG",
  },
  {
    sku: "22873",
    name: "SHIN POONG GENTAMICIN SULFATE CREAM 10G",
  },
  {
    sku: "6786",
    name: "SHINCORT INJECTION 40MG 5ML X",
  },
  {
    sku: "40497",
    name: "SHRINGRIX VACCINE",
  },
  {
    sku: "40495",
    name: "SIAM BHEASACH VIVERE 0.05 CREAM 5G",
  },
  {
    sku: "40496",
    name: "SIAM LOMIDE CAPSULE 2MG",
  },
  {
    sku: "42912",
    name: "SIAM MOLAX-M 10MG",
  },
  {
    sku: "42911",
    name: "SIAM MOLAX-M 10MG 10",
  },
  {
    sku: "41333",
    name: "SIFROL 0.125MG",
  },
  {
    sku: "41334",
    name: "SIFROL 0.375MG",
  },
  {
    sku: "41336",
    name: "SIFROL 1.5MG",
  },
  {
    sku: "18233",
    name: "SII TETANUS TOXOID VACCINE ADSORBED",
  },
  {
    sku: "16307",
    name: "SILDEGRA 1'S",
  },
  {
    sku: "46726",
    name: "SILDEGRA 4'S",
  },
  {
    sku: "46728",
    name: "SILFAZINE CREAM 500G",
  },
  {
    sku: "46727",
    name: "SILVERDERM CREAM 50G",
  },
  {
    sku: "18317",
    name: "SIMTEC 10MG",
  },
  {
    sku: "18304",
    name: "SIMVASTATIN 20MG",
  },
  {
    sku: "18305",
    name: "SIMVASTATIN 40MG",
  },
  {
    sku: "16721",
    name: "SIMVOR 10MG",
  },
  {
    sku: "21585",
    name: "SIMVOR 20MG",
  },
  {
    sku: "17735",
    name: "SIMVOR 40MG",
  },
  {
    sku: "33388",
    name: "SINGULAIR 10MG",
  },
  {
    sku: "36575",
    name: "SINGULAIR 4MG",
  },
  {
    sku: "45835",
    name: "SINGULAIR 4MG ORAL GRANULES",
  },
  {
    sku: "43665",
    name: "SINGULAIR 5MG",
  },
  {
    sku: "28353",
    name: "SIVACOL-20 100'S",
  },
  {
    sku: "30612",
    name: "SIVACOL-20 10'S+++",
  },
  {
    sku: "14065",
    name: "SIVACOL-20 1'S+++",
  },
  {
    sku: "36253",
    name: "SKINOREN CREAM 30G",
  },
  {
    sku: "17929",
    name: "SKUDEXA TAB 75MG/25MG",
  },
  {
    sku: "28585",
    name: "SM BACTRICIN OINT 15G",
  },
  {
    sku: "34192",
    name: "SM CLOZOLE 0.01 CREAM 15G",
  },
  {
    sku: "4847",
    name: "SM FUNGISTAT CREAM 15G",
  },
  {
    sku: "4848",
    name: "SM XETEC ORAL SOLUTION 60ML",
  },
  {
    sku: "4849",
    name: "SOBENZ MELON",
  },
  {
    sku: "17547",
    name: "SOBENZ ORANGE",
  },
  {
    sku: "19814",
    name: "SODIUM BICARBONATE 0.084 INJECTION",
  },
  {
    sku: "19815",
    name: "SOFCARE 5MG TABLET",
  },
  {
    sku: "17235",
    name: "SOFIDROX 500MG",
  },
  {
    sku: "42259",
    name: "SOFILEX ORAL SUSP 60ML",
  },
  {
    sku: "45464",
    name: "SOLIAN 100MG",
  },
  {
    sku: "16315",
    name: "SOLU-CORTEF INJECTION 100MG 2ML X 25",
  },
  {
    sku: "18243",
    name: "SOMIDEM 10MG",
  },
  {
    sku: "17018",
    name: "SOPRESSOR 80MG",
  },
  {
    sku: "17165",
    name: "SPAMODYN 40MG",
  },
  {
    sku: "30033",
    name: "SPASMOLYT 20MG",
  },
  {
    sku: "20597",
    name: "SPEDRA 100MG TAB",
  },
  {
    sku: "41739",
    name: "SPEDRA 200MG",
  },
  {
    sku: "47656",
    name: "SPIOLTO RESPIMAT 60 PUFFS",
  },
  {
    sku: "47478",
    name: "SPIOLTO RESPIMAT REFILL",
  },
  {
    sku: "38533",
    name: "SPIOLTO RESPIMAT REUSABLE",
  },
  {
    sku: "38534",
    name: "SPIRIVA RESPIMAT REFILL",
  },
  {
    sku: "42640",
    name: "SPIRIVA RESPIMAT REUSABLE",
  },
  {
    sku: "42639",
    name: "SPIRONOLACTONE 25MG",
  },
  {
    sku: "17681",
    name: "SPORANOX 100MG",
  },
  {
    sku: "47692",
    name: "SSD CREAM 15G",
  },
  {
    sku: "20392",
    name: "STABLON 30'S",
  },
  {
    sku: "20391",
    name: "STADA STADELTINE 5MG",
  },
  {
    sku: "25256",
    name: "STADOVAS 10MG",
  },
  {
    sku: "16114",
    name: "STADOVAS 5MG",
  },
  {
    sku: "18258",
    name: "STALEVO TABS 100/25/200MG",
  },
  {
    sku: "16559",
    name: "STALEVO TABS 150/37.5/200MG",
  },
  {
    sku: "16558",
    name: "STALEVO TABS 200/50/200MG",
  },
  {
    sku: "19248",
    name: "STALEVO TABS 50/12.5/200MG",
  },
  {
    sku: "16561",
    name: "STARFLU 75MG",
  },
  {
    sku: "16560",
    name: "STELLAPHARM STALDETINE 5MG",
  },
  {
    sku: "32931",
    name: "STILNOX 10MG",
  },
  {
    sku: "32932",
    name: "STORVAS C 10MG ATORVASTATIN CALCIUM TABLETS",
  },
  {
    sku: "18209",
    name: "STORVAS C 20MG",
  },
  {
    sku: "33203",
    name: "STORVAS C 40MG",
  },
  {
    sku: "18263",
    name: "STORVAS C 80MG",
  },
  {
    sku: "16935",
    name: "STREPSILS MAX PLUS",
  },
  {
    sku: "18265",
    name: "STREPSILS MAX PRO",
  },
  {
    sku: "16339",
    name: "STREPSILS MAX PRO SPRAY 15ML",
  },
  {
    sku: "18267",
    name: "STROKAN 250MG",
  },
  {
    sku: "18269",
    name: "STUGERON 25MG",
  },
  {
    sku: "15911",
    name: "SUN-GLIZIDE 30MR",
  },
  {
    sku: "40549",
    name: "SUNPROX 275MG",
  },
  {
    sku: "47622",
    name: "SUNPROX 550MG",
  },
  {
    sku: "18301",
    name: "SUNTUSS SYRUP 120ML",
  },
  {
    sku: "14629",
    name: "SUNWARD ALLERSIN SYRUP 60ML",
  },
  {
    sku: "18300",
    name: "SUNWARD ALLERSIN-F 4MG",
  },
  {
    sku: "46261",
    name: "SUNWARD ASMALIN EXPECTORANT 120ML",
  },
  {
    sku: "31356",
    name: "SUNWARD ASMALIN SYRUP 120ML",
  },
  {
    sku: "14070",
    name: "SUNWARD ASMOL SYRUP 60ML",
  },
  {
    sku: "17936",
    name: "SUNWARD BENIL TABLET",
  },
  {
    sku: "41534",
    name: "SUNWARD BETAMETHASONE CREAM 0.001 15G",
  },
  {
    sku: "43167",
    name: "SUNWARD BETAMETHASONE CREAM 30G",
  },
  {
    sku: "43168",
    name: "SUNWARD CONMY 2MG",
  },
  {
    sku: "17849",
    name: "SUNWARD CROTAMIXONE CREAM 15G",
  },
  {
    sku: "18277",
    name: "SUNWARD DECONDINE SYRUP 120ML",
  },
  {
    sku: "41187",
    name: "SUNWARD DELTASOLONE TAB",
  },
  {
    sku: "18278",
    name: "SUNWARD DEXASONE",
  },
  {
    sku: "41770",
    name: "SUNWARD DIATROL 2MG",
  },
  {
    sku: "27464",
    name: "SUNWARD DIMENHYDRINATE 50MG",
  },
  {
    sku: "37313",
    name: "SUNWARD FENADIUM F 50MG",
  },
  {
    sku: "37058",
    name: "SUNWARD FENAGESIC",
  },
  {
    sku: "37631",
    name: "SUNWARD FENAGESIC SUSPENSION 60ML",
  },
  {
    sku: "16713",
    name: "SUNWARD FENAGESIC TAB 250MG",
  },
  {
    sku: "18284",
    name: "SUNWARD FENAGESIC TAB 500MG",
  },
  {
    sku: "16900",
    name: "SUNWARD HYOSUN SYRUP 60ML",
  },
  {
    sku: "18285",
    name: "SUNWARD LINDACIN CAP",
  },
  {
    sku: "44675",
    name: "SUNWARD LOBESOL CREAM 15G",
  },
  {
    sku: "17308",
    name: "SUNWARD MENDICOF SYRUP 120ML",
  },
  {
    sku: "40177",
    name: "SUNWARD METFORMIN 850MG",
  },
  {
    sku: "21487",
    name: "SUNWARD METFORMIN TABLET 500MG",
  },
  {
    sku: "16786",
    name: "SUNWARD METOCLOPRAMIDE 10MG",
  },
  {
    sku: "43766",
    name: "SUNWARD METOCLOPRAMIDE SYRUP 120ML",
  },
  {
    sku: "38292",
    name: "SUNWARD MUCOCLEAR TABLET",
  },
  {
    sku: "38291",
    name: "SUNWARD NALOL 40MG",
  },
  {
    sku: "18291",
    name: "SUNWARD ONADRINE 50MG",
  },
  {
    sku: "18294",
    name: "SUNWARD PAEDICOF SYRUP 60ML",
  },
  {
    sku: "17368",
    name: "SUNWARD POLARAX 2MG",
  },
  {
    sku: "13107",
    name: "SUNWARD POLARAX SYRUP 60ML",
  },
  {
    sku: "44792",
    name: "SUNWARD POLARINE SYRUP 60ML",
  },
  {
    sku: "35538",
    name: "SUNWARD PROBENECID",
  },
  {
    sku: "16595",
    name: "SUNWARD PROPERAZINE TAB",
  },
  {
    sku: "18295",
    name: "SUNWARD SUNADINE 10MG",
  },
  {
    sku: "46109",
    name: "SUNWARD SUNADINE SYRUP 120ML",
  },
  {
    sku: "46108",
    name: "SUNWARD SUNAZOL CREAM 15G",
  },
  {
    sku: "18577",
    name: "SUNWARD SUN-DIANOX",
  },
  {
    sku: "17926",
    name: "SUNWARD SUNEX COUGH SYRUP 120ML",
  },
  {
    sku: "23791",
    name: "SUNWARD SUN-GLIZIDE 80MG",
  },
  {
    sku: "17221",
    name: "SUNWARD SUNITON",
  },
  {
    sku: "36373",
    name: "SUNWARD SUNIZINE 10MG TABLET",
  },
  {
    sku: "18592",
    name: "SUNWARD SUNIZINE SYRUP 120ML",
  },
  {
    sku: "18593",
    name: "SUNWARD SUNOLUT",
  },
  {
    sku: "17724",
    name: "SUNWARD SUNPEPCIN 20MG",
  },
  {
    sku: "31814",
    name: "SUNWARD SUNPEPCIN 20MG 10",
  },
  {
    sku: "32720",
    name: "SUNWARD SUNPEPCIN 40MG",
  },
  {
    sku: "36216",
    name: "SUNWARD SUNPEPCIN 40MG 10",
  },
  {
    sku: "36372",
    name: "SUNWARD SUNVASC 5MG",
  },
  {
    sku: "26545",
    name: "SUNWARD TENOL 50MG",
  },
  {
    sku: "26547",
    name: "SUNWARD TRICONAZOLE CREAM 15G",
  },
  {
    sku: "18362",
    name: "SUNWARD TRICONAZOLE CREAM 15G X 24",
  },
  {
    sku: "37630",
    name: "SUNWARD TRINOLONE 4MG",
  },
  {
    sku: "18363",
    name: "SUNWARD ZORAX CREAM 5G",
  },
  {
    sku: "17604",
    name: "SUPIROCIN OINTMENT 15G",
  },
  {
    sku: "41175",
    name: "SUTENT 12.5MG",
  },
  {
    sku: "41174",
    name: "SYBRAVA 284MG/1.5ML INJECTION",
  },
  {
    sku: "45897",
    name: "SYMBICORT RAPIHALER 160/4.5 MCG PMDI 120 DOSE",
  },
  {
    sku: "42146",
    name: "SYMBICORT RAPIHALER 80/4.5 MCG PMDI 120 DOSE",
  },
  {
    sku: "42145",
    name: "SYMBICORT TURBUHALER 160/4.5 MCG 120 DOSE",
  },
  {
    sku: "42144",
    name: "SYMBICORT TURBUHALER 160/4.5 MCG 30 DOSE",
  },
  {
    sku: "17749",
    name: "SYMBICORT TURBUHALER 160/4.5 MCG 60 DOSE",
  },
  {
    sku: "38317",
    name: "SYMVENU 1.5MG HARD CAPSULES",
  },
  {
    sku: "47557",
    name: "SYMVENU 3MG HARD CAPSULES",
  },
  {
    sku: "18340",
    name: "SYNERRV ATORVASTATIN 10MG 4",
  },
  {
    sku: "37866",
    name: "SYNERRV ATORVASTATIN 10MG",
  },
  {
    sku: "18341",
    name: "SYNERRV ATORVASTATIN 20MG",
  },
  {
    sku: "36421",
    name: "SYNERRV ATORVASTATIN 20MG 4",
  },
  {
    sku: "45236",
    name: "SYNERRV ATORVASTATIN 40MG",
  },
  {
    sku: "20340",
    name: "SYNERRV ATORVASTATIN 40MG 4",
  },
  {
    sku: "17388",
    name: "SYNERRV ATORVASTATIN 80",
  },
  {
    sku: "18349",
    name: "SYNERRV DESLORATADINE TABLETS 5MG",
  },
  {
    sku: "18350",
    name: "SYNERRV FEXOFENADINE 180MG",
  },
  {
    sku: "17551",
    name: "SYNERRV GLIT 30MG",
  },
  {
    sku: "18348",
    name: "SYNERRV GLIT 30MG 2",
  },
  {
    sku: "21430",
    name: "SYNERRV METSWIFT XR 1000MG",
  },
  {
    sku: "17801",
    name: "SYNFLEX 275MG",
  },
  {
    sku: "47560",
    name: "SYNFLEX 550MG",
  },
  {
    sku: "20839",
    name: "TACARLINE 1MG/ML",
  },
  {
    sku: "19288",
    name: "TACROZ OINTMENT 0.001",
  },
  {
    sku: "16535",
    name: "TADALAFIL STELLA 20MG",
  },
  {
    sku: "37622",
    name: "TAFLON 25MG",
  },
  {
    sku: "26197",
    name: "TAFLOTAN SOLUTION 2.5ML",
  },
  {
    sku: "26198",
    name: "TAGRISSO 80MG",
  },
  {
    sku: "44619",
    name: "TALIS 20",
  },
  {
    sku: "18354",
    name: "TAMBOCOR 100MG",
  },
  {
    sku: "37867",
    name: "TAMIFLU 10'S",
  },
  {
    sku: "16144",
    name: "TAMIFLU 1'S",
  },
  {
    sku: "18355",
    name: "TANATRIL 10MG",
  },
  {
    sku: "44622",
    name: "TAPICIN POWDER FOR INJECTION 4.5G",
  },
  {
    sku: "18619",
    name: "TARIVID OPHTHALMIC SOLUTION 5ML",
  },
  {
    sku: "17033",
    name: "TARIVID OTIC SOLUTION 5ML",
  },
  {
    sku: "19298",
    name: "TARIVID OTIC SOLUTION",
  },
  {
    sku: "23518",
    name: "TEGRETOL 0.02 SYRUP 250ML",
  },
  {
    sku: "37621",
    name: "TEGRETOL 200MG",
  },
  {
    sku: "44631",
    name: "TEGRETOL CR 200MG",
  },
  {
    sku: "37868",
    name: "TEGRETOL CR 400MG",
  },
  {
    sku: "38579",
    name: "TELCORD H 80MG/12.5MG",
  },
  {
    sku: "18356",
    name: "TELEACT 40MG",
  },
  {
    sku: "17315",
    name: "TELEACT 80MG",
  },
  {
    sku: "16929",
    name: "TELFAST 180MG",
  },
  {
    sku: "17387",
    name: "TELFAST D",
  },
  {
    sku: "37870",
    name: "TELFAST ORAL SUSPENSION 30MG/5ML",
  },
  {
    sku: "30731",
    name: "TELI H 40MG/12.5MG",
  },
  {
    sku: "40503",
    name: "TELMIDIP 40MG",
  },
  {
    sku: "40504",
    name: "TELMIDIP 80MG",
  },
  {
    sku: "40686",
    name: "TELMISARTAN TABLETS 40MG",
  },
  {
    sku: "41100",
    name: "TELSWIFT 40MG",
  },
  {
    sku: "45957",
    name: "TELSWIFT 80MG",
  },
  {
    sku: "17810",
    name: "TEMODAL 100MG",
  },
  {
    sku: "17314",
    name: "TEMOZAM 100MG",
  },
  {
    sku: "21784",
    name: "TENOF 300MG",
  },
  {
    sku: "41425",
    name: "TENOF-EM 200MG/300MG",
  },
  {
    sku: "44918",
    name: "TENOLON 300MG",
  },
  {
    sku: "33546",
    name: "TENORMIN 50MG",
  },
  {
    sku: "46513",
    name: "TENVIR FILM-COATED TABLET 300MG",
  },
  {
    sku: "17016",
    name: "TERASIN TABLET 2MG 10 X",
  },
  {
    sku: "45203",
    name: "TERASIN TABLET 2MG",
  },
  {
    sku: "41935",
    name: "TERBICIP 28'S",
  },
  {
    sku: "38573",
    name: "TERNAFIN CREAM 15G",
  },
  {
    sku: "38574",
    name: "TERRAMYCIN OPHTHALMIC OINTMENT 1/8OZ 3.5GM STERILE",
  },
  {
    sku: "38341",
    name: "TETRACYCLINE MC 250MG CAPS",
  },
  {
    sku: "38332",
    name: "THYROSIT 100MCG",
  },
  {
    sku: "37146",
    name: "TIBOLEEN 28'S",
  },
  {
    sku: "37145",
    name: "TIDACT 0.01 GEL 20G",
  },
  {
    sku: "40174",
    name: "TIDACT 300MG",
  },
  {
    sku: "43661",
    name: "TIMAZOL 5MG",
  },
  {
    sku: "18230",
    name: "TIMO-COMOD 0.005 STERILE EYE DROPS 10ML",
  },
  {
    sku: "16052",
    name: "TIMOLOL-POS 0.005 EYE DROPS 5ML",
  },
  {
    sku: "18229",
    name: "TIMOPTOL-XE OWI 0.005 2.5ML",
  },
  {
    sku: "16797",
    name: "TIVICAY 50MG",
  },
  {
    sku: "36395",
    name: "TOBRADEX EYE DROP 5ML",
  },
  {
    sku: "43293",
    name: "TOBRADEX EYE OINTMENT 3.5G",
  },
  {
    sku: "44917",
    name: "TOBREX EYE DROP 5ML",
  },
  {
    sku: "44916",
    name: "TOLANZ 10MG",
  },
  {
    sku: "26741",
    name: "TOLANZ 5MG",
  },
  {
    sku: "35162",
    name: "TOLCHICINE 0.6MG",
  },
  {
    sku: "18432",
    name: "TOLURA 80MG",
  },
  {
    sku: "44684",
    name: "TOPAMAX 100",
  },
  {
    sku: "28549",
    name: "TOPAMAX 25MG",
  },
  {
    sku: "17462",
    name: "TOPAMAX 50MG",
  },
  {
    sku: "18438",
    name: "TORCOXIB 200MG",
  },
  {
    sku: "32608",
    name: "TORLEVA 1000MG",
  },
  {
    sku: "46693",
    name: "TORLEVA 500MG",
  },
  {
    sku: "16294",
    name: "TORPEZIL 10MG",
  },
  {
    sku: "18443",
    name: "TORPEZIL 5MG",
  },
  {
    sku: "46696",
    name: "TOUJEO SOLOSTAR",
  },
  {
    sku: "46697",
    name: "TRACHISAN LOZENGES",
  },
  {
    sku: "47388",
    name: "TRACIDOL INJECTION 50MG/ML VIAL",
  },
  {
    sku: "47389",
    name: "TRACLEER 125MG TAB",
  },
  {
    sku: "47387",
    name: "TRADOL 10'S",
  },
  {
    sku: "19950",
    name: "TRADOL 1'S",
  },
  {
    sku: "19951",
    name: "TRADOL 30'S",
  },
  {
    sku: "19952",
    name: "TRAJENTA 5MG",
  },
  {
    sku: "19949",
    name: "TRAJENTA DUO 2.5MG/1000MG",
  },
  {
    sku: "16130",
    name: "TRAJENTA DUO 2.5MG/500MG",
  },
  {
    sku: "33864",
    name: "TRAJENTA DUO 2.5MG/850MG",
  },
  {
    sku: "46945",
    name: "TRAMADA 50MG",
  },
  {
    sku: "37883",
    name: "TRANDATE 100MG",
  },
  {
    sku: "37882",
    name: "TRANSAMIN 250MG",
  },
  {
    sku: "38640",
    name: "TRAVATAN EYE DROP 0.00004 2.5ML",
  },
  {
    sku: "34270",
    name: "TRAVOCORT CREAM 10G",
  },
  {
    sku: "25267",
    name: "TREN CAP",
  },
  {
    sku: "16627",
    name: "TRESIBA FLEXTOUCH 100U/ML 3ML",
  },
  {
    sku: "18453",
    name: "TRETINON CREAM 0.0005 20G",
  },
  {
    sku: "43790",
    name: "TREVIVE TAB 100MG",
  },
  {
    sku: "32365",
    name: "TREZILENT 150MG",
  },
  {
    sku: "32366",
    name: "TRIDIN P SYRUP 60ML",
  },
  {
    sku: "29816",
    name: "TRIDIN-P",
  },
  {
    sku: "17356",
    name: "TRILEPTAL 300MG",
  },
  {
    sku: "47128",
    name: "TRILEPTAL 600MG",
  },
  {
    sku: "46998",
    name: "TRILON-E CREAM 15G",
  },
  {
    sku: "47129",
    name: "TRIMIC SUPPOSITORIES",
  },
  {
    sku: "7072",
    name: "TRIPLIXAM 10/2.5/10MG",
  },
  {
    sku: "19589",
    name: "TRIPLIXAM 10/2.5/5MG",
  },
  {
    sku: "17333",
    name: "TRIPLIXAM 5/1.25/10MG",
  },
  {
    sku: "18490",
    name: "TRIPLIXAM 5/1.25/5MG",
  },
  {
    sku: "18491",
    name: "TRITACE 10MG",
  },
  {
    sku: "19797",
    name: "TRITACE 2.5MG",
  },
  {
    sku: "16526",
    name: "TRITACE 5MG",
  },
  {
    sku: "33990",
    name: "TRIVASTAL RETARD 50MG",
  },
  {
    sku: "5017",
    name: "TRIVEDON MR",
  },
  {
    sku: "17903",
    name: "TRULICITY 0.75MG/0.5ML X",
  },
  {
    sku: "18496",
    name: "TRUSOPT 0.02 5ML",
  },
  {
    sku: "18499",
    name: "TS-ONE CAPSULE 20MG",
  },
  {
    sku: "17902",
    name: "TS-ONE CAPSULE 25MG",
  },
  {
    sku: "18498",
    name: "TULIP 40MG",
  },
  {
    sku: "17536",
    name: "TUSSIDEX FORTE LINCTUS 120ML",
  },
  {
    sku: "35760",
    name: "TWYNSTA 40MG/10MG",
  },
  {
    sku: "22357",
    name: "TWYNSTA 40MG/5MG",
  },
  {
    sku: "33688",
    name: "TWYNSTA 80MG/10MG",
  },
  {
    sku: "18505",
    name: "TWYNSTA 80MG/5MG",
  },
  {
    sku: "18503",
    name: "TYKERB 250MG",
  },
  {
    sku: "18504",
    name: "TYMIDIN 200MG",
  },
  {
    sku: "17833",
    name: "TYSTATIN ORAL SUSPENSION 30ML",
  },
  {
    sku: "17908",
    name: "UFUR CAP",
  },
  {
    sku: "43519",
    name: "U-KEFEN 1MG",
  },
  {
    sku: "40284",
    name: "ULTIBRO BREEZHALER",
  },
  {
    sku: "46228",
    name: "ULTRACET 37.5MG",
  },
  {
    sku: "21423",
    name: "UNASYN 375MG",
  },
  {
    sku: "18222",
    name: "UNIFLEX CREAM 0.001 15G",
  },
  {
    sku: "18221",
    name: "UNIFLEX-N CREAM 15G",
  },
  {
    sku: "17658",
    name: "UNIFLEX-N CREAM 15G 20",
  },
  {
    sku: "18220",
    name: "UNIMED DICLORAN GEL 20G",
  },
  {
    sku: "18219",
    name: "UNIQUIN 200MG",
  },
  {
    sku: "17408",
    name: "UNIREN 0.01 W/W GEL 25G",
  },
  {
    sku: "18218",
    name: "UNIREN SPRAY 0.01 60ML",
  },
  {
    sku: "18217",
    name: "UNIVATE CREAM 15G",
  },
  {
    sku: "17645",
    name: "UNIVATE OINTMENT 15G",
  },
  {
    sku: "18216",
    name: "UNIZET EXPECTORANT 100ML",
  },
  {
    sku: "45777",
    name: "UNOCEF INJECTION 1000MG",
  },
  {
    sku: "45778",
    name: "UPHADYL FORTE EXPECTORANT 90ML",
  },
  {
    sku: "2570",
    name: "URIEF FILM-COATED TAB SILODOSIN 4MG",
  },
  {
    sku: "18513",
    name: "URIPAX FILM COATED TABLET 200MG X",
  },
  {
    sku: "37617",
    name: "URIPAX FILM COATED TABLET 200MG",
  },
  {
    sku: "18516",
    name: "URISPAS 200MG",
  },
  {
    sku: "1497",
    name: "URSOFALK 100'S",
  },
  {
    sku: "16213",
    name: "URSOFALK 1'S",
  },
  {
    sku: "37616",
    name: "URSOFALK 25'S",
  },
  {
    sku: "29276",
    name: "URSOSAN HARD CAPSULE 250MG",
  },
  {
    sku: "29275",
    name: "UTROGESTAN 100MG",
  },
  {
    sku: "43549",
    name: "VACODIL 25MG 10",
  },
  {
    sku: "15915",
    name: "VACODIL 25MG",
  },
  {
    sku: "35743",
    name: "VACONTIL TAB 2MG",
  },
  {
    sku: "23768",
    name: "VALDOXAN 25MG",
  },
  {
    sku: "17151",
    name: "VALSARTAN SANDOZ 160MG",
  },
  {
    sku: "19337",
    name: "VALSARTAN SANDOZ 160MG 2",
  },
  {
    sku: "17859",
    name: "VALTREX 500MG",
  },
  {
    sku: "31310",
    name: "VALZAAR 160MG",
  },
  {
    sku: "23830",
    name: "VAMLO 10MG",
  },
  {
    sku: "18545",
    name: "VAMLO 5MG",
  },
  {
    sku: "18547",
    name: "VARIVAX 1 DOSE",
  },
  {
    sku: "17723",
    name: "VASCOR 20MG",
  },
  {
    sku: "16473",
    name: "VASCOR 40MG",
  },
  {
    sku: "17583",
    name: "VASOTEN F.C. 5MG",
  },
  {
    sku: "37836",
    name: "VASTAREL 20MG",
  },
  {
    sku: "9527",
    name: "VASTAREL MR 35MG",
  },
  {
    sku: "22980",
    name: "VASTAREL XR 80MG",
  },
  {
    sku: "22979",
    name: "VASTICURE-10MG",
  },
  {
    sku: "14074",
    name: "VASTICURE-20MG",
  },
  {
    sku: "18553",
    name: "VASTINOR 10MG",
  },
  {
    sku: "18555",
    name: "VASTINOR 20MG",
  },
  {
    sku: "18554",
    name: "VAXCEL LIGNOCAINE 0.02 INJECTION 10ML X",
  },
  {
    sku: "18557",
    name: "VELLO-5 TOPICAL SOLUTION 60ML",
  },
  {
    sku: "17567",
    name: "VELOXIN 25/50MG",
  },
  {
    sku: "18556",
    name: "VELPHORO CHEWABLE TABLET 500MG",
  },
  {
    sku: "18559",
    name: "VELSONE 800MG",
  },
  {
    sku: "17565",
    name: "VEMLIDY 25MG",
  },
  {
    sku: "18558",
    name: "VENCID 40MG",
  },
  {
    sku: "17904",
    name: "VENCLEXTA 100MG",
  },
  {
    sku: "43104",
    name: "VENCLEXTA 50MG",
  },
  {
    sku: "18215",
    name: "VENLIFT ER 150MG",
  },
  {
    sku: "45216",
    name: "VENLIFT ER 75MG CAPSULES",
  },
  {
    sku: "18214",
    name: "VENOFER 100MG 5ML",
  },
  {
    sku: "16872",
    name: "VENTOLIN 1MG/ML NEBULES",
  },
  {
    sku: "18573",
    name: "VENTOLIN EVOHALER 100MG 200D",
  },
  {
    sku: "16821",
    name: "VENTOLIN RESPIRATOR SOLUTION 10ML",
  },
  {
    sku: "18572",
    name: "VENTOLIN SYRUP 120ML /100ML",
  },
  {
    sku: "18565",
    name: "VERAHEXAL 120SR",
  },
  {
    sku: "17294",
    name: "VERRUMAL SOLUTION 13ML",
  },
  {
    sku: "14067",
    name: "VESICARE 5MG",
  },
  {
    sku: "34930",
    name: "VESSEL DUE F",
  },
  {
    sku: "24631",
    name: "VFEND 200MG",
  },
  {
    sku: "14068",
    name: "VIACORAM 3.5MG/ 2.5MG",
  },
  {
    sku: "14086",
    name: "VIAGRA 100MG",
  },
  {
    sku: "36396",
    name: "VIBRAMYCIN TAB 100MG",
  },
  {
    sku: "16267",
    name: "VICIDE CREAM 10G",
  },
  {
    sku: "46484",
    name: "VICTOZA PENS",
  },
  {
    sku: "42010",
    name: "VIGAMOX 0.005 EYE DROP 5ML",
  },
  {
    sku: "18561",
    name: "VIGNOCAINE 100ML",
  },
  {
    sku: "16377",
    name: "VIMOVO 500MG/20MG",
  },
  {
    sku: "18563",
    name: "VIRLESS 800MG",
  },
  {
    sku: "37366",
    name: "VISANNE 2MG",
  },
  {
    sku: "33110",
    name: "VITRAQ CLOPIDOGREL 75MG",
  },
  {
    sku: "37873",
    name: "VIVIC 1'S",
  },
  {
    sku: "2081",
    name: "VIVIC 4'S",
  },
  {
    sku: "18648",
    name: "VIZIMPRO 15MG",
  },
  {
    sku: "38368",
    name: "VIZOMET CREAM 15G",
  },
  {
    sku: "38331",
    name: "VIZOMET CREAM 15G 20",
  },
  {
    sku: "38369",
    name: "VIZOMET OINTMENT 15G",
  },
  {
    sku: "36654",
    name: "VOCINTI 10MG",
  },
  {
    sku: "25610",
    name: "VOCINTI 20MG",
  },
  {
    sku: "18654",
    name: "VOKER 20MG",
  },
  {
    sku: "18656",
    name: "VOLINA 3MG/ 0.03MG",
  },
  {
    sku: "18657",
    name: "VOLTAREN 50MG",
  },
  {
    sku: "27519",
    name: "VOLTAREN EMULGEL 0.01 50G",
  },
  {
    sku: "18659",
    name: "VOLTAREN EMULGEL 0.02 30G",
  },
  {
    sku: "18658",
    name: "VOLTAREN EMULGEL 0.02 50G",
  },
  {
    sku: "16590",
    name: "VOLTAREN SR100",
  },
  {
    sku: "16591",
    name: "VOLTAREN SUPP 12.5MG",
  },
  {
    sku: "20833",
    name: "VOLTAREN SUPP 25MG",
  },
  {
    sku: "18662",
    name: "VOLTAREN SUPP 50MG",
  },
  {
    sku: "18663",
    name: "VOREN 25MG",
  },
  {
    sku: "45119",
    name: "VOREN 50MG",
  },
  {
    sku: "35888",
    name: "VOREN GEL 20G",
  },
  {
    sku: "42089",
    name: "VOREN PLUS GEL 20G",
  },
  {
    sku: "42090",
    name: "VOREN PLUS GEL 45G",
  },
  {
    sku: "42088",
    name: "VOREN SUPP 12.5MG",
  },
  {
    sku: "47057",
    name: "VOREN SUPP 25MG",
  },
  {
    sku: "36176",
    name: "VOTAN SR 100MG",
  },
  {
    sku: "36295",
    name: "VOTMINE INJECTION 50MG/10ML",
  },
  {
    sku: "40762",
    name: "VOTRIENT 400MG",
  },
  {
    sku: "47490",
    name: "VYTAN VALSARTAN 160MG",
  },
  {
    sku: "45609",
    name: "VYTAN VALSARTAN 80MG",
  },
  {
    sku: "37578",
    name: "VYTOCOR 10MG/40MG",
  },
  {
    sku: "14096",
    name: "VYTORIN 10/20MG",
  },
  {
    sku: "36272",
    name: "VYTORIN 10/40MG",
  },
  {
    sku: "18206",
    name: "WINADRYL EXPECT 120ML",
  },
  {
    sku: "16343",
    name: "WINDEX SYRUP 120ML",
  },
  {
    sku: "9280",
    name: "WINDEXCO SYRUP 90ML",
  },
  {
    sku: "23683",
    name: "WINOFEN SUSPENSION 100ML",
  },
  {
    sku: "18667",
    name: "WINWA ANTISMINE SYRUP 60ML FRUITY FLAVOUR",
  },
  {
    sku: "17515",
    name: "WINWA ECOSOLVE PLUS CREAM 15G",
  },
  {
    sku: "18668",
    name: "WINWA FUDERM 0.02 W/W ANTIBACTERIAL CREAM 15G",
  },
  {
    sku: "16238",
    name: "WINWA TRICODERM OINTMENT 10G",
  },
  {
    sku: "18670",
    name: "XAMIOL GEL 30G",
  },
  {
    sku: "17445",
    name: "XANAX 0.25MG",
  },
  {
    sku: "18669",
    name: "XANAX 0.5MG",
  },
  {
    sku: "17618",
    name: "XANAX 1MG",
  },
  {
    sku: "18203",
    name: "XARELTO 10MG",
  },
  {
    sku: "16379",
    name: "XARELTO 15MG",
  },
  {
    sku: "21391",
    name: "XARELTO 2.5MG",
  },
  {
    sku: "17183",
    name: "XARELTO 20MG",
  },
  {
    sku: "5762",
    name: "XATRAL XL",
  },
  {
    sku: "18676",
    name: "XBIRA 250MG",
  },
  {
    sku: "18677",
    name: "XELJANZ 5MG TABLETS",
  },
  {
    sku: "18678",
    name: "XELODA 150MG",
  },
  {
    sku: "18679",
    name: "XELODA 500MG",
  },
  {
    sku: "17856",
    name: "XENICAL 1'S",
  },
  {
    sku: "30286",
    name: "XENICAL 21'S",
  },
  {
    sku: "30287",
    name: "XENICAL 84'S",
  },
  {
    sku: "30285",
    name: "XEPA ANTAMIN SYRUP 60ML",
  },
  {
    sku: "20399",
    name: "XEPA DEXTRACIN 5ML",
  },
  {
    sku: "20398",
    name: "XEPA EZEDE-D ORAL SOLUTION 60ML",
  },
  {
    sku: "46150",
    name: "XEPA UNIQLER CREAM 15G",
  },
  {
    sku: "14089",
    name: "XEPACORT CREAM",
  },
  {
    sku: "37884",
    name: "XEPAGAN ELIXIR 60ML",
  },
  {
    sku: "27518",
    name: "XEPAGAN-5 ELIXIR 60ML",
  },
  {
    sku: "31151",
    name: "XEPASONE 5MG",
  },
  {
    sku: "31155",
    name: "XGEVA SOIN FOR INJ 120MG/1.7ML",
  },
  {
    sku: "31153",
    name: "XIGDUO XR 10/1000",
  },
  {
    sku: "37885",
    name: "XIGDUO XR 10/1000 1S",
  },
  {
    sku: "18163",
    name: "XIGDUO XR 10/500",
  },
  {
    sku: "16032",
    name: "XIGDUO XR 5/1000",
  },
  {
    sku: "28659",
    name: "XOFLUZA TAB 40MG",
  },
  {
    sku: "18161",
    name: "XOLSTAT 10MG",
  },
  {
    sku: "16046",
    name: "XOLSTAT 20MG",
  },
  {
    sku: "18159",
    name: "XORIMAX 250MG",
  },
  {
    sku: "18160",
    name: "XORSONE 0.0444444444444444 CREAM 15G",
  },
  {
    sku: "18156",
    name: "XTANDI 40MG",
  },
  {
    sku: "17761",
    name: "XYLID CEFUROXIME AXETIL 250MG",
  },
  {
    sku: "21490",
    name: "XYLOCAINE JELLY 0.02 30G",
  },
  {
    sku: "21491",
    name: "XYZAL 5MG",
  },
  {
    sku: "43515",
    name: "Y.S.P BETAMETHASONE TABLET 0.5MG",
  },
  {
    sku: "18155",
    name: "Y.S.P SHINTAMET FILM COATED TABLET 400MG",
  },
  {
    sku: "37886",
    name: "Y.S.P VOREN SUPP 50MG",
  },
  {
    sku: "15669",
    name: "YASMIN 3MG",
  },
  {
    sku: "16075",
    name: "YAZ FTB 0.02/3MG",
  },
  {
    sku: "16076",
    name: "YSP APUZIN TABLET 25MG",
  },
  {
    sku: "16093",
    name: "YSP ASUMALIFE SYRUP 100ML",
  },
  {
    sku: "18154",
    name: "YSP ASUMALIFE TABLET 1MG",
  },
  {
    sku: "16094",
    name: "YSP BETAMETHASONE 0.5MG",
  },
  {
    sku: "18150",
    name: "YSP CIFLOX TAB 500MG",
  },
  {
    sku: "21912",
    name: "YSP DOXYMYCIN CAPSULE 100MG 100 X",
  },
  {
    sku: "34322",
    name: "YSP DOXYMYCIN CAPSULE 100MG",
  },
  {
    sku: "34323",
    name: "YSP ENAPRIL 20MG",
  },
  {
    sku: "34275",
    name: "YSP FUCON FILM TABLET 10MG",
  },
  {
    sku: "36165",
    name: "YSP FUCON SYRUP 1MG/ML 60ML",
  },
  {
    sku: "18685",
    name: "YSP LIPROCT SUPPOSITORY",
  },
  {
    sku: "18687",
    name: "YSP PONTALON 500MG",
  },
  {
    sku: "17496",
    name: "YSP SALBUTAMOL SYRUP 100ML 2MG/5ML",
  },
  {
    sku: "18686",
    name: "YSP SHINCORT INJECTION 10MG/ML",
  },
  {
    sku: "36838",
    name: "YSP TERASIN TABLET 5MG",
  },
  {
    sku: "36840",
    name: "YSP VIRLESS CREAM 5G",
  },
  {
    sku: "15641",
    name: "YULAREB 100MG",
  },
  {
    sku: "44612",
    name: "YULAREB 150MG",
  },
  {
    sku: "44620",
    name: "ZANIDIP 10MG",
  },
  {
    sku: "44638",
    name: "ZANIDIP 20MG",
  },
  {
    sku: "16842",
    name: "ZARICORT CREAM 15G",
  },
  {
    sku: "16734",
    name: "ZARICORT CREAM 15G 20",
  },
  {
    sku: "17124",
    name: "ZARIN CREAM 15G",
  },
  {
    sku: "47126",
    name: "ZARIN CREAM 15G 20",
  },
  {
    sku: "47125",
    name: "ZEFFIX 100MG",
  },
  {
    sku: "18710",
    name: "ZEMPLAR 5MCG 1ML",
  },
  {
    sku: "18709",
    name: "ZESTRIL 10MG",
  },
  {
    sku: "18712",
    name: "ZESTRIL 20MG",
  },
  {
    sku: "18714",
    name: "ZESTRIL 5MG",
  },
  {
    sku: "35022",
    name: "ZETEZE 14'S",
  },
  {
    sku: "17822",
    name: "ZETEZE-SM TABLETS 10+20MG",
  },
  {
    sku: "18148",
    name: "ZETEZE-SM TABLETS 10+40MG",
  },
  {
    sku: "47476",
    name: "ZETEZE-SM TABLETS 10+40MG 3 X",
  },
  {
    sku: "38044",
    name: "ZIMMEX 20MG",
  },
  {
    sku: "37475",
    name: "ZINDACLIN 0.01 GEL 30G",
  },
  {
    sku: "14088",
    name: "ZINNAT 250MG",
  },
  {
    sku: "37577",
    name: "ZINNAT 250MG SUSPENSION 50ML",
  },
  {
    sku: "18740",
    name: "ZINNAT SUSPENSION 125MG/5ML",
  },
  {
    sku: "20455",
    name: "ZIOMYCIN 500MG",
  },
  {
    sku: "23802",
    name: "ZITHROMAX SUSP 200MG/5ML 15ML",
  },
  {
    sku: "23804",
    name: "ZITHROMAX TAB",
  },
  {
    sku: "23801",
    name: "ZMOX 250MG",
  },
  {
    sku: "23799",
    name: "ZMOX 500MG",
  },
  {
    sku: "23800",
    name: "ZMOX ORAL 125MG/5ML 60ML",
  },
  {
    sku: "23807",
    name: "ZMOX ORAL 250MG/5ML 60ML",
  },
  {
    sku: "23805",
    name: "ZOCOL 100MG",
  },
  {
    sku: "33627",
    name: "ZOCOL 150",
  },
  {
    sku: "45886",
    name: "ZOCOR 20MG",
  },
  {
    sku: "44027",
    name: "ZOCOR 40MG",
  },
  {
    sku: "14916",
    name: "ZOLADEX DEPOT 3.6MG",
  },
  {
    sku: "14914",
    name: "ZOLADEX LA 10.8MG",
  },
  {
    sku: "17509",
    name: "ZOLOFT 50MG",
  },
  {
    sku: "18144",
    name: "ZOLPRA GR 40MG",
  },
  {
    sku: "45901",
    name: "ZOLTEROL 100MG SR",
  },
  {
    sku: "17422",
    name: "ZOLTEROL 75MG SR",
  },
  {
    sku: "38586",
    name: "ZONEGRAN 100MG",
  },
  {
    sku: "44785",
    name: "ZOPIM F.C 10MG",
  },
  {
    sku: "44786",
    name: "ZORAX SUSPENSION 200MG/5ML 120ML",
  },
  {
    sku: "44787",
    name: "ZORAXIN 200MG/5ML SUSPENSION 120ML",
  },
  {
    sku: "40446",
    name: "ZOSAAR 50MG",
  },
  {
    sku: "43273",
    name: "ZOSAAR HCT 50/12.5MG",
  },
  {
    sku: "40552",
    name: "ZOVILAM 60'S",
  },
  {
    sku: "38517",
    name: "ZOVIRAX 200MG",
  },
  {
    sku: "16103",
    name: "ZOXAN EYE DROP 0.003 W/V 5ML",
  },
  {
    sku: "46810",
    name: "ZYCORT INJ 100MG 25 VIAL X 5ML",
  },
  {
    sku: "40338",
    name: "ZYDENA 200MG",
  },
  {
    sku: "40340",
    name: "ZYKADIA 150MG",
  },
  {
    sku: "42001",
    name: "ZYLORIC 100MG",
  },
  {
    sku: "44225",
    name: "ZYLORIC 300MG",
  },
  {
    sku: "44636",
    name: "ZYLOVAA 100MG",
  },
  {
    sku: "18053",
    name: "ZYLOVAA 50MG",
  },
  {
    sku: "16977",
    name: "ZYMAR EYE DROPS 5ML",
  },
  {
    sku: "37888",
    name: "ZYMAXID EYE DROP 0.005 2.5ML",
  },
  {
    sku: "14064",
    name: "ZYNOR 10MG",
  },
  {
    sku: "16305",
    name: "ZYNOR 5MG",
  },
  {
    sku: "18778",
    name: "ZYPREXA 10MG",
  },
  {
    sku: "18780",
    name: "ZYPREXA 5MG",
  },
  {
    sku: "18782",
    name: "ZYPREXA ZYDIS 10MG",
  },
  {
    sku: "27167",
    name: "ZYPREXA ZYDIS 5MG",
  },
  {
    sku: "33718",
    name: "ZYRTEC 10MG",
  },
  {
    sku: "33899",
    name: "ZYRTEC ORAL SOLUTION 75ML",
  },
  {
    sku: "33897",
    name: "ZYRTEC-D",
  },
  {
    sku: "18784",
    name: "",
  },
];

export default products;

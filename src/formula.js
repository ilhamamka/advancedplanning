="M"&"."&
RIGHT([Company Code],3)&"."&
RIGHT([Project ID],2)&"."&
RIGHT([Budget Year],2)&"."&
LEFT([Budget/Project Phase],1)&"0"&"0"&"."&
IF([Project Area]="General","000",
IF([Project Area]="Infrastructure","600",
IF([Project Area]="Distribution","700",
IF([Project Area]="Vacant","800",
IF([Project Area]="Others","900",
IF([Project Area]="Process or Liquefaction","1"&LEFT([Process/Liquefaction],2),
IF([Project Area]="Utilities","2"&LEFT(Utilities,2),
IF([Project Area]="Process Building","3"&LEFT([Process Building],2),
IF([Project Area]="Non Process Building","4"&LEFT([Non Process Building],2),
IF([Project Area]="Offsites Facilities","5"&LEFT([Offsites Facilities],2)))))))))))&"."&
IF(Activities="Management","1"&RIGHT(Management,3),
IF(Activities="Engineering and Procurement","2",
IF(Activities="Equipment and Bulk Supply","3",
IF(Activities="Construction and Commissioning","4",
IF(Activities="Installation, Transport and Logistics","5",
IF(Activities="Other Activities","6",
IF(Activities="General Activities","7")))))))&
IF(Activities="Other Activities","000",
IF(Activities="General Activities","000",
IF([Engineering and Procurement]="Engineering","21"&LEFT(Engineering,1),
IF([Engineering and Procurement]="Procurement","220",
IF([Equipment and Bulk Supply]="Equipment","31"&LEFT(Equipment,1),
IF([Equipment and Bulk Supply]="Bulk","32"&LEFT(Bulk,1),
IF([Equipment and Bulk Supply]="Spare Parts","330",
IF([Construction and Commissioning]="Onshore Construction","41"&LEFT([Onshore Construction],1),
IF([Construction and Commissioning]="At Shore Construction","41"&LEFT([Atshore Construction],1),
IF([Construction and Commissioning]="Inshore Construction","41"&LEFT([Inshore Construction],1),
IF([Construction and Commissioning]="Offshore Construction","41"&LEFT([Offshore Construction],1),
IF([Installation, Transportation and Logistics]="Land Based Installation","51"&LEFT([Land Based Installation],1),
IF([Installation, Transportation and Logistics]="Marine Operations","52"&LEFT([Marine Operations],1),
IF([Installation, Transportation and Logistics]="Logistics","53"&LEFT(Logistics,1)
))))))))))))))
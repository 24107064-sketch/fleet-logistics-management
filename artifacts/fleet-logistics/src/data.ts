export type VehicleStatus='Available'|'In Transit'|'Maintenance'|'Assigned / Idle';
export type DriverStatus='Available'|'Assigned'|'Off Duty'|'On Leave';
export type ShipmentStatus='Pending'|'Assigned'|'In Transit'|'Delivered'|'Delayed'|'Cancelled';
export type Vehicle={id:string;registration:string;type:string;make:string;model:string;capacity:number;unit:string;driverId:string;status:VehicleStatus;serviceDate:string;notes:string};
export type Driver={id:string;name:string;phone:string;license:string;expiry:string;vehicleId:string;status:DriverStatus;notes:string};
export type Shipment={id:string;customer:string;origin:string;destination:string;description:string;weight:number;unit:string;vehicleId:string;driverId:string;created:string;eta:string;deliveredAt:string;priority:string;status:ShipmentStatus;notes:string};
export type RouteRecord={id:string;origin:string;destination:string;vehicleId:string;driverId:string;distance:number;duration:string;shipmentIds:string[];departure:string;arrival:string;status:string};
export type Activity={id:string;time:string;type:string;description:string;entity:string;operator:string;severity:string};
const baseVehicles:Vehicle[]=[
{id:'veh-01',registration:'MH01AB1234',type:'Truck',make:'Tata',model:'407',capacity:2.5,unit:'tonnes',driverId:'drv-01',status:'In Transit',serviceDate:'2025-03-12',notes:'Route-ready; annual inspection current.'},
{id:'veh-02',registration:'MH12CD5678',type:'Mini Truck',make:'Ashok Leyland',model:'Dost',capacity:1.5,unit:'tonnes',driverId:'drv-03',status:'Available',serviceDate:'2025-02-28',notes:''},
{id:'veh-03',registration:'MH04EF9012',type:'Van',make:'Tata',model:'Winger',capacity:1,unit:'tonnes',driverId:'drv-02',status:'Available',serviceDate:'2025-01-19',notes:'Refrigerated cargo fitout.'},
{id:'veh-04',registration:'MH03GH3456',type:'Container Truck',make:'BharatBenz',model:'1923C',capacity:12,unit:'tonnes',driverId:'drv-05',status:'In Transit',serviceDate:'2025-02-03',notes:''},
{id:'veh-05',registration:'MH15JK7890',type:'Truck',make:'Eicher',model:'Pro 2059',capacity:5,unit:'tonnes',driverId:'drv-04',status:'Available',serviceDate:'2025-03-05',notes:''},
{id:'veh-06',registration:'MH02LM2345',type:'Truck',make:'Tata',model:'LPT 709',capacity:3.5,unit:'tonnes',driverId:'drv-06',status:'Maintenance',serviceDate:'2025-04-10',notes:'Brake inspection in progress.'},
{id:'veh-07',registration:'MH14NP6781',type:'Tempo',make:'Mahindra',model:'Jeeto',capacity:0.7,unit:'tonnes',driverId:'drv-07',status:'Assigned / Idle',serviceDate:'2025-02-17',notes:''},
{id:'veh-08',registration:'MH09QR4520',type:'Mini Truck',make:'Tata',model:'Ace Gold',capacity:0.75,unit:'tonnes',driverId:'drv-08',status:'Available',serviceDate:'2025-01-30',notes:''},
{id:'veh-09',registration:'MH05ST8093',type:'Container Truck',make:'Ashok Leyland',model:'Ecomet 1615',capacity:8,unit:'tonnes',driverId:'drv-09',status:'In Transit',serviceDate:'2025-03-22',notes:''},
{id:'veh-10',registration:'MH11UV2674',type:'Van',make:'Force',model:'Traveller 3050',capacity:1.2,unit:'tonnes',driverId:'drv-10',status:'Available',serviceDate:'2025-02-11',notes:''},
{id:'veh-11',registration:'MH08WX9316',type:'Truck',make:'Eicher',model:'Pro 3015',capacity:7,unit:'tonnes',driverId:'',status:'Maintenance',serviceDate:'2025-04-01',notes:'Scheduled tire replacement.'},
{id:'veh-12',registration:'MH13YZ7412',type:'Tempo',make:'Piaggio',model:'Ape Xtra',capacity:0.6,unit:'tonnes',driverId:'',status:'Assigned / Idle',serviceDate:'2025-02-20',notes:''},
{id:'veh-13',registration:'MH06AA9087',type:'Truck',make:'Tata',model:'407 Gold',capacity:2.5,unit:'tonnes',driverId:'',status:'Available',serviceDate:'2025-03-08',notes:''},
{id:'veh-14',registration:'MH10BC1543',type:'Van',make:'Tata',model:'Intra V30',capacity:1.1,unit:'tonnes',driverId:'',status:'In Transit',serviceDate:'2025-01-28',notes:''}
];
const baseDrivers:Driver[]=[
['drv-01','Aarav Sharma','+91 90000 12041','MH-LIC-284071','2027-04-18','veh-01','Assigned'],
['drv-02','Priya Deshmukh','+91 90000 12052','MH-LIC-319520','2026-11-03','veh-03','Assigned'],
['drv-03','Rohan Patil','+91 90000 12063','MH-LIC-274830','2028-02-26','veh-02','Available'],
['drv-04','Ananya Rao','+91 90000 12074','MH-LIC-405172','2027-07-12','veh-05','Available'],
['drv-05','Kabir Shah','+91 90000 12085','MH-LIC-228916','2026-09-21','veh-04','Assigned'],
['drv-06','Dev Mehta','+91 90000 12096','MH-LIC-390245','2027-12-14','veh-06','Off Duty'],
['drv-07','Neha Kulkarni','+91 90000 12107','MH-LIC-315672','2026-08-09','veh-07','Available'],
['drv-08','Ishaan Verma','+91 90000 12118','MH-LIC-441038','2028-01-30','veh-08','Available'],
['drv-09','Sana Khan','+91 90000 12129','MH-LIC-237694','2027-03-06','veh-09','Assigned'],
['drv-10','Aditya Joshi','+91 90000 12130','MH-LIC-362815','2026-12-19','veh-10','Available'],
['drv-11','Mira Nair','+91 90000 12141','MH-LIC-278451','2027-10-15','','On Leave'],
['drv-12','Vihaan Desai','+91 90000 12152','MH-LIC-329706','2028-05-02','','Available']
].map(([id,name,phone,license,expiry,vehicleId,status])=>({id,name,phone,license,expiry,vehicleId,status:status as DriverStatus,notes:''}));
const extraVehicleStatuses:VehicleStatus[]=[
 ...Array.from({length:80},()=> 'Available' as VehicleStatus),
 ...Array.from({length:20},()=> 'In Transit' as VehicleStatus),
 ...Array.from({length:8},()=> 'Maintenance' as VehicleStatus),
 ...Array.from({length:6},()=> 'Assigned / Idle' as VehicleStatus)
];
const vehicleTypes=['Truck','Mini Truck','Van','Tempo','Container Truck'];
const generatedVehicles:Vehicle[]=extraVehicleStatuses.map((status,index)=>({
 id:`veh-${String(index+15).padStart(2,'0')}`,
 registration:`MH${String(index%28+1).padStart(2,'0')}${String.fromCharCode(65+Math.floor(index/26)%26)}${String.fromCharCode(65+index%26)}${String(1000+index).slice(-4)}`,
 type:vehicleTypes[index%vehicleTypes.length],make:['Tata','Ashok Leyland','Eicher','BharatBenz','Mahindra'][index%5],
 model:['407 Gold','Dost+','Pro 2059','Winger','Ape Xtra'][index%5],capacity:[.7,1,1.5,2.5,5,8][index%6],
 unit:'tonnes',driverId:'',status,serviceDate:`2025-03-${String(index%28+1).padStart(2,'0')}`,
 notes:'Illustrative fleet record.'
}));
const driverNames=['Milan Rao','Tara Iyer','Arjun Bhat','Kavya Menon','Ritesh Pawar','Nisha Sethi','Omkar Kale','Farah Qureshi','Siddharth Bose','Leela Naidu','Karan Gill','Aditi Nambiar'];
const extraDriverStatuses:DriverStatus[]=[
 ...Array.from({length:32},()=> 'Available' as DriverStatus),
 ...Array.from({length:17},()=> 'Assigned' as DriverStatus),
 ...Array.from({length:3},()=> 'Off Duty' as DriverStatus)
];
const generatedDrivers:Driver[]=extraDriverStatuses.map((status,index)=>{
 const driverNumber=index+13;
 const vehicleIndex=status==='Assigned'?80+(index-32): -1;
 return {
  id:`drv-${String(driverNumber).padStart(2,'0')}`,
  name:`${driverNames[index%driverNames.length]} ${String(Math.floor(index/driverNames.length)+1).padStart(2,'0')}`,
  phone:`+91 90000 ${String(12200+index)}`,
  license:`MH-LIC-${String(510000+index)}`,
  expiry:`202${6+index%3}-0${index%9+1}-${String(index%27+1).padStart(2,'0')}`,
  vehicleId:vehicleIndex>=0?`veh-${String(vehicleIndex+15).padStart(2,'0')}`:'',
  status,notes:'Fictional sample operator.'
 };
});
const assignedDriverByVehicle=new Map(generatedDrivers.filter(d=>d.vehicleId).map(d=>[d.vehicleId,d.id]));
export const vehicles:Vehicle[]=[...baseVehicles,...generatedVehicles.map(v=>({...v,driverId:assignedDriverByVehicle.get(v.id)||''}))];
export const drivers:Driver[]=[...baseDrivers,...generatedDrivers];
export const demoDate='2025-04-16';
const baseShipments:Shipment[]=[
['SHP-2401','Acme Industries','Mumbai','Pune','Precision machine components',820,'kg','veh-01','drv-01','2025-04-16','2025-04-17T14:30','High','In Transit'],
['SHP-2402','Meridian Retail','Pune','Nashik','Seasonal retail stock',1.2,'tonnes','veh-02','drv-03','2025-04-15','2025-04-16T11:45','Normal','Delivered'],
['SHP-2403','Northstar Supply','Mumbai','Surat','Industrial fasteners',640,'kg','','','2025-04-16','2025-04-18T18:15','Normal','Pending'],
['SHP-2404','Vertex Manufacturing','Thane','Nagpur','Assembly line tooling',4.4,'tonnes','veh-04','drv-05','2025-04-15','2025-04-17T21:00','Urgent','In Transit'],
['SHP-2405','Urban Market','Nashik','Mumbai','Fresh produce crates',950,'kg','veh-05','drv-04','2025-04-15','2025-04-16T10:20','High','Delivered'],
['SHP-2406','Summit Logistics','Mumbai','Ahmedabad','Packaging materials',2.1,'tonnes','veh-09','drv-09','2025-04-14','2025-04-17T19:30','Urgent','Delayed'],
['SHP-2407','Aster Pharma','Pune','Mumbai','Temperature-controlled cartons',520,'kg','veh-03','drv-02','2025-04-16','2025-04-17T09:00','Urgent','Assigned'],
['SHP-2408','Cedar Home','Surat','Mumbai','Home furnishings',1.8,'tonnes','veh-14','','2025-04-16','2025-04-18T16:45','Normal','In Transit'],
['SHP-2409','Bluegrain Foods','Nashik','Pune','Dry goods pallets',3.2,'tonnes','','','2025-04-16','2025-04-19T13:00','Normal','Pending'],
['SHP-2410','Kinetic Works','Mumbai','Kolhapur','Motor assemblies',740,'kg','veh-07','drv-07','2025-04-15','2025-04-17T12:00','High','Assigned'],
['SHP-2411','Field & Foundry','Pune','Aurangabad','Agricultural equipment',2.7,'tonnes','','','2025-04-14','2025-04-18T17:30','Normal','Cancelled'],
['SHP-2412','Meridian Retail','Ahmedabad','Mumbai','Store replenishment',1.4,'tonnes','veh-10','drv-10','2025-04-13','2025-04-16T20:10','High','Delivered'],
['SHP-2413','Northstar Supply','Mumbai','Indore','Electrical fittings',860,'kg','veh-01','drv-01','2025-04-16','2025-04-19T16:30','Normal','In Transit'],
['SHP-2414','Aster Pharma','Thane','Pune','Clinical supplies',410,'kg','','','2025-04-16','2025-04-18T10:15','Urgent','Pending']
].map(([id,customer,origin,destination,description,weight,unit,vehicleId,driverId,created,eta,priority,status])=>({id:String(id),customer:String(customer),origin:String(origin),destination:String(destination),description:String(description),weight:Number(weight),unit:String(unit),vehicleId:String(vehicleId),driverId:String(driverId),created:String(created),eta:String(eta),deliveredAt:status==='Delivered'?demoDate:'',priority:String(priority),status:status as ShipmentStatus,notes:''}));
const cityPairs=[['Mumbai','Pune'],['Mumbai','Surat'],['Pune','Nashik'],['Mumbai','Ahmedabad'],['Thane','Nagpur'],['Nashik','Mumbai'],['Pune','Kolhapur'],['Surat','Mumbai']];
const customers=['Meridian Retail','Northstar Supply','Vertex Manufacturing','Aster Pharma','Cedar Home','Bluegrain Foods','Kinetic Works','Summit Logistics'];
const transitVehicles=vehicles.filter(v=>v.status==='In Transit');
const assignedDrivers=drivers.filter(d=>d.status==='Assigned');
const generatedInTransit:Shipment[]=Array.from({length:38},(_,index)=>{
 const [origin,destination]=cityPairs[index%cityPairs.length];
 return {id:`SHP-${2415+index}`,customer:customers[index%customers.length],origin,destination,description:'Consolidated freight load',weight:480+(index*137)%3600,unit:index%2?'kg':'tonnes',vehicleId:transitVehicles[index%transitVehicles.length]?.id||'',driverId:assignedDrivers[index%assignedDrivers.length]?.id||'',created:demoDate,eta:`2025-04-${String(17+index%3).padStart(2,'0')}T${String(8+index%11).padStart(2,'0')}:30`,deliveredAt:'',priority:index%9===0?'Urgent':index%3===0?'High':'Normal',status:'In Transit',notes:'Illustrative demo manifest.'};
});
const generatedDelivered:Shipment[]=Array.from({length:24},(_,index)=>{
 const [origin,destination]=cityPairs[(index+3)%cityPairs.length];
 return {id:`SHP-${2453+index}`,customer:customers[(index+2)%customers.length],origin,destination,description:'Completed distribution load',weight:350+(index*113)%2400,unit:index%2?'kg':'tonnes',vehicleId:vehicles[index%vehicles.length].id,driverId:drivers[index%drivers.length].id,created:demoDate,eta:`${demoDate}T${String(9+index%10).padStart(2,'0')}:15`,deliveredAt:demoDate,priority:index%4===0?'High':'Normal',status:'Delivered',notes:'Illustrative completed delivery.'};
});
export const shipments:Shipment[]=[...baseShipments,...generatedInTransit,...generatedDelivered];
export const routes:RouteRecord[]=[
{id:'RTE-01',origin:'Mumbai',destination:'Pune',vehicleId:'veh-01',driverId:'drv-01',distance:148,duration:'3h 20m',shipmentIds:['SHP-2401','SHP-2413'],departure:'08:15',arrival:'11:35',status:'In Transit'},
{id:'RTE-02',origin:'Mumbai',destination:'Surat',vehicleId:'',driverId:'',distance:285,duration:'5h 40m',shipmentIds:['SHP-2403'],departure:'12:00',arrival:'17:40',status:'Planned'},
{id:'RTE-03',origin:'Pune',destination:'Nashik',vehicleId:'veh-02',driverId:'drv-03',distance:211,duration:'4h 10m',shipmentIds:['SHP-2402'],departure:'06:30',arrival:'10:40',status:'Complete'},
{id:'RTE-04',origin:'Mumbai',destination:'Ahmedabad',vehicleId:'veh-09',driverId:'drv-09',distance:524,duration:'9h 15m',shipmentIds:['SHP-2406'],departure:'07:00',arrival:'16:15',status:'Delayed'},
{id:'RTE-05',origin:'Thane',destination:'Nagpur',vehicleId:'veh-04',driverId:'drv-05',distance:782,duration:'13h 30m',shipmentIds:['SHP-2404'],departure:'05:30',arrival:'19:00',status:'In Transit'},
{id:'RTE-06',origin:'Nashik',destination:'Mumbai',vehicleId:'veh-05',driverId:'drv-04',distance:166,duration:'3h 45m',shipmentIds:['SHP-2405'],departure:'07:20',arrival:'11:05',status:'Complete'}
];
export const initialActivity:Activity[]=[
{id:'act-01',time:'2025-04-16T09:42:00',type:'Shipment updated',description:'SHP-2406 flagged as delayed after a route disruption.',entity:'SHP-2406',operator:'Operations Admin',severity:'Warning'},
{id:'act-02',time:'2025-04-16T09:15:00',type:'Vehicle assigned',description:'MH01AB1234 assigned to shipment SHP-2401.',entity:'MH01AB1234',operator:'Operations Admin',severity:'Info'},
{id:'act-03',time:'2025-04-16T08:50:00',type:'Delivery completed',description:'SHP-2402 marked delivered in Nashik.',entity:'SHP-2402',operator:'Operations Admin',severity:'Success'},
{id:'act-04',time:'2025-04-15T17:22:00',type:'Maintenance',description:'MH02LM2345 marked for brake inspection.',entity:'MH02LM2345',operator:'Operations Admin',severity:'Warning'},
{id:'act-05',time:'2025-04-15T14:05:00',type:'Driver created',description:'Priya Deshmukh added to the driver directory.',entity:'drv-02',operator:'Operations Admin',severity:'Info'},
{id:'act-06',time:'2025-04-15T10:18:00',type:'Shipment created',description:'SHP-2407 created for Aster Pharma.',entity:'SHP-2407',operator:'Operations Admin',severity:'Info'},
{id:'act-07',time:'2025-04-14T16:40:00',type:'Vehicle created',description:'Fleet asset MH13YZ7412 registered.',entity:'MH13YZ7412',operator:'Operations Admin',severity:'Info'}
];
export const initialNotifications=[
{id:'ntf-1',text:'SHP-2406 has been delayed on the Mumbai–Ahmedabad corridor.',type:'Warning',read:false},
{id:'ntf-2',text:'MH02LM2345 requires a brake inspection.',type:'Maintenance',read:false},
{id:'ntf-3',text:'SHP-2402 has been delivered to Nashik.',type:'Delivered',read:true},
{id:'ntf-4',text:'Driver Priya Deshmukh was assigned to MH04EF9012.',type:'Assignment',read:true}
];
